<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Cobertura de Código

Cobertura de Código - Semestre 2026.1 · Suíte unitária — testes unitários (caixa-branca, Jest)

<div class="ns-rel-pills"><span>Documento <code>REL_Cobertura_Unitario_v1_0</code></span><span>Emissão <em>9 de junho de 2026</em></span><span>Branch <code>main</code></span><span>Commit <code>32ef61f</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Cobertura_Unitario_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de cobertura de integração](cobertura-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 09/06/2026 | Criação do relatório em PDF, gerado por `scripts/gerar-relatorio-cobertura.js`. | Não registrado no PDF original |
    | 1.1 | 06/10/2026 | Migração do PDF para o MkDocs, no modelo padronizado dos relatórios de testes, sem alteração dos resultados; referências apontadas para as páginas do site. | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Sumário executivo

A suíte unitária executou **454 casos de teste**, distribuídos em **64 arquivos**, com aprovação integral. As quatro métricas de cobertura atendem às metas estabelecidas no PLAN_Testes_v2.2. O ponto de menor folga é ramificações: **90,03%** apurado contra meta de 80% (+10,03 p.p.). Módulos que pedem acompanhamento: `middlewares`.

</div>

<div class="ns-rel-card" markdown>

## 2. Resultado global

Cobertura apurada pelo Jest (provider V8) na execução de `npm run test:unit`. Metas globais conforme o [Plano de Testes](../plano-de-testes.md#cobertura) (PLAN_Testes_v2.2). A margem está em pontos percentuais (p.p.) — diferença absoluta entre o percentual apurado e a meta; por exemplo, apurado de 78% com meta de 80% fica 2 p.p. abaixo.

<div class="ns-rel-barra" style="--v:96.44%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>96,44%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:95.94%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>95,94%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.11%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,11%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90.03%;--meta:80%"><div><span>Ramificações (meta: 80%)</span><b>90,03%</b></div><div class="ns-rel-barra__trilho"></div></div>

| Métrica | Cobertos / Total | Apurado | Meta | Margem | Situação |
| --- | --- | --- | --- | --- | --- |
| Linhas | 1004 / 1041 | **96,44%** | 80% | +16,44 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| Instruções | 1042 / 1086 | **95,94%** | 80% | +15,94 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| Funções | 173 / 180 | **96,11%** | 85% | +11,11 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| Ramificações | 687 / 763 | **90,03%** | 80% | +10,03 p.p. | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |

</div>

<div class="ns-rel-card" markdown>

## 3. Cobertura de linhas por módulo

Cobertura agregada por módulo a partir do `coverage-summary.json`. A marca vertical indica a meta de linhas aplicável ao módulo — threshold próprio quando definido no config do Jest, meta do plano (80%) nos demais. Módulos ordenados da menor para a maior cobertura.

<div class="ns-rel-modulos">
<div class="ns-rel-modulo" style="--v:83.33%;--meta:80%"><span>modules/localidade</span><i class="ns-rel-barra__trilho"></i><b>83,3%</b></div>
<div class="ns-rel-modulo ns-rel--erro" style="--v:86.21%;--meta:80%"><span>middlewares</span><i class="ns-rel-barra__trilho"></i><b>86,2%</b></div>
<div class="ns-rel-modulo" style="--v:92.06%;--meta:80%"><span>modules/opcao-campo</span><i class="ns-rel-barra__trilho"></i><b>92,1%</b></div>
<div class="ns-rel-modulo" style="--v:96.43%;--meta:94%"><span>modules/classificacao</span><i class="ns-rel-barra__trilho"></i><b>96,4%</b></div>
<div class="ns-rel-modulo" style="--v:96.73%;--meta:96%"><span>modules/notificacao</span><i class="ns-rel-barra__trilho"></i><b>96,7%</b></div>
<div class="ns-rel-modulo" style="--v:97.37%;--meta:80%"><span>modules/usuario</span><i class="ns-rel-barra__trilho"></i><b>97,4%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:92%"><span>modules/auth</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:80%"><span>modules/campo-formulario</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:100%"><span>modules/encaminhamento</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:80%"><span>modules/setor</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:80%"><span>modules/unidade-saude</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:80%"><span>shared/lib</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:100%"><span>shared/mailer</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:80%"><span>shared/utils</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
<div class="ns-rel-modulo" style="--v:100%;--meta:80%"><span>outros</span><i class="ns-rel-barra__trilho"></i><b>100,0%</b></div>
</div>

<p class="ns-rel-legenda">Cada barra mostra a cobertura de linhas do módulo, mas a cor resume a situação das quatro métricas juntas: <span class="ns-rel-cor--ok">verde</span>, todas dentro da meta; <span class="ns-rel-cor--warn">âmbar</span>, pelo menos uma métrica abaixo da meta em até 10 pontos percentuais; <span class="ns-rel-cor--erro">vermelho</span>, alguma métrica a mais de 10 pontos percentuais da meta.</p>

</div>

<div class="ns-rel-card" markdown>

## 4. Detalhamento por módulo

Valores em percentual, no formato apurado / meta. A coluna Meta indica a origem dos valores de referência: threshold específico do módulo (`jest-unit.config.js`) ou meta global do plano (L 80 · I 80 · F 85 · R 80).

| Módulo | Linhas | Instruções | Funções | Ramificações | Meta | Situação |
| --- | --- | --- | --- | --- | --- | --- |
| <code>modules/<wbr>localidade</code> <small>2 arq.</small> | 83,33 <small>/ 80</small> | 83,33 <small>/ 80</small> | 100,00 <small>/ 85</small> | 88,89 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>middlewares</code> <small>7 arq.</small> | 86,21 <small>/ 80</small> | 86,44 <small>/ 80</small> | <span class="ns-rel-cor--erro">72,22</span> <small>/ 85</small> | <span class="ns-rel-cor--erro">60,78</span> <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--alta">Abaixo</span> |
| <code>modules/<wbr>opcao-campo</code> <small>1 arq.</small> | 92,06 <small>/ 80</small> | 92,31 <small>/ 80</small> | 100,00 <small>/ 85</small> | 85,37 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>classificacao</code> <small>1 arq.</small> | 96,43 <small>/ 94</small> | 91,94 <small>/ 88</small> | 100,00 <small>/ 98</small> | 88,19 <small>/ 84</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>notificacao</code> <small>6 arq.</small> | 96,73 <small>/ 96</small> | 96,34 <small>/ 96</small> | 98,25 <small>/ 98</small> | 90,91 <small>/ 90</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>usuario</code> <small>1 arq.</small> | 97,37 <small>/ 80</small> | 97,44 <small>/ 80</small> | 100,00 <small>/ 85</small> | 94,87 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>auth</code> <small>4 arq.</small> | 100,00 <small>/ 92</small> | 98,86 <small>/ 92</small> | 100,00 <small>/ 98</small> | 94,87 <small>/ 78</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>campo-formulario</code> <small>1 arq.</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 85</small> | 100,00 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>encaminhamento</code> <small>3 arq.</small> | 100,00 <small>/ 100</small> | 100,00 <small>/ 100</small> | 100,00 <small>/ 100</small> | 93,75 <small>/ 85</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>setor</code> <small>1 arq.</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 85</small> | 94,74 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>modules/<wbr>unidade-saude</code> <small>1 arq.</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 85</small> | 100,00 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>shared/<wbr>lib</code> <small>3 arq.</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 85</small> | 88,89 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>shared/<wbr>mailer</code> <small>8 arq.</small> | 100,00 <small>/ 100</small> | 99,28 <small>/ 99</small> | 96,30 <small>/ 95</small> | 97,92 <small>/ 95</small> | threshold do módulo | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>shared/<wbr>utils</code> <small>1 arq.</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 85</small> | 100,00 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |
| <code>outros</code> <small>1 arq.</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 80</small> | 100,00 <small>/ 85</small> | 100,00 <small>/ 80</small> | meta do plano | <span class="ns-nivel ns-nivel--baixa">Atingida</span> |

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
| [REL_Cobertura_Integracao_v1_0](cobertura-integracao.md) | Relatório de cobertura de integração |

<p class="ns-rel-rodape">REL_Cobertura_Unitario_v1_0 — gerado por <code>scripts/gerar-relatorio-cobertura.js</code> a partir de <code>coverage/unit/coverage-summary.json</code>. Painel Codecov, flag <code>unit</code>.</p>

</div>

</div>
