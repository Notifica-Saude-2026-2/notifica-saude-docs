<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 4 - Análise do Incidente · Registro da análise · US-4.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_Analise_US42_v1_1</code></span><span>Emissão <em>15 de novembro de 2026</em></span><span>Branch <code>test/62/automatiza-fixmes-us-4-1-a-4-3</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US42_v1_1.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 08/10/2026 | Criação do relatório de testes end-to-end da US-4.2 (registro da análise do incidente), a partir da [PR #17 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/17). | Catarina Freisleben |
    | 1.1 | 15/11/2026 | Testes das Seções 3 a 5, do "Finalizar análise" e dos blocos recolhíveis, que estavam pendentes, completados na [PR #63 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/63); defeitos #14 e #15 corrigidos; comparação com os 20 critérios da especificação 3.12, que mudou o CA02 a CA04 e o CA07 e criou o CA20 (#140). Execução sobre o frontend 78a3927 e o backend 18a73e6 (develop de 10/11). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-4.2 é o **registro da análise do incidente**. No detalhe da notificação, quem pode analisar clica em "Registrar análise", passa pelo Guia de investigação e preenche as cinco seções do formulário. O formulário salva um rascunho a cada seção e termina em "Finalizar análise". Os sete casos de teste da história (CT-E2E-021 e CT-FUN-047 a 052) foram automatizados e rodados contra o sistema real, que agora tem as cinco seções. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Fluxo da análise (tela e servidor)</strong><span>Testado de ponta a ponta no navegador.<br>Dos 20 critérios de aceite, 15 estão totalmente verificados e aprovados, e 2 estão aprovados em parte. Os outros 3 chegaram ao sistema depois da versão testada.</span></div>
<div><span class="ns-rel-icone">✓</span><strong>Os dois defeitos da versão 1.0 foram corrigidos</strong><span>A orientação do campo saiu do ícone de ajuda (#14), e a data do último salvamento ficou certa (#15). Os testes deixaram de marcá-los como falha conhecida.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Critérios novos, da #140</strong><span>A especificação 3.12 (03/11) passou a deixar o NSP ver a análise em andamento e assumir a sua condução. Isso mudou o CA02 a CA04 e o CA07 e criou o CA20, implementados na develop de 13/11, depois da versão testada.</span></div>
</div>

Em resumo: **o registro da análise funciona do jeito que a história pede, do guia ao "Finalizar análise"**. Funcionam também a autoria, a validação, os limites, as orientações e os blocos recolhíveis que lembram a escolha. A condução assumida por outro NSP e o novo aviso de salvamento ao mesmo tempo ainda não foram testados, porque chegaram ao sistema depois da versão testada.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PRs: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/17 e /pull/63 · Executado em 13/11/2026 no Chromium, no Firefox e no WebKit (máquina local, sem segunda tentativa), no Chromium (CI da PR #63) e em 15/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 78a3927 e backend 18a73e6 (develop de 10/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>30</strong><span>testes da US-4.2</span></div>
<div><strong>30</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. O CT-E2E-021 roda duas vezes, com 6 testes em cada: o NSP com uma notificação Classificada e o Gestor da Área com uma notificação Encaminhada ao setor dele. Os dois testes do CT-FUN-048 conferem a regra de antes da #140, que vale na versão testada (seção 6). Na CI da main, os 30 passaram nos três navegadores, sem segunda tentativa.</p>

### Os sete casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Início, salvamento e retomada</strong> (CT-E2E-021: CA01, CA02, CA07, CA14 e CA15): quem não é o responsável vê "Registrar análise". Cada avanço de seção salva o rascunho e avisa "Rascunho salvo". Durante o salvamento, o botão mostra "Salvando..." e fica desabilitado (RNF 6.7.2). O status passa a "Em análise". "Continuar análise" retoma na Seção 3, a seguinte à última salva, com as Seções 1 e 2 preservadas. O sistema registra quem iniciou, a data e a hora do início e a do último salvamento, agora certa.</li>
<li><strong>Estrutura e navegação</strong> (CT-FUN-047: CA05 e CA06): o guia vem antes e não conta como etapa. As cinco seções aparecem nesta ordem: Informações da notificação, Informações da análise, Cronologia do incidente, Fatores contribuintes e Resultado. "Próximo" valida e avança, e "Voltar" retorna sem perder o que foi digitado e, na Seção 1, volta ao guia. Na Seção 5, o botão de avanço é "Finalizar análise". <span class="ns-rel-cor--warn">As cinco etapas da barra de progresso não são contadas (seção 6).</span></li>
<li><strong>Autoria da análise em andamento</strong> (CT-FUN-048): outro NSP não vê opções nem o rascunho de quem iniciou, só o aviso "Análise em andamento". Quando dois NSPs salvam a Seção 1 ao mesmo tempo, o servidor aceita o primeiro, recusa o segundo e a tela avisa. <span class="ns-rel-cor--warn">É a regra de antes da #140; a especificação atual mudou o CA03 e o CA04 e criou o CA20.</span></li>
<li><strong>Validação e destaque das pendências</strong> (CT-FUN-049: CA08 e CA09): com pendências, a seção não avança, o aviso diz exatamente o que falta e os campos ficam destacados. O destaque só aparece depois de tentar avançar e sai conforme cada campo é corrigido.</li>
<li><strong>Limites de caracteres e opção "Outro"</strong> (CT-FUN-050: CA10 e CA13): o contador fica vermelho ao passar de 100 caracteres, o aviso aparece e o texto não é cortado. "Outro" exige a especificação, com contador "N/30" (RNF 6.7.7), e não salva com 31 caracteres, mas salva com 30.</li>
<li><strong>Orientações, aviso de cultura justa e blocos recolhíveis</strong> (CT-FUN-051: CA11, CA12 e CA19): o aviso fixo de cultura justa aparece. Nas cinco seções, as explicações ficam em caixas visíveis com ⓘ, os campos têm exemplos, os menus começam com "Selecione..." e os obrigatórios têm asterisco. A orientação do campo "Informe o incidente em investigação" agora fica em caixa visível (#14 corrigido). Na Seção 3, os blocos "Como preencher" e de exemplo vêm abertos, recolhem com a seta, e uma segunda análise os mostra recolhidos.</li>
<li><strong>Guia de investigação</strong> (CT-FUN-052: CA16, CA17 e CA18): o guia mostra o conteúdo definido, não tem campos, validação nem barra e não muda o status. Com "Não mostrar novamente", a próxima análise abre direto na Seção 1.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas. A cobertura de código do servidor está nos relatórios unitário e de integração. Os critérios são os da especificação 3.12, a atual.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01, CA06 a CA19 | 15 |
| <span class="ns-rel-cor--warn">Aprovado em parte</span> | CA02 (quem iniciou continua a análise; quem assumiu a condução chegou com a #140), CA05 (as cinco seções na ordem; a barra de progresso não é contada) | 2 |
| Pendente: chegou ao sistema depois da versão testada | CA03 (o NSP vê a análise em andamento), CA04 (assumir a condução), CA20 (salvamento ao mesmo tempo, com o aviso "Não foi possível salvar. Atualize a página e tente novamente.") | 3 |

<div class="ns-rel-info" markdown>

**Como ler as partes e as pendências.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. O CA03, o CA04 e o CA20 foram reescritos ou criados na especificação 3.12, de 03/11, e implementados na develop de 13/11 (#140), depois da versão testada aqui. A versão testada ainda segue a regra anterior, que o CT-FUN-048 confere. As fichas e os testes da regra nova vêm depois da atualização da suíte para a develop de 13/11.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43772665590">CI da main</a>, depois do merge da PR #67, em 15/11/2026</p>

<div class="ns-rel-placar">
<div><strong>230</strong><span>testes executados no Chromium</span></div>
<div><strong>230</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

| Navegador | Aprovados | Com falha | Instáveis | Pendentes ou manuais |
| --- | --- | --- | --- | --- |
| Chromium | 230 | 0 | 0 | 6 |
| WebKit (Safari) | 230 | 0 | 0 | 6 |
| Firefox | 228 | 1 | 1 | 6 |

<p class="ns-rel-legenda">Outros 6 testes estão pendentes ou são manuais: os 4 do CT-NF-010, que só rodam com a verificação anti-robô ligada (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/10">PR #10</a>), e os 2 manuais. Os aprovados incluem 1 falha conhecida, a do CT-FUN-110 (BUG-FRONT-021), que conta como esperada. A falha do Firefox é a do CT-E2E-028 (US-4.7, BUG-FRONT-022): o teste está marcado como falha conhecida, mas estoura o tempo esperando o download do diagrama, e o Playwright conta o estouro de tempo como falha, e não como a falha esperada. Ela acontece na main desde 13/11 e não vem desta entrega. O instável é o CT-FUN-046 (US-4.1), que passou na segunda tentativa no Firefox. O teste do limite de tentativas de login roda à parte e também passou.</p>

Comparada à execução da versão 1.0 (08/10, 111 aprovados e 9 falhas no Chromium, todas da etapa de protocolo que saiu do sistema), a suíte passou a 230 aprovados e 0 falhas no Chromium. Ela ganhou os testes das histórias automatizadas depois, e as 9 falhas saíram com a retirada da etapa de protocolo dos testes ([PR #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/18)). Os 6 testes da US-4.2 que estavam pendentes agora rodam e passam.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a branch test/13/automatiza-cts-us-4-2 (versão 1.0) e, em 13/11/2026, sobre os testes que viraram a PR #63, com o frontend local sobre o 78a3927 e o backend 18a73e6</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada comportamento foi quebrado de propósito no frontend, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Na versão 1.0, foram 20 quebras nas Seções 1 e 2, como esconder o botão "Registrar análise", mudar o limite de 100 para 120 caracteres, tratar a recusa do servidor como sucesso, deixar o botão clicável durante o salvamento ou tirar o contador do "Outro". Nesta versão, foram mais 8, nas Seções 3 a 5: trocar os títulos das Seções 3 e 4, mudar o botão final para "Concluir análise", tirar o ⓘ da explicação da Seção 4, a instrução do campo "Fato" e o asterisco da "Cronologia", trocar "Selecione..." por "Escolha...", e fazer os blocos virem fechados ou não lembrarem a escolha. O teste certo reprovou em todas, e cada quebra foi desfeita logo depois.</li>
<li><strong>Uma brecha achada e corrigida (versão 1.0):</strong> na primeira rodada da contraprova, o teste do CA18 não percebeu um campo de texto colocado dentro do guia, porque conferia a tela antes de ela terminar de carregar. Agora ele espera o guia aparecer, e a quebra passou a ser pega.</li>
<li><strong>Defeitos corrigidos:</strong> o #14 (BUG-FRONT-019) foi corrigido no front#16 e o #15 (BUG-BACK-009) no back#11. Os testes deixaram de marcá-los como falha conhecida na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/32">PR #32</a> e passaram a conferir o comportamento certo.</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43476838653">execução da CI da PR #63</a>, no Chromium, terminou com 215 testes aprovados, nenhum com falha e 2 pendentes. Numa <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43476862325">execução manual na branch</a>, os três navegadores tiveram o mesmo resultado.</li>
<li><strong>Três navegadores:</strong> os testes novos da PR #63 passaram também no Firefox e no WebKit, na máquina local, sem segunda tentativa.</li>
</ul>

<div class="ns-rel-citacao">Partes decididas só pelo servidor (o status "Em análise", o autor e as datas, e a recusa do segundo salvamento) não tiveram contraprova pelo frontend: exigiriam alterar e reconstruir o backend. Elas são cobertas pelos relatórios unitário e de integração.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Critérios da #140 (CA02 em parte, CA03, CA04 e CA20):** a especificação 3.12 deixa o NSP ver a análise em andamento e assumir a sua condução, com registro no histórico, e troca o aviso de salvamento ao mesmo tempo. Isso foi implementado na develop de 13/11 (front#27 e back#19). Faltam as fichas novas e os testes, depois da atualização da suíte para a develop de 13/11. Até lá, o CT-FUN-048 confere a regra anterior.
- **Barra de progresso de cinco etapas (CA05):** as etapas não são contadas. A barra não tem uma identificação para os testes, e a regra do frontend não deixa usar o nome do estilo ou a posição na página para achá-la. Fica a sugestão de os devs acrescentarem a identificação.
- **Limite de tentativas de login:** durante os testes da versão 1.0, a trava de tentativas ficou sem prazo de expiração uma vez, bloqueando novos logins. O achado ainda precisa ser reproduzido de forma controlada antes de ser registrado como defeito.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/17) | Automação dos sete casos de teste da US-4.2 |
| [PR e2e #63](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/63) | Testes pendentes das US-4.1 a 4.3, com as Seções 3 a 5 |
| [Issue e2e #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/13) | Tarefa da automação, com o mapa de critérios por caso de teste |
| [Issues e2e #14](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/14) e [#15](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/15) | Defeitos da versão 1.0, já corrigidos |
| `tests/e2e/ct-e2e-021.spec.ts` | Início, salvamento e retomada da análise |
| `tests/funcionais/ct-fun-047.spec.ts` a `ct-fun-052.spec.ts` | Casos funcionais da US-4.2 |
| [PR frontend #10](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/10) e [PR backend #9](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9) | Implementação do guia e das Seções 1 e 2 |
| [PR frontend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/17) e [PR backend #12](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12) | Implementação das Seções 3 a 5 |
| [PR frontend #27](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/27) e [PR backend #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/19) | #140: análise em andamento visível ao NSP e condução assumida (ainda não testada) |
| [Casos de Teste](../casos-de-teste.md) | Fichas do CT-E2E-021 e do CT-FUN-047 ao CT-FUN-052 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-4.2 e dos RNF 6.7.2, 6.7.4, 6.7.5, 6.7.6 e 6.7.7 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.2 e os 20 critérios de aceite |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_E2E_Analise_US42_v1_1 — compilado a partir das execuções da suíte end-to-end (Playwright) das branches test/13/automatiza-cts-us-4-2 e test/62/automatiza-fixmes-us-4-1-a-4-3 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 08/10, 13/11 e 15/11/2026.</p>

</div>

</div>
