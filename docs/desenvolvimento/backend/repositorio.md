<h1 align="center">Backend</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 18/10/2026 | Criação da página a partir do README e da estrutura do repositório `notifica-saude-backend` (branch `develop`). | Sophya Ribeiro |

O **backend** do NotificaSaúde é uma API REST em **Node.js, TypeScript e Express**. Ele concentra as regras de negócio, o controle de acesso por perfil (RBAC), o isolamento dos dados por unidade de saúde (multi-tenancy) e a persistência com **Prisma** e **PostgreSQL**.

[:fontawesome-brands-github: Abrir o repositório](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend){ .md-button .md-button--primary target="_blank" } [:material-source-branch: Branch develop](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/tree/develop){ .md-button target="_blank" }

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| Node.js 24 + TypeScript 5 | Linguagem e ambiente de execução |
| Express 5 | Servidor HTTP e rotas da API ([ADR-0010](../arquitetura/adr/0010-adotar-backend-expressjs.md)) |
| Prisma + PostgreSQL 18 | Acesso a dados e banco relacional ([ADR-0011](../arquitetura/adr/0011-adotar-orm-prisma.md), [ADR-0021](../arquitetura/adr/0021-adotar-postgresql-como-sgbd-com-multitenancy.md)) |
| Redis 8 | Sessões, revogação de tokens e fila de e-mails ([ADR-0018](../arquitetura/adr/0018-adotar-redis-para-dados-de-autenticacao.md)) |
| BullMQ + Nodemailer | Fila e envio de e-mails pelo [Brevo](../arquitetura/brevo.md) ([ADR-0020](../arquitetura/adr/0020-adotar-fila-bullmq-para-envio-de-emails.md)) |
| Zod | Validação dos dados de entrada |
| JWT + Argon2 | Autenticação e hash de senhas |
| Cloudflare Turnstile | Proteção do formulário público contra robôs |
| Pino + prom-client | Logs estruturados e métricas ([ADR-0013](../arquitetura/adr/0013-adotar-logger-estruturado-backend.md), [ADR-0014](../arquitetura/adr/0014-adotar-metricas-sre.md)) |
| Swagger | Documentação da API ([ADR-0012](../arquitetura/adr/0012-adotar-swagger.md)) |
| Jest | Testes unitários e de integração |
| Docker Compose | Ambiente com banco, Redis, API e worker ([ADR-0007](../arquitetura/adr/0007-adotar-docker-para-deploy.md)) |

## Arquitetura

A API é organizada em camadas, e cada módulo de domínio segue o mesmo padrão de arquivos: `.routes`, `.service`, `.repository` e `.schemas`.

| Camada | Responsabilidade |
| --- | --- |
| `routes` | Entrada HTTP: recebe a requisição, aciona o serviço e devolve a resposta |
| `middlewares` | Autenticação (JWT), resolução do `tenant_id`, RBAC, Turnstile, limite de tentativas de login, métricas e tratamento de erros |
| `services` | Regras de negócio e orquestração do domínio |
| `repositories` | Acesso ao banco pelo Prisma (a única camada que acessa o banco) |
| `prisma/` | Schema, migrations e seeds |

