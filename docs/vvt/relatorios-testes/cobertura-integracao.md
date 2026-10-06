<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Cobertura de Código

Cobertura de Código - Semestre 2026.1 · Suíte de integração — testes de integração (caixa-cinza, Jest + PostgreSQL + Redis)

<div class="ns-rel-pills"><span>Documento <code>REL_Cobertura_Integracao_v1_0</code></span><span>Emissão <em>9 de junho de 2026</em></span><span>Branch <code>main</code></span><span>Commit <code>32ef61f</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Cobertura_Integracao_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de cobertura unitária](cobertura-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 09/06/2026 | Criação do relatório em PDF, gerado por `scripts/gerar-relatorio-cobertura.js`. | Não registrado no PDF original |
    | 1.1 | 06/10/2026 | Migração do PDF para o MkDocs, no modelo padronizado dos relatórios de testes, sem alteração dos resultados; referências apontadas para as páginas do site. | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Sumário executivo

A suíte de integração executou **251 casos de teste**, distribuídos em **45 arquivos**, com aprovação integral. As quatro métricas de cobertura atendem às metas estabelecidas no PLAN_Testes_v2.2. O ponto de menor folga é ramificações: **80,02%** apurado contra meta de 80% (+0,02 p.p.). Módulos que pedem acompanhamento: `outros`, `modules/localidade`, `modules/opcao-campo`, `modules/setor`, `modules/unidade-saude`, `shared/lib` e `shared/utils`.

</div>

<div class="ns-rel-card" markdown>

## 2. Resultado global

Cobertura apurada pelo Jest (provider V8) na execução de `npm run test:int`. Metas globais conforme o [Plano de Testes](../plano-de-testes.md#cobertura) (PLAN_Testes_v2.2). A margem está em pontos percentuais (p.p.) — diferença absoluta entre o percentual apurado e a meta; por exemplo, apurado de 78% com meta de 80% fica 2 p.p. abaixo.

<div class="ns-rel-barra" style="--v:93.47%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>93,47%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:92.57%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>92,57%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:95.33%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>95,33%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:80.02%;--meta:80%"><div><span>Ramificações (meta: 80%)</span><b>80,02%</b></div><div class="ns-rel-barra__trilho"></div></div>

| Métrica | Cobertos / Total | Apurado | Meta | Margem | Situação |
| --- | --- | --- | --- | --- | --- |
| Linhas | 1489 / 1593 | **93,47%** | 80% | +13,47 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| Instruções | 1522 / 1644 | **92,57%** | 80% | +12,57 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| Funções | 286 / 300 | **95,33%** | 85% | +10,33 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| Ramificações | 661 / 826 | **80,02%** | 80% | +0,02 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |

</div>

<div class="ns-rel-card" markdown>

## 3. Cobertura de linhas por módulo

Cobertura agregada por módulo a partir do `coverage-summary.json`. A marca vertical indica a meta de linhas aplicável ao módulo — threshold próprio quando definido no config do Jest, meta do plano (80%) nos demais. Módulos ordenados da menor para a maior cobertura.

<div class="ns-rel-modulos">
<div class="ns-rel-modulo ns-rel--erro" style="--v:64.81%;--meta:80%"><span>shared/lib</span><i class="ns-rel-barra__trilho"></i><b>64,8%</b></div>
<div class="ns-rel-modulo ns-rel--erro" style="--v:85.71%;--meta:80%"><span>shared/utils</span><i class="ns-rel-barra__trilho"></i><b>85,7%</b></div>
<div class="ns-rel-modulo" style="--v:86.36%;--meta:80%"><span>modules/admin</span><i class="ns-rel-barra__trilho"></i><b>86,4%</b></div>
<div class="ns-rel-modulo ns-rel--erro" style="--v:88.89%;--meta:80%"><span>outros</span><i class="ns-rel-barra__trilho"></i><b>88,9%</b></div>
<div class="ns-rel-modulo ns-rel--warn" style="--v:92.19%;--meta:80%"><span>modules/unidade-saude</span><i class="ns-rel-barra__trilho"></i><b>92,2%</b></div>
<div class="ns-rel-modulo ns-rel--warn" style="--v:92.31%;--meta:80%"><span>modules/localidade</span><i class="ns-rel-barra__trilho"></i><b>92,3%</b></div>
<div class="ns-rel-modulo ns-rel--warn" style="--v:92.59%;--meta:80%"><span>modules/setor</span><i class="ns-rel-barra__trilho"></i><b>92,6%</b></div>
<div class="ns-rel-modulo" style="--v:93.51%;--meta:80%"><span>modules/usuario</span><i class="ns-rel-barra__trilho"></i><b>93,5%</b></div>
<div class="ns-rel-modulo" style="--v:93.62%;--meta:80%"><span>modules/campo-formulario</span><i class="ns-rel-barra__trilho"></i><b>93,6%</b></div>
<div class="ns-rel-modulo" style="--v:93.76%;--meta:91%"><span>modules/notificacao</span><i class="ns-rel-barra__trilho"></i><b>93,8%</b></div>
<div class="ns-rel-modulo ns-rel--warn" style="--v:94.02%;--meta:80%"><span>modules/opcao-campo</span><i class="ns-rel-barra__trilho"></i><b>94,0%</b></div>
<div class="ns-rel-modulo" style="--v:96.67%;--meta:90%"><span>modules/encaminhamento</span><i class="ns-rel-barra__trilho"></i><b>96,7%</b></div>
<div class="ns-rel-modulo" style="--v:96.88%;--meta:95%"><span>modules/classificacao</span><i class="ns-rel-barra__trilho"></i><b>96,9%</b></div>
<div class="ns-rel-modulo" style="--v:97.46%;--meta:94%"><span>modules/auth</span><i class="ns-rel-barra__trilho"></i><b>97,5%</b></div>
<div class="ns-rel-modulo" style="--v:98.28%;--meta:80%"><span>middlewares</span><i class="ns-rel-barra__trilho"></i><b>98,3%</b></div>
<div class="ns-rel-modulo" style="--v:99.07%;--meta:90%"><span>shared/mailer</span><i class="ns-rel-barra__trilho"></i><b>99,1%</b></div>
</div>

<p class="ns-rel-legenda">Cada barra mostra a cobertura de linhas do módulo, mas a cor resume a situação das quatro métricas juntas: <span class="ns-rel-cor--ok">verde</span>, todas dentro da meta; <span class="ns-rel-cor--warn">âmbar</span>, pelo menos uma métrica abaixo da meta em até 10 pontos percentuais; <span class="ns-rel-cor--erro">vermelho</span>, alguma métrica a mais de 10 pontos percentuais da meta.</p>

</div>

<div class="ns-rel-card" markdown>

## 4. Detalhamento por módulo

Valores em percentual, no formato apurado / meta. A coluna Meta indica a origem dos valores de referência: threshold específico do módulo (`jest-int.config.js`) ou meta global do plano (L 80 · I 80 · F 85 · R 80).

| Módulo | Linhas | Instruções | Funções | Ramificações | Meta | Situação |
| --- | --- | --- | --- | --- | --- | --- |
| <code>shared/<wbr>lib</code> <small>3 arq.</small> | <span class="ns-rel-cor--erro">64,81</span> <small>/ 80</small> | <span class="ns-rel-cor--erro">65,45</span> <small>/ 80</small> | <span class="ns-rel-cor--erro">38,46</span> <small>/ 85</small> | <span class="ns-rel-cor--erro">50,00</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--alta">Abaixo</span> |
| <code>shared/<wbr>utils</code> <small>1 arq.</small> | 85,71 <small>/ 80</small> | 85,71 <small>/ 80</small> | <span class="ns-rel-cor--erro">50,00</span> <small>/ 85</small> | <span class="ns-rel-cor--erro">22,22</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--alta">Abaixo</span> |
| <code>modules/<wbr>admin</code> <small>1 arq.</small> | 86,36 <small>/ 80</small> | 84,44 <small>/ 80</small> | 80,00 <small>/ 80</small> | 62,50 <small>/ 40</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>outros</code> <small>2 arq.</small> | 88,89 <small>/ 80</small> | 88,89 <small>/ 80</small> | <span class="ns-rel-cor--warn">77,78</span> <small>/ 85</small> | <span class="ns-rel-cor--erro">12,50</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--alta">Abaixo</span> |
| <code>modules/<wbr>unidade-saude</code> <small>3 arq.</small> | 92,19 <small>/ 80</small> | 92,19 <small>/ 80</small> | 100,00 <small>/ 85</small> | <span class="ns-rel-cor--warn">73,33</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--media">Atenção</span> |
| <code>modules/<wbr>localidade</code> <small>4 arq.</small> | 92,31 <small>/ 80</small> | 92,31 <small>/ 80</small> | 100,00 <small>/ 85</small> | <span class="ns-rel-cor--warn">77,78</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--media">Atenção</span> |
| <code>modules/<wbr>setor</code> <small>3 arq.</small> | 92,59 <small>/ 80</small> | 91,46 <small>/ 80</small> | 100,00 <small>/ 85</small> | <span class="ns-rel-cor--warn">71,43</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--media">Atenção</span> |
| <code>modules/<wbr>usuario</code> <small>3 arq.</small> | 93,51 <small>/ 80</small> | 93,59 <small>/ 80</small> | 100,00 <small>/ 85</small> | 80,00 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>campo-formulario</code> <small>3 arq.</small> | 93,62 <small>/ 80</small> | 93,75 <small>/ 80</small> | 95,24 <small>/ 85</small> | 91,07 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>notificacao</code> <small>8 arq.</small> | 93,76 <small>/ 91</small> | 92,34 <small>/ 90</small> | 100,00 <small>/ 95</small> | 80,13 <small>/ 78</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>opcao-campo</code> <small>3 arq.</small> | 94,02 <small>/ 80</small> | 94,12 <small>/ 80</small> | 100,00 <small>/ 85</small> | <span class="ns-rel-cor--warn">75,61</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--media">Atenção</span> |
| <code>modules/<wbr>encaminhamento</code> <small>5 arq.</small> | 96,67 <small>/ 90</small> | 96,70 <small>/ 90</small> | 100,00 <small>/ 90</small> | 93,75 <small>/ 80</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>classificacao</code> <small>3 arq.</small> | 96,88 <small>/ 95</small> | 94,12 <small>/ 91</small> | 100,00 <small>/ 95</small> | 86,86 <small>/ 84</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>auth</code> <small>6 arq.</small> | 97,46 <small>/ 94</small> | 94,31 <small>/ 89</small> | 100,00 <small>/ 95</small> | 78,05 <small>/ 74</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>middlewares</code> <small>7 arq.</small> | 98,28 <small>/ 80</small> | 98,31 <small>/ 80</small> | 100,00 <small>/ 85</small> | 86,27 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>shared/<wbr>mailer</code> <small>7 arq.</small> | 99,07 <small>/ 90</small> | 98,17 <small>/ 90</small> | 100,00 <small>/ 90</small> | 84,00 <small>/ 80</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |

</div>

<div class="ns-rel-card" markdown>

## 5. Referências

Este relatório cobre exclusivamente as suítes unitária e de integração do backend; resultados de testes E2E e não-funcionais constam no REL_Nao_Funcionais_v2.0. A rastreabilidade dos fluxos críticos por caso de teste está em `tests/COBERTURA.md`, e os thresholds por módulo em `jest-unit.config.js` / `jest-int.config.js`, no repositório do backend.

| Artefato | Descrição |
| --- | --- |
| [PLAN_Testes_v2.2](../plano-de-testes.md) | Plano de testes — metas de cobertura e estratégia |
| [DOC_Casos_de_Teste_v4.3](../casos-de-teste.md) | Especificação dos casos de teste |
| [DOC_Matriz_Rastreabilidade_v1.0](../matriz-rastreabilidade.md) | Rastreabilidade requisito × caso de teste |
| [REL_Bugs_v1.0](../relatorio-bugs.md) | Relato de defeitos |
| [REL_Nao_Funcionais_v2.0](../relatorio-nao-funcionais.md) | Resultados dos testes não-funcionais e E2E |
| Wiki de Testes | Documentação viva da equipe de testes |
| Pasta VV&T | Repositório dos artefatos de verificação e validação (Drive) |
| Painel Codecov | Acompanhamento contínuo da cobertura por flag (unit/integration) |
| [REL_Cobertura_Unitario_v1_0](cobertura-unitario.md) | Relatório de cobertura unitária |

<p class="ns-rel-rodape">REL_Cobertura_Integracao_v1_0 — gerado por <code>scripts/gerar-relatorio-cobertura.js</code> a partir de <code>coverage/integration/coverage-summary.json</code>. Painel Codecov, flag <code>integration</code>.</p>

</div>

</div>
