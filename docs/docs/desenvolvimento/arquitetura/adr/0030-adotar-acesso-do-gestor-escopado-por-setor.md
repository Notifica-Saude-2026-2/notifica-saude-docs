<h1 align="center">ADR-0030 — Adotar acesso do Gestor de Área escopado por setor</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura, a partir da ADR-0002 do repositório do backend. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 09/09/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0016](0016-adotar-multitenancy.md).

## Contexto

A US-4.1 CA04 manda impedir o acesso de quem não é responsável pela notificação. O middleware `rbac()` sozinho não atende a essa regra: ele responde "é um GESTOR_AREA?", nunca "é o gestor **desta** notificação?".

O sistema já assume vários gestores por setor: o e-mail de encaminhamento é enviado a todos os gestores ativos do setor de destino.

## Decisão

Leitura e escrita de notificação, análise e plano de ação exigem duas camadas:

- o **perfil**, via `rbac()`, no middleware;
- quando o perfil é `GESTOR_AREA`, o **setor**: o incidente precisa ter sido encaminhado ao setor do usuário (RN-26). Essa checagem fica no service, porque o middleware não tem acesso à notificação.

O NSP não tem restrição de setor dentro da própria instituição: a RN-07 dá ao núcleo o direito de atuar em qualquer notificação.

## Consequências

### Positivas

- O gestor da Pediatria não lê nem planeja sobre notificações do Centro Cirúrgico.
- Qualquer gestor do setor pode continuar o trabalho de um colega de plantão.

### Negativas

- Liberar `GESTOR_AREA` num `rbac()` sem a checagem de setor no service abre vazamento entre setores. As duas mudanças precisam andar juntas.
- A regra de escopo precisa estar centralizada, para que a listagem, o detalhe e o relatório ([ADR-0024](0024-adotar-relatorio-de-incidentes-gerado-no-servidor.md)) não divirjam.

## Alternativas consideradas

- **Só o perfil:** o gestor de um setor acessaria as notificações de outros setores.
- **Perfil, setor e autoria** (só o gestor que abriu a análise): travaria o colega de plantão, e nenhum requisito pede exclusividade individual. A unidade de responsabilidade no domínio é o **setor**, não a pessoa.

## Links

- [ADR-0002 do backend — Acesso do Gestor de Área escopado por setor](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/blob/develop/docs/adr/0002-acesso-do-gestor-de-area-escopado-por-setor.md)
- [PR #7 (backend) — US-5.1 e US-5.2](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/7)
