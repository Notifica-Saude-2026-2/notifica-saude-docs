<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 6 - Status e Ciclo de Vida do Incidente · Visualizar o status e o ciclo de vida · US-6.1

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_CicloVida_US61_v1_0</code></span><span>Emissão <em>15 de novembro de 2026</em></span><span>Branch <code>test/71/automatiza-cts-us-6-1-e-6-2</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_CicloVida_US61_v1_0.pdf){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 15/11/2026 | Criação do relatório de testes end-to-end da US-6.1 (visualizar o status e o ciclo de vida do incidente), a partir da [PR #74 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/74). Execução sobre o frontend 78246a9 e o backend 946dff0 (develop de 15/11). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-6.1 é **o status e o ciclo de vida do incidente**:

- o status aparece na lista e no detalhe, e a notificação registrada começa "Novo";
- ninguém troca o status à mão: ele é só exibido, e o NSP tem apenas os encerramentos;
- o ciclo só avança, e o que já passou deixa de ser oferecido;
- o prazo para análise aparece só nos status em que a análise está para acontecer;
- "Concluído" e "Arquivado" ficam só para consulta.

Os quatro casos funcionais da história (CT-FUN-133 a 136) e os dois percursos do ciclo inteiro (CT-E2E-036 e 037) foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Status e ciclo de vida (tela e servidor)</strong><span>Testados de ponta a ponta no navegador.<br>Dos 6 critérios de aceite, os 6 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>Nenhum defeito na US-6.1</strong><span>Nenhum teste da história ficou como falha conhecida.</span></div>
</div>

Em resumo: **o status e o ciclo de vida funcionam do jeito que a história pede**:

- o card e o cabeçalho mostram o mesmo status nos oito status do ciclo;
- o status é um selo, sem campo de escolha, e o gestor nem vê o menu ⋮;
- cada etapa vencida deixa de ser oferecida;
- o prazo aparece só em "Classificado", "Encaminhado" e "Em análise";
- "Concluído" e "Arquivado" não oferecem nenhuma edição.

Cada regra que a tela decide teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/74 · Executado em 15/11/2026 no Chromium, no Firefox e no WebKit (máquina local, sem segunda tentativa; no WebKit, 3 vezes seguidas), com frontend 78246a9 e backend 946dff0 (develop de 15/11), e em 14/11/2026 nos três navegadores, com frontend 45283a7 e backend 5ecd1b4 (develop de 13/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>7</strong><span>testes da US-6.1</span></div>
<div><strong>7</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 15/11, com o mesmo resultado nos três navegadores. O CT-FUN-133 tem dois testes: a notificação registrada pela tela e as oito notificações, uma em cada status. Os CT-E2E-036 e 037 percorrem o ciclo inteiro e conferem também a US-6.2; a ficha deles é das duas histórias, então eles contam nos dois relatórios.</p>

### Os casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Status na lista e no detalhe</strong> (CT-FUN-133: CA01 e CA02): a notificação registrada pela tela começa "Novo", no card da lista e no cabeçalho do detalhe. Nas oito notificações, uma em cada status do ciclo, o card e o cabeçalho mostram o mesmo status.</li>
<li><strong>Status sem alteração manual</strong> (CT-FUN-134: CA03): o status é um selo, sem campo, lista ou botão de escolha. Num incidente "Em ação", o menu ⋮ do NSP oferece só "Concluir incidente" e "Arquivar notificação". O Gestor da Área vê o mesmo selo, sem o menu.</li>
<li><strong>Ciclo que só avança</strong> (CT-E2E-036 e 037: CA04): depois do encaminhamento, a classificação fica bloqueada e o encaminhamento não é oferecido de novo. Depois de "Finalizar análise", a análise fica só para leitura. Depois da decisão do NSP, ela não é oferecida de novo. Concluído o incidente, o menu ⋮ não aparece mais. Com a análise pelo NSP, o incidente vai de "Analisado" direto a "Concluído", sem passar por "Em ação".</li>
<li><strong>Prazo para análise conforme o status</strong> (CT-FUN-135: CA05): o card mostra "Análise:" com a situação do prazo, e a seção "Classificação" mostra "Prazo para análise: dd/mm/aaaa" com a data-limite gravada, só em "Classificado", "Encaminhado" e "Em análise". Nos outros cinco status, nenhum dos dois aparece.</li>
<li><strong>Incidente concluído ou arquivado só para consulta</strong> (CT-FUN-136: CA06): em "Em ação", o plano oferece editar, atualizar o andamento, excluir e adicionar, e o menu ⋮ os dois encerramentos. Em "Concluído" e "Arquivado", nada disso: as seções mostram "Edição bloqueada", a análise fica só para leitura, e o arquivado não oferece "Encaminhar para o setor analisar".</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA06 | 6 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-6.1, nenhuma parte ficou pendente nem como falha conhecida.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e na máquina local, sobre a branch da PR #74 (develop de 15/11), em 15/11/2026</p>

<div class="ns-rel-placar">
<div><strong>239</strong><span>testes executados no Chromium</span></div>
<div><strong>239</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

| Navegador | Aprovados | Com falha | Instáveis | Pendentes ou manuais |
| --- | --- | --- | --- | --- |
| Chromium | 239 | 0 | 0 | 8 |

<p class="ns-rel-legenda">Outros 8 testes estão pendentes ou são manuais: os 4 do CT-NF-010, que só rodam com a verificação anti-robô ligada, os 2 do CT-FUN-048, pendentes até as fichas novas da US-4.2, e os 2 manuais. Nenhum teste foi instável. A CI da main roda os três navegadores depois do merge.</p>

Comparada à suíte da [PR #72](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/72), que leva os submódulos à develop de 15/11 e sobre a qual esta automação foi feita, o Chromium passou de 228 para 239 aprovados, com 0 falhas e 8 pendentes nas duas. Os 11 a mais são os testes das US-6.1 e 6.2. Nenhum teste que passava antes deixou de passar.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Contraprova executada em 14/11/2026, com o frontend local sobre o 45283a7 e o backend 5ecd1b4 (develop de 13/11). O frontend de 15/11 mudou só a exportação do Ishikawa e as caixas ⓘ do plano de ação, fora das regras desta história.</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada regra que a tela decide foi quebrada de propósito no frontend, uma por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 16 quebras nas regras da US-6.1. No status: o rótulo "Novo" virar "Registrado", o card mostrar "Analisado" para um incidente "Em análise" e o cabeçalho mostrar "Concluído" para um "Arquivado". No menu: oferecer também "Alterar status", e o gestor também ver o menu. No prazo: aparecer em qualquer status, no card ou na seção "Classificação", "Em análise" perder o prazo, e a data sair um dia depois. Na consulta: "Informações gerais" oferecer "Editar" em qualquer status, o plano de um incidente concluído continuar editável, o menu ⋮ aparecer em "Concluído" e "Arquivado", e um arquivado ainda oferecer o encaminhamento. No ciclo: depois do encaminhamento, ele continuar oferecido ou a classificação continuar editável, e, depois da decisão do NSP, as duas opções voltarem. O teste certo reprovou em todas, no passo da própria regra, e cada quebra foi desfeita logo depois.</li>
<li><strong>Duas brechas do WebKit, corrigidas nos testes:</strong> o menu ⋮ não fechava com o Escape, porque o WebKit não dá foco ao botão clicado, e o teste passou a fechar o menu com um segundo clique no botão. Além disso, o "Concluir incidente" só entra no menu depois que o plano de ação termina de carregar, e no WebKit o menu chegava a abrir antes disso. Os testes passaram a reabrir o menu até o item aparecer, por até 15 segundos. Depois do ajuste, os testes rodaram 3 vezes seguidas no WebKit, sem falha.</li>
<li><strong>Esteira da PR:</strong> a base da PR #74 é a branch da PR #72, e a CI do notifica-saude-e2e só roda em PR para a main. Ela roda quando a base passar para a main, depois do merge da PR #72.</li>
<li><strong>Três navegadores:</strong> os 7 testes da US-6.1 passaram no Chromium, no Firefox e no WebKit, na máquina local, sem segunda tentativa, na develop de 13/11 e na de 15/11.</li>
</ul>

<div class="ns-rel-citacao">A mudança de status em si é decidida pelo servidor: os testes a conferem na tela depois de cada ação, e as regras de mudança de status são tratadas no relatório da US-6.2. A conclusão automática do incidente quando todas as ações terminam também é do servidor, e por isso não teve quebra pelo frontend.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-6.1.** Os 6 estão verificados e aprovados.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #74](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/74) | Automação dos casos de teste das US-6.1 e US-6.2 |
| [Issue e2e #71](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/71) | Tarefa da automação |
| [PR e2e #72](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/72) | Submódulos na develop de 15/11, sobre a qual os testes rodam |
| `tests/funcionais/ct-fun-133.spec.ts` a `ct-fun-136.spec.ts` | Casos funcionais da US-6.1 |
| `tests/e2e/ct-e2e-036.spec.ts` e `ct-e2e-037.spec.ts` | Ciclo de vida com a análise pelo setor e pelo NSP |
| [PR frontend #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/19) e [PR backend #14](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/14) | Implementação do status e do ciclo de vida testada aqui |
| [Casos de Teste](../casos-de-teste.md#ct-fun-133) | Fichas do CT-FUN-133 ao CT-FUN-136 e dos [CT-E2E-036](../casos-de-teste.md#ct-e2e-036) e [CT-E2E-037](../casos-de-teste.md#ct-e2e-037) |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-6.1 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-6.1 e os 6 critérios de aceite |
| Relatório end-to-end da [US-6.2](ciclo-vida-us-6-2-e2e.md) | A outra história da mesma automação |

<p class="ns-rel-rodape">REL_Testes_E2E_CicloVida_US61_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/71/automatiza-cts-us-6-1-e-6-2 do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 14 e 15/11/2026.</p>

</div>

</div>
