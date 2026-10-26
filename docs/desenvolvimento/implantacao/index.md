<h1 align="center">Implantação</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 18/10/2026 | Criação da página com a situação atual da implantação: protótipo funcional e ambiente de homologação no servidor do NES. Substitui a antiga aba "Implantação e Entregas". | Sophya Ribeiro |

Hoje o NotificaSaúde está disponível em **dois ambientes**, com papéis diferentes: o **protótipo funcional**, que mostra o core completo do sistema e é usado para desenhar e validar as funcionalidades com as proponentes, e o **ambiente de homologação**, no servidor do NES, que roda a versão real do sistema com as funcionalidades já desenvolvidas e testadas.

## Ambientes

<div class="grid cards" markdown>

-   :material-flask-outline:{ .lg .middle } **Protótipo funcional**

    ---

    <span class="ns-tag ns-tag--arquitetura">Protótipo · GitHub Pages</span>

    Versão navegável com o core completo do sistema: notificação, classificação, encaminhamento, análise do incidente e plano de ação. É onde as funcionalidades são desenhadas e validadas com as proponentes antes de entrarem no desenvolvimento.

    - Publicado no GitHub Pages, com deploy automático a cada atualização da branch principal ([decisão 07 do Diário de Decisões](../../gerencia-projeto/diario-de-decisoes.md)).
    - Não tem backend: os dados ficam salvos apenas no navegador de quem usa (localStorage).

    [:material-open-in-new: Abrir protótipo](https://notifica-saude-2026-2.github.io/notifica-saude-prototipo-funcional/){ .md-button .md-button--primary target="_blank" rel="noopener" }

-   :material-server-outline:{ .lg .middle } **Ambiente de homologação (NES)**

    ---

    <span class="ns-tag ns-tag--requisitos">Homologação · Servidor do NES</span>

    Versão real do NotificaSaúde, com [frontend](../frontend/repositorio.md), [backend](../backend/repositorio.md) e banco de dados, publicada no servidor do NES com as funcionalidades já desenvolvidas e testadas.

    - Atualizado ao fim de cada sprint, antes da sprint review.
    - Algumas funcionalidades do protótipo ainda estão em desenvolvimento nesta versão.

    [:material-open-in-new: Abrir sistema](https://nes-server.equipe7.front.facom.ufms.br/){ .md-button .md-button--primary target="_blank" rel="noopener" }

</div>

## Comparação dos ambientes

| | Protótipo funcional | Homologação (NES) |
| --- | --- | --- |
| **Objetivo** | Desenhar e validar funcionalidades com as proponentes | Disponibilizar a versão real do sistema para validação das entregas |
| **Escopo** | Core completo do sistema | Funcionalidades já desenvolvidas e testadas |
| **Hospedagem** | GitHub Pages | Servidor do NES |
| **Dados** | Navegador do usuário (localStorage) | Banco de dados PostgreSQL do sistema |
| **Atualização** | Automática, a cada atualização da branch principal | Ao fim de cada sprint, antes da sprint review |
| **Repositório** | `notifica-saude-prototipo-funcional` | `notifica-saude-frontend` e `notifica-saude-backend` |

## Como a homologação é implantada

O frontend e o backend são aplicações independentes, em repositórios separados e com deploys separados ([ADR-0006](../arquitetura/adr/0006-adotar-arquitetura-cliente-servidor-rest.md)). Cada um é empacotado em uma imagem Docker ([ADR-0007](../arquitetura/adr/0007-adotar-docker-para-deploy.md)): o frontend é servido por Nginx a partir do build estático, e o backend sobe a API junto com o banco de dados e o Redis.

A distribuição dos componentes no servidor está no [Diagrama de Implantação — Homologação](../arquitetura/especificacao-arquitetura.md#implantacao), na Especificação de Arquitetura de Software.

!!! info "Deploy automático"
    Por decisão da equipe, o deploy automático será implementado somente após a estabilização da esteira de testes e da geração de imagem ([decisão 03 do Diário de Decisões](../../gerencia-projeto/diario-de-decisoes.md)). Até lá, a atualização do ambiente de homologação é feita pela equipe ao fim de cada sprint.
