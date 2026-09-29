<h1 align="center">Roteiro de Teste de Usabilidade</h1>


<p align="center"><strong>Mantenedores:</strong> Aline Hirokawa, Luigi Almeida, Pedro Silva Soledade, Sophya Ribeiro</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 27/04/2026 | Criação do roteiro do teste de usabilidade com as proponentes. | Aline Hirokawa, Luigi Almeida, Pedro Silva Soledade, Sophya Ribeiro |
    | 1.1 | 29/09/2026 | Migração do documento (Google Docs) para o MkDocs. | Sophya Ribeiro |

| Sistema | Versão testada | Data | Equipe | Participantes |
| --- | --- | --- | --- | --- |
| NotificaSaúde | Protótipo | 27/04/2026 | Aline Hirokawa, Luigi Almeida, Pedro Silva Soledade e Sophya Ribeiro | Ercilene Ribeiro e Aline Moraes (proponentes) |

## Sumário

- [1. Checklist de preparação](#checklist)
- [2. Script de condução](#script)
- [3. Tarefas](#tarefas)
    - [1º teste: Realizar notificação (mobile)](#teste-1)
    - [Pré-teste: Autenticar no sistema](#pre-teste)
    - [2º teste: Editar notificação com informação incorreta](#teste-2)
    - [3º teste: Classificar notificação (desktop)](#teste-3)
    - [4º teste: Editar classificação de notificação](#teste-4)
- [4. Feedback final](#feedback)

---

## 1. Checklist de preparação { #checklist }

<div class="grid cards" markdown>

-   :material-office-building-outline:{ .lg .middle } **Ambiente e infraestrutura**

    ---

    - Local: salas de reunião 1 e 2 da FACOM – UFMS
    - Duração: de 30 a 60 minutos por participante (simultaneamente)
    - Notebook com mouse e teclado externos
    - Ambiente climatizado
    - Dispositivo móvel com acesso ao sistema

-   :material-clipboard-check-outline:{ .lg .middle } **Pré-teste**

    ---

    - Notebook reserva disponível
    - Testar a conexão (internet e sala virtual)
    - Deixar o sistema previamente carregado
    - Plano de contingência: dados móveis e versão *offline* / *fallback*

-   :material-laptop:{ .lg .middle } **Configuração do computador**

    ---

    - Conectar à sala de gravação (Google Meet)
    - Ativar microfone e webcam
    - Habilitar o compartilhamento de tela

-   :material-play-circle-outline:{ .lg .middle } **Início do teste**

    ---

    - Coletar o consentimento de gravação
    - Confirmar que a gravação está ativa
    - Compartilhar com a participante o link do sistema e o link do formulário

</div>

---

## 2. Script de condução { #script }

!!! quote "Fala do moderador na introdução"
    "Obrigado por sua participação! Este é um teste do sistema, e não uma avaliação individual. Queremos entender como melhorar a aplicação. Durante o uso, pedimos que você verbalize seus pensamentos, descrevendo o que está fazendo e o que está passando pela sua cabeça."

---

## 3. Tarefas { #tarefas }

| Ordem | Tarefa | Plataforma | Referência nos requisitos |
| --- | --- | --- | --- |
| 1º teste | [Realizar notificação](#teste-1) | Mobile | Épico 1 |
| Pré-teste | [Autenticar no sistema](#pre-teste) | Desktop | — |
| 2º teste | [Editar notificação com informação incorreta](#teste-2) | Desktop | Épico 2 (US 2.1 e 2.2) |
| 3º teste | [Classificar notificação](#teste-3) | Desktop | Épico 2 (US 2.3) |
| 4º teste | [Editar classificação de notificação](#teste-4) | Desktop | — |

!!! note "Numeração dos requisitos"
    As referências a épicos e histórias de usuário seguem a numeração da especificação de requisitos vigente em abril de 2026, antes da reorganização dos épicos.

### 1º teste: Realizar notificação (mobile) { #teste-1 }

**Objetivo:** avaliar se o usuário consegue, sem orientação, acessar a funcionalidade de criação de notificação na versão mobile, preencher corretamente todos os campos obrigatórios e concluir o envio com sucesso, entendendo o significado de cada campo e o fluxo completo.

!!! quote "Instrução ao participante"
    "A partir desta tela inicial no celular, quero que você realize o cadastro de uma nova notificação preenchendo as informações necessárias."

**Cenário**

- Você é um profissional de saúde atuando na Santa Casa de Campo Grande (MS).
- Durante o seu turno, ocorreu um incidente envolvendo uma paciente, uma mulher jovem, que recebeu uma medicação incorreta devido a uma falha na identificação do medicamento.
- A paciente apresentou uma reação leve, sem necessidade de intervenção mais grave, mas o ocorrido precisa ser registrado para análise do Núcleo de Segurança do Paciente.
- O incidente aconteceu na última terça-feira, durante o turno da manhã, no setor de Clínica Médica.
- Agora, você precisa registrar essa notificação no sistema, preenchendo todas as informações necessárias com base no que aconteceu.

**Pontos de observação:** dificuldades de navegação; hesitação ou confusão; erros cometidos; tempo para concluir a tarefa; comentários espontâneos.

### Pré-teste: Autenticar no sistema { #pre-teste }

**Objetivo:** avaliar se o usuário consegue acessar o sistema realizando login corretamente, sem orientação, utilizando credenciais fornecidas, e compreender o fluxo inicial de acesso.

!!! quote "Instrução ao participante"
    "A partir desta tela inicial, quero que você acesse o sistema utilizando um usuário e senha que eu vou te fornecer."

**Cenário**

- Você é um profissional do Núcleo de Segurança do Paciente (NSP) e precisa acessar o sistema para iniciar suas atividades do dia.
- Para isso, você recebeu um usuário e senha previamente cadastrados.
- Agora, você deve realizar o login no sistema utilizando as credenciais de teste fornecidas pelo moderador.
- Após acessar o sistema com sucesso, você poderá dar continuidade às suas atividades.

**Pontos de observação:** dificuldades no preenchimento dos campos; problemas de entendimento (e-mail ou usuário, senha etc.); hesitação ou confusão durante o processo; tentativas incorretas de login; tempo para concluir a tarefa; comentários espontâneos.

### 2º teste: Editar notificação com informação incorreta { #teste-2 }

**Objetivo:** localizar uma notificação existente e editar uma informação incorreta (setor Maternidade → Clínica Médica), salvando a alteração corretamente.

!!! quote "Instrução ao participante"
    "Você deverá localizar uma notificação já cadastrada e corrigir uma informação que está errada, garantindo que a alteração seja salva, especificamente o incidente de ID #22030."

**Cenário**

- Você é um profissional do Núcleo de Segurança do Paciente (NSP) e está revisando as notificações registradas no sistema.
- Ao analisar uma notificação recente, você identifica um incidente em que um paciente escorregou enquanto o corredor estava sendo limpo.
- No entanto, ao visualizar os detalhes, você percebe que a notificação foi registrada com o setor "Maternidade".
- Você se lembra do ocorrido, pois estava presente no dia, e sabe que o incidente na verdade aconteceu no setor de Clínica Médica, em outro corredor, bem próximo à Maternidade.
- Diante disso, você precisa localizar essa notificação no sistema e corrigir essa informação, atualizando o setor e salvando a alteração.

**Pontos de observação:** facilidade para encontrar a notificação; clareza da opção de edição; dificuldades durante a alteração; confirmação de salvamento; comentários espontâneos.

### 3º teste: Classificar notificação (desktop) { #teste-3 }

**Objetivo:** a partir da versão desktop da aplicação, localizar uma notificação e realizar sua classificação corretamente, especificamente o incidente de ID #22030.

!!! quote "Instrução ao participante"
    "A partir desta tela inicial no computador, com seus conhecimentos e experiência, quero que você realize a classificação da notificação editada."

**Pontos de observação:** dificuldades de navegação; entendimento do fluxo de classificação; erros cometidos; tempo para concluir a tarefa; comentários espontâneos.

### 4º teste: Editar classificação de notificação { #teste-4 }

**Objetivo:** localizar uma notificação já classificada e editar sua classificação, especificamente o incidente de ID #22031.

!!! quote "Instrução ao participante"
    "Agora, quero que você encontre uma notificação já classificada e altere a classificação dela."

**Pontos de observação:** facilidade para localizar a classificação existente; clareza da opção de edição; dificuldades durante a alteração; confirmação de salvamento; comentários espontâneos.

---

## 4. Feedback final { #feedback }

Perguntas abertas feitas à participante ao final das tarefas:

- O que você achou do sistema no geral?
- O que foi mais difícil?
- O que foi mais fácil?
- Você mudaria algo?

Em seguida, a participante responde ao [formulário de feedback](https://docs.google.com/forms/d/e/1FAIpQLScfTxDW0Ce4-842V41l86rz_XHJGKFhMuOD0UtMefSqp4RZ0Q/viewform?usp=dialog){ target="_blank" }, com questões objetivas e subjetivas e o termo de consentimento. Os resultados estão no [Relatório do Teste de Usabilidade](relatorio.md).
