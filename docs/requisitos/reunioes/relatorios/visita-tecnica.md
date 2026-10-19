<h1 align="center">Relatório de Visita Técnica</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 18/10/2026 | Migração do relatório (Word) para o MkDocs, com o nome da instituição visitada ocultado. | Sophya Ribeiro |

| Local | Sistema observado | Foco |
| --- | --- | --- |
| Hospital de referência | VIGIHOSP | Registro, classificação, acompanhamento e tratamento de notificações de incidentes e dos planos de ação |

## Sumário

- [1. Objetivo da Visita](#objetivo-da-visita)
- [2. Sistema VIGIHOSP e Registro de Incidentes](#sistema-vigihosp-e-registro-de-incidentes)
- [3. Classificação das Notificações](#classificacao-das-notificacoes)
- [4. Comunicação com o NOTIVISA](#comunicacao-com-o-notivisa)
- [5. Plano de Ação e Acompanhamento das Ações Corretivas](#plano-de-acao-e-acompanhamento-das-acoes-corretivas)
- [6. Dificuldade no Controle de Prazos](#dificuldade-no-controle-de-prazos)
- [7. Utilização de Planilhas para Controle](#utilizacao-de-planilhas-para-controle)
- [8. Necessidade de Integração entre Sistemas](#necessidade-de-integracao-entre-sistemas)
- [9. Interface e Desempenho do Sistema](#interface-e-desempenho-do-sistema)
- [10. Necessidade de Alertas para Eventos Graves](#necessidade-de-alertas-para-eventos-graves)
- [11. Principais Problemas Identificados](#principais-problemas-identificados)
- [12. Oportunidades de Melhoria](#oportunidades-de-melhoria)
- [13. Considerações Finais](#consideracoes-finais)

---

## 1. Objetivo da Visita { #objetivo-da-visita }

A visita técnica teve como objetivo conhecer o funcionamento do sistema **VIGIHOSP**, utilizado por um hospital de referência, bem como compreender os processos atualmente adotados para registro, classificação, acompanhamento e tratamento de notificações de incidentes.

Durante a visita, foram apresentadas as principais funcionalidades utilizadas pela equipe responsável pela gestão da qualidade e segurança, além das dificuldades encontradas no processo atual, principalmente relacionadas ao acompanhamento dos planos de ação, comunicação entre sistemas, geração de relatórios, controle de prazos e monitoramento das ações corretivas.

---

## 2. Sistema VIGIHOSP e Registro de Incidentes { #sistema-vigihosp-e-registro-de-incidentes }

Durante a demonstração, foi apresentado o sistema VIGIHOSP, utilizado para o registro e gerenciamento das notificações de incidentes ocorridos no hospital.

Foi explicado que, atualmente, **somente profissionais vinculados ao hospital possuem autorização para realizar diretamente uma notificação de incidente no sistema**, incluindo profissionais da área médica e demais profissionais autorizados.

No caso de pacientes ou acompanhantes que desejem relatar algum acontecimento, estes devem procurar a **Ouvidoria do hospital**. Após o recebimento e análise do relato, a Ouvidoria encaminha a situação para os responsáveis, que realizam a notificação no sistema.

Esse processo cria uma etapa intermediária para os relatos provenientes dos pacientes, uma vez que eles não conseguem registrar diretamente o incidente no sistema.

---

## 3. Classificação das Notificações { #classificacao-das-notificacoes }

Durante a apresentação, também foi demonstrado o processo de classificação dos incidentes dentro do VIGIHOSP.

Os eventos podem ser classificados de acordo com sua natureza e gravidade, sendo utilizada também uma identificação visual por meio de **cores diferentes para determinados tipos de eventos**.

Entretanto, foi relatada uma limitação importante no sistema: apesar de os eventos possuírem diferentes classificações e cores, **não existe um sistema de filtros suficientemente adequado para que a equipe consiga realizar uma extração ou análise específica dessas informações**.

Essa limitação dificulta a geração de informações gerenciais, principalmente quando a equipe necessita analisar apenas determinados tipos de eventos, períodos, classificações ou níveis de gravidade.

---

## 4. Comunicação com o NOTIVISA { #comunicacao-com-o-notivisa }

Um dos principais pontos identificados durante a visita foi a ausência de uma comunicação direta entre o **VIGIHOSP e o NOTIVISA**.

Atualmente, quando uma informação precisa ser encaminhada ao NOTIVISA, a equipe precisa realizar novamente o preenchimento das informações necessárias.

Esse processo gera **retrabalho**, pois informações que já foram registradas no VIGIHOSP precisam ser novamente inseridas em outro sistema.

A equipe relatou que seria de grande importância que os sistemas pudessem se comunicar diretamente, permitindo o compartilhamento ou a transferência das informações já cadastradas.

Uma possível integração entre os sistemas poderia reduzir o trabalho manual, diminuir a possibilidade de erros de preenchimento e otimizar o tempo dos profissionais responsáveis pela gestão das notificações.

---

## 5. Plano de Ação e Acompanhamento das Ações Corretivas { #plano-de-acao-e-acompanhamento-das-acoes-corretivas }

Outro ponto de grande relevância apresentado durante a visita foi o processo de elaboração e acompanhamento dos **planos de ação**.

Foi informado que o VIGIHOSP permite a criação de planos de ação relacionados aos incidentes identificados. Entretanto, existe uma limitação significativa no acompanhamento da execução dessas ações.

Embora seja possível registrar que determinada ação precisa ser realizada, **não existe um mecanismo eficiente para verificar se a ação está realmente sendo executada, se foi concluída ou se está dentro do prazo estabelecido**.

Diante dessa limitação, a equipe desenvolveu um processo alternativo utilizando o **SEI (Sistema Eletrônico de Informações)**.

Nesse processo, são enviados e-mails aos responsáveis pelos setores envolvidos, informando as ações que precisam ser realizadas. Os responsáveis devem então encaminhar ou anexar documentos que comprovem a execução da ação solicitada.

Apesar de ser uma solução encontrada pela própria equipe para tentar controlar o processo, foi relatado que o método não apresenta a eficiência esperada.

Um dos principais problemas está relacionado ao fato de que **muitos responsáveis não encaminham ou não anexam os documentos comprobatórios**, dificultando a confirmação de que a ação realmente foi executada.

Além disso, o processo não possui um mecanismo automatizado eficiente para controle dos prazos.

---

## 6. Dificuldade no Controle de Prazos { #dificuldade-no-controle-de-prazos }

A ausência de um sistema de alertas também foi apontada como uma das principais dificuldades.

Atualmente, não existe um mecanismo que permita avisar automaticamente os responsáveis sobre:

- Ações próximas do vencimento;
- Ações atrasadas;
- Ações ainda não iniciadas;
- Pendências de documentação;
- Necessidade de atualização do andamento;
- Necessidade de validação ou aprovação da ação.

Essa ausência de alertas faz com que o acompanhamento dependa muito do controle manual realizado pela equipe responsável pela gestão da qualidade.

Consequentemente, existe o risco de algumas ações ultrapassarem seus prazos sem que os responsáveis sejam devidamente alertados.

---

## 7. Utilização de Planilhas para Controle { #utilizacao-de-planilhas-para-controle }

Como consequência das limitações apresentadas pelo sistema, foi relatado que a responsável pela gestão da qualidade atualmente mantém aproximadamente **três planilhas diferentes** para conseguir realizar um controle mais abrangente dos planos de ação.

Essas planilhas são utilizadas como mecanismos complementares de acompanhamento, permitindo à equipe controlar informações que não são suficientemente contempladas pelo VIGIHOSP.

Entretanto, essa necessidade gera um aumento significativo do trabalho operacional, uma vez que as informações precisam ser acompanhadas e, em alguns casos, atualizadas em diferentes ferramentas.

Esse cenário também pode aumentar o risco de **informações divergentes, dados desatualizados ou perda de rastreabilidade**, especialmente quando um mesmo processo precisa ser acompanhado simultaneamente pelo VIGIHOSP, SEI, e-mail e planilhas.

---

## 8. Necessidade de Integração entre Sistemas { #necessidade-de-integracao-entre-sistemas }

Durante a conversa, foi destacada a importância de uma maior integração entre os sistemas utilizados no processo.

A equipe demonstrou interesse principalmente na possibilidade de comunicação entre o VIGIHOSP e sistemas externos, como o NOTIVISA.

A integração poderia permitir que informações cadastradas uma única vez fossem utilizadas em diferentes processos, evitando a necessidade de realizar novamente o preenchimento dos mesmos dados.

Além disso, uma solução integrada poderia centralizar informações relacionadas a:

- Notificações de incidentes;
- Classificação dos eventos;
- Planos de ação;
- Responsáveis;
- Prazos;
- Evidências;
- Status das ações;
- Histórico de alterações;
- Comunicação com sistemas externos.

Dessa forma, seria possível reduzir significativamente o trabalho manual e proporcionar maior rastreabilidade ao processo.

---

## 9. Interface e Desempenho do Sistema { #interface-e-desempenho-do-sistema }

Em relação à utilização do VIGIHOSP, foi relatado que o sistema é considerado **pesado e carregado**, apresentando uma interface com grande quantidade de informações.

Apesar disso, a avaliação geral apresentada durante a visita foi de que o sistema consegue atender boa parte das necessidades atuais da equipe.

Entretanto, existem oportunidades de melhoria relacionadas principalmente à usabilidade, organização das informações, filtros, visualização dos dados e desempenho.

Uma interface mais simples e organizada poderia facilitar o trabalho dos profissionais, especialmente daqueles que precisam consultar grandes quantidades de notificações e informações relacionadas aos incidentes.

---

## 10. Necessidade de Alertas para Eventos Graves { #necessidade-de-alertas-para-eventos-graves }

Um dos pontos considerados mais importantes durante a visita foi a necessidade de um **alerta específico para notificações relacionadas a óbitos**.

Foi relatado que, quando ocorre uma notificação desse tipo, a situação precisa ser analisada e investigada pela responsável pela gestão da qualidade.

Entretanto, segundo o relato apresentado, o sistema não possui atualmente um mecanismo de alerta suficientemente destacado para garantir que esse tipo de ocorrência seja imediatamente identificada.

Foi sugerida, portanto, a utilização de um **aviso urgente e bloqueador**, com destaque visual, para situações consideradas críticas, especialmente notificações relacionadas a óbitos.

Esse mecanismo poderia garantir que eventos de alta gravidade recebessem prioridade de análise, evitando que uma ocorrência crítica permanecesse sem tratamento ou fosse identificada somente posteriormente.

---

## 11. Principais Problemas Identificados { #principais-problemas-identificados }

A partir da visita técnica, foram identificados os seguintes pontos de atenção:

1. **Ausência de integração direta com o NOTIVISA**, gerando retrabalho no preenchimento das informações.
2. **Limitação no acompanhamento dos planos de ação**, principalmente em relação à confirmação da execução.
3. **Ausência de controle automatizado de prazos** para as ações.
4. **Falta de alertas automáticos** para ações próximas do vencimento ou atrasadas.
5. **Dependência de e-mails e do SEI** para acompanhamento das ações.
6. **Baixa adesão ao envio de evidências** por parte dos responsáveis pelas ações.
7. **Necessidade de utilização de múltiplas planilhas** para controle das informações.
8. **Falta de filtros mais eficientes** para análise e extração de informações.
9. **Interface considerada pesada e carregada**.
10. **Ausência de alerta crítico específico para notificações de óbito**.
11. **Falta de centralização das informações** relacionadas aos incidentes e seus respectivos planos de ação.
12. **Dependência de processos manuais**, aumentando o tempo operacional e a possibilidade de erros.

---

## 12. Oportunidades de Melhoria { #oportunidades-de-melhoria }

Com base nos pontos levantados durante a visita, foi possível identificar diversas oportunidades para uma futura solução tecnológica.

Entre as principais possibilidades estão:

- Implementação de **integração com o NOTIVISA**;
- Criação de um **módulo completo de gestão de planos de ação**;
- Definição de responsáveis por cada ação;
- Controle automático de prazos;
- Alertas de vencimento e atraso;
- Notificações automáticas por e-mail ou pelo próprio sistema;
- Registro obrigatório de evidências para conclusão das ações;
- Possibilidade de anexar documentos diretamente à ação;
- Histórico completo de alterações e atualizações;
- Dashboard gerencial;
- Filtros avançados para análise dos incidentes;
- Relatórios personalizados;
- Indicadores de desempenho;
- Identificação visual de eventos críticos;
- Alertas prioritários para casos de óbito;
- Centralização das informações em um único ambiente;
- Redução da necessidade de utilização de planilhas externas;
- Maior rastreabilidade de todo o processo.

---

## 13. Considerações Finais { #consideracoes-finais }

A visita permitiu compreender de forma mais concreta como ocorre atualmente o processo de notificação e acompanhamento de incidentes no hospital visitado.

Foi possível observar que o VIGIHOSP atende grande parte das necessidades relacionadas ao registro e classificação dos incidentes, porém existem limitações importantes quando o processo exige **acompanhamento contínuo, integração com outros sistemas, controle de prazos, geração de informações gerenciais e monitoramento dos planos de ação**.

O principal problema identificado não está necessariamente na inexistência da funcionalidade de criação de ações, mas na dificuldade de garantir que essas ações sejam efetivamente executadas, documentadas e concluídas dentro dos prazos estabelecidos.

A necessidade de utilizar simultaneamente VIGIHOSP, SEI, e-mails e aproximadamente três planilhas demonstra que existe uma oportunidade significativa de **centralização e automatização do processo**.

Uma solução que reúna o registro do incidente, classificação, definição do plano de ação, atribuição de responsáveis, controle de prazos, envio de alertas, anexação de evidências, validação da conclusão e geração de relatórios poderia reduzir o trabalho operacional da equipe e aumentar significativamente a rastreabilidade e a eficiência do processo.

Outro aspecto de grande importância é a possibilidade de integração com sistemas externos, especialmente o NOTIVISA. Essa comunicação permitiria reduzir o retrabalho atualmente existente e contribuiria para uma maior consistência das informações.

Por fim, a criação de mecanismos específicos para tratamento de eventos críticos, como **notificações relacionadas a óbitos**, seria uma melhoria relevante, permitindo que situações de maior gravidade sejam imediatamente destacadas e direcionadas para investigação e tomada de providências.

Dessa forma, a visita técnica contribuiu para identificar não apenas as funcionalidades já existentes, mas principalmente as **lacunas e oportunidades de melhoria que podem orientar o desenvolvimento de uma solução mais integrada, automatizada, rastreável e eficiente para a gestão de incidentes e planos de ação**.
