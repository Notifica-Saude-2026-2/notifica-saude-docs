<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 5 - Gestão de Plano de Ação · Edição e exclusão de ações · US-5.4

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_PlanoAcao_US54_v1_0</code></span><span>Emissão <em>12 de novembro de 2026</em></span><span>Branch <code>test/50/automatiza-cts-us-5-1-a-5-4</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_PlanoAcao_US54_v1_0.pdf){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Criação do relatório de testes end-to-end da US-5.4 (editar e excluir ações do plano de ação), a partir da [PR #52 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-5.4 é a **edição e a exclusão de ações**: o lápis abre "Editar plano de ação" com os dados atuais da ação, com as mesmas regras do registro e sem a "Situação da ação", que só muda pelo andamento; a lixeira pede confirmação antes de excluir, e a exclusão vai para o histórico; com o incidente concluído, o plano fica só para consulta. Os três casos de teste da história (CT-FUN-118, 120 e 121) e o percurso CT-E2E-032, que vai da edição até a conclusão do incidente, foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Edição e exclusão (tela e servidor)</strong><span>Testadas de ponta a ponta no navegador.<br>Dos 6 critérios de aceite, 5 estão totalmente verificados e aprovados. O CA04 foi descartado.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>Nenhum defeito no sistema</strong><span>Nenhum teste da história ficou como falha conhecida.</span></div>
</div>

Em resumo: **editar e excluir ações funciona do jeito que a história pede**: a edição abre com os dados atuais, valida como o registro e não mostra a situação; a exclusão pede confirmação, respeita o "Não" e registra o "Sim" no histórico; e o plano de um incidente concluído fica só para consulta, também ao reabrir. O CA04, sobre ações antigas com o responsável só com o nome, foi descartado em 10/11/2026. Cada um dos 5 critérios teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52 · Executado em 10/11/2026 no Chromium (máquina local, sem segunda tentativa, e CI da PR), no Firefox e no WebKit (máquina local) e em 12/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 51ed198 e backend 97352ef (develop de 06/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>4</strong><span>testes da US-5.4</span></div>
<div><strong>4</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 10/11 (7 testes rodados, menos os 3 passos de login, que não são da história); na CI da PR, os mesmos 4 testes passaram.</p>

### Os casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Edição de ação</strong> (CT-FUN-118: CA01, CA02 e CA03): o lápis abre "Editar plano de ação" com todos os dados atuais da ação, sem o campo "Situação da ação"; com um campo obrigatório vazio ou com texto acima do limite, não salva; com alterações válidas, salva, e a tabela mostra a nova previsão de conclusão.</li>
<li><strong>Exclusão de ação</strong> (CT-FUN-120: CA05): a lixeira pede confirmação com a mensagem "Tem certeza que deseja excluir esse plano de ação? Essa ação não poderá ser desfeita."; "Não" fecha a confirmação e mantém a ação; "Sim" exclui, também depois de reabrir a notificação, e o histórico registra "ação excluída.".</li>
<li><strong>Incidente concluído</strong> (CT-FUN-121: CA06): com o incidente concluído, as ações não têm lápis, andamento nem lixeira, e o botão "Adicionar outra ação" some; "Visualizar detalhes" continua.</li>
<li><strong>Da edição até a conclusão do incidente</strong> (CT-E2E-032: CA01, CA05 e CA06): a edição da previsão de uma ação, a exclusão de outra, com o histórico, a conclusão do incidente pelo menu ⋮ ao lado do status, e o plano só para consulta, também ao reabrir a notificação.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| Descartado | CA04 (dados antigos de responsável, descartado em 10/11/2026) | 1 |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA03, CA05 e CA06 | 5 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-5.4, nenhuma parte ficou pendente nem como falha conhecida. O CA04 tratava de ações registradas antes da tabela de responsáveis, com o responsável só com o nome. Essas ações não existem mais no sistema, e ele não guarda um responsável sem função e setor. Por isso o critério foi descartado, e o caso de teste dele (CT-FUN-119) foi retirado.

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
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério teve um comportamento quebrado de propósito no frontend, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 5 quebras: a edição abrir sem um dos campos da ação, a edição salvar mesmo com pendências, a "Situação da ação" aparecer na edição, o "Não" da confirmação também excluir, e o lápis, o andamento e a lixeira aparecerem com o incidente concluído. O teste certo reprovou em todas, no passo do próprio critério, e cada quebra foi desfeita logo depois.</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/42819189024">execução da CI da PR #52</a>, no Chromium e sobre o último commit (f463dc2) já unido à main, terminou com 202 testes aprovados, nenhum com falha e 14 pendentes. Os 4 testes da US-5.4 passaram.</li>
<li><strong>Três navegadores:</strong> os testes da US-5.4 passaram também no Firefox e no WebKit, na máquina local e na CI da main, sem segunda tentativa.</li>
</ul>

<div class="ns-rel-citacao">A gravação da edição e da exclusão, o registro "ação excluída." no histórico e o bloqueio de escrita com o incidente concluído também são decididos pelo servidor; as quebras atingiram a tela, que é o que este relatório confere.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-5.4.** Os 5 critérios vigentes estão verificados e aprovados.
- **CA04 na especificação:** o critério foi descartado em 10/11/2026, e o CT-FUN-119 foi retirado dos Casos de Teste e da Matriz de Rastreabilidade. A retirada do CA04 da Especificação de Requisitos fica com a equipe de requisitos.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #52](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/52) | Automação dos casos de teste das US-5.1 a US-5.4 |
| [Issue e2e #50](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/50) | Tarefa da automação |
| `tests/funcionais/ct-fun-118.spec.ts`, `ct-fun-120.spec.ts` e `ct-fun-121.spec.ts` | Casos funcionais da US-5.4 |
| `tests/e2e/ct-e2e-032.spec.ts` | Percurso da edição até a conclusão do incidente |
| [PR frontend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18) e [PR backend #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13) | Implementação do plano de ação testada aqui |
| [Casos de Teste](../casos-de-teste.md#testes-us-5-4) | Fichas do CT-FUN-118, do CT-FUN-120 e do CT-FUN-121, e do [CT-E2E-032](../casos-de-teste.md#ct-e2e-032) |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-5.4 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-5.4 e os 6 critérios de aceite |
| Relatórios end-to-end das [US-5.1](plano-acao-us-5-1-e2e.md), [US-5.2](plano-acao-us-5-2-e2e.md) e [US-5.3](plano-acao-us-5-3-e2e.md) | As outras histórias da mesma automação |

<p class="ns-rel-rodape">REL_Testes_E2E_PlanoAcao_US54_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/50/automatiza-cts-us-5-1-a-5-4 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 10/11/2026.</p>

</div>

</div>
