<h1 align="center">ADR-0007 — Usar Docker para a implantação</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 12/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

A aplicação será composta por componentes que podem utilizar diferentes tecnologias ao longo do tempo. A implantação tradicional, baseada na instalação manual de dependências e configuração direta nos servidores, tende a gerar inconsistências entre ambientes (desenvolvimento, homologação e produção) e aumenta o esforço operacional para manter e atualizar a aplicação.

Além disso, há a necessidade de garantir maior previsibilidade no processo de implantação, bem como mecanismos simples para iniciar, monitorar e reiniciar automaticamente as aplicações em casos de falhas fatais.

Diante desse cenário, foi considerada a adoção de uma abordagem baseada em conteinerização.

## Decisão

Foi decidido utilizar conteinerização com Docker para empacotar e executar as aplicações do sistema.

Cada componente da aplicação será empacotado em uma imagem Docker contendo todas as dependências necessárias para sua execução. Os containers serão utilizados para iniciar, monitorar e reiniciar automaticamente as aplicações quando necessário.

Como objetivo secundário, essa abordagem também permite maior liberdade tecnológica, possibilitando que diferentes partes do sistema sejam desenvolvidas utilizando tecnologias distintas sem impactar o processo de implantação.

## Consequências

### Positivas

- **Padronização da implantação**: os ambientes passam a ser reproduzíveis, reduzindo problemas de inconsistência entre desenvolvimento, testes e produção.
- **Isolamento de dependências**: cada aplicação executa com suas próprias dependências sem interferir em outras aplicações no mesmo servidor.
- **Facilidade de automação**: containers facilitam integração com pipelines de CI/CD.
- **Portabilidade**: a aplicação pode ser executada em qualquer ambiente que suporte Docker.
- **Resiliência operacional**: containers podem ser reiniciados automaticamente em caso de falhas.
- **Flexibilidade tecnológica**: permite utilizar diferentes linguagens ou frameworks em cada serviço sem impactar a infraestrutura de implantação.

### Negativas

- **Complexidade operacional adicional**: a equipe precisa conhecer Docker, imagens, containers e redes de containers.
- **Sobrecarga de infraestrutura**: embora leve, a camada de containerização adiciona _overhead_ em comparação à execução direta no sistema operacional.
- **Gestão de imagens**: exige controle de versões de imagens e manutenção de um repositório de imagens.
- **Depuração mais complexa**: diagnóstico de problemas pode exigir inspeção de containers, logs e imagens.
- **Curva de aprendizado**: desenvolvedores e equipe de operações precisam adquirir conhecimento sobre práticas de containerização.

### Alternativa considerada

#### Implantação clássica em servidor

Nesta abordagem, as aplicações seriam implantadas diretamente no servidor, com instalação manual ou automatizada de dependências e execução como serviços do sistema operacional.

**Motivos para não adoção:**

- Maior risco de inconsistências entre ambientes.
- Dependências compartilhadas podem gerar conflitos entre aplicações.
- Maior esforço para configurar novos ambientes.
- Menor portabilidade entre diferentes infraestruturas.
- Mais dificuldade para suportar múltiplas tecnologias no mesmo ambiente.
