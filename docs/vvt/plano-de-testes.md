<h1 align="center">Plano de Testes</h1>


<p align="center"><strong>Mantenedores:</strong> Aline Lika Hirokawa, Pedro Silva Soledade, Sophya Ribeiro, Lucas Gonçalves, Fábio Ramos, Luigi Gonçalves</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 17/03/2026 | Criação e adaptação da documentação. | Pedro Soledade |
    | 1.1 | 18/03/2026 | Adição de informações para o modelo base da documentação. | Pedro Soledade |
    | 1.2 | 18/03/2026 | Adição dos critérios de entrada e saída. | Aline Lika Hirokawa |
    | 1.3 | 19/03/2026 | Ajustes no escopo, na abordagem de testes e nas ferramentas. | Aline Lika Hirokawa e Pedro Soledade |
    | 1.4 | 23/03/2026 | Modificação do escopo e ajuste da abordagem de teste. | Pedro Soledade |
    | 1.5 | 25/03/2026 | Ajustes na abordagem de teste. | Aline Lika Hirokawa |
    | 1.6 | 15/04/2026 | Adição da cobertura de testes. | Pedro Soledade |
    | 1.7 | 02/06/2026 | Ajustes finais na documentação. | Aline Lika Hirokawa e Pedro Soledade |
    | 1.8 | 25/09/2026 | Migração do documento (Google Docs) para o MkDocs, com links para as páginas de requisitos, casos de teste e matriz de rastreabilidade publicadas no site. | Sophya Ribeiro |

## Sumário

