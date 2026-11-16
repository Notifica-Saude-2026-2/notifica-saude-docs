<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes Unitários

Épico 7 - Exportação do Relatório de Incidentes · Relatório da instituição e do setor em XLSX · US-7.1 e US-7.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Unit_RelatorioIncidentes_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/epico-7/relatorio</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_RelatorioIncidentes_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](relatorio-incidentes-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes unitários da exportação do relatório de incidentes (Épico 7). | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

Esta entrega cria o **Relatório de Incidentes em XLSX**, gerado no servidor e baixado pelo botão "Extrair dados". O NSP exporta todos os incidentes da instituição (US-7.1); o Gestor da Área, só os encaminhados ao seu setor (US-7.2). O arquivo tem as abas Resumo, Incidentes e Plano de ação, ignora a busca e os filtros da tela (RN-30) e **nunca leva o nome nem o contato do notificante, nem o número do prontuário** (RN-29, RN-31). O Administrador é recusado (US-7.1, CA10). Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente.<br>Os 866 testes passaram, incluindo os 48 criados nesta entrega.</span></div>
<div><span class="ns-rel-icone">✓</span><strong>Frontend (tela)</strong><span>Regras do botão testadas automaticamente.<br>Os 68 testes passaram, incluindo os 5 criados nesta entrega.</span></div>
</div>

Em resumo: **a montagem do relatório foi comprovada peça por peça**: as colunas de cada aba, o escopo de cada perfil, o fuso das datas, o nome do arquivo, as cores e os textos de retorno ao usuário. Os arquivos alterados pela entrega têm **98,88% das linhas testadas** no servidor.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o servidor foi testado?

<p class="ns-rel-meta">PRs: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/18 e /pull/25 · Executado em 16/11/2026 sobre o commit 113dcac (main) · Pipeline de Testes da PR #18 aprovada na CI em 11/11/2026</p>

<div class="ns-rel-placar">
<div><strong>866</strong><span>testes executados</span></div>
<div><strong>866</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 48 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Aba Incidentes</strong> (<code>relatorio.linhas.spec.ts</code>, 13 testes novos): as colunas da especificação na ordem, com a coluna "Anônima" só no relatório do NSP (US-7.1, CA06; US-7.2, CA03); os rótulos de status e o código como a tela os mostra; a data do incidente como dia e os demais registros com data e hora; o texto de "Outro"; a classificação em rascunho tratada como não classificada; o Never Event sem tipo; a análise em andamento sem conteúdo (Q5); quem analisou, conforme o momento do encaminhamento; a "Última atualização" tirada do histórico (Q6); as medidas imediatas; e a contagem de ações do plano.</li>
<li><strong>Aba Plano de ação</strong> (<code>relatorio.linhas.spec.ts</code>, 7 testes novos): as colunas do CA07 na ordem, com a "Nova previsão de conclusão" ao lado da previsão; a ação incompleta como "Preenchimento pendente" (RN-20); as datas reais e a efetividade vindas do andamento; a nova previsão só na ação atrasada; a cor da situação igual à da tabela do plano; e os campos vazios e o "Outro" em "Onde".</li>
<li><strong>Quem exporta e o que recebe</strong> (<code>relatorio.service.spec.ts</code>, 12 testes novos): o Administrador e o notificante são recusados pelo próprio serviço (US-7.1, CA10); o NSP recebe a instituição inteira, com a coluna "Anônima" e o arquivo <code>…-instituicao-…</code>; o gestor recebe só a fila do setor, sem "Anônima", com o nome do setor no escopo e no arquivo (US-7.2, CA02 a CA04); o gestor sem setor é recusado; a exportação vai para o log e não para o histórico (Q7); e um fuso inválido na configuração cai no de Campo Grande, com aviso, em vez de derrubar a exportação (Q2).</li>
<li><strong>Planilha</strong> (<code>relatorio.planilha.spec.ts</code>, 9 testes novos): as três abas (CA04); o Resumo com os dados do relatório e a contagem por status (CA05); as datas no fuso local e o status com a cor do sistema (CA06, CA08); a data local no nome do arquivo, mesmo quando em UTC já é o dia seguinte; o setor no nome sem acento nem espaço; os metadados sem o nome de quem gerou (RNF 6.3.5); o texto que começa com "=" gravado como texto, nunca como fórmula; e o arquivo zerado, com a mensagem do plano, quando não há incidentes (Q10).</li>
<li><strong>Rótulos e cores</strong> (<code>relatorio.rotulos.spec.ts</code>, 3 testes novos): os rótulos de status e as cores de status e de grau do dano são os mesmos da tela, para o arquivo não divergir do que o usuário vê (Q8).</li>
<li><strong>Escopo de Acesso</strong> (<code>acesso-setor.spec.ts</code>, 4 testes novos): a mesma regra serve à lista e ao relatório (Q3): o NSP vê a instituição; o gestor vê só o que foi encaminhado ao seu setor (RN-26); o gestor sem setor é recusado; e o Administrador não tem restrição de instituição.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Correção sem cenário unitário novo:** a PR #25, que faz a busca da lista achar o incidente pelo código como a tela o mostra (com zeros à esquerda e com "#"), só atualizou o comentário do `notificacao.listar.queries.spec.ts`. Os cenários da correção estão no relatório de integração. Todas as outras suítes unitárias passaram sem alteração.</div>

### Frontend: as regras do botão

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/26 · Executado em 16/11/2026 sobre o commit d205664 (main) com <code>node --test</code> · Frontend CI da PR aprovada em 10/11/2026</p>

<div class="ns-rel-placar">
<div><strong>68</strong><span>testes executados</span></div>
<div><strong>68</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

<ul class="ns-rel-checks">
<li><strong>Retorno ao usuário</strong> (<code>relatorioIncidentes.test.ts</code>, 3 testes novos): "Relatório gerado com 1 incidente." no singular e "…com N incidentes." no plural; sem um total confiável no cabeçalho <code>X-Total-Incidentes</code>, o aviso diz só "Relatório gerado." em vez de afirmar "0 incidentes"; e o aviso de erro "Não foi possível gerar o relatório. Tente novamente." (US-7.1, CA09; US-7.2, CA05).</li>
<li><strong>Quem vê o botão</strong> (1 teste novo): só o NSP e o Gestor da Área; o Administrador não (US-7.1, CA10).</li>
<li><strong>Nome do arquivo</strong> (1 teste novo): o nome vem do cabeçalho <code>Content-Disposition</code> do servidor, com o <code>filename*</code> em UTF-8 antes do nome ASCII (US-7.1 e US-7.2, CA04).</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido. Os números abaixo somam todos os arquivos de código do servidor alterados pelas PRs #18 e #25 que entram na medição unitária.</p>

<div class="ns-rel-barra" style="--v:98.88%;--meta:80%"><div><span>Linhas de código testadas</span><b>98,88%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.03%;--meta:85%"><div><span>Funções testadas</span><b>96,03%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.59%;--meta:80%"><div><span>Instruções testadas</span><b>98,59%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90.04%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>90,04%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">As poucas linhas descobertas no teste unitário estão em <code>relatorio.linhas.ts</code> (linhas 335, 349 e 350: o valor das colunas "Nº", "Previsão de início" e "Previsão de conclusão" da aba Plano de ação) e em <code>relatorio.planilha.ts</code> (linhas 272, 303 e 317: a ordem dos setores no Resumo, a cor do grau do dano e a cor da situação das ações). Todas são exercitadas na suíte de integração. A linha descoberta de <code>notificacao.service.ts</code> (341) não é desta entrega.</p>

### Arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `shared/lib/acesso-setor.ts` | 100% | 100% | 100% |
| `relatorio/relatorio.service.ts` | 100% | 100% | 96,55% |
| `relatorio/relatorio.rotulos.ts` | 100% | — | — |
| `shared/lib/historico-eventos.ts` | 100% | 100% | — |
| `notificacao/constants.ts` | 100% | — | — |
| `relatorio/relatorio.planilha.ts` | 99,28% | 94,44% | <span class="ns-rel-baixo">76,79%</span> |
| `notificacao/notificacao.service.ts` | 98,97% | 96,67% | 92,54% |
| `relatorio/relatorio.linhas.ts` | 97,41% | 95,95% | 92,52% |

<p class="ns-rel-legenda">"—" indica um arquivo sem funções ou sem desvios a medir (só constantes). Os branches de <code>relatorio.planilha.ts</code> ficam abaixo da meta por causa dos valores padrão da conversão de fuso (linha 76), que só entram se o <code>Intl</code> deixar de devolver uma parte da data, e das linhas sem grau do dano ou sem ações, cobertas na integração.</p>

<div class="ns-rel-info" markdown>

Rotas e repositórios (`relatorio.routes.ts`, `relatorio.repository.ts`, `notificacao.repository.ts` e `plano-acao.repository.ts`) e o `app.ts` ficam fora da medição unitária por política do projeto (`jest-unit.config.js`) e são medidos no relatório de integração.

**Frontend:** `relatorioIncidentes.ts` tem 100% das linhas, das funções e dos branches. `contentDisposition.ts` tem 86,67% das linhas e 84,62% dos branches; ficam de fora as linhas 10 e 11, a volta ao nome ASCII quando o `filename*` vem com uma codificação inválida. O botão (`ExtrairDadosButton.tsx`) e o serviço de download não têm teste unitário, porque o frontend não tem testes de componente; eles são conferidos nos relatórios end-to-end das [US-7.1](relatorio-incidentes-us-7-1-e2e.md) e [US-7.2](relatorio-incidentes-us-7-2-e2e.md).

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo — não só esta entrega — a cobertura unitária está **acima da meta do Plano de Testes em todas as métricas**:

<div class="ns-rel-barra" style="--v:98.33%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>98,33%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.03%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>98,03%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:97.39%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>97,39%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:91.21%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>91,21%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — todas as barras já passaram dela. As travas por módulo do <code>jest-unit.config.js</code> (notificação, autenticação, classificação, encaminhamento e mailer) também foram atendidas. Em relação ao relatório do ciclo de vida (Épico 6), as linhas subiram de 98,14% para 98,33% e as instruções de 97,78% para 98,03%; as funções recuaram de 97,74% para 97,39% e os branches de 91,29% para 91,21%. O módulo novo, <code>relatorio</code>, fechou com 98,69% das linhas e 88,54% dos branches.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura unitária no projeto são `localidade.schema.ts` (0%), `metrics.middleware.ts` (54,54%) e `error.handler.ts` (72,5%). Nenhum deles foi alterado nesta entrega.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas em 16/11/2026 sobre a main do backend (113dcac) e do frontend (d205664)</p>

<ul class="ns-rel-checks">
<li><strong>Qualidade do código:</strong> nenhum problema encontrado pela revisão automática (<code>oxlint</code>: 0 avisos e 0 erros em 307 arquivos do backend e em 206 do frontend).</li>
<li><strong>Verificação de tipos:</strong> o TypeScript compila sem erros nos dois repositórios (<code>tsc --noEmit</code> no backend e <code>tsc -b</code> no frontend).</li>
<li><strong>Esteira das PRs:</strong> na PR #18 do backend, "Pipeline de Testes" e "Qualidade de Código" foram aprovadas em 11/11/2026 no último commit (4643e14), junto com o SonarCloud e o <code>codecov/patch</code>; na PR #26 do frontend, "Frontend CI", a auditoria Lighthouse e o SonarCloud foram aprovados no último commit (e44a110). Na PR #25 do backend, os jobs não chegaram a rodar: o GitHub Actions da organização está parado por um problema de cobrança. Por isso, a suíte foi executada localmente sobre a main, que já contém as duas PRs.</li>
<li><strong>Validação na tela:</strong> segundo a PR #18, a tela e o arquivo foram conferidos para o NSP, o gestor e o Administrador, e uma varredura do XLSX não achou nome, contato nem prontuário.</li>
</ul>

<div class="ns-rel-citacao">A decisão de gerar o arquivo no servidor, e não no navegador como no protótipo, está registrada na ADR-0005 do backend: assim o escopo e o sigilo são garantidos pelo servidor, e não pela tela.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches de `relatorio.planilha.ts` (76,79%):** um teste unitário com incidentes de vários setores, com grau do dano e com ações levaria a planilha acima da meta também no unitário, sem depender da integração.
- **`contentDisposition.ts`:** falta o caso do `filename*` com codificação inválida, que deve cair no nome ASCII.
- **Validação com as proponentes:** a coluna "Nova previsão de conclusão" na aba Plano de ação e o aviso "Relatório gerado." (sem o total) não estão na especificação e foram implementados como propostas.
- **Sessão expirada no download:** hoje vira o aviso genérico de erro. O comportamento é anterior ao épico e ficou registrado para decisão à parte.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/18) | Relatório de incidentes em XLSX gerado no servidor, mesclado em 11/11/2026 |
| [PR backend #25](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/25) | Busca do incidente pelo código como a tela o mostra, mesclada em 15/11/2026 |
| [PR frontend #26](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/26) | Botão "Extrair dados", mesclado em 11/11/2026 |
| `tests/unit/modules/relatorio/` | `relatorio.linhas.spec.ts`, `relatorio.service.spec.ts`, `relatorio.planilha.spec.ts` e `relatorio.rotulos.spec.ts` |
| `tests/unit/shared/lib/acesso-setor.spec.ts` | Escopo de Acesso compartilhado entre a lista e o relatório |
| `tests/relatorioIncidentes.test.ts` (frontend) | Textos de retorno, perfis com o botão e nome do arquivo |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-7.1, US-7.2 e as regras RN-26, RN-27, RN-29, RN-30 e RN-31 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório de integração](relatorio-incidentes-integracao.md) | `REL_Testes_Int_RelatorioIncidentes_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Unit_RelatorioIncidentes_v1_0 — compilado a partir da execução da suíte unitária do backend (Jest com cobertura) no commit 113dcac do repositório Notifica-Saude-2026-2/notifica-saude-backend e da suíte do frontend (node --test com cobertura) no commit d205664 do repositório Notifica-Saude-2026-2/notifica-saude-frontend, em 16/11/2026.</p>

</div>

</div>
