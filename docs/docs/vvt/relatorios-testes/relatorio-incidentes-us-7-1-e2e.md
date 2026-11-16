<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 7 - Exportação do Relatório de Incidentes · Relatório da instituição (NSP) · US-7.1

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_RelatorioIncidentes_US71_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Branch <code>test/73/automatiza-cts-us-7-1-e-7-2</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_RelatorioIncidentes_US71_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório da US-7.2](relatorio-incidentes-us-7-2-e2e.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes end-to-end da US-7.1 (exportar o relatório da instituição), a partir da [PR #79 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/79). | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers. Aqui, os testes também **abrem o arquivo baixado** e conferem cada aba, célula e propriedade da planilha.</div>

A US-7.1 é a **exportação do relatório da instituição pelo NSP**: o botão "Extrair dados", nas oito listas de incidentes, baixa um XLSX com todos os incidentes da instituição, em todos os status, sem efeito da busca e dos filtros da tela (RN-30); com as abas Resumo, Incidentes e Plano de ação; com a formatação do sistema; e sem o nome ou o contato do notificante nem o número do prontuário (RN-29, RN-31). O Administrador não tem o botão. Os dez casos de teste da história (CT-FUN-148 a 157) e o percurso CT-E2E-042, que acompanha um incidente do registro até o plano de ação, foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Exportação da instituição (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Os 10 critérios de aceite estão verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>Nenhum defeito no sistema</strong><span>Nenhum teste da história ficou como falha conhecida.</span></div>
</div>

Em resumo: **o relatório do NSP sai do jeito que a história pede**: o botão aparece nas oito listas, na posição e com a altura certas, também quando os filtros quebram de linha e no celular; o arquivo tem os incidentes certos, as colunas e as cores certas, e nada que identifique o notificante ou o paciente; e o usuário é avisado durante e depois da geração. Cada um dos 10 critérios teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/79 · Executado em 16/11/2026 no Chromium e no WebKit (máquina local, sem segunda tentativa), sobre a main do e2e (a242bf4), com frontend d205664 e backend 113dcac (main de 16/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>15</strong><span>testes da US-7.1</span></div>
<div><strong>15</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. São 14 testes dos CT-FUN-148 a 157 e o percurso CT-E2E-042, que também cobre a US-7.2. Os mesmos 15 passaram no Chromium e no WebKit, na primeira tentativa (24 testes rodados em cada navegador, contando os 6 da US-7.2 e os 3 passos de login, que não são da história).</p>

### Os casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Botão nas listas do NSP</strong> (CT-FUN-148: CA01): nas oito listas, o botão azul "Extrair dados", com o ícone de download e a dica "Extrair xlsx", fica à direita de "Ordenar por" e com a mesma altura; a 1000 px, "Ordenar por", o campo e o botão descem juntos; no celular, o botão ocupa a linha inteira abaixo dos filtros.</li>
<li><strong>Escopo</strong> (CT-FUN-149: CA02): com uma notificação em cada um dos oito status no Hospital B e outra no Hospital A, o arquivo traz as oito, com o status de cada uma, e nenhuma do outro hospital; trocar a lista, buscar, filtrar e ordenar a tela não muda o arquivo (RN-30).</li>
<li><strong>Sigilo</strong> (CT-FUN-150: CA03): o NSP vê na plataforma o nome, o e-mail e o prontuário da notificação identificada, mas nenhuma célula, visível ou oculta, e nenhuma propriedade do arquivo tem esses dados; autor e última modificação do arquivo são "NotificaSaúde" (RN-29, RN-31, RNF 6.3.5 e 6.3.6).</li>
<li><strong>Arquivo</strong> (CT-FUN-151: CA04): o nome é <code>notificasaude-incidentes-instituicao-AAAA-MM-DD.xlsx</code>, com a data da geração, e as abas são Resumo, Incidentes e Plano de ação, nessa ordem.</li>
<li><strong>Aba Resumo</strong> (CT-FUN-152: CA05): sem título no topo; instituição, escopo "Todos os setores da instituição", data e hora, quem gerou e total; as três tabelas lado a lado, com os oito status e os sete graus do dano (inclusive "Ainda não classificado"), e cada tabela soma o total, com o percentual de cada linha.</li>
<li><strong>Aba Incidentes</strong> (CT-FUN-153: CA06): as 31 colunas na ordem, do registro mais recente para o mais antigo, e os valores de um incidente sem classificação, de um com a análise do setor em andamento (sem o conteúdo da análise), de um com a análise do setor concluída e de um com a análise do NSP concluída.</li>
<li><strong>Aba Plano de ação</strong> (CT-FUN-154: CA07): uma linha por ação, com os valores da ação completa, "Preenchimento pendente" na ação incompleta (RN-20) e a ação excluída fora da aba.</li>
<li><strong>Formatação</strong> (CT-FUN-155: CA08): cabeçalho #183EFF com texto branco e filtro, primeira linha e primeira coluna congeladas, linhas alternadas, quebra de texto nas colunas longas, datas em dd/mm/aaaa no horário local, status e grau do dano com as cores da tela e impressão em paisagem com o cabeçalho repetido.</li>
<li><strong>Retorno ao usuário</strong> (CT-FUN-156: CA09): "Gerando..." com o botão desabilitado, o aviso com o total real e o botão liberado; os avisos com 0, 1 ("1 incidente", no singular) e 2 incidentes; e o aviso de erro, com o botão liberado (RNF 6.7.1 e 6.7.3).</li>
<li><strong>Administrador</strong> (CT-FUN-157: CA10): a barra tem o "Ordenar por", mas não o "Extrair dados", e o pedido direto ao servidor recebe 403, sem arquivo (RNF 6.2.2).</li>
<li><strong>Do registro ao plano de ação</strong> (CT-E2E-042: CA02, CA06, CA07 e CA09): a notificação registrada, classificada e encaminhada pela tela entra no relatório do NSP desde o início; depois da análise e do plano de ação, o relatório mostra o status, a análise e as ações atualizados.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA10 | 10 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-7.1, nenhuma parte ficou pendente nem como falha conhecida. Duas partes são conferidas de um jeito diferente:

- **CA07, aba sem ações:** a mensagem "Nenhuma ação registrada nos incidentes deste relatório." fica no teste de integração do backend, porque o Hospital B do ambiente de testes sempre tem ações.
- **CA09, totais 0, 1 e 2 e falha:** como o Hospital B sempre tem incidentes, esses totais e a falha da geração são simulados na resposta do servidor; o total real é conferido em outro teste.

**Fora da especificação, validados como implementados:** a coluna "Nova previsão de conclusão" na aba Plano de ação e o aviso "Relatório gerado." quando o servidor não informa o total. Os dois aguardam validação com as proponentes.

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

<p class="ns-rel-legenda">Os 8 pendentes ou manuais são os 2 casos do CT-FUN-048 marcados para correção, os 2 manuais e os 4 do CT-NF-010, que roda num modo próprio do ambiente, com a verificação anti-robô ligada. Os números não contam os 3 passos de login. O Firefox não abre nesta máquina (o navegador não inicia dentro da proteção do macOS) e não foi executado.</p>

<div class="ns-rel-aviso" markdown>**O teste instável, o CT-FUN-115, é da US-5.3 e não vem desta entrega.** Ele falhou na suíte inteira ao esperar a dica "Faltam N campo(s) obrigatório(s)…" da ação pendente, que não apareceu a tempo. Rodado sozinho cinco vezes em seguida, passou em quatro e falhou em uma, sem nenhuma mudança no sistema, e passou na suíte inteira do WebKit. A automação do Épico 7 não toca no plano de ação pela tela.</div>

Comparada à execução da branch da PR #79 antes do merge, em 16/11 (262 aprovados no Chromium, nenhuma falha e os mesmos 8 pendentes), a suíte tem os mesmos testes. A única diferença é o CT-FUN-115, que passou naquela execução. Os 21 testes do Épico 7 passaram nas duas.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a main do e2e (a242bf4), em 16/11/2026</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério teve um comportamento quebrado de propósito, no frontend ou no backend, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 10 quebras: a dica do botão trocada (CA01); os incidentes arquivados fora do arquivo (CA02); o número do prontuário anexado à descrição (CA03); a aba renomeada para "Plano de Ação" (CA04); a linha "Ainda não classificado" fora da tabela por grau do dano (CA05); os incidentes do mais antigo para o mais recente (CA06); as ações excluídas de volta à aba (CA07); outro azul no cabeçalho (CA08); "Relatório gerado com 1 incidentes." no singular (CA09); e o botão mostrado ao Administrador (CA10). O teste certo reprovou em todas, no passo do próprio critério, e cada quebra foi desfeita logo depois.</li>
<li><strong>Uma quebra que o cenário não enxerga:</strong> a primeira tentativa no CA05 foi esconder do Resumo os status sem incidentes. O teste passou, porque no banco compartilhado o Hospital B tem incidentes nos oito status (o próprio CT-FUN-149 cria um em cada). A quebra trocada, a do grau do dano, foi pega.</li>
<li><strong>Dois navegadores:</strong> os 15 testes da US-7.1 passaram no Chromium e no WebKit, sem segunda tentativa.</li>
<li><strong>Esteira da PR:</strong> a CI da PR #79 não chegou a rodar, pelo mesmo problema de cobrança do GitHub Actions. A validação foi feita na máquina local, antes e depois do merge.</li>
</ul>

<div class="ns-rel-citacao">O escopo, o sigilo e o conteúdo da planilha são decididos pelo servidor, e o botão e os avisos pela tela. Por isso as quebras atingiram os dois lados: 7 no backend e 3 no frontend.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-7.1.** Os 10 critérios estão verificados e aprovados.
- **Firefox:** rodar os testes do Épico 7 no Firefox, na CI ou numa máquina em que o navegador abra.
- **CI:** reexecutar a esteira da main quando o GitHub Actions da organização voltar.
- **Validação com as proponentes:** a coluna "Nova previsão de conclusão" e o aviso "Relatório gerado.", implementados fora da especificação.
- **CT-FUN-115 (US-5.3):** investigar a instabilidade da dica da ação pendente, em tarefa própria do notifica-saude-e2e.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #79](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/79) | Automação dos casos de teste das US-7.1 e US-7.2 |
| [Issue e2e #73](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/73) | Tarefa da automação |
| `tests/funcionais/ct-fun-148.spec.ts` a `ct-fun-157.spec.ts` | Casos funcionais da US-7.1 |
| `tests/e2e/ct-e2e-042.spec.ts` | Percurso do registro até o plano de ação, nos relatórios do NSP e do gestor |
| [PR frontend #26](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/26) e [PR backend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/18) | Implementação do relatório testada aqui |
| [Casos de Teste](../casos-de-teste.md#ct-fun-148) | Fichas do CT-FUN-148 ao CT-FUN-157 e do [CT-E2E-042](../casos-de-teste.md#ct-e2e-042) |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md#epico-7) | Status de automação de cada critério da US-7.1 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-7.1 e os 10 critérios de aceite |
| [Relatório end-to-end da US-7.2](relatorio-incidentes-us-7-2-e2e.md) | A outra história da mesma automação |
| Relatórios [unitário](relatorio-incidentes-unitario.md) e [de integração](relatorio-incidentes-integracao.md) | O servidor e as regras da tela, testados por dentro |

<p class="ns-rel-rodape">REL_Testes_E2E_RelatorioIncidentes_US71_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, no Chromium e no WebKit, em 16/11/2026.</p>

</div>

</div>
