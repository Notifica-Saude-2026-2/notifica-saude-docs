<h1 align="center">ADR-0029 — Adotar o plano de ação como container magro, sem campos próprios</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura, a partir da ADR-0001 do repositório do backend, com a revisão de 27/10/2026. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 09/09/2026 (revista em 27/10/2026)</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

O `PlanoAcao` agrupa as ações de uma análise. Todos os critérios de aceite do Épico 5 descrevem campos de **ação**; nenhum descreve campo de plano. A versão inicial do backend (US-5.1) tinha `status`, `descricao` e `prazo` no plano, mas o enum `StatusPlanoAcao` nunca era gravado.

A spec v3 não define estado para o plano: o andamento é de cada ação (Situação da Ação), e o encerramento é a conclusão do incidente (US-6.4). Ela também determina que, ao concluir a análise, cada recomendação gere uma ação com o "O que será feito?" preenchido (RN-19, US-4.8 CA07).

## Decisão

O plano de ação é mantido como uma tabela, mas **sem nenhum dado preenchido pelo usuário**: `plano_acao` tem só `id`, `investigacao_id` (`@unique`, de 0 a 1 plano por análise) e os timestamps.

Na revisão de 27/10/2026 (grill do Épico 5), `status`, `descricao`, `prazo` e o enum `StatusPlanoAcao` saíram do schema. O plano nasce de dois jeitos:

- **na conclusão da análise, quando há pelo menos uma recomendação.** O sistema cria uma ação pendente de preenchimento por recomendação, ligada à recomendação de origem;
- **na primeira ação registrada.** A rota `POST /notificacoes/:id/plano-acao/acoes` cria o plano se ele não existir, sob a trava da notificação ([ADR-0026](0026-adotar-controle-de-concorrencia-com-trava-e-versao.md)), sem o antigo 409 de "plano já existe".

## Consequências

### Positivas

- A spec trata o "plano de ação" como unidade na interface e na matriz RBAC, e a tabela dá nome a esse conjunto ao custo de um join.
- Não há estado do plano para manter coerente com o estado das ações.

### Negativas

- Se um requisito futuro der dado próprio ao plano, ele entra com nome novo e explícito, por migration.

## Alternativas consideradas

- **Colapsar a entidade**, ligando as ações direto à análise e apagando `plano_acao`: nenhum dado exigido seria perdido, mas o conceito usado pela spec e pela interface deixaria de existir no modelo.

## Links

- [ADR-0001 do backend — Plano de ação como container magro](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/blob/develop/docs/adr/0001-plano-de-acao-como-container-magro.md)
- [PR #7 (backend) — US-5.1 e US-5.2](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/7)
- [PR #13 (backend) — Plano de ação na forma da spec v3](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13)
