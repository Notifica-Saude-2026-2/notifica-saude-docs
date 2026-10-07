<h1 align="center">Plano de Projeto</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

<div class="ns-pdf-botao" markdown>
[:material-file-word-box: Baixar em DOCX](../assets/docs/plano-de-projeto.docx){ .md-button .md-button--primary download="Plano de Projeto - NotificaSaude.docx" }
</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 04/08/2026 | Descrição referente à equipe e à infraestrutura. | Sophya Ribeiro |
    | 1.1 | 17/09/2026 | Atualização do plano de projeto. | Sophya Ribeiro |
    | 1.2 | 24/09/2026 | Migração do documento (Google Docs) para o MkDocs, com links para as páginas de cronograma, responsabilidades, riscos, arquitetura e casos de teste já publicadas no site. | Sophya Ribeiro |

## Sumário

- [1. Introdução](#introducao)
- [2. Escopo do Projeto](#escopo)
    - [2.1 Escopo do Produto](#escopo-produto)
    - [2.2 Restrições e Premissas do Projeto](#restricoes-premissas)
- [3. Equipe, Infraestrutura e Proponentes](#equipe)
- [4. Cronograma do Projeto](#cronograma)
- [5. Riscos](#riscos)
- [6. Planejamento de Gerência de Dados](#gerencia-dados)
- [7. Planejamento do Acompanhamento do Projeto](#acompanhamento)
- [8. Planejamento da Comunicação](#comunicacao)
- [9. Ferramentas e Tecnologias de Desenvolvimento](#ferramentas)
    - [9.1 Preparação dos ambientes de desenvolvimento e de homologação](#ambientes)
- [10. Projeto de Interface e Interação](#interface)
- [11. Arquitetura de Software](#arquitetura)
- [12. Validação, Verificação e Teste](#vvt)
- [13. Análise de Viabilidade e Comprometimento](#viabilidade)

---

## 1. Introdução { #introducao }

Este documento registra o Plano de Projeto de desenvolvimento do sistema NotificaSaúde.

---

## 2. Escopo do Projeto { #escopo }

O escopo do projeto delimita o trabalho que deve ser feito ao longo do projeto. Esta seção descreve o escopo do produto, com a lista de funcionalidades a serem implementadas, bem como as restrições e as premissas do projeto.

### 2.1 Escopo do Produto { #escopo-produto }

O escopo do produto foi definido por meio de histórias de usuário, armazenadas no Backlog do Produto e detalhadas na [Especificação de Requisitos de Software](../requisitos/especificacao-requisitos.md). Nem todas as histórias do Backlog do Produto serão implementadas no presente projeto: apenas as incluídas no Backlog da Release, que é o que de fato delimita o escopo do produto. A cada iteração (sprint), as histórias selecionadas são armazenadas no Backlog da Sprint. A Tabela 1 apresenta os links de acesso para cada um desses backlogs.

| Backlog | Link de acesso |
| --- | --- |
| Produto | [Board do projeto no GitHub](https://github.com/orgs/Notifica-Saude-2026-2/projects/1) — seção "Backlog do produto" |
| Sprints | [Roadmap no Miro](https://miro.com/app/board/uXjVHLJE8oc=/?share_link_id=389248507966) — seção "Roadmap" |

<p class="ns-legenda-tabela">Tabela 1 – Links de acesso para os backlogs associados ao projeto.</p>

Qualquer backlog é mutável ao longo do desenvolvimento do projeto. Por isso, no início de cada sprint é feita uma revisão das histórias contidas em cada um dos backlogs.

### 2.2 Restrições e Premissas do Projeto { #restricoes-premissas }

A Tabela 2 descreve as restrições e as premissas do projeto. As **restrições** documentam limitações referentes a compromissos do projeto, que necessariamente devem ser atendidas. As **premissas** definem condições que devem ser satisfeitas para que o plano de projeto seja exequível.

| Tipo | Descrição |
| --- | --- |
| <span class="ns-tag ns-tag--metodologia">Restrição</span> | O projeto deve ser executável em ambiente containerizado utilizando Docker. |
| <span class="ns-tag ns-tag--metodologia">Restrição</span> | O sistema deve ser desenvolvido utilizando a arquitetura modular definida nas ADRs do projeto. |
| <span class="ns-tag ns-tag--metodologia">Restrição</span> | O repositório do projeto deve ser versionado e mantido no GitHub da organização do projeto. |
| <span class="ns-tag ns-tag--metodologia">Restrição</span> | Decisões tomadas ao longo do projeto devem ser documentadas no [Diário de Decisões](diario-de-decisoes.md). |
| <span class="ns-tag ns-tag--infra">Premissa</span> | Os requisitos levantados com os stakeholders são suficientes para o desenvolvimento das funcionalidades posteriores ao MVP. |
| <span class="ns-tag ns-tag--infra">Premissa</span> | Haverá disponibilidade dos stakeholders para validações e alinhamentos ao longo do projeto. |
| <span class="ns-tag ns-tag--infra">Premissa</span> | A equipe seguirá o processo ágil definido (sprints, backlog etc.). |
| <span class="ns-tag ns-tag--infra">Premissa</span> | Os usuários finais conseguirão utilizar o sistema sem necessidade de treinamento especializado. |

<p class="ns-legenda-tabela">Tabela 2 – Restrições e premissas do projeto.</p>

---

## 3. Equipe, Infraestrutura e Proponentes { #equipe }

No planejamento do projeto, é preciso definir os recursos necessários para sua boa condução. Entre esses recursos, em projetos de software, destacam-se os recursos humanos. Os papéis definidos para o projeto e os responsáveis por executá-los estão na Tabela 3 (ver também a página [Responsabilidades](responsabilidades.md)).

Os **papéis primários** representam as principais responsabilidades de cada integrante, correspondendo às atividades em que atua de forma prioritária e contínua. Os **papéis secundários** representam funções complementares, desempenhadas conforme a necessidade do projeto, auxiliando outras áreas e contribuindo para a integração entre as etapas do desenvolvimento.

| Papel primário | Papel(is) secundário(s) | Responsável | Contato | Necessidade de treinamento |
| --- | --- | --- | --- | --- |
| Gerente de projetos | Analista de requisitos, IHC | Sophya Ribeiro | [sophya.ribeiro@ufms.br](mailto:sophya.ribeiro@ufms.br) | Estudo pessoal, consultoria com professores |
| Testes | Analista de requisitos | Catarina Ludmila | [catarina.ludmila@ufms.br](mailto:catarina.ludmila@ufms.br) | Estudo pessoal |
| Analista de requisitos | Testes | Gustavo Florentin | [gustavo.florentin@ufms.br](mailto:gustavo.florentin@ufms.br) | Estudo pessoal |
| Desenvolvedor full-stack | Arquiteto de software, arquiteto de banco de dados | Brenno Ostemberg | [brenno.ostemberg@ufms.br](mailto:brenno.ostemberg@ufms.br) | Estudo pessoal |
| DevOps | Desenvolvedor full-stack | Kauan Cardoso | [kauan.cardoso@ufms.br](mailto:kauan.cardoso@ufms.br) | Estudo pessoal |
| Desenvolvedor backend | Arquiteto de software, arquiteto de banco de dados | Eduardo Alves | [eduardo.h.alves@ufms.br](mailto:eduardo.h.alves@ufms.br) | Estudo pessoal |

<p class="ns-legenda-tabela">Tabela 3 – Equipe do projeto.</p>

Os recursos materiais e de infraestrutura do projeto estão definidos na Tabela 4.

| Recurso | Descrição | Quantidade |
| --- | --- | :---: |
| Computadores | Máquinas utilizadas pelos desenvolvedores para o desenvolvimento do sistema. | 0 |
| Internet | Conexão necessária para acesso a repositórios, APIs e comunicação. | — |
| Ambiente de homologação (NES) | Infraestrutura para validação do sistema em ambiente controlado com containers. | — |

<p class="ns-legenda-tabela">Tabela 4 – Recursos e infraestrutura necessários para o projeto.</p>

As proponentes do projeto estão listadas na Tabela 5. A comunicação com elas é feita pela responsável designada da equipe (ver [Planejamento da Comunicação](#comunicacao)).

| Proponente |
| --- |
| Viviane |
| Ercilene |
| Aline Moraes |

<p class="ns-legenda-tabela">Tabela 5 – Proponentes do projeto.</p>

!!! info "Contatos das proponentes"
    Os e-mails e telefones pessoais das proponentes não são publicados neste site, que é público. Eles estão disponíveis com a gerente de projetos.

---

## 4. Cronograma do Projeto { #cronograma }

O cronograma completo do semestre, com as atividades de cada dia e as entregas de cada etapa, está na página [Cronograma](cronograma.md). O acompanhamento das tarefas de cada sprint é feito no [Quadro de tarefas do GitHub Projects](https://github.com/orgs/Notifica-Saude/projects/3/views/1).

Os marcos do projeto estão definidos na Tabela 6. A princípio, cada fim de sprint é um marco do projeto.

| Marco | Período |
| --- | --- |
| Sprint 0 | 03/08/2026 a 17/08/2026 |
| Sprint 1 | 18/08/2026 a 10/09/2026 |
| Sprint 2 | 14/09/2026 a 07/10/2026 |
| Sprint 3 | 19/10/2026 a 10/11/2026 |

<p class="ns-legenda-tabela">Tabela 6 – Marcos do projeto.</p>

---

## 5. Riscos { #riscos }

A lista de riscos do projeto, na página [Riscos do Projeto](riscos.md), inclui o identificador de cada risco, uma breve descrição, a probabilidade e o impacto de ocorrência e a prioridade de tratamento.

A cada reunião semanal de acompanhamento da equipe, a lista de riscos é revista, em especial em busca de riscos não vislumbrados anteriormente que ameacem o alcance dos objetivos do projeto. Também são revistas a probabilidade e o impacto dos riscos já conhecidos.

---

## 6. Planejamento de Gerência de Dados { #gerencia-dados }

Os dados do projeto estão organizados em múltiplos repositórios na [organização do NotificaSaúde no GitHub](https://github.com/orgs/Notifica-Saude-2026-2/repositories), cada um com uma responsabilidade específica:

| Repositório | Responsabilidade |
| --- | --- |
| `notifica-saude-backend` | API REST do sistema, com as regras de negócio, o acesso ao banco de dados e a lógica de autenticação. |
| `notifica-saude-frontend` | Interface web do sistema, desenvolvida em React com TypeScript. |
| `notifica-saude-prototipo-funcional` | Protótipo funcional de alta fidelidade, desenvolvido em React com TypeScript com *vibe coding*, usado para validar fluxos, fazer testes de usabilidade e experimentar as funcionalidades previstas até o escopo do MVP. |
| `notifica-saude-deploy` | Configurações de infraestrutura e scripts de implantação, incluindo arquivos Docker e Docker Compose. |
| `notifica-saude-e2e` | Testes end-to-end do sistema. |
| `notifica-saude-docs` | Documentação do projeto, incluindo artefatos acadêmicos, decisões arquiteturais (ADRs) e materiais de apoio. |
| `issues` | Padronização e gerenciamento dos templates de issues do projeto. |

---

## 7. Planejamento do Acompanhamento do Projeto { #acompanhamento }

O acompanhamento do projeto é feito por meio das seguintes atividades:

- **Acompanhamento diário** (*stand-up meetings* do Scrum), todos os dias;
- **Relato de status semanal** para o supervisor, Marcelo Turine.

O projeto deve ser **replanejado** se algum dos critérios a seguir for satisfeito:

- a variação entre o esforço planejado e o realizado for superior a 20%;
- houver atraso na entrega de funcionalidades críticas do MVP, impactando o cronograma da sprint;
- houver mudanças significativas nos requisitos solicitadas pelos stakeholders ou proponentes;
- forem identificados impedimentos técnicos que inviabilizem a abordagem atual (ex.: limitações de tecnologia ou de arquitetura);
- a velocidade do time for baixa por duas sprints consecutivas;
- houver problemas recorrentes de qualidade identificados em testes ou validações;
- a indisponibilidade de membros da equipe comprometer a execução das atividades planejadas;
- falhas na integração entre módulos impactarem o funcionamento do sistema;
- houver feedback negativo relevante das proponentes durante as validações de marcos;
- for necessário se adequar a novas diretrizes definidas pelos orientadores do projeto.

---

## 8. Planejamento da Comunicação { #comunicacao }

A Tabela 7 descreve o plano de comunicação do projeto. Para cada comunicação relevante, são definidos o responsável, o canal e o momento de realização.

| Comunicação | Responsável | Canal | Momento |
| --- | --- | --- | --- |
| Alinhamento diário (daily) | Equipe do projeto | Google Meet ou reunião presencial | Diariamente |
| Discussões técnicas rápidas | Equipe do projeto | WhatsApp / Discord | Durante o desenvolvimento |
| Compartilhamento de links e recursos | Equipe do projeto | Discord | Sempre que necessário |
| Submissão e revisão de PRs | Equipe do projeto | Discord | Durante o fluxo de desenvolvimento |
| Relato semanal de status | Equipe do projeto e supervisora | WhatsApp e/ou reunião presencial | Semanalmente |
| Comunicação com as proponentes | Responsável designada da equipe (Sophya) | E-mail / WhatsApp | Conforme a necessidade e os marcos do projeto |
| Validação de entregas | Equipe do projeto | Google Meet ou reunião presencial | Ao final de cada marco |

<p class="ns-legenda-tabela">Tabela 7 – Plano de comunicação do projeto.</p>

---

## 9. Ferramentas e Tecnologias de Desenvolvimento { #ferramentas }

A Tabela 8 descreve as ferramentas e tecnologias adotadas no desenvolvimento do projeto, com a categoria, a versão adotada, a justificativa da escolha e o link da documentação.

| Categoria | Ferramenta / tecnologia | Versão | Justificativa | Documentação |
| --- | --- | :---: | --- | --- |
| Planejamento e acompanhamento | Scrum | — | Metodologia ágil para organização das atividades em sprints. | [scrumguides.org](https://scrumguides.org/) |
| Controle de versões | Git | 2.53 | Controle de versão distribuído para gerenciamento do código. | [git-scm.com](https://git-scm.com/doc) |
| Repositório de código | GitHub | — | Hospedagem e colaboração no código-fonte. | [docs.github.com](https://docs.github.com/) |
| Comunicação | Discord | — | Discussões técnicas, compartilhamento de links e suporte a PRs. | [discord.com](https://discord.com/developers/docs/intro) |
| Comunicação | E-mail | — | Comunicação formal com as proponentes e a supervisora. | — |
| Modelagem de interface | Figma | — | Criação de protótipos de alta fidelidade. | [help.figma.com](https://help.figma.com/hc/pt-br) |
| Linguagem backend | TypeScript | 5.9.3 | Tipagem estática para maior segurança e manutenibilidade no backend. | [typescriptlang.org](https://www.typescriptlang.org/docs/) |
| Runtime backend | Node.js | 24.12 | Ambiente de execução para aplicações JavaScript no servidor. | [nodejs.org](https://nodejs.org/en/docs) |
| Framework backend | Express | 5.2.1 | Framework leve para criação de APIs REST. | [expressjs.com](https://expressjs.com/) |
| ORM | Prisma | 7.8.0 | Mapeamento objeto-relacional com tipagem forte e integração com TypeScript. | [prisma.io](https://www.prisma.io/docs) |
| Banco de dados | PostgreSQL | 18 | Banco relacional robusto e confiável para persistência de dados. | [postgresql.org](https://www.postgresql.org/docs/) |
| Autenticação | JWT (jsonwebtoken) | 9.0.3 | Autenticação stateless baseada em tokens. | [GitHub](https://github.com/auth0/node-jsonwebtoken) |
| Criptografia | Argon2 | 0.44 | Hash seguro de senhas. | — |
| Containerização | Docker | 28.3 | Padronização e isolamento do ambiente de execução. | [docs.docker.com](https://docs.docker.com/) |
| Framework frontend | React | 19.2.4 | Biblioteca para construção de interfaces reativas. | [react.dev](https://react.dev/) |
| Teste de unidade | Jest | 30.3 | Framework de testes para validação da lógica de negócio. | [jestjs.io](https://jestjs.io/docs/getting-started) |
| Análise estática: *linter* | Oxlint | 1.62.0 | Análise estática de código com correções automáticas e prevenção de padrões propensos a erro. | [oxc.rs](https://oxc.rs/docs/guide/usage/linter.html) |
| Análise estática: *formatter* | Oxfmt | 0.47.0 | Formatação automática e padronização do estilo de código. | [oxc.rs](https://oxc.rs/docs/guide/usage/formatter.html) |
| *Hooks* do Git | Lefthook | 2.1.6 | Execução de *scripts* ao realizar ações do Git. | [lefthook.dev](https://lefthook.dev/) |

<p class="ns-legenda-tabela">Tabela 8 – Ferramentas e tecnologias utilizadas no projeto.</p>

### 9.1 Preparação dos ambientes de desenvolvimento e de homologação { #ambientes }

Para configurar o **ambiente de desenvolvimento**, os passos de instalação de dependências, variáveis de ambiente e execução local de cada aplicação estão documentados nos guias:

- [Guia do ambiente de desenvolvimento — Frontend](https://docs.google.com/document/d/1jZG9gOlOJq66G7vvQeUnFiL_n8FY3xdvlNIwzcWCKMg/edit?usp=drive_link)
- [Guia do ambiente de desenvolvimento — Backend](https://drive.google.com/file/d/1z9a1AWFPpZ8qDYo5n-9bQh_9q0cHf0EB/view?usp=drive_link)

O **ambiente de homologação** é baseado em containers Docker e está hospedado no NES (Núcleo de Práticas em Engenharia de Software) da FACOM/UFMS. O passo a passo completo de configuração e implantação está no [Guia de homologação](https://drive.google.com/file/d/1lGbBSPK8JjOixykCR2COl5kMu3UZJNDd/view?usp=drive_link).

---

## 10. Projeto de Interface e Interação { #interface }

A definição da interface e da interação do MVP do NotificaSaúde foi conduzida por meio de um processo iterativo de prototipação, implementação incremental e validação contínua com as proponentes do projeto.

Para as próximas iterações, o plano é validar a jornada por meio de testes de usabilidade com as proponentes e com pessoas que fazem parte da rotina do NSP, utilizando o protótipo de alta fidelidade.

---

## 11. Arquitetura de Software { #arquitetura }

Esta seção descreve sucintamente a arquitetura de software adotada no projeto. O detalhamento está na [Especificação de Arquitetura de Software](../desenvolvimento/arquitetura/especificacao-arquitetura.md).

O NotificaSaúde adota uma arquitetura baseada no modelo **cliente-servidor**, estruturada conforme o **modelo C4**, o que permite visualizar progressivamente os elementos arquiteturais, do nível de contexto até os componentes internos.

A solução é composta por três containers principais:

- **Aplicação web (frontend):** *Single Page Application* (SPA) em React com TypeScript, responsável pela interface do usuário, incluindo o formulário público de notificações e os painéis administrativos.
- **API backend:** implementada em Node.js com Express e TypeScript, expondo uma API REST que concentra as regras de negócio, o controle de acesso e o processamento das requisições.
- **Banco de dados:** PostgreSQL, garantindo robustez, concorrência e integridade das informações.

A comunicação entre frontend e backend ocorre via HTTPS, no formato JSON. O sistema usa autenticação baseada em JWT para os usuários autenticados e mantém rotas públicas específicas para o registro de notificações, sem necessidade de login, conforme os requisitos do domínio.

---

## 12. Validação, Verificação e Teste { #vvt }

A garantia da qualidade do sistema é conduzida por meio de atividades de verificação, validação e teste, aplicadas de forma complementar ao longo do ciclo de desenvolvimento.

- **Verificação:** assegura que o sistema está sendo desenvolvido corretamente, em conformidade com os requisitos e especificações. É realizada principalmente por testes unitários e de integração, com abordagens de caixa-branca e caixa-cinza, que analisam a lógica interna, a estrutura do código e a comunicação entre os componentes.
- **Validação:** garante que o sistema atende às necessidades do usuário final e aos objetivos do negócio. É conduzida por testes de sistema (end-to-end), com abordagem de caixa-preta, avaliando as funcionalidades a partir de entradas e saídas esperadas. Também fazem parte da validação os testes de usabilidade, com base em avaliação heurística e testes com usuários.

Os testes são organizados conforme a **Pirâmide de Testes**, contemplando os níveis unitário, de integração e de sistema. São aplicadas técnicas como particionamento por equivalência, análise de valor limite e tabela de decisão. Além disso, são realizados testes não-funcionais de desempenho, segurança, compatibilidade, acessibilidade, responsividade e disponibilidade.

Os casos de teste elaborados estão na página [Casos de Teste](../vvt/casos-de-teste.md), e a relação com os requisitos, na [Matriz de Rastreabilidade](../vvt/matriz-rastreabilidade.md). As técnicas adotadas e os registros de defeitos estão no [Plano de testes](https://docs.google.com/document/u/1/d/1p4hkfBALtI-zOaeGNpNspMuegZXN2fJSQRSgfs0Vrp8/edit).

---

## 13. Análise de Viabilidade e Comprometimento { #viabilidade }

A Tabela 9 registra os aspectos de viabilidade considerados e o resultado da análise para cada um deles.

| Aspecto | É viável? |
| --- | :---: |
| Técnico | <span class="ns-nivel ns-nivel--baixa">Sim</span> |
| Comercial | <span class="ns-nivel ns-nivel--baixa">Sim</span> |
| Legal | <span class="ns-nivel ns-nivel--baixa">Sim</span> |

<p class="ns-legenda-tabela">Tabela 9 – Análise de viabilidade do projeto.</p>

Diante do exposto, o presente projeto é considerado viável. Por estarem de acordo, todos os membros do projeto consideram o plano aqui descrito aprovado.
