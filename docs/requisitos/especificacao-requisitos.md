<h1 align="center">Especificação de Requisitos de Software</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 10/03/2026 | Primeira versão do documento, glossário e estrutura dos requisitos. | Sophya Ribeiro |
    | 1.0 | 11/03/2026 | Inserção de novos termos no glossário. Adição dos épicos 1 e 2, bem como suas respectivas histórias de usuário. | Sophya Ribeiro |
    | 1.0 | 12/03/2026 | Alteração e inserção nos critérios de aceite da US 2.3. | Sophya Ribeiro |
    | 1.1 | 16/03/2026 | Ajustes específicos. Primeira validação do documento. | Sophya Ribeiro |
    | 1.2 | 18/03/2026 | Adição de novo ator, conforme validação das proponentes. Ajustes pontuais em critérios de aceite. Primeira validação formal com proponentes. | Sophya Ribeiro |
    | 1.3 | 28/04/2026 | Atualização pontual nos épicos 1 e 2, requisitos não-funcionais e regras de negócio. | Sophya Ribeiro, Aline Hirokawa |
    | 1.4 | 29/04/2026 | Inserção do épico referente a autenticação. | Sophya Ribeiro |
    | 2.0 | 30/04/2026 | Inserção da História de usuário referente ao status dos incidentes. | Sophya Ribeiro |
    | 2.1 | 05/05/2026 | Ajustes nos requisitos não-funcionais | Aline Hirokawa |
    | 2.2 | 07/05/2026 | Adição de novos critérios de aceite na US2.5. | Sophya Ribeiro |
    | 2.3 | 19/05/2026 | Adição de texto para template do email da US2.5. | Sophya Ribeiro |
    | 2.4 | 20/05/2026 | Adição de nova pergunta no formulário de classificação. | Sophya Ribeiro |
    | 2.5 | 01/06/2026 | Atualização no modelo de descrição dos épicos. | Sophya Ribeiro |
    | 2.6 | 08/06/2026 | Edição e exclusão de requisitos não-funcionais. | Sophya Ribeiro |
    | 2.7 | 10/08/2026 | Adição do Épico 4, e das histórias de usuários | Gustavo Henrique |
    | 2.8 | 13/08/2026 | Adição do Épico 5, gestão do plano de ação | Gustavo Henrique |

## Sumário

