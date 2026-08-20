<h1 align="center">Gerenciamento de Pipelines de CI</h1>


<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Introdução](#introducao)
- [2. Fallback local com Lefthook](#fallback)

---

<a id="introducao"></a>

## 1. Introdução

O projeto utiliza o **GitHub Actions** para a execução da pipeline de integração contínua. A pipeline é disparada automaticamente a cada *push* em uma Pull Request aberta e realiza verificações de *build* e *lint*.

| Item | Definição |
| --- | --- |
| **Ferramenta** | GitHub Actions |
| **Gatilho** | *Push* em uma Pull Request aberta |
| **Verificações** | *Build* e *lint* |

---

<a id="fallback"></a>

## 2. Fallback local com Lefthook

Devido ao limite mensal de minutos gratuitos do GitHub Actions, quando esse limite é atingido a equipe adota o **Lefthook** como mecanismo de *fallback*, executando as mesmas verificações localmente por meio de um *git hook* de `pre-push`.

!!! warning "Merge durante o período de fallback"
    Enquanto a pipeline do GitHub Actions estiver indisponível por esgotamento de minutos, o merge de Pull Requests só deve ser realizado após a confirmação, pelo autor, de que as verificações locais passaram com sucesso.
