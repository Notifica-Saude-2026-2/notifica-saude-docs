<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 4 - Análise do Incidente · Seção 1 · US-4.3

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_Analise_US43_v1_1</code></span><span>Emissão <em>15 de novembro de 2026</em></span><span>Branch <code>test/62/automatiza-fixmes-us-4-1-a-4-3</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US43_v1_1.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 15/10/2026 | Criação do relatório de testes end-to-end da US-4.3 (identificação do incidente em investigação), a partir da [PR #21 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/21). | Catarina Freisleben |
    | 1.1 | 15/11/2026 | Testes do topo das Seções 3 a 5, que estavam pendentes, completados na [PR #63 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/63); defeito #20 corrigido; comparação com o CA01 da especificação 3.12, que acrescentou ao resumo o prontuário e as medidas adotadas. Execução sobre o frontend 78a3927 e o backend 18a73e6 (develop de 10/11). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-4.3 é a **Seção 1 da análise do incidente**: antes de investigar, quem analisa revisa o resumo da notificação e da classificação e informa, em até 100 caracteres, qual incidente será investigado. Esse texto passa a aparecer no topo das seções seguintes. Os onze casos de teste da história (CT-FUN-053 a 061, CT-E2E-022 e CT-E2E-023) foram automatizados e rodados contra o sistema real, que agora tem as cinco seções. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Seção 1 (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Dos 4 critérios de aceite, 3 estão totalmente verificados e aprovados, e o CA01 está aprovado em parte.</span></div>
<div><span class="ns-rel-icone">✓</span><strong>O defeito da versão 1.0 foi corrigido</strong><span>O formulário público passou a perguntar o horário do incidente, e o resumo o mostra (#20). O teste deixou de marcá-lo como falha conhecida.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Itens do resumo sem ficha</strong><span>O CA01 atual pede no resumo o prontuário, as medidas adotadas, o grau do dano e o tipo específico do Never Event. O sistema os mostra, mas nenhuma ficha os confere (seção 6).</span></div>
</div>

Em resumo: **a Seção 1 funciona do jeito que a história pede**, incluindo o sigilo do notificante para o Gestor da Área, conferido também na resposta do servidor. O incidente em investigação aparece no topo de todas as seções seguintes, da 2 à 5, sem repetir o resumo. Falta conferir os quatro itens do resumo que entraram ou que nenhuma ficha cobre.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PRs: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/21 e /pull/63 · Executado em 13/11/2026 no Chromium, no Firefox e no WebKit (máquina local, sem segunda tentativa), no Chromium (CI da PR #63) e em 15/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 78a3927 e backend 18a73e6 (develop de 10/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>16</strong><span>testes da US-4.3</span></div>
<div><strong>16</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Eram 17 na versão 1.0: o teste pendente do CT-E2E-022 virou parte do fluxo completo, que agora segue da Seção 1 até a Seção 5. Na CI da main, os 16 passaram nos três navegadores, sem segunda tentativa.</p>

### Os onze casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Resumo da notificação e da classificação</strong> (CT-FUN-053: CA01): a caixa do resumo mostra cada dado junto do seu rótulo: descrição, data e horário do incidente, turno, faixa etária, sexo, notificante, classificação, tipo de incidente, envolvidos, data da classificação e observações do NSP. Não tem nenhum campo editável. O horário agora aparece ("10:30", o da ficha), depois da correção do #20. <span class="ns-rel-cor--warn">O prontuário, as medidas adotadas, o grau do dano e o tipo específico não são conferidos (seção 6).</span></li>
<li><strong>Informações alternativas do resumo</strong> (CT-FUN-054: CA01): sem paciente, o resumo diz "Não envolve o paciente" e não mostra faixa etária nem sexo. Na notificação anônima, diz "Notificação anônima", sem nome nem contato. Cada teste confere também que a outra alternativa não aparece.</li>
<li><strong>Sigilo do notificante para o Gestor da Área</strong> (CT-FUN-055: CA01 e RN-27): o resumo do gestor mostra os demais dados e nada do notificante. O nome e o contato não chegam nem à resposta do servidor que o navegador recebe.</li>
<li><strong>Incidente em investigação obrigatório</strong> (CT-FUN-056: CA02): com o campo vazio, "Próximo" não avança e nada é enviado ao servidor. O campo mostra "Preencha este campo." e aparece o aviso. Depois de preenchido, a análise avança.</li>
<li><strong>Limite de 100 caracteres</strong> (CT-FUN-057, CT-FUN-058 e CT-FUN-059: CA03): com 100, o contador mostra "100/100" sem a cor de limite e a análise avança. Com 101, o contador fica vermelho e aparece o aviso "“Informe o incidente em investigação” deve ter no máximo 100 caracteres (atual: 101).". O texto não é cortado e nada é enviado. Reduzido para 100, o aviso some e o avanço é liberado.</li>
<li><strong>Incidente no topo das demais seções</strong> (CT-FUN-060 e CT-FUN-061: CA04): da Seção 2 à Seção 5, a faixa "Incidente em investigação: …" fica acima do título, com o texto exato da Seção 1, e o resumo da notificação não se repete.</li>
<li><strong>Fluxos completos</strong> (CT-E2E-022: CA01 a CA04; CT-E2E-023: CA02 e CA03): o percurso da Seção 1 até a Seção 5, com o resumo, o incidente e a faixa em cada seção. E, na mesma análise, o campo vazio, depois 100 caracteres e depois mais de 100.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas. A cobertura de código do servidor está nos relatórios unitário e de integração. Os critérios são os da especificação 3.12, a atual.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA02, CA03, CA04 | 3 |
| <span class="ns-rel-cor--warn">Aprovado em parte</span> | CA01 (os demais dados do resumo, as alternativas e o sigilo do notificante aprovados; o prontuário, as medidas adotadas, o grau do dano e o tipo específico do Never Event sem ficha) | 1 |

<div class="ns-rel-info" markdown>

**Como ler o "aprovado em parte".** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. O CA01 lista os dados que o resumo deve mostrar. A especificação 3.12, de 03/11, acrescentou o prontuário e as medidas adotadas, e o grau do dano e o tipo específico já estavam no critério sem ficha que os conferisse. O sistema testado mostra os quatro, mas os testes seguem as fichas, e as fichas ainda não os pedem.

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

Comparada à execução da versão 1.0 (CI da main de 15/10, 136 aprovados em cada navegador), a suíte passou a 230 aprovados no Chromium e no WebKit e a 228 no Firefox, com os testes das histórias automatizadas depois. Os testes da US-4.3 que estavam pendentes agora rodam e passam.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a branch test/19/automatiza-cts-us-4-3 (versão 1.0) e, em 13/11/2026, sobre os testes que viraram a PR #63, com o frontend local sobre o 78a3927 e o backend 18a73e6</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada comportamento foi quebrado de propósito no frontend, uma quebra por vez, e os mesmos testes rodaram sem nenhuma alteração. Na versão 1.0, foram 18 quebras, como mostrar a data no lugar do turno, colocar um campo editável dentro do resumo, cortar o texto acima de 100 caracteres, deixar o contador sem a cor de limite ou repetir o resumo na Seção 2. Nesta versão, foram mais 3, nas Seções 3 a 5: a faixa "Incidente em investigação" aparecer só na Seção 2, ir para baixo do formulário e a Seção 4 repetir o resumo. O teste certo reprovou em todas, e cada quebra foi desfeita logo depois.</li>
<li><strong>Sigilo do notificante, com um controle (versão 1.0):</strong> quem omite o notificante para o gestor é o servidor, que nem envia esses dados. Uma quebra só no frontend não teria o nome para mostrar. Por isso, o mesmo teste rodou com a sessão do NSP, que pode ver o notificante, e reprovou: o nome apareceu no resumo e na resposta do servidor.</li>
<li><strong>Defeito corrigido:</strong> o #20 (BUG-BACK-010) foi corrigido no front#20 e no back#15, que passaram a perguntar o horário do incidente no formulário público e a mostrá-lo no resumo. O teste do horário deixou de ser falha conhecida e passou a conferir o horário da ficha (10:30) na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/47">PR #47</a>.</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43476838653">execução da CI da PR #63</a>, no Chromium, terminou com 215 testes aprovados, nenhum com falha e 2 pendentes. Numa <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43476862325">execução manual na branch</a>, os três navegadores tiveram o mesmo resultado.</li>
<li><strong>Três navegadores:</strong> os testes novos da PR #63 passaram também no Firefox e no WebKit, na máquina local, sem segunda tentativa. O defeito do próprio teste no Firefox, da versão 1.0 (CT-FUN-055), foi corrigido em outubro (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/30">PR #30</a>).</li>
</ul>

<div class="ns-rel-citacao">Partes decididas só pelo servidor (a omissão do notificante na resposta e a recusa de um incidente acima de 100 caracteres) não tiveram quebra pelo frontend: exigiriam alterar e reconstruir o backend. Elas são cobertas pelos relatórios unitário e de integração.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Itens do resumo sem ficha (CA01):** a especificação 3.12 acrescentou ao resumo o número do prontuário ou do atendimento, com o acesso registrado no histórico (RN-31), e as medidas adotadas imediatamente (ou "Não informado"). O grau do dano e o tipo específico do Never Event já estavam no critério, e nenhuma ficha os confere. O sistema testado mostra os quatro. Fica a sugestão de incluí-los na ficha do CT-FUN-053, com o prontuário também na do CT-FUN-055, porque ele é visível só ao NSP e a quem conduz a análise.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #21](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/21) | Automação dos onze casos de teste da US-4.3 |
| [PR e2e #63](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/63) | Testes pendentes das US-4.1 a 4.3, com as Seções 3 a 5 |
| [Issue e2e #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/19) | Tarefa da automação |
| [Issue e2e #20](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/20) | Defeito da versão 1.0 (horário do incidente), já corrigido |
| [Issue e2e #29](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/29) e [PR e2e #30](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/30) | Defeito do CT-FUN-055 no Firefox e a correção |
| `tests/funcionais/ct-fun-053.spec.ts` a `ct-fun-061.spec.ts` | Casos funcionais da US-4.3 |
| `tests/e2e/ct-e2e-022.spec.ts` e `ct-e2e-023.spec.ts` | Fluxos completos da Seção 1 |
| [PR frontend #10](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/10) e [PR backend #9](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9) | Implementação do guia e das Seções 1 e 2 |
| [PR frontend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/17) e [PR backend #12](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12) | Implementação das Seções 3 a 5 |
| [Casos de Teste](../casos-de-teste.md) | Fichas do CT-FUN-053 ao CT-FUN-061, do CT-E2E-022 e do CT-E2E-023 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-4.3 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.3, os 4 critérios de aceite e as RN-27 e RN-31 |
| [Relatório end-to-end da US-4.2](analise-us-4-2-e2e.md) | `REL_Testes_E2E_Analise_US42_v1_1` |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_E2E_Analise_US43_v1_1 — compilado a partir das execuções da suíte end-to-end (Playwright) das branches test/19/automatiza-cts-us-4-3 e test/62/automatiza-fixmes-us-4-1-a-4-3 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 12, 14 e 15/10, 13/11 e 15/11/2026.</p>

</div>

</div>
