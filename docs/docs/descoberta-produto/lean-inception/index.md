<h1 align="center">Lean Inception</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

<div class="ns-pdf-botao" markdown>
[:material-file-pdf-box: Baixar relatório em PDF](../../assets/docs/lean-inception.pdf){ .md-button .md-button--primary download="Lean Inception - NotificaSaude.pdf" }
</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 07/10/2026 | Migração dos quadros da Lean Inception (Miro) para o MkDocs, no formato de relatório. | Sophya Ribeiro |

## Sumário

- [1. Contextualização](#contextualizacao)
- [2. Visão do produto](#visao)
- [3. O produto é, não é, faz, não faz](#e-nao-e)
- [4. Personas](#personas)
- [5. Brainstorming de funcionalidades](#brainstorming)
- [6. Jornadas dos usuários](#jornadas)
- [7. Revisão técnica, de negócio e de UX](#revisao)
- [8. Sequenciador](#sequenciador)
- [9. Canvas MVP](#canvas-mvp)

---

## 1. Contextualização { #contextualizacao }

A Lean Inception do NotificaSaúde foi conduzida pela equipe do projeto para alinhar, de forma colaborativa, a visão do produto, as personas, as jornadas, as funcionalidades e o recorte do MVP. A oficina foi realizada em um quadro do Miro, e esta página registra o resultado de cada etapa em formato de relatório.

<div class="ns-dec-resumo" markdown>
<div class="ns-dec-stat"><strong>4</strong><span>personas</span></div>
<div class="ns-dec-stat"><strong>15</strong><span>funcionalidades sequenciadas</span></div>
<div class="ns-dec-stat"><strong>6</strong><span>funcionalidades no MVP</span></div>
</div>

---

## 2. Visão do produto { #visao }

<div class="ns-li-visao">
<p><span class="ns-li-visao__k">Para</span> profissionais e usuários de instituições de saúde envolvidos direta e indiretamente na gestão de incidentes,</p>
<p><span class="ns-li-visao__k">cuja</span> dificuldade é a falta de padrão estruturado e a lentidão no processo de gerenciamento dos incidentes e exportação dos dados,</p>
<p><span class="ns-li-visao__k">o nosso produto</span> <strong>NotificaSaúde</strong></p>
<p><span class="ns-li-visao__k">é</span> um sistema web centralizado, hospedado em servidor e acessado via navegador com controle de permissões,</p>
<p><span class="ns-li-visao__k">que</span> registra notificações, classifica e tipifica incidentes, elabora e monitora plano de ação, gera e exporta relatórios com base em filtros.</p>
<p><span class="ns-li-visao__k">Diferentemente de</span> sistemas como VigiHosp, EPA, Epimed e sistemas manuais com urnas e papéis,</p>
<p><span class="ns-li-visao__k">o nosso produto</span> permite o acompanhamento do fluxo de gestão de incidentes do início ao fim do processo, incluindo registro da notificação, classificação, tipificação e análise do incidente, criação e monitoramento do plano de ação. Além disso, possibilita a extração de relatórios com filtros personalizados, facilitando a análise e a tomada de decisão.</p>
</div>

---

## 3. O produto é, não é, faz, não faz { #e-nao-e }

<div class="ns-li-quads" markdown>
<div class="ns-li-quad ns-li-quad--sim" markdown>
<p class="ns-li-quad__t"><span class="ns-li-quad__i">✓</span> O produto É</p>

- É um sistema de fluxos simples
- Aberto para notificação de incidentes
- Uma esteira de incidentes registrados
- Sistema seguro e acessível
- Sistema fácil e intuitivo
- Gerenciador de incidentes
- Sistema de acesso à informação interna e relatórios
- Uma ferramenta que possibilita a criação e o monitoramento de plano de ação para evitar novos incidentes da mesma natureza

</div>

<div class="ns-li-quad ns-li-quad--sim" markdown>
<p class="ns-li-quad__t"><span class="ns-li-quad__i">✓</span> O produto FAZ</p>

- Apoia a identificação e a notificação de incidentes
- Permite a criação de notificações a partir de um formulário
- Permite notificações anônimas ou identificadas
- Registra todas as notificações de incidente, identificando-as por um id (#1)
- Emite alerta de novos registros de notificações
- Permite a triagem de notificações
- Permite classificar e identificar o incidente por grau
- Permite classificar e identificar o tipo do incidente (queda, lesão, erro de medicação...)
- Auxilia o núcleo a identificar riscos e gerir incidentes
- Acompanha os incidentes (o que, quando aconteceu, o que será ou foi feito)
- Emite alerta de análises pendentes
- Diferencia os usuários
- Possui proteção de dados
- Permite arquivar as notificações
- Permite a inativação de usuário ou instituição que não o utilizam
- Gera relatório de melhoria
- Gera relatórios baseados em filtros
- Permite ao gestor da área gerar e visualizar relatórios dos incidentes
- Exporta as informações

</div>

<div class="ns-li-quad ns-li-quad--nao" markdown>
<p class="ns-li-quad__t"><span class="ns-li-quad__i">✕</span> O produto NÃO É</p>

- Sistema de registro de atendimentos
- Sistema de gestão de base de pacientes (cadastro, histórico)
- Sistema de reclamações ou feedbacks
- Um sistema complexo, com muitos fluxos
- Um sistema manipulável por todos os usuários
- Uma ferramenta para encontrar culpados pelos incidentes

</div>

<div class="ns-li-quad ns-li-quad--nao" markdown>
<p class="ns-li-quad__t"><span class="ns-li-quad__i">✕</span> O produto NÃO FAZ</p>

- Não permite que o usuário visualize suas notificações enviadas
- Não permite a exclusão de uma notificação de incidente, apenas arquiva
- Não exige nenhum tipo de validação por parte do usuário notificador
- Não permite anexar documentos para validar a classificação da notificação
- Não permite a busca de incidentes pelo nome do paciente
- Não permite a exclusão de um usuário ou instituição

</div>
</div>

!!! quote "Síntese registrada no quadro"
    Um sistema destinado à notificação de incidentes que atentam contra a segurança do paciente, realizada por meio de um formulário, em que essas notificações são catalogadas pela equipe do núcleo a fim de controlar os acontecimentos dentro da instituição de saúde e identificar possíveis causas.

---

## 4. Personas { #personas }

Proto-personas levantadas a partir dos quatro perfis de usuário do sistema: Notificante, Profissional do Núcleo de Segurança do Paciente (NSP), Gestor de Área e Administrador do Sistema.

<div class="ns-li-personas">
<div class="ns-li-persona">
<div class="ns-li-persona__top"><span class="ns-avatar">AM</span><div><span class="ns-dec-rotulo">Profissional do Núcleo (NSP)</span><strong>Ana Mendes</strong><span class="ns-li-persona__meta">42 anos · Enfermeira</span></div></div>
<p><span class="ns-dec-rotulo">Perfil</span>Atua há mais de 15 anos em instituições hospitalares, com forte experiência em processos e segurança do paciente.</p>
<p><span class="ns-dec-rotulo">Frustração</span>Precisa de auxílio para gerenciar os incidentes, padronizar o fluxo de notificação, agilizar a análise dos casos e gerar relatórios estratégicos para a tomada de decisão.</p>
</div>
<div class="ns-li-persona">
<div class="ns-li-persona__top"><span class="ns-avatar">LU</span><div><span class="ns-dec-rotulo">Administrador geral do sistema</span><strong>Luciana</strong><span class="ns-li-persona__meta">35 anos · Gestora</span></div></div>
<p><span class="ns-dec-rotulo">Perfil</span>Profissional da área da saúde com especialização em qualidade e segurança do paciente.</p>
<p><span class="ns-dec-rotulo">Frustração</span>Falta de um sistema centralizado que abranja todas as etapas da gestão das notificações recebidas. Ausência de dashboard e relatórios (xlsx) completos com indicadores personalizados.</p>
</div>
<div class="ns-li-persona">
<div class="ns-li-persona__top"><span class="ns-avatar">JO</span><div><span class="ns-dec-rotulo">Gestor da área</span><strong>João</strong><span class="ns-li-persona__meta">40 anos · Responsável técnico da Fisioterapia (equipe) da UTI</span></div></div>
<p><span class="ns-dec-rotulo">Perfil</span>Especialista em UTI responsável por supervisionar a equipe, elaborar escalas, organizar documentos e acompanhar a qualidade assistencial.</p>
<p><span class="ns-dec-rotulo">Frustração</span>Dificuldade em transformar dados das notificações de incidentes em ações práticas de melhoria, bem como em acompanhar essas ações.</p>
</div>
<div class="ns-li-persona">
<div class="ns-li-persona__top"><span class="ns-avatar">LH</span><div><span class="ns-dec-rotulo">Notificante</span><strong>Lucas Henrique</strong><span class="ns-li-persona__meta">25 anos · Paciente da emergência</span></div></div>
<p><span class="ns-dec-rotulo">Perfil</span>É alérgico a dipirona. É casado e tem ensino médio completo.</p>
<p><span class="ns-dec-rotulo">Frustração</span>Passou recentemente por um incidente em que lhe administraram dipirona por engano, o que causou uma crise alérgica. Sentiu falta de maneiras fáceis de relatar o ocorrido.</p>
</div>
</div>

---

## 5. Brainstorming de funcionalidades { #brainstorming }

Funcionalidades levantadas a partir da visão do produto e das personas.

<div class="ns-li-colunas" markdown>

- Preencher formulário de notificação de incidente, com os campos necessários para o âmbito da saúde
- Notificar o recebimento de novo incidente (e-mail)
- Listar incidentes
- Visualizar histórico de incidentes
- Filtro de busca por causa, nome do médico(a), enfermeiro(a) ou paciente
- Classificar incidentes recebidos
- Encaminhar incidente para o setor analisar
- Registrar análise de causa do incidente
- Realizar propostas de ações para melhoria ou prevenção de incidentes
- Registrar plano de ação para o incidente
- Registrar e acompanhar ações realizadas sob o plano de ação
- Acompanhar o status do plano de ação
- "Arquivar" notificações, caso seja necessário
- Gerar relatórios
- Gerar relatórios com filtros (período, setor, tipo de incidente, gravidade)
- Relatórios periódicos por tipos e setores
- Exportar os relatórios em formatos compatíveis
- Realizar login
- Cadastrar novo funcionário (usuário, e-mail, senha)
- Listar instituições cadastradas
- Fornecer feedback visual sobre as ações do usuário

</div>

---

## 6. Jornadas dos usuários { #jornadas }

Cada jornada descreve o percurso de uma persona para atingir seus objetivos, com as funcionalidades do sistema associadas a cada trecho.

### Profissional do Núcleo (NSP): Ana Mendes

<div class="ns-li-jornada">
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Início do dia</p><svg class="ns-bpmn" viewBox="0 0 806 110" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Acorda, realiza sua</tspan><tspan x="122.0" dy="16">rotina e se encaminha</tspan><tspan x="122.0" dy="16">para o trabalho</tspan><tspan x="122.0" dy="16">(hospital)</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="59.5" text-anchor="middle"><tspan x="304.0" dy="0">Abre o NotificaSaúde</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="59.5" text-anchor="middle"><tspan x="486.0" dy="0">Faz login</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 590,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="51.5" text-anchor="middle"><tspan x="668.0" dy="0">Verifica notificação</tspan><tspan x="668.0" dy="16">de novos incidentes</tspan></text><polyline class="ns-bpmn-seta" points="744,55.0 760,55.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="772" cy="55.0" r="9"/></svg><p class="ns-li-feats"><span class="ns-dec-rotulo">Funcionalidades</span><span class="ns-tag ns-tag--produto">Realizar login</span> <span class="ns-tag ns-tag--produto">Visualizar histórico de incidentes</span> <span class="ns-tag ns-tag--produto">Filtro de busca por data, identificador, setor e grau de dano</span></p></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Classificação e tratamento do incidente</p><svg class="ns-bpmn" viewBox="0 0 806 390" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="51.5" text-anchor="middle"><tspan x="122.0" dy="0">Visualiza o</tspan><tspan x="122.0" dy="16">formulário preenchido</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="43.5" text-anchor="middle"><tspan x="304.0" dy="0">Classifica o</tspan><tspan x="304.0" dy="16">incidente conforme a</tspan><tspan x="304.0" dy="16">descrição</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 395,55.0" marker-end="url(#ns-bpmn-ponta)"/><polygon class="ns-bpmn-gw" points="414,38.0 431,55.0 414,72.0 397,55.0"/><text class="ns-bpmn-x" x="414" y="60.0" text-anchor="middle">×</text><text class="ns-bpmn-rot" x="414" y="31.0" text-anchor="middle">Grau do dano?</text><polyline class="ns-bpmn-seta" points="414,72.0 414,116 16,116"/><polyline class="ns-bpmn-seta" points="16,116 16,195.0"/><text class="ns-bpmn-rot" x="46" y="146">Sem dano, dano leve ou moderado</text><polyline class="ns-bpmn-seta" points="16,195.0 44,195.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="154" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="191.5" text-anchor="middle"><tspan x="122.0" dy="0">Altera o status da</tspan><tspan x="122.0" dy="16">notificação recebida</tspan></text><polyline class="ns-bpmn-seta" points="198,195.0 226,195.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="154" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="175.5" text-anchor="middle"><tspan x="304.0" dy="0">Encaminha e-mail com</tspan><tspan x="304.0" dy="16">informações da</tspan><tspan x="304.0" dy="16">notificação para o</tspan><tspan x="304.0" dy="16">setor responsável</tspan></text><polyline class="ns-bpmn-seta" points="380,195.0 396,195.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="408" cy="195.0" r="9"/><polyline class="ns-bpmn-seta" points="16,195.0 16,335.0"/><text class="ns-bpmn-rot" x="46" y="286">Dano grave ou catastrófico</text><polyline class="ns-bpmn-seta" points="16,335.0 44,335.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="294" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="331.5" text-anchor="middle"><tspan x="122.0" dy="0">Preenche o formulário</tspan><tspan x="122.0" dy="16">online do NOTIVISA</tspan></text><polyline class="ns-bpmn-seta" points="198,335.0 226,335.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="294" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="331.5" text-anchor="middle"><tspan x="304.0" dy="0">Realiza a análise do</tspan><tspan x="304.0" dy="16">incidente</tspan></text><polyline class="ns-bpmn-seta" points="380,335.0 408,335.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="294" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="331.5" text-anchor="middle"><tspan x="486.0" dy="0">Registra o plano de</tspan><tspan x="486.0" dy="16">ação</tspan></text><polyline class="ns-bpmn-seta" points="562,335.0 590,335.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="294" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="331.5" text-anchor="middle"><tspan x="668.0" dy="0">Registra o status do</tspan><tspan x="668.0" dy="16">plano</tspan></text><polyline class="ns-bpmn-seta" points="744,335.0 760,335.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="772" cy="335.0" r="9"/></svg><p class="ns-li-feats"><span class="ns-dec-rotulo">Funcionalidades</span><span class="ns-tag ns-tag--produto">Preencher formulário de notificação de incidente</span> <span class="ns-tag ns-tag--produto">Classificar incidentes recebidos</span> <span class="ns-tag ns-tag--produto">Encaminhar incidente para o setor analisar</span> <span class="ns-tag ns-tag--produto">Registrar análise de causa do incidente</span> <span class="ns-tag ns-tag--produto">Registrar plano de ação para o incidente</span> <span class="ns-tag ns-tag--produto">Registrar e acompanhar ações realizadas sob o plano de ação</span></p></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Acompanhamento e relatórios</p><svg class="ns-bpmn" viewBox="0 0 806 78" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="39.0" r="10"/><polyline class="ns-bpmn-seta" points="26,39.0 44,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Visualiza incidentes</tspan><tspan x="122.0" dy="16">anteriores</tspan></text><polyline class="ns-bpmn-seta" points="198,39.0 226,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="35.5" text-anchor="middle"><tspan x="304.0" dy="0">Acompanha o status</tspan><tspan x="304.0" dy="16">dos planos de ação</tspan></text><polyline class="ns-bpmn-seta" points="380,39.0 408,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="43.5" text-anchor="middle"><tspan x="486.0" dy="0">Gera relatórios</tspan></text><polyline class="ns-bpmn-seta" points="562,39.0 590,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="35.5" text-anchor="middle"><tspan x="668.0" dy="0">Realiza a exportação</tspan><tspan x="668.0" dy="16">dos dados</tspan></text><polyline class="ns-bpmn-seta" points="744,39.0 760,39.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="772" cy="39.0" r="9"/></svg><p class="ns-li-feats"><span class="ns-dec-rotulo">Funcionalidades</span><span class="ns-tag ns-tag--produto">Registrar e acompanhar ações realizadas sob o plano de ação</span> <span class="ns-tag ns-tag--produto">Gerar relatórios com filtros (período, setor, tipo de incidente, gravidade)</span> <span class="ns-tag ns-tag--produto">Exportação dos relatórios em formatos compatíveis</span></p></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Gestão de instituições e usuários</p><svg class="ns-bpmn" viewBox="0 0 806 110" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="51.5" text-anchor="middle"><tspan x="122.0" dy="0">Verifica a lista de</tspan><tspan x="122.0" dy="16">instituições</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="51.5" text-anchor="middle"><tspan x="304.0" dy="0">Adiciona, edita e</tspan><tspan x="304.0" dy="16">desativa instituições</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="35.5" text-anchor="middle"><tspan x="486.0" dy="0">Adiciona, edita e</tspan><tspan x="486.0" dy="16">desativa usuários de</tspan><tspan x="486.0" dy="16">instituições e</tspan><tspan x="486.0" dy="16">setores</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 578,55.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="590" cy="55.0" r="9"/></svg><p class="ns-li-feats"><span class="ns-dec-rotulo">Funcionalidades</span><span class="ns-tag ns-tag--produto">Listar instituições cadastradas</span> <span class="ns-tag ns-tag--produto">Gerenciar instituições</span> <span class="ns-tag ns-tag--produto">Listar usuários e setores cadastrados</span> <span class="ns-tag ns-tag--produto">Gerenciar usuários e setor</span></p></div>
</div>

### Notificante (paciente): Lucas Henrique

<div class="ns-li-jornada">
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Do atendimento à notificação</p><svg class="ns-bpmn" viewBox="0 0 806 362" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="51.5" text-anchor="middle"><tspan x="122.0" dy="0">Sente necessidade de</tspan><tspan x="122.0" dy="16">atendimento médico</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="51.5" text-anchor="middle"><tspan x="304.0" dy="0">É atendido na</tspan><tspan x="304.0" dy="16">urgência</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="59.5" text-anchor="middle"><tspan x="486.0" dy="0">Recebe medicamento</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 590,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="59.5" text-anchor="middle"><tspan x="668.0" dy="0">Passa mal</tspan></text><polyline class="ns-bpmn-seta" points="668.0,96 668.0,118 122.0,118 122.0,138" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="161.5" text-anchor="middle"><tspan x="122.0" dy="0">Percebe que</tspan><tspan x="122.0" dy="16">ministraram um</tspan><tspan x="122.0" dy="16">medicamento ao qual</tspan><tspan x="122.0" dy="16">tem alergia</tspan></text><polyline class="ns-bpmn-seta" points="198,181.0 226,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="177.5" text-anchor="middle"><tspan x="304.0" dy="0">É internado para</tspan><tspan x="304.0" dy="16">tratamento</tspan></text><polyline class="ns-bpmn-seta" points="380,181.0 408,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="161.5" text-anchor="middle"><tspan x="486.0" dy="0">Vê nos corredores do</tspan><tspan x="486.0" dy="16">hospital o QR Code do</tspan><tspan x="486.0" dy="16">aplicativo de</tspan><tspan x="486.0" dy="16">notificação</tspan></text><polyline class="ns-bpmn-seta" points="562,181.0 590,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="169.5" text-anchor="middle"><tspan x="668.0" dy="0">Acessa o site do</tspan><tspan x="668.0" dy="16">NotificaSaúde no</tspan><tspan x="668.0" dy="16">navegador do celular</tspan></text><polyline class="ns-bpmn-seta" points="668.0,222 668.0,244 122.0,244 122.0,264" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="266" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="303.5" text-anchor="middle"><tspan x="122.0" dy="0">Preenche o formulário</tspan><tspan x="122.0" dy="16">de notificação</tspan></text><polyline class="ns-bpmn-seta" points="198,307.0 214,307.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="226" cy="307.0" r="9"/></svg></div>
</div>

### Gestor da área: Marina Lopes

<div class="ns-li-jornada">
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Início do dia</p><svg class="ns-bpmn" viewBox="0 0 806 110" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Acorda, realiza sua</tspan><tspan x="122.0" dy="16">rotina e se encaminha</tspan><tspan x="122.0" dy="16">para o trabalho</tspan><tspan x="122.0" dy="16">(hospital)</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="59.5" text-anchor="middle"><tspan x="304.0" dy="0">Recebe e-mail</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="59.5" text-anchor="middle"><tspan x="486.0" dy="0">Abre o NotificaSaúde</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 590,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="43.5" text-anchor="middle"><tspan x="668.0" dy="0">Verifica notificação</tspan><tspan x="668.0" dy="16">de novos incidentes</tspan><tspan x="668.0" dy="16">classificados</tspan></text><polyline class="ns-bpmn-seta" points="744,55.0 760,55.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="772" cy="55.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Tratamento do incidente encaminhado</p><svg class="ns-bpmn" viewBox="0 0 806 172" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="39.0" r="10"/><polyline class="ns-bpmn-seta" points="26,39.0 44,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Realiza a análise do</tspan><tspan x="122.0" dy="16">incidente</tspan></text><polyline class="ns-bpmn-seta" points="198,39.0 226,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="35.5" text-anchor="middle"><tspan x="304.0" dy="0">Registra o plano de</tspan><tspan x="304.0" dy="16">ação</tspan></text><polyline class="ns-bpmn-seta" points="380,39.0 408,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="35.5" text-anchor="middle"><tspan x="486.0" dy="0">Atualiza o status do</tspan><tspan x="486.0" dy="16">plano</tspan></text><polyline class="ns-bpmn-seta" points="562,39.0 590,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="35.5" text-anchor="middle"><tspan x="668.0" dy="0">Atualiza o status do</tspan><tspan x="668.0" dy="16">incidente</tspan></text><polyline class="ns-bpmn-seta" points="668.0,64 668.0,86 122.0,86 122.0,106" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="108" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="129.5" text-anchor="middle"><tspan x="122.0" dy="0">Encaminha de volta</tspan><tspan x="122.0" dy="16">para o Núcleo</tspan></text><polyline class="ns-bpmn-seta" points="198,133.0 214,133.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="226" cy="133.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Acompanhamento e relatórios</p><svg class="ns-bpmn" viewBox="0 0 806 172" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="39.0" r="10"/><polyline class="ns-bpmn-seta" points="26,39.0 44,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Visualiza incidentes</tspan><tspan x="122.0" dy="16">anteriores</tspan></text><polyline class="ns-bpmn-seta" points="198,39.0 226,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="35.5" text-anchor="middle"><tspan x="304.0" dy="0">Registra plano de</tspan><tspan x="304.0" dy="16">ação</tspan></text><polyline class="ns-bpmn-seta" points="380,39.0 408,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="35.5" text-anchor="middle"><tspan x="486.0" dy="0">Atualiza o status do</tspan><tspan x="486.0" dy="16">incidente</tspan></text><polyline class="ns-bpmn-seta" points="562,39.0 590,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="43.5" text-anchor="middle"><tspan x="668.0" dy="0">Gera relatórios</tspan></text><polyline class="ns-bpmn-seta" points="668.0,64 668.0,86 122.0,86 122.0,106" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="108" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="129.5" text-anchor="middle"><tspan x="122.0" dy="0">Realiza a exportação</tspan><tspan x="122.0" dy="16">dos dados</tspan></text><polyline class="ns-bpmn-seta" points="198,133.0 214,133.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="226" cy="133.0" r="9"/></svg></div>
</div>

### Administrador geral do sistema: Luciana

<div class="ns-li-jornada">
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Início do dia</p><svg class="ns-bpmn" viewBox="0 0 806 110" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Acorda, realiza sua</tspan><tspan x="122.0" dy="16">rotina e se encaminha</tspan><tspan x="122.0" dy="16">para o trabalho</tspan><tspan x="122.0" dy="16">(hospital)</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="59.5" text-anchor="middle"><tspan x="304.0" dy="0">Abre o NotificaSaúde</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="59.5" text-anchor="middle"><tspan x="486.0" dy="0">Faz login</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 578,55.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="590" cy="55.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Acompanhamento dos incidentes</p><svg class="ns-bpmn" viewBox="0 0 806 94" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="47.0" r="10"/><polyline class="ns-bpmn-seta" points="26,47.0 44,47.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="66" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Verifica notificação</tspan><tspan x="122.0" dy="16">de novos incidentes</tspan><tspan x="122.0" dy="16">classificados</tspan></text><polyline class="ns-bpmn-seta" points="198,47.0 226,47.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="66" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="43.5" text-anchor="middle"><tspan x="304.0" dy="0">Acompanha o status</tspan><tspan x="304.0" dy="16">das ações corretivas</tspan></text><polyline class="ns-bpmn-seta" points="380,47.0 408,47.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="66" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="43.5" text-anchor="middle"><tspan x="486.0" dy="0">Registra plano de</tspan><tspan x="486.0" dy="16">ação</tspan></text><polyline class="ns-bpmn-seta" points="562,47.0 590,47.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="66" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="43.5" text-anchor="middle"><tspan x="668.0" dy="0">Atualiza o status do</tspan><tspan x="668.0" dy="16">incidente</tspan></text><polyline class="ns-bpmn-seta" points="744,47.0 760,47.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="772" cy="47.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Histórico e relatórios</p><svg class="ns-bpmn" viewBox="0 0 806 172" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="39.0" r="10"/><polyline class="ns-bpmn-seta" points="26,39.0 44,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Visualiza incidentes</tspan><tspan x="122.0" dy="16">anteriores</tspan></text><polyline class="ns-bpmn-seta" points="198,39.0 226,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="35.5" text-anchor="middle"><tspan x="304.0" dy="0">Registra plano de</tspan><tspan x="304.0" dy="16">ação</tspan></text><polyline class="ns-bpmn-seta" points="380,39.0 408,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="35.5" text-anchor="middle"><tspan x="486.0" dy="0">Atualiza o status do</tspan><tspan x="486.0" dy="16">incidente</tspan></text><polyline class="ns-bpmn-seta" points="562,39.0 590,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="43.5" text-anchor="middle"><tspan x="668.0" dy="0">Gera relatórios</tspan></text><polyline class="ns-bpmn-seta" points="668.0,64 668.0,86 122.0,86 122.0,106" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="108" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="129.5" text-anchor="middle"><tspan x="122.0" dy="0">Realiza a exportação</tspan><tspan x="122.0" dy="16">dos dados</tspan></text><polyline class="ns-bpmn-seta" points="198,133.0 214,133.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="226" cy="133.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Gestão de usuários e instituições</p><svg class="ns-bpmn" viewBox="0 0 806 110" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="51.5" text-anchor="middle"><tspan x="122.0" dy="0">Verifica a lista de</tspan><tspan x="122.0" dy="16">usuários</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="51.5" text-anchor="middle"><tspan x="304.0" dy="0">Adiciona, edita e</tspan><tspan x="304.0" dy="16">desativa instituições</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="35.5" text-anchor="middle"><tspan x="486.0" dy="0">Adiciona, edita e</tspan><tspan x="486.0" dy="16">desativa usuários de</tspan><tspan x="486.0" dy="16">instituições e</tspan><tspan x="486.0" dy="16">setores</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 578,55.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="590" cy="55.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Gestão de campos</p><svg class="ns-bpmn" viewBox="0 0 806 78" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="39.0" r="10"/><polyline class="ns-bpmn-seta" points="26,39.0 44,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Verifica os campos</tspan><tspan x="122.0" dy="16">criados</tspan></text><polyline class="ns-bpmn-seta" points="198,39.0 226,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="35.5" text-anchor="middle"><tspan x="304.0" dy="0">Adiciona, edita e</tspan><tspan x="304.0" dy="16">desativa campos</tspan></text><polyline class="ns-bpmn-seta" points="380,39.0 396,39.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="408" cy="39.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Gestão de formulários</p><svg class="ns-bpmn" viewBox="0 0 806 78" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="39.0" r="10"/><polyline class="ns-bpmn-seta" points="26,39.0 44,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Verifica os</tspan><tspan x="122.0" dy="16">formulários criados</tspan></text><polyline class="ns-bpmn-seta" points="198,39.0 226,39.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="50" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="35.5" text-anchor="middle"><tspan x="304.0" dy="0">Adiciona, edita e</tspan><tspan x="304.0" dy="16">desativa formulários</tspan></text><polyline class="ns-bpmn-seta" points="380,39.0 396,39.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="408" cy="39.0" r="9"/></svg></div>
</div>

---

## 7. Revisão técnica, de negócio e de UX { #revisao }

Cada funcionalidade foi avaliada em três dimensões e posicionada conforme o nível de confiança da equipe sobre **o que fazer** (entendimento do negócio) e **como fazer** (entendimento técnico).

<p class="ns-legenda"><span class="ns-li-m ns-li-m--e">E</span> Esforço (E, EE, EEE) <span class="ns-li-m ns-li-m--v">$</span> Valor de negócio ($, $$, $$$) <span class="ns-li-m ns-li-m--u">♥</span> Valor de UX (♥, ♥♥, ♥♥♥)</p>

<div class="ns-li-matriz-wrap">
<span class="ns-li-matriz__y">Nível de confiança: o que fazer</span>
<div class="ns-li-matriz"><div class="ns-li-eixo">alto</div><div class="ns-li-cel ns-li-cel--amarelo"><span class="ns-li-pill">Encaminhar incidente para o setor analisar</span><span class="ns-li-pill">Registrar análise de causa do incidente</span></div><div class="ns-li-cel ns-li-cel--verde"><span class="ns-li-pill">Preencher formulário de notificação de incidente</span><span class="ns-li-pill">Realizar login</span><span class="ns-li-pill">Classificar incidentes recebidos</span><span class="ns-li-pill">Gerenciar instituições</span><span class="ns-li-pill">Acompanhar ações realizadas sob o plano de ação</span><span class="ns-li-pill">Exportação dos relatórios em formatos compatíveis</span><span class="ns-li-pill">Gerenciar usuários e setor</span></div><div class="ns-li-cel ns-li-cel--verde"><span class="ns-li-pill">Visualizar histórico de incidentes</span><span class="ns-li-pill">Listar instituições cadastradas</span><span class="ns-li-pill">Listar usuários e setores cadastrados</span></div><div class="ns-li-eixo">médio</div><div class="ns-li-cel ns-li-cel--vermelho"><span class="ns-li-pill">Gerar relatórios com filtros (período, setor, tipo de incidente, gravidade)</span></div><div class="ns-li-cel ns-li-cel--amarelo"><span class="ns-li-pill">Filtro de busca por data (mais recente, mais antigo), identificador e setor</span><span class="ns-li-pill">Registrar plano de ação para o incidente</span></div><div class="ns-li-cel ns-li-cel--verde"></div><div class="ns-li-eixo">baixo</div><div class="ns-li-cel ns-li-cel--vermelho"></div><div class="ns-li-cel ns-li-cel--vermelho"></div><div class="ns-li-cel ns-li-cel--amarelo"></div><div></div><div class="ns-li-eixo ns-li-eixo--x">baixo</div><div class="ns-li-eixo ns-li-eixo--x">médio</div><div class="ns-li-eixo ns-li-eixo--x">alto</div></div>
<span class="ns-li-matriz__x">Nível de confiança: como fazer</span>
</div>

---

## 8. Sequenciador { #sequenciador }

Ordem de entrega das funcionalidades, em ondas, com a avaliação de esforço, valor de negócio e valor de UX de cada uma. As duas primeiras ondas formam o MVP.

<div class="ns-li-seq">
<div class="ns-li-onda"><span class="ns-li-onda__n">1</span><div class="ns-li-onda__f"><div class="ns-li-func ns-li-func--mvp"><strong>Preencher formulário de notificação de incidente</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥♥</span></span></div><div class="ns-li-func ns-li-func--mvp"><strong>Realizar login</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">EE</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥</span></span></div><div class="ns-li-func ns-li-func--mvp"><strong>Visualizar histórico de incidentes</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥</span></span></div></div></div><div class="ns-li-onda"><span class="ns-li-onda__n">2</span><div class="ns-li-onda__f"><div class="ns-li-func ns-li-func--mvp"><strong>Classificar incidentes recebidos</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">EE</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥♥</span></span></div><div class="ns-li-func ns-li-func--mvp"><strong>Encaminhar incidente para o setor analisar</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">EE</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥♥</span></span></div><div class="ns-li-func ns-li-func--mvp"><strong>Filtro de busca por data (mais recente, mais antigo), identificador e setor</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥</span></span></div></div></div><div class="ns-li-onda"><span class="ns-li-onda__n">3</span><div class="ns-li-onda__f"><div class="ns-li-func"><strong>Registrar análise de causa do incidente</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">EEE</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥♥</span></span></div><div class="ns-li-func"><strong>Listar instituições cadastradas</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥</span></span></div><div class="ns-li-func"><strong>Gerenciar instituições</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥</span></span></div></div></div><div class="ns-li-onda"><span class="ns-li-onda__n">4</span><div class="ns-li-onda__f"><div class="ns-li-func"><strong>Registrar plano de ação para o incidente</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">EE</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥</span></span></div><div class="ns-li-func"><strong>Acompanhar ações realizadas sob o plano de ação</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥</span></span></div><div class="ns-li-func"><strong>Listar usuários e setores cadastrados</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥</span></span></div></div></div><div class="ns-li-onda"><span class="ns-li-onda__n">5</span><div class="ns-li-onda__f"><div class="ns-li-func"><strong>Gerar relatórios com filtros (período, setor, tipo de incidente, gravidade)</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">EEE</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥♥</span></span></div><div class="ns-li-func"><strong>Exportação dos relatórios em formatos compatíveis</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥♥♥</span></span></div><div class="ns-li-func"><strong>Gerenciar usuários e setor</strong><span><span class="ns-li-m ns-li-m--e" title="Esforço">E</span><span class="ns-li-m ns-li-m--v" title="Valor de negócio">$$</span><span class="ns-li-m ns-li-m--u" title="Valor de UX">♥</span></span></div></div></div>
</div>

---

## 9. Canvas MVP { #canvas-mvp }

### Proposta do MVP

O MVP do NotificaSaúde consiste em um sistema web simples e centralizado que permite ao usuário realizar login, registrar notificações de incidentes por meio de um formulário estruturado, classificar os incidentes recebidos, encaminhá-los para os setores responsáveis e visualizar o histórico com possibilidade de filtragem por data, identificador e setor. Essa versão inicial busca validar a padronização do registro, a organização das informações e a agilidade no gerenciamento de incidentes, reduzindo a desorganização e o tempo de resposta, ao mesmo tempo em que verifica a adesão dos usuários e a utilidade das funcionalidades básicas para apoio à gestão.

<div class="ns-li-canvas" markdown>

<div class="ns-li-bloco" markdown>
<p class="ns-li-bloco__t">Personas segmentadas</p>

- Ana Mendes, profissional do Núcleo
- Luciana, administradora geral do sistema
- João, gestor da área
- Lucas Henrique, notificante

</div>

<div class="ns-li-bloco" markdown>
<p class="ns-li-bloco__t">Funcionalidades</p>

- Preencher formulário de notificação de incidente
- Realizar login
- Visualizar histórico de incidentes
- Classificar incidentes recebidos
- Encaminhar incidente para o setor analisar
- Filtro de busca por data (mais recente, mais antigo), identificador e setor

</div>

<div class="ns-li-bloco" markdown>
<p class="ns-li-bloco__t">Resultado esperado</p>

- Maior padronização no registro de incidentes
- Aumento da adesão dos profissionais ao fluxo de notificação
- Diminuição do tempo para registrar um incidente
- Maior visibilidade dos incidentes registrados
- Facilidade para buscar e filtrar informações
- Identificação mais rápida de problemas recorrentes
- Diminuição do tempo para classificar um incidente

</div>

<div class="ns-li-bloco" markdown>
<p class="ns-li-bloco__t">Custo e cronograma</p>

- Custo aproximado de 600 horas
- 3 sprints de aproximadamente 240 horas
- Entrega em junho

</div>

</div>

### Jornada no MVP (Ana Mendes, profissional do Núcleo)

<div class="ns-li-jornada">
<div class="ns-li-trilha"><p class="ns-li-trilha__t">MVP</p><svg class="ns-bpmn" viewBox="0 0 806 236" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="35.5" text-anchor="middle"><tspan x="122.0" dy="0">Acorda, realiza sua</tspan><tspan x="122.0" dy="16">rotina e se encaminha</tspan><tspan x="122.0" dy="16">para o trabalho</tspan><tspan x="122.0" dy="16">(hospital)</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="59.5" text-anchor="middle"><tspan x="304.0" dy="0">Abre o NotificaSaúde</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="51.5" text-anchor="middle"><tspan x="486.0" dy="0">Faz login com suas</tspan><tspan x="486.0" dy="16">credenciais</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 590,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="51.5" text-anchor="middle"><tspan x="668.0" dy="0">Verifica notificação</tspan><tspan x="668.0" dy="16">de novos incidentes</tspan></text><polyline class="ns-bpmn-seta" points="668.0,96 668.0,118 122.0,118 122.0,138" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="177.5" text-anchor="middle"><tspan x="122.0" dy="0">Visualiza incidentes</tspan><tspan x="122.0" dy="16">anteriores</tspan></text><polyline class="ns-bpmn-seta" points="198,181.0 226,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="177.5" text-anchor="middle"><tspan x="304.0" dy="0">Visualiza o</tspan><tspan x="304.0" dy="16">formulário preenchido</tspan></text><polyline class="ns-bpmn-seta" points="380,181.0 408,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="169.5" text-anchor="middle"><tspan x="486.0" dy="0">Classifica o</tspan><tspan x="486.0" dy="16">incidente conforme a</tspan><tspan x="486.0" dy="16">descrição</tspan></text><polyline class="ns-bpmn-seta" points="562,181.0 590,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="161.5" text-anchor="middle"><tspan x="668.0" dy="0">Encaminha e-mail com</tspan><tspan x="668.0" dy="16">informações da</tspan><tspan x="668.0" dy="16">notificação para o</tspan><tspan x="668.0" dy="16">setor responsável</tspan></text><polyline class="ns-bpmn-seta" points="744,181.0 760,181.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="772" cy="181.0" r="9"/></svg></div>
<div class="ns-li-trilha"><p class="ns-li-trilha__t">Próximas iterações</p><svg class="ns-bpmn" viewBox="0 0 806 362" role="img" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ns-bpmn-ponta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ns-bpmn-ponta" d="M0 0 10 5 0 10z"/></marker></defs><circle class="ns-bpmn-inicio" cx="16" cy="55.0" r="10"/><polyline class="ns-bpmn-seta" points="26,55.0 44,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="51.5" text-anchor="middle"><tspan x="122.0" dy="0">Preenche o formulário</tspan><tspan x="122.0" dy="16">online do NOTIVISA</tspan></text><polyline class="ns-bpmn-seta" points="198,55.0 226,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="51.5" text-anchor="middle"><tspan x="304.0" dy="0">Realiza a análise do</tspan><tspan x="304.0" dy="16">incidente</tspan></text><polyline class="ns-bpmn-seta" points="380,55.0 408,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="51.5" text-anchor="middle"><tspan x="486.0" dy="0">Registra o plano de</tspan><tspan x="486.0" dy="16">ação</tspan></text><polyline class="ns-bpmn-seta" points="562,55.0 590,55.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="14" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="51.5" text-anchor="middle"><tspan x="668.0" dy="0">Registra o status do</tspan><tspan x="668.0" dy="16">plano</tspan></text><polyline class="ns-bpmn-seta" points="668.0,96 668.0,118 122.0,118 122.0,138" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="177.5" text-anchor="middle"><tspan x="122.0" dy="0">Acompanha o status</tspan><tspan x="122.0" dy="16">dos planos de ação</tspan></text><polyline class="ns-bpmn-seta" points="198,181.0 226,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="185.5" text-anchor="middle"><tspan x="304.0" dy="0">Gera relatórios</tspan></text><polyline class="ns-bpmn-seta" points="380,181.0 408,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="410" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="486.0" y="177.5" text-anchor="middle"><tspan x="486.0" dy="0">Realiza a exportação</tspan><tspan x="486.0" dy="16">dos dados</tspan></text><polyline class="ns-bpmn-seta" points="562,181.0 590,181.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="592" y="140" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="668.0" y="177.5" text-anchor="middle"><tspan x="668.0" dy="0">Verifica a lista de</tspan><tspan x="668.0" dy="16">instituições</tspan></text><polyline class="ns-bpmn-seta" points="668.0,222 668.0,244 122.0,244 122.0,264" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="46" y="266" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="122.0" y="303.5" text-anchor="middle"><tspan x="122.0" dy="0">Adiciona, edita e</tspan><tspan x="122.0" dy="16">desativa instituições</tspan></text><polyline class="ns-bpmn-seta" points="198,307.0 226,307.0" marker-end="url(#ns-bpmn-ponta)"/><rect class="ns-bpmn-task" x="228" y="266" width="152" height="82" rx="9"/><text class="ns-bpmn-txt" x="304.0" y="287.5" text-anchor="middle"><tspan x="304.0" dy="0">Adiciona, edita e</tspan><tspan x="304.0" dy="16">desativa usuários de</tspan><tspan x="304.0" dy="16">instituições e</tspan><tspan x="304.0" dy="16">setores</tspan></text><polyline class="ns-bpmn-seta" points="380,307.0 396,307.0" marker-end="url(#ns-bpmn-ponta)"/><circle class="ns-bpmn-fim" cx="408" cy="307.0" r="9"/></svg></div>
</div>

### Métricas para validar as hipóteses de negócio

| Resultado esperado | Métricas |
| --- | --- |
| **Padronização no registro de incidentes** | % de notificações preenchidas corretamente (sem campos obrigatórios faltando); redução de inconsistências nos dados registrados |
| **Aumento da adesão dos profissionais ao fluxo de notificação** | Número de usuários ativos no sistema; % de profissionais que registram pelo menos 1 incidente; crescimento no número total de notificações registradas |
| **Diminuição do tempo para registrar um incidente** | Tempo médio para completar uma notificação; % de formulários finalizados vs. abandonados |
| **Maior visibilidade dos incidentes registrados** | Número de acessos à tela de histórico; frequência de uso por gestores e profissionais do NSP |
| **Facilidade para buscar e filtrar informações** | Número de usos dos filtros (data, setor, identificador, grau de dano, status); tempo médio para encontrar um incidente; taxa de sucesso nas buscas (encontrou vs. desistiu) |
| **Identificação mais rápida de problemas recorrentes** | Tempo médio para identificar padrões de incidentes; número de incidentes semelhantes identificados em sequência; frequência de análise dos dados por gestores |
| **Diminuição do tempo para classificar um incidente** | Tempo médio para classificar uma notificação; tempo de classificação com o sistema vs. outros métodos utilizados |
