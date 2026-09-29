<h1 align="center">Configuração e Manutenção</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 29/09/2026 | Documentação da configuração do site, da execução local e das rotinas de manutenção. | Sophya Ribeiro |

## Sumário

- [1. Visão geral](#visao-geral)
- [2. Configuração do site](#configuracao)
    - [2.1. Estrutura do repositório](#estrutura)
    - [2.2. Dependências](#dependencias)
    - [2.3. O arquivo mkdocs.yml](#mkdocs-yml)
    - [2.4. Personalização visual](#personalizacao)
- [3. Rodar localmente](#rodar-localmente)
    - [3.1. Problemas comuns](#problemas-comuns)
- [4. Manutenção](#manutencao)
    - [4.1. Adicionar ou mover uma página](#adicionar-pagina)
    - [4.2. Página de visão geral de cada seção](#visao-geral-secao)
    - [4.3. Componentes visuais reutilizáveis](#componentes)
    - [4.4. Atualizar dependências](#atualizar-dependencias)
    - [4.5. Publicação](#publicacao)

---

<a id="visao-geral"></a>

## 1. Visão geral

O site de documentação do NotificaSaúde é gerado pelo **MkDocs** com o tema **Material for MkDocs**, a partir dos arquivos Markdown do repositório [`notifica-saude-docs`](https://github.com/Notifica-Saude-2026-2/notifica-saude-docs). Esta página descreve como o site está configurado, como executá-lo na máquina local e como mantê-lo. O passo a passo para incluir um documento novo está no [Guia de Atualização da Documentação](guia-atualizacao-documentacao.md), e o motivo da escolha da ferramenta, na [Decisão da Ferramenta](decisao-da-ferramenta.md).

---

<a id="configuracao"></a>

## 2. Configuração do site

<a id="estrutura"></a>

### 2.1. Estrutura do repositório

```text
notifica-saude-docs/
├── .github/workflows/        # Workflow que publica o site no GitHub Pages
├── docs/                     # Conteúdo do site (Markdown)
│   ├── index.md              # Página inicial (usa overrides/home.html)
│   ├── assets/               # Logos, imagens e downloads
│   ├── stylesheets/extra.css # Tema visual e componentes do site
│   └── <aba>/                # Uma pasta por aba do menu
├── overrides/                # Templates que sobrescrevem os do Material
│   ├── home.html             # Página inicial (hero, fluxo, perfis e cards)
│   └── partials/copyright.html # Rodapé com os logos da FACOM e do NES
├── mkdocs.yml                # Tema, extensões, plugins e menu
└── requirements.txt          # Dependências Python com versões fixas
```

Cada página fica dentro da pasta da aba em que aparece no menu, seguindo o mesmo padrão do frontend:

| Aba do menu | Pasta |
| --- | --- |
| Visão Geral | `docs/index.md` e `docs/manual-sistema/` |
| Descoberta do Produto | `docs/descoberta-produto/` |
| Requisitos | `docs/requisitos/` |
| Desenvolvimento | `docs/desenvolvimento/` (subpastas `arquitetura/` e `banco-de-dados/`) |
| Qualidade e Testes | `docs/vvt/` (subpasta `teste-usabilidade/`) |
| Gerência de Configuração | `docs/gcs/` |
| Gestão do Projeto | `docs/gerencia-projeto/` (subpasta `uso-mkdocs/`) |
| Implantação e Entregas | `docs/implantacao/` e `docs/entregas-nes/` |

As imagens de uma página ficam em `docs/assets/<aba>/<nome-da-pagina>/`, e arquivos para download (como o `.docx` do Plano de Projeto) em `docs/assets/docs/`.

<a id="dependencias"></a>

### 2.2. Dependências

O site precisa do **Python 3.13** (a mesma versão usada no GitHub Actions) e das bibliotecas listadas no `requirements.txt`. As versões são fixas para que todos os membros da equipe e a publicação automática gerem exatamente o mesmo site. As principais são:

| Pacote | Versão | Função |
| --- | --- | --- |
| `mkdocs` | 1.6.1 | Gerador do site |
| `mkdocs-material` | 9.7.7 | Tema visual, busca, abas, blocos recolhíveis e ícones |
| `pymdown-extensions` | 11.0.1 | Extensões de Markdown (abas de conteúdo, destaque de código, diagramas Mermaid, emojis) |
| `mkdocs-git-revision-date-localized-plugin` | 1.5.3 | Data da última atualização no rodapé de cada página, lida do histórico do git |

!!! warning "Não atualizar para o MkDocs 2.0"
    Ao rodar o site, o Material exibe um aviso sobre o MkDocs 2.0. Essa versão remove o sistema de plugins e de sobrescrita de temas, o que quebraria o `overrides/` e o plugin de data. Por isso o `requirements.txt` fixa o `mkdocs` na versão 1.6.1. O aviso pode ser ignorado.

<a id="mkdocs-yml"></a>

### 2.3. O arquivo mkdocs.yml

O `mkdocs.yml` concentra toda a configuração do site. Os blocos principais são:

| Bloco | O que define |
| --- | --- |
| `site_name`, `repo_url` | Nome do site e link para o repositório no canto superior direito. |
| `theme` | Tema Material em português (`pt-BR`), pasta `overrides`, logo e favicon, fonte Inter (textos) e JetBrains Mono (código). |
| `theme.palette` | Modo claro como padrão e alternância para o modo escuro. As cores são `custom`, definidas no `extra.css`. |
| `theme.features` | Abas no topo (`navigation.tabs`), páginas de visão geral nas seções (`navigation.indexes`), botão de voltar ao topo, navegação anterior/próximo no rodapé, sumário que acompanha a rolagem, busca com sugestões e botão de copiar código. |
| `markdown_extensions` | Recursos disponíveis na escrita das páginas (ver tabela abaixo). |
| `plugins` | Busca (`search`) e data da última atualização (`git-revision-date-localized`, fuso de Campo Grande, com a data do build como alternativa). |
| `extra_css` | Folha de estilos do tema, `docs/stylesheets/extra.css`. |
| `nav` | Menu do site: abas, seções e páginas, na ordem em que aparecem. |

Extensões de Markdown habilitadas:

| Extensão | Para que serve |
| --- | --- |
| `nl2br` | Uma quebra de linha simples no Markdown vira quebra de linha na página, como no GitHub. |
| `admonition` + `pymdownx.details` | Avisos (`!!! note`, `!!! warning`, `!!! tip`) e blocos recolhíveis (`??? note`), como o Histórico de Alterações. |
| `attr_list` + `md_in_html` | Classes e ids em elementos (`{ #id }`, `{ .classe }`) e Markdown dentro de `<div markdown>`, usados nos cards e componentes. |
| `toc` | Sumário lateral e âncora (`¶`) em cada título, até o nível 4. |
| `pymdownx.highlight`, `inlinehilite`, `superfences` | Blocos de código com destaque de sintaxe e diagramas Mermaid (` ```mermaid `). |
| `pymdownx.tabbed` | Abas dentro do conteúdo (`=== "Aba"`). |
| `pymdownx.emoji` | Ícones do Material e do Octicons no texto (`:material-bug-outline:`). |

<a id="personalizacao"></a>

### 2.4. Personalização visual

O visual segue o design system do sistema NotificaSaúde (protótipo funcional): azul primário `#183eff`, fundos em tons claros de azul, bordas `#e5e4e7`, texto em Inter e a fonte da marca (Raleway) apenas nos títulos principais.

- **`docs/stylesheets/extra.css`**: começa pelos *tokens* de cor (variáveis `--ns-*`), seguidos do tema geral (cabeçalho, abas, menu lateral, tabelas, avisos, rodapé, modo escuro e responsivo) e, no final, dos componentes criados para páginas específicas. Todas as classes próprias usam o prefixo `ns-`.
- **`overrides/home.html`**: monta a página inicial. Os cards de "Por onde começar", as etapas do fluxo e os perfis de usuário são listas no início do arquivo; para trocar um card, basta editar a lista `docs`.
- **`overrides/partials/copyright.html`**: rodapé com os logos da FACOM e do NES.

---

<a id="rodar-localmente"></a>

## 3. Rodar localmente

Na primeira vez, clone o repositório, crie o ambiente virtual e instale as dependências:

```powershell
git clone https://github.com/Notifica-Saude-2026-2/notifica-saude-docs.git
cd notifica-saude-docs

python -m venv .venv
.venv\Scripts\Activate.ps1          # Windows (PowerShell)
# source .venv/bin/activate         # Linux/macOS

pip install -r requirements.txt
```

Nas próximas vezes, basta ativar o ambiente e subir o servidor:

```powershell
.venv\Scripts\Activate.ps1
mkdocs serve
```

O site fica disponível em `http://127.0.0.1:8000` e recarrega sozinho a cada alteração salva em `docs/`, `overrides/` ou `mkdocs.yml`. Para gerar o site estático sem servidor, use `mkdocs build` (o resultado vai para a pasta `site/`, que está no `.gitignore`).

<a id="problemas-comuns"></a>

### 3.1. Problemas comuns

| Mensagem | Causa | Solução |
| --- | --- | --- |
| `ERROR - File not found: <caminho>.md` e o servidor não sobe | Uma página do `nav` não existe no caminho indicado, geralmente porque o arquivo foi movido ou renomeado. | Corrigir o caminho no `nav` do `mkdocs.yml` para a pasta atual do arquivo. |
| `The following pages exist in the docs directory, but are not included in the "nav"` | Existe um `.md` em `docs/` que não está no menu. | Apenas informativo. Registrar a página no `nav` ou remover o arquivo, se ele não for mais usado. |
| `Unable to copy '...venvlauncher.exe' to '.venv\Scripts\python.exe'` | O ambiente virtual foi recriado enquanto o `python.exe` dele estava em uso, por exemplo com um `mkdocs serve` aberto em outro terminal. | Fechar os outros terminais antes de recriar o `.venv`. Se as dependências já estiverem instaladas, o site sobe normalmente. |
| `has no git logs, using current timestamp` | A página ainda não foi commitada, então o plugin usa a data atual como data de atualização. | Some depois do commit. |
| `Unable to find a git directory and/or git is not installed` | O plugin de data não encontrou o git. | Verificar se `git --version` funciona no terminal. Sem o git, o site usa a data do build. |
| Aviso "Warning from the Material for MkDocs team" sobre o MkDocs 2.0 | Aviso fixo do tema. | Ignorar (ver a [seção 2.2](#dependencias)). |

---

<a id="manutencao"></a>

## 4. Manutenção

<a id="adicionar-pagina"></a>

### 4.1. Adicionar ou mover uma página

1. Crie o arquivo `.md` em `kebab-case` dentro da pasta da aba em que ele vai aparecer (ver a [seção 2.1](#estrutura)).
2. Registre o caminho no `nav` do `mkdocs.yml`, relativo à pasta `docs/`.
3. Ao **mover ou renomear** uma página, atualize também o `nav` e os links de outras páginas que apontem para ela. Links relativos dentro da própria página (imagens, `../assets/...`) mudam se a profundidade da pasta mudar.
4. Rode `mkdocs serve` e confira se não aparece nenhum `ERROR` nem aviso de link quebrado no terminal.

O processo completo, com issue, branch, commit e Pull Request, está no [Guia de Atualização da Documentação](guia-atualizacao-documentacao.md).

<a id="visao-geral-secao"></a>

### 4.2. Página de visão geral de cada seção

Com a opção `navigation.indexes`, o `index.md` de uma seção vira a página aberta ao clicar no nome da seção no menu. Essa página não deve ficar vazia: ela apresenta a seção em um parágrafo e lista os documentos em cards com link, como nas páginas [Uso do MkDocs](index.md) e Qualidade e Testes. Ao criar um documento novo em uma seção, inclua também um card para ele na visão geral.

```markdown
<div class="grid cards" markdown>

-   :material-file-document-outline:{ .lg .middle } **Nome do documento**

    ---

    Uma frase sobre o que o documento traz.

    [:octicons-arrow-right-24: Acessar](nome-do-documento.md)

</div>
```

<a id="componentes"></a>

### 4.3. Componentes visuais reutilizáveis

O `extra.css` já tem componentes prontos, usados nas páginas migradas. Antes de criar um estilo novo, verifique se algum deles resolve:

| Componente | Classes | Onde é usado |
| --- | --- | --- |
| Cards de resumo com números | `ns-dec-resumo`, `ns-dec-stat` | Cronograma, Diário de Decisões, Riscos, Matriz de Rastreabilidade, relatórios |
| Etiquetas de nível | `ns-nivel--alta`, `--media`, `--baixa`, `--info` | Riscos, Relatório de Bugs, Relatório de Testes Não-Funcionais |
| Etiquetas de status | `ns-status--aberto`, `--analise`, `--mitigacao`, `--mitigado`, `--encerrado`, `--monitorado` | Riscos, Relatório de Bugs |
| Etiquetas de categoria | `ns-tag--produto`, `--requisitos`, `--arquitetura`, `--metodologia`, `--infra`, `--equipe`, `--outro` | Diário de Decisões |
| Rótulo pequeno em maiúsculas | `ns-dec-rotulo` | Diário de Decisões, Riscos, Relatório de Bugs |
| Status de rastreabilidade | `ns-rast--doc`, `--auto`, `--emauto`, `--pronto`, `--naodoc`, `--naoauto`, `--naoimpl`, `--naoloc` | Matriz de Rastreabilidade |
| Pessoas e papéis | `ns-pessoas`, `ns-pessoa`, `ns-avatar`, `ns-papel--primaria`, `--secundaria` | Responsabilidades |
| Legenda | `ns-legenda`, `ns-legenda-tabela` | Cronograma, Responsabilidades, Plano de Projeto, Plano de Testes, Matriz de Rastreabilidade |

Exemplo de uso de uma etiqueta dentro de uma tabela:

```html
<span class="ns-nivel ns-nivel--alta">Alta</span>
<span class="ns-status ns-status--encerrado">Fechado</span>
```

Ao criar um componente novo, adicione-o ao final do `extra.css`, em um bloco comentado com o nome da página, use o prefixo `ns-` e defina também as cores do modo escuro (`[data-md-color-scheme="slate"]`).

Modelos de linhas ou blocos para copiar (por exemplo, uma nova decisão, risco ou bug) ficam em comentários HTML (`<!-- ... -->`) no final da própria página, para não aparecerem no site.

<a id="atualizar-dependencias"></a>

### 4.4. Atualizar dependências

As versões do `requirements.txt` só devem ser alteradas quando houver necessidade (uma correção ou um recurso novo). Para atualizar:

1. Com o ambiente ativado, instale a versão desejada, por exemplo `pip install mkdocs-material==<versão>`, **mantendo o `mkdocs` na 1.x**.
2. Rode `mkdocs serve` e confira a página inicial, o menu, o modo escuro e algumas páginas com componentes.
3. Gere a lista atualizada com `pip freeze > requirements.txt` e inclua a alteração no Pull Request.

<a id="publicacao"></a>

### 4.5. Publicação

A publicação é automática: o workflow `.github/workflows/deploy.yml` roda a cada push na `main` (ou seja, a cada merge de Pull Request), instala o `requirements.txt` com Python 3.13 e executa `mkdocs gh-deploy --force`, que envia o site gerado para a branch `gh-pages`, servida pelo GitHub Pages. Se o workflow falhar, a publicação manual de contingência está descrita na [seção 4.10 do Guia de Atualização](guia-atualizacao-documentacao.md#passo-publicar).
