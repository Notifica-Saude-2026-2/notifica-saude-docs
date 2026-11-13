<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 5 - Gestão de Plano de Ação · Registro de ações · US-5.1

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_PlanoAcao_US51_v1_0</code></span><span>Emissão <em>12 de novembro de 2026</em></span><span>Branch <code>test/50/automatiza-cts-us-5-1-a-5-4</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_PlanoAcao_US51_v1_0.pdf){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Criação do relatório de testes end-to-end da US-5.1 (acessar e preencher o plano de ação), a partir da [PR #52 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-5.1 é o **formulário de uma ação do plano de ação**: depois da análise do incidente, o NSP ou o Gestor da Área registra o que será feito, onde, por quem, quando, se precisa de recurso ou de aprovação da Alta Gestão, como comprovar, que resultado se espera, como e quando verificar e se a ação gera um indicador. Cada pergunta tem uma caixa de explicação, e o formulário confere os campos obrigatórios e os limites de caracteres antes de salvar. Os dez casos de teste da história (CT-FUN-103 a 112) foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Formulário da ação (tela e servidor)</strong><span>Testado de ponta a ponta no navegador.<br>Dos 18 critérios de aceite, 16 estão totalmente verificados e aprovados. O CA14 passa em 10 das 12 perguntas, e o CA18 ainda não tem teste.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>1 defeito encontrado</strong><span>A caixa ⓘ das previsões de início e de conclusão fica acima das duas perguntas, e o CA14 pede logo abaixo de cada uma (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/51">e2e#51</a>, BUG-FRONT-021).</span></div>
</div>

Em resumo: **o formulário da ação funciona do jeito que a história pede** em 16 dos 18 critérios: botões conforme o status, recomendação pré-preenchida, campos obrigatórios e limites, locais, responsáveis, datas, recurso, aprovação, indicador, campo longo, aviso ao salvar e tabelas no celular. O defeito das previsões não impede o preenchimento: a explicação está na tela, só fora da posição pedida. O CA18 ("Como a ação será realizada?") foi publicado no sistema em 10/11/2026, depois da versão testada, e ganha caso de teste na próxima tarefa. Cada um dos 17 critérios testados teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52 · Executado em 10/11/2026 no Chromium (máquina local, sem segunda tentativa, e CI da PR), no Firefox e no WebKit (máquina local) e em 12/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 51ed198 e backend 97352ef (develop de 06/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>12</strong><span>testes da US-5.1</span></div>
<div><strong>11</strong><span>testes aprovados</span></div>
<div><strong>1</strong><span>falha conhecida</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 10/11 (15 testes rodados, menos os 3 passos de login, que não são da história); na CI da PR, os mesmos 12 testes tiveram o mesmo resultado. O CT-FUN-110 tem dois testes (as 10 perguntas com caixa própria e as previsões, onde está o defeito), e o CT-FUN-112 também (tela de computador e tela de celular).</p>

### Os dez casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Acesso ao formulário e situação inicial</strong> (CT-FUN-103: CA01 e CA07): com a análise não concluída, o aviso "O plano de ação ficará disponível após a conclusão da análise." e nenhum botão; com o incidente "Analisado" e sem ações, o botão "Registrar plano de ação"; com ações, e também em "Em ação", o botão "Adicionar outra ação"; nas três aberturas, a "Situação da ação" travada em "Em andamento".</li>
<li><strong>Recomendação pré-preenchida</strong> (CT-FUN-104: CA02): o "O que será feito?" vem com a próxima recomendação da análise que ainda não tem ação, e a ação salva fica ligada a ela na coluna "Recomendação"; quando todas já têm ação, o campo vem vazio.</li>
<li><strong>Campos de texto</strong> (CT-FUN-105: CA03, CA10, CA11 e CA12): "O que será feito?", "Como vamos comprovar", "Qual resultado esperamos?", "Como vamos saber se funcionou?" e "Quando verificar o resultado?" são obrigatórios; com 501 e 101 caracteres, o contador fica vermelho, o texto não é cortado e nada é salvo; com 500 e 100, a ação é salva.</li>
<li><strong>Onde será feito</strong> (CT-FUN-106: CA04): os 8 locais e "Outro", na ordem, um abaixo do outro; sem nenhum local, não salva; "Outro" pede a especificação, com até 50 caracteres; com vários locais, os detalhes mostram "Farmácia Hospitalar; UTI; …", separados por "; ".</li>
<li><strong>Responsáveis</strong> (CT-FUN-107: CA05): a tabela começa com uma linha, com Nome, Função e Setor; Função e Setor têm "Outro"; linha vazia não salva; o nome aceita até 50 caracteres e o "Outro", até 30; com duas linhas, as duas oferecem "Remover", como no protótipo; a coluna "Responsável" mostra os dois nomes.</li>
<li><strong>Previsões</strong> (CT-FUN-108: CA06): as duas datas são obrigatórias; o calendário do início não passa da conclusão; início depois da conclusão mostra o aviso, destaca os dois campos e não salva; início igual à conclusão salva.</li>
<li><strong>Recurso, aprovação e indicador</strong> (CT-FUN-109: CA08, CA09 e CA13): "Sim" e "Não" nas três perguntas; com "Não", nada a mais é pedido; com "Sim", a tabela de recursos, a aprovação e o indicador passam a ser obrigatórios, com até 100 caracteres; uma linha de recurso vazia não salva; dois recursos completos salvam.</li>
<li><strong>Textos explicativos</strong> (CT-FUN-110: CA14): em 10 perguntas, a caixa azul com ⓘ fica entre a pergunta e o campo, com a explicação do critério, antes de qualquer resposta. <span class="ns-rel-cor--warn">Nas previsões, a caixa fica acima das duas perguntas (falha conhecida, e2e#51).</span></li>
<li><strong>Limites, campo longo e aviso ao salvar</strong> (CT-FUN-111: CA15 e CA16): o formulário vazio não salva, destaca os obrigatórios, inclusive as células das tabelas, e o aviso lista os 9 campos que faltam; o campo longo tem altura máxima de 200 px e, a partir dela, o texto rola dentro da caixa; o aviso cita o campo que falta, o texto acima do limite e as datas inválidas; corrigido, salva.</li>
<li><strong>Tabelas responsivas</strong> (CT-FUN-112: CA17): na tela de computador, as tabelas de responsáveis e de recursos ocupam a largura do formulário; a coluna "Remover" só aparece com duas linhas; na tela de celular, cada linha vira um bloco, com o rótulo acima de cada campo.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--warn">Com falha conhecida</span> | CA14 (as caixas das outras 10 perguntas passaram) | 1 |
| <span class="ns-rel-cor--warn">Pendente</span> | CA18 (publicado no sistema em 10/11/2026, depois da versão testada) | 1 |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA13 e CA15 a CA17 | 16 |

<div class="ns-rel-info" markdown>

**Como ler as pendências e as falhas conhecidas.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. O CA14 tem teste em todas as perguntas, mas nas previsões o sistema faz diferente do critério: esse trecho é uma **falha conhecida**, um teste que confere o que o critério pede e falha enquanto o defeito existir, sem deixar a esteira vermelha. Quando o defeito for corrigido, o próprio teste avisa (seção 5). O CA18 é **pendente**: o campo "Como a ação será realizada?" não existia na versão testada.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43331738195">CI da main</a>, depois do merge da PR #56, que só fixou o sistema da CI no Ubuntu 24.04, em 12/11/2026</p>

<div class="ns-rel-placar">
<div><strong>202</strong><span>testes executados no Chromium</span></div>
<div><strong>202</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

| Navegador | Aprovados | Com falha | Instáveis | Pendentes ou manuais |
| --- | --- | --- | --- | --- |
| Chromium | 202 | 0 | 0 | 14 |
| WebKit (Safari) | 201 | 0 | 1 (CT-E2E-022) | 14 |
| Firefox | 202 | 0 | 0 | 14 |

<p class="ns-rel-legenda">Outros 14 testes estão pendentes ou são manuais: os 12 pendentes das US-4.1 a 4.3, que serão retomados em tarefa própria, e os 2 manuais. Os aprovados incluem 1 falha conhecida, a do CT-FUN-110 (BUG-FRONT-021), que conta como esperada. "Instável" é o teste que falhou e passou na segunda tentativa. O teste do limite de tentativas de login roda à parte e também passou.</p>

<div class="ns-rel-aviso" markdown>**O teste instável do WebKit, o CT-E2E-022, é da US-4.3 e não vem desta entrega.** A execução no WebKit começou antes da meia-noite no relógio da CI e terminou depois dela. O teste comparou a data do incidente com a data do dia seguinte e, na segunda tentativa, passou.</div>
Comparada à [execução da main antes desta entrega](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/42818640218), de 10/11, o Chromium passou de 179 para 202 aprovados, com 0 falhas e 14 pendentes nas duas: são os 23 testes das US-5.1 a 5.4. Nenhum teste que passava antes deixou de passar. Na máquina local, a suíte inteira teve o mesmo resultado. Na CI da main, os 23 testes das US-5.1 a 5.4 passaram também no Firefox e no WebKit, sem segunda tentativa.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a branch da PR #52 (f463dc2), em 10/11/2026</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério testado teve um comportamento quebrado de propósito no frontend, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 17 quebras, uma para cada critério do CA01 ao CA17. Alguns exemplos: o botão continuar "Registrar plano de ação" mesmo com ações, o "O que será feito?" deixar de vir com a recomendação, os locais saírem separados por vírgula, o nome do responsável aceitar 60 caracteres, o início depois da conclusão ser aceito, a situação inicial aparecer como "Atrasada", a caixa ⓘ ir para baixo do campo, o campo longo perder a altura máxima e a tabela de responsáveis deixar de empilhar no celular. O teste certo reprovou em todas, no passo do próprio critério, e cada quebra foi desfeita logo depois.</li>
<li><strong>Uma quebra que não pegou na primeira vez:</strong> a primeira quebra do CA15 mexeu na regra geral da caixa de texto, mas o formulário do plano usa a regra própria do formulário, que continuou limitando a altura. Nenhum teste reprovou porque a tela não tinha mudado. Com a quebra na regra certa, o CT-FUN-111 reprovou no passo do campo longo.</li>
<li><strong>A falha conhecida avisa quando o defeito for corrigido:</strong> a caixa das previsões foi posta, de propósito, logo abaixo de cada pergunta de data, como o CA14 pede. O CT-FUN-110 acusou "Expected to fail, but passed" no teste das previsões. Quando o frontend corrigir de verdade, a esteira vai avisar que é hora de tirar a marca de falha conhecida.</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/42819189024">execução da CI da PR #52</a>, no Chromium e sobre o último commit (f463dc2) já unido à main, terminou com 202 testes aprovados, nenhum com falha e 14 pendentes. Os 12 testes da US-5.1 tiveram o resultado esperado.</li>
<li><strong>Três navegadores:</strong> os testes da US-5.1 passaram também no Firefox e no WebKit, na máquina local e na CI da main, sem segunda tentativa.</li>
</ul>

<div class="ns-rel-citacao">A gravação da ação no banco e o cálculo dos campos pendentes são decididos pelo servidor e não tiveram quebra pelo frontend; a reação da tela a essas respostas teve.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **CA18 — "Como a ação será realizada?":** o campo foi publicado em 10/11/2026 ([PR #25 do frontend](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/25) e [PR #17 do backend](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/17)), depois da versão testada. Ele é obrigatório e muda a numeração das perguntas. A próxima tarefa escreve o caso de teste dele, atualiza os submódulos do notifica-saude-e2e e ajusta os testes que contam os campos do formulário, como o aviso do CA16 e o "Faltam N campos" da US-5.3.
- **Defeito [e2e#51](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/51) (BUG-FRONT-021, frontend):** a caixa ⓘ das previsões de início e de conclusão fica acima das duas perguntas, e o CA14 pede logo abaixo de cada uma. O protótipo também põe a caixa acima, e a equipe de testes decidiu seguir o critério. O defeito está no [Relatório de Bugs](../relatorio-bugs.md#bug-front-021).

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #52](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52) | Automação dos casos de teste das US-5.1 a US-5.4 |
| [Issue e2e #50](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/50) | Tarefa da automação |
| [Issue e2e #51](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/51) | Defeito da caixa ⓘ das previsões (BUG-FRONT-021) |
| `tests/funcionais/ct-fun-103.spec.ts` a `ct-fun-112.spec.ts` | Casos funcionais da US-5.1 |
| [PR frontend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18) e [PR backend #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13) | Implementação do plano de ação testada aqui |
| [Casos de Teste](../casos-de-teste.md#testes-funcionais-epico-5) | Fichas do CT-FUN-103 ao CT-FUN-112 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-5.1 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-5.1 e os 18 critérios de aceite |
| [Relatório de Bugs](../relatorio-bugs.md#bug-front-021) | BUG-FRONT-021 |
| Relatórios end-to-end das [US-5.2](plano-acao-us-5-2-e2e.md), [US-5.3](plano-acao-us-5-3-e2e.md) e [US-5.4](plano-acao-us-5-4-e2e.md) | As outras histórias da mesma automação |

<p class="ns-rel-rodape">REL_Testes_E2E_PlanoAcao_US51_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/50/automatiza-cts-us-5-1-a-5-4 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 10/11/2026.</p>

</div>

</div>
