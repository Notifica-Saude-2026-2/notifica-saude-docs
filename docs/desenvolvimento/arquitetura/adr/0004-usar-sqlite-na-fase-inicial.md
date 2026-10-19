<h1 align="center">ADR-0004 — Utilizar SQLite na fase inicial do NotificaSaúde</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 11/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--outro">Descontinuada</span> <span>Data da decisão: 11/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Descontinuada

Substituída por [ADR-0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md).

## Contexto

O NotificaSaúde será implantado inicialmente em entidades parceiras com ambiente operacional controlado, equipe reduzida e necessidade de baixo custo de adoção.

Nessa fase, é importante minimizar dependências de infraestrutura para facilitar instalação, manutenção e suporte técnico. Exigir um servidor de banco de dados dedicado desde o início aumentaria a complexidade de implantação para as entidades e criaria uma barreira desnecessária para validar o produto.

Ao mesmo tempo, a solução precisa preservar um caminho claro de evolução para um SGBD mais robusto caso o sistema cresça em volume de usuários, dados ou concorrência.

## Decisão

Foi decidido utilizar o **SQLite** como banco de dados na fase inicial do NotificaSaúde.

Essa escolha busca facilitar a implantação nas entidades parceiras, evitando a necessidade imediata de administrar um SGBD dedicado, sem bloquear uma futura migração para tecnologias como **PostgreSQL** ou outro banco relacional mais robusto.

## Consequências

### Consequências positivas

- Implantação simplificada, com menos dependências de infraestrutura
- Redução do esforço operacional nas entidades parceiras
- Menor custo inicial de adoção e manutenção
- Maior agilidade para provisionar ambientes de desenvolvimento, teste e piloto
- Facilidade para distribuição da aplicação em cenários institucionais menores

### Consequências negativas

- Limitações de concorrência e escalabilidade em comparação com SGBDs servidores
- Menor capacidade para cenários com alto volume de escrita simultânea
- Restrições operacionais para crescimento multi-institucional ou cargas mais intensas

### Mitigações

Para preservar a possibilidade de evolução futura, a aplicação deverá:

- utilizar abstrações de acesso a dados compatíveis com outros bancos relacionais
- evitar dependência excessiva de particularidades exclusivas do SQLite
- manter migrações e modelos de dados portáveis
- considerar desde cedo a compatibilidade com PostgreSQL como alvo preferencial de evolução

Caso a solução avance para maior escala, múltiplas instituições ou necessidade de maior concorrência, esta decisão deverá ser revisada para adoção de um SGBD dedicado.
