<h1 align="center">Tradeoffs da Adoção de IA por Área</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 04/11/2026 | Registro dos ganhos, riscos e casos reais do uso de IA em cada área do projeto. | Sophya Ribeiro |
    | 1.1 | 05/11/2026 | Qualidade e testes reescrita com o processo de testes com IA da equipe (contraprova, revisão de PRs e casos reais); novo caso real de DevOps (verificação do script de deploy). | Sophya Ribeiro |

## Sumário

- [1. Visão geral](#visao-geral)
- [2. Requisitos e protótipo](#requisitos-prototipo)
- [3. Desenvolvimento](#desenvolvimento)
- [4. Qualidade e testes](#qualidade-testes)
- [5. Gerência de configuração e CI](#gcs-ci)
- [6. Documentação e gestão](#documentacao-gestao)
- [7. Tradeoffs gerais](#gerais)

<a id="visao-geral"></a>

## 1. Visão geral

Para cada área, este documento registra o que a equipe ganhou com a IA, o que custou ou que riscos trouxe e como esses riscos foram tratados. Os casos citados são reais e podem ser conferidos nos commits, nos documentos ou nos históricos de alterações indicados.

<a id="requisitos-prototipo"></a>

## 2. Requisitos e protótipo

O protótipo funcional (`notifica-saude-prototipo-funcional`) foi construído com IA por *vibe coding*, a partir do frontend já existente, para validar as features com as proponentes antes de escrevê-las na Especificação de Requisitos.

| Ganhos | Custos e riscos |
| --- | --- |
| Features complexas viraram telas navegáveis em pouco tempo. A análise do incidente, baseada na metodologia do mestrado da proponente, foi fechada no protótipo em três ciclos de fazer → validar → ajustar. | A IA preenche lacunas com suposições e pode incluir mais do que foi pedido, inclusive dados que não deveriam aparecer. |
| As proponentes validam algo concreto, e a Especificação de Requisitos é escrita depois, já com o comportamento validado (versões 3.0 a 3.11). | Código de protótipo feito por *vibe coding* não tem a mesma qualidade do sistema real e não deve ser reaproveitado sem revisão. |
| A IA aponta conflitos com os requisitos já existentes, como a Matriz RBAC. | Os textos de requisitos gerados precisam ser conferidos contra o que foi validado, para não registrar uma suposição como regra. |

**Casos reais**

- **Dados do notificante no relatório.** Na primeira versão da exportação de incidentes (épico 7), a planilha gerada pela IA trazia as colunas de nome e contato do notificante. A equipe identificou o problema na validação, removeu as colunas e criou a regra RN-29: esses dados nunca são exportados, para nenhum perfil.
- **Nome de instituição real.** Os dados de exemplo do protótipo chegaram a usar o nome de uma instituição real, removido no commit `feat: remove nome de instituição real`. Desde então, os exemplos usam nomes genéricos, como "Hospital A".
- **Arquivos gerados no repositório.** Saídas da IA foram parar no repositório do protótipo e foram removidas no commit `refactor: remove claude outputs`.

**Como tratamos:** nada sai do protótipo para a especificação sem validação com as proponentes; dados de exemplo são sempre fictícios; e as regras descobertas na validação viram regras de negócio numeradas.

<a id="desenvolvimento"></a>

## 3. Desenvolvimento

No backend e no frontend, a IA é usada no [fluxo SDD com skills](fluxo-desenvolvimento.md).

| Ganhos | Custos e riscos |
| --- | --- |
| A skill Grill obriga a entender a história e o estado real do código antes de implementar. O registro de design da US-5.1 levantou por inspeção, por exemplo, que o status `ANALISADA` era inalcançável no backend e que o gestor de área recebia 403 ao abrir o detalhe de uma notificação do próprio setor. | O design proposto pela IA pode assumir um escopo ou uma leitura de regra que a P.O. não aprovou. |
| As convenções ficam em arquivo (`CLAUDE.md`, `CONTEXT.md`), o que deixa o código de membros diferentes mais consistente. | Uma observação feita sobre código local não commitado pode ser registrada como fato. |
| Problemas de qualidade e segurança são encontrados e corrigidos mais rápido, como uma regex com retrocesso super-linear (risco de ReDoS). | Quem implementa pode aceitar código que não entende por completo, o que dificulta a manutenção. |

**Casos reais**

- **Escopo e leitura de regra corrigidos pela P.O.** O registro de design do backend da US-5.1 (`docs/DESIGN-us5.1-plano-de-acao.md`) foi escrito considerando parte do épico 4 e uma leitura da RN-06 que reservaria a análise ao gestor. A P.O. cortou o escopo e desautorizou essa leitura, e o documento ganhou uma errata em 06/09/2026, mantendo o raciocínio anterior só como registro.
- **Achado não confirmado.** O mesmo documento registrou que o protótipo salvaria só a primeira ação do plano. Ao conferir no histórico do git, o achado não se confirmou (vinha de código local não commitado) e foi marcado como "não confirmado".

**Como tratamos:** as decisões de produto ficam com a P.O. e as proponentes; os achados da IA são conferidos no repositório antes de virar decisão; e o code review local e o PR revisam o código antes do merge.

<a id="qualidade-testes"></a>

## 4. Qualidade e testes

A IA (Claude Code) apoiou todas as etapas do processo de testes, da validação dos critérios de aceite à gerência de configuração. O processo completo está em [IA no Processo de Testes](processo-testes.md).

| Ganhos | Custos e riscos |
| --- | --- |
| A IA compara os critérios de aceite com o protótipo antes dos testes e aponta inconsistências, como o campo 5 Porquês sem o contador de caracteres exigido pela US-4.2 (CA10). | O processo completo (teste exploratório, automação, execução nos três navegadores e contraprova) consome muito tempo e recursos da máquina do tester. |
| Automação em Playwright a partir das fichas dos CTs, um teste por CA, executada localmente com o sistema completo em Docker. | Um teste aprovado pode não estar verificando nada, e a IA tende a apresentar a aprovação como prova suficiente. |
| A contraprova (teste de mutação manual) comprova que cada teste reprova quando a regra é quebrada: 14 de 14 alterações detectadas na US-4.5 e 13 de 13 na US-4.6. | A IA pode afirmar algo sobre o sistema com base em um estado desatualizado do código. |
| Na revisão de PRs, a IA roda o PR localmente, compara cada teste com a ficha do CT e confere cabeçalhos e matriz de rastreabilidade antes de o revisor comentar. | A IA pode classificar um defeito do próprio teste como bug do sistema. |

**Casos reais**

- **Teste que não testava nada.** A contraprova revelou que o CT-E2E-011 continuava aprovado ("4 passed") com a regra deliberadamente quebrada: o teste procurava um botão com o nome errado e só verificava algo se o botão aparecesse. No WebKit, uma etapa do CT-FUN-080 também passava sem verificação efetiva. Os dois foram corrigidos e validados por contraprova.
- **Afirmação com base em código desatualizado.** A IA afirmou que uma regra não existia no sistema quando, na verdade, o submódulo do sistema estava desatualizado no repositório de testes. Depois de ser cobrada a investigar ("Investigue no repositório e, caso seja real, corrija sua resposta para ser trabalhado com fatos"), a IA demonstrou por experimento que os cliques perdidos no Firefox vinham da rolagem animada do formulário (5 de 1.536 cliques perdidos com a animação; 0 de 3.456 sem ela). A correção reduziu os testes instáveis no Firefox de 4 para 1 na CI da `main`.
- **Defeito do teste tratado como bug.** A IA propôs abrir uma issue [BUG] para uma falha do CT-FUN-080 no WebKit que era limitação da ferramenta, não defeito do sistema. A tester recusou, e virou regra: defeito do próprio teste não vira issue, o teste é corrigido.
- **Registro tardio de defeitos.** Os defeitos do teste exploratório só eram registrados depois da automação e chegavam tarde aos desenvolvedores. A ação corretiva foi registrá-los assim que encontrados, em paralelo com a automação.

**Como tratamos:** antes de todo PR de teste, são apresentados o mapeamento entre CAs e testes, a execução real e a contraprova; a IA verifica o estado real do código antes de afirmar algo; e as decisões sobre defeitos, revisões e aprovações ficam com a tester.

<a id="gcs-ci"></a>

## 5. Gerência de configuração e CI

| Ganhos | Custos e riscos |
| --- | --- |
| Atualização rápida das esteiras dos repositórios: Node 24, actions na v5, migração do SonarCloud e do Codecov para a organização 2026-2, Dependabot, gate de formatação (`oxfmt`) e limites de tempo dos jobs. | Uma revisão feita com IA pode apontar um problema que não existe. |
| Análise de revisões humanas com critério de "zero falso positivo": cada achado precisa ser reproduzido antes de ser corrigido. | Mudanças em CI e no deploy são difíceis de testar localmente e podem quebrar a esteira ou a produção. |

**Casos reais**

- **Deploy declarado como concluído com o sistema quebrado.** Na revisão humana do PR #4 do script de deploy, a etapa 5 declarava "implantação concluída" checando apenas o `GET /health` do backend. A IA foi orientada a comprovar, sem supor, se o `docker compose up -d` podia retornar sucesso com o frontend ou o worker em crashloop. O prompt exigiu que a correção fizesse a etapa 5 checar o estado de todos os serviços relevantes, excluindo os que terminam por desenho (migrator e seeder), além de uma varredura por outros erros graves e da confirmação de que o merge não quebra o deploy em produção (ver o [prompt completo](historico-prompts.md#gcs-ci)).
- **Revisão do PR #6 do backend.** A revisão técnica registrada no repositório trazia um achado errado sobre a CI e itens apresentados como decisão que eram só proposta. Os commits `docs: corrige achado errado sobre CI na revisao do PR #6`, `docs: marca 5.1 e 6.1 da revisao como proposta, nao deliberacao` e `docs: reescreve a 5.1 da revisao apos verificar a spec completa` corrigiram o registro.

**Como tratamos:** achados de revisão feita com IA são conferidos antes de virar pendência, e mudanças de CI podem ser testadas localmente com o [act](../gcs/uso-act.md).

<a id="documentacao-gestao"></a>

## 6. Documentação e gestão

| Ganhos | Custos e riscos |
| --- | --- |
| Reorganização e atualização da Especificação de Requisitos e da Matriz RBAC em menos tempo, mantendo numeração, referências cruzadas e histórico de alterações. | Um texto bem escrito parece correto mesmo quando não é; o tom confiante esconde erros. |
| Issues e PRs no padrão do GCS com os comandos `/issue` e `/pr`, e textos de PR montados a partir das mudanças. | A IA pode trazer informações desatualizadas, como nomes da equipe anterior ou decisões revistas. |
| Apoio nos relatórios de sprint e nas apresentações de review e planning. | Documentos públicos podem expor informações sensíveis das proponentes se não forem revisados. |

**Como tratamos:** todo documento tem mantenedores e histórico de alterações; mudanças na especificação passam por PR; e informações sensíveis dos documentos das proponentes são ocultadas antes da publicação.

<a id="gerais"></a>

## 7. Tradeoffs gerais

| Ganho | Custo | Decisão da equipe |
| --- | --- | --- |
| Velocidade para entregar e para validar com as proponentes. | Risco de aceitar resultado sem entender ou sem conferir. | Revisão humana obrigatória e PR com aprovação de outro membro. |
| Padronização entre membros com experiências diferentes. | Dependência de uma ferramenta específica e da qualidade do contexto fornecido. | Contexto do projeto em arquivos versionados (`CLAUDE.md`, `CONTEXT.md`, especificações). |
| Apoio em áreas em que a equipe tem menos experiência, como CI e segurança. | Exposição de dados se informações reais forem usadas nos prompts. | Nenhum dado real de pacientes, notificantes ou instituições nos prompts. |
| Registro natural das decisões (design, ADRs, especificações). | Os prompts em si não eram registrados de forma sistemática. | Criação do [Histórico de Prompts](historico-prompts.md). |
