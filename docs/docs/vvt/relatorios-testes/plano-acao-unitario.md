<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes Unitários

Épico 5 - Gestão de Plano de Ação · Registro, complemento, edição, exclusão, andamento e efetividade das ações · US-5.1 a US-5.7 e US-6.4

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Unit_PlanoAcao_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/96-102/plano-de-acao-backend</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_PlanoAcao_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](plano-acao-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes unitários do plano de ação (Épico 5). | Eduardo Alves |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

Esta entrega leva o **plano de ação** do servidor à forma da spec v3 e fecha o fluxo análise → ações → conclusão do incidente. A conclusão da análise passa a criar uma ação pendente por recomendação (RN-19); as ações podem ser registradas, completadas, editadas e excluídas (US-5.1 a US-5.4); o andamento de cada ação é atualizado com efetividade obrigatória e anexos validados pela assinatura dos bytes (US-5.6, US-5.7, RN-21, RN-25); e o NSP pode concluir o incidente (US-6.4). Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente.<br>Os 716 testes passaram, incluindo os 74 criados ou reescritos nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela do plano de ação foi entregue na PR #18 do frontend e tem relatórios end-to-end próprios.</span></div>
</div>

Em resumo: **as regras do plano de ação funcionam e foram comprovadas no servidor**, onde se decide o que falta preencher em cada ação, quando o incidente passa a "Em ação" e quando sugerir a conclusão. O código central da entrega (o módulo de plano de ação) tem **99,19% das linhas testadas**.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o servidor foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13 · Executado em 16/11/2026 sobre o commit 3273ae2 · Pipeline de Testes da PR aprovada na CI em 01/11/2026</p>

<div class="ns-rel-placar">
<div><strong>716</strong><span>testes executados</span></div>
<div><strong>716</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 74 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Regras do plano</strong> (<code>plano-acao.service.spec.ts</code>, reescrito, 24 testes): registrar a primeira ação completa grava o histórico e leva "Analisado" a "Em ação" (US-6.2, CA06); em "Em ação" o status não muda de novo; ação incompleta recebe 422 com as pendências; recomendação inexistente ou já vinculada, 422 (US-5.1, CA02); sem análise, 404; análise aberta, "Em análise", "Concluído" ou "Arquivado", 409. Completar uma ação pendente grava "plano de ação completado", e editar uma completa grava a diferença campo a campo; a ordem das recusas é 404 → versão → pendências. A exclusão é registrada; o download de anexo responde 404 sem anexo. O acesso recusa notificação inexistente, outra instituição e gestor sem encaminhamento (RN-26).</li>
<li><strong>Atualização de andamento</strong> (mesmo arquivo): grava a atualização com os anexos e o histórico; ação pendente recebe 409, sem efetividade ou com mais de 10 anexos 422, e formato inválido é recusado antes da trava. A sugestão de concluir o incidente só aparece para o NSP, com efetividade "Sim", incidente "Em ação" e todas as ações finalizadas (RN-23) — não aparece para o gestor, com ação não finalizada, em "Em análise" ou com resultado diferente de "Concluído".</li>
<li><strong>Preenchimento das ações</strong> (<code>plano-acao.validator.spec.ts</code>, reescrito, 24 testes): a ação vinda de uma recomendação nasce com os 8 campos pendentes do protótipo; exige nome, função e setor de cada responsável, o texto de "Outro" na função e no "Onde", o item do recurso só quando a ação necessita de recurso, a aprovação e o indicador só quando marcados, e recusa com 400 os textos acima do limite (descrição acima de 500 caracteres, "Outro" do local acima de 50). Datas invertidas bloqueiam sem contar como campo faltando. No andamento, a efetividade é obrigatória; "Não" e "Parcialmente" exigem justificativa; "Concluído", "Atrasada" e "Cancelada" exigem seus campos; "Atrasada" + "Sim" vira "Concluído" (RN-21). "Concluída" e "Cancelada" contam como finalizadas; as demais, não. A diferença entre versões de uma ação (<code>diffAcao</code>, RN-02) gera uma linha por campo alterado, com recursos em reais e datas em ISO.</li>
<li><strong>Anexos</strong> (<code>plano-acao.anexo.spec.ts</code>, novo, 13 testes): PDF, DOCX, PNG e JPG/JPEG são reconhecidos pela assinatura dos bytes; executável renomeado, PDF com extensão de imagem, ZIP que não é DOCX, arquivo sem extensão ou com extensão não aceita são recusados (RN-25). O nome acentuado chega íntegro; mais de 10 arquivos recebem 422 com a mensagem do limite (US-5.6, CA12).</li>
<li><strong>Conclusão do incidente</strong> (<code>notificacao.concluir.service.spec.ts</code>, novo, 6 testes): "Analisado" e "Em ação" passam a "Concluído" com o status lido na trava; "Em análise", "Concluído" e "Arquivado" recebem 409 sem transição; notificação inexistente, 404, e de outra instituição, 403 (US-6.4).</li>
<li><strong>Status e trava</strong> (<code>status.service.spec.ts</code>, 4 testes novos): "Analisado" permite "Em ação", "Concluído" e "Arquivado"; "Em ação" permite "Concluído" e "Arquivado", sem voltar a "Analisado"; a trava lê o status com <code>FOR UPDATE</code> e responde 404 quando a notificação não existe (Q20).</li>
<li><strong>Relógio do histórico</strong> (<code>historico-eventos.spec.ts</code>, novo, 3 testes): cada evento recebe um instante próprio, mesmo no mesmo milissegundo, para que o histórico não junte "N ações criadas a partir das recomendações" e "plano de ação completado" num só grupo.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Testes da spec antiga substituídos:** o módulo saiu da forma da PR #7 (responsável, local e recurso como campos únicos e flag de rascunho), por isso os 27 testes antigos do serviço e os 15 do validador foram reescritos. `plano-acao.diff.spec.ts` (12 testes) e `plano-acao.repository.spec.ts` (9) saíram: os testes da diferença entre versões (`diffAcao`, que já ficava no validador) passaram para `plano-acao.validator.spec.ts`, e o repositório, que não traduz mais colisões de numeração, é medido na integração. Dois testes de transição de `status.service.spec.ts` ("só permite Arquivado por enquanto") deram lugar às novas transições. Ajuste sem cenário novo: `investigacao.service.spec.ts`.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido. Os números abaixo são do módulo de plano de ação, o núcleo desta entrega.</p>

<div class="ns-rel-barra" style="--v:99.19%;--meta:80%"><div><span>Linhas de código testadas</span><b>99,19%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.27%;--meta:85%"><div><span>Funções testadas</span><b>98,27%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.59%;--meta:80%"><div><span>Instruções testadas</span><b>98,59%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:91.07%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>91,07%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">O ponto mais baixo é <code>plano-acao.anexo.ts</code> (92,85% das linhas e 71,42% dos branches): a mensagem de arquivo acima de 10 MB (linhas 20 e 73) e o arquivo sem nome não são exercitados no unitário, mas a recusa do arquivo grande é verificada na integração, onde o arquivo chega a 100% das linhas. O <code>plano-acao.service.ts</code> tem 100% das linhas e 97,95% dos branches, e o <code>plano-acao.validator.ts</code>, 100% das linhas e 90,47% dos branches.</p>

### Demais arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `notificacao/notificacao.concluir.service.ts` | 100% | 100% | 100% |
| `notificacao/status.service.ts` | 100% | 100% | 100% |
| `shared/lib/historico-eventos.ts` | 100% | 100% | 100% |
| `investigacao/investigacao.service.ts` | 100% | 100% | 96,72% |

<div class="ns-rel-info" markdown>

Somando todos os arquivos de código alterados, a cobertura unitária é de **99,47% das linhas, 98,75% das funções e 93,22% dos branches**. Rotas e repositórios ficam fora da medição unitária por política do projeto (`jest-unit.config.js`) e são medidos no relatório de integração. Os schemas Zod (`*.schemas.ts`) ficam fora da medição nas duas suítes (`jest.shared.config.js`).

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo — não só esta entrega — a cobertura unitária está **acima da meta do Plano de Testes em todas as métricas**:

<div class="ns-rel-barra" style="--v:98.19%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>98,19%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:97.83%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>97,83%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.07%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>98,07%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:91.25%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>91,25%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — todas as barras já passaram dela. As travas por módulo do <code>jest-unit.config.js</code> também foram atendidas.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura unitária no projeto são `localidade.schema.ts` (0%), `metrics.middleware.ts` (54,54%) e `error.handler.ts` (72,5%). Nenhum deles foi alterado nesta entrega.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 3273ae2, o último da PR #13</p>

<ul class="ns-rel-checks">
<li><strong>Qualidade do código:</strong> nenhum problema encontrado pela revisão automática (<code>oxlint</code>: 0 avisos, 0 erros em 283 arquivos).</li>
<li><strong>Verificação de tipos:</strong> o TypeScript compila sem erros (<code>npm run type-check</code>).</li>
<li><strong>Esteira da PR:</strong> as pipelines "Pipeline de Testes" e "Qualidade de Código" foram aprovadas na CI em 01/11/2026, no mesmo commit, junto com a análise do SonarCloud e o <code>codecov/patch</code>.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a tela do plano de ação foi entregue na PR #18 do repositório notifica-saude-frontend e não faz parte deste relatório. Os testes end-to-end das US-5.1 a US-5.4 têm relatórios próprios.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches de `plano-acao.anexo.ts` (71,42%):** um teste unitário do erro de arquivo acima de 10 MB e do arquivo sem nome deixaria o arquivo coerente com o restante do módulo.
- **US-5.4 CA04** (responsável antigo em texto livre) não foi implementada de propósito: com a migração destrutiva do plano, não existe dado nessa forma. A divergência foi registrada para as proponentes na PR #13.

<div class="ns-rel-aviso" markdown>O campo "Como a ação será realizada?" (US-5.1, CA18) entrou depois, na PR #17 do backend, e não faz parte deste relatório.</div>

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #13](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/13) | Backend do plano de ação na forma da spec v3, mesclado em 02/11/2026 |
| [PR frontend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/18) | Tela do plano de ação (fora do escopo deste relatório) |
| [PR backend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/17) | "Como a ação será realizada?" (US-5.1, CA18), entregue depois deste relatório |
| `tests/unit/modules/plano-acao/` | `plano-acao.service.spec.ts`, `plano-acao.validator.spec.ts` e `plano-acao.anexo.spec.ts` |
| `tests/unit/modules/notificacao/` | `notificacao.concluir.service.spec.ts` e `status.service.spec.ts` |
| `tests/unit/shared/lib/` | `historico-eventos.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-5.1 a US-5.7, US-6.2, US-6.4 e as regras RN-19, RN-21, RN-23, RN-25 e RN-26 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório de integração](plano-acao-integracao.md) | `REL_Testes_Int_PlanoAcao_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Unit_PlanoAcao_v1_0 — compilado a partir da execução da suíte unitária do backend (Jest com cobertura) no commit 3273ae2 do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 16/11/2026.</p>

</div>

</div>
