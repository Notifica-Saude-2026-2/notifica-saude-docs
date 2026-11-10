<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 4 - Análise do Incidente · Seção 3 · US-4.5

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_Analise_US45_v1_0</code></span><span>Emissão <em>5 de novembro de 2026</em></span><span>Branch <code>test/33/automatiza-cts-us-4-5</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US45_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 05/11/2026 | Criação do relatório de testes end-to-end da US-4.5 (cronologia e problemas na prestação do cuidado), a partir da [PR #34 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/34). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-4.5 é a **Seção 3 da análise do incidente**: quem analisa monta a **cronologia** do incidente, uma linha do tempo com um fato por linha, cada um com data, hora, fonte e status, e registra os **Problemas na Prestação do Cuidado (PPC)**, o que aconteceu no cuidado de forma diferente do que deveria. Os oito casos de teste da história (CT-FUN-074 a 080 e CT-E2E-026) foram automatizados e rodados contra o sistema real, que já tem as Seções 3 e 4. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Seção 3 (tela e servidor)</strong><span>Testada de ponta a ponta no navegador.<br>Dos 13 critérios de aceite, os 13 estão totalmente verificados e aprovados.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">✓</span><strong>Nenhum defeito no sistema</strong><span>Nenhum teste da história ficou como falha conhecida. Um defeito do próprio teste, que só aparecia no WebKit, foi corrigido (seção 5).</span></div>
</div>

Em resumo: **a Seção 3 funciona do jeito que a história pede**: orientações, exemplo, cronologia obrigatória, campos e limites, conferência antes de seguir, PPCs opcionais e completos, numeração e legibilidade. Os PPCs registrados chegam à Seção 4 como cartões, e tudo continua salvo ao retomar a análise. Cada um dos 13 critérios teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/34 · Executado em 29/10/2026 no Chromium (CI da PR), em 03/11/2026 no Chromium (máquina local, sem segunda tentativa) e em 04/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend c9b94f7 e backend cb23a1e (develop de 26/10) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>21</strong><span>testes da US-4.5</span></div>
<div><strong>21</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 03/11 (24 testes rodados, menos os 3 passos de login, que não são da história); na CI da PR, os mesmos 21 testes passaram. O CT-E2E-026 roda em duas situações (com e sem PPC), e cada uma tem seus testes.</p>

### Os oito casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Orientações da cronologia</strong> (CT-FUN-074: CA01, CA02 e CA03): o título da seção e a caixa de informação, com o trecho inicial em negrito; o bloco recolhível "Como preencher", aberto na primeira vez, com os três passos numerados e o rótulo de cada um em negrito; e o exemplo em mini tabela, acima da tabela de preenchimento, com as mesmas colunas, na mesma ordem, e as cinco linhas do exemplo.</li>
<li><strong>Tabela da cronologia</strong> (CT-FUN-075: CA05 e CA06): os campos na ordem Data, Hora, Fato, Fonte e Status, lado a lado, com "+ Adicionar evento" incluindo a linha abaixo; em tela de celular, a tabela rola na horizontal sem empilhar os campos; as opções de Fonte (com "Especifique a opção" para "Outro") e de Status, com a legenda; o Fato com 501 e 500 caracteres e o "Outro" com 31 e 30, com contador, aviso e avanço no limite.</li>
<li><strong>Cronologia obrigatória</strong> (CT-FUN-076: CA04): a tabela abre com um evento em branco; sem nenhum evento, com célula vazia ou com "Outro" sem especificação, a seção não avança, nada é enviado ao servidor e as células que faltam ficam destacadas; com o evento completo, avança.</li>
<li><strong>Conferência antes de seguir</strong> (CT-FUN-077: CA07 e CA08): o bloco "Antes de seguir, confira" abaixo da tabela, com os quatro itens em duas colunas e o ícone de verificação; o aviso de fatos "Em análise" ao lado, que não aparece com 0, diz "Há 1 fato em análise." com 1 e "Há 2 fatos em análise." com 2, sem impedir o avanço.</li>
<li><strong>Orientações dos PPCs</strong> (CT-FUN-078: CA09 e CA10): a caixa de informação, com "falha no processo de cuidado" em negrito, e a tabela sempre exibida, sem a pergunta "Foi identificado algum PPC?"; o bloco "Como identificar um PPC", com os passos numerados, o exemplo em itálico e as colunas do que é (✓ verde) e do que não é PPC (✗ vermelho), lado a lado e empilhadas em tela de celular.</li>
<li><strong>Registro de PPC</strong> (CT-FUN-079: CA11): as três colunas e "+ Adicionar PPC"; sem PPC, a seção avança; com PPC incompleto, só as células vazias ficam destacadas; o contador "N/500" e os limites de 501 e 500 caracteres.</li>
<li><strong>Numeração e legibilidade</strong> (CT-FUN-080: CA12 e CA13): os PPCs numerados 1, 2 e 3 pela posição, sem como editar o número, e renumerados ao remover um; o título mais longo quebrado em mais de uma linha, sem passar da coluna; as caixas de texto com três linhas, que não diminuem e aumentam pelo canto.</li>
<li><strong>Fluxo completo</strong> (CT-E2E-026: CA04 e CA11): com a cronologia e dois PPCs, a seção avança com "Rascunho salvo", a Seção 4 mostra um cartão para cada PPC, e a análise retomada abre na Seção 4, com a Seção 3 preservada; sem PPC, a Seção 3 avança, e a Seção 4 pede "Adicione pelo menos 1 PPC.".</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas. A cobertura de código do servidor está nos relatórios unitário e de integração.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01 a CA13 | 13 |

<div class="ns-rel-info" markdown>

**Como ler este resultado.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. Na US-4.5, nenhuma parte ficou pendente nem como falha conhecida. No WebKit, o aumento da caixa de texto pelo canto (CA13) é conferido pela regra que o permite, e não pelo arraste, que a ferramenta não consegue simular nesse navegador (seção 5).

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

<p class="ns-rel-meta">Executadas sobre a main do notifica-saude-e2e depois do merge da PR #34 (b6f17d4), em 03/11/2026, e sobre a branch da correção do CT-FUN-080</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada critério teve um comportamento quebrado de propósito no frontend, uma quebra por vez, e o mesmo teste rodou sem nenhuma alteração. Foram 14 quebras, uma para cada um dos 13 critérios e mais uma para o fluxo completo: tirar o negrito da caixa de informação, mostrar o exemplo com as colunas em outra ordem, deixar de exigir ao menos um evento, impedir a rolagem horizontal da tabela, aceitar 600 caracteres no Fato, pôr os itens da conferência numa coluna só, mostrar o aviso só a partir de 2 fatos, deixar as colunas do "Como identificar" lado a lado no celular, começar a numeração dos PPCs em 0, reduzir as caixas de texto a uma linha e mostrar o "Aconteceu" no lugar do "Deveria" no cartão da Seção 4. O teste certo reprovou em todas, com a mensagem da quebra, os outros testes da rodada continuaram passando, e cada quebra foi desfeita logo depois.</li>
<li><strong>"Nada enviado ao servidor":</strong> na cronologia sem evento, quem acusou a quebra foi a conferência de que o clique em "Próximo" não pode enviar a seção ("a seção com pendência foi enviada ao servidor").</li>
<li><strong>Esteira da PR:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/40981572942">execução da CI da PR #34</a>, no Chromium e sobre o último commit (bf79b7a) já unido à main, terminou com 178 testes aprovados, 1 com falha e 14 pendentes. Os 37 testes das US-4.5 e 4.6 passaram. A falha é a do CT-E2E-004, que já existia.</li>
<li><strong>Três navegadores e um defeito no próprio teste:</strong> depois do merge, a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/41747979935">CI da main</a> rodou a suíte no Chromium, no Firefox e no WebKit. No WebKit, o passo do CT-FUN-080 que aumenta a caixa de texto arrastando o canto falhou. O sistema está correto: nos três navegadores, a caixa permite aumentar na vertical e tem altura mínima de três linhas; é a ferramenta de teste que não consegue simular o arraste do canto no WebKit. Pelo mesmo motivo, o passo "não diminuem" passava ali sem conferir nada. A correção (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/37">e2e#37</a>, <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/38">PR #38</a>) confere, em todos os navegadores, a altura mínima e a permissão de aumentar, e mantém o arraste no Chromium e no Firefox. Ela passou nos três navegadores e reprovou quando a caixa perdeu o puxador ou a altura mínima. Na <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/41945088560">CI da main depois do merge da PR #38</a>, o CT-FUN-080 passou nos três navegadores.</li>
</ul>

<div class="ns-rel-citacao">A gravação do rascunho no banco e o que o servidor devolve ao salvar e ao retomar são decididos pelo servidor e não tiveram quebra pelo frontend; a reação da tela a essas respostas teve (cronologia sem evento e retomada da análise). Eles são cobertos pelos relatórios unitário e de integração.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Nada pendente nos critérios da US-4.5.** Os 13 estão verificados e aprovados.
- **Aviso ao remover um PPC que já tem fatores:** ao remover na Seção 3 um PPC com fatores registrados na Seção 4, o sistema pede confirmação e avisa que os fatores serão descartados. Nenhum critério da US-4.5 descreve esse aviso, e nenhum teste o confere. Fica a pergunta se ele entra na história.
- **Textos que diferem do requisito só na forma:** a legenda do status "Em análise" tem a mesma informação do critério, com outra pontuação; e a mensagem do PPC incompleto termina em "?." ("Preencha O que deveria ter acontecido? e O que aconteceu de diferente?."). Os testes conferem os trechos que a ficha define.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #34](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/34) | Automação dos casos de teste das US-4.5 e US-4.6 |
| [Issue e2e #33](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/33) | Tarefa da automação da US-4.5 |
| [Issue e2e #37](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/37) e [PR e2e #38](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/38) | Defeito do CT-FUN-080 no WebKit e a correção |
| `tests/funcionais/ct-fun-074.spec.ts` a `ct-fun-080.spec.ts` | Casos funcionais da US-4.5 |
| `tests/e2e/ct-e2e-026.spec.ts` | Fluxo completo da Seção 3 até a Seção 4 |
| [PR frontend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/17) e [PR backend #12](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12) | Implementação das Seções 3 a 5 testada aqui |
| [Casos de Teste](../casos-de-teste.md) | Fichas do CT-FUN-074 ao CT-FUN-080 e do CT-E2E-026 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-4.5 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.5 e os 13 critérios de aceite |
| [Relatório end-to-end da US-4.6](analise-us-4-6-e2e.md) | `REL_Testes_E2E_Analise_US46_v1_0` |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_E2E_Analise_US45_v1_0 — compilado a partir das execuções da suíte end-to-end (Playwright) da branch test/33/automatiza-cts-us-4-5 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 29/10, 03/11 e 04/11/2026.</p>

</div>

</div>
