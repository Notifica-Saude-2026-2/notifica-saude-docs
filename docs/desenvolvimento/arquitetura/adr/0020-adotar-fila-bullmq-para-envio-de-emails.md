<h1 align="center">ADR-0020 — Adotar fila BullMQ + worker dedicado para envio de e-mails</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 21/05/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 21/05/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

O PR #71 (issue #89) entregou a primeira versão funcional do envio de e-mails do backend, com a seguinte arquitetura:

- Porta `MailerService` (ADR-0019) com factory por env (`createMailer()`).
- Adapter concreto `BrevoMailer` (ADR-0015) via SMTP STARTTLS.
- Caso de uso `NotificadorEncaminhamentoEmail` chamado **pós-commit** do encaminhamento, com `try/catch` defensivo (falha de e-mail não desfaz operação de domínio).

A implementação é **síncrona**: o request HTTP do encaminhamento aguarda o envio SMTP terminar antes de responder. Métricas reais coletadas no smoke local mostraram `latency_ms` entre 1.492ms e 8.525ms só para o envio Brevo. Esse custo cresce linearmente com o número de destinatários e fica refém de qualquer instabilidade do provedor.

Próximos consumers do `MailerService` já estão mapeados na arquitetura:

- **US-3.2 — Recuperação de senha** (NSP/Gestor/Administrador) — gap registrado em [Matriz RBAC](../../../requisitos/matriz-rbac.md).
- **US-2.3 CA05 — Alertas de prazo** de classificação (4 / 7 / 10 dias por grau de dano), via job/cron futuro.
- **Confirmações ao notificante identificado** quando classificação concluir.

Limitações estruturais que vão piorar com a chegada desses consumers:

1. **Latência no caller** — envio síncrono empurra SMTP para o path do request.
2. **Sem retry** — falha transiente do Brevo perde o e-mail; só sobra log.
3. **Sem rate limit aplicado** — Brevo free permite 300/dia; ultrapassar derruba todos os envios até reset.
4. **Sem idempotência** — retry HTTP do cliente reenvia o mesmo e-mail (o caso atual de encaminhamento é protegido por `notificacao_id @unique`, mas recuperação de senha e alertas não terão essa proteção).
5. **Sem isolamento de falha** — adapter trava o processo da API se SMTP pendurar (default `nodemailer` = 60s).
6. **Sem observabilidade de entrega** — webhooks Brevo (bounce/open/click) hoje não têm destino.
7. **Sem backpressure** — pico de encaminhamentos = pico de conexões SMTP em paralelo.

A infraestrutura do projeto já tem **todos os ativos** para resolver esses pontos sem investir em serviço externo:

- `ioredis` instalado e em uso (sessões, rate-limit de login).
- Serviço `redis` no `docker-compose.yml` com healthcheck.
- `pino` estruturado + `prom-client` (`metrics.middleware.ts`).
- `MailerService` minimalista (`send(MailMessage)`), pronta para ser envelopada.

## Decisão

Adotar **BullMQ** (fila Redis-backed) com adapter `QueuedMailer implements MailerService`, plugado via factory. O domínio continua chamando `mailer.send(message)`; quem entrega no SMTP é um **worker** dedicado consumindo a queue. Nenhum consumer existente ou futuro precisa mudar — a substituição é decisão de boot (`MAILER_PROVIDER=queued`).

Componentes:

- **`QueuedMailer`** (porta para o domínio) — recebe `MailMessage`, calcula `jobId` determinístico (`sha1(to + subject + correlation_id)`), enfileira em `mail`.
- **Worker** (`src/worker.ts`, processo separado) — injeta o adapter real (`BrevoMailer`), aplica retry com backoff exponencial, rate limit (`max: 250, duration: 86_400_000`), dead-letter (`removeOnFail: false`).
- **Bull-Board** (`/admin/queues`) gated por RBAC `ADMINISTRADOR` para inspeção manual.
- **Fallback configurável** (`MAILER_QUEUE_FALLBACK=sync|noop|fail`) — se Redis estiver indisponível na hora de enfileirar, política de degradação é explícita, nunca implícita.

Configuração de retry default:

```ts
{
  attempts: 5,
  backoff: { type: "exponential", delay: 2000 },
  removeOnComplete: { age: 86_400, count: 1000 },
  removeOnFail: false,
}
```

Total de tempo até DLQ ≈ 60 segundos para falhas transientes. Falhas terminais (autenticação SMTP, sender não verificado, domínio bloqueado) vão direto para `mail-dlq` e requerem ação humana.

Estrutura de arquivos prevista:

```
src/shared/mailer/
├── mailer.types.ts           (porta — já existe)
├── mailer.brevo.ts           (adapter SMTP — já existe)
├── mailer.noop.ts            (default dev/test — já existe)
├── mailer.queue.ts           (novo — QueuedMailer)
├── mailer.queue.job.ts       (novo — MailJob + buildJobId)
├── mailer.queue.config.ts    (novo — config BullMQ)
├── mailer.factory.ts         (atualizado — branch "queued")
└── index.ts                  (atualizado)

src/worker.ts                 (novo — entrypoint do worker)
src/modules/admin/bull-board.routes.ts  (novo — UI gated)
```

