<h1 align="center">ADR-0002 — Adotar aplicação web responsiva para o NotificaSaúde</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 11/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 11/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

O sistema NotificaSaúde será inicialmente desenvolvido como um projeto piloto em parceria com instituições de saúde e com a Universidade Federal de Mato Grosso do Sul (UFMS).

O objetivo inicial do projeto é validar o fluxo de notificação, análise e acompanhamento de incidentes de segurança do paciente em um ambiente real de uso.

Neste primeiro momento o sistema terá:

- número limitado de usuários
- implantação em ambiente institucional controlado
- necessidade de baixo custo de infraestrutura
- equipe de desenvolvimento reduzida

Além disso, o sistema precisa ser facilmente acessível por profissionais de saúde, pacientes ou acompanhantes, sem exigir instalação de aplicativos em dispositivos móveis.

## Decisão

Foi decidido que o sistema NotificaSaúde será desenvolvido como uma **aplicação web responsiva**, acessível por navegador em dispositivos móveis e desktop.

As principais características da solução serão:

- Aplicação **Web Responsiva (Mobile First)** acessível via navegador
- Acesso ao sistema via **smartphone ou desktop**, sem necessidade de publicação em **Google Play ou App Store**

A aplicação será projetada para funcionar como uma **Web Application responsiva**, permitindo que usuários registrem incidentes e acompanhem análises diretamente pelo navegador.

Essa abordagem reduz barreiras de acesso e permite validar rapidamente o produto em ambiente real.

## Consequências

### Consequências positivas

- Redução da complexidade arquitetural do sistema
- Acesso simplificado ao sistema via navegador
- Eliminação da necessidade de distribuição via lojas de aplicativos
- Compatibilidade com diferentes dispositivos sem exigir instalação local

### Consequências negativas

- Dependência de conectividade para uso do sistema
- Experiência de uso pode ser inferior à de aplicações nativas em alguns cenários específicos do dispositivo

### Mitigações

Caso o sistema evolua para uso em múltiplas instituições ou maior volume de usuários, será possível evoluir a arquitetura para:

- recursos progressivos de instalação e cache local
- aplicações móveis nativas ou híbridas para cenários específicos
- otimizações adicionais de desempenho e experiência offline

As decisões sobre arquitetura de implantação, banco de dados e stack de frontend serão registradas em ADRs específicas para manter a rastreabilidade das escolhas técnicas.
