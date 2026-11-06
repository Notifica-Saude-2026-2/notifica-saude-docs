<h1 align="center">ADR-0019 — Adotar porta MailerService com factory de providers para envio de e-mail</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 20/05/2026 | Registro da decisão de arquitetura. | Fabio Ramos, Lucas Gonçalves Cordeiro |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 20/05/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

A issue **#90 (US-2.5)** introduziu no backend o fluxo de **encaminhamento de notificações** para o setor responsável. O Critério de Aceite CA01 exige comunicar o(s) responsável(is) do setor selecionado — comunicação que, em produção, será feita por e-mail.

A **ADR-0015** já definiu o **Brevo** como provedor escolhido para envio de e-mails transacionais. No entanto, a implementação do envio em si ficou no escopo da **issue #89** (Configurar serviço de envio de e-mails do sistema), que ainda não foi entregue.

Para que a US-2.5 pudesse ser entregue independentemente de #89, foi criado um stub `NotificadorEncaminhamento` no módulo `src/modules/encaminhamento/`. Esse stub funciona, mas levanta uma decisão arquitetural maior: **a aplicação não pode ficar acoplada ao Brevo (nem a qualquer provider específico)**. Razões:

- A infraestrutura acadêmica pode mudar — ex.: o plano gratuito do Brevo (300 e-mails/dia) pode não atender o piloto, e a equipe pode precisar trocar para **SMTP genérico do hospital**, **SendGrid**, **Resend** ou **Amazon SES**.
- Os testes de integração não devem depender de rede ou credenciais — precisam de um adapter **mock/noop**.
- Outros casos-de-uso futuros (recuperação de senha, alertas de prazo, confirmações de classificação) precisarão do mesmo canal de envio sem reimplementar a integração com o provider.
- Trocar de provider deve ser **uma mudança de configuração**, não um refactor que afete módulos de domínio.

A **ADR-0015 já antecipou** o uso de um `EmailService` como camada de abstração — esta ADR formaliza e padroniza essa abstração para todo o backend.

## Decisão

Adotar uma **porta única `MailerService`** com **factory de providers** controlada por variável de ambiente.

### Estrutura

```
src/shared/mailer/
├── mailer.types.ts      ← interface MailerService + tipo MailMessage
├── mailer.noop.ts       ← NoopMailer (default em dev/test)
├── mailer.factory.ts    ← createMailer() resolve por MAILER_PROVIDER
└── index.ts             ← re-exports
```

### Interface

```ts
export interface MailMessage {
  to: string[];
  subject: string;
  text: string;
  html?: string;
  from?: string;
  replyTo?: string;
}

export interface MailerService {
  send(message: MailMessage): Promise<void>;
}
```

### Factory

```ts
createMailer(provider?: string): MailerService
// Lê process.env.MAILER_PROVIDER (default "noop")
// Suporta: "noop" | "brevo" | "smtp" | "sendgrid"
```

### Uso em casos-de-uso

Casos-de-uso (ex.: `NotificadorEncaminhamentoEmail`) recebem `MailerService` por **injeção de dependência** no construtor. Nunca importam o provider concreto. O service que orquestra o caso-de-uso recebe a implementação do notificador via construtor — em produção, a factory é executada no boot do módulo; em testes, mocks são injetados.

### Regra de chamada

O envio de e-mail deve ocorrer **após o commit da transação Prisma** que persiste a operação de domínio. Isso garante que uma falha de envio (provider fora do ar, credencial inválida, rate limit) não desfaça a operação principal — apenas registra log de aviso/erro.

### Fluxo arquitetural

```
Service de domínio
  ↓ (commit Prisma)
Notificador de caso-de-uso (ex.: NotificadorEncaminhamentoEmail)
  ↓
MailerService (porta)
  ↓
Adapter concreto (Brevo / SMTP / SendGrid / Noop)
  ↓
Provedor externo
```

## Consequências

### Positivas

- **Troca de provider sem refactor:** basta alterar `MAILER_PROVIDER` no `.env` e implementar o adapter — nenhum módulo de domínio muda.
- **Testes desacoplados:** `NoopMailer` é o default em `.env.test`, eliminando dependências externas.
- **Coerência com ADR-0015:** o Brevo continua sendo o provider escolhido para produção; esta ADR é complementar e mantém o sistema agnóstico.
- **Reuso entre casos-de-uso:** recuperação de senha, alertas e outros fluxos futuros compartilham a mesma porta `MailerService`, sem duplicar integração com o provider.
- **Resiliência de domínio:** envio após commit da transação Prisma evita que falha de e-mail desfaça a operação principal.
- **Configuração explícita:** a escolha do provider é declarada em `MAILER_PROVIDER`, tornando o comportamento previsível por ambiente (`.env`, `.env.test`, `.env.production`).

### Negativas

- **Complexidade adicional:** introduz uma camada de abstração (porta + factory + adapters) que precisa ser mantida em paralelo aos providers reais.
- **Resolução em tempo de execução:** erros de configuração (ex.: `MAILER_PROVIDER` inválido ou credenciais ausentes) só aparecem no boot do módulo, não em tempo de compilação.
- **Risco de divergência entre adapters:** cada provider concreto precisa respeitar o contrato `MailerService.send()` — divergências silenciosas (ex.: ignorar `replyTo`) exigem testes de contrato por adapter.
- **Envio pós-commit não é transacional:** uma falha de envio após commit não reverte a operação de domínio; exige política de log/retry para não perder notificações importantes.

Apesar dessas limitações, a porta `MailerService` é o mecanismo mínimo necessário para manter o backend agnóstico ao provedor de e-mail e habilitar a entrega da US-2.5 sem acoplamento ao Brevo.

## Links

- [ADR-0015 — Adotar Brevo para envio de e-mails transacionais](0015-adotar-brevo-para-envio-de-emails.md)
- Issue backend #90 — US-2.5 encaminhamento de notificações
- Issue backend #89 — Configurar serviço de envio de e-mails do sistema
- Issue docs [#4](https://github.com/Notifica-Saude/docs/issues/4) — cópia desta ADR para o repositório oficial
