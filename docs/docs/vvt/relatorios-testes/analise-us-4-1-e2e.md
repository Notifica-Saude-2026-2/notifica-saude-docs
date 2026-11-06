---
hide:
  - toc
---

<h1 align="center">Relatório de Testes End-to-End</h1>

<p align="center"><strong>Épico 4 — Análise do Incidente · US-4.1</strong></p>

## 1. Resumo em uma olhada

A US-4.1 cobre o acesso do gestor da área às notificações e aos resultados das análises. Nesta execução, os cenários executáveis da história passaram; os cenários que dependem de etapas ainda indisponíveis foram pulados.

A suíte completa teve **139 testes aprovados, 16 pulados e 1 falha**. A falha ocorreu no **CT-E2E-004**, ao tentar selecionar “Pronto atendimento / emergência” no filtro por setor. Ela ocorreu fora dos testes da US-4.1.

## 2. Execução

**Comando:** `npx playwright test --project=chromium`

**Navegador:** Chromium

**Branch:** [`test/25/automatiza-cts-us-4-1`](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/tree/test/25/automatiza-cts-us-4-1)

| Resultado da suíte completa | Quantidade |
| --- | ---: |
| Testes aprovados | 139 |
| Testes pulados | 16 |
| Testes com falha | 1 |
| **Total** | **156** |

### Resultado dos testes da US-4.1

- **CT-E2E-019 — CA02:** passou ao verificar que a notificação encaminhada permanece na fila depois que o NSP inicia a análise e que a notificação arquivada continua visível e pode ser aberta.
- **CT-E2E-020 — CA07:** passou ao verificar que, antes da decisão do NSP, o gestor não vê a notificação nem acessa seu detalhe ou análise.
- **Cinco cenários foram pulados:** três estados posteriores da fila (“Analisado”, “Em ação” e “Concluído”) e duas possibilidades após a decisão do NSP.

## 3. Quanto da história foi verificado?

| Situação | Critérios e cenários |
| --- | --- |
| Verificado e aprovado | CA02 — notificação encaminhada em análise e notificação arquivada; CA07 — gestor sem acesso antes da decisão do NSP |
| Pendente | CA02 — estados “Analisado”, “Em ação” e “Concluído”; CA07 — resultado encaminhado e não encaminhamento justificado |
| Com falha conhecida | Nenhuma falha da US-4.1 apareceu nesta execução |

A aprovação vale para os cenários executados. Os cenários pendentes não foram verificados porque dependem de funcionalidades ainda indisponíveis, conforme indicado nos próprios testes.

## 4. Falha observada no restante da suíte

O **CT-E2E-004**, de visualização de notificações, falhou ao filtrar por setor. O Playwright não encontrou a opção “Pronto atendimento / emergência” e excedeu o limite de 90 segundos. Sem uma execução anterior comparável, não é possível concluir se a falha já existia. A execução terminou com código de saída 1.

## 5. Conclusão

Os cenários executáveis da US-4.1 passaram na suíte completa. Não houve falha nos CT-E2E-019 e CT-E2E-020. A cobertura continua parcial nos estados posteriores da fila e nas decisões sobre o resultado da análise. A falha no CT-E2E-004 deve ser acompanhada separadamente.

## 6. Referências

- [Branch `test/25/automatiza-cts-us-4-1`](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/tree/test/25/automatiza-cts-us-4-1).
- [CT-E2E-019 — Permanência do incidente na fila do gestor](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/blob/test/25/automatiza-cts-us-4-1/tests/e2e/ct-e2e-019.spec.ts).
- [CT-E2E-020 — Acesso do gestor ao resultado da análise](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/blob/test/25/automatiza-cts-us-4-1/tests/e2e/ct-e2e-020.spec.ts).
- [CT-E2E-004 — Visualização de notificações registradas](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/blob/test/25/automatiza-cts-us-4-1/tests/e2e/ct-e2e-004.spec.ts).
- [Casos de Teste — seção de testes end-to-end](../casos-de-teste.md#testes-e2e).
- [Matriz de Rastreabilidade — Épico 4](../matriz-rastreabilidade.md#epico-4).

**Registro da execução:** 16/10/2026.
