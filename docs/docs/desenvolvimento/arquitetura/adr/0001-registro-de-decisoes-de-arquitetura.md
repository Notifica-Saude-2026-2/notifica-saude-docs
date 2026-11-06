<h1 align="center">ADR-0001 — Registrar decisões de arquitetura</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 10/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 10/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

Nós precisamos registrar decisões arquiteturais feitas no projeto NotificaSaúde.

## Decisão

Nós iremos usar _Architecture Decision Records_, como [descrito por Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) para documentar em um formato compatível mas ainda agnóstico da ferramenta utilizada para renderizar e analisar os diagramas e documentos arquiteturais.

## Consequências

- Registros de decisões arquiteturais ficarão centralizadas em um único repositório
- Registros de decisões arquiteturais podem serem feitas de forma incremental
- Registros de decisões descontinuados e/ou substituídas continuarão disponíveis para contexto histórico e indicando o registro de decisão arquitetural que a substituiu
- Registros de decisões arquiteturais devem ser revisados sempre que um novo registro for adicionado para garantir a coerência dos registros com as decisões tomadas
