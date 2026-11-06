<h1 align="center">ADR-0010 — Adotar backend com Express.js</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 17/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos, Lucas Gonçalves Cordeiro |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 17/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

A ADR-0006 definiu a adoção de uma **arquitetura cliente-servidor**, com frontend e backend como aplicações independentes se comunicando via API REST. Essa decisão estabeleceu o contrato arquitetural, mas não especificou qual framework seria utilizado na construção do backend.

Com o avanço do projeto, tornou-se necessário escolher o framework que implementará a camada de API REST, considerando os seguintes fatores:

- A equipe possui familiaridade com o ecossistema JavaScript/TypeScript, já adotado no frontend (ADR-0005)
- O backend precisa expor uma API REST com controle de acesso por perfil (RBAC), isolamento multi-tenant e registro de auditoria (ADR-0008 / ADR-0009)
- O projeto está em fase piloto — a complexidade da solução deve ser proporcional ao escopo atual
- O processo de implantação deve ser simples, conforme diretriz da ADR-0006
- Os dois repositórios (frontend e backend) serão mantidos de forma independente

Foram consideradas as seguintes alternativas para o framework backend:

**Opção 1 – Express.js com TypeScript**
Framework minimalista e não opinativo para Node.js. Amplamente adotado, com vasto ecossistema. Exige que a equipe defina a estrutura de camadas (routes, services, repositories), mas oferece controle total sobre a organização do código.

**Opção 2 – NestJS**
Framework opinativo para Node.js, fortemente inspirado no Angular. Oferece estrutura de módulos, injeção de dependências nativa, decorators e suporte a TypeScript de forma centralizada. Mais robusto para sistemas grandes, porém com curva de aprendizado e boilerplate significativos para o porte atual do projeto.

**Opção 3 – Next.js (API Routes como BFF)**
O Next.js poderia servir tanto o frontend React quanto a API REST no mesmo processo (Backend for Frontend). Reduziria a operação a um único deploy, mas mesclaria frontend e backend no mesmo repositório e processo — contradizendo a separação explícita definida na ADR-0006 e a decisão de manter dois repositórios independentes.

**Opção 4 – Fastify**
Alternativa moderna ao Express, com melhor performance e suporte nativo a TypeScript e validação via JSON Schema. Válida tecnicamente, porém com ecossistema menor e menor familiaridade da equipe em comparação ao Express.

## Decisão

Adotar **Express.js com TypeScript** como framework do backend do NotificaSaúde.

O backend será uma aplicação Node.js independente, organizada em camadas:

```
backend/
├── src/
│   ├── modules/             # Endpoints REST — entrada e saída HTTP
│   │   └── module-a/
│   │       ├── middlewares/     # Auth, tenant, RBAC, error handler
│   │       ├── services/        # Regras de negócio por agregado
│   │       └── repositories/    # Acesso a dados via Prisma (com tenant_id injetado)
│   ├── prisma/              # schema.prisma e client
│   ├── types/               # Tipos e interfaces TypeScript compartilhados
│   └── app.ts               # Configuração do Express e registro de rotas
├── .env
├── package.json
└── tsconfig.json
```

A organização seguirá o estilo **por módulos** (`module-a/`, `module-b/`, `module-c/`), adequado aos requisitos e modelos de domínio e C4.

O **Prisma ORM** será utilizado como camada de acesso a dados, com o PostgreSQL como banco de dados (ADR-0009). Toda query de domínio passará pela `TenantRepository` base, que injeta automaticamente o `tenant_id` do contexto da requisição.

## Consequências

### Positivas

- Alinhamento com o ecossistema TypeScript já adotado no frontend (ADR-0005)
- Separação física total entre frontend e backend — dois repositórios, dois deploys independentes, honrando a ADR-0006 na íntegra
- Controle explícito sobre a estrutura de camadas, middlewares e fluxo de requisição
- Baixa curva de aprendizado para a equipe — Express é amplamente conhecido
- Simplicidade de configuração e inicialização do servidor
- Fácil integração com Prisma, Jest, bibliotecas de validação (Zod) e geração de tokens (JWT)
- Sem acoplamento com o ciclo de vida do framework — fácil de testar unitariamente

### Negativas

- Sem estrutura de módulos ou injeção de dependências nativa — a equipe precisa definir e manter as convenções
- Mais verboso que NestJS para funcionalidades como validação, documentação OpenAPI e interceptors
- Sem opinião sobre organização — disciplina de código é responsabilidade da equipe

### Riscos

- Crescimento desordenado do código se as convenções de camadas não forem seguidas
- Ausência de validação de entrada por padrão — pode gerar vulnerabilidades se não tratada explicitamente

### Mitigações

- Adotar **Zod** como biblioteca de validação de schema nas rotas (parse de body, query e params)
- Definir um `errorHandler` global centralizado para tratamento uniforme de erros HTTP
- Documentar e revisar em code review o cumprimento das camadas: nenhuma regra de negócio em `routes/`, nenhuma query direta em `services/`
- Criar a `TenantRepository` base como classe abstrata — repositórios concretos estendem ela e herdam o filtro de `tenant_id`
- Escrever testes unitários para `services/` e testes de integração para `routes/`

## Alternativas Consideradas

### NestJS

Descartado por excesso de complexidade para o escopo atual. O boilerplate de módulos, decorators e injeção de dependências adiciona custo de aprendizado e manutenção desproporcional a um sistema piloto com equipe pequena. Pode ser reavaliado em uma versão futura caso o sistema escale.

### Next.js como BFF

Descartado pois mesclaria frontend e backend no mesmo repositório e processo, contradizendo a separação definida na ADR-0006 e a decisão de manter dois repositórios independentes.

### Fastify

Tecnicamente sólido, mas preterido pela menor familiaridade da equipe e ecossistema menor comparado ao Express para as integrações necessárias no projeto.

---

**Conclusão:**
O Express.js com TypeScript é a escolha mais equilibrada para o backend do NotificaSaúde no estágio atual: simples de operar, compatível com o ecossistema TypeScript da equipe, e com controle suficiente para implementar corretamente as camadas de RBAC, multi-tenancy e auditoria definidas nas ADRs anteriores.
