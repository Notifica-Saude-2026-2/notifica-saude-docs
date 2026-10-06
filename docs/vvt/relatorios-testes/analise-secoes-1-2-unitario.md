<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes Unitários

Épico 4 - Análise do Incidente · Seções 1 e 2 · US-4.1, US-4.2, US-4.3, US-4.4 e US-6.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Unit_Analise_S1S2_v1_0</code></span><span>Emissão <em>6 de outubro de 2026</em></span><span>Feature branch <code>feat/56/implementa-analise-secao-1-e-2</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_Analise_S1S2_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-1-2-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 06/10/2026 | Criação do relatório de testes unitários da análise do incidente (Seções 1 e 2). | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

Esta entrega coloca de pé, no servidor, o **início da análise do incidente** e o preenchimento das **duas primeiras seções** do formulário: a Seção 1 (o incidente em investigação) e a Seção 2 (equipe, fontes consultadas e entrevistas). Junto com ela vieram as regras que protegem a análise: só quem iniciou pode continuá-la (RN-28), o gestor da área só enxerga incidentes **encaminhados ao seu setor** (RN-26) e **nunca recebe a identificação do notificante** (RN-27), a classificação fica travada quando o fluxo avança (RN-15) e o status passa a "Em análise" (US-6.2). Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente.<br>Os 630 testes passaram, incluindo os 87 criados ou revisados nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela das Seções 0, 1 e 2 foi entregue na PR #10 do frontend e tem relatório próprio.</span></div>
</div>

Em resumo: **as regras da análise funcionam e foram comprovadas no servidor**, que é onde as decisões de acesso, de autoria e de pendências realmente acontecem. O código central da entrega (o módulo de investigação) tem **100% das linhas testadas**.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o servidor foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9 · Executado em 06/10/2026 sobre o commit 48cca6a · Pipeline de Testes da PR aprovada na CI em 01/10/2026</p>

<div class="ns-rel-placar">
<div><strong>630</strong><span>testes executados</span></div>
<div><strong>630</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 87 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Pendências das Seções 1 e 2</strong> (<code>investigacao.conteudo.spec.ts</code>, novo, 23 testes): o sistema aponta exatamente o que falta preencher — incidente vazio, só com espaços ou acima de 100 caracteres; condutor acima de 50; "Outro" marcado sem texto; setor acima de 100; membro da equipe incompleto; entrevista sem data, com data inválida ou sem função do entrevistado; relato acima de 500; problemas vazios. Quando a resposta é "Não precisa ouvir alguém", entrevistas incompletas <em>não</em> geram pendência (US-4.4, CA05/CA06).</li>
<li><strong>Início e rascunho da análise</strong> (<code>investigacao.service.spec.ts</code>, reescrito, 27 testes): a análise nasce com a Seção 1 válida; o próprio autor repetindo o pedido recebe a análise existente sem regravar (D-015); outro usuário recebe 409 (US-4.2, CA04); notificação arquivada ou em status errado é recusada; o NSP não inicia incidente já encaminhado (RN-16); só o autor grava rascunho (RN-28); quem não é o autor não recebe o conteúdo enquanto a análise está em andamento.</li>
<li><strong>Visão do gestor da área</strong> (<code>notificacao.gestor.spec.ts</code>, novo, 11 testes): a resposta é montada por lista de campos permitidos, sem nome, contato nem a indicação de anônima (RN-27); o detalhe é recusado quando não há encaminhamento ao setor do gestor (RN-26); NSP e Administrador continuam vendo tudo; a lista de setores disponíveis respeita o encaminhamento.</li>
<li><strong>Status e trava da classificação</strong> (<code>status.service.spec.ts</code>, revisado, 24 testes): "Classificado" e "Encaminhado" passam a levar a "Em análise" e as transições do fluxo antigo saem (US-6.2); se o status mudar entre a leitura e a escrita, a operação responde 409 sem gravar histórico; a classificação só é editável em "Nova" ou "Classificada" (RN-15, 7 casos).</li>
<li><strong>Fila do gestor</strong> (<code>notificacao.listar.rbac.spec.ts</code>, 2 testes ajustados — CT-UNI-066 e CT-UNI-067): a listagem do gestor filtra pelo encaminhamento ao setor do seu token, ignora um <code>setor_id</code> diferente vindo da URL e oculta o notificante.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Ajustes sem cenários novos:** `plano-acao.service.spec.ts`, `classificacao.service.atualizar.spec.ts`, `notificacao.obter.spec.ts` e `notificacao.listar.queries.spec.ts` foram adaptados ao novo modelo de dados (encaminhamento real e status "Classificada" nos dados de teste) e continuam testando as mesmas regras.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido. Os números abaixo são do módulo de investigação, o núcleo desta entrega.</p>

