<h1 align="center">Padrão de Mensagens de Commit</h1>


<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Formato](#formato)
- [2. Estrutura](#estrutura)
- [3. Tipo](#tipo)
- [4. Assunto](#assunto)
- [5. Exemplo de commit](#exemplo)

---

<a id="formato"></a>

## 1. Formato

As mensagens de commit devem seguir o seguinte formato:

```
<tipo>: <assunto>
```

---

<a id="estrutura"></a>

## 2. Estrutura

| Elemento | Descrição |
| --- | --- |
| **Tipo** | Uma palavra que descreve a natureza da mudança (por exemplo, `feat`, `fix` ou `docs`). |
| **Assunto** | Uma breve descrição do que foi feito (por exemplo, `adiciona validação do tamanho do dataset`). |

---

<a id="tipo"></a>

## 3. Tipo

O tipo da mensagem de commit deve ser exatamente um dentre as opções a seguir:

| Tipo | Uso |
| --- | --- |
| **`feat`** | Uma nova funcionalidade adicionada. |
| **`fix`** | Correção de um bug existente no sistema. |
| **`perf`** | Alteração de código que melhora o desempenho da aplicação. |
| **`test`** | Adição de testes ausentes ou correção de testes existentes. |
| **`refactor`** | Alteração de código que não corrige bug nem adiciona funcionalidade, mas melhora a estrutura ou a organização do código. |
| **`docs`** | Alterações realizadas exclusivamente na documentação. |
| **`style`** | Alterações que não afetam o comportamento do código (formatação, espaçamento e afins). |
| **`build`** | Alterações que afetam o sistema de build ou dependências externas. |
| **`ci`** | Alterações em arquivos ou scripts de configuração de integração contínua. |
| **`revert`** | Reversão de um commit anterior. |
| **`conflict`** | Resolução de conflitos de merge. |

!!! note "Uso no nome das branches"
    Este mesmo conjunto de tipos é utilizado como prefixo no nome das branches, conforme a [padronização da nomenclatura](modelo-ramificacao.md#nomenclatura).

---

<a id="assunto"></a>

## 4. Assunto

O assunto deve ser uma descrição clara e sucinta da alteração realizada. Deve iniciar com um verbo no presente do indicativo e ser escrito inteiramente em letras minúsculas.

---

<a id="exemplo"></a>

## 5. Exemplo de commit

```
feat: adiciona o header da aplicação
```
