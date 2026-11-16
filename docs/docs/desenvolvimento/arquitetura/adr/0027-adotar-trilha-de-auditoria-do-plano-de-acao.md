<h1 align="center">ADR-0027 — Adotar trilha de auditoria no plano de ação, com atualizações só de inclusão e exclusão lógica</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 27/10/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0023](0023-adotar-anexos-de-evidencia-em-bytea.md).

## Contexto

Cada ação do plano recebe atualizações de andamento (US-5.4 a US-5.7): situação, datas reais, o que foi realizado, motivo do atraso ou do cancelamento, resultado observado, efetividade e anexos de evidência. O protótipo sobrescrevia esses campos na própria ação. A RN-02 registra no histórico que houve atualização, mas não guarda o conteúdo.

A US-5.4 CA05 e a RN-09 permitem excluir uma ação enquanto o incidente não estiver concluído. Com atualizações e anexos acumulados, excluir de verdade apagaria a evidência do tratamento de um incidente de segurança do paciente.

## Decisão

- **Atualizações só de inclusão:** cada atualização de andamento é uma linha nova na tabela `atualizacao_acao`, com autor, data e todos os campos da tela. A `acao_corretiva` guarda só uma cópia da situação atual e da nova previsão, para a tabela do plano. "Acompanhamento" e os detalhes leem a última atualização. Os anexos ficam ligados à atualização em que foram enviados.
- **Exclusão lógica de ação:** a ação excluída recebe `excluida_em` e `excluida_por`. Ela some da tabela do plano, do pré-preenchimento de recomendações, das contagens de status, da verificação da RN-23 e do limite de anexos, mas o registro, as atualizações e os anexos continuam no banco. O filtro `excluida_em IS NULL` fica concentrado no repositório do módulo. Não há tela de restaurar: para o usuário, a exclusão continua irreversível.
- O `HistoricoModificacao` continua registrando só o fato ("andamento atualizado: X → Y", "ação N excluída"), sem servir de armazenamento.

## Consequências

### Positivas

- Toda evidência do tratamento fica preservada e pode ser auditada.
- Reabrir uma ação concluída ou cancelada não perde o rastro das atualizações anteriores.

### Negativas

- Toda consulta de ações precisa excluir as ações excluídas. Esquecer o filtro faz a ação reaparecer.
- O banco guarda dados que o usuário considera apagados, inclusive anexos.

## Alternativas consideradas

- **Sobrescrever os campos na ação**, como no protótipo: perderia o histórico do andamento.
- **Sobrescrever e guardar o formulário anterior em JSON no histórico de modificações:** misturaria auditoria de campo com armazenamento de conteúdo.
- **Exclusão física em cascata:** apagaria as evidências.
- **Exclusão física só sem atualização, com cancelamento nos demais casos:** divergiria da US-5.4 CA05.

## Links

- [PR #13 (backend) — Plano de ação na forma da spec v3](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13)
- [PR #18 (frontend) — Plano de ação do Épico 5](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18)
