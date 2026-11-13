<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 5 - Gestão de Plano de Ação · Ações vindas das recomendações · US-5.3

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_PlanoAcao_US53_v1_0</code></span><span>Emissão <em>12 de novembro de 2026</em></span><span>Branch <code>test/50/automatiza-cts-us-5-1-a-5-4</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_PlanoAcao_US53_v1_0.pdf){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Criação do relatório de testes end-to-end da US-5.3 (completar ações originadas das recomendações da análise), a partir da [PR #52 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-5.3 trata das **ações que nascem das recomendações da análise**: quando a análise é finalizada, cada recomendação vira uma ação no plano, só com o "O que será feito?" preenchido. Essas ações aparecem com o selo laranja "Preenchimento pendente", não podem ter o andamento atualizado e são completadas pelo lápis "Completar preenchimento". Completada, a ação passa a "Em andamento", entra no histórico e leva o incidente a "Em ação". Os três casos de teste da história (CT-FUN-115 a 117) e o percurso CT-E2E-031, que vai da conclusão da análise até "Em ação", foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Ações das recomendações (tela e servidor)</strong><span>Testadas de ponta a ponta no navegador.<br>Dos 6 critérios de aceite, os 6 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>Nenhum defeito no sistema</strong><span>Nenhum teste da história ficou como falha conhecida.</span></div>
</div>

Em resumo: **as ações vindas das recomendações funcionam do jeito que a história pede**: uma por recomendação, identificadas como pendentes, sem andamento até serem completadas, com o formulário próprio de completar e, completadas, liberadas para o acompanhamento, no histórico e com o status do incidente atualizado. Cada um dos 6 critérios teve uma quebra de propósito no sistema, uma delas no servidor, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52 · Executado em 10/11/2026 no Chromium (máquina local, sem segunda tentativa, e CI da PR), no Firefox e no WebKit (máquina local) e em 12/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 51ed198 e backend 97352ef (develop de 06/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>5</strong><span>testes da US-5.3</span></div>
<div><strong>5</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 10/11 (8 testes rodados, menos os 3 passos de login, que não são da história); na CI da PR, os mesmos 5 testes passaram. O CT-E2E-031 tem dois testes, um para cada caminho até "Em ação" (completar uma ação pendente ou registrar uma ação nova), e confere também critérios das US-5.1 e 5.2.</p>

### Os casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Ações pendentes na tabela</strong> (CT-FUN-115: CA01, CA02 e CA03): uma ação por recomendação, com o texto dela no "O que será feito?" e na coluna "Recomendação", e "—" nas demais colunas; o selo laranja "Preenchimento pendente", com a dica "Faltam N campo(s) obrigatório(s)…" e o mesmo aviso nos detalhes; sem o botão "Atualizar andamento"; e, depois de completada, a ação mostra "Em andamento" e o andamento liberado.</li>
<li><strong>Completar a ação</strong> (CT-FUN-116: CA04 e CA05): o lápis com a dica "Completar preenchimento" abre "Completar plano de ação", com a explicação de que a ação veio de uma recomendação e com a recomendação no "O que será feito?"; com um campo vazio, não salva; completada, a ação fica "Em andamento", o andamento é liberado e o histórico registra "Ação 1: plano de ação completado.".</li>
<li><strong>Quando dá para completar</strong> (CT-FUN-117: CA06): com a análise concluída, antes e depois da decisão pós-análise, o lápis "Completar preenchimento" aparece e a ação é salva; com o incidente concluído, ele não aparece.</li>
<li><strong>Da conclusão da análise até "Em ação"</strong> (CT-E2E-031): o Gestor da Área finaliza a análise e as duas recomendações viram ações pendentes; completada uma delas, o status do incidente passa de "Analisado" a "Em ação", e o histórico registra; a ação nova vem com o campo vazio, porque as duas recomendações já têm ação, e vai para a terceira linha; ao reabrir, as três ações continuam, com o vínculo às recomendações. No segundo caminho, registrar uma ação nova sem completar as pendentes também leva a "Em ação", e as pendentes continuam pendentes.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA06 | 6 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-5.3, nenhuma parte ficou pendente nem como falha conhecida. O CA01 pede a indicação "Veio de uma recomendação da análise"; o protótipo e o sistema mostram, em vez dela, a coluna "Recomendação" com o texto de origem, e o teste confere a coluna (seção 6).

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

<p class="ns-rel-legenda">Outros 14 testes estão pendentes ou são manuais: os 12 pendentes das US-4.1 a 4.3, que serão retomados em tarefa própria, e os 2 manuais. Os aprovados incluem 1 falha conhecida, a do CT-FUN-110 (BUG-FRONT-021, da US-5.1), que conta como esperada. "Instável" é o teste que falhou e passou na segunda tentativa. O teste do limite de tentativas de login roda à parte e também passou.</p>

<div class="ns-rel-aviso" markdown>**O teste instável do WebKit, o CT-E2E-022, é da US-4.3 e não vem desta entrega.** A execução no WebKit começou antes da meia-noite no relógio da CI e terminou depois dela. O teste comparou a data do incidente com a data do dia seguinte e, na segunda tentativa, passou.</div>
Comparada à [execução da main antes desta entrega](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/42818640218), de 10/11, o Chromium passou de 179 para 202 aprovados, com 0 falhas e 14 pendentes nas duas: são os 23 testes das US-5.1 a 5.4. Nenhum teste que passava antes deixou de passar. Na máquina local, a suíte inteira teve o mesmo resultado. Na CI da main, os 23 testes das US-5.1 a 5.4 passaram também no Firefox e no WebKit, sem segunda tentativa.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a branch da PR #52: a quebra no servidor em 08/11/2026, e as do frontend em 10/11/2026, no commit f463dc2</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério teve um comportamento quebrado de propósito, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 6 quebras, cinco no frontend: as ações vindas das recomendações sumirem da tabela, a dica do selo contar um campo a mais, o "Atualizar andamento" aparecer na ação pendente, a ação pendente abrir como "Editar plano de ação" e o "Completar" sumir antes da decisão pós-análise. O teste certo reprovou em todas, no passo do próprio critério, e cada quebra foi desfeita logo depois.</li>
<li><strong>Uma quebra no servidor:</strong> a regra do CA05, completar a ação leva o incidente de "Analisado" a "Em ação", é decidida pelo servidor. Ela foi desligada no backend, com a imagem reconstruída, em 08/11. O CT-E2E-031 reprovou no passo do CA05, com o status "Analisado" no lugar de "Em ação", e o segundo caminho, que registra uma ação nova e usa outra parte do servidor, continuou passando. A regra foi religada, e os testes passaram de novo.</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/42819189024">execução da CI da PR #52</a>, no Chromium e sobre o último commit (f463dc2) já unido à main, terminou com 202 testes aprovados, nenhum com falha e 14 pendentes. Os 5 testes da US-5.3 passaram.</li>
<li><strong>Três navegadores:</strong> os testes da US-5.3 passaram também no Firefox e no WebKit, na máquina local e na CI da main, sem segunda tentativa.</li>
</ul>

<div class="ns-rel-citacao">A criação das ações a partir das recomendações e a contagem dos campos pendentes são feitas pelo servidor; a quebra do CA01 atingiu a tela, que deixou de mostrar essas ações. O registro "plano de ação completado." no histórico também vem do servidor e não teve quebra própria.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-5.3.** Os 6 estão verificados e aprovados.
- **Redação do CA01:** o critério pede a indicação "Veio de uma recomendação da análise". O protótipo e o sistema mostram a coluna "Recomendação", com o texto de origem, e o teste segue o protótipo. O ajuste da redação foi pedido à equipe de requisitos.
- **"Faltam N campos" e o CA18 da US-5.1:** o teste não fixa o N. Ele confere que o N da dica é o mesmo dos detalhes e o mesmo da lista de campos que o formulário pede (hoje, 8). O campo "Como a ação será realizada?", publicado em 10/11/2026, vai somar um campo, e o teste continua valendo sem mudança.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #52](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52) | Automação dos casos de teste das US-5.1 a US-5.4 |
| [Issue e2e #50](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/50) | Tarefa da automação |
| `tests/funcionais/ct-fun-115.spec.ts` a `ct-fun-117.spec.ts` | Casos funcionais da US-5.3 |
| `tests/e2e/ct-e2e-031.spec.ts` | Percurso da conclusão da análise até "Em ação" |
| [PR frontend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18) e [PR backend #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13) | Implementação do plano de ação testada aqui |
| [Casos de Teste](../casos-de-teste.md#testes-us-5-3) | Fichas do CT-FUN-115 ao CT-FUN-117, e do [CT-E2E-031](../casos-de-teste.md#ct-e2e-031) |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-5.3 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-5.3 e os 6 critérios de aceite |
| Relatórios end-to-end das [US-5.1](plano-acao-us-5-1-e2e.md), [US-5.2](plano-acao-us-5-2-e2e.md) e [US-5.4](plano-acao-us-5-4-e2e.md) | As outras histórias da mesma automação |

<p class="ns-rel-rodape">REL_Testes_E2E_PlanoAcao_US53_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/50/automatiza-cts-us-5-1-a-5-4 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 08/11 e 10/11/2026.</p>

</div>

</div>
