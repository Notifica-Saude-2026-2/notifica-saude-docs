<h1 align="center">Relatório do Teste de Usabilidade</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 27/04/2026 | Consolidação dos resultados do teste de usabilidade com as proponentes. | Aline Hirokawa, Luigi Almeida, Pedro Silva Soledade, Sophya Ribeiro |
    | 1.1 | 29/09/2026 | Migração do documento (Google Docs) para o MkDocs. | Sophya Ribeiro |

| Data | Participantes usuárias | Condutores |
| --- | --- | --- |
| 27/04/2026 | Aline Moraes e Ercilene Ribeiro | Sophya Ribeiro, Pedro Soledade, Aline Hirokawa e Luigi Almeida |

**Objetivo:** avaliar a usabilidade das funcionalidades previstas no MVP do NotificaSaúde, considerando a execução de tarefas reais pelas proponentes, identificando dificuldades, pontos positivos e oportunidades de melhoria na experiência do usuário.

## Sumário

- [1. Introdução](#introducao)
- [2. Metodologia](#metodologia)
- [3. Observações gerais](#observacoes)
- [4. Avaliação geral da usabilidade](#avaliacao)
- [5. Conclusão](#conclusao)

---

## 1. Introdução { #introducao }

Este relatório apresenta a consolidação dos testes de usabilidade realizados com as proponentes do sistema, contemplando tanto a versão mobile (registro de notificação) quanto a versão web (gestão e classificação de incidentes).

Os testes tiveram como foco avaliar a capacidade das usuárias de executar tarefas sem orientação direta, incluindo:

- criação de notificações;
- edição de informações;
- classificação de incidentes;
- edição de uma classificação.

---

## 2. Metodologia { #metodologia }

O teste de usabilidade foi conduzido de forma estruturada, com base em um [roteiro previamente elaborado](plano-de-teste.md), contendo cenários realistas e tarefas alinhadas aos principais fluxos do sistema. O objetivo foi avaliar, na prática, como as proponentes interagiam com a aplicação ao executar atividades representativas do uso real.

A aplicação dos testes ocorreu presencialmente, na sala de reunião 1 da FACOM, em um ambiente preparado para proporcionar conforto e minimizar interferências externas. Cada participante realizou o teste individualmente, utilizando um computador com monitor, teclado e mouse, além de um dispositivo móvel para as tarefas específicas da versão *mobile*. A duração completa dos dois testes não ultrapassou 60 minutos.

Antes do início efetivo do teste, foi feita uma breve introdução contextualizando o objetivo, reforçando que a avaliação era do sistema e não da participante. Em seguida, solicitou-se o consentimento para gravação, sendo capturados tanto a tela quanto o rosto das participantes durante toda a interação, com o intuito de permitir uma análise posterior mais completa.

Os testes foram conduzidos sequencialmente, seguindo o roteiro definido, que contemplava autenticação no sistema, criação de notificação (mobile), edição de informações incorretas, classificação de incidentes e edição de classificações. Para cada tarefa, as instruções eram apresentadas de forma clara e, quando necessário, repetidas para garantir o entendimento.

Durante a execução, foi utilizada a técnica de *thinking aloud*, incentivando as participantes a verbalizarem seus pensamentos, ações, dúvidas e expectativas em tempo real. Essa abordagem permitiu compreender não apenas o que elas faziam, mas também o raciocínio por trás de suas decisões.

A condução do teste buscou interferir o mínimo possível. Em situações de dúvida, os moderadores evitavam fornecer respostas diretas, optando por devolver perguntas que estimulassem a reflexão das participantes, preservando assim a naturalidade da interação.

Ao final de todas as tarefas, foi realizada uma etapa de coleta de impressões gerais, por meio de perguntas abertas sobre a experiência de uso. Em seguida, as participantes foram convidadas a responder um [formulário estruturado de feedback](https://docs.google.com/forms/d/e/1FAIpQLScfTxDW0Ce4-842V41l86rz_XHJGKFhMuOD0UtMefSqp4RZ0Q/viewform?usp=dialog){ target="_blank" }, com questões objetivas e subjetivas sobre usabilidade, clareza, facilidade de uso e sugestões de melhoria, além de um termo de consentimento formalizando a coleta e o uso dos dados.

Essa abordagem combinou observação direta, verbalização espontânea e feedback estruturado, permitindo uma análise abrangente da experiência do usuário e a identificação de pontos críticos e oportunidades de melhoria no sistema.

!!! info "Registros da sessão"
    As anotações feitas durante o teste estão na [Ata do Teste de Usabilidade](ata.md), e a gravação pode ser assistida na [visão geral](index.md#gravacao).

---

## 3. Observações gerais { #observacoes }

Os seguintes pontos foram identificados de forma recorrente entre as participantes:

<div class="grid cards" markdown>

-   :material-gesture-tap:{ .lg .middle } **3.1 Dificuldades na interação mobile**

    ---

    Foram identificados problemas ao clicar em botões na versão mobile, indicando que as áreas de toque podem não estar adequadas. Isso sugere a necessidade de melhorias no tamanho ou no espaçamento dos elementos interativos (*tap targets*), a fim de facilitar a interação e evitar erros durante o uso.

-   :material-cursor-default-click-outline:{ .lg .middle } **3.2 Dúvidas na localização de ações**

    ---

    Foi observada dificuldade na localização de ações na interface, especialmente na funcionalidade de edição das informações do incidente, que demorou a ser encontrada. Isso indica a necessidade de maior destaque visual para essa ação ou de uma melhor organização na hierarquia dos elementos da interface.

-   :material-form-textbox:{ .lg .middle } **3.3 Dúvidas conceituais em campos**

    ---

    No registro de notificação, houve incerteza quanto ao tipo de informação esperada em alguns campos, como o de contato, em que não ficou claro se deveria ser preenchido com e-mail ou telefone. Isso indica a necessidade de rótulos mais claros, com exemplos ou *placeholders* que orientem o formato esperado.

-   :material-book-open-page-variant-outline:{ .lg .middle } **3.4 Classificação exige leitura detalhada**

    ---

    O processo de classificação exige uma leitura detalhada do incidente, levando as usuárias a retornarem à descrição para classificar corretamente. Isso indica forte dependência do contexto textual e sugere melhorar o apoio à decisão na interface, reduzindo a necessidade de releitura constante.

-   :material-history:{ .lg .middle } **3.5 Rastreabilidade das alterações**

    ---

    Foram levantadas sugestões sobre o histórico de alterações, com destaque para o interesse em visualizar exatamente o que foi modificado, e não apenas a informação de que houve uma alteração. Essa funcionalidade não está prevista para o MVP, mas deve ser considerada em entregas futuras.

-   :material-filter-outline:{ .lg .middle } **3.6 Filtragem de dados**

    ---

    O sistema oferece um campo de busca livre que filtra registros por ID, setor, responsável ou grau de dano. Embora útil, seria mais eficiente a utilização de filtros estruturados, que orientem melhor o usuário durante a busca.

</div>

---

## 4. Avaliação geral da usabilidade { #avaliacao }

### 4.1 Pontos positivos

A experiência geral pode ser considerada positiva, uma vez que as usuárias conseguiram executar com sucesso as principais tarefas propostas, como a criação de notificações, a classificação e a edição de incidentes. Apesar disso, ainda foram identificados alguns pontos de fricção ao longo do uso. O fluxo de classificação, em especial, foi percebido como intuitivo e, de modo geral, mostrou-se funcional após a compreensão inicial do processo.

### 4.2 Pontos de melhoria

No processo de classificação, percebeu-se a necessidade de releitura frequente da descrição do incidente, evidenciando uma carência de apoio à decisão na interface. Além disso, o histórico de alterações apresentou falta de detalhamento, não permitindo que as usuárias compreendessem claramente o que foi modificado ao longo do tempo.

---

## 5. Conclusão { #conclusao }

Os testes de usabilidade demonstraram que o sistema é funcional e utilizável, permitindo que as usuárias completem tarefas críticas (como login, criação, edição e classificação de notificações) sem necessidade de suporte direto. De modo geral, a experiência foi bem-sucedida, com todas as participantes conseguindo realizar as atividades propostas conforme esperado.

Os dados coletados por meio do formulário de feedback reforçam essa percepção. As duas participantes indicaram que conseguiram realizar o acesso ao sistema sem dificuldades, localizar notificações pelo identificador, classificar incidentes adequadamente e editar informações de forma clara ao longo do processo. Além disso, ambas consideraram que os botões e opções disponíveis são fáceis de identificar, não se sentiram perdidas durante a navegação entre as telas e avaliaram que as informações apresentadas estão organizadas de forma clara, facilitando a compreensão.

!!! success "Avaliação geral no formulário"
    Todos os critérios avaliados (interface gráfica, clareza das informações, facilidade de aprendizado e usabilidade) receberam a **nota máxima**. As participantes não identificaram a ausência de funcionalidades essenciais, destacando que o sistema está claro, objetivo e com um layout bem estruturado, e descreveram a experiência como excelente, intuitiva e acima das expectativas iniciais.

Apesar dos resultados positivos, ainda foram identificadas oportunidades de melhoria, principalmente relacionadas à clareza da interface em pontos específicos, à descoberta de algumas funcionalidades (como a edição de incidentes) e ao aprimoramento do feedback ao usuário, especialmente no histórico de alterações e no apoio ao processo de classificação.

As sugestões levantadas pelas participantes também indicam caminhos de evolução, como a inclusão de filtros de busca mais robustos e a apresentação detalhada das alterações realizadas durante a classificação.

Dessa forma, conclui-se que o sistema já apresenta uma base sólida e validada em termos de usabilidade, e que a implementação das melhorias identificadas tende a elevar ainda mais a qualidade da experiência, aumentando a eficiência de uso, a confiança dos usuários e a qualidade dos dados registrados no sistema.
