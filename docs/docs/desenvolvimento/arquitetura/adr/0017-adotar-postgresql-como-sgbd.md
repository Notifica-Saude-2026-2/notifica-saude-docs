<h1 align="center">ADR-0017 — Usar SGBD PostgreSQL para dados de negócio</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 26/03/2026 | Registro da decisão de arquitetura. | Lucas Gonçalves Cordeiro, Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--metodologia">Substituída</span> <span>Data da decisão: 26/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Substituída por [ADR-0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md).

## Contexto

O sistema necessita de um mecanismo confiável para persistência dos dados de negócio. Esse mecanismo deve ser capaz de lidar com integridade de dados, concorrência de acessos, crescimento do volume de informações e garantir estabilidade operacional ao longo do tempo.

Além disso, considerando o contexto do projeto, é desejável utilizar uma solução gratuita, amplamente adotada no mercado, bem documentada e com grande suporte da comunidade.

Diversos Sistemas Gerenciadores de Banco de Dados (SGBDs) atendem a esses requisitos, incluindo alternativas como MySQL, MariaDB, entre outros. Diante dessas opções, foi necessário selecionar um SGBD que oferecesse robustez, escalabilidade e recursos avançados para suportar o crescimento do sistema.

## Decisão

Foi decidido utilizar o PostgreSQL como SGBD para armazenamento dos dados de negócio da aplicação.

O PostgreSQL é um banco de dados relacional open source amplamente consolidado no mercado, reconhecido por sua robustez, confiabilidade e aderência aos padrões SQL. Ele oferece suporte a recursos avançados como transações ACID completas, índices avançados, extensibilidade, suporte a JSON/JSONB e diversas estratégias de escalabilidade.

Essa escolha atende aos requisitos do projeto de utilizar uma solução gratuita, madura e com forte adoção pela comunidade e pela indústria.

## Consequências

### Positivas

- **Software livre e gratuito**: não há custos de licenciamento.
- **Alta confiabilidade**: forte suporte a transações ACID e integridade de dados.
- **Ampla adoção no mercado**: tecnologia madura e bem documentada.
- **Grande comunidade**: facilidade para encontrar suporte, ferramentas e boas práticas.
- **Recursos avançados**: suporte a JSON/JSONB, índices avançados, extensões e funcionalidades analíticas.
- **Boa escalabilidade**: suporte a replicação, particionamento e estratégias de escalabilidade horizontal.
- **Compatibilidade com padrões SQL**: forte aderência ao padrão SQL, facilitando manutenção e portabilidade.

### Negativas

- **Administração especializada**: algumas otimizações e configurações podem exigir maior conhecimento técnico.
- **Consumo de recursos**: em alguns cenários pode consumir mais memória que alternativas mais simples.
- **Curva de aprendizado**: recursos avançados podem exigir maior familiaridade da equipe.
- **Migração futura pode ser custosa**: mudança de SGBD posteriormente pode exigir ajustes em queries, migrações e ferramentas.

### Alternativas consideradas

#### MySQL

O MySQL é um SGBD relacional amplamente utilizado e também atenderia aos requisitos do sistema.

**Motivos para não adoção:**

- Menor aderência histórica ao padrão SQL em comparação ao PostgreSQL.
- Menor flexibilidade para alguns recursos avançados oferecidos nativamente pelo PostgreSQL.
- A equipe considera o PostgreSQL mais robusto para cenários com maior complexidade de dados.

#### Outros SGBDs relacionais

Outras soluções como MariaDB ou bancos proprietários também poderiam atender aos requisitos.

**Motivos para não adoção:**

- Bancos proprietários podem envolver custos de licenciamento.
- Algumas alternativas possuem menor adoção ou menor maturidade em comparação ao PostgreSQL.
- O PostgreSQL apresenta melhor equilíbrio entre custo, maturidade, recursos avançados e suporte da comunidade.
