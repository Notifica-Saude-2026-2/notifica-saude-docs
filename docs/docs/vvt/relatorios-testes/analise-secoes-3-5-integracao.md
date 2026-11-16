<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes de Integração

Épico 4 - Análise do Incidente · Seções 3 a 5, conclusão e decisão pós-análise · US-4.5, US-4.6, US-4.7, US-4.8 e US-4.9

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Int_Analise_S3S5_v1_0</code></span><span>Emissão <em>16 de novembro de 2026</em></span><span>Feature branch <code>feat/epico-4/implementa-analise-secoes-3-a-5</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_Analise_S3S5_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório unitário](analise-secoes-3-5-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 16/11/2026 | Criação do relatório de testes de integração da análise do incidente (Seções 3 a 5, conclusão e decisão pós-análise). | Eduardo Alves |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para o relatório unitário:** testes unitários conferem uma peça isolada do sistema; testes de integração conferem se as peças realmente conversam entre si — aqui, as requisições HTTP passam de verdade pela API, por um banco de dados (Postgres) e por um cache (Redis) rodando em containers, como aconteceria em produção.</div>

O rascunho das Seções 3 a 5, a conclusão da análise e a decisão pós-análise foram testados **de ponta a ponta**: da chamada HTTP até o que fica gravado no banco, no histórico e no encaminhamento. Também foram testados quem pode concluir e decidir (RN-26, RN-28, D-016) e o que acontece quando duas pessoas concluem ou decidem a mesma análise ao mesmo tempo. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente, de ponta a ponta.<br>Os 424 testes passaram, incluindo os 49 criados ou revisados nesta entrega.</span></div>
<div class="ns-rel--neutro"><span class="ns-rel-icone">i</span><strong>Frontend (tela)</strong><span>Fora do escopo deste relatório.<br>A tela da decisão pós-análise e da análise concluída foi entregue na PR #17 do frontend.</span></div>
</div>

Em resumo: **a análise vai do rascunho à decisão com o sistema todo de pé** — servidor, banco de dados e cache reais —, inclusive nas situações de corrida, em que exatamente um pedido vence e o outro recebe 409.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o fluxo completo foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12 · Executado em 16/11/2026 sobre o commit 3172175 · Infraestrutura real: Postgres e Redis em containers Docker, com o banco de teste recriado a partir do schema da branch</p>

<div class="ns-rel-placar">
<div><strong>424</strong><span>testes executados</span></div>
<div><strong>424</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 49 testes desta entrega, por assunto

<ul class="ns-rel-checks">
<li><strong>Rascunho das Seções 3 a 5</strong> (<code>investigacao.secoes-3-5.routes.spec.ts</code>, novo, 15 testes): a Seção 3 completa é gravada sem mexer na Seção 1; incompleta, é gravada como veio e devolve a pendência (cronologia vazia, data inexistente, hora vazia ou inválida, "Outro" sem texto, PPC sem "o que deveria ter acontecido"). A Seção 4 pode ser salva antes de o PPC existir na Seção 3 e devolve as pendências por PPC, fator e nível; a Seção 5 é aceita completa ou com recomendação em branco. Pedidos malformados (PPCs de id repetido ou inválido, 16 níveis, categoria inexistente, recomendação sem id) recebem 400 <strong>sem gravar nada</strong>.</li>
<li><strong>Conclusão da análise</strong> (<code>investigacao.conclusao.routes.spec.ts</code>, novo, 15 testes): a análise do setor conclui com 200, passa a "Analisado", grava o histórico e a forma canônica (US-4.8, CA03 a CA05); a do NSP continua "Em análise" até a decisão (CA06). Com pendências, a API responde 422 com o caminho prefixado pela seção — a do PPC aponta para a Seção 3 (US-4.5, CA11) — e nada é concluído (CA02). Outro NSP, outro gestor do mesmo setor (RN-28), gestor de outro setor (RN-26) e Administrador (D-016) são recusados; análise inexistente recebe 404, notificação arquivada 409. Depois de concluída, outro NSP lê o conteúdo, e nova conclusão ou PATCH recebem 409. <strong>Duas conclusões simultâneas</strong> resultam em exatamente um 200 e um 409.</li>
<li><strong>Decisão pós-análise</strong> (<code>investigacao.decisao.routes.spec.ts</code>, novo, 18 testes): encaminhar leva a "Analisado", grava o encaminhamento como "após a análise" e o gestor passa a ler a análise (US-4.9, CA03); não encaminhar leva a "Analisado", grava o motivo no histórico e o gestor continua sem acesso (CA04). Óbito e Never Event analisados pelo NSP também podem receber o resultado. Decisão inexistente, justificativa ausente, em branco ou acima de 400 caracteres e mensagem acima de 400 recebem 400; gestor e Administrador, 403; análise inexistente, 404; antes da conclusão, análise feita pelo setor, notificação arquivada e segunda decisão, 409. <strong>Duas decisões simultâneas</strong> resultam em um 200, um 409 e um único encaminhamento.</li>
<li><strong>Seção inexistente</strong> (<code>investigacao.rascunho.routes.spec.ts</code>, 1 teste revisado): o antigo "400 para seção não implementada" virou "400 para seção inexistente", já que agora as cinco seções existem.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Os demais fluxos continuam funcionando:** nos arquivos de encaminhamento (`encaminhamento.fluxo.routes.spec.ts`, `notificador.integration.spec.ts` e o helper) só mudou a referência da história no comentário (US-2.5 → US-2.4), e o helper da investigação ganhou o apoio às Seções 3 a 5, sem cenários novos. Todas as outras suítes de integração, incluindo as Seções 1 e 2 e o plano de ação, passaram — a mudança não quebrou nada que já funcionava.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da entrega foi testado?

<p class="ns-rel-meta">Aqui a cobertura é medida com o sistema rodando de verdade, então alguns caminhos raros de erro são naturalmente mais difíceis de forçar — por isso os números costumam ficar um pouco abaixo dos testes unitários. Os números abaixo são do módulo de investigação, o núcleo desta entrega (incluindo rotas e repositório).</p>

<div class="ns-rel-barra" style="--v:99.4%;--meta:80%"><div><span>Linhas de código testadas</span><b>99,40%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.55%;--meta:85%"><div><span>Funções testadas</span><b>98,55%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:98.96%;--meta:80%"><div><span>Instruções testadas</span><b>98,96%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:88.05%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>88,05%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Ficam de fora principalmente valores padrão para campos ausentes (<code>?? []</code>, <code>?? {}</code>) em <code>investigacao.conteudo.ts</code> (83,33% dos branches) e o corpo vazio (<code>req.body ?? {}</code>) em <code>investigacao.routes.ts</code> (62,5% dos branches). O comportamento desses casos já é verificado nos testes unitários.</p>

### Demais arquivos alterados pela entrega

| Arquivo | Linhas | Funções | Branches |
| --- | --- | --- | --- |
| `encaminhamento/encaminhamento.repository.ts` | 100% | 100% | 100% |
| `encaminhamento/encaminhamento.routes.ts` | 100% | 100% | 100% |
| `encaminhamento/encaminhamento.template.ts` | 100% | 100% | 100% |
| `encaminhamento/encaminhamento.service.ts` | 96,77% | 100% | 95,45% |
| `notificacao/notificacao.service.ts` | 96,66% | 100% | 87,30% |
| `notificacao/status.service.ts` | 94,73% | 100% | 92,85% |
| `encaminhamento/notificador.ts` | 91,66% | 100% | 87,50% |
| `shared/lib/acesso-setor.ts` | 88,88% | 100% | 83,33% |

<div class="ns-rel-info" markdown>

Somando todos os arquivos de código alterados, a cobertura de integração é de **98,01% das linhas, 99,09% das funções e 88,65% dos branches**. Os schemas Zod (`*.schemas.ts`) ficam fora da medição nas duas suítes, por política do projeto (`jest.shared.config.js`).

As linhas descobertas do `notificador.ts` são o link do e-mail com o endereço do sistema configurado (a suíte de integração roda sem `APP_URL`) e a falha ao buscar os gestores destinatários; os dois caminhos estão cobertos nos testes unitários (CT-UNI-NE07 e CT-UNI-NE04). No `acesso-setor.ts`, a única linha descoberta (gestor sem setor associado) também é coberta pelos testes unitários.

</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o backend como um todo nos testes de integração — não só esta entrega —, **todas as métricas estão acima da meta do Plano de Testes**:

<div class="ns-rel-barra" style="--v:93.91%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>93,91%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:93.23%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>93,23%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.26%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,26%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:81.41%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>81,41%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica. Os caminhos alternativos subiram de 80,62% (relatório das Seções 1 e 2) para 81,41%, ganhando margem sobre a meta. As travas por módulo do <code>jest-int.config.js</code> (incluindo investigação e encaminhamento) foram atendidas.</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura de integração no projeto são `prisma.ts` (50%), `turnstile.ts` (62,5%) e `plano-acao.repository.ts` (70,83%). Nenhum deles foi alterado por esta entrega — são pontos de atenção à parte.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Verificações complementares

<p class="ns-rel-meta">Executadas sobre o commit 3172175, o último da PR #12</p>

<ul class="ns-rel-checks">
<li><strong>Migrations e schema:</strong> o banco de teste foi recriado a partir do schema da branch (<code>prisma db push --force-reset</code>), com o momento do encaminhamento e a decisão pós-análise.</li>
<li><strong>Esteira da PR:</strong> a "Pipeline de Testes", que sobe Postgres e Redis e roda a suíte de integração, foi aprovada na CI em 23/10/2026, no mesmo commit.</li>
<li><strong>Qualidade do código e tipos:</strong> <code>oxlint</code> sem avisos nem erros e TypeScript compilando sem erros.</li>
</ul>

<div class="ns-rel-citacao">Frontend: a integração da tela com estes endpoints (decisão pós-análise e análise concluída somente leitura no detalhe) foi entregue na PR #17 do repositório notifica-saude-frontend e não faz parte deste relatório.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Nenhuma pendência bloqueia a entrega. Ficam como melhorias recomendadas:

- **Branches de `investigacao.routes.ts` (62,5%):** um teste de cada rota (iniciar, salvar seção e decidir) sem corpo na requisição cobriria os três desvios restantes.
- **Teste de ponta a ponta da conclusão e da decisão:** os relatórios end-to-end já cobrem as US-4.5 e US-4.6; falta levar ao `notifica-saude-e2e` o fluxo da US-4.8 e da US-4.9 — concluir a análise como NSP, decidir encaminhar e conferir que o gestor passa a ler a análise.

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #12](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/12) | Implementação das Seções 3 a 5, da conclusão e da decisão pós-análise, mesclada em 26/10/2026 |
| [PR frontend #17](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/17) | Decisão pós-análise e análise concluída somente leitura no detalhe (fora do escopo deste relatório) |
| `tests/integration/modules/investigacao/` | `investigacao.secoes-3-5`, `investigacao.conclusao`, `investigacao.decisao` e `investigacao.rascunho.routes.spec.ts` |
| [Especificação de Requisitos](../../requisitos/especificacao-requisitos.md) | US-4.5 a US-4.9 e as regras RN-11, RN-26 e RN-28 |
| [Plano de Testes](../plano-de-testes.md#cobertura) | Metas de cobertura usadas nas barras |
| [Relatório unitário](analise-secoes-3-5-unitario.md) | `REL_Testes_Unit_Analise_S3S5_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Int_Analise_S3S5_v1_0 — compilado a partir da execução da suíte de integração do backend (Jest com cobertura, Postgres e Redis reais) no commit 3172175 do repositório Notifica-Saude-2026-2/notifica-saude-backend, em 16/11/2026.</p>

</div>

</div>
