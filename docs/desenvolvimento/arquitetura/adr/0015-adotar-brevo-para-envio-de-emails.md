<h1 align="center">ADR-0015 — Adotar Brevo para envio de e-mails transacionais</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 24/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos, Lucas Gonçalves Cordeiro |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 24/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

O sistema **NotificaSaúde** necessita enviar e-mails transacionais para suportar funcionalidades do domínio, tais como:

- notificações de eventos relevantes no sistema
- comunicação entre áreas responsáveis por investigação de incidentes
- envio de alertas e atualizações de status
- possíveis fluxos futuros como redefinição de senha e confirmação de conta

Inicialmente, o envio de e-mails poderia ser implementado diretamente via **SMTP tradicional**, porém essa abordagem apresenta limitações importantes:

- baixa confiabilidade de entrega
- maior probabilidade de mensagens classificadas como spam
- falta de métricas e rastreamento
- dificuldade de escalar conforme o volume de notificações aumenta

Portanto, torna-se necessário adotar um **provedor especializado de e-mail transacional** que forneça melhor entregabilidade, observabilidade e facilidade de integração com o backend em Node.js.

Após avaliação de alternativas (Mailgun, Mailjet, Amazon SES e Brevo), considerou-se que o **Brevo** oferece:

- plano gratuito permanente com **300 e-mails por dia**
- suporte a **SMTP e API REST**
- integração simples com aplicações Node.js
- painel de métricas de entrega
- configuração relativamente simples para projetos acadêmicos

Além disso, a arquitetura do sistema já prevê um componente dedicado para envio de e-mails:

`Email Notification Component`

Este componente será responsável por encapsular a comunicação com o provedor de e-mail.

## Decisão

Adotar o **Brevo** como provedor de envio de e-mails transacionais para o backend do sistema NotificaSaúde.

A integração será realizada inicialmente via **SMTP do Brevo**, podendo evoluir futuramente para uso da **API REST oficial** caso seja necessário suporte avançado (templates, tracking ou webhooks).

Será criado um serviço dedicado responsável pelo envio de e-mails:

`src/shared/services/email.service.ts`

Este serviço atuará como uma **camada de abstração**, permitindo que os módulos da aplicação utilizem envio de e-mail sem depender diretamente da implementação do provedor.

Fluxo arquitetural:

```
Service de domínio
↓
EmailService
↓
Brevo SMTP / API
↓
Provedor de e-mail externo
```

Essa abordagem mantém o sistema desacoplado do provedor específico, permitindo substituição futura caso necessário.

## Consequências

### Positivas

* **Alta entregabilidade:** Brevo utiliza infraestrutura dedicada para envio de e-mails transacionais.
* **Plano gratuito adequado:** 300 e-mails por dia são suficientes para o volume esperado no projeto.
* **Integração simples:** Pode ser utilizado diretamente com bibliotecas como `nodemailer`.
* **Observabilidade:** Painel com métricas básicas de envio e entrega.
* **Escalabilidade:** Possibilidade de migrar para planos pagos caso o volume aumente.
* **Desacoplamento arquitetural:** O uso de `EmailService` evita dependência direta do Brevo no restante do sistema.
* **Compatibilidade com a arquitetura existente:** Integra-se ao **Email Notification Component** definido no modelo C4 do sistema.

### Negativas

* **Dependência de serviço externo:** O envio de e-mails passa a depender da disponibilidade do Brevo.
* **Limitações do plano gratuito:** O volume de envio diário é limitado.
* **Configuração inicial necessária:** É necessário configurar domínio e registros DNS (SPF/DKIM) para melhor reputação de envio.

Apesar dessas limitações, o Brevo atende plenamente às necessidades atuais do projeto e pode ser substituído futuramente sem impacto significativo devido ao uso da camada de abstração `EmailService`.
