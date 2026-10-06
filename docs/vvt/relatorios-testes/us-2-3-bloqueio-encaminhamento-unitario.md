<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes Unitários

Épico 2 - Bloqueio de Encaminhamento · Óbito / Never Event · CA06 / US-2.3

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Unit_CA06_v1_0</code></span><span>Emissão <em>9 de setembro de 2026</em></span><span>Feature branch <code>refactor/11/ajusta-encaminhamento-dos-incidentes</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_CA06_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](us-2-3-bloqueio-encaminhamento-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 09/09/2026 | Criação do relatório em PDF. | Não registrado no PDF original |
    | 1.1 | 06/10/2026 | Migração do PDF para o MkDocs, no modelo padronizado dos relatórios de testes, sem alteração dos resultados. | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

Esta é a regra que impede o encaminhamento de notificações classificadas como **Óbito** ou **Never Event** para o setor responsável — elas devem ficar retidas, nunca seguir o fluxo normal. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente.<br>Todos os testes passaram, incluindo os 2 cenários desta regra.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Frontend (tela)</strong><span>Sem testes automáticos ainda.<br>Foi conferido manualmente e passou, mas recomenda-se automatizar.</span></div>
</div>

Em resumo: **a regra funciona e foi comprovada** no servidor, que é onde a decisão de bloquear realmente acontece. Na tela, o comportamento também foi conferido e está correto, só que hoje isso depende de alguém testar manualmente — não existe ainda um "robô" que confira essa tela sozinho a cada mudança futura.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o servidor foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/3 · Executado em 09/09/2026</p>

<div class="ns-rel-placar">
<div><strong>565</strong><span>testes executados</span></div>
<div><strong>565</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 2 testes específicos desta regra (Óbito / Never Event)

<ul class="ns-rel-checks">
<li><strong>Notificação de Óbito:</strong> o sistema recusa o encaminhamento e mostra o erro correto, exatamente como esperado.</li>
<li><strong>Notificação de Never Event:</strong> o sistema recusa o encaminhamento e mostra o erro correto, exatamente como esperado.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Por que só 2 casos?** A regra de bloqueio vale apenas para "Óbito" e "Never Event". Notificações classificadas como "Grave" continuam podendo ser encaminhadas normalmente, então não entram nesse teste de bloqueio.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da regra foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido.</p>

<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Linhas de código testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:85%"><div><span>Funções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Instruções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:94%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>94%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Faltam apenas 2 pequenos desvios de lógica pouco usados (linhas 33 e 87 do arquivo principal da regra) sem cobertura de teste — não afetam o funcionamento da regra de bloqueio.</p>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o projeto backend como um todo — não só esta regra — a cobertura de testes também está alta e **acima da meta do Plano de Testes em todas as métricas**:

<div class="ns-rel-barra" style="--v:96.96%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>96,96%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.29%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>96,29%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.33%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,33%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90.64%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>90,64%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — todas as barras já passaram dela.</p>

<div class="ns-rel-info" markdown>Dois arquivos do sistema (tratamento de erros e métricas) ainda têm cobertura baixa, mas **nenhum dos dois foi alterado por esta regra** — são pontos de atenção separados, não um problema desta feature.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Frontend — e a tela, foi testada?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/3 · Verificado em 09/09/2026</p>

<div class="ns-rel-alerta"><span class="ns-rel-icone ns-rel--warn">!</span><strong>Este projeto ainda não tem testes automáticos de tela</strong></div>

Isso significa que, hoje, ninguém "aperta um botão" para o computador conferir sozinho se a tela está funcionando — é preciso um humano testar manualmente. Para compensar isso, três verificações foram feitas:

<ul class="ns-rel-checks">
<li><strong>Qualidade do código:</strong> nenhum problema encontrado pela revisão automática do código (0 avisos, 0 erros).</li>
<li><strong>Geração da versão final do site:</strong> concluída sem erros — a tela compila e está pronta para uso.</li>
<li><strong>Teste manual no navegador:</strong> uma pessoa classificou uma notificação como Óbito, clicou em "Encaminhar" e confirmou que a mensagem certa apareceu na tela (com print anexado à PR).</li>
</ul>

<div class="ns-rel-citacao">Mensagem que a pessoa viu na tela ao tentar encaminhar: "Notificações classificadas como Óbito ou Never Event não podem ser encaminhadas para o setor responsável."</div>

<p class="ns-rel-legenda">Observação: o botão "Encaminhar" continua visível na tela mesmo para esses casos — a decisão da equipe foi mostrar a mensagem de bloqueio só depois do clique, e não escondê-lo.</p>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Criar um teste automático para a tela, cobrindo o seguinte comportamento: quando o servidor recusar o encaminhamento por conta da regra de Óbito/Never Event, a tela deve mostrar exatamente a mensagem explicativa do servidor — e não uma mensagem genérica de erro.

<div class="ns-rel-aviso" markdown>Assim, se algum dia alguém alterar essa tela por engano, o "robô" de testes vai avisar imediatamente, sem depender de um humano lembrar de testar esse caso manualmente de novo.</div>

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #3](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/3) | Bloqueio do encaminhamento de Óbito/Never Event no servidor |
| [PR frontend #3](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/3) | Tratamento do bloqueio na tela de encaminhamento |
| `tests/unit/.../encaminhamento.service.spec.ts` | Casos de teste unitários CT-UNI-007 e CT-UNI-008 (backend) |
| `EncaminhamentoModal.tsx` | Ponto de tratamento do erro `GRAU_DANO_BLOQUEADO` (frontend) |
| `REL_Cobertura_Unitario_v1_0` | Relatório de cobertura de código da suíte unitária do backend |
| [Relatório de integração](us-2-3-bloqueio-encaminhamento-integracao.md) | `REL_Testes_Int_CA06_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Unit_CA06_v1_0 — compilado a partir dos relatórios de execução de testes unitários de backend e frontend do repositório Notifica-Saude-2026-2, em 09/09/2026.</p>

</div>

</div>
