<div class="ns-rel" markdown>

<div class="ns-rel-hero" markdown>

<div class="ns-rel-hero__marca" markdown>![NotificaSaúde](../../assets/favicon.png)<span>NOTIFICA<br>SAÚDE</span></div>

# Relatório de Testes de Integração

Épico 1 - Verificação de Captcha · Cloudflare Turnstile

<div class="ns-rel-pills"><span>Documento <code>REL_Testes_Int_Captcha_v1_0</code></span><span>Emissão <em>9 de setembro de 2026</em></span><span>Feature branch <code>feat/12/implementa-captcha-cloudflare</code></span></div>

</div>

<div class="ns-rel-baixar" markdown>[:material-file-pdf-box: Baixar em PDF](../../assets/vvt/relatorios-testes/REL_Testes_Int_Captcha_v1_0.pdf){ .md-button } [:material-file-document-outline: Relatório unitário](issue-12-captcha-unitario.md){ .md-button }</div>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 09/09/2026 | Criação do relatório em PDF. | Não registrado no PDF original |
    | 1.1 | 06/10/2026 | Migração do PDF para o MkDocs, no modelo padronizado dos relatórios de testes, sem alteração dos resultados. | Brenno Ostemberg |

<div class="ns-rel-card" markdown>

## 1. Resumo em uma olhada

<div class="ns-rel-aviso" markdown>**Diferença para o relatório unitário:** testes unitários conferem uma peça isolada do sistema; testes de integração conferem se as peças realmente conversam entre si — aqui, as requisições passam de verdade por um banco de dados (Postgres) e um cache (Redis) rodando em containers, como aconteceria em produção.</div>

Esta é a funcionalidade que adiciona um **captcha (Cloudflare Turnstile)** ao sistema, para impedir que robôs ou scripts automatizados façam login ou enviem notificações no lugar de pessoas reais. Veja como cada parte do sistema se saiu ao testar o fluxo completo, com o sistema todo de pé:

<div class="ns-rel-situacao">
<div><span class="ns-rel-icone">✓</span><strong>Backend (servidor)</strong><span>Testado automaticamente, de ponta a ponta.<br>Todos os testes passaram, com o banco de dados e o cache reais no ar.</span></div>
<div class="ns-rel--warn"><span class="ns-rel-icone">!</span><strong>Frontend (tela)</strong><span>Sem testes de integração automáticos.<br>Verificado manualmente com chaves de teste da Cloudflare.</span></div>
</div>

Em resumo: **a verificação do captcha continua funcionando quando o sistema todo está de pé** — servidor, banco de dados e cache reais. Na tela, o comportamento também foi conferido manualmente e está correto, mas ainda depende de alguém repetir esse teste à mão — a própria equipe já registrou isso como pendência.

</div>

<div class="ns-rel-card" markdown>

## 2. Backend — o fluxo completo foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/4 · Executado em 09/09/2026 · Infraestrutura real usada: Postgres e Redis, rodando em containers Docker</p>

<div class="ns-rel-placar">
<div><strong>311</strong><span>testes executados</span></div>
<div><strong>311</strong><span>testes aprovados</span></div>
<div><strong>0</strong><span>testes com falha</span></div>
</div>

### O arquivo de teste que exercita o captcha na prática

<ul class="ns-rel-checks">
<li><strong>Envio de notificação com verificação de captcha:</strong> a rota real de envio de notificação foi testada considerando a checagem de captcha — todos os cenários passaram.</li>
</ul>

<div class="ns-rel-aviso" markdown>**Detalhe técnico importante:** nesses testes, a checagem contra a Cloudflare fica desligada por padrão (ambiente de teste), e os cenários que precisam simular o captcha "ligado" fazem isso de forma controlada, sem depender da internet ou dos servidores reais da Cloudflare — assim os testes rodam rápido e de forma confiável.</div>

</div>

<div class="ns-rel-card" markdown>

## 3. Quanto do código do captcha foi testado?

<p class="ns-rel-meta">"Cobertura" mede quanto do código foi de fato exercitado pelos testes — quanto mais próximo de 100%, menor a chance de um bug passar despercebido.</p>

<div class="ns-rel-barra" style="--v:92.3%;--meta:80%"><div><span>Verificação automática nas requisições — linhas testadas</span><b>92,30%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:87.5%;--meta:80%"><div><span>Verificação automática nas requisições — caminhos alternativos</span><b>87,50%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">Faltam 2 linhas de um desvio raro (67-68) sem cobertura nesta suíte.</p>

<div class="ns-rel-barra ns-rel--warn" style="--v:62.5%;--meta:80%"><div><span>Validação do token — linhas testadas</span><b>62,50%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra ns-rel--warn" style="--v:20%;--meta:80%"><div><span>Validação do token — caminhos alternativos</span><b>20%</b></div><div class="ns-rel-barra__trilho"></div></div>

<div class="ns-rel-info" markdown>**Números baixos aqui são esperados e não indicam problema:** os cenários reais de sucesso/erro da comunicação com a Cloudflare (rede fora do ar, demora, erro do servidor) já são cobertos nos testes unitários, de forma simulada. Nos testes de integração, essa parte roda principalmente com a checagem desligada, então grande parte desse arquivo não precisa ser exercitada aqui — isso já está coberto em outra camada de teste.</div>