- [1. Introdução](#introducao)
- [2. Glossário](#glossario)
- [3. Descrição dos Atores](#descricao-atores)
- [4. Épicos](#epicos)
- [5. Histórias de Usuário](#historias-usuario)
    - [5.1 Registro de notificações de incidentes](#historias-51)
    - [5.2 Gestão e classificação de notificações](#historias-52)
    - [5.3 Autenticação e controle de acesso](#historias-53)
    - [5.4 Registro de análise em notificação de incidentes](#historias-54)
    - [5.5 Gestão de plano de ação](#historias-55)
- [6. Requisitos Não-funcionais](#rnf)
    - [6.1 Disponibilidade](#rnf-disponibilidade)
    - [6.2 Segurança da Informação](#rnf-seguranca)
    - [6.3 Proteção de Dados e LGPD](#rnf-lgpd)
    - [6.4 Compatibilidade e Acesso](#rnf-compatibilidade)
    - [6.5 Desempenho](#rnf-desempenho)
    - [6.6 Acessibilidade](#rnf-acessibilidade)
- [7. Regras de Negócio](#regras-negocio)
- [8. Referências](#referencias)

---

<a id="introducao"></a>

## 1. Introdução

Este documento é destinado aos stakeholders da solução Notifica Saúde, tanto diretos quanto indiretos. Ele apresenta os requisitos de um sistema voltado ao registro, análise e monitoramento de incidentes relacionados à segurança do paciente em serviços de saúde.

A solução proposta permite que usuários realizem notificações de incidentes por meio de um formulário eletrônico, de forma identificada ou anônima. Após o registro, as notificações são encaminhadas ao Núcleo de Segurança do Paciente, responsável pela classificação do incidente, acompanhamento do fluxo de investigação e monitoramento das ações corretivas definidas pelos setores responsáveis.

Além disso, o sistema possibilita o acompanhamento do status das notificações, o registro das análises realizadas pelas áreas envolvidas e a geração de relatórios consolidados para apoio ao monitoramento e à melhoria contínua dos processos relacionados à segurança do paciente.

---

<a id="glossario"></a>

## 2. Glossário

| Termo | Descrição |
| --- | --- |
| Incidente | Ocorrência ou circunstância relacionada ao cuidado em saúde que poderia resultar, ou resultou, em dano ao paciente. Inclui desde situações de risco até eventos que efetivamente causaram dano. |
| Notificação | Registro formal de um incidente relacionado à segurança do paciente realizado no sistema. A notificação é o artefato gerado quando ocorre ou é identificado um incidente, devendo ser registrada independentemente da existência de dano ao paciente, conforme diretrizes e regulamentações de segurança do paciente. Seu objetivo é permitir o monitoramento, a análise e a implementação de ações de melhoria para prevenção de novos incidentes. A notificação pode ser realizada por qualquer pessoa e pode ocorrer de forma identificada ou anônima. |
| Evento adverso | Tipo de incidente que resulta em dano ao paciente decorrente do cuidado em saúde e não da evolução natural da doença. Pode ser classificado conforme a gravidade do dano (leve, moderado, grave ou catastrófico). |
| Classificação do Incidente | Processo realizado pelo Núcleo de Segurança do Paciente para categorizar o incidente de acordo com critérios de gravidade, tipo e impacto ao paciente. |
| Dano Leve | Incidente que não resulta em dano ao paciente, mas que deve ser registrado e monitorado conforme exigências regulatórias e políticas de segurança do paciente. |
| Dano Moderado | Incidente que causa algum impacto ao paciente, podendo exigir intervenção ou acompanhamento, porém sem resultar em consequências graves ou permanentes. |
| Dano Grave | Incidente que causa dano significativo ao paciente, podendo resultar em agravamento clínico relevante, necessidade de intervenção médica importante ou prolongamento da internação. |
| Dano Catastrófico | Incidente que resulta em óbito do paciente decorrente do evento relacionado ao cuidado em saúde. |
| Near Miss | Incidente que poderia causar dano ao paciente, mas que foi interceptado antes de atingir o paciente ou antes de produzir qualquer consequência. |
| Circunstância de Risco | Situação ou condição com potencial de causar um incidente relacionado ao cuidado em saúde, mesmo que nenhum erro ou dano tenha ocorrido. |
| Área Notificada | Setor, unidade ou departamento da instituição de saúde onde o incidente ocorreu e que será responsável por investigar a ocorrência e propor ações corretivas. |
| Gestor da Área | Profissional responsável pela gestão de um setor específico da instituição de saúde, encarregado de conduzir a investigação do incidente e definir ações corretivas. |
| Investigação de Incidente | Processo de análise conduzido pela área responsável para identificar as causas que levaram à ocorrência do incidente. |
| Análise de Causa Raiz | Método estruturado de investigação utilizado para identificar as causas fundamentais que contribuíram para a ocorrência de um incidente. |
| Diagrama de Ishikawa | Ferramenta de análise utilizada na investigação de incidentes para identificar e organizar possíveis causas do problema, também conhecida como diagrama de causa e efeito ou espinha de peixe. |
| Plano de Ação | Conjunto de ações corretivas e preventivas definidas após a investigação de um incidente, com responsáveis e prazos estabelecidos para evitar recorrência. |
| Ação Corretiva | Medida adotada para corrigir uma falha identificada e reduzir a probabilidade de repetição do incidente. |
| Prazo de Tratativa | Período definido para que a área responsável analise o incidente e registre as ações ou respostas no sistema. |
| Status da Notificação | Estado atual de uma notificação dentro do fluxo do sistema, indicando em que etapa do processo ela se encontra (ex.: registrada, classificada, em investigação, em análise, encerrada). |
| Núcleo de Segurança do Paciente (NSP) | Unidade ou equipe institucional responsável por receber notificações de incidentes, realizar a classificação inicial, acompanhar investigações e monitorar ações corretivas relacionadas à segurança do paciente. |
| NOTIVISA | Sistema nacional da Agência Nacional de Vigilância Sanitária (ANVISA) utilizado para registro e monitoramento de incidentes relacionados à vigilância sanitária e segurança do paciente. |
| Never Events | Eventos nunca (NE) são incidentes de segurança do paciente que podem ser evitados e tão graves que nunca deveriam acontecer. |

---

<a id="descricao-atores"></a>

## 3. Descrição dos Atores

| Ator | Descrição |
| --- | --- |
| Notificante | Usuário responsável por registrar uma notificação de incidente no sistema. Pode ser um profissional de saúde, paciente, acompanhante ou qualquer pessoa que tenha conhecimento do ocorrido. A notificação pode ser realizada de forma identificada ou anônima. |
| Profissional do Núcleo de Segurança do Paciente (NSP) | Usuário responsável por acessar as notificações registradas, realizar a análise inicial e classificar o incidente conforme critérios estabelecidos. Também acompanha o andamento das notificações. Responsável por gerenciar os usuários vinculados à sua instituição, incluindo cadastro, edição e definição de perfis de acesso. Pode gerar relatórios com base em filtros. |
| Gestor de Área | Usuário responsável pelo setor onde o incidente ocorreu. Após a classificação realizada pelo Núcleo de Segurança do Paciente, o gestor acessa a notificação para realizar a investigação do incidente, registrar a análise das causas e definir o plano de ação com medidas corretivas ou preventivas. Pode gerar relatórios do seu setor/área com base em filtros. |
| Administrador do Sistema | Usuário responsável pela administração global do sistema, com acesso irrestrito a todas as instituições cadastradas. Pode gerenciar usuários em nível sistêmico, configurar parâmetros gerais da aplicação, supervisionar o uso do sistema e garantir seu correto funcionamento em todos os contextos institucionais. |

---

<a id="epicos"></a>

## 4. Épicos

Nesta seção são apresentados os épicos do sistema NotificaSaúde, organizados com o objetivo de agrupar funcionalidades relacionadas de acordo com os principais fluxos e necessidades identificados no processo de gestão de incidentes. Cada épico contém uma descrição resumida de seu propósito e a relação das histórias de usuário associadas, permitindo uma visão mais ampla das funcionalidades do produto e de como elas se conectam aos objetivos do sistema.

### Épico 1 — Registro de notificações de incidentes

**COMO** qualquer pessoa que tenha conhecimento de um incidente (profissional de saúde, paciente, acompanhante ou terceiro)
**QUERO** registrar uma notificação de incidente no sistema
**PARA** que a ocorrência seja analisada e tratada pela instituição, contribuindo para a melhoria da segurança do paciente.

**Histórias de usuário:** [US 1.1 — Registrar notificação de incidente](#us-1-1)

### Épico 2 — Gestão e classificação de notificações de incidentes

**COMO** profissional do Núcleo de Segurança do Paciente, devidamente autenticado no sistema
**QUERO** visualizar, complementar, classificar e encaminhar notificações de incidentes registradas
**PARA** garantir que as ocorrências sejam corretamente analisadas e direcionadas às áreas responsáveis para investigação e definição de ações corretivas.

**Histórias de usuário:**

- [US 2.1 — Visualizar notificações registradas](#us-2-1)
- [US 2.2 — Complementar ou corrigir informações da notificação](#us-2-2)
- [US 2.3 — Classificar incidente notificado](#us-2-3)
- [US 2.4 — Definir e gerenciar status do incidente](#us-2-4)
- [US 2.5 — Encaminhar notificação para área responsável](#us-2-5)

### Épico 3 — Autenticação e controle de acesso

**COMO** usuário previamente cadastrado no sistema
**QUERO** realizar login e recuperar minha senha de acesso quando necessário
**PARA** acessar a plataforma de forma segura e utilizar suas funcionalidades conforme meu perfil de acesso.

**Histórias de usuário:**

- [US 3.1 — Realizar login no sistema](#us-3-1)
- [US 3.2 — Recuperar senha de acesso](#us-3-2)

### Épico 4 — Registro de análise em notificação de incidentes

**COMO** gestor da área ou profissional do Núcleo de Segurança do Paciente
**QUERO** registrar uma análise em uma notificação de incidente
**PARA** investigar as causas do ocorrido e documentar as informações relevantes para definição de ações corretivas e preventivas.

**Histórias de usuário:**

- [US 4.1 — Visualizar notificação encaminhada para análise](#us-4-1)
- [US 4.2 — Registrar análise do incidente](#us-4-2)
- [US 4.3 — Acompanhar plano de ação e prazos](#us-4-3)
- [US 4.4 — Concluir investigação do incidente](#us-4-4)
- [US 4.5 — Consultar histórico da análise e das ações](#us-4-5)

### Épico 5 — Gestão de plano de ação

**COMO** profissional responsável pela análise ou setor responsável pela execução
**QUERO** registrar e acompanhar um plano de ação relacionado ao problema identificado na análise
**PARA** definir, executar, acompanhar e avaliar as ações necessárias para tratar o problema identificado.

**Histórias de usuário:**

- [US 5.1 — Acessar e preencher o plano de ação](#us-5-1)
- [US 5.2 — Adicionar ações ao plano de ação](#us-5-2)
- [US 5.3 — Acompanhar e atualizar o andamento das ações](#us-5-3)
- [US 5.4 — Avaliar a efetividade das ações](#us-5-4)

---

<a id="historias-usuario"></a>

## 5. Histórias de Usuário

Nesta seção são apresentadas as histórias de usuário do sistema NotificaSaúde, elaboradas com o objetivo de representar as necessidades dos diferentes perfis de usuários envolvidos no processo de gestão de incidentes. Cada história é acompanhada de seus respectivos critérios de aceite, contexto de uso e relação com as regras de negócio identificadas, permitindo detalhar os comportamentos esperados do sistema e orientar o desenvolvimento das funcionalidades propostas. As histórias foram definidas com base nas informações levantadas junto aos stakeholders, entrevistas realizadas e análise do fluxo atual de gerenciamento de incidentes em instituições de saúde.

<a id="historias-51"></a>

### 5.1 Registro de notificações de incidentes

<a id="us-1-1"></a>

#### US-1.1 — Registrar notificação de incidente

**Épico:** 1 — Registro de notificações de incidentes · **Prioridade:** Alta

**COMO** Notificante
**QUERO** registrar uma notificação de incidente no sistema
**PARA** que a ocorrência seja analisada e tratada pela instituição, contribuindo para melhoria da segurança do paciente

**Regras de Negócio:** RN-04

**Critérios de Aceite**

- **CA01 — Acesso ao formulário de notificação**
    **Dado que** um usuário acesse o sistema de notificação, **quando** selecionar a opção de registrar um incidente, **então** o sistema deve apresentar um formulário eletrônico para preenchimento da notificação.
- **CA02 — Campos do formulário de notificação**
    **Dado que** o usuário esteja preenchendo o formulário de notificação, **quando** visualizar o formulário, **então** o sistema deve apresentar os campos previamente configurados.
- **CA03 — Registro da notificação**
    **Dado que** o usuário preencheu o formulário de notificação, **quando** confirmar o envio, **então** o sistema deve registrar a notificação e atribuir o status "Novo".

**Contexto de Uso:** Esta funcionalidade pode ser utilizada por qualquer pessoa que tenha conhecimento do incidente, incluindo profissionais de saúde, pacientes, acompanhantes ou terceiros.

<a id="historias-52"></a>

### 5.2 Gestão e classificação de notificações

<a id="us-2-1"></a>

#### US-2.1 — Visualizar notificações registradas

**Épico:** 2 — Gestão e classificação de notificações · **Prioridade:** Alta

**COMO** Profissional do Núcleo de Segurança do Paciente, devidamente autenticado no sistema
**QUERO** visualizar as notificações registradas no sistema
**PARA** acompanhar os incidentes reportados e iniciar o processo de análise.

**Regras de Negócio:** RN-10

**Critérios de Aceite**

- **CA01 — Acesso à lista de notificações**
    **Dado que** o usuário esteja autenticado como profissional do Núcleo de Segurança do Paciente, **quando** acessar o painel de notificações, **então** o sistema deve apresentar uma lista com todas as notificações registradas.
- **CA02 — Informações exibidas na lista**
    **Dado que** o usuário esteja visualizando a lista de notificações, **quando** as notificações forem exibidas, **então** o sistema deve apresentar, no mínimo: identificador único da notificação (decimal sequencial), data de registro, setor, status da notificação e os primeiros 200 caracteres da descrição.
- **CA03 — Ordenação padrão das notificações**
    **Dado que** o profissional do Núcleo de Segurança do Paciente esteja visualizando a lista de notificações, **quando** acessar o painel de notificações, **então** o sistema deve apresentar as notificações ordenadas por padrão das mais recentes para as mais antigas.
- **CA04 — Ordenações possíveis para as notificações**
    **Dado que** o usuário esteja visualizando a lista de notificações, **quando** utilizar as opções de ordenação, **então** o sistema deve permitir ordenar as notificações por mais recentes ou mais antigas.
- **CA05 — Filtros**
    **Dado que** o usuário esteja visualizando a lista de notificações, **quando** desejar localizar uma notificação específica, **então** o sistema deve permitir buscar notificações pelo tipo de incidente, pelo grau de dano (se houver) e pelo setor onde ocorreu o incidente.
- **CA06 — Barra de pesquisa**
    **Dado que** o usuário esteja visualizando a lista de notificações, **quando** informar um identificador na barra de pesquisa, **então** o sistema deve exibir as notificações correspondentes ao identificador informado.
- **CA07 — Acesso ao detalhamento da notificação**
    **Dado que** o usuário esteja visualizando a lista de notificações, **quando** selecionar uma notificação específica, **então** o sistema deve apresentar os detalhes completos da notificação registrada, bem como o histórico de modificações.

**Contexto de Uso:** Essa funcionalidade é utilizada pelos profissionais do Núcleo de Segurança do Paciente para acompanhar as notificações registradas no sistema, ter uma visão geral da quantidade de notificações recebidas e iniciar o processo de análise e classificação dos incidentes.

<a id="us-2-2"></a>

#### US-2.2 — Complementar ou corrigir informações da notificação

**Épico:** 2 — Gestão e classificação de notificações · **Prioridade:** Média

**COMO** Profissional do Núcleo de Segurança do Paciente
**QUERO** complementar ou corrigir informações da notificação registrada
**PARA** garantir que os dados necessários para análise e encaminhamento do incidente estejam corretos.

**Regras de Negócio:** RN-02, RN-09

**Critérios de Aceite**

- **CA01 — Edição de campos da notificação**
    **Dado que** o profissional do Núcleo de Segurança do Paciente esteja visualizando os detalhes de uma notificação, **quando** selecionar a opção de editar informações da notificação, **então** o sistema deve permitir a edição ou preenchimento de campos complementares da notificação.
- **CA02 — Campos editáveis**
    **Dado que** o profissional esteja editando uma notificação, **quando** acessar a visão detalhada da notificação, **então** o sistema deve permitir a edição ou preenchimento dos campos do formulário de registro de incidente.
- **CA03 — Impedimento de edição da descrição**
    **Dado que** existe um incidente, **quando** o incidente for editado, **então** o sistema não deve permitir editar a descrição.
- **CA04 — Registro das alterações**
    **Dado que** o profissional do Núcleo de Segurança do Paciente realize alterações nas informações da notificação, **quando** salvar as modificações, **então** o sistema deve registrar essas alterações no histórico de modificações, incluindo data, hora, autor responsável e quais campos foram alterados.

**Contexto de Uso:** Essa funcionalidade permite que o Núcleo de Segurança do Paciente complemente ou corrija informações da notificação quando os dados registrados inicialmente estiverem incompletos ou incorretos, garantindo maior qualidade das informações utilizadas na análise do incidente.

<a id="us-2-3"></a>

#### US-2.3 — Classificar incidente notificado

**Épico:** 2 — Gestão e classificação de notificações · **Prioridade:** Média

**COMO** Profissional do Núcleo de Segurança do Paciente
**QUERO** classificar o incidente registrado
**PARA** categorizar a notificação e dar continuidade ao fluxo de análise.

**Regras de Negócio:** RN-03, RN-05

**Critérios de Aceite**

- **CA01 — Acesso à classificação do incidente**
    **Dado que** o usuário esteja visualizando os detalhes de uma notificação, **quando** selecionar a opção de classificar o incidente, **então** o sistema deve permitir o registro da classificação do incidente.
- **CA02 — Impedimento de classificação**
    **Dado que** existam campos obrigatórios não preenchidos, **quando** o usuário tentar classificar o incidente, **então** o sistema deve impedir a classificação.
- **CA03 — Campos de classificação**
    **Dado que** o usuário esteja classificando um incidente, **quando** acessar o formulário de classificação, **então** o sistema deve apresentar um fluxo estruturado, com exibição condicional de campos conforme a classificação selecionada, contendo:
    - **Classificação do incidente** (obrigatória, seleção única): Circunstância notificável / Near Miss / Incidente sem dano / Incidente com dano (Evento Adverso). Se "Evento Adverso", segue para *Grau do dano*; caso contrário, segue direto para *Tipo de incidente*.
    - **Grau do dano** (obrigatória, seleção única, exibida apenas para "Evento Adverso"): Leve / Moderado / Grave / Óbito / Never Event (Evento Sentinela / Catastrófico). Se "Never Event", segue para *Tipo de Never Event*; caso contrário, segue para *Tipo de incidente*.
    - **Never Event** (obrigatória de acordo com a condicional, seleção única): lista com os eventos-sentinela reconhecidos (ex.: alta/liberação indevida de paciente incapaz, contaminação na administração de O2/gases medicinais, cirurgia em local/lado/paciente errado, retenção de corpo estranho após cirurgia, troca de bebês, suicídio/tentativa/dano autoinfligido grave durante assistência, entre outros previstos na lista completa do formulário).
    - **Tipo de incidente** (obrigatória, múltipla escolha, exibida apenas se o Grau do dano for diferente de "Never Event"): Erro de medicação, Falha na identificação do paciente, Queda, Lesão por pressão, Infecção relacionada à assistência, Procedimento cirúrgico, Equipamento ou dispositivo médico, Falha de diagnóstico, Comunicação, Transfusão sanguínea, Documentação/prontuário, Outro (com campo de texto).
    - **Envolvidos no incidente** (obrigatória, múltipla escolha): Profissional de saúde, Paciente, Familiar/acompanhante, Equipamento médico, Dispositivo médico, Medicamento, Sistema de informação, Ambiente físico, Outro (campo de texto obrigatório se selecionado).
    - **Observações do NSP** (opcional, campo textual, limite de 400 caracteres).
    - **Sugestão de protocolo de investigação**: Investigação Direta (ACR + Ishikawa + 5 Porquês + SMART) — para circunstâncias notificáveis, near misses, incidentes sem dano e com dano leve; ou Investigação Sistêmica Profunda (Protocolo de Londres + SMART) — para incidentes com dano moderado, grave, óbitos e Never Events. Um tooltip na primeira opção orienta: *"Se você estiver diante de um near miss (quase erro) ou de um incidente sem dano, mas que possua altíssimo potencial de dano ou grande oportunidade de aprendizado organizacional, utilize o Protocolo de Londres."*
- **CA04 — Registro da classificação**
    **Dado que** o usuário preencheu todos os campos de classificação, **quando** confirmar o registro, **então** o sistema deve atualizar o status da notificação.
- **CA05 — Atribuição de prazo de validade com base na classificação**
    **Dado que** o profissional do NSP classificou um incidente, **quando** a classificação for salva, **então** o sistema deve exibir na tela e definir automaticamente a data de validade com base no grau de dano: Sem dano ou dano leve — 10 dias; Dano moderado — 7 dias; Dano grave — 4 dias. A validade conta a partir da data de registro do incidente.
- **CA06 — Edição de classificação após encaminhamento do incidente**
    **Dado que** o incidente já tenha sido encaminhado para o setor responsável, **quando** o usuário tentar editar a classificação, **então** o sistema deve impedir a alteração.

**Contexto de Uso:** A classificação do incidente é realizada pelo Núcleo de Segurança do Paciente após o recebimento da notificação, com base em critérios institucionais e diretrizes de segurança do paciente.

<a id="us-2-4"></a>

#### US-2.4 — Definir e gerenciar status do incidente

**Épico:** 2 — Gestão e classificação de notificações · **Prioridade:** Média

**COMO** profissional do Núcleo de Segurança do Paciente
**QUERO** visualizar o status atualizado dos incidentes
**PARA** acompanhar em que etapa do fluxo cada notificação se encontra

**Regras de Negócio:** RN-08

**Critérios de Aceite**

- **CA01 — Status inicial do incidente**
    **Dado que** uma nova notificação seja registrada, **quando** for criada, **então** o sistema deve definir automaticamente o status como "Novo".
- **CA02 — Transição para status "Classificado"**
    **Dado que** o profissional do NSP esteja classificando um incidente, **quando** todos os campos obrigatórios da classificação forem preenchidos e salvos, **então** o sistema deve atualizar automaticamente o status para "Classificado".
- **CA03 — Transição para status "Analisado"**
    **Dado que** o incidente esteja classificado, **quando** o profissional registrar uma análise do incidente, **então** o sistema deve atualizar automaticamente o status para "Analisado".
- **CA04 — Transição para status "Encaminhado"**
    **Dado que** o incidente esteja classificado, **quando** o profissional encaminhar o incidente para análise de um setor, **então** o sistema deve atualizar automaticamente o status para "Encaminhado para o setor".
- **CA05 — Arquivamento do incidente**
    **Dado que** o usuário autenticado como "Profissional do NSP" esteja visualizando um incidente, **quando** selecionar a opção de arquivar, **então** o sistema deve atualizar automaticamente o status para "Arquivado".
- **CA06 — Status "Arquivado" como estado final**
    **Dado que** o incidente esteja com status "Arquivado", **quando** o usuário visualizar ou acessar o incidente, **então** o sistema deve mantê-lo como estado final, não permitindo novas alterações no fluxo padrão.
- **CA07 — Coerência do fluxo de status**
    **Dado que** o incidente esteja em um determinado status, **quando** ocorrer uma ação no sistema, **então** o status deve ser atualizado automaticamente conforme as regras de transição definidas.
- **CA08 — Status não editável manualmente**
    **Dado que** o usuário esteja visualizando um incidente, **quando** acessar o campo de status, **então** o sistema deve permitir apenas a visualização, não sendo possível alterar manualmente o status.

**Contexto de Uso:** Essa funcionalidade é utilizada pelos profissionais do Núcleo de Segurança do Paciente para acompanhar o progresso das notificações ao longo do fluxo de tratamento, desde o registro inicial até sua classificação, análise, encaminhamento e arquivamento. O status permite identificar rapidamente em que etapa cada incidente se encontra, garantindo organização, rastreabilidade e controle do ciclo de vida das notificações, sem permitir alterações manuais indevidas ou exclusão de registros.

<a id="us-2-5"></a>

#### US-2.5 — Encaminhar notificação para área responsável

**Épico:** 2 — Gestão e classificação de notificações · **Prioridade:** Média

**COMO** Profissional do Núcleo de Segurança do Paciente
**QUERO** encaminhar a notificação para o setor responsável
**PARA** que a área realize a investigação do incidente.

**Regras de Negócio:** RN-08

**Critérios de Aceite**

- **CA01 — Seleção da área responsável**
    **Dado que** o incidente já tenha sido classificado, **quando** o profissional do NSP selecionar a opção de encaminhamento, **então** o sistema deve permitir encaminhar a notificação, de acordo com template pré-estabelecido, ao(s) responsável(is) pelo setor.
- **CA02 — Envio de e-mail de encaminhamento**
    **Dado que** a notificação seja encaminhada para uma unidade/setor responsável, **quando** o encaminhamento for concluído, **então** o sistema deve enviar um e-mail contendo o número da notificação, instruções de acesso ao sistema, orientações para análise do caso e registro do plano de ação pelo setor responsável, com o seguinte texto:

    > Olá,
    >
    > Informamos que o incidente de segurança do paciente nº (Número da Notificação) foi registrado e direcionado para sua unidade/setor.
    >
    > Para ter acesso aos detalhes do incidente e à sua gravidade, acesse a plataforma digital Notifica Saúde o mais breve possível e priorize a análise e a condução das ações necessárias para prevenir a recorrência de incidentes semelhantes.
    >
    > Para acessar o Notifica Saúde:
    > 1. Clique no link: (Inserir o link aqui)
    > 2. Insira seu login e senha institucional.
    > 3. Localize a notificação nº (Número da Notificação).
    > 4. Registre a análise detalhada do caso e seu respectivo plano de ação.
    >
    > Atenciosamente,
    > Núcleo de Segurança do Paciente (NSP)

- **CA03 — Encaminhamento de incidentes não classificados**
    **Dado que** o usuário tente encaminhar um incidente, **quando** a classificação do incidente não estiver completa, **então** o sistema deve impedir o encaminhamento da notificação.
- **CA04 — Atualização do status**
    **Dado que** o encaminhamento foi realizado, **quando** a operação for concluída, **então** o sistema deve atualizar o status da notificação.
- **CA05 — Restrição de reencaminhamento para o mesmo setor**
    **Dado que** o gestor da área esteja visualizando um incidente já encaminhado para seu setor, **quando** acessar as opções de encaminhamento da notificação, **então** o sistema não deve exibir a opção de encaminhar o incidente novamente para o mesmo setor.
- **CA06 — Bloqueio de edição após encaminhamento**
    **Dado que** a notificação tenha sido encaminhada para um setor responsável, **quando** o usuário acessar a notificação, **então** o sistema não deve permitir a edição das informações gerais e da classificação.

**Contexto de Uso:** Após a classificação do incidente, o Núcleo de Segurança do Paciente encaminha a notificação ao gestor do setor onde o incidente ocorreu, que será responsável pela investigação e definição das ações corretivas.

<a id="historias-53"></a>

### 5.3 Autenticação e controle de acesso

<a id="us-3-1"></a>

#### US-3.1 — Realizar login no sistema

**Épico:** 3 — Autenticação e controle de acesso · **Prioridade:** Alta

**COMO** usuário previamente cadastrado no sistema
**QUERO** realizar login utilizando meu e-mail e senha
**PARA** acessar as funcionalidades do sistema de forma segura

**Regras de Negócio:** RN-01

**Critérios de Aceite**

- **CA01 — Acesso à tela de login**
    **Dado que** o usuário acesse o sistema, **quando** não estiver autenticado, **então** o sistema deve apresentar a tela de login.
- **CA02 — Autenticação com credenciais válidas**
    **Dado que** o usuário esteja na tela de login, **quando** informar e-mail e senha válidos, **então** o sistema deve autenticar o usuário e redirecioná-lo para a área interna.
- **CA03 — Validação de credenciais inválidas**
    **Dado que** o usuário esteja na tela de login, **quando** informar e-mail ou senha inválidos, **então** o sistema deve exibir uma mensagem de erro informando credenciais inválidas.

**Contexto de Uso:** Essa funcionalidade é utilizada por usuários previamente cadastrados no sistema para acessar a plataforma de forma segura, permitindo a utilização das funcionalidades disponíveis de acordo com seu perfil. O login é o ponto de entrada do sistema, sendo necessário para garantir controle de acesso e proteção das informações relacionadas às notificações e à gestão de incidentes.

<a id="us-3-2"></a>

#### US-3.2 — Recuperar senha de acesso

**Épico:** 3 — Autenticação e controle de acesso · **Prioridade:** Alta

**COMO** usuário previamente cadastrado no sistema
**QUERO** realizar login utilizando meu e-mail e senha
**PARA** acessar as funcionalidades do sistema de forma segura

**Critérios de Aceite**

- **CA01 — Acesso à recuperação de senha**
    **Dado que** o usuário esteja na tela de login, **quando** selecionar a opção "Esqueci minha senha", **então** o sistema deve redirecionar para a tela de recuperação de senha.
- **CA02 — Solicitação de recuperação**
    **Dado que** o usuário esteja na tela de recuperação de senha, **quando** informar um e-mail válido cadastrado no sistema, **então** o sistema deve enviar um link de redefinição de senha para o e-mail informado.
- **CA03 — Acesso via link de redefinição**
    **Dado que** o usuário tenha recebido o e-mail de recuperação, **quando** acessar o link enviado, **então** o sistema deve redirecionar o usuário para a tela de redefinição de senha.
- **CA04 — Validade do link**
    **Dado que** o usuário acesse o link de redefinição, **quando** o link estiver expirado ou inválido, **então** o sistema deve exibir uma mensagem de erro e permitir a solicitação de um novo link.
- **CA05 — Redefinição de senha**
    **Dado que** o usuário esteja na tela de redefinição de senha, **quando** informar uma nova senha válida, **então** o sistema deve atualizar a senha do usuário com sucesso.
- **CA06 — Confirmação de alteração**
    **Dado que** o usuário redefiniu sua senha, **quando** a operação for concluída, **então** o sistema deve informar o sucesso da alteração e permitir que o usuário realize login.
- **CA07 — Segurança do link**
    **Dado que** o sistema gere o link de redefinição, **quando** o link for enviado ao usuário, **então** ele deve conter um identificador seguro (token) que permita validar a autenticidade da solicitação.
- **CA08 — Validade do link (expiração)**
    **Dado que** o usuário acesse o link de redefinição, **quando** o link tiver sido gerado há mais de 1 hora, **então** o sistema deve considerar o link expirado, exibir uma mensagem de erro e permitir a solicitação de um novo link.

**Contexto de Uso:** Essa funcionalidade é utilizada por usuários que esqueceram sua senha de acesso ao sistema, permitindo a recuperação do acesso de forma segura por meio do envio de um código de verificação para o e-mail cadastrado. Ela garante que o usuário consiga redefinir sua senha e voltar a utilizar o sistema sem a necessidade de intervenção manual, mantendo a segurança e a continuidade do uso da plataforma.

<a id="historias-54"></a>

### 5.4 Registro de análise em notificação de incidentes

<a id="us-4-1"></a>

#### US-4.1 — Visualizar notificação encaminhada para análise

**Épico:** 4 — Registro de análise em notificação de incidentes · **Prioridade:** Alta

**COMO** Gestor da Área ou profissional do Núcleo de Segurança do Paciente
**QUERO** visualizar uma notificação encaminhada para análise
**PARA** ter acesso às informações necessárias para iniciar a investigação do incidente.

**Regras de Negócio:** RN-08

**Critérios de Aceite**

- **CA01 — Acesso à notificação encaminhada**
    **Dado que** o usuário esteja autenticado e seja responsável pela análise da notificação, **quando** acessar uma notificação encaminhada para sua área, **então** o sistema deve apresentar os dados da notificação.
- **CA02 — Visualização das informações do incidente**
    **Dado que** o usuário esteja visualizando uma notificação encaminhada, **quando** acessar seus detalhes, **então** o sistema deve apresentar as informações registradas, incluindo os dados da notificação e sua classificação.
- **CA03 — Visualização da classificação**
    **Dado que** a notificação tenha sido classificada pelo NSP, **quando** o responsável acessar a notificação, **então** o sistema deve permitir visualizar a classificação, o grau do dano, o tipo de incidente e demais informações registradas na classificação.
- **CA03 — Restrição de acesso**
    **Dado que** o usuário não seja responsável pela notificação ou não possua permissão para acessá-la, **quando** tentar acessar a notificação, **então** o sistema deve impedir o acesso às informações.

**Contexto de Uso:** Essa funcionalidade permite que o responsável pela investigação tenha acesso às informações necessárias para compreender o incidente antes de iniciar a análise e registrar suas conclusões.

<a id="us-4-2"></a>

#### US-4.2 — Registrar análise do incidente

**Épico:** 4 — Registro de análise em notificação de incidentes · **Prioridade:** Média

**COMO** Gestor da Área ou profissional do Núcleo de Segurança do Paciente
**QUERO** registrar a análise realizada sobre o incidente
**PARA** documentar as informações identificadas durante a investigação e contribuir para a definição das ações corretivas ou preventivas.

**Regras de Negócio:** RN-07, RN-08

**Critérios de Aceite**

- **CA01 — Acesso à análise**
    **Dado que** a notificação tenha sido encaminhada para a área responsável, **quando** o responsável acessar a notificação, **então** o sistema deve disponibilizar a opção para registrar a análise do incidente.
- **CA02 — Registro das informações para análise**
    **Dado que** o responsável esteja realizando a investigação, **quando** registrar as informações da análise, **então** o sistema deve permitir o preenchimento dos campos definidos para documentar a investigação do incidente.
- **CA03 — Obrigatoriedade das informações**
    **Dado que** existam informações obrigatórias da análise não preenchidas, **quando** o responsável tentar salvar ou concluir a análise, **então** o sistema deve informar os campos pendentes e impedir a conclusão enquanto os campos obrigatórios não forem preenchidos.
- **CA04 — Salvamento da análise**
    **Dado que** as informações obrigatórias tenham sido preenchidas, **quando** o responsável salvar a análise, **então** o sistema deve registrar as informações associadas à notificação.
- **CA05 — Identificação do responsável**
    **Dado que** uma análise seja registrada, **quando** o sistema salvar a análise, **então** deve registrar o usuário responsável, a data e a hora da operação.
- **CA06 — Atualização do status**
    **Dado que** uma análise válida tenha sido registrada, **quando** a operação for concluída, **então** o sistema deve atualizar o status da notificação conforme o fluxo definido.

**Contexto de Uso:** A funcionalidade é utilizada durante a investigação do incidente para documentar as informações levantadas pelo gestor da área ou pelo profissional do NSP e manter o registro formal da análise realizada.

<a id="us-4-3"></a>

#### US-4.3 — Acompanhar plano de ação e prazos

**Épico:** 4 — Registro de análise em notificação de incidentes · **Prioridade:** Média

**COMO** Gestor da Área ou profissional do Núcleo de Segurança do Paciente
**QUERO** acompanhar as ações definidas no plano de ação
**PARA** monitorar sua execução e identificar ações pendentes ou próximas do prazo.

**Critérios de Aceite**

- **CA01 — Visualização das ações**
    **Dado que** exista um plano de ação registrado, **quando** o responsável acessar a área de acompanhamento, **então** o sistema deve apresentar as ações vinculadas à notificação.
- **CA02 — Visualização dos responsáveis**
    **Dado que** existam ações registradas, **quando** o usuário visualizar o plano de ação, **então** o sistema deve apresentar o responsável definido para cada ação.
- **CA03 — Visualização dos prazos**
    **Dado que** uma ação possua prazo definido, **quando** o usuário visualizar o plano de ação, **então** o sistema deve apresentar a data prevista para conclusão.
- **CA04 — Prazo da ação**
    **Dado que** uma ação seja registrada, **quando** o responsável definir o prazo de execução, **então** o sistema deve armazenar a data prevista para conclusão da ação.
- **CA05 — Validação das informações obrigatórias**
    **Dado que** existam informações obrigatórias não preenchidas, **quando** o usuário tentar salvar o plano de ação, **então** o sistema deve impedir o registro e informar os campos pendentes.
- **CA04 — Identificação de ações pendentes**
    **Dado que** existam ações ainda não concluídas, **quando** o usuário consultar o plano de ação, **então** o sistema deve permitir identificar quais ações permanecem pendentes.

**Contexto de Uso:** A funcionalidade permite ao gestor e ao NSP acompanhar a execução das ações definidas durante a investigação e monitorar os respectivos prazos.

<a id="us-4-4"></a>

#### US-4.4 — Concluir investigação do incidente

**Épico:** 4 — Registro de análise em notificação de incidentes · **Prioridade:** Alta

**COMO** Gestor da Área ou profissional do Núcleo de Segurança do Paciente
**QUERO** concluir a investigação de um incidente
**PARA** registrar formalmente o encerramento da etapa de análise e indicar que as informações necessárias para a tratativa foram registradas.

**Critérios de Aceite**

- **CA01 — Disponibilidade da conclusão**
    **Dado que** o responsável tenha preenchido as informações obrigatórias da investigação, **quando** acessar as opções da notificação, **então** o sistema deve disponibilizar a opção de concluir a investigação.
- **CA02 — Validação antes da conclusão**
    **Dado que** existam informações obrigatórias pendentes, **quando** o responsável tentar concluir a investigação, **então** o sistema deve impedir a conclusão e informar as pendências.
- **CA03 — Registro da conclusão**
    **Dado que** todas as informações obrigatórias tenham sido preenchidas, **quando** o responsável confirmar a conclusão, **então** o sistema deve registrar a conclusão da investigação.
- **CA04 — Registro de data e responsável**
    **Dado que** a investigação seja concluída, **quando** a operação for realizada, **então** o sistema deve registrar a data, hora e usuário responsável pela conclusão.
- **CA05 — Atualização do status**
    **Dado que** a investigação tenha sido concluída, **quando** a operação for confirmada, **então** o sistema deve atualizar o status da notificação conforme o fluxo definido.

<a id="us-4-5"></a>

#### US-4.5 — Consultar histórico da análise e das ações

**Épico:** 4 — Registro de análise em notificação de incidentes · **Prioridade:** Média

**COMO** gestor da área ou profissional do Núcleo de Segurança do Paciente
**QUERO** consultar o histórico das alterações realizadas durante a investigação
**PARA** garantir rastreabilidade das informações, análises e ações registradas na notificação.

**Critérios de Aceite**

- **CA01 — Acesso ao histórico**
    **Dado que** o usuário possua permissão para visualizar a notificação, **quando** acessar o histórico, **então** o sistema deve apresentar os registros de alterações relacionados à investigação.
- **CA02 — Identificação das alterações**
    **Dado que** existam alterações registradas, **quando** o usuário visualizar o histórico, **então** o sistema deve apresentar, no mínimo, a data, hora, usuário responsável e informação alterada.
- **CA03 — Histórico das ações**
    **Dado que** tenham sido registradas ações no plano de ação, **quando** o usuário consultar o histórico, **então** o sistema deve permitir identificar as alterações realizadas nas ações registradas.
- **CA04 — Preservação do histórico**
    **Dado que** uma alteração tenha sido registrada, **quando** o usuário consultar posteriormente a notificação, **então** o registro histórico deve permanecer disponível conforme as permissões de acesso definidas.

<a id="historias-55"></a>

### 5.5 Gestão de plano de ação

<a id="us-5-1"></a>

#### US-5.1 — Acessar e preencher o plano de ação

**Épico:** 5 — Gestão de plano de ação · **Prioridade:** Alta

**COMO** profissional responsável pela análise
**QUERO** acessar e preencher o plano de ação relacionado ao problema identificado na análise
**PARA** definir as ações necessárias para tratar o problema identificado.

**Regras de Negócio:** RN-07

**Critérios de Aceite**

- **CA01 — Acessar plano de ação**
    **Dado que** o profissional tenha concluído a análise da notificação, **quando** acessar a funcionalidade de plano de ação, **então** o sistema deve apresentar a tela de preenchimento do plano de ação.
- **CA02 — Recuperação automática do problema**
    **Dado que** exista um problema identificado durante a análise, **quando** o profissional acessar o plano de ação, **então** o sistema deve apresentar automaticamente o problema identificado na análise.
- **CA03 — Preenchimento da ação**
    **Dado que** o profissional esteja preenchendo o plano de ação, **quando** informar os dados da ação, **então** o sistema deve permitir informar o que será feito, onde será feito, quem será responsável, previsão de início e previsão de conclusão.
- **CA04 — Necessidade de recurso**
    **Dado que** o profissional esteja preenchendo uma ação, **quando** informar se a ação necessita de recursos, **então** o sistema deve permitir indicar se necessita de recurso e, caso positivo, informar qual recurso é necessário e seu custo estimado.
- **CA05 — Aprovação da Alta Gestão**
    **Dado que** o profissional esteja preenchendo uma ação, **quando** informar se a ação depende de aprovação da Alta Gestão, **então** o sistema deve permitir indicar se necessita de aprovação e, caso positivo, informar qual aprovação é necessária.
- **CA06 — Comprovação da execução**
    **Dado que** o profissional esteja preenchendo uma ação, **quando** informar como a execução será comprovada, **então** o sistema deve permitir registrar a forma de comprovação da execução.
- **CA07 — Resultado esperado**
    **Dado que** o profissional esteja preenchendo uma ação, **quando** informar o resultado esperado, **então** o sistema deve permitir registrar qual resultado deverá ser alcançado.
- **CA08 — Verificação do resultado**
    **Dado que** o profissional esteja preenchendo uma ação, **quando** informar como será verificado o resultado, **então** o sistema deve permitir registrar o método de verificação e quando ela deverá ocorrer.
- **CA09 — Indicador de acompanhamento**
    **Dado que** o profissional esteja preenchendo uma ação, **quando** informar se a ação irá gerar um indicador de acompanhamento, **então** o sistema deve permitir selecionar entre "Sim" e "Não".

**Contexto de Uso:** Essa funcionalidade permite que o profissional responsável, após concluir a análise do incidente, registre o plano de ação a partir do problema identificado, definindo as informações necessárias para execução e posterior acompanhamento das ações.

<a id="us-5-2"></a>

#### US-5.2 — Adicionar ações ao plano de ação

**Épico:** 5 — Gestão de plano de ação · **Prioridade:** Alta

**COMO** profissional responsável pelo plano de ação
**QUERO** adicionar uma ou mais ações relacionadas ao problema identificado
**PARA** definir todas as medidas necessárias para sua tratativa.

**Critérios de Aceite**

- **CA01 — Adicionar outra ação**
    **Dado que** o profissional tenha preenchido uma ação, **quando** selecionar "Adicionar outra ação", **então** o sistema deve disponibilizar uma nova estrutura para preenchimento de outra ação.
- **CA02 — Preservação das ações**
    **Dado que** exista uma ou mais ações preenchidas, **quando** o profissional adicionar uma nova ação, **então** o sistema deve preservar as informações das ações anteriormente preenchidas.
- **CA03 — Associação ao problema**
    **Dado que** existam múltiplas ações cadastradas, **quando** o plano for salvo, **então** todas as ações devem permanecer associadas ao problema identificado na análise.
- **CA04 — Identificação das ações**
    **Dado que** o profissional adicione mais de uma ação, **quando** as ações forem registradas, **então** o sistema deve identificar cada ação por uma numeração sequencial.
- **CA05 — Salvar plano**
    **Dado que** o profissional tenha preenchido uma ou mais ações, **quando** selecionar "Salvar Plano de Ação", **então** o sistema deve validar os campos obrigatórios e registrar o plano de ação.

**Contexto de Uso:** Essa funcionalidade permite que um mesmo problema identificado durante a análise seja tratado por meio de uma ou mais ações, mantendo todas elas vinculadas ao mesmo plano de ação.

<a id="us-5-3"></a>

#### US-5.3 — Acompanhar e atualizar o andamento das ações

**Épico:** 5 — Gestão de plano de ação · **Prioridade:** Alta

**COMO** profissional responsável ou setor responsável pela execução
**QUERO** acompanhar e atualizar o andamento das ações do plano
**PARA** manter registrado o estado de execução e as evidências relacionadas a cada ação.

**Critérios de Aceite**

- **CA01 — Geração da tabela de acompanhamento**
    **Dado que** o plano de ação tenha sido salvo, **quando** o sistema concluir o registro do plano, **então** deve gerar automaticamente uma tabela com as ações cadastradas.
- **CA02 — Informações da tabela**
    **Dado que** a tabela de acompanhamento tenha sido gerada, **quando** o usuário visualizá-la, **então** o sistema deve apresentar, no mínimo: número da ação, o que será feito, responsável, início, término, status, data atualizada e evidência.
- **CA03 — Atualização individual da ação**
    **Dado que** exista uma ação cadastrada, **quando** o usuário selecionar "Clique aqui para atualizar o andamento da ação", **então** o sistema deve abrir a tela de atualização da ação selecionada.
- **CA04 — Identificação automática da ação**
    **Dado que** o usuário tenha selecionado uma ação para atualização, **quando** a tela de atualização for aberta, **então** o sistema deve apresentar automaticamente a descrição da ação selecionada.
- **CA05 — Data real de início**
    **Dado que** o usuário esteja atualizando uma ação, **quando** informar a data real de início, **então** o sistema deve registrar a data informada.
- **CA06 — Ação concluída**
    **Dado que** o usuário selecione a situação "Concluída", **quando** informar a conclusão da ação, **então** o sistema deve permitir registrar a data de conclusão e a descrição do que foi realizado.
- **CA07 — Ação atrasada**
    **Dado que** o usuário selecione a situação "Atrasada", **quando** registrar a atualização, **então** o sistema deve exigir o motivo do atraso e uma nova previsão de finalização.
- **CA08 — Ação cancelada**
    **Dado que** o usuário selecione a situação "Cancelada", **quando** registrar a atualização, **então** o sistema deve exigir o motivo do cancelamento.
- **CA09 — Registro da evidência**
    **Dado que** o usuário esteja atualizando uma ação, **quando** informar onde a evidência está armazenada, **então** o sistema deve permitir registrar a localização ou descrição da evidência relacionada à execução da ação.
- **CA10 — Atualização da tabela**
    **Dado que** o usuário tenha salvo uma atualização, **quando** retornar ao acompanhamento do plano, **então** o sistema deve apresentar a situação e as informações atualizadas da ação.
- **CA11 — Cancelamento da atualização**
    **Dado que** o usuário esteja preenchendo uma atualização, **quando** selecionar "Cancelar", **então** o sistema deve retornar à tela anterior sem registrar as alterações realizadas.

**Contexto de Uso:** Essa funcionalidade permite o acompanhamento individual das ações cadastradas no plano, possibilitando que o profissional ou setor responsável registre o andamento, situação, prazos e evidências da execução.

<a id="us-5-4"></a>

#### US-5.4 — Avaliar a efetividade das ações

**Épico:** 5 — Gestão de plano de ação · **Prioridade:** Alta

**COMO** profissional responsável pela avaliação da ação
**QUERO** registrar o resultado observado e avaliar sua efetividade
**PARA** verificar se a ação executada produziu o resultado esperado para o problema identificado.

**Critérios de Aceite**

- **CA01 — Resultado observado**
    **Dado que** o usuário esteja atualizando uma ação, **quando** informar o resultado observado, **então** o sistema deve permitir registrar o resultado obtido após a execução da ação.
- **CA02 — Avaliação da efetividade**
    **Dado que** o usuário esteja avaliando uma ação, **quando** informar sua efetividade, **então** o sistema deve disponibilizar as opções "Sim", "Parcialmente" e "Não".
- **CA03 — Efetividade parcial**
    **Dado que** o usuário selecione "Parcialmente", **quando** salvar a avaliação, **então** o sistema deve exigir o preenchimento do motivo da efetividade parcial.
- **CA04 — Ação não efetiva**
    **Dado que** o usuário selecione "Não", **quando** salvar a avaliação, **então** o sistema deve exigir o preenchimento do motivo pelo qual a ação não foi efetiva.
- **CA05 — Efetividade positiva**
    **Dado que** o usuário selecione "Sim", **quando** salvar a avaliação, **então** o sistema deve registrar a ação como efetiva.
- **CA06 — Independência entre situação e efetividade**
    **Dado que** uma ação possa estar concluída sem necessariamente solucionar o problema, **quando** o usuário avaliar sua efetividade, **então** o sistema deve permitir registrar uma efetividade diferente da situação da ação.
- **CA07 — Registro da avaliação**
    **Dado que** a avaliação tenha sido preenchida corretamente, **quando** o usuário selecionar "Salvar", **então** o sistema deve registrar o resultado observado e a avaliação de efetividade associados à ação.

**Contexto de Uso:** Essa funcionalidade permite avaliar se as ações executadas produziram o resultado esperado, diferenciando a conclusão da execução da ação de sua efetividade na resolução do problema identificado.

---

<a id="rnf"></a>

## 6. Requisitos Não-funcionais

Esta seção descreve os requisitos não funcionais do sistema NotificaSaúde, incluindo aspectos relacionados à disponibilidade, segurança, proteção de dados, desempenho e compatibilidade da solução. Esses requisitos definem características e restrições que o sistema deve atender para garantir seu funcionamento adequado e seguro em ambientes institucionais de saúde.

<a id="rnf-disponibilidade"></a>

### 6.1 Disponibilidade

- **6.1.1** O sistema deve manter disponibilidade mínima de 99,5% ao mês, desconsiderando períodos programados de manutenção previamente comunicados.
- **6.1.2** O sistema deve permitir o registro de notificações 24 horas por dia, 7 dias por semana, considerando que incidentes podem ocorrer em diferentes turnos de atendimento.

<a id="rnf-seguranca"></a>

### 6.2 Segurança da Informação

- **6.2.1** O sistema deve exigir autenticação para acesso às funcionalidades internas e impedir acesso não autenticado a endpoints protegidos.
- **6.2.2** O sistema deve garantir controle de acesso baseado em perfis de usuário, de acordo com a Matriz RBAC, impedindo acesso indevido mediante manipulação manual de URLs, rotas ou requisições HTTP.
- **6.2.3** O sistema deve registrar histórico de modificações realizadas nas notificações.
- **6.2.4** O sistema deve enviar ao usuário um link de redefinição por e-mail com validade máxima de 1 hora e utilização única, ao ser acionada a funcionalidade de recuperação de senha.
- **6.2.5** O sistema deve bloquear temporariamente o acesso do usuário e do endereço IP por 60 segundos após 15 tentativas consecutivas de autenticação inválida realizadas em intervalo máximo de 5 minutos.
- **6.2.6** O sistema deve estabelecer que a senha do usuário, ao ser criada ou redefinida, possua no mínimo: 8 caracteres; um número; uma letra maiúscula; uma letra minúscula; um caractere especial.
- **6.2.7** O sistema não deve expor informações sensíveis em respostas HTTP, mensagens de erro, logs públicos ou stack traces.
- **6.2.8** O sistema deve ter verificação via captcha, a fim de verificar se de fato é um humano a acessar o sistema.

<a id="rnf-lgpd"></a>

### 6.3 Proteção de Dados e LGPD

- **6.3.1** O sistema deve permitir o registro de notificações de forma anônima, quando desejado pelo notificante.
- **6.3.2** O sistema deve limitar o acesso às informações apenas aos usuários autorizados conforme suas permissões de acesso.
- **6.3.3** O sistema deve garantir o isolamento de modo que cada instituição de saúde tenha acesso aos dados no âmbito de sua própria organização.

<a id="rnf-compatibilidade"></a>

### 6.4 Compatibilidade e Acesso

- **6.4.1** O sistema deve ser compatível com os navegadores Chrome, Safari e Microsoft Edge, possuindo as respectivas versões mínimas: 145.0.7632.45/46, 18.6 e 147.0.3912.98.
- **6.4.2** A interface deve ser responsiva, permitindo o uso em smartphones, tablets e computadores, com seus respectivos viewports mínimos: 375 × 667 pixels, 744 × 1133 pixels e 1024 × 1366 pixels.

<a id="rnf-desempenho"></a>

### 6.5 Desempenho

- **6.5.1** O sistema deve garantir desempenho ao carregar as páginas e submeter os formulários, atendendo aos seguintes critérios:
    - O desempenho deve ser consistente para ambas as operações de navegação e submissão dos dados;
    - A latência das respostas da API do sistema deve ser no máximo 500ms no percentil 95 (p95) sob carga de 50 requisições simultâneas.

<a id="rnf-acessibilidade"></a>

### 6.6 Acessibilidade

- **6.6.1** A interface do sistema deve estar em conformidade com as diretrizes WCAG do nível AA.

---

<a id="regras-negocio"></a>

## 7. Regras de Negócio

**Acesso restrito**
Somente usuários previamente cadastrados e autorizados devem ter acesso às funcionalidades internas do sistema, como classificação de incidentes, análise, investigação, definição de plano de ação e geração de relatórios. O acesso deve ocorrer mediante autenticação (login e senha) e respeitar os perfis de usuário definidos.

**Histórico de modificações**
Todas as alterações realizadas nas informações de uma notificação devem ser registradas e mantidas em histórico. O sistema deve permitir a visualização das modificações realizadas, incluindo informações como data da alteração, usuário responsável e conteúdo modificado, garantindo transparência e rastreabilidade do processo de gestão do incidente.

**Obrigatoriedade de registro de incidentes**
Todo incidente relacionado ao cuidado em saúde deve ser passível de registro no sistema, independentemente de ter causado dano ao paciente. A notificação deve ser realizada mesmo em situações classificadas como near miss ou circunstância de risco, conforme diretrizes de segurança do paciente.

**Possibilidade de notificação anônima**
O sistema deve permitir que notificações sejam registradas de forma anônima, sem a identificação do notificante, com o objetivo de incentivar o registro de incidentes e reduzir barreiras ao relato de ocorrências.

**Classificação obrigatória do incidente**
Toda notificação registrada deve passar por uma etapa de classificação realizada por um profissional do Núcleo de Segurança do Paciente, que deverá categorizar o incidente conforme os critérios estabelecidos (tipo de incidente e grau de dano). Somente usuários do núcleo podem realizar classificação.

**Encaminhamento para área responsável**
Após a classificação do incidente, a notificação deve ser encaminhada ao gestor do setor onde o incidente ocorreu, que será responsável pela investigação e pela definição das ações corretivas ou preventivas.

**Registro de plano de ação**
Para incidentes que demandem tratativa, o gestor da área responsável deve registrar no sistema um plano de ação contendo as medidas a serem adotadas, os responsáveis pela execução e os prazos previstos. O núcleo também pode realizar esse registro.

**Acompanhamento do status da notificação**
Cada notificação deve possuir um status que indique a etapa atual do fluxo de tratamento do incidente (por exemplo: registrada, classificada, em investigação, enviada para setor responsável ou arquivada), permitindo o monitoramento do processo ao longo do tempo.

**Preservação e histórico dos registros**
As notificações registradas e as ações associadas não devem ser excluídas do sistema, garantindo a manutenção do histórico para fins de auditoria, monitoramento institucional e geração de relatórios. Em conformidade com a LGPD, o sistema deve apresentar aos usuários um Termo de Uso e Responsabilidade, com o objetivo de esclarecer a finalidade do tratamento dos dados, os direitos do titular e as condições de utilização da plataforma.

**Identificador de notificações**
Toda notificação registrada no sistema deve possuir um identificador único, gerado automaticamente no momento do registro. Esse identificador deve permitir a rastreabilidade da notificação ao longo de todo o fluxo de tratamento do incidente, sendo utilizado para consulta, acompanhamento, classificação, investigação e geração de relatórios.

---

<a id="referencias"></a>

## 8. Referências

- PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: Uma abordagem profissional*. 8 ed. Porto Alegre: Bookman, 2016.
- SOMMERVILLE, Ian. *Engenharia de Software*. 9 ed. São Paulo: Pearson, 2011.
- VALENTE, Marco Tulio. *Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade*. Editora Independente, 2020.