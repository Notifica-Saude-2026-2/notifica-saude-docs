<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 5 - Gestão de Plano de Ação · Adição de ações · US-5.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_PlanoAcao_US52_v1_0</code></span><span>Emissão <em>12 de novembro de 2026</em></span><span>Branch <code>test/50/automatiza-cts-us-5-1-a-5-4</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_PlanoAcao_US52_v1_0.pdf){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Criação do relatório de testes end-to-end da US-5.2 (adicionar ações ao plano de ação), a partir da [PR #52 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-5.2 é a **adição de ações ao plano**: com uma ação já registrada, o botão "Adicionar outra ação" abre um formulário novo; as ações anteriores continuam como estavam, cada uma numa linha da tabela, na ordem do registro; a ação que veio de uma recomendação da análise fica ligada a ela; salvar registra a ação no histórico e leva o incidente a "Em ação"; e cancelar não registra nada. Os dois casos de teste da história (CT-FUN-113 e 114) foram automatizados, e os critérios CA03 e CA05 são conferidos pelo percurso CT-E2E-031, que atravessa as US-5.1 a 5.3. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Adição de ações (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Dos 6 critérios de aceite, os 6 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>Nenhum defeito no sistema</strong><span>Nenhum teste da história ficou como falha conhecida.</span></div>
</div>

Em resumo: **adicionar ações funciona do jeito que a história pede**: o formulário novo vem vazio, as ações anteriores ficam preservadas e na ordem, a recomendação de origem continua ligada à ação, o registro aparece na tabela e no histórico e muda o status do incidente, e cancelar não deixa rastro. Cada um dos 6 critérios teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52 · Executado em 10/11/2026 no Chromium (máquina local, sem segunda tentativa, e CI da PR), no Firefox e no WebKit (máquina local) e em 12/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 51ed198 e backend 97352ef (develop de 06/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>2</strong><span>testes da US-5.2</span></div>
<div><strong>2</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 10/11 (5 testes rodados, menos os 3 passos de login, que não são da história); na CI da PR, os mesmos 2 testes passaram. Os CA03 e CA05 são conferidos pelo CT-E2E-031, cujos 2 testes são contados no <a href="../plano-acao-us-5-3-e2e/">relatório da US-5.3</a>, onde está a ficha dele; os dois também passaram.</p>

### Os casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Formulário novo, ações preservadas e uma linha por ação</strong> (CT-FUN-113: CA01, CA02 e CA04): com a ação A registrada, "Adicionar outra ação" abre "Registrar plano de ação" com todos os campos vazios, sem nenhum dado da ação A; salva a ação B, a tabela tem duas linhas, a ação A na primeira e a B na segunda; e a ação A continua com o responsável, as datas, a situação e os detalhes que tinha.</li>
<li><strong>Cancelar o registro</strong> (CT-FUN-114: CA06): preenchido e cancelado, o formulário fecha, a tabela continua só com a ação A, o histórico tem a mesma quantidade de eventos e não registra "Ação 2: ação registrada.", também depois de reabrir a notificação; aberto de novo, o formulário vem vazio.</li>
<li><strong>Recomendação de origem e salvamento</strong> (CT-E2E-031: CA03 e CA05): a ação criada de uma recomendação mostra o texto dela na coluna "Recomendação", e o vínculo continua ao reabrir a notificação; a ação nova vai para a tabela e para o histórico ("Ação N: ação registrada."), e o status do incidente passa de "Analisado" a "Em ação", ou continua "Em ação".</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA06 | 6 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-5.2, nenhuma parte ficou pendente nem como falha conhecida.

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

<p class="ns-rel-meta">Executadas sobre a branch da PR #52 (f463dc2), em 10/11/2026</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério teve um comportamento quebrado de propósito no frontend, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 6 quebras: o formulário de uma ação nova já vir com um campo preenchido, a ação anterior perder a previsão de início depois do registro de outra, a coluna "Recomendação" deixar de mostrar a recomendação de origem, as ações aparecerem em ordem inversa, a tela não atualizar a tabela nem o status depois de salvar, e "Cancelar" passar a salvar. O teste certo reprovou em todas, no passo do próprio critério, e cada quebra foi desfeita logo depois.</li>
<li><strong>Uma quebra pega antes da hora:</strong> a primeira versão da quebra do CA02 (a tabela mostrar só a última ação) foi pega no passo do CA04 do CT-FUN-113, que vem antes do passo do CA02 no mesmo teste. Para mostrar o passo do CA02 reprovando sozinho, a quebra foi trocada por outra que só ele pega.</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/42819189024">execução da CI da PR #52</a>, no Chromium e sobre o último commit (f463dc2) já unido à main, terminou com 202 testes aprovados, nenhum com falha e 14 pendentes. Os testes da US-5.2 e o CT-E2E-031 passaram.</li>
<li><strong>Três navegadores:</strong> os testes da US-5.2 e o CT-E2E-031 passaram também no Firefox e no WebKit, na máquina local e na CI da main, sem segunda tentativa.</li>
</ul>

<div class="ns-rel-citacao">O registro no histórico e a mudança do status para "Em ação" são decididos pelo servidor. A quebra do CA05 atingiu a tela, que deixou de mostrar o que o servidor devolveu; a regra do status no servidor teve quebra própria na US-5.3 (relatório da US-5.3, seção 5). A numeração das ações também vem do servidor.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-5.2.** Os 6 estão verificados e aprovados.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #52](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52) | Automação dos casos de teste das US-5.1 a US-5.4 |
| [Issue e2e #50](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/50) | Tarefa da automação |
| `tests/funcionais/ct-fun-113.spec.ts` e `ct-fun-114.spec.ts` | Casos funcionais da US-5.2 |
| `tests/e2e/ct-e2e-031.spec.ts` | Percurso da montagem do plano até "Em ação" (CA03 e CA05) |
| [PR frontend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18) e [PR backend #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13) | Implementação do plano de ação testada aqui |
| [Casos de Teste](../casos-de-teste.md#testes-us-5-2) | Fichas do CT-FUN-113 e do CT-FUN-114, e do [CT-E2E-031](../casos-de-teste.md#ct-e2e-031) |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-5.2 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-5.2 e os 6 critérios de aceite |
| Relatórios end-to-end das [US-5.1](plano-acao-us-5-1-e2e.md), [US-5.3](plano-acao-us-5-3-e2e.md) e [US-5.4](plano-acao-us-5-4-e2e.md) | As outras histórias da mesma automação |

<p class="ns-rel-rodape">REL_Testes_E2E_PlanoAcao_US52_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/50/automatiza-cts-us-5-1-a-5-4 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 10/11/2026.</p>

</div>

</div>
