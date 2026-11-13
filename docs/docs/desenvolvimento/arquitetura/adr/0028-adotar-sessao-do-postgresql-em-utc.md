<h1 align="center">ADR-0028 — Adotar sessão do PostgreSQL em UTC no cliente Prisma</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 09/10/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0011](0011-adotar-orm-prisma.md) e [ADR-0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md).

## Contexto

Na automação do CT-E2E-021 (US-4.2), o salvamento de uma seção da análise devolvia o `updated_at` 4 horas antes da hora real, antes até da data de início da análise (BUG-BACK-009, issue #15 do e2e). Isso fere a US-4.2 CA14, que manda registrar a data e a hora da operação.

A causa está no `@prisma/adapter-pg` combinado com o PostgreSQL em `America/Campo_Grande`:

- **Na escrita**, o adapter envia o `DateTime` com o relógio UTC e sem offset. O banco lê esse valor no fuso da sessão e grava as datas do Prisma 4 horas adiantadas.
- **Na leitura**, o adapter troca o offset devolvido pelo banco por `+00:00` sem converter a hora. Assim, as datas gravadas pelo Prisma "voltam certas", mas o `now()` do SQL volta 4 horas atrasado.

## Decisão

O cliente Prisma abre a sessão com o PostgreSQL em UTC (`options: "-c TimeZone=UTC"` no `PrismaPg`), na aplicação e nos seeds, que têm cliente próprio.

O processo Node continua em `America/Campo_Grande` (`TZ`), porque o prazo da classificação, as datas dos e-mails e do histórico dependem do fuso local. Não há mudança em `TZ`, no `.env` nem na `DATABASE_URL`.

## Consequências

### Positivas

- O `now()` do SQL e as datas geradas pelo Prisma gravam o mesmo instante, em todas as tabelas.
- A correção vale em todos os ambientes (local, CI, e2e e homologação) sem configuração extra.
- Um teste de integração confere `SHOW TimeZone = UTC`, o que protege o CI, cujo Postgres não reproduziria o deslocamento.

### Negativas

- Todo cliente Prisma novo (seed, script, worker) precisa da mesma opção. Sem ela, o deslocamento volta.
- Quem consulta o banco direto (psql, ferramentas de BI) vê os horários conforme o fuso da própria sessão, e não o da aplicação.

## Alternativas consideradas

- **Corrigir só o `gravarSecao`** (paliativo no ponto do bug): os demais pontos que usam `now()` continuariam errados.
- **Mudar o fuso do banco ou do processo para UTC:** quebraria o cálculo de prazos e as datas exibidas nos e-mails e no histórico.

## Links

- [PR #11 (backend) — Sessão do Postgres em UTC](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/11)
- [Issue #15 (e2e) — BUG-BACK-009](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/15)
