<h1 align="center">Relatórios de Testes</h1>

<p align="center"><strong>Mantenedores:</strong> Brenno Ostemberg</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 06/10/2026 | Criação da seção, com os relatórios unitário e de integração da análise do incidente (Seções 1 e 2). | Brenno Ostemberg |

Conforme a [Definição de Pronto](../../gcs/definicao-de-pronto.md#dod-testes), uma história ou tarefa só é considerada pronta quando tem os relatórios de testes que comprovam sua validação. Esta seção reúne esses relatórios, um por entrega e por nível de teste. Cada página também pode ser baixada em PDF, o formato exigido na entrega.

## Como cada relatório é organizado

Todos seguem a mesma estrutura, para que possam ser lidos por quem não acompanha o código:

1. **Resumo em uma olhada** — o que foi entregue e a situação do backend e do frontend.
2. **Execução** — testes executados, aprovados e com falha, e os cenários adicionados ou alterados.
3. **Cobertura da entrega** — quanto do código alterado foi exercitado pelos testes.
4. **Cobertura do projeto** — as métricas globais comparadas às [metas do Plano de Testes](../plano-de-testes.md#cobertura).
5. **Verificações complementares** — revisão automática, tipos, CI e verificações manuais, quando não houver teste automatizado.
6. **O que falta fazer** — cenários sem cobertura e automações recomendadas.
7. **Referências** — Pull Requests, arquivos de teste e documentos relacionados.

## Relatórios por entrega

| Entrega | Branch | Unitário | Integração |
| --- | --- | --- | --- |
| Épico 4 - Análise do Incidente · Seções 1 e 2 (US-4.1 a US-4.4, US-6.2) | `feat/56/implementa-analise-secao-1-e-2` | [Página](analise-secoes-1-2-unitario.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_Analise_S1S2_v1_0.pdf) | [Página](analise-secoes-1-2-integracao.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_Analise_S1S2_v1_0.pdf) |
