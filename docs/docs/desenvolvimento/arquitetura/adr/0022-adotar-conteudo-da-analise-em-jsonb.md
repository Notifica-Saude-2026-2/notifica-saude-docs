<h1 align="center">ADR-0022 — Adotar JSONB para o conteúdo da análise até o fim da Seção 5</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 29/09/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0011](0011-adotar-orm-prisma.md) e [ADR-0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md).

!!! info "Referências no código"
    O `schema.prisma`, o `investigacao.conteudo.ts` e a migration `20260929100200_investigacao_conteudo_jsonb` do backend citam esta decisão como "ADR-0003". O arquivo correspondente nunca foi commitado na série de ADRs do backend, e esta ADR passa a ser o registro oficial.

## Contexto

O formulário de análise do incidente (Épico 4) tem cinco seções, com tabelas de tamanho variável: equipe, entrevistas, cronologia, Problemas na Prestação do Cuidado (PPCs), fatores contribuintes com 5 Porquês e recomendações. Na sprint 2, só as Seções 1 e 2 estavam especificadas e implementadas. As Seções 3 a 5 ainda estavam sendo descobertas com as proponentes, e a spec mudou várias vezes nesse período (v3.2 a v3.9).

A tabela `investigacao` tinha colunas da spec antiga (`analise NOT NULL`, `causa_raiz`, `gestor_area_id`), que impediam salvar só a Seção 1 e não existiam mais na v3.

Algumas seções referenciam itens de outras: os fatores da Seção 4 apontam para os PPCs da Seção 3, que o usuário pode reordenar e remover. Modelar tabelas antes de o formulário existir por inteiro obrigaria a decidir antecipadamente a identidade desses itens.

## Decisão

O conteúdo do formulário de análise é gravado como **um documento JSONB por análise** (`investigacao.conteudo`) até o fim da Seção 5. Depois disso, o conteúdo pode ser normalizado em tabelas.

- **Só vira coluna relacional o que o sistema consulta ou usa para autorizar**: notificação, quem detém a análise, datas de início e de conclusão e, depois, a decisão pós-análise.
- **O documento espelha as seções da tela** (`secao1` a `secao5`, mais `ultima_secao_vista` para retomar o rascunho). Cada `PATCH /investigacoes/:id/secoes/:numero` grava uma seção.
- **A forma do documento é definida no Zod** (`investigacao.conteudo.ts`), não no banco. O Zod define dois papéis por seção: o `rascunho` (o que o PATCH aceita gravar, tudo opcional) e as `pendencias` (o que falta para a seção estar completa, calculado pelo servidor).
- **As listas de opções** (formação, função, fontes consultadas etc.) são constantes no código, e não enums do Prisma. Dentro do JSONB o Postgres não confere enum, e cada opção nova custaria uma migration.

## Consequências

### Positivas

- O formulário pôde evoluir a cada versão da spec sem migrations sucessivas.
- O rascunho parcial é gravado sem restrições de `NOT NULL`. A completude fica nas pendências calculadas pelo servidor.
- Uma seção vira uma requisição, o que simplifica o salvamento automático e a retomada.

### Negativas

- O banco não garante a forma do conteúdo: toda leitura e escrita precisa passar pelo contrato do Zod.
- Consultas e relatórios sobre o conteúdo da análise exigem operadores de JSONB ou a leitura do documento inteiro.
- A normalização futura vai exigir migração de dados reais.

## Alternativas consideradas

- **Tabelas normalizadas desde o início:** rejeitada, porque obrigaria a decidir a identidade dos itens referenciados entre seções antes de as seções existirem, com risco de migrations sucessivas enquanto o formulário ainda era descoberto.
- **JSONB permanente:** rejeitada. A normalização fica prevista para quando o formulário estabilizar.

## Links

- [PR #9 (backend) — Seções 1 e 2 da análise](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9)
- [PR #12 (backend) — Seções 3 a 5, conclusão e decisão pós-análise](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12)
