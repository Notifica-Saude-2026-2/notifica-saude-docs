<h1 align="center">ADR-0006 — Adotar arquitetura cliente-servidor usando REST</h1>

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

Inicialmente, o projeto considerava a utilização de uma arquitetura monolítica. No entanto, durante a evolução das discussões técnicas, identificou-se a necessidade de maior separação de responsabilidades entre as camadas da aplicação, bem como maior flexibilidade no desenvolvimento da interface do usuário.

Além disso, não há restrições de tecnologias impostas ao projeto, e a equipe de desenvolvimento possui experiência e conforto no uso de React com TypeScript para desenvolvimento de interfaces web modernas.

Outro fator considerado foi a necessidade de manter o processo de implantação do sistema simples, evitando complexidade operacional desnecessária.

Diante desses fatores, tornou-se relevante reavaliar a decisão inicial de arquitetura.

## Decisão

Decidiu-se substituir a arquitetura monolítica previamente considerada por uma arquitetura cliente-servidor, na qual:

- O frontend será uma aplicação independente desenvolvida em React + TypeScript.
- O backend será responsável pelas regras de negócio, acesso a dados e exposição de serviços.
- A comunicação entre frontend e backend será realizada por meio de API REST.

Essa abordagem permite:

- Separação clara entre apresentação e lógica de negócio.
- Maior flexibilidade tecnológica entre as camadas.
- Desenvolvimento paralelo entre frontend e backend.

Melhor organização e manutenção do código ao longo do tempo.

Ao mesmo tempo, a arquitetura continuará sendo projetada de forma a manter a implantação simples, evitando a introdução de complexidade desnecessária na infraestrutura.

## Consequências

### Positivas

- Separação clara de responsabilidades entre frontend e backend.
- Possibilidade de desenvolvimento paralelo pelas equipes.
- Melhor experiência de desenvolvimento para o frontend utilizando React + TypeScript.
- APIs REST podem ser reutilizadas por outros clientes no futuro (ex: mobile).
- Maior flexibilidade para evolução tecnológica de cada camada.

### Negativas / Trade-offs

- Necessidade de definir e manter contratos de API entre frontend e backend.
- Introdução de comunicação via rede entre as camadas.
- Possível aumento de esforço inicial na definição da API.

### Neutras

- O processo de deploy precisará considerar dois componentes (frontend e backend), porém será mantido o foco em uma estratégia de implantação simples.