As rotas ficam sob `/api`. O registro de notificações e os dados usados pelo formulário público (unidades e setores) não exigem login; as demais rotas passam pelos middlewares de autenticação e de tenant. O detalhamento dos componentes está na [Especificação de Arquitetura de Software](../arquitetura/especificacao-arquitetura.md#componentes), e o modelo de dados, na [Especificação do Modelo Lógico](../banco-de-dados/modelo-logico.md).

### Módulos

| Módulo | O que faz |
| --- | --- |
| `auth` | Login, recuperação e redefinição de senha |
| `notificacao` | Registro, listagem, detalhe, atualização, arquivamento e status das notificações |
| `classificacao` | Classificação do incidente |
| `encaminhamento` | Encaminhamento ao setor, com aviso por e-mail |
| `investigacao` | Análise do incidente |
| `plano-acao` | Plano de ação e suas ações |
| `campo-formulario` / `opcao-campo` | Campos e opções do formulário dinâmico |
| `unidade-saude` / `setor` / `localidade` | Unidades de saúde (tenants), setores, estados e municípios |
| `usuario` | Gestão de usuários |
| `admin` | Health checks e painel da fila de e-mails |

## Estrutura de diretórios

```
notifica-saude-backend/
├── prisma/
│   ├── schema.prisma            # Fonte única de verdade do modelo de dados
│   ├── migrations/              # Histórico de migrações
│   ├── data/                    # Dados de seed (estados e municípios)
│   └── seed/                    # Seeds (usuários, unidades, localidades, formulário)
├── src/
│   ├── middlewares/             # auth, rbac, tenant, turnstile, correlation, metrics, error.handler...
│   ├── modules/                 # Um módulo por domínio (ver tabela acima)
│   ├── shared/
│   │   ├── lib/                 # Prisma (singleton) e Redis
│   │   ├── mailer/              # Envio de e-mail (Brevo) e fila BullMQ
│   │   ├── swagger/             # Configuração da documentação OpenAPI
│   │   └── constants/  types/  utils/
│   ├── templates/               # Templates HTML de e-mail
│   ├── app.ts                   # Configuração do Express e montagem das rotas
│   ├── server.ts                # Ponto de entrada da API
│   └── worker.ts                # Worker da fila de e-mails
├── tests/
│   ├── unit/                    # Testes unitários
│   └── integration/             # Testes de integração (HTTP)
├── docs/                        # Decisões e especificações próprias do backend
├── .github/                     # Workflows de qualidade e testes, templates de issue e PR
├── Dockerfile  docker-compose.yml
└── package.json  tsconfig.json
```

## Como rodar

### Com Docker Compose (recomendado)

```bash
git clone https://github.com/Notifica-Saude-2026-2/notifica-saude-backend.git
cd notifica-saude-backend
cp .env.example .env
docker compose up --build
```

O Compose sobe o PostgreSQL, o Redis, aplica as migrations, executa os seeds e inicia a API e o worker de e-mails. O banco fica na porta 5432 e a API na porta 3000.

### Localmente

1. Suba o banco e o Redis com `docker compose up -d postgres redis`.
2. Instale as dependências com `npm install`.
3. Prepare o banco:

    ```bash
    npx prisma generate
    npx prisma migrate deploy
    npx prisma db seed
    ```

4. Inicie a API com `npm run dev` e, em outro terminal, o worker de e-mails com `npm run worker:dev`.

### Endereços úteis

| Endereço | O que é |
| --- | --- |
| `/api/docs` | Documentação da API (Swagger) |
| `/health` e `/ready` | Verificação de funcionamento e de prontidão (banco e Redis) |
| `/metrics` | Métricas no formato do Prometheus |
| `/admin/queues` | Painel da fila de e-mails, restrito por perfil |

### Variáveis de ambiente

O arquivo `.env.example` lista todas as variáveis. Elas se agrupam em:

| Grupo | Variáveis |
| --- | --- |
| Banco de dados | `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`, `DATABASE_URL` |
| Aplicação | `ENV`, `TZ`, `BACKEND_EXPOSED_PORT`, `BACKEND_INTERNAL_PORT`, `BACKEND_PUBLIC_URL`, `FRONTEND_PUBLIC_URL` |
| Autenticação | `JWT_SECRET`, `JWT_EXPIRES_IN`, `REDIS_URL`, `TURNSTILE_ENABLED`, `TURNSTILE_TIMEOUT_MS` |
| E-mail | `MAILER_PROVIDER`, `MAIL_FROM`, `BREVO_SMTP_HOST`, `BREVO_SMTP_PORT`, `BREVO_SMTP_USER`, `BREVO_SMTP_KEY` |
| Fila de e-mails | `MAIL_QUEUE_BACKING`, `MAIL_WORKER_PROVIDER`, `MAILER_QUEUE_FALLBACK`, `MAIL_RATE_LIMIT_PER_DAY`, `MAIL_QUEUE_CONCURRENCY`, `MAIL_QUEUE_ATTEMPTS`, `MAIL_QUEUE_BACKOFF_DELAY_MS` |
| Observabilidade | `WORKER_METRICS_PORT`, `READINESS_CHECK_BREVO`, `READINESS_TIMEOUT_MS`, `QUEUE_DEPTH_SCRAPE_INTERVAL_MS` |

!!! warning "Segredos"
    Os valores de senhas, chaves e tokens (como `JWT_SECRET`, `DATABASE_PASSWORD` e `BREVO_SMTP_KEY`) ficam somente no `.env` de cada ambiente e nunca devem ser versionados nem publicados na documentação.

### Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | API em modo de observação (tsx) |
| `npm run worker` / `worker:dev` | Worker da fila de e-mails |
| `npm run build` | Build de produção (esbuild) |
| `npm run type-check` | Verificação de tipos |
| `npm test` | Testes unitários e de integração |
| `npm run test:unit` / `test:int` | Cada suíte separadamente (Jest) |
| `npm run report:coverage` | Relatórios de cobertura de código |
| `npm run seed:fixtures` | Dados de exemplo do plano de ação |
| `npm run lint` / `lint:fix` | Lint com o oxlint |
| `npm run fmt` / `fmt:check` | Formatação com o oxfmt |

## Testes e integração contínua

- **Testes**: unitários e de integração com Jest. Os testes de integração usam um banco próprio, configurado no `.env.test`.
- **Workflows**: `testes.yml` executa as suítes de teste e `qualidade.yml` executa as verificações de qualidade a cada pull request.
- **Lefthook**: executa lint e formatação localmente antes de cada commit.

Os relatórios de cobertura e de testes estão em [Qualidade e Testes](../../vvt/index.md).

## Como contribuir

O fluxo de trabalho segue as definições da [Gerência de Configuração](../../gcs/index.md):

1. Crie ou escolha uma issue que descreva a alteração.
2. Crie a branch a partir da `develop`, no padrão do [modelo de ramificação](../../gcs/modelo-ramificacao.md).
3. Faça os commits no formato do [padrão de commits](../../gcs/padrao-commits.md).
4. Abra o pull request seguindo o template do repositório e aguarde a revisão da equipe.
