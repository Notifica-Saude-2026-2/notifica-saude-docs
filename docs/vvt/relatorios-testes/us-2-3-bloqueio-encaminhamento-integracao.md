<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes de Integração

Épico 2 - Bloqueio de Encaminhamento · Óbito / Never Event · CA06 / US-2.3

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Int_CA06_v1_0</code></span><span>Emissão <em>9 de setembro de 2026</em></span><span>Feature branch <code>refactor/11/ajusta-encaminhamento-dos-incidentes</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_CA06_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório unitário](us-2-3-bloqueio-encaminhamento-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 09/09/2026 | Criação do relatório em PDF. | Não registrado no PDF original |
    | 1.1 | 06/10/2026 | Migração do PDF para o MkDocs, no modelo padronizado dos relatórios de testes, sem alteração dos resultados. | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para o relatório unitário:** testes unitários conferem uma peça isolada do sistema; testes de integração conferem se as peças realmente conversam entre si — aqui, as requisições passam de verdade por um banco de dados (Postgres) e um cache (Redis) rodando em containers, como aconteceria em produção.</div>

A regra que impede o encaminhamento de notificações de **Óbito** ou **Never Event** foi testada de ponta a ponta: da chamada HTTP até a resposta de erro devolvida pela API. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente, de ponta a ponta.<br>Todos os testes passaram, incluindo os 2 cenários desta regra.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Frontend (tela)</strong><span>Sem testes de integração automáticos.<br>O fluxo completo (tela + servidor reais) foi conferido manualmente e passou.</span></div>
</div>

Em resumo: **a regra continua funcionando quando o sistema todo está de pé** — servidor, banco de dados e cache reais — não só em condições isoladas de teste. Na tela, o mesmo fluxo completo (uma pessoa navegando de verdade, com o servidor real do outro lado) também foi conferido e funcionou, mas isso ainda depende de um humano repetir o teste manualmente a cada mudança.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o fluxo completo foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/3 · Executado em 09/09/2026 · Infraestrutura real usada: Postgres e Redis, rodando em containers Docker</p>

<div class="ns-rel-placar">
<div><strong>311</strong><span>testes executados</span></div>
<div><strong>311</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os 2 testes específicos desta regra (requisição real até a resposta da API)

<ul class="ns-rel-checks">
<li><strong>Notificação de Óbito:</strong> ao tentar encaminhar via API, o servidor responde com um erro claro (código 422 / <code>GRAU_DANO_BLOQUEADO</code>), sem completar a ação.</li>
<li><strong>Notificação de Never Event:</strong> ao tentar encaminhar via API, o servidor responde com o mesmo erro claro, sem completar a ação.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Os outros cenários de encaminhamento continuam funcionando:** os testes que cobrem os demais casos dessa mesma tela de encaminhamento (outras regras de negócio e o caso de notificação inexistente) também passaram normalmente — a mudança não quebrou nada que já funcionava.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código da regra foi testado?

<p class="ns-rel-meta">Aqui a cobertura é medida com o sistema rodando de verdade (banco de dados e cache reais), então alguns caminhos raros de erro de infraestrutura são naturalmente mais difíceis de forçar em teste — por isso os números costumam ficar um pouco abaixo dos testes unitários.</p>

<div class="ns-rel-barra" style="--v:96.8%;--meta:80%"><div><span>Linhas de código testadas</span><b>96,80%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:85%"><div><span>Funções testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.84%;--meta:80%"><div><span>Instruções testadas</span><b>96,84%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:94.44%;--meta:80%"><div><span>Caminhos alternativos testados (branches)</span><b>94,44%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Fica de fora principalmente um desvio de lógica raro dentro do serviço de notificação por e-mail do encaminhamento — não afeta o bloqueio em si.</p>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o projeto backend como um todo nos testes de integração — não só esta regra — três das quatro métricas estão bem acima da meta do Plano de Testes. Uma delas ficou levemente abaixo:

<div class="ns-rel-barra" style="--v:92.92%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>92,92%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:91.99%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>91,99%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:95.78%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>95,78%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra ns-rel--warn" style="--v:79.32%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>79,32%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — os caminhos alternativos são a única métrica que ficou levemente abaixo (0,68 p.p.), puxada por módulos fora do escopo desta feature (ex.: configuração do servidor e utilitários compartilhados).</p>

<div class="ns-rel-info" markdown>Os arquivos com menor cobertura no projeto (configuração inicial do servidor, biblioteca de captcha e utilitário de log) **não fazem parte desta funcionalidade** — são pontos de atenção à parte, não um problema introduzido por esta regra.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Frontend — o fluxo completo (tela + servidor) foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/3 · Verificado em 09/09/2026</p>

<div class="ns-rel-alerta"><span class="ns-rel-icone ns-rel--warn">!</span><strong>Este projeto ainda não tem testes de integração automáticos</strong></div>

Assim como não existem testes unitários automáticos nesta tela, também não existem testes de integração automáticos. Isso é especialmente relevante aqui, porque esta tela depende diretamente do servidor: quando o backend recusa o encaminhamento e devolve o código `GRAU_DANO_BLOQUEADO`, a tela precisa mostrar a mensagem certa — e essa combinação (tela + servidor conversando de verdade) ainda não tem um teste automático que confira isso sozinho. Para compensar, duas verificações foram feitas:

<ul class="ns-rel-checks">
<li><strong>Qualidade do código e geração da tela:</strong> nenhum erro de revisão automática e a versão final do site foi gerada com sucesso. (Nenhuma chamada real à API foi feita nessa verificação.)</li>
<li><strong>Teste manual de ponta a ponta:</strong> uma pessoa usou a tela real conversando com o servidor real (já com a regra do backend aplicada), classificou uma notificação como Óbito, clicou em "Encaminhar" e confirmou que a mensagem certa apareceu, com print anexado à PR.</li>
</ul>

<div class="ns-rel-citacao">Esse teste manual de ponta a ponta é, hoje, o único registro de que a integração entre a tela e o servidor realmente funciona para este cenário.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Duas frentes recomendadas para substituir o teste manual por algo automático e repetível:

- **Teste de integração simulado:** simular a resposta de erro do servidor (código 422 / `GRAU_DANO_BLOQUEADO`) e confirmar que a tela mostra a mensagem certa, sem precisar de um servidor real rodando.
- **Teste de ponta a ponta automático:** já existe um projeto de testes *end-to-end* no workspace da equipe (`notifica-saude-e2e`) que pode receber um teste automático cobrindo exatamente esse fluxo: classificar como Óbito/Never Event → tentar encaminhar → conferir a mensagem exibida.

<div class="ns-rel-aviso" markdown>Com qualquer uma dessas duas automações, esse teste passaria a rodar sozinho a cada mudança futura, sem depender de um humano lembrar de repetir o passo a passo manual.</div>

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #3](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/3) | Bloqueio do encaminhamento de Óbito/Never Event no servidor |
| [PR frontend #3](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/3) | Tratamento do bloqueio na tela de encaminhamento |
| `tests/integration/.../encaminhamento.regras.routes.spec.ts` | Casos de teste de integração CT-INT-090-E e CT-INT-090-F (backend) |
| `EncaminhamentoModal.tsx` | Ponto de tratamento do erro `GRAU_DANO_BLOQUEADO` (frontend) |
| `notifica-saude-e2e` | Repositório de testes *end-to-end* sugerido para automatizar o fluxo completo |
| `REL_Cobertura_Integracao_v1_0` | Relatório de cobertura de código da suíte de integração do backend |
| [Relatório unitário](us-2-3-bloqueio-encaminhamento-unitario.md) | `REL_Testes_Unit_CA06_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Int_CA06_v1_0 — compilado a partir dos relatórios de execução de testes de integração de backend e frontend do repositório Notifica-Saude-2026-2, em 09/09/2026.</p>

</div>

</div>
