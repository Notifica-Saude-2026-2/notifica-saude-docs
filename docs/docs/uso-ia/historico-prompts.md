<h1 align="center">Histórico de Prompts por Área</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 04/11/2026 | Registro dos prompts salvos nos repositórios, das skills do fluxo de desenvolvimento e dos principais prompts por área, e definição do modelo de registro. | Sophya Ribeiro |
    | 1.1 | 05/11/2026 | Inclusão dos prompts de qualidade e testes (Catarina Freisleben) e do prompt estruturado de DevOps (script de deploy); remoção do prompt de diagnóstico do build. | Sophya Ribeiro |
    | 1.2 | 05/11/2026 | Remoção dos prompts de documentação e gestão; orientação de registro mantida apenas como comentário interno. | Sophya Ribeiro |
    | 1.3 | 06/11/2026 | Prompt de DevOps incluído na tabela da área, com o texto completo em bloco recolhível. | Sophya Ribeiro |

## Sumário

- [1. Visão geral](#visao-geral)
- [2. Prompts salvos nos repositórios](#prompts-salvos)
- [3. Requisitos e protótipo](#requisitos-prototipo)
- [4. Desenvolvimento](#desenvolvimento)
- [5. Qualidade e testes](#qualidade-testes)
- [6. Gerência de configuração e CI](#gcs-ci)

<a id="visao-geral"></a>

## 1. Visão geral

Até a criação deste documento, os prompts não eram registrados de forma sistemática: o que ficava registrado eram os resultados (commits com `Co-Authored-By: Claude`, documentos de design, especificações e históricos de alterações). Este documento reúne:

- os **prompts salvos** nos repositórios, que são reutilizados por toda a equipe;
- as **skills** usadas no [fluxo de desenvolvimento](fluxo-desenvolvimento.md);
- os **principais prompts** de cada área, com o resultado que geraram.

Os prompts são transcritos com correções de digitação, sem mudar o sentido. A partir desta versão, os prompts que geram decisões, documentos ou features passam a ser registrados aqui.

<a id="prompts-salvos"></a>

## 2. Prompts salvos nos repositórios

| Prompt | Onde está | Para que serve |
| --- | --- | --- |
| `CLAUDE.md` | `notifica-saude-frontend` e `notifica-saude-prototipo-funcional` | Instruções permanentes do projeto: stack, estrutura de pastas, formulário dinâmico, convenção de `data-testid` para os testes e2e e padrões do GCS (branch, commits e PR). |
| `CONTEXT.md` | `notifica-saude-backend` | Glossário do domínio com os termos que devem e não devem ser usados. |
| `/issue` | `.claude/commands/issue.md` | Cria uma issue no padrão do GCS: pergunta o que faltar, monta título e corpo pelo template, define o label, **pede confirmação antes de criar** e sugere o nome da branch. |
| `/pr` | `.claude/commands/pr.md` | Cria um PR para a branch atual: lê a branch, os commits e o diff, monta título e corpo pelo template do GCS com `Closes #N` e **pede confirmação antes de criar**. |

<a id="requisitos-prototipo"></a>

## 3. Requisitos e protótipo

| Data | Autor | Ferramenta | Prompt | Resultado |
| --- | --- | --- | --- | --- |
| 26/10/2026 | Sophya Ribeiro | Claude (Cowork) | "Bora fazer uma feature nova? A gente vai descobrindo no protótipo e, conforme eu for validando, você vai anotando, pois quando eu finalizar a gente adiciona no documento de requisitos." | Início da descoberta da exportação de incidentes, com notas de descoberta no protótipo (`docs/descoberta/extracao-dados-xlsx.md`). |
| 26/10/2026 | Sophya Ribeiro | Claude (Cowork) | "Essa feature é para cada NSP que acessar a plataforma poder extrair um relatório de todos os incidentes, com seus respectivos dados, da instituição, e também o gestor do setor conseguir extrair do seu próprio setor. [...] Pensei em deixar no canto superior direito um botão azul 'Extrair dados' com símbolo de download e title 'Extrair xlsx'. Seria no front, porque o foco é formatar bonitinho esse xlsx. Faz do jeito que você acha melhor e de acordo com o design system, que eu vou validando e lapidando." | Botão "Extrair dados" e geração do XLSX no protótipo. |
| 26/10/2026 | Sophya Ribeiro | Claude (Cowork) | "Bora já falar de regras de negócio: nunca exportar esses dados em relatórios." (sobre as colunas de nome e contato do notificante) | Remoção das colunas e criação da regra de sigilo do notificante nos relatórios (RN-29). |
| 03/11/2026 | Sophya Ribeiro | Claude (Cowork) | "Agora é a hora [de passar o protótipo validado para o documento de requisitos]. Faça um épico 7: COMO profissional do NSP, QUERO exportar relatórios de incidentes com base nos filtros e períodos selecionados em formato XLSX, PARA compartilhar, analisar e armazenar os dados dos incidentes fora da plataforma. Mas não seria isso, porque ele não leva nenhum filtro selecionado: sempre exporta os dados totais da instituição de saúde. E essa regra de negócio deve ser considerada, pois é muito importante para a proteção de dados." | Épico 7, US 7.1 e 7.2, RN-29 e RN-30 e requisito 6.3.5 na Especificação de Requisitos (versão 3.11). |

<a id="desenvolvimento"></a>

## 4. Desenvolvimento

No desenvolvimento, os prompts seguem as skills do [fluxo SDD](fluxo-desenvolvimento.md). A entrada de cada skill é o que está registrado abaixo.

| Skill | Entrada (prompt) | Saída registrada |
| --- | --- | --- |
| Grill | A história de usuário da sprint, com os critérios de aceite e as regras de negócio da Especificação de Requisitos. | Perguntas e decisões, como em `notifica-saude-backend/docs/DESIGN-us5.1-plano-de-acao.md`. |
| to-tickets | O entendimento validado na etapa de Grill. | Tarefas pequenas da história. |
| Plano de implementação | A história, as tarefas e o `CONTEXT.md`. | Especificação no modelo `docs/specs/SDD_TEMPLATE_MINI_SPEC.md` e ADRs, como `docs/specs/2026-08-31-plano-de-acao-backend.md`. |
| TDD / `/implement` | Uma tarefa do plano. | Código e testes, em commits com `Co-Authored-By: Claude`. |
| Code review local | A diferença da branch em relação à `main`. | Correções antes do PR. |

<a id="qualidade-testes"></a>

## 5. Qualidade e testes

Prompts usados no [processo de testes com IA](processo-testes.md).

| Data | Autor | Ferramenta | Prompt | Resultado |
| --- | --- | --- | --- | --- |
| 03/09/2026 | Catarina Freisleben | Claude Code | "Antes de enviar para o repositório, quero ter certeza de que ele (o caso de teste automatizado) cobre o CA da US por completo, visualizar e garantir que o CT faz o teste na funcionalidade e o resultado é positivo." | Virou regra do processo: antes de todo PR de teste, apresentar o mapeamento entre CAs e testes, a execução real e a contraprova. Primeira aplicação no CT-E2E-018 ([PR e2e#4](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/4)). |
| 03/11/2026 | Catarina Freisleben | Claude Code | "Não vira issue: se o defeito é no código do teste e não do desenvolvimento, é necessário arrumar o código do teste." | Regra: defeito do próprio teste não é registrado como issue [BUG]; o teste é corrigido. O CT-FUN-080, que falhava no WebKit por limitação da ferramenta, foi corrigido na [issue e2e#37](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/37) e no [PR e2e#38](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/38). |
| 03/11/2026 | Catarina Freisleben | Claude Code | "Investigue no repositório e, caso seja real, corrija sua resposta para ser trabalhado com fatos." | A IA demonstrou por experimento que os cliques perdidos no Firefox vinham da rolagem animada do formulário (5 de 1.536 cliques perdidos com a animação; 0 de 3.456 sem ela). A animação foi desativada só no navegador dos testes ([PR e2e#38](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/38)), e os testes instáveis no Firefox caíram de 4 para 1 na CI da `main`. |

<a id="gcs-ci"></a>

## 6. Gerência de configuração e CI

| Data | Autor | Ferramenta | Prompt | Resultado |
| --- | --- | --- | --- | --- |
| — | Kauan Cardoso | Claude Code | Prompt estruturado em contexto, objetivo, problema, restrições e critério de aceite para tratar a revisão humana do PR #4 do script de deploy, cuja etapa 5 declarava a implantação concluída checando apenas o `GET /health` do backend. O texto completo está logo abaixo da tabela. | Análise de cada observação da revisão, com a exigência de reproduzir cada achado antes de corrigi-lo ("zero falso positivo"), de checar na etapa 5 o estado de todos os serviços relevantes e de confirmar que o merge não quebra o deploy em produção. |
| — | Equipe | Claude Code | `/issue` e `/pr` (seção 2). | Issues e PRs no padrão do GCS. |

??? example "Prompt completo: revisão do PR #4 do script de deploy"

    ```text
    Contexto: a PR #4 do script de deploy recebeu revisão humana com
    observações pendentes. A etapa 5 do script declara "implantação
    concluída" checando apenas GET /health do backend.

    Objetivo: analisar cada observação da revisão, avaliar o impacto real
    da correção proposta, e aplicar as que forem legítimas.

    Problema a investigar (achado já levantado): comprovar se
    `docker compose up -d` pode retornar código 0 com o frontend (ou o
    worker) em crashloop — ou seja, se a etapa 5 pode declarar sucesso
    com o sistema quebrado para o usuário final.

    Restrições:
    - Zero falso positivo: cada achado reportado precisa ser reproduzido,
      não suposto
    - Corrigir de forma assertiva: a etapa 5 deve passar a checar o
      estado de todos os serviços relevantes (excluindo os que terminam
      por desenho, como migrator/seeder), não só o backend

    Critério de aceite:
    - Rodar uma varredura adicional por outros erros graves antes de
      considerar a branch pronta
    - Confirmar explicitamente que o merge não quebra o deploy em
      produção antes de integrar
    ```

<!--
Como registrar um prompt (orientação interna da equipe, não exibida no site):

Registre aqui o prompt que gerou uma decisão, um documento, uma feature ou uma correção relevante. Não é preciso registrar ajustes pequenos, como mudar um texto ou uma cor.

1. Encontre a seção da área (ou crie uma, se a área ainda não existir).
2. Adicione uma linha na tabela com: data, autor, ferramenta, o prompt (transcrito ou resumido, sem dados sensíveis) e o resultado, com o link para o commit, PR ou documento gerado.
3. Se o prompt for reutilizável, salve-o também como comando em `.claude/commands/` no repositório correspondente e liste-o na seção 2.
4. Registre a mudança no histórico de alterações desta página.

Dados sensíveis: Nunca registre (nem use nos prompts) dados reais de pacientes, notificantes, profissionais ou instituições.
-->
