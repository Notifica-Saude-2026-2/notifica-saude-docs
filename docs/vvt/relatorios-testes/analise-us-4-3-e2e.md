<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 4 - Análise do Incidente · Seção 1 · US-4.3

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_Analise_US43_v1_0</code></span><span>Emissão <em>15 de outubro de 2026</em></span><span>Branch <code>test/19/automatiza-cts-us-4-3</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US43_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 15/10/2026 | Criação do relatório de testes end-to-end da US-4.3 (identificação do incidente em investigação), a partir da [PR #21 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/21). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-4.3 é a **Seção 1 da análise do incidente**: antes de investigar, quem analisa revisa o resumo da notificação e da classificação e informa, em até 100 caracteres, qual incidente será investigado. Esse texto passa a aparecer no topo das seções seguintes. Os onze casos de teste da história (CT-FUN-053 a 061, CT-E2E-022 e CT-E2E-023) foram automatizados e rodados contra o sistema real, que hoje tem o guia e as Seções 1 e 2. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Seção 1 (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Dos 4 critérios de aceite, 2 estão totalmente verificados e aprovados, 1 está aprovado na Seção 2 e 1 tem uma falha conhecida.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Um defeito encontrado</strong><span>Registrado como falha conhecida: o resumo não mostra o horário do incidente, porque o sistema não coleta esse dado (#20).</span></div>
</div>

Em resumo: **a Seção 1 funciona do jeito que a história pede nas partes que já existem**, incluindo o sigilo do notificante para o Gestor da Área, conferido também na resposta do servidor. O defeito não impede o uso, porque o turno já informa o período do incidente. As Seções 3 em diante ainda não existem no sistema, e os testes delas ficaram reservados como pendentes. Na rodada nos três navegadores, um teste falhou no Firefox por um defeito do próprio teste, e não do sistema (seção 5).

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/21 · Executado em 12/10/2026 no Chromium (CI da PR) e em 14/10/2026 no Chromium, no Firefox e no WebKit (CI da main, depois do merge), com frontend 925a72b e backend 6099726 (develop de 07/10) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>17</strong><span>testes da US-4.3</span></div>
<div><strong>13</strong><span>testes aprovados</span></div>
<div><strong>1</strong><span>falha conhecida</span></div>
</div>

<p class="ns-rel-legenda">Os outros 3 testes estão pendentes: conferem o topo das Seções 3 em diante, que ainda não existem. O resultado é o mesmo no Chromium e no WebKit. No Firefox, um dos 13 aprovados falhou por um defeito do próprio teste, explicado na seção 5.</p>

### Os onze casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Resumo da notificação e da classificação</strong> (CT-FUN-053: CA01): a caixa do resumo mostra cada dado junto do seu rótulo (descrição, data do incidente, turno, faixa etária, sexo, notificante, classificação, tipo de incidente, envolvidos, data da classificação e observações do NSP) e não tem nenhum campo editável. <span class="ns-rel-cor--warn">O horário do incidente não aparece, porque o sistema não o coleta (#20).</span></li>
<li><strong>Informações alternativas do resumo</strong> (CT-FUN-054: CA01): sem paciente, o resumo diz "Não envolve o paciente" e não mostra faixa etária nem sexo; na notificação anônima, diz "Notificação anônima", sem nome nem contato. Cada teste confere também que a outra alternativa não aparece.</li>
<li><strong>Sigilo do notificante para o Gestor da Área</strong> (CT-FUN-055: CA01 e RN-27): o resumo do gestor mostra os demais dados e nada do notificante; o nome e o contato não chegam nem à resposta do servidor que o navegador recebe.</li>
<li><strong>Incidente em investigação obrigatório</strong> (CT-FUN-056: CA02): com o campo vazio, "Próximo" não avança e nada é enviado ao servidor; o campo mostra "Preencha este campo." e aparece o aviso. Depois de preenchido, a análise avança.</li>
<li><strong>Limite de 100 caracteres</strong> (CT-FUN-057, CT-FUN-058 e CT-FUN-059: CA03): com 100, o contador mostra "100/100" sem a cor de limite e a análise avança; com 101, o contador fica vermelho, aparece o aviso "“Informe o incidente em investigação” deve ter no máximo 100 caracteres (atual: 101).", o texto não é cortado e nada é enviado; reduzido para 100, o aviso some e o avanço é liberado.</li>
<li><strong>Incidente no topo das demais seções</strong> (CT-FUN-060 e CT-FUN-061: CA04): na Seção 2, a faixa "Incidente em investigação: …" fica acima do título, com o texto exato da Seção 1, e o resumo da notificação não se repete.</li>
<li><strong>Fluxos completos</strong> (CT-E2E-022: CA01 a CA04; CT-E2E-023: CA02 e CA03): o percurso da Seção 1 à Seção 2, com o resumo, o incidente e a faixa; e, na mesma análise, o campo vazio, depois 100 caracteres e depois mais de 100.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas. A cobertura de código do servidor está nos relatórios unitário e de integração.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA02, CA03 | 2 |
| <span class="ns-rel-cor--warn">Aprovado na Seção 2, pendente nas demais</span> | CA04 (Seções 3 em diante) | 1 |
| <span class="ns-rel-cor--erro">Com falha conhecida</span> | CA01 (horário do incidente, #20; os demais dados do resumo, as alternativas e o sigilo do notificante aprovados) | 1 |

<div class="ns-rel-info" markdown>

**Como ler as pendências e as falhas conhecidas.** O que o sistema ainda não tem ficou escrito como teste pendente, com o motivo, no lugar onde será completado quando a parte chegar. O que o sistema faz diferente do requisito ficou como **falha conhecida**: o teste roda e confere o que o requisito pede, e a falha é a esperada enquanto o defeito existir. Quando o defeito for corrigido, o teste passa e a ferramenta avisa que a marcação deve ser retirada.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e na CI da main, depois do merge da PR #21, em 14/10/2026</p>

<div class="ns-rel-placar">
<div><strong>137</strong><span>testes executados no Chromium</span></div>
<div><strong>136</strong><span>testes aprovados</span></div>
<div><strong>1</strong><span>teste com falha</span></div>
</div>

| Navegador | Aprovados | Com falha | Instáveis | Pendentes ou manuais |
| --- | --- | --- | --- | --- |
| Chromium | 136 | 1 (CT-E2E-004) | 0 | 11 |
| WebKit (Safari) | 136 | 1 (CT-E2E-004) | 0 | 11 |
| Firefox | 133 | 2 (CT-E2E-004 e CT-FUN-055) | 2 | 11 |

<p class="ns-rel-legenda">Os aprovados incluem as 4 falhas conhecidas (3 da US-4.2 e 1 da US-4.3), que contam como esperadas. "Instável" é o teste que falhou e passou na segunda tentativa. O teste do limite de tentativas de login roda à parte e também passou.</p>

<div class="ns-rel-aviso" markdown>**A falha do CT-E2E-004 não vem desta entrega.** Ela já acontecia antes, nos três navegadores: o teste filtra a lista por um setor que só aparece quando existe uma notificação dele, e não cria essa notificação. Com o banco zerado da CI, nem sempre a encontra. **A falha do CT-FUN-055 no Firefox é do próprio teste**, e não do sistema; a causa e a correção estão na seção 5.</div>

Comparada à execução da main antes desta entrega (12/10, depois da PR #18), o Chromium passou de 122 para 136 aprovados e de 8 para 11 pendentes: são os 17 testes da US-4.3. Nenhum teste que passava antes deixou de passar, e as instabilidades do Firefox já existiam (eram 6 e agora são 2, todas em testes de outras histórias).

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a branch test/19/automatiza-cts-us-4-3 e, a dos três navegadores, sobre a main</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada comportamento foi quebrado de propósito no frontend, e o mesmo teste foi rodado sem nenhuma alteração. Foram 18 quebras, como mostrar a data no lugar do turno, colocar um campo editável dentro do resumo, cortar o texto acima de 100 caracteres, deixar o contador sem a cor de limite ou repetir o resumo na Seção 2. O teste certo reprovou em todas, e cada quebra foi desfeita logo depois.</li>
<li><strong>Sigilo do notificante, com um controle:</strong> quem omite o notificante para o gestor é o servidor, que nem envia esses dados. Uma quebra só no frontend não teria o nome para mostrar. Por isso, o mesmo teste rodou com a sessão do NSP, que pode ver o notificante, e reprovou: o nome apareceu no resumo e na resposta do servidor.</li>
<li><strong>"Nada enviado ao servidor":</strong> quando o bloqueio dos 101 caracteres foi tirado do frontend, o servidor também recusou o texto e devolveu o mesmo aviso, e a tela continuou na Seção 1. Quem acusou a quebra foi a conferência de que o clique em "Próximo" não pode enviar a seção.</li>
<li><strong>Falha conhecida avisa quando o defeito for corrigido:</strong> com um horário colocado de propósito no resumo, a ferramenta acusou "deveria falhar, mas passou".</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/38299643967">execução da CI da PR #21</a>, no Chromium e sobre o último commit (9b58af3), terminou com 136 testes aprovados e 1 com falha. Todos os testes da US-4.3 tiveram o resultado esperado. A falha é a do CT-E2E-004, que já existia.</li>
<li><strong>Três navegadores e um defeito no próprio teste:</strong> depois do merge, a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/38575526587">CI da main</a> rodou a suíte no Chromium, no Firefox e no WebKit. No Firefox, o teste que confere a resposta do servidor no CT-FUN-055 falhou. O sistema está correto: ao abrir a análise, o Firefox reaproveita a cópia da notificação que já tinha baixado no detalhe, e o servidor responde só "não mudou" (código 304), sem conteúdo; o teste tentava ler o conteúdo dessa resposta. Os outros dois navegadores baixam a notificação de novo. A correção (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/29">e2e#29</a>, <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/30">PR #30</a>) confere toda resposta com conteúdo, desde o detalhe. Ela passou nos três navegadores e, com a sessão do NSP, reprovou nos três, como deve.</li>
</ul>

<div class="ns-rel-citacao">Partes decididas só pelo servidor (a omissão do notificante na resposta e a recusa de um incidente acima de 100 caracteres) não tiveram quebra pelo frontend: exigiriam alterar e reconstruir o backend. Elas são cobertas pelos relatórios unitário e de integração.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Seções 3 em diante:** os 3 testes pendentes devem ser completados quando essas seções forem entregues (CA04).
- **Defeito [#20](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/20) (backend, BUG-BACK-010):** o formulário público não pergunta o horário do incidente, e o banco guarda a data sem a hora. A correção prevista é incluir a pergunta no formulário, guardar a hora no banco e mostrá-la no detalhe da notificação e no resumo da análise.
- **CT-FUN-055 no Firefox ([e2e#29](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/29)):** a correção do teste, já validada nos três navegadores, está na [PR e2e#30](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/30) e aguarda revisão.
- **Grau do dano e tipo específico (Never Event):** o CA01 pede esses dois dados no resumo, mas nenhuma ficha da US-4.3 os confere, e os testes seguem as fichas. Fica a sugestão de incluí-los na ficha do CT-FUN-053.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #21](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/21) | Automação dos onze casos de teste da US-4.3 |
| [Issue e2e #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/19) | Tarefa da automação |
| [Issue e2e #20](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/20) | Defeito encontrado (horário do incidente), com passos para reprodução e evidências |
| [Issue e2e #29](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/29) e [PR e2e #30](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/30) | Defeito do CT-FUN-055 no Firefox e a correção |
| `tests/funcionais/ct-fun-053.spec.ts` a `ct-fun-061.spec.ts` | Casos funcionais da US-4.3 |
| `tests/e2e/ct-e2e-022.spec.ts` e `ct-e2e-023.spec.ts` | Fluxos completos da Seção 1 |
| [PR frontend #10](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/10) e [PR backend #9](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9) | Implementação do guia e das Seções 1 e 2 testada aqui |
| [Casos de Teste](../casos-de-teste.md) | Fichas do CT-FUN-053 ao CT-FUN-061, do CT-E2E-022 e do CT-E2E-023 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-4.3 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.3, os 4 critérios de aceite e a RN-27 |
| [Relatório end-to-end da US-4.2](analise-us-4-2-e2e.md) | `REL_Testes_E2E_Analise_US42_v1_0` |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_E2E_Analise_US43_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/19/automatiza-cts-us-4-3 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 12 e 14/10/2026.</p>

</div>

</div>