</div>

<div class="ns-rel-card" markdown>

## 4. E o resto do sistema (backend), como está?

Olhando o projeto backend como um todo nos testes de integração — não só esta funcionalidade — três das quatro métricas estão bem acima da meta do Plano de Testes. Uma delas ficou levemente abaixo:

<div class="ns-rel-barra" style="--v:92.92%;--meta:80%"><div><span>Linhas (meta: 80%)</span><b>92,92%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:91.99%;--meta:80%"><div><span>Instruções (meta: 80%)</span><b>91,99%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra" style="--v:95.78%;--meta:85%"><div><span>Funções (meta: 85%)</span><b>95,78%</b></div><div class="ns-rel-barra__trilho"></div></div>
<div class="ns-rel-barra ns-rel--warn" style="--v:79.32%;--meta:80%"><div><span>Caminhos alternativos (meta: 80%)</span><b>79,32%</b></div><div class="ns-rel-barra__trilho"></div></div>

<p class="ns-rel-legenda">A linha cinza marca a meta de cada métrica — os caminhos alternativos são a única métrica que ficou levemente abaixo (0,68 p.p.). A biblioteca de captcha é uma das que mais puxa essa média para baixo, pelo motivo explicado na seção anterior — não é uma falha desta funcionalidade, é uma característica de como o teste foi desenhado.</p>

</div>

<div class="ns-rel-card" markdown>

## 5. Frontend — o fluxo completo (tela + servidor) foi testado?

<p class="ns-rel-meta">PR: github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/4 · Verificado em 09/09/2026</p>

<div class="ns-rel-alerta"><span class="ns-rel-icone ns-rel--warn">!</span><strong>Este projeto ainda não tem testes de integração automáticos</strong></div>

Assim como não existem testes unitários automáticos nesta tela, também não existem testes de integração automáticos — nem testando os componentes juntos, nem testando contra o servidor real. A própria PR documenta isso como uma pendência conhecida. Os comportamentos abaixo dependem de integração e hoje só foram conferidos manualmente:

<ul class="ns-rel-checks">
<li>O widget do captcha só aparece na última etapa do formulário (com a chave de site configurada), e o botão "Enviar notificação" só libera depois que ele é resolvido.</li>
<li>O comprovante do captcha é enviado junto com a notificação, sem alterar o restante dos dados enviados.</li>
<li>Em caso de recusa da Cloudflare ou falha no envio, a tela mostra uma mensagem própria de erro e reinicia o captcha, descartando o comprovante antigo.</li>
</ul>

Para compensar a ausência de testes automáticos, duas verificações foram feitas:

<ul class="ns-rel-checks">
<li><strong>Qualidade do código e geração da tela:</strong> nenhum erro de revisão automática e a versão final do site foi gerada com sucesso.</li>
<li><strong>Teste manual com chaves de teste da Cloudflare:</strong> o fluxo foi conferido à mão usando pares de chave feitos especialmente para simular o captcha em ambiente de teste.</li>
</ul>

<div class="ns-rel-citacao">Nenhuma chamada real foi feita contra os servidores da Cloudflare nem contra a API do backend durante essa verificação — é apenas uma confirmação de que o código compila e está correto, não uma prova de que a integração real funciona.</div>

</div>

<div class="ns-rel-card" markdown>

## 6. O que falta fazer

Duas frentes recomendadas para substituir o teste manual por algo automático e repetível — nenhuma delas estava no escopo desta PR:

- **Teste de integração simulado:** usar uma ferramenta de simulação de rede (como MSW) para testar o envio de notificação com e sem o comprovante do captcha, sem depender de servidores reais.
- **Teste de ponta a ponta automático:** já existe um projeto de testes *end-to-end* no workspace da equipe (`notifica-saude-e2e`) que pode receber um teste automático cobrindo o fluxo completo com as chaves de teste da Cloudflare.

<div class="ns-rel-aviso" markdown>Com qualquer uma dessas duas automações, essas verificações passariam a rodar sozinhas a cada mudança futura, sem depender de um humano lembrar de testar tudo manualmente de novo.</div>

</div>

<div class="ns-rel-card" markdown>

## 7. Referências

| Artefato | Descrição |
| --- | --- |
| [PR backend #4](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/4) | Validação do captcha no servidor |
| [PR frontend #4](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/4) | Widget do captcha na tela |
| `tests/integration/.../notificacao.turnstile.routes.spec.ts` | Teste de integração do envio de notificação com verificação de captcha (backend) |
| `services/notificacao.service.ts` / `useNotificacao.ts` | Pontos de integração do captcha com o envio de notificação (frontend, sem teste automático) |
| `notifica-saude-e2e` | Repositório de testes *end-to-end* sugerido para automatizar o fluxo completo |
| [Relatório unitário](issue-12-captcha-unitario.md) | `REL_Testes_Unit_Captcha_v1_0` |

<p class="ns-rel-rodape">REL_Testes_Int_Captcha_v1_0 — compilado a partir dos relatórios de execução de testes de integração de backend e frontend do repositório Notifica-Saude-2026-2, em 09/09/2026.</p>

</div>

</div>