## Consequências

### Positivas

- **Resposta HTTP do encaminhamento volta a sub-200ms** — SMTP sai do path do request.
- **Retry automático** com backoff exponencial cobre falhas transientes do Brevo sem código adicional.
- **Dead-letter explícito** isola falhas terminais para inspeção, em vez de gerar log silencioso e e-mail perdido.
- **Rate limit no worker** respeita os 300/dia do Brevo free com margem de segurança.
- **Idempotência via `jobId` determinístico** — retry HTTP do cliente não duplica envio. Cobre US-3.2 e demais consumers futuros, que não têm a unicidade que `notificacao_id @unique` provê hoje.
- **Worker escalável horizontal** sem mexer na API (1+ pods independentes).
- **Preparação para webhooks Brevo** (fase 2, fora deste escopo) — `EmailLog` populado via listener da queue.
- **Multi-consumer sem refactor** — `NotificadorEncaminhamentoEmail`, futuro `EnviadorEmailRecuperacaoSenha`, alertas de prazo: todos continuam chamando `mailer.send(message)`.
- **Multi-tenant preparado** — `metadata.tenant_id` no payload abre caminho para sender custom / sub-account Brevo por tenant.

### Negativas

- **Worker = 2º processo no deploy** — `docker-compose.yml` ganha serviço novo, k8s/systemd futuro precisa orquestrar dois containers.
- **Redis vira dependência crítica** para envio — mitigado por fallback configurável (`sync`, `noop`, `fail`), mas o caminho feliz exige Redis saudável.
- **Custo cognitivo** — time precisa entender BullMQ, Bull-Board, conceitos de retry/DLQ.
- **Persistência de log fica para fase 2** — Redis tem TTL; auditoria longa (`EmailLog` no Postgres + webhooks Brevo) entra em issue separada.
- **Mais um componente em observabilidade** — métricas `mail_jobs_total{status}`, `mail_queue_waiting`, `mail_job_duration_seconds` precisam de dashboard.

## Alternativas consideradas

- **Manter síncrono** — o que está em produção via PR #71. Atende ao volume atual (projeto acadêmico, dezenas/dia), mas trava na primeira US que precisar de retry ou no primeiro pico real. Recomendação: ativar BullMQ **quando** uma das seguintes condições for atingida — latência média do encaminhamento ≥ 1s, primeira issue documentada de "e-mail não chegou em produção", volume diário ≥ 50 envios, ou início da implementação de recuperação de senha (US-3.2). Não otimizar prematuramente — manter PR #71 enquanto o uso for baixo.
- **`setImmediate` / `process.nextTick`** — assíncrono "barato". Perde resiliência a crash (job some se processo cair entre o `nextTick` e o envio). Sem retry, sem DLQ, sem rate limit. Rejeitada.
- **AWS SQS / Kafka / RabbitMQ** — robustez de sobra, mas adicionam serviço externo + custo + lock-in. Projeto acadêmico não justifica. Redis já está pago, no compose, healthchecked.
- **Cron job polando tabela `outbox` no Postgres** — pattern Outbox clássico. Funciona, mas reinventa BullMQ (retry, locking distribuído, ack) com SQL artesanal. Rejeitada por overhead de manutenção.
- **`p-queue` em memória** — não persiste, perde jobs em restart, não escala entre pods. Rejeitada.

BullMQ vence porque o Redis já está disponível, a API é minimalista, retry/DLQ/rate-limit são nativos, e Bull-Board cobre inspeção visual sem código próprio.

## Migração / rollout

1. Merge do PR de implementação com `MAILER_PROVIDER=brevo` **mantido** em prod — `QueuedMailer` coexiste, inerte.
2. Dev/homolog troca para `MAILER_PROVIDER=queued` + sobe `worker` no compose.
3. Smoke de 2 semanas em homolog (volume baixo cobre).
4. Prod flipa env. Worker como service systemd / pod k8s separado.
5. Rollback = voltar env para `brevo`. Jobs em flight perdidos é aceitável — domínio já commitou (mesmo princípio do try/catch defensivo atual).

## Links

- [ADR-0015 — Adotar Brevo para envio de e-mails transacionais](0015-adotar-brevo-para-envio-de-emails.md)
- [ADR-0019 — Adotar porta MailerService com factory de providers](0019-adotar-mailer-service-com-factory-de-providers.md)
- [Issue #89 (backend) — Configurar serviço de envio de e-mails](https://github.com/Notifica-Saude/notifica-saude-backend/issues/89)
- [PR #71 (backend) — Implementação atual síncrona](https://github.com/Notifica-Saude/notifica-saude-backend/pull/71)
- [Issue docs #5](https://github.com/Notifica-Saude/docs/issues/5) — cópia desta ADR para o repositório oficial
- [Issue #116 (Notifica-Saude/issues) — Autenticar domínio institucional UFMS](https://github.com/Notifica-Saude/issues/issues/116)
- [BullMQ docs](https://docs.bullmq.io/)
- [Bull-Board](https://github.com/felixmosh/bull-board)
