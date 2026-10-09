<h1 align="center">Relatórios de Testes</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 06/10/2026 | Criação da seção, com os relatórios unitário e de integração da análise do incidente (Seções 1 e 2). | Brenno Ostemberg |
    | 1.1 | 06/10/2026 | Migração dos relatórios em PDF da verificação de captcha (Issue #12) e do bloqueio de encaminhamento (US-2.3 / Issue #11) para o modelo padronizado. | Brenno Ostemberg |
    | 1.2 | 06/10/2026 | Migração dos relatórios de cobertura de código do backend (unitário e integração, v1.0) e nova seção de cobertura do projeto. | Brenno Ostemberg |
    | 1.3 | 08/10/2026 | Inclusão da coluna End-to-End e do relatório end-to-end da US-4.2 (análise do incidente). | Catarina Freisleben |

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

## Cobertura de Código - Semestre 2026.1

Relatórios da cobertura do backend como um todo, por módulo, comparada às metas do Plano de Testes e às travas de cada módulo no Jest.

| Suíte | Branch · commit | Emissão | Relatório |
| --- | --- | --- | --- |
| Unitária | `main` · `32ef61f` | 09/06/2026 | [Página](cobertura-unitario.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Cobertura_Unitario_v1_0.pdf) |
| Integração | `main` · `32ef61f` | 09/06/2026 | [Página](cobertura-integracao.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Cobertura_Integracao_v1_0.pdf) |

## Relatórios por entrega

| Entrega | Branch | Unitário | Integração | End-to-End |
| --- | --- | --- | --- | --- |
| Épico 1 - Verificação de Captcha · Cloudflare Turnstile (Issue #12) | `feat/12/implementa-captcha-cloudflare` | [Página](issue-12-captcha-unitario.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_Captcha_v1_0.pdf) | [Página](issue-12-captcha-integracao.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_Captcha_v1_0.pdf) | — |
| Épico 2 - Bloqueio de Encaminhamento · Óbito / Never Event (US-2.3 / Issue #11) | `refactor/11/ajusta-encaminhamento-dos-incidentes` | [Página](us-2-3-bloqueio-encaminhamento-unitario.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_CA06_v1_0.pdf) | [Página](us-2-3-bloqueio-encaminhamento-integracao.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_CA06_v1_0.pdf) | — |
| Épico 4 - Análise do Incidente · Seções 1 e 2 (US-4.1 a US-4.4, US-6.2) | `feat/56/implementa-analise-secao-1-e-2` | [Página](analise-secoes-1-2-unitario.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_Analise_S1S2_v1_0.pdf) | [Página](analise-secoes-1-2-integracao.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_Analise_S1S2_v1_0.pdf) | US-4.2: [Página](analise-us-4-2-e2e.md) · [PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US42_v1_0.pdf) |
