<h1 align="center">Uso de IA</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 04/11/2026 | Criação da aba Uso de IA: visão geral, ferramentas, áreas de uso e regras da equipe. | Sophya Ribeiro |
    | 1.1 | 05/11/2026 | Inclusão da página IA no Processo de Testes. | Sophya Ribeiro |

Esta aba reúne como a equipe do NotificaSaúde usou inteligência artificial (IA) ao longo do projeto: em quais áreas, com quais ferramentas, quais foram os ganhos e os riscos (tradeoffs) de cada adoção e quais prompts foram usados. O objetivo é deixar o uso de IA transparente e rastreável, separando o que foi produzido com apoio da IA do que foi decidido e validado pela equipe e pelas proponentes.

<div class="grid cards" markdown>

-   :material-sitemap-outline:{ .lg .middle } **Fluxo de Desenvolvimento com IA**

    ---

    O fluxo SDD (desenvolvimento orientado a especificação) com skills usado durante a sprint, do refinamento da história ao pull request, em BPMN.

    [:octicons-arrow-right-24: Acessar](fluxo-desenvolvimento.md)

-   :material-test-tube:{ .lg .middle } **IA no Processo de Testes**

    ---

    As oito etapas do processo de testes com IA, os relatórios, a revisão de PRs e a contraprova, a prática que mais agregou valor.

    [:octicons-arrow-right-24: Acessar](processo-testes.md)

-   :material-scale-balance:{ .lg .middle } **Tradeoffs por Área**

    ---

    O que a IA trouxe e o que custou em cada área do projeto, com os problemas reais encontrados e como foram tratados.

    [:octicons-arrow-right-24: Acessar](tradeoffs.md)

-   :material-message-text-clock-outline:{ .lg .middle } **Histórico de Prompts**

    ---

    Os principais prompts usados em cada área e os prompts salvos nos repositórios.

    [:octicons-arrow-right-24: Acessar](historico-prompts.md)

</div>

## Ferramentas

| Ferramenta | Onde foi usada | Como fica registrado |
| --- | --- | --- |
| Claude Code (no terminal e no editor) | Backend, frontend, testes, CI e documentação técnica dos repositórios | Commits com `Co-Authored-By: Claude`, arquivos `CLAUDE.md` e `CONTEXT.md` e comandos salvos em `.claude/commands/` |
| Claude (Cowork e chat) | Protótipo funcional, Especificação de Requisitos, relatórios de sprint, apresentações e textos de PR | Pull requests e histórico de alterações de cada documento |

## Áreas de uso

| Área | Uso da IA | Detalhes |
| --- | --- | --- |
| Requisitos e protótipo | Construção do protótipo funcional por *vibe coding*, a partir do que era validado com as proponentes, e redação das histórias, dos critérios de aceite e das regras de negócio. | [Tradeoffs](tradeoffs.md#requisitos-prototipo) · [Prompts](historico-prompts.md#requisitos-prototipo) |
| Desenvolvimento (backend e frontend) | Fluxo SDD com skills: refinamento da história, quebra em tarefas, plano, TDD, implementação e code review local. | [Fluxo](fluxo-desenvolvimento.md) · [Tradeoffs](tradeoffs.md#desenvolvimento) · [Prompts](historico-prompts.md#desenvolvimento) |
| Qualidade e testes | Validação dos CAs contra o protótipo, revisão dos casos de teste, automação em Playwright, execução, contraprova, relatórios de testes e revisão de PRs. | [Processo](processo-testes.md) · [Tradeoffs](tradeoffs.md#qualidade-testes) · [Prompts](historico-prompts.md#qualidade-testes) |
| Gerência de configuração e CI | Ajustes das esteiras de CI, Dockerfiles, padronização de versões e formatação, e revisão do script de deploy. | [Tradeoffs](tradeoffs.md#gcs-ci) · [Prompts](historico-prompts.md#gcs-ci) |
| Documentação e gestão | Revisão e reorganização dos documentos, relatórios de sprint, apresentações, issues e PRs. | [Tradeoffs](tradeoffs.md#documentacao-gestao) |

## Regras da equipe

1. **A IA propõe, a equipe decide.** Requisitos, regras de negócio e escopo só valem depois de validados pela equipe e, quando envolvem o produto, pelas proponentes. A IA não fecha decisão de produto sozinha.
2. **Revisão humana obrigatória.** Todo código, teste ou texto gerado com IA passa por revisão de quem pediu e pelo pull request, que exige a aprovação de ao menos um membro da equipe ([Gerenciamento de Pull Requests](../gcs/pull-requests.md)).
3. **Verificar antes de afirmar.** Afirmações da IA sobre o código, a CI ou os requisitos são conferidas no repositório ou no documento antes de virar decisão. Achados não confirmados são marcados como tal.
4. **Contexto em arquivo, não na memória da conversa.** As convenções do projeto ficam em arquivos lidos pela IA (`CLAUDE.md`, `CONTEXT.md`, especificações), para que todos trabalhem com o mesmo contexto.
5. **Nenhum dado sensível nos prompts.** Não usar dados reais de pacientes, notificantes ou instituições. O protótipo e os exemplos usam dados fictícios, como "Hospital A".
6. **Uso declarado.** Commits feitos com apoio da IA levam a linha `Co-Authored-By`, e os prompts principais são registrados no [Histórico de Prompts](historico-prompts.md).
