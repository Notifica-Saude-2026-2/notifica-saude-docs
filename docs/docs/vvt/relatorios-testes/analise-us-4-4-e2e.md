---
hide:
  - toc
---

<h1 align="center">Relatório de Testes End-to-End</h1>

<p align="center"><strong>Épico 4 — Análise do Incidente · US-4.4</strong></p>

## 1. Resumo

A US-4.4 cobre o registro da equipe, das fontes consultadas e das entrevistas durante a análise. Nesta execução, os cenários implementados dos **CT-E2E-024 e CT-E2E-025 passaram**. Os dois cenários que tentam avançar para a Seção 3 foram pulados porque essa seção ainda não está disponível.

## 2. Execução

**Comando:** `npx playwright test --project=chromium`

**Navegador:** Chromium

**Branch:** [`test/27/automatiza-cts-us-4.4`](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/tree/test/27/automatiza-cts-us-4.4)

**Suíte completa:** 160 testes

| Resultado da suíte | Quantidade |
| --- | ---: |
| Aprovados | 141 |
| Pulados | 18 |
| Com falha | 1 |
| **Total** | **160** |

### Resultados dos testes da US-4.4

| Caso de teste | Resultado |
| --- | --- |
| CT-E2E-024 — equipe e fontes sem entrevistas | Passou o cenário executável |
| CT-E2E-025 — registro de entrevista | Passou o cenário executável |
| Avanço da Seção 2 para a Seção 3 | Pendente nos dois casos |

## 3. O que foi verificado

- **CT-E2E-024 — CA01, CA03, CA04 e CA05:** o gestor registra a equipe e as fontes consultadas, informa que não é necessário ouvir entrevistados e mantém esses dados ao salvar a Seção 2.
- **CT-E2E-025 — CA01, CA04, CA05 e CA06:** o gestor registra uma entrevista quando indica que é necessário ouvir alguém. Os dados da entrevista permanecem após salvar a seção e recarregar o formulário.

Os testes confirmam os dados na Seção 2. Eles não verificam a continuidade do fluxo na Seção 3, pois esse cenário está marcado como pendente.

## 4. Falha no restante da suíte

A suíte completa teve uma falha no **CT-E2E-004**, ao filtrar notificações por setor: o Playwright não encontrou a opção “Pronto atendimento / emergência” e excedeu o limite de 90 segundos. Essa falha pertence a outro caso de teste; os CT-E2E-024 e CT-E2E-025 passaram.

## 5. Conclusão

Os cenários executáveis dos CT-E2E-024 e CT-E2E-025 passaram nesta rodada. A cobertura da US-4.4 é parcial: falta verificar o avanço da Seção 2 para a Seção 3 quando essa etapa estiver disponível. A suíte geral terminou com uma falha no CT-E2E-004.

## 6. Referências

- [Branch `test/27/automatiza-cts-us-4.4`](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/tree/test/27/automatiza-cts-us-4.4).
- [CT-E2E-024 — Equipe e fontes da análise sem entrevistas](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/blob/test/27/automatiza-cts-us-4.4/tests/e2e/ct-e2e-024.spec.ts).
- [CT-E2E-025 — Registro de entrevista na análise](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/blob/test/27/automatiza-cts-us-4.4/tests/e2e/ct-e2e-025.spec.ts).
- [CT-E2E-004 — Visualização de notificações registradas](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/blob/test/27/automatiza-cts-us-4.4/tests/e2e/ct-e2e-004.spec.ts).
- [Casos de Teste — seção de testes end-to-end](../casos-de-teste.md#testes-e2e).
- [Matriz de Rastreabilidade — Épico 4](../matriz-rastreabilidade.md#epico-4).

**Registro da execução:** 17/10/2026.
