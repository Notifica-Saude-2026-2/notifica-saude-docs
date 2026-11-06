<h1 align="center">Uso do MkDocs</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 29/09/2026 | Criação da página de visão geral, com links para os documentos sobre o uso do MkDocs no projeto. | Sophya Ribeiro |

A documentação do NotificaSaúde é mantida no repositório [`notifica-saude-docs`](https://github.com/Notifica-Saude-2026-2/notifica-saude-docs) como arquivos Markdown e publicada como site no GitHub Pages, usando o **MkDocs** com o tema **Material for MkDocs**. Esta seção reúne por que a ferramenta foi escolhida, como o site é configurado e o passo a passo para incluir ou atualizar um documento.

<div class="grid cards" markdown>

-   :material-scale-balance:{ .lg .middle } **Decisão da Ferramenta**

    ---

    Opções avaliadas (Markdown puro, MkDocs, Docusaurus e GitHub Wiki), seus trade-offs e fluxos de atualização, e por que o MkDocs foi escolhido.

    [:octicons-arrow-right-24: Acessar](decisao-da-ferramenta.md)

-   :material-cog-outline:{ .lg .middle } **Configuração e Manutenção**

    ---

    Como o site foi configurado, como rodá-lo localmente e como mantê-lo atualizado.

    [:octicons-arrow-right-24: Acessar](configuracao-e-manutencao.md)

-   :material-file-document-edit-outline:{ .lg .middle } **Guia de Atualização da Documentação**

    ---

    Passo a passo para incluir um documento: issue, branch, arquivo `.md`, pasta, histórico, `nav`, teste local, commit, pull request e publicação.

    [:octicons-arrow-right-24: Acessar](guia-atualizacao-documentacao.md)

</div>

## Organização das pastas

Cada página fica dentro da pasta da aba em que aparece no menu, seguindo o mesmo padrão do frontend. Por exemplo, as páginas da aba **Gestão do Projeto** ficam em `docs/gerencia-projeto/`, e esta seção fica em `docs/gerencia-projeto/uso-mkdocs/`. Ao criar uma página, coloque o arquivo na pasta da aba correspondente e registre o caminho no `nav` do `mkdocs.yml`.
