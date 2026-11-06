<h1 align="center">ADR-0016 — Usar arquitetura multi-tenancy</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 26/03/2026 | Registro da decisão de arquitetura. | Lucas Gonçalves Cordeiro |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 26/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

O sistema será utilizado por múltiplas instituições distintas, cada uma possuindo seus próprios dados e usuários. É necessário garantir isolamento lógico entre os dados dessas instituições, de forma que uma organização não possa acessar informações de outra.

Ao mesmo tempo, administradores do sistema precisam ter a capacidade de acessar dados de forma global para fins de suporte, auditoria, análise e administração da plataforma.

Também existe a preocupação com escalabilidade futura, especialmente no que se refere ao crescimento do volume de dados e número de instituições atendidas.

Diante desses requisitos, foi avaliada a adoção de uma arquitetura multi-tenancy que permita compartilhar a mesma infraestrutura e banco de dados entre diferentes instituições, mantendo o isolamento lógico entre os dados.

## Decisão

Foi decidido adotar uma arquitetura multi-tenancy baseada em compartilhamento de banco de dados e tabelas, utilizando uma coluna `tenant_id` em cada tabela para identificar a qual instituição cada registro pertence.

Todas as consultas da aplicação deverão considerar o `tenant_id` para garantir o isolamento lógico entre os dados das instituições.

Essa abordagem também permite, caso necessário no futuro, a implementação de estratégias de **sharding** do banco de dados baseadas no `tenant_id`, possibilitando distribuir os dados entre diferentes bancos ou servidores para melhorar a escalabilidade do sistema.

## Consequências

### Positivas

- **Uso eficiente de recursos**: múltiplos tenants compartilham a mesma infraestrutura de banco de dados.
- **Menor custo operacional**: reduz a necessidade de gerenciar múltiplos bancos ou instâncias de banco de dados.
- **Facilidade de manutenção**: atualizações de schema são realizadas uma única vez para todos os tenants.
- **Escalabilidade futura**: possibilita implementar sharding baseado em `tenant_id`.
- **Simplicidade de provisionamento**: adicionar um novo tenant não exige criação de novos bancos ou schemas.
- **Facilidade de administração global**: administradores podem acessar dados de múltiplos tenants de forma centralizada quando necessário.

### Negativas

- **Risco de falhas de isolamento lógico**: erros de implementação nas consultas podem expor dados de outros tenants.
- **Complexidade na aplicação**: todas as consultas precisam considerar o `tenant_id`.
- **Consultas potencialmente mais complexas**: filtros adicionais podem impactar a legibilidade e manutenção do código.
- **Maior cuidado em testes**: é necessário garantir que todas as operações respeitem o isolamento entre tenants.
- **Possível crescimento das tabelas**: o compartilhamento de tabelas pode resultar em grandes volumes de dados em uma única tabela.

### Alternativas consideradas

#### Banco de dados separado por tenant

Nesta abordagem, cada instituição teria seu próprio banco de dados independente.

**Motivos para não adoção:**

- Aumenta significativamente a complexidade operacional.
- Provisionamento de novos tenants exige criação e configuração de novos bancos.
- Atualizações de schema precisam ser executadas em múltiplas bases.
- Maior custo de infraestrutura e manutenção.

#### Schema separado por tenant

Nesta abordagem, cada tenant teria seu próprio schema dentro do mesmo banco de dados.

**Motivos para não adoção:**

- Aumenta a complexidade de gerenciamento de schemas à medida que o número de tenants cresce.
- Migrações de banco de dados tornam-se mais complexas.
- Pode gerar dificuldades para operações administrativas globais.
- Ainda exige processos adicionais para criação e manutenção de schemas para cada tenant.

A abordagem de **multi-tenancy com coluna `tenant_id`** foi escolhida por oferecer um melhor equilíbrio entre simplicidade operacional, escalabilidade e custo de manutenção.
