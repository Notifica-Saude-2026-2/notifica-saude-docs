<h1 align="center">ADR-0023 — Adotar bytea no PostgreSQL para os anexos de evidência</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura, a partir da ADR-0004 do repositório do backend. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 27/10/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0016](0016-adotar-multitenancy.md), [ADR-0019](0019-adotar-mailer-service-com-factory-de-providers.md) e [ADR-0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md).

## Contexto

A atualização de andamento de uma ação do plano (US-5.6 CA11 e CA12) aceita anexos de evidência. A RN-25 permite PDF, DOCX, PNG e JPG/JPEG, com até 10 anexos por ação e 10 MB por arquivo, e exige validação no servidor. Até o Épico 5, o backend não tinha nenhuma estrutura de upload ou de armazenamento de arquivos, e o deploy não tinha volume para isso.

O isolamento entre instituições é feito por `tenant_id` em tabelas compartilhadas, filtrado na aplicação ([ADR-0016](0016-adotar-multitenancy.md) e [ADR-0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md)).

## Decisão

Os anexos ficam na tabela `anexo_acao`, com os bytes numa coluna `bytea`, mais nome, tipo, tamanho, `tenant_id` e o vínculo com a atualização de andamento em que foram enviados. O módulo de plano de ação acessa o PostgreSQL diretamente, sem interface ou provider de armazenamento.

- O upload passa pelo `multer` em memória, com 10 MB por arquivo. O tipo é conferido pela assinatura dos bytes, e não só pela extensão.
- O limite de 10 anexos por ação, somando todas as atualizações, é conferido dentro da transação, com a notificação travada.
- Os bytes nunca entram nos `SELECT` comuns. O download é um `GET` na API, com a mesma checagem de acesso da leitura do plano (tenant e setor, RN-26) e `Cache-Control: private, no-store`.
- Nenhum anexo é removido depois de salvo. A exclusão de ação é lógica ([ADR-0027](0027-adotar-trilha-de-auditoria-do-plano-de-acao.md)).

## Consequências

### Positivas

- Nenhuma infraestrutura nova: o backup do banco já inclui as evidências.
- O isolamento dos anexos é o mesmo das demais tabelas do domínio.
- O vínculo entre o arquivo e o registro é garantido pelo banco, e não por convenção de nome.

### Negativas

- O banco cresce com os anexos (até 100 MB por ação).
- Tirar os bytes para outro armazenamento depois exige migrar dados reais. Por isso a decisão é difícil de reverter.
- A transação da atualização de andamento pode gravar até 100 MB com a notificação travada. As assinaturas são conferidas antes de abrir a transação, e o timeout dela é de 30 s.

## Alternativas consideradas

- **Volume do Docker:** exigiria um volume novo no deploy e um backup separado, e o vínculo entre arquivo e linha ficaria só por convenção de nome.
- **S3 ou MinIO:** mais um serviço para operar, sem necessidade no volume atual.
- **`bytea` atrás de uma interface `StorageService`**, no padrão do mailer ([ADR-0019](0019-adotar-mailer-service-com-factory-de-providers.md)): seria uma interface com uma única implementação. Fica para quando existir a segunda.

## Links

- [ADR-0004 do backend — Anexos de evidência em bytea](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/blob/develop/docs/adr/0004-anexos-de-evidencia-em-bytea.md)
- [PR #13 (backend) — Plano de ação na forma da spec v3](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13)
