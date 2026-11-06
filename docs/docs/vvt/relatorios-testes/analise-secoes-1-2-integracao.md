<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes de Integração

Épico 4 - Análise do Incidente · Seções 1 e 2 · US-4.1, US-4.2, US-4.3, US-4.4 e US-6.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Int_Analise_S1S2_v1_0</code></span><span>Emissão <em>6 de outubro de 2026</em></span><span>Feature branch <code>feat/56/implementa-analise-secao-1-e-2</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_Analise_S1S2_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório unitário](analise-secoes-1-2-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 06/10/2026 | Criação do relatório de testes de integração da análise do incidente (Seções 1 e 2). | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para o relatório unitário:** testes unitários conferem uma peça isolada do sistema; testes de integração conferem se as peças realmente conversam entre si — aqui, as requisições HTTP passam de verdade pela API, por um banco de dados (Postgres) e por um cache (Redis) rodando em containers, como aconteceria em produção.</div>

O início da análise e o rascunho das Seções 1 e 2 foram testados **de ponta a ponta**: da chamada HTTP até o que fica gravado no banco e o que volta na resposta. Também foram testados o sigilo do notificante e a fila do gestor (RN-26 e RN-27), a trava da classificação (RN-15) e o que acontece quando duas pessoas tentam iniciar a mesma análise ao mesmo tempo. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente, de ponta a ponta.<br>Os 375 testes passaram, incluindo os 71 novos desta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela das Seções 0, 1 e 2 foi entregue na PR #10 do frontend e tem relatório próprio.</span></div>
</div>

Em resumo: **as regras continuam funcionando com o sistema todo de pé** — servidor, banco de dados e cache reais —, inclusive nas situações de corrida, que só aparecem quando há concorrência de verdade no banco.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o fluxo completo foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9 · Executado em 06/10/2026 sobre o commit 48cca6a · Infraestrutura real: Postgres e Redis em containers Docker, com o banco de teste recriado a partir do schema da branch</p>

<div class="ns-rel-placar">
<div><strong>375</strong><span>testes executados</span></div>
<div><strong>375</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 71 testes novos desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Início da análise</strong> (<code>investigacao.inicio.routes.spec.ts</code>, 19 testes): o NSP inicia um incidente classificado e recebe 201, com o status em "Em análise" e o histórico gravado; o gestor inicia um incidente encaminhado ao seu setor. Com a Seção 1 vazia, só com espaços, ausente ou acima de 100 caracteres, a API responde 422 com as pendências e <strong>nada é gravado</strong>. Perfis sem permissão recebem 403 (NSP em incidente encaminhado, gestor sem encaminhamento ou de outro setor, Administrador — D-016); notificação arquivada ou ainda nova recebe 409; inexistente, 404.</li>
<li><strong>Início simultâneo</strong> (mesmo arquivo): dois pedidos ao mesmo tempo resultam em <strong>exatamente um 201 e um 409</strong> com a mensagem da US-4.2, CA04; o próprio autor repetindo o pedido recebe 200 sem alterar nada (D-015). Três testes forçam a corrida de forma determinística: a restrição única do banco, o status alterado entre a leitura e a escrita e o início concorrente com um encaminhamento — os dois nunca coexistem.</li>
<li><strong>Rascunho por seção</strong> (<code>investigacao.rascunho.routes.spec.ts</code>, 31 testes): a Seção 2 completa é gravada sem pendências e não mexe na Seção 1; incompleta, é gravada como veio e devolve as pendências com o caminho de cada campo (12 variações). A Seção 1 pode ser reeditada; chaves desconhecidas são descartadas. Outro gestor, NSP, gestor de outro setor e Administrador recebem 403 (RN-28); análise concluída ou notificação arquivada, 409. Pedidos malformados recebem 400 — inclusive o <strong>PATCH sem conteúdo, que antes apagava a seção gravada</strong> (corrigido no commit 48cca6a) e o JSON inválido, que antes caía em erro 500 —, e o corpo acima do limite recebe 413 sem gravar nada.</li>
<li><strong>Leitura da análise</strong> (<code>investigacao.leitura.routes.spec.ts</code>, 10 testes): enquanto a análise está em andamento, o conteúdo só é entregue ao autor — outro gestor do setor, o NSP e o Administrador não o recebem (US-4.2, CA03); depois da conclusão, todos com acesso o recebem. Sem análise, 404; gestor sem encaminhamento, de outro setor, notificante e usuário de outra instituição, 403.</li>
<li><strong>Sigilo e fila do gestor</strong> (<code>notificacao.sigilo-acesso-gestor.routes.spec.ts</code>, 9 testes): na listagem e no detalhe, o gestor não recebe a identificação do notificante nem a indicação de anônima, mas recebe o responsável e o prazo (US-4.1, CA04/CA05); o NSP recebe tudo; renomear a seção dos campos de identificação não desliga o sigilo. Incidente sem encaminhamento não aparece na fila do gestor e dá 403 no detalhe; o encaminhado continua na fila depois de avançar o status; gestor de outro setor não acessa nem por link direto (CA06).</li>
<li><strong>Trava da classificação</strong> (<code>classificacao.bloqueio.routes.spec.ts</code>, 2 testes): depois que o fluxo avança, tanto o <code>PUT</code> da classificação quanto o <code>PUT</code> da notificação com campos de classificação respondem 409 com o motivo (RN-15).</li>
</ul>

<div class="ns-rel-aviso" markdown>**Os demais fluxos continuam funcionando:** o antigo `investigacao.routes.spec.ts` (7 testes) foi substituído pelos três arquivos acima, e o `plano-acao.fluxo.routes.spec.ts` foi ajustado para ler o problema identificado na Seção 1. Todas as outras suítes de integração, incluindo o plano de ação e o encaminhamento, passaram sem alteração — a mudança não quebrou nada que já funcionava.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">Aqui a cobertura é medida com o sistema rodando de verdade, então alguns caminhos raros de erro são naturalmente mais difíceis de forçar — por isso os números costumam ficar um pouco abaixo dos testes unitários. Os números abaixo são do módulo de investigação, o núcleo desta entrega (incluindo rotas e repositório).</p>

<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Linhas de código testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:85%"><div><span>Funções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:99.48%;--meta:80%"><div><span>Instruções testadas</span><b>99,48%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>90%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Ficam de fora principalmente valores padrão para campos ausentes (<code>?? []</code>, <code>?? {}</code>) em <code>investigacao.conteudo.ts</code> e nas rotas — o comportamento desses casos já é verificado nos testes unitários.</p>

### Demais arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `middlewares/error.handler.ts` | 100% | 100% | 95,65% |
| `notificacao/notificacao.routes.ts` | 100% | 100% | 100% |
| `notificacao/notificacao.repository.ts` | 100% | 100% | 81,57% |
| `notificacao/notificacao.service.ts` | 96,66% | 100% | 87,30% |
| `classificacao/classificacao.service.ts` | 96,29% | 100% | 87,20% |
| `notificacao/status.service.ts` | 94,73% | 100% | 92,85% |
| `plano-acao/plano-acao.service.ts` | 94,52% | 100% | 88,88% |
| `notificacao/notificacao.update.builder.ts` | 91,95% | 100% | <span class="ns-rel-baixo">76,69%</span> |
| `shared/lib/acesso-setor.ts` | 88,88% | 100% | 83,33% |
| `plano-acao/plano-acao.repository.ts` | <span class="ns-rel-baixo">70,83%</span> | 91,66% | <span class="ns-rel-baixo">25%</span> |

<div class="ns-rel-info" markdown>

Somando todos os arquivos de código alterados, a cobertura de integração é de **95,49% das linhas, 99,31% das funções e 83,48% dos branches**.

As linhas descobertas do `plano-acao.repository.ts` (tradução de colisões de numeração do banco) **não foram alteradas nesta entrega** — a branch só acrescentou campos à consulta, e esses trechos são cobertos pelo teste unitário dedicado. No `acesso-setor.ts`, a única linha descoberta (gestor sem setor associado) é coberta pelos testes unitários.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo nos testes de integração — não só esta entrega —, **todas as métricas estão acima da meta do Plano de Testes**, com os caminhos alternativos logo acima do limite:

<div class="ns-rel-barra" style="--v:93.51%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>93,51%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:92.76%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>92,76%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.13%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,13%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:80.62%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>80,62%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica. Os caminhos alternativos passam da meta por 0,62 p.p. As travas por módulo do <code>jest-int.config.js</code> (incluindo investigação e plano de ação) foram atendidas.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura de integração no projeto são `prisma.ts` (50%), `turnstile.ts` (62,5%) e `plano-acao.repository.ts` (70,83%). Nenhum deles teve lógica alterada por esta entrega — são pontos de atenção à parte.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 48cca6a, o último da PR #9</p>

<ul class="ns-rel-checks">
<li><strong>Migrations e schema:</strong> o banco de teste foi recriado a partir do schema da branch (<code>prisma db push</code>), com os novos status da RN-08, o conteúdo da análise em JSONB e a marca de sigilo dos campos do notificante.</li>
<li><strong>Esteira da PR:</strong> a "Pipeline de Testes", que sobe Postgres e Redis e roda a suíte de integração, foi aprovada na CI em 01/10/2026, no mesmo commit.</li>
<li><strong>Qualidade do código e tipos:</strong> <code>oxlint</code> sem avisos nem erros e TypeScript compilando sem erros.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a integração da tela com estes endpoints (guia da análise e Seções 1 e 2) foi entregue na PR #10 do repositório notifica-saude-frontend e não faz parte deste relatório.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches do `notificacao.update.builder.ts` (76,69%):** a entrega extraiu a verificação dos campos de classificação para `alteraClassificacao`, e o arquivo segue abaixo da meta de 80% na integração. Vale cobrir as combinações de campos do `PUT` da notificação que ainda não são exercitadas.
- **Margem dos branches no projeto (80,62%):** a métrica global está a menos de 1 p.p. da meta. As próximas entregas das Seções 3 a 5 devem vir com testes de integração dos caminhos de erro para não puxar o número para baixo.
- **Teste de ponta a ponta:** o repositório `notifica-saude-e2e` pode receber o fluxo completo — iniciar a análise como NSP, salvar a Seção 2 com pendências e conferir que outro gestor vê "Análise em andamento".

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #9](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9) | Implementação das Seções 1 e 2 da análise, mesclada em 01/10/2026 |
| [PR frontend #10](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/10) | Tela do guia e das Seções 1 e 2 (fora do escopo deste relatório) |
| `tests/integration/modules/investigacao/` | `investigacao.inicio`, `investigacao.rascunho` e `investigacao.leitura.routes.spec.ts` |
| `tests/integration/modules/notificacao/` | `notificacao.sigilo-acesso-gestor.routes.spec.ts` |
| `tests/integration/modules/classificacao/` | `classificacao.bloqueio.routes.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.1 a US-4.4, US-6.2 e as regras RN-15, RN-16, RN-26, RN-27 e RN-28 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório unitário](analise-secoes-1-2-unitario.md) | `REL_Testes_Unit_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Int_Analise_S1S2_v1_0 — compilado a partir da execução da suíte de integração do backend (Jest com cobertura, Postgres e Redis reais) no commit 48cca6a do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 06/10/2026.</p>

</div>

</div>
