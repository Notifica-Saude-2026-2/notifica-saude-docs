<h1 align="center">ADR-0014 — Adotar Métricas de DevOps SRE</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 23/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 23/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

O sistema Notifica Saúde é uma aplicação crítica que exige alta disponibilidade, permitindo o registro contínuo de notificações de incidentes a qualquer momento. Atualmente, não possuímos visibilidade em tempo real sobre a saúde da nossa API. Na engenharia de SRE (Site Reliability Engineering) e DevOps, painéis com excesso de métricas (CPU, RAM, Disco) podem confundir a equipe durante um incidente. Precisamos de uma abordagem focada na experiência real do usuário (tráfego HTTP) para responder rapidamente a indisponibilidades.

## Decisão

Adotaremos o **Método RED** como o padrão principal de métricas de observabilidade para o backend. A equipe focará em três números fundamentais que resumem a saúde do serviço:

* **R - Rate (Taxa):** Quantas requisições por segundo (req/s) o servidor está recebendo?
* **E - Errors (Erros):** Quantas requisições estão falhando (códigos HTTP 4xx e 5xx)?
* **D - Duration (Duração):** Quanto tempo o servidor demora para responder (latência/tempo de resposta)?

**Como vamos implementar:**
Utilizaremos uma biblioteca de métricas no Express (como o `prom-client`) para interceptar o tráfego e expor um endpoint `/metrics`. Uma ferramenta externa (como Prometheus ou um APM como Datadog) coletará esses dados periodicamente para gerar os painéis. 

## Consequências

* **Positivas:** * **Simplicidade:** A equipe "bate o olho e entende" o painel. Se a Duração aumenta ou os Erros sobem, sabemos instantaneamente que há degradação no serviço.
    * **Alertas precisos:** Facilita a criação de alertas focados no usuário. Em vez de alertar "CPU em 80%", o sistema alertará "Taxa de erro > 5% nas rotas de notificação".
    * [cite_start]**Alinhamento com SRE:** Foca no comportamento externo da API, garantindo o monitoramento do Requisito de Sistema 5.1.1 (Alta disponibilidade)[cite: 120].
* **Negativas:** * Necessidade de provisionar infraestrutura extra (Prometheus/Grafana ou SaaS) para consumir e visualizar os dados expostos pelo servidor.
    * Adição de um middleware de coleta métrica no Express, que consome uma fração mínima de processamento em cada requisição.
