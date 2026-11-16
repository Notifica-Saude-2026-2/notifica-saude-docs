<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 6 - Status e Ciclo de Vida do Incidente · Atualizar o status a partir das ações do usuário · US-6.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_CicloVida_US62_v1_0</code></span><span>Emissão <em>15 de novembro de 2026</em></span><span>Branch <code>test/71/automatiza-cts-us-6-1-e-6-2</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_CicloVida_US62_v1_0.pdf){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 15/11/2026 | Criação do relatório de testes end-to-end da US-6.2 (atualizar o status a partir das ações do usuário), a partir da [PR #74 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/74). Execução sobre o frontend 78246a9 e o backend 946dff0 (develop de 15/11). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-6.2 é **a mudança de status a partir das ações do usuário**. Cada ação do fluxo leva o incidente ao status seguinte, e só ela:

- a classificação finalizada leva a "Classificado", e o rascunho não muda nada;
- o encaminhamento leva a "Encaminhado";
- a primeira seção da análise leva a "Em análise";
- a conclusão pelo setor leva a "Analisado";
- concluída pelo NSP, a análise continua "Em análise" até a decisão;
- a primeira ação completa do plano leva a "Em ação", e as ações seguintes não mudam o status;
- o histórico registra cada mudança, com a ação, a data, a hora e o usuário.

Os três casos funcionais da história (CT-FUN-137 a 139) e os dois percursos do ciclo inteiro (CT-E2E-036 e 037) foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Mudança de status (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Dos 8 critérios de aceite, os 8 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>1 defeito achado e já corrigido</strong><span>O histórico mostrava duas entradas para a classificação, o encaminhamento e o início da análise (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/70">e2e#70</a>, BUG-BACK-012). A correção já está na versão testada.</span></div>
</div>

Em resumo: **o status muda do jeito que a história pede**. Cada ação leva ao status seguinte, o rascunho e a edição da classificação não mudam o status, e a Seção 2 também não. Concluída pelo NSP, a análise espera a decisão. Depois de "Em ação", adicionar, editar, excluir e concluir ações não mudam o status. O histórico mostra cada mudança uma vez, com quem a fez e quando.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/74 · Executado em 15/11/2026 no Chromium, no Firefox e no WebKit (máquina local, sem segunda tentativa; no WebKit, 3 vezes seguidas), com frontend 78246a9 e backend 946dff0 (develop de 15/11), e em 14/11/2026 nos três navegadores, com frontend 45283a7 e backend 5ecd1b4 (develop de 13/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>6</strong><span>testes da US-6.2</span></div>
<div><strong>6</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 15/11, com o mesmo resultado nos três navegadores. O CT-FUN-138 tem dois testes: a análise pelo NSP e a análise pelo setor. Os CT-E2E-036 e 037 percorrem o ciclo inteiro e conferem também a US-6.1; a ficha deles é das duas histórias, então eles contam nos dois relatórios. O CA06 também é conferido pelo CT-E2E-031, contado no <a href="../plano-acao-us-5-3-e2e/">relatório da US-5.3</a>, onde está a ficha dele; ele também passou.</p>

### Os casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Classificação</strong> (CT-FUN-137 e CT-E2E-036: CA01): o rascunho mantém "Novo", com o selo "Classificação em andamento". A classificação finalizada leva de "Novo" a "Classificado", e a edição dela mantém "Classificado".</li>
<li><strong>Encaminhamento</strong> (CT-E2E-036: CA02): o encaminhamento ao setor leva de "Classificado" a "Encaminhado".</li>
<li><strong>Primeira seção da análise</strong> (CT-FUN-138, CT-E2E-036 e 037: CA03): a Seção 1 salva leva a "Em análise", pelo NSP (de "Classificado") e pelo gestor (de "Encaminhado"). Depois da Seção 2, o status continua "Em análise".</li>
<li><strong>Conclusão pelo setor</strong> (CT-E2E-036: CA04): "Finalizar análise" pelo gestor leva de "Em análise" a "Analisado".</li>
<li><strong>Conclusão pelo NSP</strong> (CT-E2E-037: CA05): concluída a análise, o status continua "Em análise", e a seção "Análise" pede a decisão, com "Encaminhar ao setor" e "Não encaminhar / justificar". Registrada a decisão, o status passa a "Analisado".</li>
<li><strong>Primeira ação completa</strong> (CT-E2E-036: CA06): as ações criadas das recomendações, ainda pendentes, não mudam o status. A ação 1 completa leva a "Em ação".</li>
<li><strong>Ações seguintes</strong> (CT-FUN-139: CA07): com o incidente "Em ação", adicionar, editar, excluir e concluir a única ação mantêm "Em ação", e o menu ⋮ continua com "Concluir incidente".</li>
<li><strong>Histórico</strong> (CT-E2E-036 e 037: CA08): cada mudança aparece no histórico com a ação, a data, a hora e o usuário: "Classificação registrada.", "Notificação encaminhada para … analisar.", "Análise iniciada.", "Análise concluída.", a decisão, "Ação 1: plano de ação completado." e "Concluiu o incidente.".</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA08 | 8 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-6.2, nenhuma parte ficou pendente nem como falha conhecida.

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
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada regra que a tela decide foi quebrada de propósito no frontend, uma por vez, e os mesmos testes rodaram sem nenhuma alteração. Na US-6.2, a tela decide a classificação enviada e o histórico mostrado, e foram 5 quebras: o rótulo "Novo" virar "Registrado", "Salvar rascunho" enviar a classificação como finalizada, e o histórico mostrar "Sistema" no lugar do usuário, mostrar só a data, sem a hora, ou deixar de dizer "Classificação registrada.". O teste certo reprovou em todas, no passo da própria regra, e cada quebra foi desfeita logo depois.</li>
<li><strong>Defeito achado antes da automação:</strong> na conferência das fichas contra o sistema, a classificação, o encaminhamento e o início da análise apareciam em duas entradas no histórico (BUG-BACK-012). Os testes conferem o que a ficha pede, a ação com a data, a hora e o usuário, e não contam as entradas. Por isso passaram nas duas versões: na de 13/11, com o defeito, e na de 15/11, com a correção do <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/21">back#21</a>, que mostra uma entrada por ação.</li>
<li><strong>Uma brecha do WebKit, corrigida no teste:</strong> a volta ao detalhe depois de "Finalizar análise" pode passar de 5 segundos no WebKit. O CT-E2E-036 e o 037 passaram a esperá-la por até 15 segundos. Depois do ajuste, os testes rodaram 3 vezes seguidas no WebKit, sem falha.</li>
<li><strong>Esteira da PR:</strong> a base da PR #74 é a branch da PR #72, e a CI do notifica-saude-e2e só roda em PR para a main. Ela roda quando a base passar para a main, depois do merge da PR #72.</li>
<li><strong>Três navegadores:</strong> os 6 testes da US-6.2 passaram no Chromium, no Firefox e no WebKit, na máquina local, sem segunda tentativa, na develop de 13/11 e na de 15/11.</li>
</ul>

<div class="ns-rel-citacao">As mudanças de status em si são decididas pelo servidor: o rascunho que não muda e a classificação finalizada que muda (CA01), o encaminhamento (CA02), a primeira seção da análise (CA03), a conclusão pelo setor (CA04) e pelo NSP, com a decisão (CA05), a primeira ação completa (CA06) e as ações que não mudam "Em ação" (CA07). Elas não tiveram quebra pelo frontend. Os testes as conferem na tela, depois de cada ação.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-6.2.** Os 8 estão verificados e aprovados.
- **Fechamento do BUG-BACK-012:** a correção está no [back#21](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/21), na versão testada. A mudança do status no [Relatório de Bugs](../relatorio-bugs.md#bug-back-012) vai numa PR própria.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #74](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/74) | Automação dos casos de teste das US-6.1 e US-6.2 |
| [Issue e2e #71](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/71) | Tarefa da automação |
| [PR e2e #72](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/72) | Submódulos na develop de 15/11, sobre a qual os testes rodam |
| [Issue e2e #70](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/70) | Defeito do histórico com duas entradas por ação (BUG-BACK-012), corrigido no [back#21](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/21) |
| `tests/funcionais/ct-fun-137.spec.ts` a `ct-fun-139.spec.ts` | Casos funcionais da US-6.2 |
| `tests/e2e/ct-e2e-036.spec.ts` e `ct-e2e-037.spec.ts` | Ciclo de vida com a análise pelo setor e pelo NSP |
| `tests/e2e/ct-e2e-031.spec.ts` | Percurso da montagem do plano até "Em ação" (CA06) |
| [PR frontend #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/19) e [PR backend #14](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/14) | Implementação do status e do ciclo de vida testada aqui |
| [Casos de Teste](../casos-de-teste.md#ct-fun-137) | Fichas do CT-FUN-137 ao CT-FUN-139 e dos [CT-E2E-036](../casos-de-teste.md#ct-e2e-036) e [CT-E2E-037](../casos-de-teste.md#ct-e2e-037) |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-6.2 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-6.2 e os 8 critérios de aceite |
| Relatório end-to-end da [US-6.1](ciclo-vida-us-6-1-e2e.md) | A outra história da mesma automação |

<p class="ns-rel-rodape">REL_Testes_E2E_CicloVida_US62_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/71/automatiza-cts-us-6-1-e-6-2 do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 14 e 15/11/2026.</p>

</div>

</div>
