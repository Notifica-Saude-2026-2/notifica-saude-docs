<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes de Integração

Épico 6 - Status e Ciclo de Vida do Incidente · Somente leitura no status final, arquivamento, conclusão e histórico · US-6.1, US-6.2, US-6.3 e US-6.4

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Int_CicloVida_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/epico-6/status-e-ciclo-de-vida</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_CicloVida_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório unitário](ciclo-de-vida-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes de integração do status e ciclo de vida do incidente (Épico 6). | Eduardo Alves |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para o relatório unitário:** testes unitários conferem uma peça isolada do sistema; testes de integração conferem se as peças realmente conversam entre si — aqui, as requisições HTTP passam de verdade pela API, por um banco de dados (Postgres) e por um cache (Redis) rodando em containers, como aconteceria em produção.</div>

O ciclo de vida do incidente foi testado **de ponta a ponta**: escritas que chegam a um incidente já arquivado, quem pode arquivar, o histórico entregue ao gestor e ao NSP e o rascunho da análise depois do arquivamento. O ponto central é a corrida entre arquivar e escrever: cada escrita trava a notificação e relê o status antes de gravar, e os testes conferem que **nada é gravado num incidente que já está em status final**. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente, de ponta a ponta.<br>Os 432 testes passaram, incluindo os 12 criados ou revisados nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela do ciclo de vida foi entregue na PR #19 do frontend.</span></div>
</div>

Em resumo: **o incidente em status final fica realmente somente leitura com o sistema todo de pé** — servidor, banco de dados e cache reais —, e o sigilo do notificante vale também no histórico.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o fluxo completo foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/14 · Executado em 16/11/2026 sobre o commit 246c8fa · Infraestrutura real: Postgres e Redis em containers Docker, com o banco de teste recriado a partir do schema da branch</p>

<div class="ns-rel-placar">
<div><strong>432</strong><span>testes executados</span></div>
<div><strong>432</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 12 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Trava contra o status final</strong> (<code>status-final.trava.spec.ts</code>, novo, 4 testes): num incidente arquivado, a classificação não é criada nem editada, a edição da notificação não é gravada e a seção da análise não é salva (US-6.1, CA06). Segundo a PR, os quatro falhavam antes da correção B2, quando um arquivamento confirmado entre a checagem e a escrita deixava gravar.</li>
<li><strong>Sigilo no histórico</strong> (<code>notificacao.sigilo-acesso-gestor.routes.spec.ts</code>, 3 testes novos): o NSP recebe o histórico completo; o do gestor não traz a edição dos dados do notificante; e <strong>renomear o rótulo dos campos de identificação não desliga o sigilo</strong> do histórico (RN-27, correção B1).</li>
<li><strong>Quem arquiva</strong> (<code>notificacao.arquivar.rbac-tenant.spec.ts</code>, 2 testes revisados — CT-INT-ARQ-010 e 011): o NSP de outra instituição continua recebendo 403, e o Administrador, que antes arquivava qualquer notificação, passa a receber 403 (US-6.3, matriz RBAC, Q2).</li>
<li><strong>Rascunho depois do arquivamento</strong> (<code>investigacao.leitura.routes.spec.ts</code>, 1 teste novo): o rascunho da análise é entregue a quem tem acesso depois que o incidente é arquivado (US-6.3, CA05).</li>
<li><strong>Rascunho da classificação</strong> (<code>classificacao.routes.spec.ts</code>, 2 testes novos — CT-023 e CT-024): o POST completo com <code>rascunho: true</code> mantém o rascunho e o status "Nova", e o PUT que completa todos os campos com <code>rascunho: true</code> continua rascunho (US-2.3, CA07).</li>
</ul>

<div class="ns-rel-aviso" markdown>**Testes reforçados sem cenários novos:** `notificacao.concluir.routes.spec.ts` passou a conferir a mensagem "Incidente concluído — não pode ser alterado.", que a edição da notificação concluída é recusada (US-6.1, CA06) e que arquivar um incidente concluído recebe 409. `plano-acao.acoes.routes.spec.ts` passou a esperar a nova mensagem do status final na exclusão em incidente concluído (RN-12), e ele e `plano-acao.recomendacoes.routes.spec.ts` passaram a comparar o histórico agrupado por evento, como a tela o mostra. Todas as outras suítes de integração passaram — a mudança não quebrou nada que já funcionava.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">Aqui a cobertura é medida com o sistema rodando de verdade, então alguns caminhos raros de erro são naturalmente mais difíceis de forçar — por isso os números costumam ficar um pouco abaixo dos testes unitários. Como a entrega espalha a mesma regra por vários módulos, os números abaixo somam todos os arquivos de código alterados (incluindo rotas e repositórios).</p>

<div class="ns-rel-barra" style="--v:98.15%;--meta:80%"><div><span>Linhas de código testadas</span><b>98,15%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:99.2%;--meta:85%"><div><span>Funções testadas</span><b>99,20%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.55%;--meta:80%"><div><span>Instruções testadas</span><b>96,55%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:89.52%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>89,52%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">As linhas descobertas do <code>status.service.ts</code> (65 e 86, classificação de incidente já encaminhado e transição não permitida) e do <code>notificacao.concluir.service.ts</code> (31, notificação de outra instituição) são caminhos de recusa verificados nos testes unitários, onde os dois arquivos têm 100%.</p>

### Arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `classificacao/classificacao.repository.ts` | 100% | 100% | 100% |
| `notificacao/notificacao.arquivar.service.ts` | 100% | 100% | 100% |
| `notificacao/notificacao.routes.ts` | 100% | 100% | 100% |
| `shared/lib/historico-eventos.ts` | 100% | 100% | 100% |
| `investigacao/investigacao.repository.ts` | 100% | 100% | 96,15% |
| `notificacao/notificacao.repository.ts` | 100% | 100% | 81,39% |
| `plano-acao/plano-acao.service.ts` | 99,07% | 100% | 91,48% |
| `investigacao/investigacao.service.ts` | 98,90% | 100% | 96,82% |
| `encaminhamento/encaminhamento.service.ts` | 96,77% | 100% | 95,45% |
| `classificacao/classificacao.service.ts` | 96,29% | 100% | 87,78% |
| `notificacao/notificacao.service.ts` | 95,65% | 95,65% | 85,71% |
| `notificacao/notificacao.concluir.service.ts` | 94,11% | 100% | <span class="ns-rel-baixo">66,66%</span> |
| `notificacao/status.service.ts` | 91,66% | 100% | 83,33% |

<div class="ns-rel-info" markdown>

Os schemas Zod (`*.schemas.ts`) ficam fora da medição nas duas suítes, por política do projeto (`jest.shared.config.js`).

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo nos testes de integração — não só esta entrega —, **todas as métricas estão acima da meta do Plano de Testes**:

<div class="ns-rel-barra" style="--v:94.94%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>94,94%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:94.03%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>94,03%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.58%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,58%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:82.25%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>82,25%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica. As travas por módulo do <code>jest-int.config.js</code> foram atendidas. Em relação ao relatório do plano de ação, as linhas recuaram de 94,99% para 94,94% e as funções de 96,76% para 96,58%; os branches ficaram em 82,25%.</p>

<div class="ns-rel-info" markdown>

Os arquivos com menor cobertura de integração no projeto são `prisma.ts` (50%), `turnstile.ts` (62,5%) e `redis.ts` (78,26%), nenhum deles alterado por esta entrega.

**Ponto de atenção:** o módulo de notificação como um todo está com **79,57% dos branches** na integração — acima da trava do módulo (78%), mas abaixo da meta geral de 80%.

</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 246c8fa, o último da PR #14</p>

<ul class="ns-rel-checks">
<li><strong>Migrations e schema:</strong> o banco de teste foi recriado a partir do schema da branch (<code>prisma db push --force-reset</code>).</li>
<li><strong>Esteira da PR:</strong> a "Pipeline de Testes", que sobe Postgres e Redis e roda a suíte de integração, foi aprovada na CI em 02/11/2026, no mesmo commit.</li>
<li><strong>Qualidade do código e tipos:</strong> <code>oxlint</code> sem avisos nem erros e TypeScript compilando sem erros.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a integração da tela com estes endpoints foi entregue na PR #19 do repositório notifica-saude-frontend, que precisa entrar junto com o backend: ela envia o <code>rascunho: true</code> da classificação e mostra o responsável devolvido pelo salvamento.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches do módulo de notificação (79,57%):** ficaram abaixo da meta de 80%. Os desvios descobertos mais visíveis estão em `notificacao.repository.ts` (81,39%) e `notificacao.service.ts` (85,71%); no serviço, são os filtros da listagem por status, tipo de incidente e grau de dano, o PUT sem campos e a data do incidente no futuro.
- **Conclusão de notificação de outra instituição:** um teste de integração do 403 levaria o `notificacao.concluir.service.ts` a 100% das linhas também na integração.
- **Teste de ponta a ponta:** falta levar ao `notifica-saude-e2e` o fluxo de arquivar e de concluir o incidente, conferindo que a tela fica somente leitura.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #14](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/14) | Status e ciclo de vida do incidente, mesclado em 02/11/2026 |
| [PR frontend #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/19) | Tela do ciclo de vida (fora do escopo deste relatório) |
| `tests/integration/modules/notificacao/` | `status-final.trava.spec.ts`, `notificacao.sigilo-acesso-gestor.routes.spec.ts` e `notificacao.arquivar.rbac-tenant.spec.ts` |
| `tests/integration/modules/investigacao/` | `investigacao.leitura.routes.spec.ts` |
| `tests/integration/modules/classificacao/` | `classificacao.routes.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-6.1 a US-6.4, US-2.3 e as regras RN-26 e RN-27 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório unitário](ciclo-de-vida-unitario.md) | `REL_Testes_Unit_CicloVida_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Int_CicloVida_v1_0 — compilado a partir da execução da suíte de integração do backend (Jest com cobertura, Postgres e Redis reais) no commit 246c8fa do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 16/11/2026.</p>

</div>

</div>
