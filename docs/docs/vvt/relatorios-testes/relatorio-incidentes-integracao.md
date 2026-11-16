<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes de Integração

Épico 7 - Exportação do Relatório de Incidentes · Relatório da instituição e do setor em XLSX · US-7.1 e US-7.2

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Int_RelatorioIncidentes_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/epico-7/relatorio</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_RelatorioIncidentes_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório unitário](relatorio-incidentes-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes de integração da exportação do relatório de incidentes (Épico 7). | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para o relatório unitário:** testes unitários conferem uma peça isolada do sistema; testes de integração conferem se as peças realmente conversam entre si — aqui, as requisições HTTP passam de verdade pela API, por um banco de dados (Postgres) e por um cache (Redis) rodando em containers, como aconteceria em produção.</div>

A rota `GET /api/relatorios/incidentes` foi testada **de ponta a ponta no servidor**: os testes gravam incidentes no banco, pedem o relatório como cada perfil, abrem o XLSX devolvido e conferem o conteúdo das abas. O ponto central é o **sigilo**: os testes gravam um nome, um contato e um número de prontuário marcadores e procuram por eles em todas as células e propriedades do arquivo. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente, de ponta a ponta.<br>Os 490 testes passaram, incluindo os 17 criados nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>O botão "Extrair dados" é conferido nos relatórios end-to-end das US-7.1 e US-7.2.</span></div>
</div>

Em resumo: **com o sistema todo de pé — servidor, banco de dados e cache reais —, cada perfil recebe exatamente o escopo que lhe cabe**, o arquivo não leva notificante nem prontuário, e o Administrador, o notificante e quem não está logado são recusados.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o fluxo completo foi testado?

<p class="ns-rel-meta">PRs: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/18 e /pull/25 · Executado em 16/11/2026 sobre o commit 113dcac (main) · Infraestrutura real: Postgres e Redis em containers Docker, com o banco de teste atualizado a partir do schema da main</p>

<div class="ns-rel-placar">
<div><strong>490</strong><span>testes executados</span></div>
<div><strong>490</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 17 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Relatório do NSP</strong> (<code>relatorio.routes.spec.ts</code>, novo, 5 testes): o XLSX traz todos os incidentes da instituição, com o total no cabeçalho <code>X-Total-Incidentes</code> (US-7.1, CA02); <strong>nenhuma célula ou propriedade do arquivo contém o notificante ou o número do prontuário</strong> (CA03, RN-29, RN-31); a busca, os filtros e a ordenação da tela não mudam o arquivo (RN-30); a ação excluída não aparece na aba Plano de ação (CA07); e a "Última atualização" ignora a consulta ao prontuário (Q6).</li>
<li><strong>Relatório do gestor</strong> (<code>relatorio.routes.spec.ts</code>, 4 testes): só os incidentes encaminhados ao seu setor (US-7.2, CA02, RN-26); sem a coluna "Anônima", o notificante e o número do prontuário (CA03, RN-27, RN-31); o setor sem encaminhamentos gera o arquivo zerado, com a mensagem "Nenhuma ação registrada nos incidentes deste relatório." (Q10); e o gestor sem setor recebe 403.</li>
<li><strong>Quem pode exportar</strong> (<code>relatorio.routes.spec.ts</code>, 3 testes): o Administrador recebe 403 (US-7.1, CA10), o notificante também, e a requisição sem token recebe 401 (RNF 6.2.2).</li>
<li><strong>Filtros da lista sobre o Escopo de Acesso</strong> (<code>notificacao.filtros.routes.spec.ts</code>, 3 testes novos na PR #18): o filtro por setor, por grau do dano e por status continuam funcionando depois que a lista passou a usar o mesmo escopo do relatório (Q3).</li>
<li><strong>Busca pelo código como a tela o mostra</strong> (<code>notificacao.filtros.routes.spec.ts</code>, 2 testes novos na PR #25): a busca da lista acha o incidente pelo código com os zeros à esquerda ("0024") e com o "#" da tela ("#0024"). A correção saiu da automação do Épico 7, que procura na lista o incidente que acabou de exportar.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Nenhum cenário existente foi alterado.** No `notificacao.filtros.routes.spec.ts`, só a limpeza do banco ao fim da suíte mudou, para os cenários novos. A troca da regra de acesso da lista pela função compartilhada `escopoDeAcesso` (Q3) passou por todas as suítes de integração da notificação, da análise e do plano de ação sem mudança — a refatoração não quebrou nada que já funcionava.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">Aqui a cobertura é medida com o sistema rodando de verdade, então alguns caminhos raros de erro são naturalmente mais difíceis de forçar — por isso os números costumam ficar um pouco abaixo dos testes unitários. Os números abaixo somam todos os arquivos de código alterados pelas PRs #18 e #25, incluindo rotas e repositórios.</p>

<div class="ns-rel-barra" style="--v:95.21%;--meta:80%"><div><span>Linhas de código testadas</span><b>95,21%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:94.89%;--meta:85%"><div><span>Funções testadas</span><b>94,89%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:94.47%;--meta:80%"><div><span>Instruções testadas</span><b>94,47%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:77.66%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>77,66%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Os branches ficam abaixo da meta de 80% nesta medição. Os desvios descobertos são, quase todos, caminhos que a rota não deixa acontecer e que o teste unitário já cobre: a recusa de perfil dentro do serviço (a rota barra antes), o fuso inválido na configuração, os campos ausentes nas colunas (por exemplo, a ação sem responsáveis ou sem "Onde") e o <code>?? null</code> dos repositórios quando o usuário, a unidade ou o setor não existem. O <code>app.ts</code>, de que a entrega só mudou o registro da rota, entra com as variáveis de inicialização que os testes não variam.</p>

### Arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `relatorio/relatorio.routes.ts` | 100% | 100% | — |
| `relatorio/relatorio.planilha.ts` | 100% | 100% | 83,93% |
| `relatorio/relatorio.repository.ts` | 100% | 100% | <span class="ns-rel-baixo">62,50%</span> |
| `relatorio/relatorio.rotulos.ts` | 100% | — | — |
| `notificacao/notificacao.repository.ts` | 100% | 100% | 83,67% |
| `plano-acao/plano-acao.repository.ts` | 100% | 100% | 93,55% |
| `shared/lib/historico-eventos.ts` | 100% | 100% | — |
| `notificacao/constants.ts` | 100% | — | — |
| `shared/lib/acesso-setor.ts` | 94,44% | 100% | 91,67% |
| `relatorio/relatorio.linhas.ts` | 92,24% | 93,24% | <span class="ns-rel-baixo">69,16%</span> |
| `app.ts` | 89,74% | 77,78% | <span class="ns-rel-baixo">12,50%</span> |
| `notificacao/notificacao.service.ts` | 88,66% | 86,67% | 82,09% |
| `relatorio/relatorio.service.ts` | 86,11% | 85,71% | <span class="ns-rel-baixo">75,86%</span> |

<div class="ns-rel-info" markdown>

**Unitário e integração se completam.** As partes descobertas aqui de `relatorio.service.ts` (fuso inválido e recusa de perfil no serviço) e de `relatorio.linhas.ts` (campos ausentes) têm teste unitário próprio: no [relatório unitário](relatorio-incidentes-unitario.md), os dois arquivos têm 100% e 97,41% das linhas e 96,55% e 92,52% dos branches. A linha descoberta de `acesso-setor.ts` (68) é o Administrador sem restrição de instituição, também coberto no unitário.

Os schemas Zod (`*.schemas.ts`) ficam fora da medição nas duas suítes, por política do projeto (`jest.shared.config.js`).

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo nos testes de integração — não só esta entrega —, **todas as métricas estão acima da meta do Plano de Testes**:

<div class="ns-rel-barra" style="--v:94.7%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>94,70%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:93.8%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>93,80%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:95.94%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>95,94%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:80.89%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>80,89%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica. As travas por módulo do <code>jest-int.config.js</code> foram atendidas. Em relação ao relatório do ciclo de vida (Épico 6), as linhas recuaram de 94,94% para 94,70%, as instruções de 94,03% para 93,80%, as funções de 96,58% para 95,94% e os branches de 82,25% para 80,89%. A medição de agora inclui, além desta entrega, as demais mudanças que entraram na main até 16/11 (como a análise em andamento da issue #140).</p>

<div class="ns-rel-info" markdown>

Os arquivos com menor cobertura de integração no projeto são `prisma.ts` (50%), `turnstile.ts` (62,5%) e `redis.ts` (78,26%), nenhum deles alterado por esta entrega.

**Pontos de atenção:** os branches do projeto (80,89%) estão perto da meta de 80%. O módulo de notificação está com **78,61% dos branches** na integração — acima da trava do módulo (78%), mas abaixo da meta geral — e o módulo novo, `relatorio`, com **74%**, pelos motivos da seção 3.

</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas em 16/11/2026 sobre a main do backend (113dcac)</p>

<ul class="ns-rel-checks">
<li><strong>Migrations e schema:</strong> o banco de teste foi atualizado a partir do schema da main (<code>npm run test:int:setup</code>, com <code>prisma db push</code>) antes da execução.</li>
<li><strong>Esteira da PR:</strong> na PR #18, os "Testes de Integração", que sobem Postgres e Redis, foram aprovados na CI em 11/11/2026 no último commit (4643e14), junto com o <code>codecov/patch</code>. Na PR #25, os jobs não chegaram a rodar por um problema de cobrança do GitHub Actions da organização; a correção foi validada localmente, nesta execução.</li>
<li><strong>Qualidade do código e tipos:</strong> <code>oxlint</code> sem avisos nem erros e TypeScript compilando sem erros.</li>
<li><strong>Arquivo aberto de verdade:</strong> os testes não conferem só o código de resposta: leem o XLSX devolvido com o ExcelJS e varrem as células e as propriedades do arquivo.</li>
</ul>

<div class="ns-rel-citacao">Frontend: o botão "Extrair dados" (PR #26 do repositório notifica-saude-frontend) só baixa o arquivo, usa o nome do <code>Content-Disposition</code> e lê o total em <code>X-Total-Incidentes</code>. Os dois cabeçalhos são conferidos aqui; o botão, nos relatórios end-to-end.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches do módulo `relatorio` na integração (74%):** um cenário com ações sem responsáveis e sem "Onde", e um com o usuário ou o setor removidos, cobririam os desvios mais visíveis de `relatorio.linhas.ts` e `relatorio.repository.ts` também com o banco real.
- **Branches do módulo de notificação (78,61%):** recuaram em relação ao Épico 6 e estão a 0,61 ponto da trava do módulo. Os desvios descobertos mais visíveis continuam nos filtros da lista em `notificacao.service.ts`.
- **CI da PR #25:** reexecutar a esteira quando o GitHub Actions da organização voltar, para registrar a aprovação também na CI.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #18](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/18) | Relatório de incidentes em XLSX gerado no servidor, mesclado em 11/11/2026 |
| [PR backend #25](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/25) | Busca do incidente pelo código como a tela o mostra, mesclada em 15/11/2026 |
| [PR frontend #26](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/26) | Botão "Extrair dados" (fora do escopo deste relatório) |
| `tests/integration/modules/relatorio/relatorio.routes.spec.ts` | Rota do relatório: escopo, sigilo, abas e recusas |
| `tests/integration/modules/notificacao/notificacao.filtros.routes.spec.ts` | Filtros e busca da lista sobre o Escopo de Acesso |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-7.1, US-7.2 e as regras RN-26, RN-27, RN-29, RN-30 e RN-31 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório unitário](relatorio-incidentes-unitario.md) | `REL_Testes_Unit_RelatorioIncidentes_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Int_RelatorioIncidentes_v1_0 — compilado a partir da execução da suíte de integração do backend (Jest com cobertura, Postgres e Redis reais) no commit 113dcac do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 16/11/2026.</p>

</div>

</div>
