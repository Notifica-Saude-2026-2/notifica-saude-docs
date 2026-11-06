<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 4 - Análise do Incidente · Guia e Seções 1 e 2 · US-4.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_Analise_US42_v1_0</code></span><span>Emissão <em>8 de outubro de 2026</em></span><span>Branch <code>test/13/automatiza-cts-us-4-2</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US42_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 08/10/2026 | Criação do relatório de testes end-to-end da US-4.2 (registro da análise do incidente), a partir da [PR #17 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/17). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-4.2 é o **registro da análise do incidente**: no detalhe da notificação, quem pode analisar clica em "Registrar análise", passa pelo Guia de investigação e preenche o formulário, que salva um rascunho a cada seção. Os sete casos de teste da história (CT-E2E-021 e CT-FUN-047 a 052) foram automatizados e rodados contra o sistema real, que hoje tem o guia e as Seções 1 e 2. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Fluxo da análise (tela e servidor)</strong><span>Testado de ponta a ponta no navegador.<br>Dos 19 critérios de aceite, 13 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Dois defeitos encontrados</strong><span>Registrados como falha conhecida: a orientação de um campo fica num ícone de ajuda (#14) e a data do último salvamento sai 4 horas antes (#15).</span></div>
</div>

Em resumo: **o registro da análise funciona do jeito que a história pede nas partes que já existem**, incluindo a autoria exclusiva e o início simultâneo por duas pessoas. Os dois defeitos não impedem o uso. As Seções 3 a 5 e o botão "Finalizar análise" ainda não existem no sistema, e os testes deles ficaram reservados como pendentes.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/17 · Executado em 08/10/2026 no Chromium, com frontend 925a72b e backend 6099726 (develop de 07/10) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>32</strong><span>testes da US-4.2</span></div>
<div><strong>23</strong><span>testes aprovados</span></div>
<div><strong>3</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Os outros 6 testes estão pendentes: conferem as Seções 3 a 5, que ainda não existem. O CT-E2E-021 roda duas vezes, porque a ficha prevê dois perfis: o NSP com uma notificação Classificada e o Gestor da Área com uma notificação Encaminhada ao setor dele.</p>

### Os sete casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Início, salvamento e retomada</strong> (CT-E2E-021: CA01, CA02, CA07, CA14 e CA15): quem não é o responsável vê "Registrar análise"; cada avanço de seção salva o rascunho e avisa "Rascunho salvo", e durante o salvamento o botão mostra "Salvando..." e fica desabilitado (RNF 6.7.2); o status passa a "Em análise"; "Continuar análise" reabre o formulário com as Seções 1 e 2 preservadas; o sistema registra quem iniciou e quando. <span class="ns-rel-cor--warn">A data do último salvamento sai errada (#15).</span></li>
<li><strong>Estrutura e navegação</strong> (CT-FUN-047: CA05 e CA06): o guia vem antes e não conta como etapa; "Próximo" valida e avança; "Voltar" retorna sem perder o que foi digitado e, na Seção 1, volta ao guia.</li>
<li><strong>Autoria exclusiva</strong> (CT-FUN-048: CA03 e CA04): outro NSP não vê opções nem o rascunho de quem iniciou, só o aviso "Análise em andamento"; quando dois NSPs salvam a Seção 1 ao mesmo tempo, o servidor aceita o primeiro, recusa o segundo e a tela avisa.</li>
<li><strong>Validação e destaque das pendências</strong> (CT-FUN-049: CA08 e CA09): com pendências, a seção não avança, o aviso diz exatamente o que falta e os campos ficam destacados; o destaque só aparece depois de tentar avançar e sai conforme cada campo é corrigido.</li>
<li><strong>Limites de caracteres e opção "Outro"</strong> (CT-FUN-050: CA10 e CA13): o contador fica vermelho ao passar de 100 caracteres, o aviso aparece e o texto não é cortado; "Outro" exige a especificação, com contador "N/30" (RNF 6.7.7), que não salva com 31 caracteres e salva com 30.</li>
<li><strong>Orientações e aviso de cultura justa</strong> (CT-FUN-051: CA11 e CA12): o aviso fixo de cultura justa aparece; as Seções 1 e 2 têm explicação em caixa visível, exemplos nos campos, "Selecione..." nos menus e asterisco nos obrigatórios. <span class="ns-rel-cor--warn">A orientação do campo "Informe o incidente em investigação" fica num ícone de ajuda (#14).</span></li>
<li><strong>Guia de investigação</strong> (CT-FUN-052: CA16, CA17 e CA18): o guia mostra o conteúdo definido, não tem campos nem botões do formulário e não muda o status; com "Não mostrar novamente", a próxima análise abre direto na Seção 1.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas. A cobertura de código do servidor está nos relatórios unitário e de integração.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01, CA03, CA04, CA07, CA08, CA09, CA10, CA12, CA13, CA15, CA16, CA17, CA18 | 13 |
| <span class="ns-rel-cor--warn">Aprovado nas Seções 1 e 2, pendente nas demais</span> | CA02 (retomar na Seção 3), CA05 (Seções 3 a 5), CA06 ("Finalizar análise") | 3 |
| <span class="ns-rel-cor--erro">Com falha conhecida</span> | CA11 (orientação em ícone de ajuda, #14; Seções 3 a 5 pendentes), CA14 (data do último salvamento, #15; autor e início aprovados) | 2 |
| Pendente | CA19 (blocos "Como preencher", que ficam na Seção 3) | 1 |

<div class="ns-rel-info" markdown>

**Como ler as pendências e as falhas conhecidas.** O que o sistema ainda não tem ficou escrito como teste pendente, com o motivo, no lugar onde será completado quando a parte chegar. O que o sistema faz diferente do requisito ficou como **falha conhecida**: o teste roda e confere o que o requisito pede, e a falha é a esperada enquanto o defeito existir. Quando o defeito for corrigido, o teste passa e a ferramenta avisa que a marcação deve ser retirada.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e no Chromium, com os testes desta entrega, em 08/10/2026</p>

<div class="ns-rel-placar">
<div><strong>120</strong><span>testes executados</span></div>
<div><strong>111</strong><span>testes aprovados</span></div>
<div><strong>9</strong><span>testes com falha</span></div>
</div>

<p class="ns-rel-legenda">Os aprovados incluem as 3 falhas conhecidas da US-4.2, que contam como esperadas. Outros 8 testes estão pendentes ou são manuais, e 3 não rodaram porque dependiam de um teste que falhou.</p>

<div class="ns-rel-aviso" markdown>**As 9 falhas não foram causadas por esta entrega.** São testes de classificação que ainda escolhem a "Sugestão de protocolo de investigação", etapa que saiu do sistema em 07/10, com a concordância da equipe. Eles falham igualmente sem os testes da US-4.2, e a correção está nas issues [notifica-saude-e2e#16](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/16) (testes) e [notifica-saude-docs#35](https://github.com/Notifica-Saude-2026-2/notifica-saude-docs/issues/35) (fichas).</div>

Comparada à execução anterior, sem os testes desta entrega, a suíte passou de 82 para 111 aprovados e de 10 para 9 falhas. Nenhum teste que passava antes deixou de passar.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a branch test/13/automatiza-cts-us-4-2</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada comportamento foi quebrado de propósito no frontend, e o mesmo teste foi rodado sem nenhuma alteração. Foram 20 quebras, como esconder o botão "Registrar análise", mudar o limite de 100 para 120 caracteres, tratar a recusa do servidor como sucesso, deixar o botão clicável durante o salvamento ou tirar o contador do "Outro". O teste certo reprovou em todas, e cada quebra foi desfeita logo depois.</li>
<li><strong>Uma brecha achada e corrigida:</strong> na primeira rodada da contraprova, o teste do CA18 não percebeu um campo de texto colocado dentro do guia, porque conferia a tela antes de ela terminar de carregar. Agora ele espera o guia aparecer, e a quebra passou a ser pega.</li>
<li><strong>Falhas conhecidas avisam quando o defeito for corrigido:</strong> com o defeito #14 corrigido de propósito no frontend, a ferramenta acusou "deveria falhar, mas passou".</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/37868319643">execução da CI da PR #17</a>, no Chromium e sobre o último commit (194fe84), terminou com 110 testes aprovados e 10 com falha. Todos os testes da US-4.2 tiveram o resultado esperado. As 10 falhas já existiam antes desta entrega: os 9 testes do protocolo e o CT-E2E-004, que depende de um dado que nenhum teste cria e, com o banco zerado da CI, não o encontrou.</li>
</ul>

<div class="ns-rel-citacao">Partes decididas só pelo servidor (o status "Em análise", o autor e as datas e a recusa do segundo salvamento) não tiveram contraprova pelo frontend: exigiriam alterar e reconstruir o backend. Elas são cobertas pelos relatórios unitário e de integração.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Seções 3 a 5 e "Finalizar análise":** os 6 testes pendentes devem ser completados quando essas partes forem entregues (CA02, CA05, CA06, CA11 e CA19).
- **Defeito [#14](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/14) (frontend, BUG-FRONT-019):** a orientação do campo "Informe o incidente em investigação" só aparece ao passar o mouse num ícone ⓘ, e o CA11 pede caixa visível.
- **Defeito [#15](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/15) (backend, BUG-BACK-009):** a data do último salvamento sai 4 horas antes da hora real, antes até da data de início.
- **Protocolo de investigação:** tirar a etapa removida dos 9 testes de classificação ([e2e#16](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/16)) e das 6 fichas que ainda a pedem ([docs#35](https://github.com/Notifica-Saude-2026-2/notifica-saude-docs/issues/35)).
- **Limite de tentativas de login:** durante os testes, a trava de tentativas ficou sem prazo de expiração uma vez, bloqueando novos logins. O achado ainda precisa ser reproduzido de forma controlada antes de ser registrado como defeito.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/17) | Automação dos sete casos de teste da US-4.2 |
| [Issue e2e #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/13) | Tarefa da automação, com o mapa de critérios por caso de teste |
| [Issues e2e #14](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/14) e [#15](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/15) | Defeitos encontrados, com passos para reprodução e evidências |
| `tests/e2e/ct-e2e-021.spec.ts` | Início, salvamento e retomada da análise |
| `tests/funcionais/ct-fun-047.spec.ts` a `ct-fun-052.spec.ts` | Casos funcionais da US-4.2 |
| [PR frontend #10](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/10) e [PR backend #9](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9) | Implementação do guia e das Seções 1 e 2 testada aqui |
| [Casos de Teste](../casos-de-teste.md) | Fichas do CT-E2E-021 e do CT-FUN-047 ao CT-FUN-052 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-4.2 e dos RNF 6.7.2, 6.7.4, 6.7.5, 6.7.6 e 6.7.7 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.2 e os 19 critérios de aceite |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_E2E_Analise_US42_v1_0 — compilado a partir da execução da suíte end-to-end (Playwright, Chromium) da branch test/13/automatiza-cts-us-4-2 do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 08/10/2026.</p>

</div>

</div>