<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Linhas de código testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:85%"><div><span>Funções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Instruções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.59%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>96,59%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Faltam apenas 3 desvios de lógica: dois valores padrão em <code>investigacao.conteudo.ts</code> (linhas 187 e 194, fontes consultadas e lista de entrevistas ausentes) e o valor padrão do construtor em <code>investigacao.service.ts</code> (linha 52). Nenhum deles muda o resultado das regras.</p>

### Demais arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `notificacao/status.service.ts` | 100% | 100% | 100% |
| `shared/lib/acesso-setor.ts` | 100% | 100% | 100% |
| `notificacao/notificacao.service.ts` | 100% | 100% | 93,65% |
| `notificacao/notificacao.update.builder.ts` | 98,85% | 100% | 87,37% |
| `plano-acao/plano-acao.service.ts` | 98,63% | 94,11% | 93,65% |
| `classificacao/classificacao.service.ts` | 96,29% | 100% | 88% |
| `middlewares/error.handler.ts` | <span class="ns-rel-baixo">57,5%</span> | <span class="ns-rel-baixo">63,63%</span> | <span class="ns-rel-baixo">0%</span> |

<div class="ns-rel-info" markdown>

Somando todos os arquivos de código alterados, a cobertura unitária é de **95,77% das linhas, 94,79% das funções e 87,22% dos branches**. Rotas e repositórios ficam fora da medição unitária por política do projeto (`jest-unit.config.js`) e são medidos no relatório de integração.

O `error.handler.ts` ganhou o tratamento de pendências (422), de corpo grande (413) e de JSON inválido (400), mas esses caminhos só são exercitados pelos testes de integração, onde o arquivo chega a **100% das linhas e 95,65% dos branches**.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo — não só esta entrega — a cobertura unitária está **acima da meta do Plano de Testes em todas as métricas**:

<div class="ns-rel-barra" style="--v:97.48%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>97,48%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.89%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>96,89%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.7%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,70%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90.9%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>90,90%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — todas as barras já passaram dela. As travas por módulo do <code>jest-unit.config.js</code> (notificação, autenticação, classificação, encaminhamento e mailer) também foram atendidas.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura unitária no projeto são `localidade.schema.ts` (0%), `metrics.middleware.ts` (54,54%) e `error.handler.ts` (57,5%). Só o último foi alterado nesta entrega, e seus novos caminhos estão cobertos pela integração (seção 3).</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 48cca6a, o último da PR #9</p>

<ul class="ns-rel-checks">
<li><strong>Qualidade do código:</strong> nenhum problema encontrado pela revisão automática (<code>oxlint</code>: 0 avisos, 0 erros).</li>
<li><strong>Verificação de tipos:</strong> o TypeScript compila sem erros (<code>npm run type-check</code>).</li>
<li><strong>Esteira da PR:</strong> as pipelines "Pipeline de Testes" e "Qualidade de Código" foram aprovadas na CI em 01/10/2026, no mesmo commit.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a tela correspondente (guia da análise e Seções 1 e 2) foi entregue na PR #10 do repositório notifica-saude-frontend e não faz parte deste relatório.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Teste unitário do `error.handler.ts`** para os novos tratamentos (pendências 422, corpo grande 413 e JSON inválido 400). Hoje eles só são verificados na integração; um teste unitário deixaria a medição deste arquivo coerente com o restante do projeto.
- **Cobrir os 3 desvios restantes** do módulo de investigação (seção 3) quando as Seções 3 a 5 forem implementadas, já que os mesmos arquivos serão alterados.

<div class="ns-rel-aviso" markdown>As Seções 3 a 5 da análise (US-4.5 a US-4.7) e a conclusão (US-4.8) ainda não foram implementadas e não entram neste relatório.</div>

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #9](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/9) | Implementação das Seções 1 e 2 da análise, mesclada em 01/10/2026 |
| [PR frontend #10](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/10) | Tela do guia e das Seções 1 e 2 (fora do escopo deste relatório) |
| `tests/unit/modules/investigacao/` | `investigacao.conteudo.spec.ts` e `investigacao.service.spec.ts` |
| `tests/unit/modules/notificacao/` | `notificacao.gestor.spec.ts`, `status.service.spec.ts` e `notificacao.listar.rbac.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.1 a US-4.4, US-6.2 e as regras RN-15, RN-16, RN-26, RN-27 e RN-28 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório de integração](analise-secoes-1-2-integracao.md) | `REL_Testes_Int_Analise_S1S2_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Unit_Analise_S1S2_v1_0 — compilado a partir da execução da suíte unitária do backend (Jest com cobertura) no commit 48cca6a do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 06/10/2026.</p>

</div>

</div>
