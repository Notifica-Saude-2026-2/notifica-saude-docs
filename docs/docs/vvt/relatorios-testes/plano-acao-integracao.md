<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes de Integração

Épico 5 - Gestão de Plano de Ação · Registro, complemento, edição, exclusão, andamento e efetividade das ações · US-5.1 a US-5.7 e US-6.4

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Int_PlanoAcao_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/96-102/plano-de-acao-backend</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_PlanoAcao_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório unitário](plano-acao-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes de integração do plano de ação (Épico 5). | Eduardo Alves |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para o relatório unitário:** testes unitários conferem uma peça isolada do sistema; testes de integração conferem se as peças realmente conversam entre si — aqui, as requisições HTTP passam de verdade pela API, por um banco de dados (Postgres) e por um cache (Redis) rodando em containers, como aconteceria em produção.</div>

O plano de ação foi testado **de ponta a ponta**: da conclusão da análise, que cria as ações a partir das recomendações, ao registro, complemento, edição e exclusão das ações, ao andamento com anexos de verdade (upload e download dos bytes) e à conclusão do incidente. Também foram testados o acesso por perfil e setor (RN-26), a trava contra escritas simultâneas e o controle de versão das ações. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente, de ponta a ponta.<br>Os 422 testes passaram, incluindo os 42 criados ou reescritos nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela do plano de ação foi entregue na PR #18 do frontend e tem relatórios end-to-end próprios.</span></div>
</div>

Em resumo: **o plano de ação funciona com o sistema todo de pé** — servidor, banco de dados e cache reais —, inclusive com arquivos de verdade e com dois registros ao mesmo tempo, que a trava da notificação serializa.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o fluxo completo foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13 · Executado em 16/11/2026 sobre o commit 3273ae2 · Infraestrutura real: Postgres e Redis em containers Docker, com o banco de teste recriado a partir do schema da branch</p>

<div class="ns-rel-placar">
<div><strong>422</strong><span>testes executados</span></div>
<div><strong>422</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 42 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Ações a partir das recomendações</strong> (<code>plano-acao.recomendacoes.routes.spec.ts</code>, novo, 5 testes): concluir a análise com recomendações cria uma ação pendente por recomendação (RN-19); sem recomendação, o plano não nasce (Q6 b). A análise do setor vai a "Analisado", não a "Em ação" (US-6.2, CA06). Na janela "Em análise", uma ação completada antes da decisão leva a "Em ação" na decisão; sem ação completa, a decisão fica em "Analisado" (Q12).</li>
<li><strong>Registrar, completar, editar e excluir</strong> (<code>plano-acao.acoes.routes.spec.ts</code>, reescrito, 19 testes): a primeira ação cria o plano, recebe o número e leva "Analisado" a "Em ação"; uma recomendação livre é vinculada e a já vinculada é recusada (US-5.1, CA02); ação incompleta recebe as pendências (CA16); texto acima do limite, 400; sem análise, 404; análise não concluída, janela "Em análise" e incidente concluído são bloqueados. <strong>Dois registros simultâneos</strong> são serializados pela trava (Q20). A ação vinda de recomendação aparece pendente e é completada (US-5.3); editar grava a diferença por campo — recursos em reais (US-5.1, CA08) — e, sem alteração, não escreve no histórico; versão antiga recebe 409. A exclusão é lógica, libera a recomendação e não reaproveita o número (US-5.4, CA05); em incidente concluído não exclui e continua legível (RN-12). Administrador e gestor de outro setor recebem 403; o gestor do setor encaminhado registra ações.</li>
<li><strong>Andamento e anexos</strong> (<code>plano-acao.andamento.routes.spec.ts</code>, novo, 13 testes): "Atrasada" + "Sim" grava "Concluído" e sugere a conclusão ao NSP (Q11, Q18); "Não" com justificativa mantém a situação escolhida (US-5.7, CA06); ação pendente não tem andamento (US-5.3, CA03); efetividade, pendência, versão e dados são validados (RN-20, RN-21). A sugestão só aparece com todas as ações finalizadas, ignora a excluída, não dispara com "Cancelada" (RN-23) e nunca vai ao gestor (US-6.4, CA02). Os anexos PNG, JPEG e DOCX são aceitos, o nome acentuado é gravado e <strong>o download devolve os mesmos bytes</strong>; arquivo renomeado é recusado sem gravar nada, acima de 10 MB é recusado com o nome dele, e o limite de 10 anexos soma as atualizações (US-5.6, CA12). Em incidente concluído, o andamento é bloqueado e o download continua liberado (RN-12).</li>
<li><strong>Conclusão do incidente</strong> (<code>notificacao.concluir.routes.spec.ts</code>, novo, 4 testes): "Analisado" sem plano conclui; "Em ação" com ação em andamento conclui e fica somente leitura (US-6.4, CA04 e CA07); "Em análise" recebe 409; gestor e Administrador não concluem (Q19).</li>
<li><strong>Histórico pelo Administrador</strong> (<code>notificacao.atualizar.autorizacao.routes.spec.ts</code>, 1 teste novo — CT-INT-147): o Administrador recebe 403 no histórico, conforme a matriz RBAC.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Testes da API antiga substituídos:** o `POST /notificacoes/:id/plano-acao` foi removido — registrar ação agora é sempre `POST /notificacoes/:id/plano-acao/acoes`, que cria o plano se preciso. Por isso `plano-acao.criar.routes.spec.ts` (18 testes) e `plano-acao.fluxo.routes.spec.ts` (5) saíram, e os 21 testes de `plano-acao.acoes.routes.spec.ts` foram reescritos nos 19 acima. Por isso o total da suíte cai de 424 para 422: saem 44 testes e entram 42. Os helpers de plano de ação e de investigação foram adaptados à nova API. Todas as outras suítes de integração, incluindo a análise e o encaminhamento, passaram — a mudança não quebrou nada que já funcionava.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">Aqui a cobertura é medida com o sistema rodando de verdade, então alguns caminhos raros de erro são naturalmente mais difíceis de forçar — por isso os números costumam ficar um pouco abaixo dos testes unitários. Os números abaixo são do módulo de plano de ação, o núcleo desta entrega (incluindo rotas e repositório).</p>

<div class="ns-rel-barra" style="--v:98.93%;--meta:80%"><div><span>Linhas de código testadas</span><b>98,93%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:85%"><div><span>Funções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.45%;--meta:80%"><div><span>Instruções testadas</span><b>96,45%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:84.72%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>84,72%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Por arquivo do módulo: <code>plano-acao.repository.ts</code> 100% das linhas e 90,32% dos branches; <code>plano-acao.service.ts</code> 99,07% e 91,83%; <code>plano-acao.validator.ts</code> 97,29% e 80,95%; <code>plano-acao.anexo.ts</code> 100% e 78,57%; <code>plano-acao.routes.ts</code> 100% e 75%. Os desvios descobertos do validador são combinações de pendências ("Outro" sem texto no responsável e no local, aprovação, indicador e datas invertidas) e valores ausentes na formatação da diferença entre versões, já verificados nos testes unitários.</p>

### Demais arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `notificacao/notificacao.routes.ts` | 100% | 100% | 100% |
| `shared/lib/historico-eventos.ts` | 100% | 100% | 100% |
| `investigacao/investigacao.repository.ts` | 100% | 100% | 96,15% |
| `investigacao/investigacao.service.ts` | 98,90% | 100% | 96,72% |
| `notificacao/status.service.ts` | 95,45% | 100% | 87,50% |
| `notificacao/notificacao.concluir.service.ts` | 93,75% | 100% | <span class="ns-rel-baixo">66,66%</span> |

<div class="ns-rel-info" markdown>

Somando todos os arquivos de código alterados, a cobertura de integração é de **98,89% das linhas, 100% das funções e 87,97% dos branches**. Os schemas Zod (`*.schemas.ts`) ficam fora da medição nas duas suítes, por política do projeto (`jest.shared.config.js`).

No `notificacao.concluir.service.ts`, os desvios descobertos são a notificação inexistente (404) e a de outra instituição (403), verificados nos testes unitários do mesmo arquivo. O `plano-acao.repository.ts`, que no relatório das Seções 1 e 2 tinha 70,83% das linhas na integração, chega agora a **100%**.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo nos testes de integração — não só esta entrega —, **todas as métricas estão acima da meta do Plano de Testes**:

<div class="ns-rel-barra" style="--v:94.99%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>94,99%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:94.06%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>94,06%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.76%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,76%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:82.25%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>82,25%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica. Os caminhos alternativos subiram de 81,41% (relatório das Seções 3 a 5) para 82,25%. As travas por módulo do <code>jest-int.config.js</code> (incluindo plano de ação e notificação) foram atendidas.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura de integração no projeto são `prisma.ts` (50%), `turnstile.ts` (62,5%) e `redis.ts` (78,26%). Nenhum deles foi alterado por esta entrega — são pontos de atenção à parte.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 3273ae2, o último da PR #13</p>

<ul class="ns-rel-checks">
<li><strong>Migrations e schema:</strong> o banco de teste foi recriado a partir do schema da branch (<code>prisma db push --force-reset</code>), com as tabelas novas <code>atualizacao_acao</code> e <code>anexo_acao</code>, a exclusão lógica das ações e o novo enum de situação. A migração <code>20261027100000_plano_acao_v3</code> é destrutiva para <code>plano_acao</code> e <code>acao_corretiva</code> e exige recriar bancos de teste antigos, como registrado na PR.</li>
<li><strong>Esteira da PR:</strong> a "Pipeline de Testes", que sobe Postgres e Redis, aplica as migrations e roda a suíte de integração, foi aprovada na CI em 01/11/2026, no mesmo commit.</li>
<li><strong>Qualidade do código e tipos:</strong> <code>oxlint</code> sem avisos nem erros e TypeScript compilando sem erros.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a integração da tela com estes endpoints foi entregue na PR #18 do repositório notifica-saude-frontend e não faz parte deste relatório. Os relatórios end-to-end das US-5.1 a US-5.4 cobrem o fluxo pela tela.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches de `plano-acao.routes.ts` (75%) e `plano-acao.anexo.ts` (78,57%):** os dois estão abaixo da meta de 80% na integração. Os desvios restantes são valores padrão para corpo, lista de arquivos e nome de arquivo ausentes; vale um teste de atualização de andamento enviada sem multipart e outro com um arquivo sem nome.
- **Teste de ponta a ponta do andamento:** os relatórios end-to-end cobrem as US-5.1 a US-5.4; falta levar ao `notifica-saude-e2e` a atualização de andamento com anexo, a avaliação de efetividade (US-5.6 e US-5.7) e a conclusão do incidente pelo NSP (US-6.4).

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13) | Backend do plano de ação na forma da spec v3, mesclado em 02/11/2026 |
| [PR frontend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18) | Tela do plano de ação (fora do escopo deste relatório) |
| `tests/integration/modules/plano-acao/` | `plano-acao.acoes`, `plano-acao.andamento` e `plano-acao.recomendacoes.routes.spec.ts` |
| `tests/integration/modules/notificacao/` | `notificacao.concluir.routes.spec.ts` e `notificacao.atualizar.autorizacao.routes.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-5.1 a US-5.7, US-6.2, US-6.4 e as regras RN-12, RN-19 a RN-21, RN-23, RN-25 e RN-26 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório unitário](plano-acao-unitario.md) | `REL_Testes_Unit_PlanoAcao_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Int_PlanoAcao_v1_0 — compilado a partir da execução da suíte de integração do backend (Jest com cobertura, Postgres e Redis reais) no commit 3273ae2 do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 16/11/2026.</p>

</div>

</div>
