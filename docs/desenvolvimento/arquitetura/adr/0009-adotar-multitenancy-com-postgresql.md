<h1 align="center">ADR-0009 — Adotar multi-tenancy com PostgreSQL</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 17/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos, Lucas Gonçalves Cordeiro |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--outro">Descontinuada</span> <span>Data da decisão: 17/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Descontinuada para segregar a decisão multi-tenancy da decisão de SGBDs

## Contexto

A ADR-0008 definiu a adoção de uma **arquitetura centralizada** para o sistema NotificaSaúde, com isolamento lógico dos dados por unidade de saúde (multi-tenant lógico) e controle de acesso baseado em perfil, setor e unidade (RBAC).

Com essa decisão aceita, tornou-se necessário detalhar como o isolamento lógico entre unidades será implementado no nível de dados e qual banco de dados suportará esse modelo.

Dois pontos específicos precisavam ser resolvidos:

**Ponto 1 – Estratégia de isolamento multi-tenant**

Em uma arquitetura centralizada com múltiplas unidades de saúde compartilhando o mesmo banco de dados, existem três abordagens conhecidas para isolar os dados:

- **Opção A – Banco de dados separado por tenant:** cada unidade possui seu próprio banco. Oferece isolamento máximo, mas contradiz diretamente a ADR-0008 (volta ao modelo descentralizado de dados).
- **Opção B – Schema separado por tenant:** cada unidade possui seu próprio schema dentro do mesmo banco. Oferece bom isolamento, mas aumenta a complexidade de manutenção e migrações à medida que o número de unidades cresce.
- **Opção C – Tabela compartilhada com `tenant_id`:** todos os registros ficam nas mesmas tabelas, identificados por uma coluna `tenant_id`. O isolamento é garantido pela aplicação (RBAC + filtros automáticos na camada de dados). É a abordagem mais simples de manter e evoluir para o porte do sistema.

**Ponto 2 – Banco de dados**

O C4 Container inicial especificava SQLite como banco de dados. SQLite é um banco embarcado orientado a arquivo, projetado para uso local ou em aplicações com acesso de um único processo. Ele não é adequado para o cenário centralizado por:

- Não suportar conexões concorrentes de múltiplos clientes de forma confiável
- Não possuir controle de acesso nativo a nível de usuário/role
- Não ser adequado para volumes de dados institucionais com histórico de auditoria
- Não oferecer suporte a replicação, failover ou estratégias de alta disponibilidade (exigidas pelo requisito 5.1.1)

Foram considerados como substitutos: **PostgreSQL**, MySQL/MariaDB e SQL Server.

## Decisão

### 1. Adotar multi-tenancy lógico com coluna `tenant_id`

Todas as entidades do domínio que requerem isolamento por unidade de saúde (notificações, usuários, setores, planos de ação, logs, etc.) terão uma coluna `tenant_id` referenciando a unidade de saúde à qual o registro pertence.

O isolamento será garantido por duas camadas:

- **Camada de aplicação (RBAC):** toda requisição autenticada carrega o contexto do usuário (unidade, setor, perfil). A API aplica filtros automáticos por `tenant_id` antes de qualquer operação de leitura ou escrita.
- **Camada de dados:** índices compostos incluindo `tenant_id` garantem performance nas consultas filtradas por unidade.

Regra inviolável: **nenhuma query de domínio deve ser executada sem filtro de `tenant_id`**, exceto para operações exclusivas do perfil Administrador com escopo global explicitamente definido.

### 2. Substituir SQLite por PostgreSQL

Adotar **PostgreSQL** como banco de dados do sistema NotificaSaúde.

Justificativas da escolha frente aos concorrentes:

- Suporte robusto a conexões concorrentes e transações ACID
- Controle de acesso nativo por roles e schemas
- Amplamente adotado no ecossistema open source, com vasta documentação
- Suporte a replicação, backup contínuo (WAL) e estratégias de alta disponibilidade
- Sem custo de licença
- Compatibilidade com os principais ORMs dos stacks considerados (Node.js, Java, Python)
- Funcionalidades avançadas úteis para auditoria: `RETURNING`, triggers, `pg_audit`

## Consequências

### Positivas

- Isolamento de dados entre unidades garantido de forma simples e auditável
- Schema único facilita migrações e evolução do modelo de dados
- PostgreSQL suporta o volume e a concorrência exigidos pelo ambiente institucional
- Estratégias de alta disponibilidade e backup passam a ser viáveis (requisito 5.1.1)
- Performance previsível com índices compostos por `tenant_id`
- Facilita a geração de relatórios consolidados (visão macro, sem joins entre bancos)
- Alinhamento com requisitos de auditoria e LGPD (requisitos 5.2, 5.3)

### Negativas

- Toda query de domínio deve incluir filtro por `tenant_id` — exige disciplina da equipe de desenvolvimento
- Necessidade de infraestrutura para hospedar e operar o PostgreSQL (vs. arquivo SQLite)
- Maior complexidade de configuração inicial em relação ao SQLite

### Riscos

- Vazamento de dados entre unidades caso o filtro de `tenant_id` seja omitido em alguma query
- Queries sem índice em `tenant_id` podem causar full table scans em tabelas grandes

### Mitigações

- Implementar camada de repositório/DAO centralizada que aplique o filtro de `tenant_id` automaticamente, impedindo acesso direto sem contexto
- Adicionar testes automatizados de isolamento: um usuário da Unidade A nunca deve receber dados da Unidade B
- Criar índices compostos obrigatórios: `(tenant_id, id)` em todas as tabelas de domínio
- Revisão de code review com checklist explícito para queries sem `tenant_id`
- Configurar monitoramento e alertas de performance no PostgreSQL
- Definir política de backup e plano de recuperação desde o início do projeto

## Alternativas Consideradas

### Schema separado por tenant (Opção B)

Descartada porque, embora ofereça isolamento mais forte a nível de banco, aumenta significativamente a complexidade de migrações (cada nova coluna ou tabela precisaria ser aplicada em N schemas) e não traz benefício proporcional para o porte atual do sistema.

### MySQL / MariaDB

Considerado como alternativa ao PostgreSQL. Foi preterido porque o PostgreSQL oferece tipagem mais rica, melhor suporte a JSON estruturado (útil para campos de formulário flexíveis), e recursos de auditoria mais maduros sem extensões externas.

### SQL Server

Descartado por custo de licenciamento e menor alinhamento com o ecossistema open source do projeto.

---

**Conclusão:**  
A adoção de `tenant_id` com PostgreSQL concretiza no nível de dados a decisão arquitetural da ADR-0008, garantindo isolamento simples, auditável e performático entre as unidades de saúde, sem abrir mão da visão centralizada e consolidada dos incidentes.
