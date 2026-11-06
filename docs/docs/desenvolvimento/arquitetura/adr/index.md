<h1 align="center">Registros de Decisões de Arquitetura (ADR)</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 18/10/2026 | Migração das ADRs do repositório de documentação descontinuado para o MkDocs, com a lista de decisões e o modelo de registro. | Sophya Ribeiro |

Os *Architecture Decision Records* (ADRs) registram as decisões arquiteturais do NotificaSaúde: o contexto em que cada decisão foi tomada, a decisão em si e as suas consequências. O formato segue o modelo [descrito por Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions){ target="_blank" }, adotado na [ADR-0001](0001-registro-de-decisoes-de-arquitetura.md).

Decisões descontinuadas ou substituídas continuam disponíveis para contexto histórico e indicam o registro que as substituiu.

!!! info "Status"
    <span class="ns-tag ns-tag--requisitos">Aceita</span> decisão em vigor · <span class="ns-tag ns-tag--metodologia">Substituída</span> decisão trocada por outra ADR · <span class="ns-tag ns-tag--outro">Descontinuada</span> decisão que deixou de valer

## Decisões registradas

| ADR | Decisão | Status | Data |
| --- | --- | :---: | --- |
| [ADR&#8209;0001](0001-registro-de-decisoes-de-arquitetura.md) | Registrar decisões de arquitetura | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 10/03/2026 |
| [ADR&#8209;0002](0002-adotar-aplicacao-web-responsiva.md) | Adotar aplicação web responsiva para o NotificaSaúde | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 11/03/2026 |
| [ADR&#8209;0003](0003-adotar-arquitetura-monolitica.md) | Adotar arquitetura monolítica para o backend do NotificaSaúde | <span class="ns-tag ns-tag--metodologia">Substituída</span> | 11/03/2026 |
| [ADR&#8209;0004](0004-usar-sqlite-na-fase-inicial.md) | Utilizar SQLite na fase inicial do NotificaSaúde | <span class="ns-tag ns-tag--outro">Descontinuada</span> | 11/03/2026 |
| [ADR&#8209;0005](0005-usar-react-typescript-no-frontend.md) | Utilizar React com TypeScript no frontend do NotificaSaúde | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 11/03/2026 |
| [ADR&#8209;0006](0006-adotar-arquitetura-cliente-servidor-rest.md) | Adotar arquitetura cliente-servidor usando REST | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 11/03/2026 |
| [ADR&#8209;0007](0007-adotar-docker-para-deploy.md) | Usar Docker para a implantação | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 12/03/2026 |
| [ADR&#8209;0008](0008-adotar-arquitetura-centralizada.md) | Adotar Arquitetura Centralizada | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 17/03/2026 |
| [ADR&#8209;0009](0009-adotar-multitenancy-com-postgresql.md) | Adotar multi-tenancy com PostgreSQL | <span class="ns-tag ns-tag--outro">Descontinuada</span> | 17/03/2026 |
| [ADR&#8209;0010](0010-adotar-backend-expressjs.md) | Adotar backend com Express.js | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 17/03/2026 |
| [ADR&#8209;0011](0011-adotar-orm-prisma.md) | Adotar ORM Prisma | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 17/03/2026 |
| [ADR&#8209;0012](0012-adotar-swagger.md) | Adotar Swagger para documentação da API | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 17/03/2026 |
| [ADR&#8209;0013](0013-adotar-logger-estruturado-backend.md) | Adotar Logger Estruturado com Pino no Backend | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 23/03/2026 |
| [ADR&#8209;0014](0014-adotar-metricas-sre.md) | Adotar Métricas de DevOps SRE | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 23/03/2026 |
| [ADR&#8209;0015](0015-adotar-brevo-para-envio-de-emails.md) | Adotar Brevo para envio de e-mails transacionais | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 24/03/2026 |
| [ADR&#8209;0016](0016-adotar-multitenancy.md) | Usar arquitetura multi-tenancy | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 26/03/2026 |
| [ADR&#8209;0017](0017-adotar-postgresql-como-sgbd.md) | Usar SGBD PostgreSQL para dados de negócio | <span class="ns-tag ns-tag--metodologia">Substituída</span> | 26/03/2026 |
| [ADR&#8209;0018](0018-adotar-redis-para-dados-de-autenticacao.md) | Usar Redis para armazenar dados de autenticação | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 26/03/2026 |
| [ADR&#8209;0019](0019-adotar-mailer-service-com-factory-de-providers.md) | Adotar porta MailerService com factory de providers para envio de e-mail | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 20/05/2026 |
| [ADR&#8209;0020](0020-adotar-fila-bullmq-para-envio-de-emails.md) | Adotar fila BullMQ + worker dedicado para envio de e-mails | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 21/05/2026 |
| [ADR&#8209;0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md) | Adotar PostgreSQL como SGBD relacional único com suporte a multitenancy | <span class="ns-tag ns-tag--requisitos">Aceita</span> | 02/06/2026 |

## Modelo de ADR

Toda nova decisão deve ser registrada em um novo arquivo nesta pasta, com o próximo número da sequência (ex.: `0022-adotar-<assunto>.md`), seguindo o modelo abaixo. Ao substituir ou descontinuar uma decisão, atualize também o status da ADR anterior, com o link para a nova.

```markdown
<h1 align="center">ADR-NNNN — Título da decisão</h1>

## Status

Aceita | Proposta | Rejeitada | Descontinuada | Substituída por [ADR-NNNN](NNNN-titulo.md)

## Contexto

Situação, problema ou necessidade que motivou a decisão.

## Decisão

O que foi decidido.

## Consequências

Efeitos positivos e negativos da decisão, riscos e mitigações.
```
