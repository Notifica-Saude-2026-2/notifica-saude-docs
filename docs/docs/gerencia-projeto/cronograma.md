---
hide:
  - toc
---

<h1 align="center">Cronograma</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 24/09/2026 | Migração do cronograma do semestre 2026/2 (planilha "Plano A" do Google Drive) para o MkDocs. | Sophya Ribeiro |

Planejamento do semestre letivo 2026/2, da integração da equipe à defesa do projeto e ao encerramento do período. Cada etapa reúne os encontros previstos, as atividades de cada dia e as entregas esperadas.

<div class="ns-dec-resumo" markdown>
<div class="ns-dec-stat ns-dec-stat--texto"><strong>27/07 a 02/12</strong><span>período do semestre</span></div>
<div class="ns-dec-stat"><strong>4</strong><span>sprints (Sprint 0 a Sprint 3)</span></div>
<div class="ns-dec-stat"><strong>63</strong><span>encontros planejados</span></div>
<div class="ns-dec-stat"><strong>9</strong><span>dias não letivos</span></div>
</div>

<div class="ns-legenda"><strong>Modalidade dos encontros:</strong> <span class="ns-mod ns-mod--p">Presencial</span> <span class="ns-mod ns-mod--h">Híbrido</span> <span class="ns-mod ns-mod--ps">Presencial*</span> · <span class="ns-naoletivo">Não letivo</span> feriado ou recesso</div>

## Visão geral

<div class="ns-crono-geral" markdown>

