<h1 align="center">Relatório de Acompanhamento: Sprint 1</h1>


<p align="center"><strong>Mantenedores:</strong> Sophya Ribeiro</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 06/10/2026 | Criação do relatório de acompanhamento da Sprint 1, a partir do modelo de Relatório de Acompanhamento de Projeto do NES. | Sophya Ribeiro |

**Período de acompanhamento:** 18/08/2026 a 10/09/2026 (Sprint 1).

Na Sprint 1, o **time de desenvolvimento** focou no **Épico 5 (plano de ação)**, enquanto a **equipe de requisitos** construiu o **protótipo funcional** para estruturar a descoberta e a validação do **Épico 4 (análise do incidente)**. O desenvolvimento do Épico 5 precisou ser **interrompido**: o épico foi subestimado, com requisitos mal coletados e muitas lacunas.

<div class="ns-dec-resumo" markdown>

<div class="ns-dec-stat"><strong>3</strong><span>desvios registrados</span></div>
<div class="ns-dec-stat"><strong>2</strong><span>classificados como problema</span></div>
<div class="ns-dec-stat"><strong>Épico 4</strong><span>priorizado para a Sprint 2</span></div>
</div>

## Sumário

- [1. Status dos parâmetros do projeto](#parametros)
- [2. Desvios e problemas](#desvios)
- [3. Ações corretivas](#acoes)
- [4. Outras observações](#observacoes)

---

## 1. Status dos parâmetros do projeto { #parametros }

Análise de status dos parâmetros do projeto no período de acompanhamento. Cada resposta "Sim" corresponde a um desvio descrito na [seção 2](#desvios).

<div class="ns-acomp-tabela" markdown>

| Parâmetro | Questão | Resposta |
| --- | --- | :---: |
| **Escopo** | Houve alterações no escopo do projeto? | <span class="ns-tag ns-tag--outro">Não</span> |
| **Quadro de tarefas** | Houve adição ou remoção de tarefas do quadro de tarefas do projeto? | <span class="ns-nivel ns-nivel--info">Sim</span> |
| **Tarefas não planejadas** | Foi executada alguma tarefa não planejada (desde que não seja ação corretiva prevista em algum outro relatório)? | <span class="ns-tag ns-tag--outro">Não</span> |
| **Riscos** | Houve alteração na lista de riscos do projeto, seja pela adição ou remoção de risco, ou pela mudança na probabilidade ou impacto de algum risco existente? | <span class="ns-nivel ns-nivel--info">Sim</span> |
| **Comunicação** | Houve alguma comunicação planejada que não foi realizada? | <span class="ns-tag ns-tag--outro">Não</span> |
| **Artefato** | Houve algum artefato que deveria ter sido finalizado no período, mas que não foi? | <span class="ns-nivel ns-nivel--info">Sim</span> |
| **Dados** | Foi violada a estratégia de armazenamento de dados do projeto ou as diretrizes de acesso aos seus artefatos? | <span class="ns-tag ns-tag--outro">Não</span> |
| **Equipe** | Houve alteração na equipe do projeto, seja pela saída ou entrada de algum membro, ou mesmo pela alteração de papéis? | <span class="ns-tag ns-tag--outro">Não</span> |
| **Recursos** | Houve algum recurso material ou de infraestrutura, necessário e planejado para o período, e que, no entanto, não foi disponibilizado? | <span class="ns-tag ns-tag--outro">Não</span> |
| **Acompanhamento** | Houve alguma atividade de acompanhamento do projeto que não foi realizada conforme o plano? | <span class="ns-tag ns-tag--outro">Não</span> |

</div>

---

## 2. Desvios e problemas { #desvios }

Desvios da execução em relação ao plano de projeto, com seu identificador e a classificação (se é um problema ou não).

<div class="ns-acomp-tabela" markdown>

| Parâmetro | Id | Desvio | É problema? |
| --- | :---: | --- | :---: |
| **Quadro de tarefas** | 001 | O desenvolvimento do Épico 5 (plano de ação) foi interrompido durante a sprint, e as tarefas restantes do épico saíram do quadro da sprint. | <span class="ns-nivel ns-nivel--alta">Sim</span> |
| **Artefato** | 002 | As entregas do Épico 5 previstas para o período não foram finalizadas. O épico foi subestimado: os requisitos foram mal coletados e ficaram com muitas lacunas. | <span class="ns-nivel ns-nivel--alta">Sim</span> |
| **Riscos** | 003 | O risco [R-001](../riscos.md), sobre a definição do módulo de análise, permaneceu em acompanhamento, e a equipe identificou um novo ponto de atenção: lacunas nos requisitos do Épico 5. | <span class="ns-nivel ns-nivel--baixa">Não</span> |

</div>

---

## 3. Ações corretivas { #acoes }

Ações adotadas para tratar os desvios descritos na seção anterior.

<div class="ns-acomp-tabela" markdown>

| Id do desvio | Ação corretiva |
| :---: | --- |
| 001 | **Plano de contingência:** na Sprint 2, a análise do incidente (Épico 4) passa a ser feita primeiro, pois é dependência do Épico 5. O plano de ação é retomado depois. |
| 002 | Os requisitos do Épico 5 são revisados a partir do fluxo validado no protótipo, antes de o desenvolvimento do épico ser retomado. |
| 003 | A descoberta e a validação do Épico 4 seguem pelo protótipo funcional, publicado no GitHub Pages para as proponentes validarem no próprio tempo ([decisão 07](../diario-de-decisoes.md) do Diário de Decisões). |

</div>

---

## 4. Outras observações { #observacoes }

O protótipo funcional construído pela equipe de requisitos passou a ser a base para estruturar a descoberta e a validação da feature de análise com as proponentes.
