<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes Unitários

Épico 4 - Análise do Incidente · Seções 3 a 5, conclusão e decisão pós-análise · US-4.5, US-4.6, US-4.7, US-4.8 e US-4.9

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Unit_Analise_S3S5_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/epico-4/implementa-analise-secoes-3-a-5</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_Analise_S3S5_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](analise-secoes-3-5-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes unitários da análise do incidente (Seções 3 a 5, conclusão e decisão pós-análise). | Eduardo Alves |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

Esta entrega completa, no servidor, a **análise do incidente**: as Seções 3 (cronologia e problemas na prestação do cuidado — PPC), 4 (fatores contribuintes e 5 Porquês) e 5 (Ishikawa e recomendações), a **conclusão da análise** (US-4.8) e a **decisão pós-análise** do NSP (US-4.9). Com ela, o incidente passa de "Em análise" para "Analisado", e o e-mail de encaminhamento passa a dizer se o setor recebe o incidente antes ou depois da análise. Continuam valendo as regras que protegem a análise: só o autor conclui (RN-28) e o gestor só age sobre incidentes do seu setor (RN-26). Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente.<br>Os 707 testes passaram, incluindo os 85 criados ou revisados nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela da decisão pós-análise e da análise concluída foi entregue na PR #17 do frontend.</span></div>
</div>

Em resumo: **as regras das Seções 3 a 5, da conclusão e da decisão funcionam e foram comprovadas no servidor**, onde se decide o que é pendência, quem pode concluir e quando o setor é avisado. O código central da entrega (o módulo de investigação) tem **100% das linhas e das funções testadas**.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o servidor foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12 · Executado em 16/11/2026 sobre o commit 3172175 · Pipeline de Testes da PR aprovada na CI em 23/10/2026</p>

<div class="ns-rel-placar">
<div><strong>707</strong><span>testes executados</span></div>
<div><strong>707</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 85 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Pendências das Seções 3 a 5</strong> (<code>investigacao.conteudo.spec.ts</code>, 54 testes novos, 77 no total): a Seção 3 exige ao menos um evento na cronologia (US-4.5, CA04) e aponta fato sem data, hora, fonte ou status, com data inexistente (30 de fevereiro), hora inválida (24:00, 8:5), vazio ou acima de 500 caracteres e "Outro" sem texto; a tabela de PPC é opcional, mas um PPC adicionado precisa das três colunas (CA11). A Seção 4 exige ao menos um fator por PPC, aceita fator sem fonte e sem 5 Porquês, ignora nível em branco e aponta nível começado pela metade (US-4.6, CA09), além dos limites de 500 e 100 caracteres. Na Seção 5 as recomendações são opcionais (US-4.7, CA07), mas uma linha adicionada em branco ou acima de 300 caracteres é pendência. Pedidos malformados (id que não é UUID, ids repetidos, 16 níveis, categoria, fonte ou status inexistentes) são recusados.</li>
<li><strong>Forma canônica da análise</strong> (mesmo arquivo): antes de gravar, o sistema apara os textos, descarta as entrevistas quando a resposta é "Não" (D-014), o texto de "Outro" quando a opção não é "Outro", os níveis do 5 Porquês em branco e os fatores de PPC que não existem mais (P-1), sem alterar o documento recebido. A pendência de PPC passa a apontar para a Seção 3, e não para a Seção 4.</li>
<li><strong>Conclusão da análise</strong> (<code>investigacao.service.spec.ts</code>, 10 testes novos): a análise feita pelo setor conclui e leva o incidente a "Analisado" (US-4.8, CA05); a do NSP conclui e continua "Em análise" até a decisão (CA06). Com pendências, a conclusão é recusada e nada é gravado (CA02). Também são recusadas a análise inexistente ou já concluída, a notificação arquivada, o gestor de outro setor e quem não é o autor (RN-28). Os fatores órfãos descartados ficam registrados em log.</li>
<li><strong>Decisão pós-análise</strong> (mesmo arquivo, 10 testes novos): qualquer NSP pode encaminhar o resultado, e o setor é avisado (US-4.9, CA03, RN-11); a decisão de não encaminhar não avisa ninguém (CA04); uma falha no envio do aviso não desfaz a decisão. São recusadas a análise feita pelo setor, a não concluída ou inexistente, a decisão já registrada, a notificação arquivada e outra instituição.</li>
<li><strong>E-mail de encaminhamento</strong> (<code>notificador-email.spec.ts</code>, 3 testes novos): quando o resultado é enviado depois da análise, o e-mail tem assunto e texto próprios; antes da análise, mantém o assunto padrão; e o corpo HTML acompanha o momento do encaminhamento.</li>
<li><strong>Transições de status</strong> (<code>status.service.spec.ts</code>, 1 teste revisado): "Em análise" passa a permitir "Analisado", além de "Arquivado".</li>
</ul>

<div class="ns-rel-aviso" markdown>**Revisões:** entre os 85, estão os 7 testes que já existiam em `notificador-email.spec.ts` (sem gestor ativo, erros do banco ou do e-mail, link do sistema); eles só passaram a citar a US-2.4 (antes US-2.5), sem mudar o que conferem — as mudanças reais da entrega somam 78 testes. O teste de transições de `status.service.spec.ts` deixou de esperar "Em análise só permite Arquivado". Todas as outras suítes unitárias passaram sem alteração.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido. Os números abaixo são do módulo de investigação, o núcleo desta entrega.</p>

<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Linhas de código testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:85%"><div><span>Funções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Instruções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:94.08%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>94,08%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Os desvios restantes estão em <code>investigacao.conteudo.ts</code>: valores padrão para listas ausentes no documento (<code>?? []</code>, <code>?? {}</code>), como entrevistas, PPC e fatores (linhas 303, 352 e 465 a 473), e um valor padrão inalcançável na linha 422 (<code>split</code> sempre devolve ao menos um elemento). Em <code>investigacao.service.ts</code>, ficam os valores padrão do construtor (linhas 84 e 85). Nenhum deles muda o resultado das regras.</p>

### Demais arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `notificacao/status.service.ts` | 100% | 100% | 100% |
| `shared/lib/acesso-setor.ts` | 100% | 100% | 100% |
| `encaminhamento/notificador.ts` | 100% | 100% | 100% |
| `encaminhamento/encaminhamento.template.ts` | 100% | 100% | 100% |
| `notificacao/notificacao.service.ts` | 100% | 100% | 93,65% |
| `encaminhamento/encaminhamento.service.ts` | 100% | 100% | 90,90% |

<div class="ns-rel-info" markdown>

Somando todos os arquivos de código alterados, a cobertura unitária é de **100% das linhas, 100% das funções e 94,55% dos branches**. Rotas e repositórios ficam fora da medição unitária por política do projeto (`jest-unit.config.js`) e são medidos no relatório de integração. Os schemas Zod (`*.schemas.ts`) ficam fora da medição nas duas suítes (`jest.shared.config.js`).

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo — não só esta entrega — a cobertura unitária está **acima da meta do Plano de Testes em todas as métricas**:

<div class="ns-rel-barra" style="--v:97.7%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>97,70%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:97.19%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>97,19%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:97.11%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>97,11%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90.98%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>90,98%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — todas as barras já passaram dela. As travas por módulo do <code>jest-unit.config.js</code> também foram atendidas. Em relação ao relatório das Seções 1 e 2, o projeto subiu de 97,48% para 97,70% das linhas e de 90,90% para 90,98% dos branches.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura unitária no projeto são `localidade.schema.ts` (0%), `metrics.middleware.ts` (54,54%) e `error.handler.ts` (57,5%). Nenhum deles foi alterado nesta entrega.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 3172175, o último da PR #12</p>

<ul class="ns-rel-checks">
<li><strong>Qualidade do código:</strong> nenhum problema encontrado pela revisão automática (<code>oxlint</code>: 0 avisos, 0 erros em 278 arquivos).</li>
<li><strong>Verificação de tipos:</strong> o TypeScript compila sem erros (<code>npm run type-check</code>).</li>
<li><strong>Esteira da PR:</strong> as pipelines "Pipeline de Testes" e "Qualidade de Código" foram aprovadas na CI em 23/10/2026, no mesmo commit, junto com a análise do SonarCloud e o <code>codecov/patch</code>.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a tela correspondente (decisão pós-análise e análise concluída somente leitura no detalhe) foi entregue na PR #17 do repositório notifica-saude-frontend e não faz parte deste relatório. Os testes end-to-end das US-4.5 e US-4.6 têm relatórios próprios.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Teste unitário do `error.handler.ts`** (57,5% das linhas), pendente desde o relatório das Seções 1 e 2: os tratamentos de 422, 413 e 400 continuam verificados só na integração.
- **Valores padrão de listas ausentes** em `investigacao.conteudo.ts`: um teste com o documento sem `entrevistas`, `ppcs` e `fatores` fecharia a maior parte dos desvios restantes do módulo. A linha 422 e os padrões do construtor do serviço não são alcançáveis por teste de regra e podem ficar como estão.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #12](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12) | Implementação das Seções 3 a 5, da conclusão e da decisão pós-análise, mesclada em 26/10/2026 |
| [PR frontend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/17) | Decisão pós-análise e análise concluída somente leitura no detalhe (fora do escopo deste relatório) |
| `tests/unit/modules/investigacao/` | `investigacao.conteudo.spec.ts` e `investigacao.service.spec.ts` |
| `tests/unit/modules/encaminhamento/` | `notificador-email.spec.ts` |
| `tests/unit/modules/notificacao/` | `status.service.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.5 a US-4.9 e as regras RN-11, RN-26 e RN-28 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório de integração](analise-secoes-3-5-integracao.md) | `REL_Testes_Int_Analise_S3S5_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Unit_Analise_S3S5_v1_0 — compilado a partir da execução da suíte unitária do backend (Jest com cobertura) no commit 3172175 do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 16/11/2026.</p>

</div>

</div>
