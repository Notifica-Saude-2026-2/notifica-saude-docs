<h1 align="center">ADR-0003 — Adotar arquitetura monolítica para o backend do NotificaSaúde</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 11/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--metodologia">Substituída</span> <span>Data da decisão: 11/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Substituída por [6. Adotar arquitetura cliente-servidor usando REST](0006-adotar-arquitetura-cliente-servidor-rest.md)

## Contexto

O NotificaSaúde será iniciado como um projeto piloto, com escopo funcional ainda em validação, equipe de desenvolvimento reduzida e operação em ambiente institucional controlado.

Nesse cenário inicial, os principais objetivos técnicos são:

- entregar uma primeira versão funcional com baixo custo operacional
- simplificar desenvolvimento, testes e implantação
- reduzir a sobrecarga de comunicação entre componentes distribuídos
- facilitar a evolução do domínio enquanto os fluxos de negócio ainda estão sendo estabilizados

Uma arquitetura distribuída baseada em múltiplos serviços aumentaria o esforço de infraestrutura, observabilidade, deploy e coordenação entre componentes logo no início do projeto.

## Decisão

Foi decidido que o backend do NotificaSaúde será implementado inicialmente como um **monólito**.

Isso significa que a API, a lógica de negócio, autenticação, autorização, persistência e demais componentes centrais serão mantidos em uma única aplicação executável e implantados como uma única unidade.

Essa escolha prioriza simplicidade arquitetural e velocidade de entrega na fase inicial do sistema.

## Consequências

### Consequências positivas

- Menor complexidade de desenvolvimento e implantação
- Menor custo operacional e de infraestrutura
- Fluxo de depuração mais simples por concentrar o domínio em uma única aplicação
- Facilidade para refatorar módulos internos enquanto o domínio ainda está amadurecendo
- Menor necessidade inicial de mecanismos avançados de comunicação distribuída

### Consequências negativas

- Escalabilidade menos granular do que em arquiteturas distribuídas
- Maior risco de acoplamento excessivo caso não haja disciplina de modularização interna
- Crescimento da base de código pode dificultar manutenção se os limites internos do domínio não forem respeitados

### Mitigações

Para reduzir os riscos do modelo monolítico, a aplicação deverá:

- ser organizada em módulos coesos com responsabilidades bem definidas
- manter separação clara entre camadas e regras de negócio
- evitar acoplamento indevido entre contextos internos
- permitir evolução futura para serviços separados caso o volume de uso, a equipe ou o contexto institucional justifiquem essa mudança

Caso o sistema passe a operar em múltiplas instituições, com maior volume de dados ou demanda de escalabilidade independente por domínio, essa decisão poderá ser revisada.
