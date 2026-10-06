---
hide:
  - toc
---

<h1 align="center">Matriz de Rastreabilidade</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 3.0 | — | Matriz de rastreabilidade entre épicos, histórias de usuário, critérios de aceite, regras de negócio, requisitos não-funcionais e casos de teste (planilha do Google Drive). | Equipe de QA |
    | 3.1 | 25/09/2026 | Migração da planilha (versão 3.0) para o MkDocs, substituindo a matriz gerada automaticamente a partir dos casos de teste. | Sophya Ribeiro |
    | 3.2 | 29/09/2026 | Inclusão dos casos de teste da US-4.1 (CA01 a CA08) no Épico 4, ligação dos casos de teste CT-FUN-045 e CT-FUN-044 aos RNF 6.2.2 e 6.3.4 e atualização do resumo. | Catarina Freisleben |
    | 3.3 | 29/09/2026 | Inclusão dos casos de teste da US-4.2 (CA01 a CA19) no Épico 4, ligação dos seus casos de teste aos RNF 6.7.2, 6.7.4, 6.7.5, 6.7.6 e 6.7.7 e atualização do resumo. | Catarina Freisleben |
    | 3.4 | 05/10/2026 | Inclusão dos casos de teste da US-4.3 (CA01 a CA04) e da US-4.4 (CA01 a CA07) no Épico 4 e atualização do resumo da rastreabilidade. | Gustavo Henrique |

## Sumário

