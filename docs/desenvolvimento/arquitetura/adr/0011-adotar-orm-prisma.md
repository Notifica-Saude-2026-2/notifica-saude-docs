<h1 align="center">ADR-0011 — Adotar ORM Prisma</h1>

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

Com a definição do PostgreSQL como banco de dados (ADR-0009) e do Express.js como framework do backend no repositório `notifica-saude-backend`, tornou-se necessário definir como a camada de acesso a dados seria implementada.

O sistema NotificaSaúde possui um modelo de domínio com múltiplas entidades relacionadas, controle de status, isolamento lógico por `tenant_id` e exigência de rastreabilidade completa via histórico de modificações (RN-02). Isso significa que a camada de dados precisa ser confiável, legível e fácil de evoluir ao longo do piloto.

Nesse cenário, foram consideradas duas abordagens para o acesso ao banco de dados:

**Opção A – SQL puro (query builder ou raw queries)**

- Controle total sobre cada query executada
- Sem abstração intermediária
- Exige escrita manual de todas as queries, migrações e mapeamentos
- Maior risco de inconsistência entre o modelo de dados e o código da aplicação
- Maior esforço para manter queries seguras contra SQL injection
- Dificulta a rastreabilidade entre o schema do banco e as entidades do domínio

**Opção B – ORM (Object-Relational Mapper)**

- Abstrai o acesso ao banco por meio de um modelo de dados declarativo
- Gera e gerencia migrações automaticamente a partir do schema
- Garante mapeamento consistente entre entidades do domínio e tabelas
- Reduz superfície de erro em operações comuns (CRUD, relações, transações)
- Facilita a evolução do schema ao longo do ciclo de vida do projeto

Dentro da opção B, foram avaliados os principais ORMs do ecossistema Node.js/TypeScript:

| ORM | Observação |
|---|---|
| **Prisma** | Schema declarativo em arquivo próprio (`schema.prisma`), geração automática de tipos TypeScript, migrações versionadas, cliente fortemente tipado, ampla adoção e documentação |
| **TypeORM** | Baseado em decorators, mais verboso, histórico de problemas com migrações em projetos maiores, tipos menos precisos |
| **Drizzle** | ORM mais recente, orientado a SQL, boa integração com TypeScript, mas ecossistema ainda em maturação |
| **Sequelize** | Maduro, porém sem suporte nativo a TypeScript de qualidade e API mais verbosa |

## Decisão

Adotar **Prisma** como ORM do sistema NotificaSaúde no repositório `notifica-saude-backend`.

O Prisma será responsável por:

- Definição do schema do banco de dados (`schema.prisma`) como fonte única de verdade do modelo de dados
- Geração e versionamento de migrações (`prisma migrate`)
- Geração automática do cliente TypeScript (`PrismaClient`) com tipos derivados diretamente do schema
- Execução de todas as operações de leitura e escrita no PostgreSQL pela camada de repositório

A camada de repositório do backend (`repositories/`) será a única responsável por instanciar e utilizar o `PrismaClient` — nenhuma outra camada acessa o banco diretamente.

## Consequências

### Positivas

- Schema declarativo em `schema.prisma` é a fonte única de verdade — modelo de domínio, banco e tipos TypeScript ficam sempre sincronizados
- Migrações geradas automaticamente (`prisma migrate dev`) reduzem erro humano na evolução do schema
- Tipos gerados pelo Prisma eliminam uma classe inteira de bugs de mapeamento entre aplicação e banco
- `PrismaClient` fortemente tipado melhora a experiência de desenvolvimento e a segurança em refatorações
- Suporte nativo a relações, filtros compostos e transações — necessários para o modelo multi-tenant com `tenant_id` (ADR-0009)
- Ferramenta `Prisma Studio` facilita inspeção dos dados durante o desenvolvimento
- Ecossistema maduro com ampla documentação e comunidade ativa

### Negativas

- Abstração pode ocultar queries ineficientes geradas pelo ORM em casos de uso mais complexos
- O `PrismaClient` gera código em tempo de build — exige `prisma generate` após qualquer alteração no schema
- Consultas muito específicas ou de alta performance podem exigir o uso de `$queryRaw` (SQL raw), reduzindo parcialmente o benefício da abstração
- Curva de aprendizado inicial para quem não conhece o modelo de schema declarativo do Prisma

### Riscos

- Queries geradas automaticamente podem não ser ótimas para relatórios consolidados com múltiplos filtros e agregações por `tenant_id`
- Migrações mal revisadas podem causar perda de dados em ambiente de produção

### Mitigações

- Revisar o SQL gerado pelo Prisma nas queries críticas usando `prisma.$on('query', ...)` durante o desenvolvimento
- Usar `$queryRaw` com tipagem explícita apenas nos casos comprovadamente necessários (ex.: relatórios com agregações complexas)
- Toda migração gerada deve ser revisada pela equipe antes de ser aplicada em ambiente de produção
- Manter o `schema.prisma` versionado junto ao repositório `notifica-saude-backend` com revisão obrigatória em pull requests que o alterem
- A instância do `PrismaClient` deve ser singleton para evitar esgotamento do pool de conexões

```typescript
// lib/prisma.ts — instância singleton do PrismaClient
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ['query', 'error'] })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
```

## Alternativas Consideradas

### SQL puro / query builder (Opção A)

Descartado porque o modelo de domínio do NotificaSaúde possui múltiplas entidades com relações complexas, controle de status, isolamento por `tenant_id` e auditoria obrigatória. Escrever e manter todas essas queries manualmente aumentaria significativamente o risco de inconsistências e regressões ao longo do piloto.

### TypeORM

Descartado por apresentar histórico de problemas com geração de migrações em projetos com schema em evolução, e por gerar tipos TypeScript menos precisos que o Prisma — o que reduz o principal benefício de adotar TypeScript no backend.

### Drizzle ORM

Considerado como alternativa moderna e orientada a TypeScript. Foi preterido por ter um ecossistema ainda em maturação em comparação ao Prisma, com menor disponibilidade de recursos de suporte e exemplos para o contexto do projeto.

---

**Conclusão:**
O Prisma oferece o melhor equilíbrio entre produtividade de desenvolvimento, segurança de tipos, rastreabilidade do schema e facilidade de evolução do modelo de dados — características essenciais para um sistema em fase piloto com modelo de domínio rico e requisitos de auditoria e multi-tenancy.
