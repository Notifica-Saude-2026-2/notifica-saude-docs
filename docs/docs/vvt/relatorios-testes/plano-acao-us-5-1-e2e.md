<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 5 - Gestão de Plano de Ação · Registro de ações · US-5.1

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_PlanoAcao_US51_v1_2</code></span><span>Emissão <em>15 de novembro de 2026</em></span><span>Branch <code>test/69/atualiza-submodulos-develop-15-11</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_PlanoAcao_US51_v1_2.pdf){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Criação do relatório de testes end-to-end da US-5.1 (acessar e preencher o plano de ação), a partir da [PR #52 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52). | Catarina Freisleben |
    | 1.1 | 12/11/2026 | Inclusão do CA18 ("Como a ação será realizada?"), com o CT-FUN-132 automatizado na [PR #54 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/54), e nova execução dos testes da US-5.1 sobre o frontend 78a3927 e o backend 18a73e6 (develop de 10/11). | Catarina Freisleben |
    | 1.2 | 15/11/2026 | Correção do BUG-FRONT-021 no [PR #29 do frontend](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/29): o CA14 passa a verificado e aprovado, e o CT-FUN-110 deixa de ser falha conhecida na [PR #72 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/72). Nova execução dos testes da US-5.1 sobre o frontend 78246a9 e o backend 946dff0 (develop de 15/11). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-5.1 é o **formulário de uma ação do plano de ação**: depois da análise do incidente, o NSP ou o Gestor da Área registra o que será feito, como será realizado, onde, por quem, quando, se precisa de recurso ou de aprovação da Alta Gestão, como comprovar, que resultado se espera, como e quando verificar e se a ação gera um indicador. Cada pergunta tem uma caixa de explicação, e o formulário confere os campos obrigatórios e os limites de caracteres antes de salvar. Os onze casos de teste da história (CT-FUN-103 a 112 e CT-FUN-132) foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Formulário da ação (tela e servidor)</strong><span>Testado de ponta a ponta no navegador.<br>Dos 18 critérios de aceite, os 18 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>1 defeito encontrado e corrigido</strong><span>A caixa ⓘ das previsões de início e de conclusão ficava acima das duas perguntas, e o CA14 pede logo abaixo de cada uma (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/51">e2e#51</a>, BUG-FRONT-021). A correção está na versão testada.</span></div>
</div>

Em resumo: **o formulário da ação funciona do jeito que a história pede** nos 18 critérios: botões conforme o status, recomendação pré-preenchida, campos obrigatórios e limites, locais, responsáveis, datas, recurso, aprovação, indicador, caixas de explicação, campo longo, aviso ao salvar, tabelas no celular e a pergunta "Como a ação será realizada?". Cada um dos 18 critérios teve ao menos uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PRs: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52 e /pull/54 · Executado em 11/11/2026 no Chromium, no Firefox e no WebKit (máquina local, sem segunda tentativa) e no Chromium (CI da PR #54), e em 12/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 78a3927 e backend 18a73e6 (develop de 10/11), e em 15/11/2026 no Chromium, no Firefox e no WebKit (máquina local, sem segunda tentativa) e no Chromium (CI da PR #72), com frontend 78246a9 e backend 946dff0 (develop de 15/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>14</strong><span>testes da US-5.1</span></div>
<div><strong>14</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 15/11, com o mesmo resultado nos três navegadores; na CI da PR #72, os mesmos 14 testes passaram. Na versão 1.1, o teste das previsões do CT-FUN-110 era falha conhecida. O CT-FUN-110 tem dois testes (as 11 perguntas com caixa própria e as previsões), o CT-FUN-112 também (tela de computador e tela de celular), e o CT-FUN-132 também (posição, numeração e caixa; obrigatoriedade e limite).</p>

### Os onze casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Acesso ao formulário e situação inicial</strong> (CT-FUN-103: CA01 e CA07): com a análise não concluída, o aviso "O plano de ação ficará disponível após a conclusão da análise." e nenhum botão; com o incidente "Analisado" e sem ações, o botão "Registrar plano de ação"; com ações, e também em "Em ação", o botão "Adicionar outra ação"; nas três aberturas, a "Situação da ação" travada em "Em andamento".</li>
<li><strong>Recomendação pré-preenchida</strong> (CT-FUN-104: CA02): o "O que será feito?" vem com a próxima recomendação da análise que ainda não tem ação, e a ação salva fica ligada a ela na coluna "Recomendação"; quando todas já têm ação, o campo vem vazio.</li>
<li><strong>Campos de texto</strong> (CT-FUN-105: CA03, CA10, CA11 e CA12): "O que será feito?", "Como vamos comprovar", "Qual resultado esperamos?", "Como vamos saber se funcionou?" e "Quando verificar o resultado?" são obrigatórios; com 501 e 101 caracteres, o contador fica vermelho, o texto não é cortado e nada é salvo; com 500 e 100, a ação é salva.</li>
<li><strong>Onde será feito</strong> (CT-FUN-106: CA04): os 8 locais e "Outro", na ordem, um abaixo do outro; sem nenhum local, não salva; "Outro" pede a especificação, com até 50 caracteres; com vários locais, os detalhes mostram "Farmácia Hospitalar; UTI; …", separados por "; ".</li>
<li><strong>Responsáveis</strong> (CT-FUN-107: CA05): a tabela começa com uma linha, com Nome, Função e Setor; Função e Setor têm "Outro"; linha vazia não salva; o nome aceita até 50 caracteres e o "Outro", até 30; com duas linhas, as duas oferecem "Remover", como no protótipo; a coluna "Responsável" mostra os dois nomes.</li>
<li><strong>Previsões</strong> (CT-FUN-108: CA06): as duas datas são obrigatórias; o calendário do início não passa da conclusão; início depois da conclusão mostra o aviso, destaca os dois campos e não salva; início igual à conclusão salva.</li>
<li><strong>Recurso, aprovação e indicador</strong> (CT-FUN-109: CA08, CA09 e CA13): "Sim" e "Não" nas três perguntas; com "Não", nada a mais é pedido; com "Sim", a tabela de recursos, a aprovação e o indicador passam a ser obrigatórios, com até 100 caracteres; uma linha de recurso vazia não salva; dois recursos completos salvam.</li>
<li><strong>Textos explicativos</strong> (CT-FUN-110: CA14): nas 11 perguntas com caixa própria e nas duas previsões, a caixa azul com ⓘ fica entre a pergunta e o campo, com a explicação do critério, antes de qualquer resposta. Nas previsões, a caixa ficava acima das duas perguntas até a correção do BUG-FRONT-021 (e2e#51).</li>
<li><strong>Limites, campo longo e aviso ao salvar</strong> (CT-FUN-111: CA15 e CA16): o formulário vazio não salva, destaca os obrigatórios, inclusive as células das tabelas, e o aviso lista os 10 campos que faltam; o campo longo tem altura máxima de 200 px e, a partir dela, o texto rola dentro da caixa; o aviso cita o campo que falta, o texto acima do limite e as datas inválidas; corrigido, salva.</li>
<li><strong>Tabelas responsivas</strong> (CT-FUN-112: CA17): na tela de computador, as tabelas de responsáveis e de recursos ocupam a largura do formulário; a coluna "Remover" só aparece com duas linhas; na tela de celular, cada linha vira um bloco, com o rótulo acima de cada campo.</li>
<li><strong>Como a ação será realizada</strong> (CT-FUN-132: CA18): a pergunta "2. Como a ação será realizada?" vem logo após "1. O que será feito?", e as demais seguem de 3 a 13; a caixa azul com ⓘ, entre a pergunta e o campo, traz o exemplo do critério; vazio, não salva, destaca o campo e o cita no aviso; com 501 caracteres, o contador fica vermelho e nada é salvo; com 500, a ação é salva, e a edição mostra o texto.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA18 | 18 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na versão 1.1, o CA14 era **falha conhecida** nas previsões, um teste que confere o que o critério pede e falha enquanto o defeito existe, sem deixar a esteira vermelha. Com a correção do BUG-FRONT-021, todas as partes do CA14 passaram (seção 5).

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43784400876">CI da PR #72</a>, que leva a suíte à develop de 15/11, em 15/11/2026</p>

<div class="ns-rel-placar">
<div><strong>228</strong><span>testes executados no Chromium</span></div>
<div><strong>228</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

| Navegador | Aprovados | Com falha | Instáveis | Pendentes ou manuais |
| --- | --- | --- | --- | --- |
| Chromium | 228 | 0 | 0 | 8 |

<p class="ns-rel-legenda">Outros 8 testes estão pendentes ou são manuais: os 4 do CT-NF-010, que só rodam com a verificação anti-robô ligada, os 2 do CT-FUN-048, pendentes até as fichas novas da US-4.2, e os 2 manuais. Nenhum teste é falha conhecida: a do CT-FUN-110 saiu. Nenhum teste foi instável. A CI da main roda os três navegadores depois do merge da PR #72.</p>

Comparada à [CI da main de 15/11 antes da PR #72](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43772665590), ainda com o sistema de 10/11, o Chromium passou de 230 para 228 aprovados e de 6 para 8 pendentes: são os 2 testes do CT-FUN-048, que a PR #72 deixa pendentes até as fichas novas da US-4.2. O teste das previsões do CT-FUN-110 deixou de ser falha conhecida e passa de verdade. Os 14 testes da US-5.1 passaram também no Firefox e no WebKit, na máquina local, sem segunda tentativa.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas em 10/11/2026: do CA01 ao CA17, sobre a branch da PR #52 (f463dc2); o CA18, sobre os ajustes que viraram a PR #54. A contraprova da correção do CA14, em 15/11/2026, sobre a branch da PR #72</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério testado teve um comportamento quebrado de propósito no frontend, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 17 quebras, uma para cada critério do CA01 ao CA17. Alguns exemplos: o botão continuar "Registrar plano de ação" mesmo com ações, o "O que será feito?" deixar de vir com a recomendação, os locais saírem separados por vírgula, o nome do responsável aceitar 60 caracteres, o início depois da conclusão ser aceito, a situação inicial aparecer como "Atrasada", a caixa ⓘ ir para baixo do campo, o campo longo perder a altura máxima e a tabela de responsáveis deixar de empilhar no celular. O teste certo reprovou em todas, no passo do próprio critério, e cada quebra foi desfeita logo depois.</li>
<li><strong>Contraprova do CA18:</strong> mais 7 quebras no frontend: o campo deixar de ser obrigatório, o limite passar para 600 caracteres, o texto do exemplo mudar, a caixa sumir, as perguntas seguintes não serem renumeradas, a pergunta aparecer antes de "O que será feito?" e a edição abrir sem o texto salvo. O CT-FUN-132 reprovou em todas; o CT-FUN-110, o CT-FUN-111 e o CT-FUN-118 também reprovaram nas quebras que tocam no que eles conferem.</li>
<li><strong>Uma quebra que não pegou na primeira vez:</strong> a primeira quebra do CA15 mexeu na regra geral da caixa de texto, mas o formulário do plano usa a regra própria do formulário, que continuou limitando a altura. Nenhum teste reprovou porque a tela não tinha mudado. Com a quebra na regra certa, o CT-FUN-111 reprovou no passo do campo longo.</li>
<li><strong>A falha conhecida avisou a correção:</strong> com o frontend de 15/11, o CT-FUN-110 acusou "Expected to fail, but passed" no teste das previsões, como a versão 1.1 previa, e a marca de falha conhecida saiu na PR #72. Para mostrar que o teste, sem a marca, confere a regra, ele rodou contra o frontend de 13/11 (45283a7), ainda com o defeito, e reprovou no passo da caixa de "Previsão de início".</li>
<li><strong>Esteira das PRs:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/42819189024">execução da CI da PR #52</a>, no Chromium e sobre o último commit (f463dc2) já unido à main, terminou com 202 testes aprovados, nenhum com falha e 14 pendentes. A <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43137044408">execução da CI da PR #54</a>, sobre o último commit (2ef3338), terminou com 204 aprovados, nenhum com falha e 14 pendentes. A <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43784400876">execução da CI da PR #72</a>, na develop de 15/11, terminou com 228 aprovados, nenhum com falha e 8 pendentes. Os testes da US-5.1 tiveram o resultado esperado nas três.</li>
<li><strong>Três navegadores:</strong> os testes da US-5.1 passaram também no Firefox e no WebKit, sem segunda tentativa: na máquina local e na CI da main, na develop de 10/11, e na máquina local, na de 15/11.</li>
</ul>

<div class="ns-rel-citacao">A gravação da ação no banco e o cálculo dos campos pendentes são decididos pelo servidor e não tiveram quebra pelo frontend; a reação da tela a essas respostas teve.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-5.1.** Os 18 estão verificados e aprovados. O BUG-FRONT-021 foi corrigido no [PR #29 do frontend](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/29) e está fechado no [Relatório de Bugs](../relatorio-bugs.md#bug-front-021).

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #52](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52) | Automação dos casos de teste das US-5.1 a US-5.4 |
| [Issue e2e #50](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/50) | Tarefa da automação |
| [PR e2e #54](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/54) | Automação do CT-FUN-132 (CA18) e adaptação da suíte à develop de 10/11 |
| [Issue e2e #53](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/53) | Tarefa do CA18 |
| [PR e2e #72](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/72) | Suíte na develop de 15/11, sem a falha conhecida do CT-FUN-110 |
| [Issue e2e #51](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/51) | Defeito da caixa ⓘ das previsões (BUG-FRONT-021), corrigido no [PR frontend #29](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/29) |
| `tests/funcionais/ct-fun-103.spec.ts` a `ct-fun-112.spec.ts` e `ct-fun-132.spec.ts` | Casos funcionais da US-5.1 |
| [PR frontend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18) e [PR backend #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13) | Implementação do plano de ação testada aqui |
| [PR frontend #25](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/25) e [PR backend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/17) | Implementação do CA18 ("Como a ação será realizada?") |
| [Casos de Teste](../casos-de-teste.md#testes-funcionais-epico-5) | Fichas do CT-FUN-103 ao CT-FUN-112 e do CT-FUN-132 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-5.1 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-5.1 e os 18 critérios de aceite |
| [Relatório de Bugs](../relatorio-bugs.md#bug-front-021) | BUG-FRONT-021, fechado |
| Relatórios end-to-end das [US-5.2](plano-acao-us-5-2-e2e.md), [US-5.3](plano-acao-us-5-3-e2e.md) e [US-5.4](plano-acao-us-5-4-e2e.md) | As outras histórias da mesma automação |

<p class="ns-rel-rodape">REL_Testes_E2E_PlanoAcao_US51_v1_2 — compilado a partir das execuções da suíte end-to-end (Playwright) das branches test/50/automatiza-cts-us-5-1-a-5-4, test/53/atualiza-suite-e-automatiza-ct-fun-132 e test/69/atualiza-submodulos-develop-15-11 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 12 e 15/11/2026.</p>

</div>

</div>
