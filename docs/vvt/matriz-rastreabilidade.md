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
<div class="ns-dec-stat"><strong>102</strong><span>critérios de aceite mapeados</span></div>
<div class="ns-dec-stat"><strong>44%</strong><span>com caso de teste (45 de 102)</span></div>
<div class="ns-dec-stat"><strong>66</strong><span>casos de teste de histórias</span></div>
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
| **US-4.1** | CA01 a CA04 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **US-4.2** | CA01 a CA06 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **US-4.3** | CA01 a CA06 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
| **US-4.4** | CA01 a CA05 | — | <span class="ns-rast ns-rast--naodoc">Não documentado</span> | — |
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
