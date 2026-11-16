<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 7 - Exportação do Relatório de Incidentes · Relatório do setor (Gestor da Área) · US-7.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_RelatorioIncidentes_US72_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Branch <code>test/73/automatiza-cts-us-7-1-e-7-2</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_RelatorioIncidentes_US72_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório da US-7.1](relatorio-incidentes-us-7-1-e2e.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes end-to-end da US-7.2 (exportar o relatório do setor), a partir da [PR #79 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/79). | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers. Aqui, os testes também **abrem o arquivo baixado** e conferem cada aba, célula e propriedade da planilha.</div>

A US-7.2 é a **exportação do relatório do setor pelo Gestor da Área**: o mesmo botão "Extrair dados", na lista do gestor, baixa um XLSX só com a fila do gestor — os incidentes que o NSP encaminhou ao seu setor, antes ou depois da análise —, em todos os status e sem efeito da tela (RN-26, RN-30). O arquivo tem as mesmas abas e formatação do relatório da instituição, o setor no nome e no escopo, e não tem o notificante, o prontuário nem a coluna "Anônima" (RN-27, RN-29, RN-31). Os quatro casos de teste da história (CT-FUN-158 a 161) e o percurso CT-E2E-042 foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Exportação do setor (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Os 5 critérios de aceite estão verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>Nenhum defeito no sistema</strong><span>Nenhum teste da história ficou como falha conhecida.</span></div>
</div>

Em resumo: **o gestor exporta só o que é dele**: incidentes de outros setores ou que não lhe foram encaminhados nunca entram, mesmo sendo da mesma instituição; o encaminhamento faz o incidente entrar no arquivo, e ele acompanha o andamento da análise e do plano; e nada no arquivo diz quem notificou nem se a notificação foi anônima. Cada um dos 5 critérios teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/79 · Executado em 16/11/2026 no Chromium e no WebKit (máquina local, sem segunda tentativa), sobre a main do e2e (a242bf4), com frontend d205664 e backend 113dcac (main de 16/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>7</strong><span>testes da US-7.2</span></div>
<div><strong>7</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. São 6 testes dos CT-FUN-158 a 161 e o percurso CT-E2E-042, que também cobre a US-7.1. Os mesmos 7 passaram no Chromium e no WebKit, na primeira tentativa.</p>

### Os casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Botão na lista do gestor</strong> (CT-FUN-158: CA01): as mesmas condições da lista do NSP — botão azul "Extrair dados" com a dica "Extrair xlsx", à direita de "Ordenar por" e com a mesma altura; a 1000 px, "Ordenar por", o campo e o botão descem juntos; no celular, o botão ocupa a linha inteira.</li>
<li><strong>Escopo do setor</strong> (CT-FUN-159: CA02): entram os incidentes do setor encaminhados antes da análise (um "Encaminhado" e um "Em ação") e o resultado da análise do NSP encaminhado depois; ficam de fora o incidente classificado e não encaminhado, o analisado pelo NSP sem encaminhar o resultado e o encaminhado a outro setor (UTI); a busca da tela não muda o arquivo (RN-26, RN-30).</li>
<li><strong>Sigilo e "Anônima"</strong> (CT-FUN-160: CA03): com uma notificação identificada e outra anônima, as duas com o mesmo prontuário e encaminhadas ao setor, nenhuma célula, visível ou oculta, e nenhuma propriedade do arquivo tem o nome, o contato ou o prontuário; a coluna "Anônima" não existe, e as duas linhas não se distinguem por ela (RN-27, RN-29, RN-31, RNF 6.3.5 e 6.3.6).</li>
<li><strong>Arquivo e retorno</strong> (CT-FUN-161: CA04 e CA05): o nome é <code>notificasaude-incidentes-pronto-atendimento-emergencia-AAAA-MM-DD.xlsx</code>, com o setor sem acento nem barra; as abas e a formatação são as do relatório da instituição; o escopo no Resumo é "Setor Pronto atendimento / emergência (incidentes encaminhados)", e a tabela por setor só tem esse setor; "Gerando..." com o botão desabilitado, o aviso com o total do servidor e, numa falha, o aviso de erro com o botão liberado.</li>
<li><strong>Do encaminhamento ao plano de ação</strong> (CT-E2E-042: CA02 e CA05): a notificação nova fica fora do relatório do gestor até o NSP encaminhá-la ao setor; depois disso, entra no arquivo do gestor, e, depois da análise e do plano de ação, o relatório do gestor mostra o status, a análise e as ações atualizados, como o do NSP.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA05 | 5 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-7.2, nenhuma parte ficou pendente nem como falha conhecida. Os critérios que a US-7.2 herda da US-7.1 (as colunas, a formatação e os avisos com 0 e 1 incidente) são conferidos em detalhe no [relatório da US-7.1](relatorio-incidentes-us-7-1-e2e.md); aqui, os testes conferem que o relatório do gestor segue as mesmas regras e o que muda para ele: o escopo, a coluna "Anônima" e o nome do arquivo.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e na main (a242bf4), executada na máquina local em 16/11/2026, sem segunda tentativa. A CI da main não rodou: o GitHub Actions da organização está parado por um problema de cobrança.</p>

<div class="ns-rel-placar">
<div><strong>270</strong><span>testes executados no Chromium</span></div>
<div><strong>261</strong><span>testes aprovados</span></div>
<div><strong>1</strong><span>teste com falha (instável)</span></div>
</div>

| Navegador | Aprovados | Com falha | Instáveis | Pendentes ou manuais |
| --- | --- | --- | --- | --- |
| Chromium | 261 | 0 | 1 (CT-FUN-115) | 8 |
| WebKit (Safari) | 262 | 0 | 0 | 8 |
| Firefox | — | — | — | — |

<p class="ns-rel-legenda">Os 8 pendentes ou manuais são os 2 casos do CT-FUN-048 marcados para correção, os 2 manuais e os 4 do CT-NF-010, que roda num modo próprio do ambiente. Os números não contam os 3 passos de login. O Firefox não abre nesta máquina e não foi executado.</p>

<div class="ns-rel-aviso" markdown>**O teste instável, o CT-FUN-115, é da US-5.3 e não vem desta entrega.** Ele falhou na suíte inteira ao esperar a dica da ação pendente; rodado sozinho cinco vezes, passou em quatro e falhou em uma, sem nenhuma mudança no sistema, e passou na suíte inteira do WebKit. Os detalhes estão no [relatório da US-7.1](relatorio-incidentes-us-7-1-e2e.md).</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a main do e2e (a242bf4), em 16/11/2026</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério teve um comportamento quebrado de propósito, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 5 quebras: o botão escondido do gestor (CA01); o gestor recebendo a instituição inteira em vez da sua fila (CA02); a coluna "Anônima" também no relatório do gestor (CA03); o arquivo do gestor com o nome do da instituição (CA04); e o botão sem o "Gerando..." e sem se desabilitar durante a geração (CA05). O teste certo reprovou em todas, no passo do próprio critério. A quebra do escopo derrubou também o CT-E2E-042, no passo em que a notificação ainda não encaminhada não pode estar no arquivo do gestor. Cada quebra foi desfeita logo depois.</li>
<li><strong>Dois navegadores:</strong> os 7 testes da US-7.2 passaram no Chromium e no WebKit, sem segunda tentativa.</li>
<li><strong>Esteira da PR:</strong> a CI da PR #79 não chegou a rodar, pelo problema de cobrança do GitHub Actions. A validação foi feita na máquina local, antes e depois do merge.</li>
</ul>

<div class="ns-rel-citacao">O escopo do gestor é decidido pelo servidor, pela mesma regra que monta a sua lista (o Escopo de Acesso). A quebra do CA02 foi feita só no relatório, para mostrar que o teste confere o arquivo, e não a lista.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-7.2.** Os 5 critérios estão verificados e aprovados.
- **Firefox:** rodar os testes do Épico 7 no Firefox, na CI ou numa máquina em que o navegador abra.
- **CI:** reexecutar a esteira da main quando o GitHub Actions da organização voltar.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #79](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/79) | Automação dos casos de teste das US-7.1 e US-7.2 |
| [Issue e2e #73](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/73) | Tarefa da automação |
| `tests/funcionais/ct-fun-158.spec.ts` a `ct-fun-161.spec.ts` | Casos funcionais da US-7.2 |
| `tests/e2e/ct-e2e-042.spec.ts` | Percurso do registro até o plano de ação, nos relatórios do NSP e do gestor |
| [PR frontend #26](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/26) e [PR backend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/18) | Implementação do relatório testada aqui |
| [Casos de Teste](../casos-de-teste.md#ct-fun-158) | Fichas do CT-FUN-158 ao CT-FUN-161 e do [CT-E2E-042](../casos-de-teste.md#ct-e2e-042) |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md#epico-7) | Status de automação de cada critério da US-7.2 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-7.2 e os 5 critérios de aceite |
| [Relatório end-to-end da US-7.1](relatorio-incidentes-us-7-1-e2e.md) | A outra história da mesma automação |
| Relatórios [unitário](relatorio-incidentes-unitario.md) e [de integração](relatorio-incidentes-integracao.md) | O servidor e as regras da tela, testados por dentro |

<p class="ns-rel-rodape">REL_Testes_E2E_RelatorioIncidentes_US72_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, no Chromium e no WebKit, em 16/11/2026.</p>

</div>

</div>