| Etapa | Período | Encontros | Foco |
| --- | --- | :---: | --- |
| **[Onboarding & Team Formation](#onboarding-team-formation)** | 27/07 – 30/07 | 4 | — |
| **[Sprint 0](#sprint-0)** | 03/08 – 17/08 | 9 | Fechamento de Requisitos Pendentes, Atualização de Arquitetura & Design Técnico |
| **[Sprint 1](#sprint-1)** | 18/08 – 10/09 | 13 | Análise do Incidente, CAPTCHA |
| **[Sprint 2](#sprint-2)** | 14/09 – 07/10 | 15 | Causa Raiz, Plano de Ação & Histórico |
| **[Recesso acadêmico](#recesso-academico)** | 12/10 – 16/10 | — | — |
| **[Sprint 3](#sprint-3)** | 19/10 – 10/11 | 12 | Hardening, RNFs & Estabilização |
| **[Fechamento do projeto](#fechamento-do-projeto)** | 11/11 – 12/11 | 2 | — |
| **[Defesa do projeto](#defesa-do-projeto)** | 16/11 – 19/11 | 4 | — |
| **[Parte burocrática](#parte-burocratica)** | 23/11 – 26/11 | 4 | — |
| **[Academic Term Closure](#academic-term-closure)** | 28/11 | — | — |
| **[Grade Submission](#grade-submission)** | 02/12 | — | — |

</div>

---

## Cronograma detalhado

### Onboarding & Team Formation { #onboarding-team-formation }

**Período:** 27/07/2026 a 30/07/2026 · **Encontros:** 4

**Entregas previstas (onboarding e Sprint 0)**

- Onboarding
- Plano de projeto
- Documento de riscos
- Diário de decisões
- Documentação centralizada
- Board configurado
- Configuração do deploy automático
- Arquitetura definida (revisada/atualizada)
- Spec reversa → base para specs de novas funcionalidades (definir metodologia adotada)
- Backlog da sprint 1

??? abstract "Dias e atividades (4)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 27/07/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | — |
    | 28/07/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | — |
    | 29/07/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | — |
    | 30/07/2026 | quinta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | — |

### Sprint 0 { #sprint-0 }

*Fechamento de Requisitos Pendentes, Atualização de Arquitetura & Design Técnico*

**Período:** 03/08/2026 a 17/08/2026 · **Encontros:** 9

??? abstract "Dias e atividades (9)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 03/08/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Organização e revisão |
    | 04/08/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Organização e revisão |
    | 05/08/2026 | quarta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Organização e revisão |
    | 06/08/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Organização e revisão |
    | 10/08/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Organização e revisão |
    | 11/08/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Organização e revisão |
    | 12/08/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Organização e revisão |
    | 13/08/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Weekly e planejamento semanal |
    | 17/08/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Sprint review e Retrospectiva |

### Sprint 1 { #sprint-1 }

*Iterative Delivery - Sprint 1*

**Período:** 18/08/2026 a 10/09/2026 · **Encontros:** 13 · **Dias não letivos:** 2 · **Foco:** Análise do Incidente, CAPTCHA

**Entregas previstas**

- Adicionar reCaptcha (o melhor guard possível para a situação) no formulário de registro de incidente
- Ajustar épico 2 → condicional de encaminhamento com base no grau de dano

??? abstract "Dias e atividades (15)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 18/08/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Sprint planning |
    | 19/08/2026 | quarta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Desenvolvimento |
    | 20/08/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Weekly e planejamento semanal |
    | 24/08/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento (pizza com o Turine) |
    | 25/08/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 26/08/2026 | quarta-feira | — | <span class="ns-naoletivo">Não letivo</span> Feriado municipal |
    | 27/08/2026 | quinta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Weekly e planejamento semanal |
    | 31/08/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 01/09/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 02/09/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 03/09/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Weekly e planejamento semanal |
    | 07/09/2026 | segunda-feira | — | <span class="ns-naoletivo">Não letivo</span> Feriado Nacional (Independência do Brasil) |
    | 08/09/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 09/09/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 10/09/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Sprint review e Retrospectiva |

### Sprint 2 { #sprint-2 }

*Iterative Delivery - Sprint 2*

**Período:** 14/09/2026 a 07/10/2026 · **Encontros:** 15 · **Foco:** Causa Raiz, Plano de Ação & Histórico

**Entregas previstas**

- Desenvolver épico 4 PARCIALMENTE (4.1, 4.2, 4.3 e 4.4)

??? abstract "Dias e atividades (15)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 14/09/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Sprint planning |
    | 15/09/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 16/09/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 17/09/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Weekly e planejamento semanal |
    | 21/09/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 22/09/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 23/09/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 24/09/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Weekly e planejamento semanal |
    | 28/09/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 29/09/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 30/09/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 01/10/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Weekly e planejamento semanal |
    | 05/10/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Seminário NES |
    | 06/10/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 07/10/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Sprint review e Retrospectiva |

### Recesso acadêmico { #recesso-academico }

**Período:** 12/10/2026 a 16/10/2026 · **Dias não letivos:** 5

??? abstract "Dias e atividades (5)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 12/10/2026 | segunda-feira | — | <span class="ns-naoletivo">Não letivo</span> Feriado Nacional (Nossa Senhora Aparecida) |
    | 13/10/2026 | terça-feira | — | <span class="ns-naoletivo">Não letivo</span> Calendário Acadêmico UFMS |
    | 14/10/2026 | quarta-feira | — | <span class="ns-naoletivo">Não letivo</span> Calendário Acadêmico UFMS |
    | 15/10/2026 | quinta-feira | — | <span class="ns-naoletivo">Não letivo</span> Calendário Acadêmico UFMS |
    | 16/10/2026 | sexta-feira | — | <span class="ns-naoletivo">Não letivo</span> Calendário Acadêmico UFMS (13 a 17/10) |

### Sprint 3 { #sprint-3 }

*Iterative Delivery - Sprint 3*

**Período:** 19/10/2026 a 10/11/2026 · **Encontros:** 12 · **Dias não letivos:** 2 · **Foco:** Hardening, RNFs & Estabilização

??? abstract "Dias e atividades (14)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 19/10/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Sprint planning |
    | 20/10/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 21/10/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 22/10/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Desenvolvimento |
    | 26/10/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 27/10/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 28/10/2026 | quarta-feira | — | <span class="ns-naoletivo">Não letivo</span> Dia do Servidor Público Federal |
    | 29/10/2026 | quinta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 02/11/2026 | segunda-feira | — | <span class="ns-naoletivo">Não letivo</span> Feriado Nacional (Finados) |
    | 03/11/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 04/11/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 05/11/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | Weekly e planejamento semanal |
    | 09/11/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Desenvolvimento |
    | 10/11/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Sprint review e Retrospectiva |

### Fechamento do projeto { #fechamento-do-projeto }

**Período:** 11/11/2026 a 12/11/2026 · **Encontros:** 2

??? abstract "Dias e atividades (2)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 11/11/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | — |
    | 12/11/2026 | quinta-feira | <span class="ns-mod ns-mod--h">Híbrido</span> | — |

### Defesa do projeto { #defesa-do-projeto }

**Período:** 16/11/2026 a 19/11/2026 · **Encontros:** 4

??? abstract "Dias e atividades (4)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 16/11/2026 | segunda-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Final Engineering Review & Project Defense - Sessao 1. |
    | 17/11/2026 | terça-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Final Engineering Review & Project Defense - Sessao 2. |
    | 18/11/2026 | quarta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Final Engineering Review & Project Defense - Sessao 3. |
    | 19/11/2026 | quinta-feira | <span class="ns-mod ns-mod--p">Presencial</span> | Final Engineering Review & Project Defense - Sessao 4 e consolidacao do feedback. |

### Parte burocrática { #parte-burocratica }

**Período:** 23/11/2026 a 26/11/2026 · **Encontros:** 4

??? abstract "Dias e atividades (4)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 23/11/2026 | segunda-feira | <span class="ns-mod ns-mod--ps">Presencial*</span> | — |
    | 24/11/2026 | terça-feira | <span class="ns-mod ns-mod--ps">Presencial*</span> | — |
    | 25/11/2026 | quarta-feira | <span class="ns-mod ns-mod--ps">Presencial*</span> | — |
    | 26/11/2026 | quinta-feira | <span class="ns-mod ns-mod--ps">Presencial*</span> | — |

### Academic Term Closure { #academic-term-closure }

**Período:** 28/11/2026

??? abstract "Dias e atividades (1)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 28/11/2026 | sábado | — | Término do período letivo 2026/2. |

### Grade Submission { #grade-submission }

**Período:** 02/12/2026

??? abstract "Dias e atividades (1)"

    | Data | Dia da semana | Modalidade | Atividade planejada |
    | --- | --- | --- | --- |
    | 02/12/2026 | quarta-feira | — | Prazo final para liberação de notas e frequências — 2026/2. |
