<h1 align="center">ADR-0021 — Adotar PostgreSQL como SGBD relacional único com suporte a multitenancy</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 02/06/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 02/06/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Substitui [ADR-0004](0004-usar-sqlite-na-fase-inicial.md) e [ADR-0017](0017-adotar-postgresql-como-sgbd.md).

Relacionada a [ADR-0009](0009-adotar-multitenancy-com-postgresql.md), [ADR-0016](0016-adotar-multitenancy.md) e [ADR-0011](0011-adotar-orm-prisma.md).

## Contexto

O NotificaSaúde é multi-institucional: cada entidade parceira é um *tenant* e os dados de um tenant não podem vazar para outro. Esse requisito de isolamento multi-tenant (ADR-0016) é o principal direcionador arquitetural na escolha do Sistema Gerenciador de Banco de Dados (SGBD).

Duas decisões anteriores ficaram desalinhadas com esse requisito e precisam ser consolidadas:

1. A [ADR-0004](0004-usar-sqlite-na-fase-inicial.md) adotou **SQLite** na fase inicial, assumindo instância única, baixo volume e ambiente controlado. A própria decisão previa sua revisão caso o sistema evoluísse para múltiplas instituições ou maior concorrência — condição que se concretizou.
2. A [ADR-0017](0017-adotar-postgresql-como-sgbd.md) escolheu o **PostgreSQL**, mas justificou a escolha por robustez genérica, sem amarrar a decisão ao driver arquitetural real do projeto: o multitenancy.

O isolamento multi-tenant impõe restrições que o SQLite não atende e que devem estar explícitas na decisão do SGBD: isolamento forte entre tenants, concorrência de escrita sob carga de várias instituições e recursos de servidor (pool de conexões, replicação, backup centralizado).

## Decisão

A partir desta ADR, o NotificaSaúde adota **um único SGBD relacional em todos os ambientes: PostgreSQL**, com isolamento de dados entre tenants conforme o modelo multi-tenant do projeto. O Redis (ADR-0018) permanece como SGBD não relacional (NoSQL chave-valor) dedicado a dados de autenticação, fora do escopo desta decisão.

### Banco único por ambiente

Desenvolvimento, teste e produção rodam sobre PostgreSQL, o que elimina divergências de comportamento entre eles. O banco é provisionado via Docker (ADR-0007) em todos os casos; em produção, admite-se ainda configurá-lo como serviço dedicado externo. O cenário de SQLite embarcado deixa de existir — a equipe trabalha com PostgreSQL desde a máquina local.

### Isolamento por tenant

Cada entidade parceira é um tenant. O isolamento segue a estratégia definida nas ADR-0016/ADR-0009: tabelas compartilhadas com coluna `tenant_id`, e a separação dos dados é garantida na **camada de aplicação** (RBAC + filtros automáticos por `tenant_id`). Recursos nativos do PostgreSQL para um isolamento mais forte (schemas, *roles*, *Row-Level Security* — RLS) permanecem como possibilidade futura, **não adotada nesta fase**.

### Acesso a dados

O acesso ao banco continua mediado pelo Prisma (ADR-0011), com PostgreSQL como provider único de schema e migrações. Código e migrações não devem assumir particularidades do SQLite. Na prática, para o desenvolvedor: o `.env` aponta para um PostgreSQL, as migrações Prisma têm PostgreSQL como alvo único e o comportamento em dev é igual ao de produção (paridade de ambientes).

### Versão

Deve ser usada uma versão suportada (LTS vigente) do PostgreSQL.

## Consequências

### Positivas

- Isolamento lógico entre tenants via coluna `tenant_id` (ADR-0016), com o PostgreSQL oferecendo base para reforço futuro (RLS).
- Paridade entre ambientes: dev, teste e produção sobre o mesmo SGBD.
- Suporte a concorrência de escrita sob carga de várias instituições.
- Recursos de servidor relevantes para operação multi-institucional: pool de conexões, replicação e backup centralizado.

### Negativas

- **Custo de setup inicial maior** — exige PostgreSQL provisionado desde o início, sem a simplicidade embarcada do SQLite.
- **Administração especializada** — tuning e replicação exigem maior conhecimento da equipe.

### Ações decorrentes

- ADR-0004 marcada como "Substituída por ADR-0021".
- ADR-0017 marcada como "Substituída por ADR-0021".
- Migrações Prisma (ADR-0011) com PostgreSQL como alvo único.
- Provisionar PostgreSQL em desenvolvimento e produção via Docker (ADR-0007), com possibilidade de serviço dedicado externo em produção.

## Alternativas Consideradas

O PostgreSQL foi escolhido por oferecer o melhor equilíbrio entre custo (gratuito/open source), maturidade, aderência ao padrão SQL e recursos nativos disponíveis para reforço futuro de isolamento multi-tenant (RLS).

### SQLite (ADR-0004)

Rejeitado para o estado atual do projeto. É adequado apenas a instância única e baixo volume, sem isolamento entre tenants nem concorrência de escrita compatível com uso multi-institucional. A justificativa histórica para a fase inicial permanece registrada na ADR-0004 como contexto.

### MySQL / MariaDB

Atenderiam ao volume, mas com menor aderência histórica ao padrão SQL e menos recursos nativos disponíveis para reforço futuro de isolamento (RLS) do que o PostgreSQL.

### Bancos proprietários

Descartados por custo de licenciamento, incompatível com a premissa de solução gratuita.

## Questões em Aberto

- Avaliação futura de reforço do isolamento (RLS sobre o schema compartilhado) sobre a estratégia de `tenant_id` já adotada (ADR-0016), caso o crescimento do número de tenants justifique.
- Política de backup e replicação em produção (NES/UFMS).

## Possibilidades Futuras

- Particionamento por tenant para tenants de alto volume.
- *Read replicas* para cargas analíticas.
