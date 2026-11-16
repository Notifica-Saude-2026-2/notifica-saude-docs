<h1 align="center">ADR-0026 — Adotar controle de concorrência com trava da notificação e versão por updated_at</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 27/10/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0021](0021-adotar-postgresql-como-sgbd-com-multitenancy.md).

## Contexto

Várias pessoas trabalham ao mesmo tempo sobre o mesmo incidente. O NSP e o Gestor de Área editam o mesmo plano de ação, e nenhuma regra dá a ação a um autor só. Na análise, um profissional do NSP pode assumir a condução de quem estava editando (RN-28, issue #140). Isso cria três situações de risco:

1. Uma escrita concorre com a conclusão ou o arquivamento do incidente e grava dados num incidente em status final (RN-12).
2. Duas edições da mesma ação ou da mesma análise, em que a segunda apaga a primeira sem aviso (o PUT da ação substitui o registro inteiro).
3. Contagens e transições de status (primeira ação completa leva a "Em ação"; sugestão de conclusão da RN-23) calculadas em transações concorrentes.

## Decisão

Toda escrita que depende do status do incidente usa duas proteções:

- **Trava pessimista da notificação:** a transação começa com `SELECT … FOR UPDATE` na linha da notificação. Só depois disso confere o status (RN-07, RN-12) e grava. Isso vale para as escritas do plano de ação, a criação automática de ações na conclusão da análise, a decisão pós-análise, o salvamento e a conclusão da análise, a conclusão e o arquivamento do incidente. Contagens e transições de status são calculadas dentro dessa trava.
- **Versão otimista pelo `updated_at`:** o cliente envia o `updated_at` que leu. Se o registro mudou nesse meio-tempo, o servidor responde **409** e nada é gravado. Vale para a edição e a atualização de andamento da ação ("Esta ação foi alterada por outra pessoa. Recarregue para ver a versão atual.") e para o salvamento, a conclusão e a assunção da condução da análise (US-4.2 CA20).

Na análise, a ordem das verificações é fixa: acesso → status final → análise não concluída → versão (409) → detentor da análise (403).

## Consequências

### Positivas

- Nenhuma escrita entra num incidente concluído ou arquivado, mesmo em corrida.
- A perda silenciosa de edição vira um aviso claro para o usuário.
- O padrão é o mesmo em todos os módulos e não exige coluna nova de versão nem migration.

### Negativas

- Escritas no mesmo incidente ficam serializadas. Com o volume esperado, a espera é imperceptível.
- O `updated_at` precisa ser gravado com precisão de milissegundos, igual à que o cliente recebe, senão a comparação falha.
- O frontend precisa enviar o `updated_at` em toda escrita e tratar o 409.

## Alternativas consideradas

- **Só a trava, sem versão:** a última gravação venceria, e a edição anterior se perderia sem aviso.
- **Só conferir o status, sem trava:** não protege contra a corrida entre uma escrita e a conclusão do incidente.
- **Coluna de versão própria (contador):** daria o mesmo resultado que o `updated_at`, com uma migration a mais.

## Links

- [PR #13 (backend) — Plano de ação na forma da spec v3](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13)
- [PR #14 (backend) — Status e ciclo de vida do incidente](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/14)
- [PR #19 (backend) — Assumir a condução da análise, com controle de versão](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/19)
