<h1 align="center">Gerenciamento de Mudanças</h1>


<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Introdução](#introducao)
- [2. Composição de issue](#composicao-issue)

---

<a id="introducao"></a>

## 1. Introdução

Antes de realizar uma alteração ou implementar uma nova funcionalidade, deve-se abrir uma **issue** que permita a identificação dos objetivos, dos métodos e do contexto da modificação. As issues devem seguir um padrão de escrita que permita aos membros da equipe identificar o contexto da alteração, qual necessidade será atendida e quais são as possíveis soluções ou métodos utilizados para realizá-la.

No fluxo de trabalho do GitHub com o **GitFlow**, toda nova alteração no projeto deve estar vinculada a uma issue, permitindo rastrear o desenvolvimento da funcionalidade desde a sua concepção até a sua implementação e integração às branches principais.

As issues devem seguir um padrão que permita identificar o contexto da alteração, a necessidade que será atendida e as possíveis soluções dentro do contexto do projeto.

Esta regra aplica-se aos repositórios de código. As alterações na documentação seguem o fluxo próprio descrito em [Gerenciamento de Documentação](gerenciamento-documentacao.md#issue), no qual a issue é exigida apenas para tarefas complexas.

---

<a id="composicao-issue"></a>

## 2. Composição de issue

As issues devem seguir um padrão baseado em **histórias de usuário**, permitindo que a equipe compreenda claramente a funcionalidade a ser implementada, o contexto em que ela será utilizada e os critérios necessários para considerar a tarefa concluída.

A estrutura da issue deve conter os seguintes elementos:

| Elemento | Descrição |
| --- | --- |
| **Descrição** | Define a funcionalidade ou melhoria a ser implementada utilizando o formato de história de usuário. Esse formato ajuda a entender quem será beneficiado pela funcionalidade e qual valor ela entrega ao sistema. |
| **Critérios de aceitação** | Lista de condições que devem ser atendidas para que a funcionalidade seja considerada concluída. Esses critérios orientam o desenvolvimento e facilitam a validação da funcionalidade implementada. |
| **Informações adicionais** | Campo opcional utilizado para incluir links, imagens, referências, exemplos de implementação ou qualquer outra informação que possa auxiliar no desenvolvimento da funcionalidade. |

Antes de ser iniciada, a issue deve atender integralmente aos critérios descritos na [Definição de Pronto para Desenvolvimento (DoR)](definicao-de-pronto.md#dor).
