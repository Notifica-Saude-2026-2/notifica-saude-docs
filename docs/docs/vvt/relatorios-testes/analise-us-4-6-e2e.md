<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 4 - Análise do Incidente · Seção 4 · US-4.6

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_Analise_US46_v1_0</code></span><span>Emissão <em>5 de novembro de 2026</em></span><span>Branch <code>test/33/automatiza-cts-us-4-5</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US46_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 05/11/2026 | Criação do relatório de testes end-to-end da US-4.6 (fatores contribuintes e 5 Porquês), a partir da [PR #34 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/34). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-4.6 é a **Seção 4 da análise do incidente**: cada Problema na Prestação do Cuidado (PPC) registrado na Seção 3 vira um **cartão**. Quem analisa abre um cartão por vez e marca, entre as oito categorias do Protocolo de Londres, os **fatores contribuintes**, as condições que favoreceram aquele PPC, com a descrição e as fontes. Para cada fator, pode usar os **5 Porquês**, perguntando "por quê?" sobre a resposta anterior. Os sete casos de teste da história (CT-FUN-081 a 086 e CT-E2E-027) foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Seção 4 (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Dos 12 critérios de aceite, os 12 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Um defeito encontrado</strong><span>Fora dos critérios da US-4.6: três campos da Seção 4 têm limite de caracteres, mas não mostram o contador "N/limite" que a US-4.2 pede (#36).</span></div>
</div>

Em resumo: **a Seção 4 funciona do jeito que a história pede**: um cartão por PPC, a análise aberta no próprio cartão, as oito categorias, o registro e o salvamento dos fatores, o 5 Porquês, a validação da seção e a inclusão de um PPC esquecido. O que foi registrado continua salvo ao retomar a análise. O defeito não impede o uso: os limites continuam valendo, só o contador não aparece.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/34 · Executado em 29/10/2026 no Chromium (CI da PR), em 03/11/2026 no Chromium (máquina local, sem segunda tentativa) e em 04/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend c9b94f7 e backend cb23a1e (develop de 26/10) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>16</strong><span>testes da US-4.6</span></div>
<div><strong>16</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 03/11 (19 testes rodados, menos os 3 passos de login, que não são da história); na CI da PR, os mesmos 16 testes passaram. O defeito do contador não aparece como falha conhecida porque as fichas da US-4.6 não conferem o contador, e os testes seguem as fichas (seção 6).</p>

### Os sete casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Seção 4 com um cartão por PPC</strong> (CT-FUN-081: CA01 e CA02): o título e os quatro parágrafos da caixa de informação, com o negrito; um cartão para cada PPC da Seção 3, com o número em círculo, a descrição, "Deveria:", "Aconteceu:", a dica, o botão "Identificar fatores contribuintes" e a seta; os fatos da cronologia não aparecem na seção.</li>
<li><strong>Análise aberta no cartão e resumo</strong> (CT-FUN-082: CA03 e CA04): a análise abre dentro do próprio cartão, com o selo "Em análise" e a pergunta; abrir o PPC 2 fecha o PPC 1; fechado, o cartão resume os fatores: nada sem fator, "1 fator registrado" e "2 fatores registrados".</li>
<li><strong>Registro e salvamento dos fatores</strong> (CT-FUN-083: CA05, CA06 e CA07): as oito categorias na ordem, cada uma com o título, o exemplo e a seta, sem "Outro / não mapeado"; marcar pela caixa ou pela linha abre a descrição obrigatória e as seis fontes opcionais; desmarcar fecha e descarta o fator; "Salvar fator" recolhe a categoria com o resumo abaixo do título; o fator pode ser editado e continua salvo depois de avançar e voltar.</li>
<li><strong>5 Porquês</strong> (CT-FUN-084: CA08 e CA09): fechado por padrão, com o convite e o botão "Usar os 5 Porquês"; aberto, com a caixa de informação; "Não usar" fecha vazio; "Remover" pede confirmação; os níveis de pergunta e resposta lado a lado, com a próxima pergunta sugerida a partir da resposta anterior; limites de 100 caracteres e de 15 níveis; nível começado e incompleto impede o avanço, e nível em branco é ignorado.</li>
<li><strong>Validação da seção</strong> (CT-FUN-085: CA10): sem PPC, "Adicione pelo menos 1 PPC."; com PPCs sem fator, "Marque ao menos um fator contribuinte." em cada um, com o selo "Pendências" e a borda vermelha; com fator sem descrição e nível sem resposta, o PPC e a categoria abrem sozinhos com os campos destacados, e a mensagem do critério aparece quando essa é a única pendência; tudo completo, a análise avança para a Seção 5.</li>
<li><strong>Inclusão de PPC na Seção 4</strong> (CT-FUN-086: CA11 e CA12): sem PPC na Seção 3, o aviso e o bloco de inclusão; os três campos obrigatórios, "Cancelar" e "Preencha todos os campos do PPC."; o PPC incluído abre para análise e entra na tabela da Seção 3; com PPC, o bloco fica no fim da lista.</li>
<li><strong>Fluxo completo</strong> (CT-E2E-027: CA02, CA04, CA07 e CA11): os PPCs da Seção 3 viram cartões, os fatores e um PPC incluído na Seção 4 são registrados, a seção avança com "Rascunho salvo", e a análise retomada abre na Seção 5, com os resumos, os fatores marcados e editáveis e o PPC incluído na tabela da Seção 3 com o número 3.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas. A cobertura de código do servidor está nos relatórios unitário e de integração.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA12 | 12 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-4.6, nenhuma parte ficou pendente nem como falha conhecida. O defeito do contador (seção 6) é de um critério da US-4.2, que vale para todo campo com limite no formulário da análise; por isso não entra nesta tabela.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto da suíte end-to-end, como está?

<p class="ns-rel-meta">Suíte inteira do notifica-saude-e2e na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/41945088560">CI da main</a>, depois do merge da correção (PR #38), em 04/11/2026</p>

<div class="ns-rel-placar">
<div><strong>179</strong><span>testes executados no Chromium</span></div>
<div><strong>178</strong><span>testes aprovados</span></div>
<div><strong>1</strong><span>teste com falha</span></div>
</div>

| Navegador | Aprovados | Com falha | Instáveis | Pendentes ou manuais |
| --- | --- | --- | --- | --- |
| Chromium | 178 | 1 (CT-E2E-004) | 0 | 14 |
| WebKit (Safari) | 178 | 1 (CT-E2E-004) | 0 | 14 |
| Firefox | 177 | 1 (CT-E2E-004) | 1 | 14 |

<p class="ns-rel-legenda">Os aprovados incluem a falha conhecida do CT-FUN-053 (BUG-BACK-010), que conta como esperada. "Instável" é o teste que falhou e passou na segunda tentativa. O teste do limite de tentativas de login roda à parte e também passou.</p>

<div class="ns-rel-aviso" markdown>**A falha do CT-E2E-004 não vem desta entrega.** Ela já acontecia antes, nos três navegadores: o teste filtra a lista por um setor que só aparece quando existe uma notificação dele, e não cria essa notificação. **O teste instável do Firefox, o CT-FUN-050, é da US-4.2.**</div>

Comparada à [execução da main antes desta entrega](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/40791829424), o Chromium passou de 141 para 178 aprovados, com 1 falha (a do CT-E2E-004) e 14 pendentes nas duas: são os 37 testes das US-4.5 e 4.6. Nenhum teste que passava antes deixou de passar.

No WebKit, a primeira tentativa da CI foi interrompida pelo limite de tempo do job (30 minutos), com 172 dos 193 testes concluídos e só as falhas já conhecidas. A segunda tentativa, que está na tabela, terminou em 28,6 minutos. O aumento do limite para 45 minutos está em [e2e#39](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/39).

Na máquina local, sem segunda tentativa, a suíte inteira rodou duas vezes no Chromium em 04/11: 179 aprovados, nenhuma falha e 14 pendentes em cada rodada. Ali o CT-E2E-004 passa, porque o banco local já tem notificações no setor que o teste procura.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre a main do notifica-saude-e2e depois do merge da PR #34 (b6f17d4), em 03/11/2026</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério teve um comportamento quebrado de propósito no frontend, uma quebra por vez, e o mesmo teste rodou sem nenhuma alteração. Foram 13 quebras, uma para cada um dos 12 critérios e mais uma para o fluxo completo: tirar o negrito de um parágrafo da caixa de informação, trocar a dica do cartão, trocar o selo "Em análise" por "Analisando", escrever "1 fatores registrados", tirar um item do exemplo de uma categoria, desmarcar sem descartar o fator, "Salvar fator" sem recolher a categoria, abrir o 5 Porquês já aberto, aceitar 16 níveis, trocar as mensagens de validação e de inclusão, e deixar de carregar a descrição dos fatores ao retomar. O teste certo reprovou em todas, com a mensagem da quebra, e cada quebra foi desfeita logo depois.</li>
<li><strong>Quebras que derrubaram mais de um teste:</strong> desmarcar sem descartar o fator reprovou também o teste do salvamento, que desmarca uma categoria no meio do percurso; e o 5 Porquês já aberto reprovou também o teste dos níveis, que começa pelo botão "Usar os 5 Porquês", que deixou de existir. Nos dois casos, pelo mesmo motivo da quebra.</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/40981572942">execução da CI da PR #34</a>, no Chromium e sobre o último commit (bf79b7a) já unido à main, terminou com 178 testes aprovados, 1 com falha e 14 pendentes. Os 37 testes das US-4.5 e 4.6 passaram. A falha é a do CT-E2E-004, que já existia.</li>
<li><strong>Três navegadores:</strong> depois do merge, a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/41747979935">CI da main</a> rodou a suíte no Chromium, no Firefox e no WebKit. Os testes da US-4.6 passaram nos três. No Firefox, o teste do salvamento dos fatores (CT-FUN-083, CA07) passou só na segunda tentativa: a primeira caiu na preparação, ao marcar uma opção do formulário público, e não no que o teste confere. A investigação mostrou um defeito do próprio teste: o formulário rola suave até o topo a cada troca de etapa, e, no Firefox, um clique dado durante essa animação às vezes não tem efeito. Numa sonda de estresse, foram 5 cliques sem efeito em 1.536 com a animação e nenhum em 3.456 sem ela. A correção (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/37">e2e#37</a>, <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/38">PR #38</a>) desliga a animação só no navegador dos testes; o sistema não muda. Na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/41945088560">CI da main depois do merge da PR #38</a>, os testes da US-4.6 passaram nos três navegadores sem precisar repetir, e o Firefox teve 1 teste instável, de outra história (eram 4 antes da correção).</li>
</ul>

<div class="ns-rel-citacao">A gravação do rascunho no banco e o que o servidor devolve ao salvar e ao retomar são decididos pelo servidor e não tiveram quebra pelo frontend; a reação da tela a essas respostas teve (retomada da análise com os fatores). Eles são cobertos pelos relatórios unitário e de integração.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Defeito [#36](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/36) (frontend, BUG-FRONT-020):** a pergunta e a resposta de cada nível do 5 Porquês (limite de 100), a descrição do fator e os campos do PPC incluído na Seção 4 (limite de 500) não mostram o contador "N/limite" que a US-4.2 (CA10) pede para todo campo de texto com limite da análise. Nas Seções 1, 2, 3 e 5, todos mostram. O defeito está registrado no [Relatório de Bugs](../relatorio-bugs.md).
- **Sugestão para as fichas:** incluir o contador nas fichas do CT-FUN-083, do CT-FUN-084 e do CT-FUN-086, para que os testes passem a vigiá-lo quando o defeito for corrigido.
- **Ficha do CT-FUN-085:** a ordem dos passos e o resultado esperado foram ajustados ao que o sistema faz com mais de uma pendência (ver a [ficha do CT-FUN-085](../casos-de-teste.md#ct-fun-085)).
</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #34](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/34) | Automação dos casos de teste das US-4.5 e US-4.6 |
| [Issue e2e #35](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/35) | Tarefa da automação da US-4.6 |
| [Issue e2e #36](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/36) | Defeito encontrado (contador na Seção 4), com passos para reprodução e evidências |
| `tests/funcionais/ct-fun-081.spec.ts` a `ct-fun-086.spec.ts` | Casos funcionais da US-4.6 |
| `tests/e2e/ct-e2e-027.spec.ts` | Fluxo completo da Seção 4, com salvamento e retomada |
| [PR frontend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/17) e [PR backend #12](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12) | Implementação das Seções 3 a 5 testada aqui |
| [Casos de Teste](../casos-de-teste.md) | Fichas do CT-FUN-081 ao CT-FUN-086 e do CT-E2E-027 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-4.6 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.6 e os 12 critérios de aceite; US-4.2, CA10 (contador) |
| [Relatório end-to-end da US-4.5](analise-us-4-5-e2e.md) | `REL_Testes_E2E_Analise_US45_v1_0` |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_E2E_Analise_US46_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/33/automatiza-cts-us-4-5 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 29/10, 03/11 e 04/11/2026.</p>

</div>

</div>
