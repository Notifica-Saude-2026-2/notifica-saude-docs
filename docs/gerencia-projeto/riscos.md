---
hide:
  - toc
---

<h1 align="center">Riscos do Projeto</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 24/09/2026 | Migração do documento de Riscos do Projeto (planilha do Google Drive, v1.0) para o MkDocs. | Sophya Ribeiro |

Registro dos riscos identificados em cada sprint, com a avaliação de probabilidade e impacto, a prioridade resultante, o status atual, a equipe responsável e o plano de mitigação.

<div class="ns-dec-resumo" markdown>
<div class="ns-dec-stat"><strong>1</strong><span>riscos registrados</span></div>
<div class="ns-dec-stat"><strong>1</strong><span>em aberto ou em acompanhamento</span></div>
<div class="ns-dec-stat"><strong>1</strong><span>com prioridade <span class="ns-nivel ns-nivel--alta">Alta</span></span></div>
</div>

## Sprint 1

<div class="ns-risco-tabela" markdown>

| ID | Risco e plano de mitigação | Avaliação | Status e responsável | Revisão |
| --- | --- | --- | --- | --- |
| <span class="ns-risco-id">R-001</span> | <span class="ns-dec-rotulo">Risco</span><br><span class="ns-dec-decisao">Definição de uma jornada e de suas especificações quanto ao módulo de análise antes do fim da sprint 1.</span><br><span class="ns-dec-rotulo">Plano de mitigação</span><br>Priorizar e especificar features futuras, ou implementar como der, para que testem exaustivamente em homologação. | <span class="ns-dec-rotulo">Probabilidade</span><br><span class="ns-nivel ns-nivel--media">Média</span><br><span class="ns-dec-rotulo">Impacto</span><br><span class="ns-nivel ns-nivel--alta">Alta</span><br><span class="ns-dec-rotulo">Prioridade</span><br><span class="ns-nivel ns-nivel--alta">Alta</span> | <span class="ns-status ns-status--aberto">Aberto</span><br><span class="ns-dec-rotulo">Responsável</span><br>Equipe de requisitos | 11/08/2026 |

</div>

## Como registrar um novo risco

!!! tip "Um risco por linha"
    Adicione o risco na tabela da sprint em que foi identificado (crie uma nova seção "## Sprint N" quando for o caso), com o próximo ID da sequência (R-002, R-003…). Ao atualizar o status de um risco, atualize também a data de revisão e inclua uma linha no histórico de alterações.

| Campo | Como preencher |
| --- | --- |
| **ID** | Identificador sequencial no formato R-NNN. |
| **Risco** | Descrição do evento incerto que pode afetar o projeto. |
| **Probabilidade** | Chance de o risco acontecer: <span class="ns-nivel ns-nivel--alta">Alta</span>, <span class="ns-nivel ns-nivel--media">Média</span> ou <span class="ns-nivel ns-nivel--baixa">Baixa</span>. |
| **Impacto** | Efeito sobre o projeto caso aconteça: <span class="ns-nivel ns-nivel--alta">Alta</span>, <span class="ns-nivel ns-nivel--media">Média</span> ou <span class="ns-nivel ns-nivel--baixa">Baixa</span>. |
| **Prioridade** | Urgência de tratamento, considerando probabilidade e impacto: <span class="ns-nivel ns-nivel--alta">Alta</span>, <span class="ns-nivel ns-nivel--media">Média</span> ou <span class="ns-nivel ns-nivel--baixa">Baixa</span>. |
| **Status** | <span class="ns-status ns-status--aberto">Aberto</span>, <span class="ns-status ns-status--analise">Em análise</span>, <span class="ns-status ns-status--mitigacao">Em mitigação</span>, <span class="ns-status ns-status--mitigado">Mitigado</span>, <span class="ns-status ns-status--encerrado">Encerrado</span>, <span class="ns-status ns-status--monitorado">Monitorado</span> |
| **Responsável** | Equipe Backend, Equipe de requisitos, Equipe Frontend, Equipe QA ou Equipe DevOps. |
| **Plano de mitigação** | Ações para reduzir a probabilidade ou o impacto do risco. |
| **Revisão** | Data da última revisão do risco, no formato dd/mm/aaaa. |

<!--
MODELO DE LINHA PARA COPIAR (não aparece no site). Cole ao final da tabela da sprint e ajuste os valores:
| <span class="ns-risco-id">R-002</span> | <span class="ns-dec-rotulo">Risco</span><br><span class="ns-dec-decisao">Descrição do risco.</span><br><span class="ns-dec-rotulo">Plano de mitigação</span><br>Plano. | <span class="ns-dec-rotulo">Probabilidade</span><br><span class="ns-nivel ns-nivel--media">Média</span><br><span class="ns-dec-rotulo">Impacto</span><br><span class="ns-nivel ns-nivel--alta">Alta</span><br><span class="ns-dec-rotulo">Prioridade</span><br><span class="ns-nivel ns-nivel--alta">Alta</span> | <span class="ns-status ns-status--aberto">Aberto</span><br><span class="ns-dec-rotulo">Responsável</span><br>Equipe | dd/mm/aaaa |
Níveis: ns-nivel--alta, ns-nivel--media, ns-nivel--baixa. Status: ns-status--aberto, ns-status--analise, ns-status--mitigacao, ns-status--mitigado, ns-status--encerrado, ns-status--monitorado.
-->
