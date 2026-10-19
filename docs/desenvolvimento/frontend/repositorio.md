<h1 align="center">Frontend</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 18/10/2026 | Criação da página a partir do README e da estrutura do repositório `notifica-saude-frontend` (branch `develop`). | Sophya Ribeiro |

O **frontend** do NotificaSaúde é uma aplicação web responsiva (SPA) em **React com TypeScript**. Ele concentra a interface de todos os perfis: o formulário público de notificação, usado pelo Notificante, e as telas internas do NSP e do Gestor da Área.

[:fontawesome-brands-github: Abrir o repositório](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend){ .md-button .md-button--primary target="_blank" } [:material-source-branch: Branch develop](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/tree/develop){ .md-button target="_blank" }

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 + TypeScript 5 | Interface em componentes, com tipagem estática ([ADR-0005](../arquitetura/adr/0005-usar-react-typescript-no-frontend.md)) |
| Vite 8 | Servidor de desenvolvimento e build |
| React Router 7 | Rotas da aplicação e proteção por perfil |
| React Icons | Ícones da interface |
| oxlint e oxfmt | Lint e formatação do código |
| Lefthook | Hooks de Git que rodam lint e formatação antes do commit |
| Docker + Nginx | Imagem de produção que serve o build estático |

A versão do Node.js usada no projeto é a **24**, definida no arquivo `.nvmrc`.

## Arquitetura

O frontend é o lado cliente da arquitetura cliente-servidor ([ADR-0006](../arquitetura/adr/0006-adotar-arquitetura-cliente-servidor-rest.md)). Ele se comunica com o [backend](../backend/repositorio.md) exclusivamente pela API REST, com JSON, e não guarda regras de negócio: cuida da apresentação, da navegação e da interação com o usuário.

```
notifica-saude-frontend  ←→  notifica-saude-backend  ←→  PostgreSQL
   React + TypeScript          Express + Prisma
```

O código é organizado por responsabilidade:

| Pasta | Responsabilidade |
| --- | --- |
| `pages/` | Telas da aplicação, uma por rota principal |
| `components/` | Componentes reutilizáveis da interface |
| `services/` | Chamadas à API REST |
| `hooks/` | Hooks customizados (estado, formulários, autenticação) |
| `contexts/` | Contextos globais, como autenticação e acessibilidade |
| `routes/` | Definição das rotas e proteção por perfil |

A visão completa dos containers e componentes está na [Especificação de Arquitetura de Software](../arquitetura/especificacao-arquitetura.md).

## Estrutura de diretórios

```
notifica-saude-frontend/
├── public/                      # Arquivos estáticos (favicon, ícones)
├── src/
│   ├── assets/                  # Imagens e ícones SVG
│   ├── components/
│   │   ├── admin/               # Área interna: layout, filtros, cards e lista de incidentes
│   │   ├── analise/             # Componentes do formulário de análise
│   │   ├── common/              # Layout (Header, Footer) e componentes de UI (Button, Input, Select...)
│   │   └── form/                # Formulário dinâmico (FieldRenderer, StepForm, MultiSelect, DateInput...)
│   ├── constants/               # Constantes, como os status da notificação
│   ├── contexts/                # AuthContext e AccessibilityContext
│   ├── hooks/                   # useAuth, useNotificacao, useIncidents, useCamposFormulario...
│   ├── pages/
│   │   ├── Home/  Login/  ForgotPassword/  ResetPassword/
│   │   ├── Notificacao/         # Formulário público de notificação
│   │   └── Admin/
│   │       ├── NotificacaoDetalhe/   # Detalhe, classificação, encaminhamento e plano de ação
│   │       └── Analise/              # Fluxo do formulário de análise
│   ├── routes/                  # index.tsx (rotas) e PrivateRoute.tsx (proteção por perfil)
│   ├── services/                # api.ts e serviços da API (auth, notificação, análise, plano de ação...)
│   ├── templates/               # Templates, como os de e-mail
│   ├── types/                   # Tipos e interfaces TypeScript
│   ├── utils/                   # Utilitários (datas, cookies, cores de status, regras de senha)
│   ├── App.tsx
│   └── main.tsx
├── docs/                        # Especificações de funcionalidades e verificação de contraste
├── .github/                     # Workflows de CI e Lighthouse, templates de issue e PR
├── Dockerfile  docker-compose.yml  nginx.conf
└── package.json  vite.config.ts  tsconfig*.json  lefthook.yml  lighthouserc.json
```

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/){ target="_blank" } 24 (recomendado instalar com o [nvm](https://github.com/nvm-sh/nvm){ target="_blank" })
- O [backend](../backend/repositorio.md) em execução, para que a interface tenha dados

### Passo a passo

1. Clone o repositório e entre na pasta:

    ```sh
    git clone https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend.git
    cd notifica-saude-frontend
    ```

2. Copie o arquivo de variáveis de ambiente e ajuste os valores:

    ```sh
    cp .env.example .env
    ```

3. Instale as dependências e inicie o servidor de desenvolvimento:

    ```sh
    npm install
    npm run dev
    ```

A aplicação fica disponível em `http://localhost:5173`. Também é possível subir a imagem de produção com `docker compose up --build`.

### Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `VITE_API_URL` | URL base da API do backend |
| `VITE_TURNSTILE_SITE_KEY` | Chave pública do Cloudflare Turnstile, usada na verificação do formulário público |
| `FRONTEND_EXPOSED_PORT` / `FRONTEND_INTERNAL_PORT` | Portas do container do frontend |
| `FRONTEND_PUBLIC_URL` / `BACKEND_PUBLIC_URL` | Endereços públicos usados no deploy |

As variáveis com prefixo `VITE_` são embutidas no build. Por isso, nenhuma chave secreta deve ser colocada nelas.

### Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build` | Verifica os tipos (`tsc -b`) e gera o build de produção |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` / `lint:fix` | Executa o oxlint, com ou sem correção automática |
| `npm run fmt` / `fmt:check` | Formata o código com o oxfmt ou só verifica a formatação |

## Qualidade e integração contínua

- **CI** (`.github/workflows/ci.yml`): roda a verificação de tipos, o lint e o build a cada pull request.
- **Lighthouse** (`.github/workflows/lighthouse.yml`): avalia desempenho e acessibilidade das páginas, com os limites definidos em `lighthouserc.json`.
- **Lefthook**: executa lint e formatação localmente antes de cada commit.
- **Dependabot**: mantém as dependências atualizadas.

Os resultados de acessibilidade estão em [Qualidade e Testes](../../vvt/index.md).

## Como contribuir

O fluxo de trabalho segue as definições da [Gerência de Configuração](../../gcs/index.md):

1. Crie ou escolha uma issue que descreva a alteração.
2. Crie a branch a partir da `develop`, no padrão do [modelo de ramificação](../../gcs/modelo-ramificacao.md).
3. Faça os commits no formato do [padrão de commits](../../gcs/padrao-commits.md).
4. Abra o pull request seguindo o template do repositório e aguarde a revisão da equipe.
