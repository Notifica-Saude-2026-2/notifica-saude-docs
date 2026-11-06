<h1 align="center">ADR-0018 — Usar Redis para armazenar dados de autenticação</h1>

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

O sistema necessita de um mecanismo eficiente para gerenciar dados relacionados à autenticação, como sessões de usuários e possíveis listas de revogação de tokens de acesso autoassinados (self-signed), como JSON Web Tokens (JWT).

Como tokens JWT são normalmente stateless, torna-se necessário um mecanismo adicional para suportar cenários como logout, invalidação de sessões ou revogação antecipada de tokens comprometidos. Esses dados precisam ser armazenados em um repositório que permita leitura e escrita com baixa latência e que suporte expiração automática de chaves.

Além disso, existe a possibilidade de utilizar essa infraestrutura futuramente para outros propósitos relacionados a desempenho, como armazenamento de cache de dados frequentemente acessados.

Diante desses requisitos, foi considerada a adoção de um banco de dados do tipo chave-valor otimizado para operações rápidas e suporte a TTL (time-to-live).

## Decisão

Foi decidido utilizar Redis como armazenamento para dados relacionados à autenticação, como sessões de usuários e listas de revogação de tokens JWT.

O Redis é um banco de dados em memória do tipo chave-valor, projetado para operações extremamente rápidas e com suporte nativo a expiração automática de chaves. Essas características o tornam adequado para gerenciar sessões e tokens temporários.

Além disso, sua adoção permite que a mesma infraestrutura seja utilizada futuramente para outras necessidades da aplicação, como cache de dados ou mecanismos de rate limiting.

## Consequências

### Positivas

- **Alta performance**: operações extremamente rápidas devido ao armazenamento em memória.
- **Suporte a expiração automática**: chaves podem ser configuradas com TTL, ideal para sessões e tokens.
- **Modelo chave-valor simples**: facilita o armazenamento e recuperação de dados de autenticação.
- **Redução de carga no banco relacional**: evita que dados temporários sejam armazenados no banco principal.
- **Versatilidade**: pode ser utilizado para outros propósitos como cache, rate limiting ou filas.
- **Ampla adoção no mercado**: tecnologia consolidada e bem documentada.

### Negativas

- **Dependência de infraestrutura adicional**: adiciona mais um componente à arquitetura.
- **Consumo de memória**: como opera primariamente em memória, pode exigir maior disponibilidade de RAM.
- **Gerenciamento operacional**: requer monitoramento e manutenção adicionais.
- **Persistência limitada**: embora possua mecanismos de persistência, não é ideal para armazenamento de dados críticos de longo prazo.

### Alternativas consideradas

#### Armazenamento no banco relacional (PostgreSQL)

Uma alternativa seria armazenar sessões e listas de revogação diretamente no banco relacional principal.

**Motivos para não adoção:**

- Operações de autenticação são frequentes e poderiam gerar carga desnecessária no banco de dados relacional.
- O banco relacional não é otimizado para armazenamento de dados altamente voláteis com expiração frequente.
- Maior complexidade para gerenciar expiração automática de sessões.

#### Armazenamento apenas em memória da aplicação

Outra alternativa seria manter sessões ou tokens revogados apenas em memória na própria aplicação.

**Motivos para não adoção:**

- Não funciona bem em cenários com múltiplas instâncias da aplicação.
- Dados seriam perdidos em reinicializações da aplicação.
- Dificulta escalabilidade horizontal.

A adoção do Redis oferece um bom equilíbrio entre desempenho, simplicidade e flexibilidade para lidar com dados temporários relacionados à autenticação.
