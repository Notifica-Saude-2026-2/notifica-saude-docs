<h1 align="center">Dúvidas frequentes</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 26/10/2026 | Criação da página. | Sophya Ribeiro |

Clique em uma pergunta para ver a resposta.

## Notificação

??? question "Preciso me identificar para notificar um incidente?"
    Não. A última etapa do formulário, com nome e contato, é **opcional**. Mesmo quando você se identifica, seus dados só são vistos pelo NSP e pelo administrador, e nunca pelo gestor do setor. Veja [Registrar uma notificação](registrar-notificacao.md).

??? question "Não houve dano ao paciente. Mesmo assim devo notificar?"
    Sim. Situações de risco e incidentes que foram interceptados antes de atingir o paciente (near miss) também devem ser notificados. Eles mostram onde o processo pode falhar antes que alguém se machuque.

??? question "Por que o botão Próximo não fica disponível no formulário de notificação?"
    Ainda há algum campo obrigatório (com asterisco vermelho) sem resposta na etapa atual. Confira também se a data do incidente não é uma data futura.

## Classificação e encaminhamento

??? question "Por que não consigo editar as informações gerais ou a classificação?"
    Depois que o incidente é **encaminhado ao setor** ou que a **análise começa**, as informações gerais e a classificação ficam bloqueadas e mostram o selo **Edição bloqueada**. Isso garante que a análise seja feita sobre dados estáveis.

??? question "Salvei a classificação como rascunho, mas o status continua Novo. Por quê?"
    O rascunho só guarda o seu progresso. O status muda para **Classificado**, e o prazo para análise é calculado, somente quando você clica em **Salvar classificação**.

??? question "Como o prazo para análise é definido?"
    Automaticamente, pelo grau do dano: 10 dias para sem dano ou dano leve, 7 para moderado, 4 para grave e 2 para óbito ou Never Event, contados da data da notificação. Veja [Classificar e encaminhar](classificar-e-encaminhar.md#depois-de-classificar).

??? question "O gestor do setor diz que não está vendo o incidente."
    O gestor só vê incidentes que o NSP **encaminhou** ao setor dele, seja antes da análise, seja depois, com o resultado da análise feita pelo núcleo. Confira se o encaminhamento foi feito e se o setor do incidente está correto.

## Análise

??? question "A seção Análise diz “Análise em andamento” e não consigo abrir. O que fazer?"
    A análise pertence a quem a começou. Enquanto ela não for concluída, só essa pessoa pode continuá-la. Fale com quem iniciou a análise; o nome aparece no histórico. Depois da conclusão, todos que têm acesso ao incidente podem consultar a análise.

??? question "Comecei a análise e precisei sair. Perdi o que fiz?"
    Não. A cada avanço de seção, o sistema salva um rascunho automaticamente. Para continuar, abra o incidente e clique em **Continuar análise**.

??? question "Qual a diferença entre PPC e fator contribuinte?"
    O **PPC** (Problema na Prestação do Cuidado) é o que deu errado no cuidado, por exemplo *"pulseira colocada na paciente errada"*. O **fator contribuinte** é a condição que favoreceu isso, por exemplo *"falta de protocolo de conferência na admissão"*. Os PPCs são registrados na Seção 3 e os fatores, na Seção 4.

??? question "Preciso responder exatamente cinco “porquês”?"
    Não. O 5 Porquês é opcional e não precisa ter exatamente cinco níveis. Pare quando chegar a uma causa que permita definir uma ação de melhoria (o limite é de 15 níveis).

??? question "Como baixo o Diagrama de Ishikawa?"
    Na Seção 5, ou na análise concluída, clique em **Exportar diagrama**. O sistema baixa o diagrama completo como imagem PNG.

## Plano de ação

??? question "Por que não aparece o botão de atualizar o andamento de uma ação?"
    A ação está com **Preenchimento pendente**: ela veio de uma recomendação e ainda faltam campos obrigatórios. Clique no lápis para completar o preenchimento. Depois disso, o botão de atualizar o andamento aparece.

??? question "Marquei a situação “Em andamento”, mas a ação ficou como Concluído. Por quê?"
    Você respondeu **Sim** em *"A ação produziu o efeito esperado?"*. Quando a ação é efetiva, o sistema a marca automaticamente como **Concluído**.

??? question "Quais arquivos posso anexar como evidência?"
    PDF, DOCX, PNG e JPG/JPEG, com até 10 MB por arquivo e 10 anexos por ação.

## Encerramento

??? question "Concluí ou arquivei um incidente por engano. Dá para desfazer?"
    Não. As duas decisões são definitivas, e por isso o sistema sempre pede confirmação. Se foi um engano, registre o ocorrido e fale com o administrador do sistema.

??? question "Posso concluir o incidente com ações ainda em andamento?"
    Sim. A confirmação avisa quantas ações ainda estão em andamento, para que a decisão seja consciente.
