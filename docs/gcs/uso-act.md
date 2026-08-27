<h1 align="center">Uso do act — Execução Local da Esteira de CI</h1>


<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Introdução](#introducao)
- [2. Pré-requisitos](#pre-requisitos)
- [3. Instalação](#instalacao)
- [4. Configuração inicial](#configuracao)
- [5. Onde rodar o act](#onde-rodar)
- [6. Listando os jobs](#listando)
- [7. Configurando os secrets](#secrets)
- [8. Esteira do backend](#backend)
- [9. Esteira do frontend](#frontend)
- [10. O job que não deve ser executado localmente](#notify)
- [11. Como ler a saída](#saida)
- [12. Resolução de problemas](#problemas)
- [13. Checklist antes de abrir um Pull Request](#checklist)
- [14. Referências](#referencias)

---

<a id="introducao"></a>

## 1. Introdução

Este documento é voltado a quem **nunca usou o act**. Não é preciso conhecer GitHub Actions a fundo — os conceitos necessários estão explicados no caminho.

A cada *push* ou *pull request*, o GitHub executa automaticamente uma sequência de verificações — lint, *type-check*, testes e build. Esse conjunto é a **esteira de CI**, descrita nos arquivos dentro de `.github/workflows/`. A política de uso das pipelines está em [Gerenciamento de Pipelines de CI](pipelines-ci.md).

O problema do fluxo normal é o tempo de resposta:

```
commit → push → abre PR → espera 4 min → ❌ falhou no lint → corrige → push → espera de novo...
```

O **act** ([nektos/act](https://github.com/nektos/act)) roda **os mesmos workflows na sua máquina**, dentro de containers Docker que imitam o runner do GitHub. A falha aparece em segundos, antes de abrir o PR. Isso também reduz o consumo dos minutos gratuitos do GitHub Actions.

!!! note "Validação deste documento"

    Todos os comandos, mensagens de erro e saídas reproduzidas aqui foram obtidos executando a esteira de verdade em 25/08/2026 (act 0.2.89, Docker Engine 27.2.0, Windows 11). Não são exemplos genéricos. As exceções — três afirmações não verificadas — estão assinaladas no texto.

### Vocabulário mínimo

| Termo | O que é |
| --- | --- |
| **Workflow** | Um arquivo `.yml` em `.github/workflows/`. Ex.: `qualidade.yml` |
| **Job** | Uma etapa independente dentro do workflow. Ex.: `qualidade`, `unit-tests` |
| **Step** | Um comando dentro do job. Ex.: `npm ci`, `npm run lint` |
| **Event** | O gatilho que dispara o workflow. Ex.: `pull_request`, `push` |
| **Secret** | Valor sensível (token, senha) injetado pelo GitHub. Ex.: `DISCORD_WEBHOOK` |
| **Runner** | A máquina que executa o job. No GitHub é o `ubuntu-latest`; no act é um container |

---

<a id="pre-requisitos"></a>

## 2. Pré-requisitos

| Ferramenta | Por que é necessária |
| --- | --- |
| **Docker Desktop** | O act executa cada job dentro de um container. Sem Docker, o act não funciona |
| **Git** | Para clonar os repositórios |
| ~8 GB livres em disco | A imagem do runner tem ~1,5 GB e as dependências são baixadas dentro dela |

!!! warning "O Docker Desktop precisa estar aberto e rodando, não apenas instalado"

    Esse é o erro mais comum de quem começa. Confirme com:

    ```bash
    docker info
    ```

    Se aparecer a versão do servidor, está tudo certo. Se aparecer `error during connect: ... The system cannot find the file specified`, abra o Docker Desktop e espere o ícone da baleia ficar estável antes de continuar.

---

<a id="instalacao"></a>

## 3. Instalação

### 3.1 Windows

```powershell
winget install nektos.act
```

!!! warning "O comando `act` não vai funcionar imediatamente"

    Depois de instalar, é muito comum ver:

    ```
    act : O termo 'act' não é reconhecido como nome de cmdlet, função...
    ```

    **Isso não significa que a instalação falhou.** O winget adiciona o act ao `PATH`, mas terminais que **já estavam abertos** continuam usando uma cópia antiga do ambiente — o Windows não atualiza processos em execução.

    **Solução definitiva:** feche o VS Code por completo (não só a aba do terminal — terminais novos herdam o ambiente do VS Code, que também está desatualizado) e abra de novo.

    **Solução imediata, sem reiniciar** — cole no PowerShell:

    ```powershell
    $env:PATH = [Environment]::GetEnvironmentVariable('PATH','Machine') + ';' + [Environment]::GetEnvironmentVariable('PATH','User')
    ```

### 3.2 macOS

```bash
brew install act
```

Em Macs com chip Apple Silicon, acrescente `--container-architecture linux/amd64` a todos os comandos `act`, ou deixe isso fixo no `.actrc` (seção 4).

### 3.3 Linux

```bash
curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash -s -- -b /usr/local/bin
```

!!! note "Não verificado"

    Os procedimentos de macOS e Linux não puderam ser testados — a validação foi feita em Windows.

### 3.4 Validando a instalação

```bash
act --version
```

Saída esperada (a versão pode ser mais nova):

```
act version 0.2.89
```

---

<a id="configuracao"></a>

## 4. Configuração inicial

O `.actrc`, criado na pasta de usuário, guarda opções aplicadas a todas as execuções. No NotificaSaúde ele precisa de **duas** linhas:

```
-P ubuntu-latest=catthehacker/ubuntu:act-latest
--env npm_config_ignore_scripts=true
```

**Windows (PowerShell):**

```powershell
@('-P ubuntu-latest=catthehacker/ubuntu:act-latest', '--env npm_config_ignore_scripts=true') | Out-File -Encoding utf8 "$env:USERPROFILE\.actrc"
```

**macOS / Linux:**

```bash
printf -- '-P ubuntu-latest=catthehacker/ubuntu:act-latest\n--env npm_config_ignore_scripts=true\n' > ~/.actrc
```

Confira com `Get-Content "$env:USERPROFILE\.actrc"` (Windows) ou `cat ~/.actrc` — devem aparecer as duas linhas.

### 4.1 O que cada linha faz

**`-P ubuntu-latest=...`** define qual imagem usar onde o workflow pedir `ubuntu-latest`. A `catthehacker/ubuntu:act-latest` é a recomendada pelo projeto act e traz Node, Python, Git e utilitários. Sem essa linha, o act pergunta na primeira execução qual imagem usar (Micro/Medium/Large) — e a **Micro** não tem as ferramentas que os nossos workflows exigem.

**`--env npm_config_ignore_scripts=true`** é um **ajuste obrigatório neste projeto**. Sem ele, nenhum job roda.

!!! danger "Sem `npm_config_ignore_scripts`, todo job falha no `npm ci`"

    O erro é este, e não tem relação com o seu código:

    ```
    > notifica-saude-frontend@1.0.0 prepare
    > lefthook install

    │  > git rev-parse --path-format=absolute --show-toplevel --git-path hooks --git-path info --git-dir
    │    fatal: not a git repository: (null)

    npm error command failed
    npm error command sh -c lefthook install
    ❌  Failure - Main Instalar dependências
    ```

    **Por quê:** backend e frontend têm `"prepare": "lefthook install"` no `package.json`, e o npm executa o `prepare` ao final de todo `npm ci`. O `lefthook install` exige um repositório Git — mas o `actions/checkout` **não clona nada no act**: ele copia os arquivos para dentro do container com `docker cp`. Como os nossos repositórios são submódulos, o `.git` deles é um *arquivo* apontando para `../.git/modules/...`, caminho que não existe dentro do container. No GitHub o problema não aparece porque lá o checkout faz um clone real.

    **É seguro pular os scripts?** Sim, para validar a esteira. O `prepare` só instala *hooks* de Git locais — não afeta lint, build nem testes. Passos explícitos do workflow, como o `npx prisma generate`, continuam executando.

    **Uma variação que NÃO funciona:** `--env LEFTHOOK=0` parece resolver, mas o lefthook 2.x ignora essa variável no `install`. Testado — o job falha do mesmo jeito.

!!! tip "Apple Silicon"

    Acrescente uma terceira linha ao `.actrc`: `--container-architecture linux/amd64`.

!!! note "Sobre o BOM no Windows"

    O `Out-File -Encoding utf8` do Windows PowerShell grava um BOM no início do arquivo. Isso **não atrapalha o act** (testado).

Todos os comandos das seções 8 e 9 assumem esse `.actrc` configurado.

---

<a id="onde-rodar"></a>

## 5. Onde rodar o act

O act procura a pasta `.github/workflows/` **no diretório atual**. Rodando no lugar errado, ele não encontra nada.

Backend e frontend são **submódulos Git** dentro de `notifica-saude-deploy`, e **cada um tem a sua própria esteira**:

```
notifica-saude-deploy/
├── .github/                          ← workflows do repositório de deploy
├── notifica-saude-backend/           ← submódulo, esteira PRÓPRIA
│   └── .github/workflows/
│       ├── main.yml                  (notificação no Discord)
│       ├── qualidade.yml             (lint + type-check)
│       └── testes.yml                (testes unitários, integração, Sonar)
└── notifica-saude-frontend/          ← submódulo, esteira PRÓPRIA
    └── .github/workflows/
        ├── ci.yml                    (lint + build)
        ├── lighthouse.yml            (performance)
        └── main.yml                  (notificação no Discord)
```

**Regra prática:** entre na pasta do repositório que quer validar.

```bash
cd notifica-saude-deploy/notifica-saude-backend    # para o backend
cd notifica-saude-deploy/notifica-saude-frontend   # para o frontend
```

Rodando a partir de `notifica-saude-deploy/`, o act **não** enxerga os workflows dos submódulos.

---

<a id="listando"></a>

## 6. Listando os jobs

O comando mais seguro para começar é o `-l`, que **não executa nada**:

```bash
act -l
```

**Backend:**

```
Stage  Job ID             Job name                    Workflow name            Workflow file  Events
0      notify             notify                      Discord PR Notification  main.yml       pull_request
0      qualidade          Lint e Type-check           Qualidade de Código      qualidade.yml  pull_request
0      unit-tests         🧩 Testes Unitários          🧪 Pipeline de Testes     testes.yml     push,pull_request
0      integration-tests  🔗 Testes de Integração      🧪 Pipeline de Testes     testes.yml     push,pull_request
1      sonarcloud         🔍 SonarCloud com Coverage   🧪 Pipeline de Testes     testes.yml     push,pull_request
```

**Frontend:**

```
Stage  Job ID      Job name    Workflow name            Workflow file   Events
0      ci          ci          Frontend CI              ci.yml          push,pull_request
0      lighthouse  lighthouse  Lighthouse CI            lighthouse.yml  pull_request
0      notify      notify      Discord PR Notification  main.yml        pull_request
```

- **Job ID** — o nome usado no comando (`act -j qualidade`). Use sempre esta coluna, nunca a "Job name", que tem espaços e emojis.
- **Stage** — a ordem. O *stage 0* roda em paralelo; o *stage 1* só começa depois. O `sonarcloud` está no 1 porque depende dos jobs de teste.
- **Events** — o gatilho. Dá para filtrar: `act -l pull_request`.

---

<a id="secrets"></a>

## 7. Configurando os secrets

Crie um arquivo `.secrets` na raiz do repositório, no formato `CHAVE=valor`. O act o lê automaticamente.

**Backend:**

```
DB_PASSWORD=notifica
CODECOV_TOKEN=dummy
SONAR_TOKEN=dummy
```

**Frontend:**

```
LHCI_GITHUB_APP_TOKEN=dummy
```

Valores fictícios bastam: os tokens de Codecov, Sonar e Lighthouse só servem para enviar relatórios a serviços externos e não influenciam lint, build ou testes. **Nunca copie os secrets reais do GitHub para a sua máquina.**

!!! danger "Antes de criar o arquivo, proteja-o no `.gitignore`"

    O `.secrets` **não está** no `.gitignore` de nenhum dos dois repositórios. A forma mais segura é editar o arquivo à mão, acrescentando uma linha nova, no final, contendo apenas `.secrets`.

    Pelo terminal, use exatamente este comando:

    ```bash
    printf '\n.secrets\n' >> .gitignore
    ```

    **Não use `echo ".secrets" >> .gitignore`.** O `.gitignore` do backend **não termina com quebra de linha**, então o `echo` gruda o texto na última linha e produz `/my-skill.secrets`. O resultado é o pior possível: o `.secrets` continua desprotegido e a regra `/my-skill` é destruída — sem nenhum aviso. O `printf` acima começa com `\n` justamente para evitar isso.

    Confirme que funcionou:

    ```bash
    git check-ignore -v .secrets
    ```

    Se não imprimir nada, a entrada não está valendo — corrija antes de escrever qualquer token no arquivo.

---

<a id="backend"></a>

## 8. Esteira do backend

```bash
cd notifica-saude-deploy/notifica-saude-backend
```

### 8.1 Qualidade de código — comece por aqui

É o job mais rápido e o que mais reprova PR na prática.

```bash
act pull_request -j qualidade
```

Instala as dependências, gera o cliente Prisma e roda `npm run type-check` e `npm run lint`. **Passa integralmente no act:**

```
✅  Success - Main Type-check
| Found 0 warnings and 0 errors.
✅  Success - Main Lint
🏁  Job succeeded
```

### 8.2 Testes unitários

```bash
act pull_request -j unit-tests
```

!!! warning "Este job termina como `failed` mesmo quando os testes passam"

    O que importa é o passo `🧩 Rodar Testes Unitários`, e ele funciona normalmente:

    ```
    | Test Suites: 64 passed, 64 total
    | Tests:       472 passed, 472 total
    ✅  Success - Main 🧩 Rodar Testes Unitários
    ```

    Falham os **dois passos seguintes**, por limitação do ambiente local:

    **1. `📊 Upload coverage unit`** — o `actions/upload-artifact@v4` exige a infraestrutura de artefatos do GitHub:

    ```
    ❗ ::error::Unable to get the ACTIONS_RUNTIME_TOKEN env variable
    ```

    **2. `☂️ Codecov upload`** — a action roda `git config --global --add safe.directory` e esbarra na mesma ausência de repositório Git da seção 4:

    ```
    | fatal: not a git repository: (null)
    ❌  Failure - Main Set safe directory
    ```

    **Na prática:** procure a linha `Tests: N passed` e o `✅ Success` do passo de testes. Se estiverem lá, sua alteração está aprovada — ignore o status final do job.

Para que o passo de artefato também passe, o act sabe simular o servidor:

```bash
act pull_request -j unit-tests --artifact-server-path /tmp/act-artifacts
```

O passo vira `✅ Success` e os arquivos ficam em `/tmp/act-artifacts`. **O job ainda assim termina como `failed`**, porque o Codecov continua esbarrando no problema de Git. Para ler a cobertura, o caminho direto é `npm run report:coverage:unit`, sem act.

### 8.3 Testes de integração — não rode pelo act

O job entra em **loop infinito** no passo `⏳ Aguardar Postgres`:

```
| /var/run/act/workflow/4: line 2: psql: command not found
| Aguardando Postgres...
| /var/run/act/workflow/4: line 2: psql: command not found
| Aguardando Postgres...
```

**A causa é a ausência do cliente `psql` na imagem do runner.** O workflow espera o banco ficar pronto executando `psql` num laço `until`; como o comando não existe, a condição nunca é satisfeita. É preciso interromper com `Ctrl+C` — o job não termina sozinho.

!!! note "Os services funcionam, ao contrário do que se costuma supor"

    Postgres e Redis sobem normalmente no act (ficam `healthy`) e respondem em `localhost:5432` / `localhost:6379` de dentro do container do job, porque o act executa o job com `--network host`. O impedimento é só a falta do `psql`, não a rede.

Rode os testes de integração diretamente:

```bash
docker compose up -d
npm run test:int
```

### 8.4 SonarCloud — não rode pelo act

O job baixa artefatos dos jobs anteriores e envia a análise para um serviço externo, com token real. A análise acontece no PR — veja [Uso do SonarCloud](../vvt/sonarcloud.md).

---

<a id="frontend"></a>

## 9. Esteira do frontend

```bash
cd notifica-saude-deploy/notifica-saude-frontend
```

### 9.1 CI (lint + build) — o job principal

```bash
act pull_request -j ci
```

Instala as dependências, roda `npm run lint` e `npm run build`. Se este job passa, o CI do frontend passa. **Passa integralmente no act:**

```
✅  Success - Main Rodar ESLint
| ✓ 660 modules transformed.
| ✓ built in 583ms
✅  Success - Main Buildar projeto
🏁  Job succeeded
```

O aviso `Some chunks are larger than 500 kB` é do Vite e **não reprova o job**. O tempo de build varia conforme a máquina — o que importa é o `🏁 Job succeeded`.

### 9.2 Lighthouse — não funciona no act

O `npm ci` e o build passam, mas o Lighthouse aborta na verificação inicial:

```
| ✅  .lighthouseci/ directory writable
| ✅  Configuration file found
| ❌  Chrome installation not found
| ✅  GitHub token set
| Healthcheck failed!
❌  Failure - Main Rodar Lighthouse CI
```

A imagem `catthehacker/ubuntu:act-latest` não inclui o Chrome, e o Lighthouse depende dele para abrir as páginas. Os números de performance e acessibilidade só saem no PR.

!!! warning "Efeito colateral a conhecer antes de tentar consertar"

    O `lighthouserc.json` usa `"target": "temporary-public-storage"`: o relatório, com capturas das telas `/`, `/login` e `/notificacao`, seria enviado a um armazenamento **público** do Google. Como o job falha antes disso, nenhum upload acontece ao rodar pelo act — mas tenha isso em mente antes de instalar o Chrome na imagem para "fazer o job passar".

---

<a id="notify"></a>

## 10. O job que não deve ser executado localmente

Existe em **ambos** os repositórios um job `notify` (arquivo `main.yml`):

```bash
act pull_request -j notify        # ❌ NÃO FAÇA ISSO
```

!!! danger "O job `notify` posta no Discord de verdade"

    Ele dispara um `curl` para o webhook do Discord da equipe. Com o `DISCORD_WEBHOOK` real no `.secrets`, a mensagem é publicada no canal do time, com dados vazios ou inventados do PR. Não há nada a validar nesse job.

Por isso o `.secrets` de exemplo da seção 7 **não inclui** `DISCORD_WEBHOOK`.

---

<a id="saida"></a>

## 11. Como ler a saída

O act imprime uma linha por passo, prefixada pelo nome do job. O bloco abaixo é um **exemplo ilustrativo de falha**, montado para mostrar os símbolos — não é saída real do projeto:

```
[Qualidade de Código/Lint e Type-check] 🚀  Start image=catthehacker/ubuntu:act-latest
[Qualidade de Código/Lint e Type-check]   ✅  Success - Main Checkout
[Qualidade de Código/Lint e Type-check]   ⭐ Run Main Instalar dependências
[Qualidade de Código/Lint e Type-check]   ✅  Success - Main Instalar dependências
[Qualidade de Código/Lint e Type-check]   ❌  Failure - Main Lint
[Qualidade de Código/Lint e Type-check] exitcode '1': failure
```

| Símbolo | Significado |
| --- | --- |
| ⭐ `Run Main` | O passo começou |
| ✅ `Success` | O passo passou |
| ❌ `Failure` | O passo falhou — **é aqui que você olha** |
| 🏁 `Job succeeded` | O job inteiro passou |
| `exitcode '1'` | O job falhou |

**Para depurar:** ache a **primeira** linha `❌ Failure` e leia as linhas logo acima dela. Ali está a mensagem real do compilador, do linter ou do teste. Falhas posteriores costumam ser consequência da primeira.

```bash
act -l                             # lista os jobs (não executa)
act pull_request -j ci --dryrun    # mostra os passos sem executá-los
act pull_request -j ci -v          # modo verboso, para investigar erros do próprio act
act push -j unit-tests             # simula o evento de push
```

---

<a id="problemas"></a>

## 12. Resolução de problemas

| Sintoma | Causa | Solução |
| --- | --- | --- |
| `'act' não é reconhecido...` | Terminal aberto antes da instalação | Reinicie o VS Code por completo, ou aplique o comando de `PATH` da seção 3.1 |
| `Couldn't get a valid docker connection` | Docker Desktop não está rodando | Abra o Docker Desktop e aguarde inicializar |
| `fatal: not a git repository` no `lefthook install` | O `npm ci` executa o `prepare`, que exige Git | Aplique o `npm_config_ignore_scripts=true` da seção 4 |
| Nada é listado com `act -l` | Pasta errada | `cd` para dentro do submódulo (seção 5) |
| Primeiro `npm ci` demora bastante | Ainda não há cache | Normal. As execuções seguintes mostram `Cache restored successfully` |
| `Unable to get the ACTIONS_RUNTIME_TOKEN` | Não existe servidor de artefatos fora do GitHub | Esperado. Ignore ou use `--artifact-server-path` (seção 8.2) |
| `unit-tests` em `Job failed` com testes passando | Codecov e artefato falham depois dos testes | Normal. Valide pela linha `Tests: N passed` (seção 8.2) |
| `Aguardando Postgres...` em loop | `psql` não existe na imagem | `Ctrl+C`. Não rode `integration-tests` pelo act (seção 8.3) |
| `Chrome installation not found` | A imagem não inclui o Chrome | Esperado (seção 9.2) |
| Containers sobrando no Docker | Em job que **falha**, o act não remove o container | `docker rm -f $(docker ps -aq --filter "name=act-")` |
| Disco enchendo | Imagens acumuladas | `docker system prune -a` |
| Erro de arquitetura em Mac M1/M2/M3 | Imagem `amd64` em CPU ARM | Acrescente `--container-architecture linux/amd64` |

---

<a id="checklist"></a>

## 13. Checklist antes de abrir um Pull Request

**Backend:**

```bash
cd notifica-saude-deploy/notifica-saude-backend
act pull_request -j qualidade                # lint + type-check
act pull_request -j unit-tests               # testes unitários
docker compose up -d && npm run test:int     # integração (fora do act)
```

**Frontend:**

```bash
cd notifica-saude-deploy/notifica-saude-frontend
act pull_request -j ci                       # lint + build
```

- [ ] Docker Desktop aberto
- [ ] `.actrc` com as duas linhas da seção 4
- [ ] `.secrets` criado **e** confirmado com `git check-ignore -v .secrets`
- [ ] `qualidade` e `ci` com `🏁 Job succeeded`
- [ ] `unit-tests` com `Tests: N passed` — o status final do job é irrelevante
- [ ] `notify` **não** foi executado

Passando tudo isso, a chance de a esteira do GitHub reprovar o PR é pequena.

---

<a id="referencias"></a>

## 14. Referências

- [Repositório oficial do act](https://github.com/nektos/act)
- [Documentação do act](https://nektosact.com/)
- [Documentação do GitHub Actions](https://docs.github.com/pt/actions)
- [Gerenciamento de Pipelines de CI](pipelines-ci.md)
- [Uso do SonarCloud](../vvt/sonarcloud.md)
