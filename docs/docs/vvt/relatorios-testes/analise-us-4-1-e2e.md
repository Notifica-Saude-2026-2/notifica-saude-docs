<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes End-to-End

Épico 4 - Análise do Incidente · Fila e acesso aos incidentes · US-4.1

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_E2E_Analise_US41_v1_1</code></span><span>Emissão <em>15 de novembro de 2026</em></span><span>Branch <code>test/66/automatiza-cts-funcionais-us-4-1</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_E2E_Analise_US41_v1_1.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 19/10/2026 | Criação do relatório de testes end-to-end da US-4.1 (visualizar incidentes para análise), a partir da [PR #26 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/26), com os CT-E2E-019 e CT-E2E-020. | Gustavo Henrique |
    | 1.1 | 15/11/2026 | Relatório refeito no modelo dos demais relatórios end-to-end, com PDF, e estendido aos 8 critérios de aceite: os CT-FUN-041 a CT-FUN-046, automatizados na [PR #67 do notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/67), e os cenários pendentes do CT-E2E-019 e do CT-E2E-020, completados na [PR #63](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/63). Execução sobre o frontend 78a3927 e o backend 18a73e6 (develop de 10/11). | Catarina Freisleben |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para os relatórios unitário e de integração:** aqueles conferem o servidor por dentro. Um teste end-to-end (de ponta a ponta) abre o sistema num navegador de verdade e repete o que uma pessoa faz: clica, digita, avança e confere o que aparece na tela. A tela, o servidor, o banco de dados e o cache rodam juntos, em containers.</div>

A US-4.1 é **a fila e o acesso aos incidentes que serão analisados**. O Gestor da Área vê só os incidentes do seu setor que o NSP encaminhou a ele. O gestor continua com o acesso até o fim do fluxo e vê as informações e a classificação de cada incidente, mas não vê quem notificou. Ele também não consegue abrir o que não é do seu setor. O NSP vê todos os incidentes da instituição. Os oito casos de teste da história (CT-FUN-041 a 046, CT-E2E-019 e CT-E2E-020) foram automatizados e rodados contra o sistema real. Veja como a história se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Fila e acesso (tela e servidor)</strong><span>Testados de ponta a ponta no navegador.<br>Dos 8 critérios de aceite, 6 estão totalmente verificados e aprovados. Os outros 2 foram aprovados em tudo o que pode ser conferido.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>1 defeito e 2 pontos da especificação em aberto</strong><span>O prazo para análise de Óbito e Never Event sai com 4 dias, e não 2 (<a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/68">e2e#68</a>, BUG-BACK-011). Duas partes da especificação não puderam ser conferidas como estão escritas: o Never Event encaminhado do CA04 e o "Não informado" do CA05 (seção 6).</span></div>
</div>

Em resumo: **a fila e o acesso funcionam do jeito que a história pede**. O defeito do prazo não impede o uso, mas dá aos incidentes mais graves 2 dias a mais do que a RN-14 prevê. O gestor vê só o que o NSP encaminhou ao setor dele, antes ou depois da análise, e mantém o acesso em todos os status. Ele vê as informações, a classificação, o prazo e o responsável. O servidor não manda a ele o nome nem o contato de quem notificou. Ele não abre incidente de outro setor ou não encaminhado, nem pelo endereço, nem pela busca. Cada regra que a tela decide teve uma quebra de propósito no sistema, e o teste certo reprovou em todas.

</div>

<div class="ns-rel-card" markdown>

## 2. Execução — o fluxo funciona no navegador?

<p class="ns-rel-meta">PRs: github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/63 e /pull/67 · Executado em 13/11/2026 no Chromium, no Firefox e no WebKit (máquina local, sem segunda tentativa), no Chromium (CI das PRs #63 e #67) e em 15/11/2026 no Chromium, no Firefox e no WebKit (CI da main), com frontend 78a3927 e backend 18a73e6 (develop de 10/11) · Ambiente completo em containers Docker: frontend, backend, Postgres e Redis</p>

<div class="ns-rel-placar">
<div><strong>19</strong><span>testes da US-4.1</span></div>
<div><strong>19</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>falhas conhecidas</span></div>
</div>

<p class="ns-rel-legenda">Nenhum teste da história está pendente. Os números são da execução local de 13/11, com o mesmo resultado nos três navegadores. Na CI das PRs e na CI da main, os mesmos 19 testes passaram. Na CI da main, no Firefox, o CT-FUN-046 passou na segunda tentativa: na primeira, a lista filtrada pela busca demorou mais de 5 segundos para chegar (seção 4). O CT-E2E-019 tem cinco testes, um por status do incidente. O CT-E2E-020 tem três: antes da decisão do NSP, com o resultado encaminhado e sem ele. O CT-FUN-043 tem dois casos (C1 e C3), o CT-FUN-044 tem três e o CT-FUN-045 também tem três (A1, A2 e A3).</p>

### Os oito casos de teste, por assunto

<ul class="ns-rel-checks">
<li><strong>Fila do gestor</strong> (CT-FUN-041: CA01): aparecem o incidente encaminhado ao setor antes da análise ("Encaminhado") e o que o NSP analisou e decidiu encaminhar ("Analisado"). O incidente de outro setor do mesmo hospital e o não encaminhado não aparecem, nem pela busca.</li>
<li><strong>Permanência na fila</strong> (CT-E2E-019: CA02): o incidente encaminhado continua na fila do gestor em "Em análise", "Arquivado", "Analisado", "Em ação" e "Concluído". Nos status "Arquivado" e "Concluído", o gestor também abre o detalhe.</li>
<li><strong>Informações do incidente</strong> (CT-FUN-042: CA03): aberto pela fila, o detalhe mostra ao gestor o cabeçalho (identificador, "Criado em", "Ocorrido em" e "Status"). Mostra também as informações gerais, com o setor e o paciente ("30 a 39 anos", "Feminino"), e a classificação ("Near Miss", "Queda", "Paciente").</li>
<li><strong>Classificação, prazo e responsável</strong> (CT-FUN-043: CA04): num Evento adverso leve encaminhado (C1), o cabeçalho mostra o responsável, o NSP que finalizou a classificação. A classificação traz o grau do dano, o tipo de incidente, os envolvidos e as observações do NSP. O prazo para análise é a data de registro mais 10 dias (RN-14). Num incidente "Analisado" (C3), o responsável continua no cabeçalho e o prazo não aparece. <span class="ns-rel-cor--warn">O caso do Never Event encaminhado (C2) não foi automatizado, porque não pode existir (seção 6). Na conferência desse caso, achamos que o prazo de Óbito e Never Event sai com 4 dias, e não 2 (BUG-BACK-011).</span></li>
<li><strong>Notificante oculto para o gestor</strong> (CT-FUN-044: CA05): a resposta do servidor ao gestor não traz o nome nem o contato de quem notificou. A notificação identificada e a anônima aparecem iguais na tela, com os mesmos rótulos. O resumo da Seção 1 da análise não mostra a identificação em nenhuma das duas. O NSP, no mesmo incidente, vê o nome e o celular/e-mail. <span class="ns-rel-cor--warn">Os campos "Nome do notificante" e "Celular/E-mail" aparecem ao gestor com "Não informado", como no protótipo (seção 6).</span></li>
<li><strong>Bloqueio de acesso</strong> (CT-FUN-045: CA06): o incidente encaminhado ao setor abre pelo endereço e é achado pela busca. O de outro setor e o classificado e não encaminhado não abrem. O servidor responde "sem permissão" (código 403) sem nenhum dado do incidente. A tela mostra "Notificação não encontrada ou sessão expirada.", nenhuma seção do incidente e, na análise, "Não foi possível carregar esta análise.". A busca também não os traz.</li>
<li><strong>Análise feita pelo NSP</strong> (CT-E2E-020: CA07): antes da decisão do NSP, o gestor não vê o incidente nem abre o detalhe e a análise. Se o NSP encaminha o resultado, o gestor vê o incidente "Analisado" e, na seção "Análise", "A análise deste incidente foi concluída." e as recomendações. Se o NSP não encaminha e justifica ("Incidente restrito ao núcleo."), o gestor continua sem acesso, e o histórico do NSP registra a justificativa.</li>
<li><strong>Acesso do NSP</strong> (CT-FUN-046: CA08): o NSP acha todos os incidentes da instituição, encaminhados ou não, com o status e o responsável certos. O responsável aparece como "—" quando não há classificação. Nas demais, aparece o NSP que finalizou a classificação, inclusive o segundo NSP do hospital.</li>
</ul>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto da história foi verificado?

<p class="ns-rel-meta">Num teste end-to-end, a medida que importa é quantos critérios de aceite da história foram conferidos no sistema funcionando, e não quantas linhas de código foram executadas. A cobertura de código do servidor está nos relatórios unitário e de integração.</p>

| Situação | Critérios | Total |
| --- | --- | --- |
| <span class="ns-rel-cor--ok">Verificado e aprovado</span> | CA01, CA02, CA03, CA06, CA07, CA08 | 6 |
| <span class="ns-rel-cor--warn">Aprovado no que pode ser conferido, com ponto da especificação em aberto</span> | CA04 (o Never Event encaminhado não pode existir; o prazo de Óbito e Never Event tem um defeito, BUG-BACK-011), CA05 (os campos do notificante aparecem com "Não informado", como no protótipo) | 2 |

<div class="ns-rel-info" markdown>

**Como ler os pontos em aberto.** Um critério só conta como verificado e aprovado quando todas as suas partes têm teste e todos passaram. No CA04 e no CA05, tudo o que o sistema permite conferir foi conferido e aprovado. O que ficou de fora é uma parte da especificação que o sistema não tem como cumprir do jeito que está escrita, ou que o protótipo resolve de outro jeito. Ela não é um defeito do sistema. A especificação e as fichas precisam ser revistas (seção 6).

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

Comparada à [CI da main anterior à PR #67](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43487701220), de 13/11, cada navegador passou de 221 para 236 testes. No Chromium e no WebKit, os aprovados passaram de 219 para 230: os 11 a mais são os testes da PR #67. Os pendentes passaram de 2 para 6, com os 4 do CT-NF-010 da PR #10, que entrou no mesmo dia. No Firefox, a falha do CT-E2E-028 é a mesma nas duas execuções. Nenhum teste que passava antes deixou de passar.

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas em 13/11/2026, com o frontend local sobre o 78a3927 e o backend 18a73e6: as quebras do CT-E2E-019 e do CT-E2E-020 sobre os testes que viraram a PR #63, e as dos CT-FUN-041 a 046 sobre os que viraram a PR #67</p>

<ul class="ns-rel-checks">
<li><strong>Contraprova:</strong> um teste que passa pode estar certo ou não estar conferindo nada, e as duas coisas dão o mesmo resultado verde. Para descartar a segunda, cada regra que a tela decide foi quebrada de propósito no frontend, uma por vez, e os mesmos testes rodaram sem nenhuma alteração. Foram 16 quebras. Nos CT-FUN-041 a 046, foram 10: a lista deixar de mostrar os incidentes "Encaminhado", "Faixa etária" virar "Idade", o setor mostrar a instituição, o prazo sair um dia depois ou aparecer em qualquer status, o cabeçalho e o card mostrarem "—" no lugar do responsável, o card mostrar "Não informado" sem responsável, o resumo da Seção 1 indicar "Notificação anônima" e o NSP deixar de ver o notificante. No CT-E2E-019 e no CT-E2E-020, foram 6: a fila deixar de mostrar "Analisado", "Em ação" e "Concluído", o gestor não abrir um incidente "Concluído", as duas decisões do NSP trocarem de lugar, o gestor não ver a análise encaminhada e o histórico perder a justificativa. O teste certo reprovou em todas, no passo da própria regra, e cada quebra foi desfeita logo depois.</li>
<li><strong>Uma brecha achada e corrigida:</strong> a primeira forma da quebra do resumo da Seção 1 não foi pega. O teste conferia só a notificação identificada, e a ficha pede a identificada e a anônima. Corrigido o teste, a quebra continuou sem efeito, porque o servidor não manda ao gestor nem a indicação de anônima. Essa proteção é do servidor. A quebra passou a forçar "Notificação anônima" no resumo, e o teste reprovou.</li>
<li><strong>Esteira das PRs:</strong> a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43476838653">execução da CI da PR #63</a>, no Chromium, terminou com 215 testes aprovados, nenhum com falha e 2 pendentes. A primeira execução da CI da PR #67 parou antes de rodar os testes por um defeito do próprio teste, e não do sistema. O CT-FUN-043 lia o arquivo da sessão do NSP antes de o login automático criá-lo, e na máquina local o arquivo já existia de rodadas anteriores. Corrigido, a <a href="https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/actions/runs/43630502930">nova execução</a>, sobre o último commit (64799b6), terminou com 230 aprovados, nenhum com falha e 2 pendentes. Os testes da US-4.1 passaram nas duas.</li>
<li><strong>Três navegadores:</strong> os 19 testes da US-4.1 passaram também no Firefox e no WebKit, na máquina local, sem segunda tentativa, e na CI da main. Lá, o CT-FUN-046 precisou de uma segunda tentativa no Firefox. Na primeira, a busca pela lista filtrada esperou 5 segundos pela resposta do servidor e desistiu. O passo é da preparação do teste (procurar o card), e não da regra do CA08, e na segunda tentativa todas as conferências passaram.</li>
</ul>

<div class="ns-rel-citacao">Algumas regras são decididas só pelo servidor e não tiveram quebra pelo frontend. São elas: a fila do gestor sem os incidentes de outro setor e os não encaminhados, a recusa (403) sem nenhum dado e o notificante que não chega ao gestor (RN-27). Os testes conferem essas regras na tela e na resposta do servidor. O controle vem do próprio teste, que abre o incidente permitido e barra os demais.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

- **Defeito [e2e#68](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/68) (backend, BUG-BACK-011):** ao classificar com grau do dano "Óbito" ou "Never Event", o servidor calcula o prazo para análise com 4 dias a partir do registro, o mesmo de um dano grave. A RN-14 e o protótipo pedem 2 dias, e a Sophya confirmou a regra. O caso da ficha com Never Event não foi automatizado, porque não pode existir (item abaixo). O CT-E2E-007, da US-2.3, conferia o prazo do Never Event com os 4 dias errados e por isso passava com o defeito. A correção do servidor ([back#20](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/20)) entrou na `develop` em 15/11, depois da versão testada, e o ajuste do CT-E2E-007 é a tarefa [e2e#69](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/69). O defeito está no [Relatório de Bugs](../relatorio-bugs.md#bug-back-011).

- **CA04, Never Event encaminhado (caso C2 do CT-FUN-043):** a ficha pede um incidente "classificado como Never Event e encaminhado ao setor", visto pelo gestor com o prazo para análise. Esse caso não pode existir. O sistema não permite encaminhar Óbito nem Never Event ao setor antes da análise (US-2.3, CA06), e, depois da análise, o incidente fica "Analisado", sem prazo. A ficha precisa ser corrigida.
- **CA05, campos do notificante com "Não informado":** o critério pede que o gestor não veja os campos "Nome do notificante" e "Celular/E-mail", nem com "Não informado". O sistema segue o protótipo, que mostra os dois campos para qualquer perfil, com "Não informado" para o gestor. O nome e o contato nunca chegam ao gestor, e isso foi conferido. A especificação e a ficha precisam ser alinhadas ao protótipo, ou o contrário.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR e2e #67](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/67) | Automação dos casos funcionais da US-4.1 (CT-FUN-041 a 046) |
| [Issue e2e #66](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/66) | Tarefa da automação dos casos funcionais |
| [PR e2e #63](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/63) | Cenários pendentes do CT-E2E-019 e do CT-E2E-020, entre os testes pendentes das US-4.1 a 4.3 |
| [PR e2e #26](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/pull/26) | Primeira automação do CT-E2E-019 e do CT-E2E-020 (versão 1.0 deste relatório) |
| [Issue e2e #68](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e/issues/68) | Defeito do prazo de Óbito e Never Event (BUG-BACK-011), com passos para reprodução |
| `tests/funcionais/ct-fun-041.spec.ts` a `ct-fun-046.spec.ts` | Casos funcionais da US-4.1 |
| `tests/e2e/ct-e2e-019.spec.ts` e `ct-e2e-020.spec.ts` | Permanência na fila e acesso do setor à análise feita pelo NSP |
| [Casos de Teste](../casos-de-teste.md) | Fichas do CT-FUN-041 ao CT-FUN-046, do CT-E2E-019 e do CT-E2E-020 |
| [Matriz de Rastreabilidade](../matriz-rastreabilidade.md) | Status de automação de cada critério da US-4.1 e dos RNF 6.2.2 e 6.3.4 |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.1, os 8 critérios de aceite e as RN-11, RN-14 e RN-27 |
| [Relatório de Bugs](../relatorio-bugs.md#bug-back-011) | BUG-BACK-011 |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |
| Relatórios end-to-end das [US-4.2](analise-us-4-2-e2e.md) e [US-4.3](analise-us-4-3-e2e.md) | As outras histórias cujos testes pendentes entraram na PR #63 |

<p class="ns-rel-rodape">REL_Testes_E2E_Analise_US41_v1_1 — compilado a partir das execuções da suíte end-to-end (Playwright) das branches test/62/automatiza-fixmes-us-4-1-a-4-3 e test/66/automatiza-cts-funcionais-us-4-1 e da main do repositório Notifica-Saude-2026-2/notifica-saude-e2e, em 13 e 15/11/2026.</p>

</div>

</div>
