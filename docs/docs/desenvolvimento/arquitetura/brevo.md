<h1 align="center">Brevo</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 18/10/2026 | Criação da página a partir das ADRs 0015, 0019 e 0020 e do documento de implantação do repositório de documentação descontinuado. | Sophya Ribeiro |

O [Brevo](https://www.brevo.com/){ target="_blank" } é o provedor de e-mails transacionais do NotificaSaúde. Ele é usado pelo backend para enviar as comunicações do sistema, como o aviso ao responsável do setor quando uma notificação é encaminhada (US-2.4).

Esta página resume como o Brevo está integrado ao sistema. As decisões completas estão nas ADRs indicadas em cada seção.

## Por que o Brevo

Decisão registrada na [ADR-0015](adr/0015-adotar-brevo-para-envio-de-emails.md). Entre as alternativas avaliadas (Mailgun, Mailjet, Amazon SES e Brevo), o Brevo foi escolhido por oferecer:

- plano gratuito permanente, com **300 e-mails por dia**;
- envio por **SMTP** e por **API REST**;
- integração simples com Node.js (por exemplo, com o `nodemailer`);
- painel com métricas de envio e entrega.

A integração é feita pelo **relay SMTP do Brevo** (`smtp-relay.brevo.com`, porta 587, com STARTTLS). A API REST pode ser adotada no futuro, caso sejam necessários templates, rastreamento ou webhooks.

## Como o backend envia e-mails

O backend não depende diretamente do Brevo. O envio passa por uma porta única, o `MailerService` ([ADR-0019](adr/0019-adotar-mailer-service-com-factory-de-providers.md)), e o provedor concreto é escolhido por configuração:

```
Service de domínio
  ↓ (commit da transação Prisma)
Notificador do caso de uso (ex.: NotificadorEncaminhamentoEmail)
  ↓
MailerService (porta)
  ↓
Adapter concreto (Brevo / Noop / fila)
  ↓
Brevo (SMTP)
```

- O envio acontece **depois do commit** da operação de domínio: se o e-mail falhar, a operação principal não é desfeita, e a falha fica registrada em log.
- Trocar de provedor é uma mudança de configuração: basta implementar o adapter e alterar a variável `MAILER_PROVIDER`.
- Nos testes, o adapter `noop` é o padrão, para que nenhum teste dependa de rede ou de credenciais.

### Envio assíncrono com fila

A [ADR-0020](adr/0020-adotar-fila-bullmq-para-envio-de-emails.md) define o envio por fila **BullMQ** (sobre o Redis já usado pelo sistema), com um **worker** dedicado:

- a requisição HTTP não espera o envio SMTP terminar;
- falhas transitórias são reenviadas automaticamente, com até 5 tentativas e intervalo crescente;
- falhas definitivas (como autenticação SMTP ou remetente não verificado) vão para uma fila de falhas (`mail-dlq`), para análise manual;
- o worker limita o envio a **250 e-mails por dia**, com margem em relação ao limite do plano gratuito;
- cada e-mail tem um identificador determinístico, para que uma nova tentativa da mesma requisição não gere e-mail duplicado.

## Configuração

O provedor é definido pela variável `MAILER_PROVIDER`, no arquivo `.env` do backend:

| Valor | Comportamento |
| --- | --- |
| `noop` | Não envia e-mails. É o padrão em desenvolvimento e testes. |
| `brevo` | Envia pelo Brevo de forma síncrona, durante a requisição. |
| `queued` | Envia pelo Brevo por meio da fila BullMQ. Exige o Redis e o worker em execução. |

Quando a fila está ativa, a variável `MAILER_QUEUE_FALLBACK` define o que fazer se o Redis estiver indisponível no momento de enfileirar: `sync` (envia de forma síncrona), `noop` (descarta o envio) ou `fail` (retorna erro).

!!! warning "Credenciais"
    As credenciais SMTP do Brevo ficam somente no `.env` de cada ambiente e nunca devem ser publicadas na documentação nem versionadas no repositório.

O passo a passo de execução com Docker está na documentação de implantação.

## Limites e cuidados

- **Volume:** o plano gratuito permite 300 e-mails por dia. Acima disso, os envios param até o limite ser renovado.
- **Dependência externa:** o envio depende da disponibilidade do Brevo; a fila e os reenvios automáticos reduzem esse impacto.
- **Entregabilidade:** para que os e-mails não caiam no spam, o domínio remetente precisa estar autenticado no Brevo, com os registros DNS SPF e DKIM configurados.

## Referências

- [ADR-0015 — Adotar Brevo para envio de e-mails transacionais](adr/0015-adotar-brevo-para-envio-de-emails.md)
- [ADR-0019 — Adotar porta MailerService com factory de providers](adr/0019-adotar-mailer-service-com-factory-de-providers.md)
- [ADR-0020 — Adotar fila BullMQ + worker dedicado para envio de e-mails](adr/0020-adotar-fila-bullmq-para-envio-de-emails.md)
- [Painel do Brevo](https://app.brevo.com/){ target="_blank" }