- [1. Introdução](#introducao)
- [2. Histórias de usuário × critérios de aceite × casos de teste](#historias)
    - [Épico 1](#epico-1)
    - [Épico 2](#epico-2)
    - [Épico 3](#epico-3)
    - [Épico 4](#epico-4)
    - [Épico 5](#epico-5)
- [3. Histórias de usuário × regras de negócio](#regras-negocio)
- [4. Requisitos não-funcionais × casos de teste](#requisitos-nao-funcionais)

---

## 1. Introdução { #introducao }

Esta matriz relaciona cada critério de aceite das histórias de usuário aos casos de teste que o validam, com o status de documentação e automação de cada caso e o responsável. Também relaciona as histórias às regras de negócio e os requisitos não-funcionais aos seus casos de teste. Os casos de teste estão descritos em [Casos de Teste](casos-de-teste.md).

<div class="ns-dec-resumo" markdown>
<div class="ns-dec-stat"><strong>119</strong><span>critérios de aceite mapeados</span></div>
<div class="ns-dec-stat"><strong>61%</strong><span>com caso de teste (72 de 119)</span></div>
<div class="ns-dec-stat"><strong>81</strong><span>casos de teste de histórias</span></div>
<div class="ns-dec-stat"><strong>25</strong><span>casos de teste automatizados</span></div>
</div>

<div class="ns-legenda"><strong>Status:</strong> <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> <span class="ns-rast ns-rast--naodoc">Não documentado</span> <span class="ns-rast ns-rast--naoauto">Não automatizado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> <span class="ns-rast ns-rast--naoloc">Requisito não localizado nos requisitos</span></div>

!!! warning "Numeração"
    A numeração de histórias, critérios de aceite, regras de negócio e requisitos não-funcionais segue a versão da especificação de requisitos vigente quando a matriz foi elaborada, e pode não corresponder à numeração atual da [Especificação de Requisitos de Software](../requisitos/especificacao-requisitos.md).

---

## 2. Histórias de usuário × critérios de aceite × casos de teste { #historias }

### Épico 1 { #epico-1 }

<div class="ns-rast-tabela" markdown>

| História | Critério de aceite | Caso de teste | Status | Responsável |
| --- | --- | --- | --- | --- |
| **US-1.1** | CA01 | [CT-FUN-001](casos-de-teste.md#ct-fun-001) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
|  | CA02 | [CT-FUN-002](casos-de-teste.md#ct-fun-002) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
|  | CA02 | [CT-FUN-003](casos-de-teste.md#ct-fun-003) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
|  | CA02 | [CT-FUN-005](casos-de-teste.md#ct-fun-005) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
|  | CA03 | [CT-E2E-001](casos-de-teste.md#ct-e2e-001) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline |
|  | CA03 | [CT-E2E-002](casos-de-teste.md#ct-e2e-002) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline |
|  | CA03 | [CT-E2E-003](casos-de-teste.md#ct-e2e-003) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline |

</div>

### Épico 2 { #epico-2 }

<div class="ns-rast-tabela" markdown>

| História | Critério de aceite | Caso de teste | Status | Responsável |
| --- | --- | --- | --- | --- |
| **US-2.1** | CA01 | [CT-FUN-006](casos-de-teste.md#ct-fun-006) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA02 | [CT-FUN-007](casos-de-teste.md#ct-fun-007) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA03 | [CT-FUN-008](casos-de-teste.md#ct-fun-008) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA04 | [CT-FUN-009](casos-de-teste.md#ct-fun-009) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-010](casos-de-teste.md#ct-fun-010) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-011](casos-de-teste.md#ct-fun-011) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-012](casos-de-teste.md#ct-fun-012) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA06 | [CT-FUN-013](casos-de-teste.md#ct-fun-013) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA07 | [CT-FUN-014](casos-de-teste.md#ct-fun-014) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA07 | [CT-E2E-004](casos-de-teste.md#ct-e2e-004) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline |
| **US-2.2** | CA01 | [CT-FUN-015](casos-de-teste.md#ct-fun-015) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA02 | [CT-FUN-016](casos-de-teste.md#ct-fun-016) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA03 | [CT-FUN-017](casos-de-teste.md#ct-fun-017) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA04 | [CT-FUN-018](casos-de-teste.md#ct-fun-018) | <span class="ns-rast ns-rast--doc">Documentado</span> | Pedro |
|  | CA04 | [CT-E2E-005](casos-de-teste.md#ct-e2e-005) | <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
| **US-2.3** | CA01 | [CT-FUN-019](casos-de-teste.md#ct-fun-019) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA02 | [CT-FUN-020](casos-de-teste.md#ct-fun-020) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA03 | [CT-FUN-021](casos-de-teste.md#ct-fun-021) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA04 | [CT-FUN-022](casos-de-teste.md#ct-fun-022) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-023](casos-de-teste.md#ct-fun-023) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-024](casos-de-teste.md#ct-fun-024) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-025](casos-de-teste.md#ct-fun-025) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-E2E-006](casos-de-teste.md#ct-e2e-006) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA05 | [CT-E2E-007](casos-de-teste.md#ct-e2e-007) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA05 | [CT-E2E-008](casos-de-teste.md#ct-e2e-008) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA05 | [CT-E2E-009](casos-de-teste.md#ct-e2e-009) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA05 | [CT-E2E-010](casos-de-teste.md#ct-e2e-010) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA05 | [CT-FUN-026](casos-de-teste.md#ct-fun-026) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA06 | [CT-E2E-018](casos-de-teste.md#ct-e2e-018) | <span class="ns-rast ns-rast--auto">Automatizado</span> | Catarina |
|  | CA07 | [CT-E2E-011](casos-de-teste.md#ct-e2e-011) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
| **US-2.4** | CA01 | [CT-FUN-027](casos-de-teste.md#ct-fun-027) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA02 | [CT-FUN-028](casos-de-teste.md#ct-fun-028) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA03 | [CT-FUN-029](casos-de-teste.md#ct-fun-029) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA04 | [CT-FUN-030](casos-de-teste.md#ct-fun-030) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-031](casos-de-teste.md#ct-fun-031) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-FUN-032](casos-de-teste.md#ct-fun-032) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA06 | [CT-E2E-013](casos-de-teste.md#ct-e2e-013) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA07 | [CT-FUN-033](casos-de-teste.md#ct-fun-033) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA08 | [CT-FUN-034](casos-de-teste.md#ct-fun-034) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA08 | [CT-E2E-012](casos-de-teste.md#ct-e2e-012) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
| **US-2.5** | CA01 | [CT-FUN-035](casos-de-teste.md#ct-fun-035) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA02 | [CT-FUN-036](casos-de-teste.md#ct-fun-036) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA03 | [CT-FUN-037](casos-de-teste.md#ct-fun-037) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA03 | [CT-E2E-015](casos-de-teste.md#ct-e2e-015) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA04 | [CT-FUN-038](casos-de-teste.md#ct-fun-038) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA04 | [CT-E2E-014](casos-de-teste.md#ct-e2e-014) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA05 | [CT-FUN-039](casos-de-teste.md#ct-fun-039) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA05 | [CT-E2E-016](casos-de-teste.md#ct-e2e-016) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |
|  | CA06 | [CT-FUN-040](casos-de-teste.md#ct-fun-040) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--emauto">Em automatização</span> | Pedro |
|  | CA06 | [CT-E2E-017](casos-de-teste.md#ct-e2e-017) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Aline, Fábio |

</div>

### Épico 3 { #epico-3 }

<div class="ns-rast-tabela" markdown>

| História | Critério de aceite | Caso de teste | Status | Responsável |
| --- | --- | --- | --- | --- |
| **US-3.1** | CA01 | [CT-AUTH-001](casos-de-teste.md#ct-auth-001) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
|  | CA02 | [CT-AUTH-002](casos-de-teste.md#ct-auth-002) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
|  | CA03 | [CT-AUTH-003](casos-de-teste.md#ct-auth-003) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Pedro |
| **US-3.2** | CA01 | [CT-AUTH-004](casos-de-teste.md#ct-auth-004) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> | Pedro |
|  | CA02 | [CT-AUTH-005](casos-de-teste.md#ct-auth-005) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> | Pedro |
|  | CA03 | [CT-AUTH-006](casos-de-teste.md#ct-auth-006) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> | Pedro |
|  | CA04 | [CT-AUTH-007](casos-de-teste.md#ct-auth-007) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> | Pedro |
|  | CA05 | [CT-AUTH-008](casos-de-teste.md#ct-auth-008) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> | Pedro |
|  | CA06 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
|  | CA07 | [CT-AUTH-009](casos-de-teste.md#ct-auth-009) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> | Pedro |
|  | CA08 | [CT-AUTH-007](casos-de-teste.md#ct-auth-007) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--pronto">Pronto para automatizar</span> | Pedro |

</div>

### Épico 4 { #epico-4 }

<div class="ns-rast-tabela" markdown>

| História | Critério de aceite | Caso de teste | Status | Responsável |
| --- | --- | --- | --- | --- |
| **US-4.1** | CA01 | [CT-FUN-041](casos-de-teste.md#ct-fun-041) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA02 | [CT-E2E-019](casos-de-teste.md#ct-e2e-019) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA03 | [CT-FUN-042](casos-de-teste.md#ct-fun-042) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA04 | [CT-FUN-043](casos-de-teste.md#ct-fun-043) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA05 | [CT-FUN-044](casos-de-teste.md#ct-fun-044) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA06 | [CT-FUN-045](casos-de-teste.md#ct-fun-045) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA07 | [CT-E2E-020](casos-de-teste.md#ct-e2e-020) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA08 | [CT-FUN-046](casos-de-teste.md#ct-fun-046) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
| **US-4.2** | CA01 | [CT-E2E-021](casos-de-teste.md#ct-e2e-021) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA02 | [CT-E2E-021](casos-de-teste.md#ct-e2e-021) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA03 | [CT-FUN-048](casos-de-teste.md#ct-fun-048) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA04 | [CT-FUN-048](casos-de-teste.md#ct-fun-048) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA05 | [CT-FUN-047](casos-de-teste.md#ct-fun-047) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA06 | [CT-FUN-047](casos-de-teste.md#ct-fun-047) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA07 | [CT-E2E-021](casos-de-teste.md#ct-e2e-021) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA08 | [CT-FUN-049](casos-de-teste.md#ct-fun-049) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA09 | [CT-FUN-049](casos-de-teste.md#ct-fun-049) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA10 | [CT-FUN-050](casos-de-teste.md#ct-fun-050) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA11 | [CT-FUN-051](casos-de-teste.md#ct-fun-051) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA12 | [CT-FUN-051](casos-de-teste.md#ct-fun-051) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA13 | [CT-FUN-050](casos-de-teste.md#ct-fun-050) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA14 | [CT-E2E-021](casos-de-teste.md#ct-e2e-021) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA15 | [CT-E2E-021](casos-de-teste.md#ct-e2e-021) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA16 | [CT-FUN-052](casos-de-teste.md#ct-fun-052) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA17 | [CT-FUN-052](casos-de-teste.md#ct-fun-052) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA18 | [CT-FUN-052](casos-de-teste.md#ct-fun-052) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
|  | CA19 | [CT-FUN-051](casos-de-teste.md#ct-fun-051) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Catarina |
| **US-4.3** | CA01 | [CT-FUN-053](casos-de-teste.md#ct-fun-053), [CT-FUN-054](casos-de-teste.md#ct-fun-054), [CT-FUN-055](casos-de-teste.md#ct-fun-055) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA02 | [CT-FUN-056](casos-de-teste.md#ct-fun-056) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA03 | [CT-FUN-057](casos-de-teste.md#ct-fun-057), [CT-FUN-059](casos-de-teste.md#ct-fun-059), [CT-FUN-061](casos-de-teste.md#ct-fun-061), [CT-E2E-023](casos-de-teste.md#ct-e2e-023) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA04 | [CT-FUN-062](casos-de-teste.md#ct-fun-062), [CT-FUN-063](casos-de-teste.md#ct-fun-063), [CT-E2E-022](casos-de-teste.md#ct-e2e-022) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
| **US-4.4** | CA01 | [CT-FUN-064](casos-de-teste.md#ct-fun-064), [CT-FUN-066](casos-de-teste.md#ct-fun-066), [CT-E2E-024](casos-de-teste.md#ct-e2e-024), [CT-E2E-025](casos-de-teste.md#ct-e2e-025) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA02 | [CT-FUN-065](casos-de-teste.md#ct-fun-065) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA03 | [CT-FUN-067](casos-de-teste.md#ct-fun-067), [CT-FUN-068](casos-de-teste.md#ct-fun-068), [CT-E2E-024](casos-de-teste.md#ct-e2e-024) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA04 | [CT-FUN-069](casos-de-teste.md#ct-fun-069), [CT-FUN-070](casos-de-teste.md#ct-fun-070), [CT-FUN-071](casos-de-teste.md#ct-fun-071), [CT-E2E-024](casos-de-teste.md#ct-e2e-024), [CT-E2E-025](casos-de-teste.md#ct-e2e-025) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA05 | [CT-FUN-072](casos-de-teste.md#ct-fun-072), [CT-E2E-024](casos-de-teste.md#ct-e2e-024), [CT-E2E-025](casos-de-teste.md#ct-e2e-025) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA06 | [CT-FUN-073](casos-de-teste.md#ct-fun-073), [CT-FUN-074](casos-de-teste.md#ct-fun-074), [CT-E2E-025](casos-de-teste.md#ct-e2e-025) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
|  | CA07 | [CT-FUN-075](casos-de-teste.md#ct-fun-075) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Gustavo Henrique |
| **US-4.5** | CA01 a CA04 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |

</div>

### Épico 5 { #epico-5 }

<div class="ns-rast-tabela" markdown>

| História | Critério de aceite | Caso de teste | Status | Responsável |
| --- | --- | --- | --- | --- |
| **US-5.1** | CA01 a CA09 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **US-5.2** | CA01 a CA05 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **US-5.3** | CA01 a CA11 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **US-5.4** | CA01 a CA06 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |

</div>

---

## 3. Histórias de usuário × regras de negócio { #regras-negocio }

| Épico | História | Regras de negócio |
| --- | --- | --- |
| **Épico 1** | US-1.1 | RN-04 |
| **Épico 2** | US-2.1 | RN-10 |
|  | US-2.2 | RN-02, RN-09 |
|  | US-2.3 | RN-03, RN-05 |
|  | US-2.4 | RN-08 |
|  | US-2.5 | RN-08 |
| **Épico 3** | US-3.1 | RN-01 |
|  | US-3.2 | <span class="ns-dec-ctx">Nenhuma regra associada</span> |
| **Épico 4** | US-4.1 | RN-08 |
|  | US-4.2 | RN-07, RN-08 |
|  | US-4.3 | <span class="ns-dec-ctx">Nenhuma regra associada</span> |
|  | US-4.4 | <span class="ns-dec-ctx">Nenhuma regra associada</span> |
|  | US-4.5 | <span class="ns-dec-ctx">Nenhuma regra associada</span> |
| **Épico 5** | US-5.1 | RN-07 |
|  | US-5.2 | RN-07 |
|  | US-5.3 | RN-07 |
|  | US-5.4 | RN-11, RN-12 |

---

## 4. Requisitos não-funcionais × casos de teste { #requisitos-nao-funcionais }

| Requisito não-funcional | Caso de teste | Status | Responsável |
| --- | --- | --- | --- |
| **RNF 8.1.1** | [CT-NF-001](casos-de-teste.md#ct-nf-001) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoauto">Não automatizado</span> | Equipe 01/2026 |
| **RNF 8.1.2** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **—** | [CT-NF-002](casos-de-teste.md#ct-nf-002) | <span class="ns-rast ns-rast--naoloc">Requisito não localizado nos requisitos</span> | Equipe 01/2026 |
| **RNF 8.2.1** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.2.2** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.2.3** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.2.4** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.2.5** | [CT-NF-003](casos-de-teste.md#ct-nf-003) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Equipe 01/2026 |
| **RNF 8.2.6** | [CT-NF-004](casos-de-teste.md#ct-nf-004) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoauto">Não automatizado</span> | Equipe 01/2026 |
| **RNF 8.2.7** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.2.8** | [CT-NF-010](casos-de-teste.md#ct-nf-010) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Equipe 01/2026 |
| **RNF 8.3.1** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.3.2** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.3.3** | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **RNF 8.4.1** | [CT-NF-005](casos-de-teste.md#ct-nf-005) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Equipe 01/2026 |
| **RNF 8.4.2** | [CT-NF-006](casos-de-teste.md#ct-nf-006) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--auto">Automatizado</span> | Equipe 01/2026 |
| **RNF 8.5.1** | [CT-NF-007](casos-de-teste.md#ct-nf-007) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 01/2026 |
|  | [CT-NF-008](casos-de-teste.md#ct-nf-008) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoauto">Não automatizado</span> | Equipe 01/2026 |
| **RNF 8.6.1** | [CT-NF-009](casos-de-teste.md#ct-nf-009) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoauto">Não automatizado</span> | Equipe 01/2026 |
| **RNF 6.2.2** | [CT-FUN-045](casos-de-teste.md#ct-fun-045) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 02/2026 |
| **RNF 6.3.4** | [CT-FUN-044](casos-de-teste.md#ct-fun-044) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 02/2026 |
| **RNF 6.7.2** | [CT-E2E-021](casos-de-teste.md#ct-e2e-021) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 02/2026 |
| **RNF 6.7.4** | [CT-FUN-051](casos-de-teste.md#ct-fun-051) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 02/2026 |
| **RNF 6.7.5** | [CT-FUN-050](casos-de-teste.md#ct-fun-050) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 02/2026 |
| **RNF 6.7.6** | [CT-FUN-049](casos-de-teste.md#ct-fun-049) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 02/2026 |
| **RNF 6.7.7** | [CT-FUN-050](casos-de-teste.md#ct-fun-050) | <span class="ns-rast ns-rast--doc">Documentado</span> <span class="ns-rast ns-rast--naoimpl">Não implementado</span> | Equipe 02/2026 |