- [1. Introdução](#introducao)
- [2. Escopo](#escopo)
    - [2.1 Registro de notificação de incidentes](#escopo-registro)
    - [2.2 Gestão e classificação de notificações](#escopo-gestao)
    - [2.3 Controle de acesso](#escopo-acesso)
    - [2.4 Requisitos não-funcionais](#escopo-nao-funcionais)
    - [2.5 Fora do escopo](#fora-escopo)
- [3. Abordagem de teste](#abordagem)
- [4. Ambiente de teste](#ambiente)
- [5. Ferramentas](#ferramentas)
- [6. Critérios de entrada e saída](#criterios)
- [7. Casos de teste](#casos-teste)
- [8. Cobertura de testes](#cobertura)
- [9. Relato de defeitos](#defeitos)
- [10. Matriz de rastreabilidade](#matriz)
- [11. Quadro de responsabilidades](#responsabilidades)
- [12. Referências](#referencias)

---

## 1. Introdução { #introducao }

Este documento apresenta o Plano de Testes do sistema **NotificaSaúde**, cujo objetivo é assegurar a qualidade do software por meio da verificação e validação sistemática de suas funcionalidades, requisitos e características não-funcionais.

O NotificaSaúde é responsável pela coleta, armazenamento, gerenciamento e monitoramento de notificações relacionadas a incidentes e eventos adversos ocorridos em serviços de saúde, bem como daqueles associados ao uso de tecnologias em saúde, como medicamentos e artigos médico-hospitalares. Essas notificações podem ser registradas voluntariamente por pacientes, familiares, acompanhantes e cuidadores, por meio de um formulário acessível ao público.

O NotificaSaúde surge como uma iniciativa voltada à padronização e à automação dos processos de notificação em saúde, promovendo maior eficiência na gestão das informações e contribuindo para a melhoria contínua da qualidade e da segurança do paciente. A maior parte do sistema está concentrada no módulo de autenticação de usuários administradores e na classificação e avaliação das notificações pelo Núcleo de Segurança do Paciente, responsável por organizar, analisar, gerenciar e monitorar os registros recebidos.

O plano de testes descrito neste documento tem como foco a validação dos requisitos funcionais e não-funcionais do sistema, incluindo a autenticação de usuários e o correto armazenamento, processamento, gerenciamento e acompanhamento das notificações. Para isso, são definidas estratégias de teste com o objetivo de identificar falhas, mitigar riscos e assegurar a conformidade com as regras de negócio estabelecidas.

---

## 2. Escopo { #escopo }

O presente plano de testes abrange a validação funcional e não-funcional do NotificaSaúde, considerando os fluxos definidos como MVP no início do projeto. O foco está na verificação do correto funcionamento das funcionalidades de registro, gestão e monitoramento das notificações de incidentes em serviços de saúde, bem como dos mecanismos de controle de acesso.

São contempladas as funcionalidades a seguir, conforme os épicos e as histórias de usuário da [Especificação de Requisitos de Software](../requisitos/especificacao-requisitos.md).

### 2.1 Registro de notificação de incidentes { #escopo-registro }

No registro de notificações de incidentes, os testes validam todo o fluxo de submissão pelo formulário público do sistema.

São verificadas a captura, a validação e a persistência dos dados informados pelos usuários, e avaliadas as regras de negócio aplicáveis, incluindo a obrigatoriedade dos campos, a validação de formatos e a consistência dos dados inseridos.

Também são testados os mecanismos de tratamento de erros, garantindo que o sistema responda adequadamente a entradas inválidas e forneça *feedback* claro ao usuário durante o envio da notificação.

### 2.2 Gestão e classificação de notificações { #escopo-gestao }

Nas funcionalidades de gestão e classificação de notificações, os testes focam nas operações realizadas pelos usuários administradores. É verificada a visualização das notificações registradas, garantindo que as informações sejam apresentadas de forma clara e completa.

São avaliadas as funcionalidades de complementação e correção de dados, assegurando que as alterações possam ser feitas conforme as permissões estabelecidas e sem comprometer a integridade das informações.

A classificação de incidentes é testada de acordo com os critérios definidos pelo negócio, assim como o fluxo de encaminhamento das notificações às áreas responsáveis. Também são validados o registro e a rastreabilidade das alterações, garantindo a manutenção do histórico das ações no sistema.

### 2.3 Controle de acesso { #escopo-acesso }

Em autenticação e controle de acesso, os testes validam o processo de autenticação dos usuários administradores, incluindo a verificação de credenciais e o funcionamento do *login*.

É analisado o controle de acesso às funcionalidades, assegurando que apenas usuários autorizados acessem cada recurso, conforme seus perfis e permissões. Também é verificado o gerenciamento de sessões, incluindo *login* e *logout*, garantindo a segurança e a integridade do acesso ao sistema.

### 2.4 Requisitos não-funcionais { #escopo-nao-funcionais }

Os testes de requisitos não-funcionais abrangem:

| Requisito | O que é verificado |
| --- | --- |
| **Disponibilidade** | Se o sistema mantém acesso contínuo, permitindo o registro de notificações a qualquer momento. |
| **Compatibilidade** | O funcionamento do sistema nos navegadores especificados (Chrome, Safari e Microsoft Edge). |
| **Segurança** | Os mecanismos de autenticação e controle de acesso baseados em perfis, a proteção dos dados contra acessos indevidos e a existência do histórico de modificações, garantindo rastreabilidade e conformidade com os requisitos. |
| **Usabilidade** | A facilidade de uso, a clareza das informações e a eficiência na interação com o formulário de notificação e demais funcionalidades, considerando a diversidade do público-alvo. |
| **Acessibilidade** | Se o sistema pode ser utilizado por pessoas com limitações, conforme o nível AA do [Guia WCAG](https://guia-wcag.com/), nos critérios que permitem automação total ou parcial dos testes. |
| **Responsividade** | Se a interface se adapta a diferentes dispositivos (smartphones, tablets e computadores), garantindo uma experiência consistente independentemente do tamanho de tela. |

### 2.5 Fora do escopo { #fora-escopo }

Estão fora do escopo deste plano:

- testes de integração com sistemas externos;
- funcionalidades não descritas nos épicos e nas histórias de usuário da [Especificação de Requisitos de Software](../requisitos/especificacao-requisitos.md).

---

## 3. Abordagem de teste { #abordagem }

A estratégia de testes baseia-se na **Pirâmide de Testes**, que organiza os diferentes níveis de teste: unitários, de integração, funcionais e ponta a ponta (*end-to-end*). Essa estratégia equilibra cobertura e eficiência, reduzindo o retrabalho, permitindo a detecção precoce de falhas e melhorando a qualidade do produto final.

| Nível | Abordagem | Foco |
| --- | --- | --- |
| **Unitário** | Caixa-branca | Validação da lógica interna do código, contribuindo para maior cobertura e identificação precoce de falhas. |
| **Integração** | Caixa-cinza | Comunicação entre módulos, com conhecimento parcial da estrutura interna do sistema. |
| **Funcional e ponta a ponta** | Caixa-preta | Análise das saídas geradas a partir de entradas definidas, sem considerar a implementação. Aplica técnicas como particionamento por equivalência e análise de valor limite. |

Essas abordagens permitem verificar a conformidade das funcionalidades entregues ao usuário final em relação aos requisitos e aos critérios de aceite especificados.

Além da validação funcional, são realizados testes não-funcionais, para assegurar que o sistema não apenas funcione corretamente, mas também ofereça uma experiência segura, estável e adequada ao público-alvo. Nos testes de acessibilidade, responsividade e usabilidade, são aplicadas regras da técnica de avaliação heurística, com base nas heurísticas de Nielsen.

---

## 4. Ambiente de teste { #ambiente }

Os testes são executados no ambiente de homologação do NES (Núcleo de Práticas em Engenharia de Software), disponibilizado para a realização do trabalho.

---

## 5. Ferramentas { #ferramentas }

As ferramentas de teste foram selecionadas para garantir automação e confiabilidade na validação das funcionalidades, considerando a compatibilidade com Express.js, TypeScript e React.

| Ferramenta | Uso |
| --- | --- |
| **Jest** | Testes unitários e de integração: validação de funções, serviços e componentes de forma isolada e da comunicação entre módulos. |
| **Playwright** | Testes de sistema (*end-to-end*), simulando o comportamento do usuário em um ambiente real. |
| **Lighthouse** | Testes de acessibilidade, com base nas diretrizes do WCAG. |
| **Testes observacionais e com usuários** | Testes de usabilidade, com interações reais com o sistema. |

---

## 6. Critérios de entrada e saída { #criterios }

<div class="grid cards" markdown>

-   **Critérios de entrada**

    ---

    Condições para iniciar os testes:

    - ambiente de teste configurado;
    - plano de testes;
    - definição dos critérios de aceite;
    - casos de teste definidos, revisados e prontos para execução.

-   **Critérios de saída**

    ---

    Condições que determinam o encerramento dos testes:

    - cobertura de testes atendida;
    - resultados dos testes registrados e documentados;
    - relatórios de testes gerados;
    - matriz de rastreabilidade atualizada.

</div>

---

## 7. Casos de teste { #casos-teste }

Os casos de teste estão na página [Casos de Teste](casos-de-teste.md). Eles cobrem tanto os fluxos principais quanto os alternativos, garantindo a validação das funcionalidades críticas do sistema. Cada caso de teste é documentado conforme o modelo da Tabela 1.

| Campo | Descrição |
| --- | --- |
| **ID** | Identificador do caso de teste, no formato `CT-XXX-000`. |
| **Automatizado** | Sim ou Não. |
| **Nome** | Nome descritivo do caso de teste. |
| **História testada** | Identificador da história de usuário testada. |
| **Critério de aceite** | Identificador do critério de aceite testado. |
| **Objetivo** | Descrição do caso de teste. |
| **Critério de teste** | Critério utilizado para construção do teste. |
| **Pré-condições** | Condições para reprodução do teste. |
| **Dados de entrada** | Dados inseridos ao longo do teste, se houver. |
| **Procedimentos** | Passos sequenciais para reproduzir o teste. |
| **Resultado esperado** | Comportamento esperado do sistema. |

<p class="ns-legenda-tabela">Tabela 1 – Modelo de caso de teste. O modelo pode sofrer alterações conforme a necessidade dos testes funcionais e de ponta a ponta.</p>

---

## 8. Cobertura de testes { #cobertura }

A estratégia de cobertura foi definida com base na Pirâmide de Testes, visando maximizar a eficiência na detecção de defeitos, otimizar o esforço da equipe e reduzir riscos ao longo do desenvolvimento.

A distribuição dos testes segue uma lógica de priorização: os **testes unitários** constituem a base principal, complementados por **testes de integração** e por uma quantidade menor de **testes *end-to-end***. Não se trata de uma divisão rígida ou matemática, mas de uma orientação sobre onde concentrar os esforços. Como diretriz, busca-se a predominância de testes unitários, com forte presença também de testes de integração, garantindo que as interações entre componentes sejam validadas.

??? info "Histórico: adoção temporária da pirâmide invertida"
    Por decisão alinhada em consultoria, a equipe **assumiu temporariamente uma pirâmide invertida**, considerando o contexto do projeto e da equipe naquele momento. Essa decisão foi motivada por:

    - início recente da equipe no projeto, ainda em processo de entendimento e abstração do domínio;
    - necessidade de alinhamento coletivo sobre a estratégia de testes;
    - infraestrutura ainda não completamente estabelecida;
    - integração direta entre desenvolvimento e testes, mesmo com a adoção consciente de alguns antipadrões iniciais.

    Com isso, houve **maior ênfase em testes de integração**, para validar rapidamente o comportamento do sistema como um todo, enquanto a base de testes unitários era construída de forma incremental. Essa abordagem foi uma **adaptação pragmática ao estágio do projeto**, e não uma distorção permanente da estratégia.

Com a infraestrutura estabelecida, **a estratégia original da Pirâmide de Testes foi retomada**. A pirâmide invertida cumpriu seu papel ao garantir, de forma ágil, a cobertura do comportamento do sistema nas fases iniciais. Hoje, há predominância de testes unitários na base, complementados por testes de integração e por uma camada reduzida de testes *end-to-end*, alinhando a estratégia às boas práticas de engenharia de software e à maturidade atual do projeto.

### 8.1 Métricas de cobertura de código

Foram definidos critérios mínimos de cobertura de código, mensurados por ferramentas como o Jest, com foco em refletir a efetividade dos testes sobre o comportamento do sistema.

| Métrica | Meta | Por quê |
| --- | :---: | --- |
| **Branches** (decisões) | **80%** | Cobertura prioritária, por representar os diferentes fluxos de execução e regras condicionais da aplicação. |
| **Functions** (funções) | **85%** | Garante que as principais regras de negócio estejam sendo exercidas. |
| **Lines** (linhas) | **80%** | Garante que a maior parte do código-fonte seja de fato executada pelos testes. |
| **Statements** (instruções) | **80%** | Cobertura progressiva, assegurando que o código executável seja validado de forma consistente. |

Esses indicadores devem ser acompanhados continuamente, com evolução incremental ao longo do desenvolvimento. A priorização de *branches* reforça o foco em validar cenários reais de decisão, enquanto *functions* e *statements* complementam a cobertura estrutural do código. O objetivo dessas métricas não é apenas atingir números, mas assegurar que os testes representem de forma efetiva os comportamentos críticos do sistema e suas regras de negócio.

---

## 9. Relato de defeitos { #defeitos }

As falhas identificadas durante a execução dos testes são registradas e documentadas, garantindo a rastreabilidade e a correção adequada dos problemas. Os relatos estão no [Documento de Relatório de Bugs](https://docs.google.com/document/d/1HS_xlJynEhMjv_KvlSyI4PLTQYLjAsIH/edit?usp=sharing&ouid=111114849457494013010&rtpof=true&sd=true). Cada bug é documentado conforme o modelo da Tabela 2.

| Campo | Descrição |
| --- | --- |
| **ID** | Identificador do bug, no formato `BUG-REPO-000`. |
| **Status** | Aberto, Fechado ou Reaberto. |
| **Título** | `[#nº da issue]` Descrição curta e autoexplicativa do defeito. Se estiver associado a algum caso de teste, mencione o identificador dele. |
| **Quem está reportando** | Nome e e-mail de quem reporta. |
| **Designado para** | Quem desenvolveu a funcionalidade, se conhecido. O campo também pode ficar em aberto. |
| **Resumo** | Descrição clara e objetiva do comportamento inesperado. |
| **Passos para reprodução** | Sequência de ações realizadas até chegar ao bug. |
| **Resultado esperado** | Usado quando há um comportamento esperado firmado nos requisitos da funcionalidade ou tarefa testada. |
| **Observações** | Caminhos alternativos ao problema. Ex.: o bug de *resize* não se apresenta quando o mesmo procedimento é realizado nas condições Y. |
| **Criticidade / severidade** | Alta, Média ou Baixa. |
| **Versões afetadas** | Versão do produto em que o problema acontece. Em uma aplicação web, podem ser as versões dos navegadores; em dispositivos móveis, a versão do dispositivo e do sistema operacional. |
| **Evidência** | Todo relato de defeito precisa de evidência: anexe imagens ou vídeos que comprovem o defeito. |

<p class="ns-legenda-tabela">Tabela 2 – Modelo de relato de bug.</p>

Para a integração com o GitHub, foi definido um modelo complementar em Markdown, que padroniza o registro de defeitos nas *issues*, facilitando a comunicação entre as equipes e o acompanhamento do ciclo de vida dos bugs:

```markdown
## 📝 Resumo

---

## 🔁 Passos para reprodução

1.

---

## ✅ Resultado esperado

---

## ❌ Resultado atual

---

## 💬 Observações

-

---

## ⚠️ Criticidade / Severidade

**Alta/Média/Baixa**

---

## 🧩 Versões afetadas

-

---

## 📎 Evidência
```

---

## 10. Matriz de rastreabilidade { #matriz }

A [Matriz de Rastreabilidade](matriz-rastreabilidade.md) relaciona cada caso de teste ao épico, à história de usuário e ao critério de aceite correspondentes, além do status e do responsável por sua realização.

---

## 11. Quadro de responsabilidades { #responsabilidades }

| Nível de teste | Responsável |
| --- | --- |
| Unidade | Desenvolvedores |
| Integração | Tester / Desenvolvedores |
| Sistema | Tester |

---

## 12. Referências { #referencias }

- LIMA JR., Roberto F.; PRESTA, Luiz Fernando P. B.; BORBOREMA, Lucca S.; SILVA, Vanderson N.; DAHIA, Márcio L. M.; SANTOS, Anderson. *A case study on test case construction with large language models: unveiling practical insights and challenges*. In: CONGRESSO IBERO-AMERICANO EM ENGENHARIA DE SOFTWARE (CIbSE), 2024, Recife – PE. Anais [...]. Porto Alegre: Sociedade Brasileira de Computação, 2024. Disponível em: <https://sol.sbc.org.br/index.php/cibse/article/download/28465/28275/>. Acesso em: 17 mar. 2026.
- FÉLIX, Rafael (org.). **Teste de software**. São Paulo: Pearson, 2016. *E-book*. Disponível em: <https://plataforma.bvirtual.com.br>. Acesso em: 18 mar. 2026.
- FONTÃO, Awdren. **Verificação, Validação e Teste de Software**. Apresentações de slides da disciplina. Universidade Federal de Mato Grosso do Sul, 12 mar. 2025. Disponível em: <https://ava.ufms.br/course/view.php?id=66337>. Acesso em: 17 mar. 2026.
- VALENTE, Marco Túlio. ***Engenharia de software moderna*: princípios e práticas para desenvolvimento de software com produtividade**. [S.l.]: Independente, 2020. Disponível em: <https://engsoftmoderna.info/>. Acesso em: 19 mar. 2026.
- SALES, M. **Guia WCAG**. 2018. Disponível em: <https://guia-wcag.com>. Acesso em: 24 mar. 2026.
