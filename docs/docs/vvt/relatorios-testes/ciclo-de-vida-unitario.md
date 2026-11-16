<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes Unitários

Épico 6 - Status e Ciclo de Vida do Incidente · Somente leitura no status final, arquivamento, conclusão e histórico · US-6.1, US-6.2, US-6.3 e US-6.4

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Unit_CicloVida_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/epico-6/status-e-ciclo-de-vida</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_CicloVida_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](ciclo-de-vida-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes unitários do status e ciclo de vida do incidente (Épico 6). | Eduardo Alves |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

Esta entrega completa, no servidor, o **ciclo de vida do incidente**. Boa parte dele já tinha vindo com o Épico 5 (transições, conclusão e sugestão de conclusão); aqui foram fechadas as lacunas: um incidente **Concluído ou Arquivado fica somente leitura** em todas as escritas (US-6.1, CA06), o **arquivamento passa a ser só do NSP** (US-6.3, matriz RBAC), o **gestor consulta o histórico** dos incidentes do seu setor sem a identificação do notificante (RN-26, RN-27) e o rascunho da análise continua disponível depois do arquivamento (US-6.3, CA05). Vieram junto duas correções da classificação achadas na validação na tela (US-2.3, CA07). Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente.<br>Os 731 testes passaram, incluindo os 20 criados ou revisados nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela do ciclo de vida foi entregue na PR #19 do frontend.</span></div>
</div>

Em resumo: **as regras do ciclo de vida funcionam e foram comprovadas no servidor**, onde se decide se um incidente ainda pode ser alterado, quem pode arquivá-lo e o que o gestor vê no histórico. Os arquivos alterados pela entrega têm **99,31% das linhas testadas**.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o servidor foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/14 · Executado em 16/11/2026 sobre o commit 246c8fa · Pipeline de Testes da PR aprovada na CI em 02/11/2026</p>

<div class="ns-rel-placar">
<div><strong>731</strong><span>testes executados</span></div>
<div><strong>731</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 20 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Somente leitura no status final</strong> (<code>status.service.spec.ts</code>, 9 testes novos): a nova verificação de status final recusa "Concluído" e "Arquivado" com as mensagens da US-2.3 — "Incidente concluído — não pode ser alterado." e "Notificação arquivada — não pode ser alterada." — e deixa passar os outros seis status (US-6.1, CA06). A classificação de um incidente concluído também fica bloqueada (RN-15). Os 9 substituem os 2 testes da verificação antiga, que só barrava o arquivado.</li>
<li><strong>Arquivamento</strong> (<code>notificacao.arquivar.service.spec.ts</code>, 2 testes revisados e 1 novo): o arquivamento trava a notificação e transiciona a partir do status lido na trava; o status final lido ali é barrado antes da transição (US-6.1, CA06); e o usuário de sistema (<code>SYSTEM_TENANT</code>) deixa de arquivar notificação de outra instituição (Q2).</li>
<li><strong>Histórico para o gestor</strong> (<code>notificacao.historico.spec.ts</code>, 3 testes novos): o gestor do setor encaminhado recebe o histórico sem a identificação do notificante (RN-26, RN-27); o gestor sem encaminhamento ou de outro setor recebe 403.</li>
<li><strong>Rascunho depois do arquivamento</strong> (<code>investigacao.service.spec.ts</code>, 1 teste novo): quem tem acesso e não é o autor recebe o rascunho da análise quando o incidente foi arquivado (US-6.3, CA05).</li>
<li><strong>Encaminhamento em incidente final</strong> (<code>encaminhamento.service.spec.ts</code>, 1 teste revisado — CT-UNI-005): encaminhar um incidente arquivado é barrado pela nova verificação de status final.</li>
<li><strong>Rascunho da classificação</strong> (<code>classificacao.service.classificar.spec.ts</code> e <code>classificacao.service.atualizar.spec.ts</code>, 3 testes novos): pedir rascunho mantém a classificação como rascunho, mesmo com todos os campos preenchidos, tanto no registro quanto na edição; numa classificação já finalizada, o pedido de rascunho é ignorado (US-2.3, CA07).</li>
</ul>

<div class="ns-rel-aviso" markdown>**Ajustes sem cenários novos:** `notificacao.concluir.service.spec.ts` passou a usar a verificação de status final real, em vez de uma simulada, e `plano-acao.service.spec.ts` passou a conferir as mensagens do status final que vêm do `status.service.ts`. Os dois continuam testando as mesmas regras. Todas as outras suítes unitárias passaram sem alteração.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido. Como esta entrega espalha a mesma regra por vários módulos (notificação, classificação, encaminhamento, análise e plano de ação), os números abaixo somam todos os arquivos de código alterados.</p>

<div class="ns-rel-barra" style="--v:99.31%;--meta:80%"><div><span>Linhas de código testadas</span><b>99,31%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.75%;--meta:85%"><div><span>Funções testadas</span><b>98,75%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.73%;--meta:80%"><div><span>Instruções testadas</span><b>98,73%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:93.25%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>93,25%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">As poucas linhas descobertas estão em <code>classificacao.service.ts</code> (linha 59, "Outro" sem texto no tipo de incidente, e linha 155, observação acima de 400 caracteres) e em <code>notificacao.service.ts</code> (linha 302, valor padrão de um parâmetro interno). Nenhuma delas é das regras novas do ciclo de vida.</p>

### Arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `notificacao/status.service.ts` | 100% | 100% | 100% |
| `notificacao/notificacao.arquivar.service.ts` | 100% | 100% | 100% |
| `notificacao/notificacao.concluir.service.ts` | 100% | 100% | 100% |
| `shared/lib/historico-eventos.ts` | 100% | 100% | 100% |
| `plano-acao/plano-acao.service.ts` | 100% | 100% | 97,87% |
| `investigacao/investigacao.service.ts` | 100% | 100% | 96,82% |
| `encaminhamento/encaminhamento.service.ts` | 100% | 100% | 90,90% |
| `notificacao/notificacao.service.ts` | 98,91% | 95,65% | 92,06% |
| `classificacao/classificacao.service.ts` | 96,29% | 100% | 89,31% |

<div class="ns-rel-info" markdown>

Rotas e repositórios ficam fora da medição unitária por política do projeto (`jest-unit.config.js`) e são medidos no relatório de integração. Os schemas Zod (`*.schemas.ts`) ficam fora da medição nas duas suítes (`jest.shared.config.js`).

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo — não só esta entrega — a cobertura unitária está **acima da meta do Plano de Testes em todas as métricas**:

<div class="ns-rel-barra" style="--v:98.14%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>98,14%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:97.78%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>97,78%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:97.74%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>97,74%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:91.29%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>91,29%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — todas as barras já passaram dela. As travas por módulo do <code>jest-unit.config.js</code> (notificação, autenticação, classificação, encaminhamento e mailer) também foram atendidas. Em relação ao relatório do plano de ação, as linhas recuaram de 98,19% para 98,14% e as funções de 98,07% para 97,74%; os branches subiram de 91,25% para 91,29%.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura unitária no projeto são `localidade.schema.ts` (0%), `metrics.middleware.ts` (54,54%) e `error.handler.ts` (72,5%). Nenhum deles foi alterado nesta entrega.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 246c8fa, o último da PR #14</p>

<ul class="ns-rel-checks">
<li><strong>Qualidade do código:</strong> nenhum problema encontrado pela revisão automática (<code>oxlint</code>: 0 avisos, 0 erros em 284 arquivos).</li>
<li><strong>Verificação de tipos:</strong> o TypeScript compila sem erros (<code>npm run type-check</code>).</li>
<li><strong>Esteira da PR:</strong> as pipelines "Pipeline de Testes" e "Qualidade de Código" foram aprovadas na CI em 02/11/2026, no mesmo commit, junto com a análise do SonarCloud e o <code>codecov/patch</code>.</li>
<li><strong>Validação na tela:</strong> segundo a PR, o checklist do Épico 6 (40 itens, 5 perfis) passou por inteiro na segunda rodada; o único item reprovado na primeira (rascunho da classificação) foi corrigido nesta entrega.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a tela correspondente foi entregue na PR #19 do repositório notifica-saude-frontend e não faz parte deste relatório.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches de `classificacao.service.ts` (89,31%):** "Outro" sem texto no tipo de incidente e a observação acima de 400 caracteres ainda não têm teste unitário próprio.
- **Relatório end-to-end do Épico 6:** os casos de teste das US-6.1 e US-6.2 já estão documentados; falta automatizar no `notifica-saude-e2e` o fluxo de arquivar e de concluir, conferindo que a tela fica somente leitura.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #14](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/14) | Status e ciclo de vida do incidente, mesclado em 02/11/2026 |
| [PR frontend #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/19) | Tela do ciclo de vida (fora do escopo deste relatório) |
| `tests/unit/modules/notificacao/` | `status.service.spec.ts`, `notificacao.arquivar.service.spec.ts` e `notificacao.historico.spec.ts` |
| `tests/unit/modules/classificacao/` | `classificacao.service.classificar.spec.ts` e `classificacao.service.atualizar.spec.ts` |
| `tests/unit/modules/` | `investigacao/investigacao.service.spec.ts` e `encaminhamento/encaminhamento.service.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-6.1 a US-6.4, US-2.3 e as regras RN-15, RN-26 e RN-27 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório de integração](ciclo-de-vida-integracao.md) | `REL_Testes_Int_CicloVida_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Unit_CicloVida_v1_0 — compilado a partir da execução da suíte unitária do backend (Jest com cobertura) no commit 246c8fa do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 16/11/2026.</p>

</div>

</div>
