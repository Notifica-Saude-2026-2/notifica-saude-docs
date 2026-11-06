<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes Unitários

Épico 1 - Verificação de Captcha · Cloudflare Turnstile

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Unit_Captcha_v1_0</code></span><span>Emissão <em>9 de setembro de 2026</em></span><span>Feature branch <code>feat/12/implementa-captcha-cloudflare</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Unit_Captcha_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório de integração](issue-12-captcha-integracao.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 09/09/2026 | Criação do relatório em PDF. | Não registrado no PDF original |
    | 1.1 | 06/10/2026 | Migração do PDF para o MkDocs, no modelo padronizado dos relatórios de testes, sem alteração dos resultados. | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

Esta é a funcionalidade que adiciona um **captcha (Cloudflare Turnstile)** ao sistema, para impedir que robôs ou scripts automatizados façam login ou preencham formulários no lugar de pessoas reais. Veja como cada parte do sistema se saiu:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente.<br>Todos os testes passaram, incluindo os arquivos que validam o captcha.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Frontend (tela)</strong><span>Sem testes automáticos ainda.<br>Foi conferido manualmente e passou, mas recomenda-se automatizar.</span></div>
</div>

Em resumo: **a verificação do captcha funciona e foi comprovada no servidor**, que é onde o token do captcha é de fato validado antes de qualquer ação sensível prosseguir. Na tela, o widget de captcha também foi conferido e está correto, só que hoje isso depende de alguém testar manualmente — a própria equipe já registrou como dívida técnica automatizar esses testes.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o servidor foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/4 · Executado em 09/09/2026</p>

<div class="ns-rel-placar">
<div><strong>565</strong><span>testes executados</span></div>
<div><strong>565</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### Os arquivos específicos desta funcionalidade têm testes dedicados

<ul class="ns-rel-checks">
<li><strong>Validação do token do captcha</strong> (biblioteca compartilhada que fala com a Cloudflare): todos os testes passaram.</li>
<li><strong>Verificação automática nas requisições</strong> (camada que barra a ação se o captcha não for válido): todos os testes passaram.</li>
</ul>

<div class="ns-rel-aviso" markdown>**O que isso garante?** Toda vez que alguém tenta fazer uma ação protegida (como login), o servidor confirma com a Cloudflare que quem está do outro lado é uma pessoa real, e essa checagem já está coberta por testes automáticos.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código do captcha foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido.</p>

<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Verificação automática nas requisições — linhas testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Verificação automática nas requisições — caminhos alternativos</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:100%;--meta:80%"><div><span>Validação do token — linhas testadas</span><b>100%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90%;--meta:80%"><div><span>Validação do token — caminhos alternativos</span><b>90%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Falta apenas 1 linha (linha 83) de um desvio de lógica pouco comum sem cobertura de teste — não afeta o funcionamento normal da checagem do captcha.</p>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o projeto backend como um todo — não só esta funcionalidade — a cobertura de testes também está alta e **acima da meta do Plano de Testes em todas as métricas**:

<div class="ns-rel-barra" style="--v:96.96%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>96,96%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.29%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>96,29%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:96.33%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>96,33%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:90.64%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>90,64%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — todas as barras já passaram dela.</p>

<div class="ns-rel-info" markdown>Dois arquivos do sistema (tratamento de erros e métricas) ainda têm cobertura baixa, mas **nenhum dos dois foi alterado por esta funcionalidade** — são pontos de atenção separados, não um problema desta feature.</div>

</div>

<div class="ns-rel-card" markdown>

## 5. Frontend — e a tela, foi testada?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/4 · Verificado em 09/09/2026</p>

<div class="ns-rel-alerta"><span class="ns-rel-icone ns-rel--warn">!</span><strong>Este projeto ainda não tem testes automáticos de tela</strong></div>

Isso significa que, hoje, ninguém "aperta um botão" para o computador conferir sozinho se o widget do captcha está funcionando na tela — é preciso um humano testar manualmente. A própria equipe já reconheceu isso na descrição da PR:

<div class="ns-rel-citacao">"Sem testes automatizados. O repo não tem test runner instalado — o package.json só traz lint/fmt/build. A verificação foi manual, com os pares de chave de teste do Cloudflare, mais type-check e lint. Instalar um runner fica como dívida técnica registrada na mini-spec."</div>

Para compensar a ausência de testes automáticos, três verificações foram feitas:

<ul class="ns-rel-checks">
<li><strong>Qualidade do código:</strong> nenhum problema encontrado pela revisão automática do código (0 avisos, 0 erros).</li>
<li><strong>Geração da versão final do site:</strong> concluída sem erros — a tela compila e está pronta para uso.</li>
<li><strong>Teste manual no navegador:</strong> o widget do captcha foi testado à mão usando as chaves de teste da própria Cloudflare, feitas exatamente para simular esse tipo de verificação.</li>
</ul>

<p class="ns-rel-legenda">Arquivos da tela que ainda não têm teste automático: o componente visual do captcha, o script que carrega o captcha da Cloudflare, e os ajustes no fluxo de notificação e login que passaram a exigir o captcha.</p>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Instalar uma ferramenta de testes automáticos para a tela (Vitest é o caminho mais natural, já que o projeto usa Vite) e cobrir pelo menos dois comportamentos:

- **O carregamento do script do captcha** — incluindo o que acontece se ele falhar ao carregar.
- **O componente visual do captcha** — se ele aparece corretamente e se reinicia quando dá erro ou expira.

<div class="ns-rel-aviso" markdown>Essa pendência já está registrada pela própria equipe como dívida técnica, na mini-spec `docs/specs/2026-08-25-turnstile-frontend.md`.</div>

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #4](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/4) | Validação do captcha no servidor |
| [PR frontend #4](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/4) | Widget do captcha na tela |
| `tests/unit/shared/turnstile.spec.ts` | Testes unitários da validação do token do captcha (backend) |
| `tests/unit/middlewares/turnstile.middleware.spec.ts` | Testes unitários da verificação automática nas requisições (backend) |
| `Turnstile.tsx` / `loadTurnstileScript.ts` | Componente e carregador do widget de captcha (frontend, sem teste automático) |
| `docs/specs/2026-08-25-turnstile-frontend.md` | Mini-spec com a dívida técnica de testes do frontend registrada |
| [Relatório de integração](issue-12-captcha-integracao.md) | `REL_Testes_Int_Captcha_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Unit_Captcha_v1_0 — compilado a partir dos relatórios de execução de testes unitários de backend e frontend do repositório Notifica-Saude-2026-2, em 09/09/2026.</p>

</div>

</div>
