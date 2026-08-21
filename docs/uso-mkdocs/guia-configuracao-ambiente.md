<h1 align="center">Guia de Configuração do Ambiente de Documentação</h1>

<p align="center"><strong>Sistema Notifica Saúde — Versão 1.2</strong></p>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 11/08/2026 | Inclusão da visão geral, das premissas e dos pré-requisitos do ambiente. | Catarina Freisleben |
    | 1.1 | 12/08/2026 | Descrição do passo a passo para executar o ambiente. | Catarina Freisleben |
    | 1.2 | 20/08/2026 | Revisão geral do documento e migração para o site de documentação. | Catarina Freisleben |

## Sumário

- [1. Visão Geral](#visao-geral)
- [2. Premissas](#premissas)
- [3. Pré-Requisitos](#pre-requisitos)
- [4. Passo a Passo](#passo-a-passo)
    - [4.1. Escolher a pasta local dos repositórios](#passo-pasta)
    - [4.2. Clonar o repositório](#passo-clonar)
    - [4.3. Criar um ambiente isolado Python (venv)](#passo-venv)
    - [4.4. Instalar as dependências](#passo-dependencias)
    - [4.5. Executar localmente](#passo-executar)
- [5. Conclusão](#conclusao)

---

<a id="visao-geral"></a>

## 1. Visão Geral

Este documento descreve os passos necessários para configurar o repositório `notifica-saude-docs`. O `notifica-saude-docs` concentra toda a documentação do projeto Notifica Saúde, estilizada como um site de documentação real usando MkDocs com o tema Material for MkDocs.

---

<a id="premissas"></a>

## 2. Premissas

Nesta seção, são descritas as premissas do documento. As premissas definem condições que devem ser satisfeitas para que a configuração do ambiente seja realmente exequível.

| Tipo | Descrição |
| --- | --- |
| Premissa | Conta no GitHub com acesso à organização `Notifica-Saude-2026-2` |
| Premissa | Git instalado localmente e autenticado |

---

<a id="pre-requisitos"></a>

## 3. Pré-Requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de prosseguir:

| Ferramenta | Versão utilizada no projeto | Download |
| --- | --- | --- |
| Python | 3.13.14 | [python.org/downloads](https://www.python.org/downloads/) |
| pip | 26.1.2 | Instalado junto com o Python |

!!! note "Sobre as versões"
    Essas são as versões usadas e testadas pela equipe, não um mínimo estritamente exigido pelo MkDocs — versões um pouco mais antigas do Python 3 também devem funcionar.

Verifique a instalação com os comandos:

```powershell
python --version   # esperado: Python 3.13.14
pip --version      # esperado: pip 26.1.2
```

---

<a id="passo-a-passo"></a>

## 4. Passo a Passo

Passo a passo para a execução do projeto, dado que as premissas e os pré-requisitos estão configurados:

<a id="passo-pasta"></a>

### 4.1. Escolher a pasta local dos repositórios

Escolha (ou crie) uma pasta no seu computador para organizar os repositórios do projeto e acesse-a pelo terminal:

```powershell
cd caminho\para\sua\pasta\de\projetos
```

Não é necessário rodar `git init` nem criar nada dentro dela — o comando `git clone`, no próximo passo, já cria a pasta do repositório e a inicializa automaticamente.

<a id="passo-clonar"></a>

### 4.2. Clonar o repositório

Execute o comando:

```powershell
git clone https://github.com/Notifica-Saude-2026-2/notifica-saude-docs.git
```

Após a execução, o repositório estará clonado. Mude para a pasta correspondente:

```powershell
cd notifica-saude-docs
```

<a id="passo-venv"></a>

### 4.3. Criar um ambiente isolado Python (venv)

Primeiro comando a ser executado:

```powershell
python -m venv .venv
```

Segundo comando a ser executado:

```powershell
.venv\Scripts\Activate.ps1
```

O `venv` é uma cópia isolada do Python só para esta pasta: os pacotes que serão instalados (MkDocs, tema Material) ficam guardados em uma pasta local (`.venv/`), sem se misturar com outros projetos Python. Sempre que abrir um terminal novo para trabalhar neste projeto, execute novamente o segundo comando.

<a id="passo-dependencias"></a>

### 4.4. Instalar as dependências

Execute:

```powershell
pip install -r requirements.txt
```

O arquivo `requirements.txt` armazena a lista exata de pacotes e versões instaladas, útil para reproduzir sempre o mesmo ambiente criado da primeira vez. Ele instala toda a base necessária, incluindo o próprio MkDocs e o tema Material.

<a id="passo-executar"></a>

### 4.5. Executar localmente

Inicie o site do projeto localmente. Nele será possível visualizar as mudanças em tempo real:

```powershell
mkdocs serve
```

Abra `http://127.0.0.1:8000` no navegador. Deve ser possível visualizar o site completo e populado.

---

<a id="conclusao"></a>

## 5. Conclusão

A partir desse ponto, é possível editar ou criar os arquivos `.md` na pasta `docs/`. Toda mudança enviada ao repositório deve seguir o fluxo de Gerência de Configuração de Software (GCS) do projeto (issue → branch → commits → Pull Request → aprovação → merge). O passo a passo completo pode ser visualizado no Guia de Atualização da Documentação.