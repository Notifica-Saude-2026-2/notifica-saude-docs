---
hide:
  - toc
---

<h1 align="center">Diário de Decisões</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 24/09/2026 | Migração do Diário de Decisões (planilha do Google Drive) para o MkDocs, com as decisões registradas de 11/08/2026 a 03/09/2026. | Sophya Ribeiro |

Registro das atividades que geraram decisões de projeto. Cada linha da tabela corresponde a **uma decisão** — um mesmo dia pode ter várias linhas quando houver mais de uma decisão.

<div class="ns-dec-resumo" markdown>
<div class="ns-dec-stat"><strong>7</strong><span>decisões registradas</span></div>
<div class="ns-dec-stat"><strong>4</strong><span><span class="ns-tag ns-tag--infra">Ferramentas/Infraestrutura</span></span></div>
<div class="ns-dec-stat"><strong>2</strong><span><span class="ns-tag ns-tag--metodologia">Metodologia</span></span></div>
<div class="ns-dec-stat"><strong>1</strong><span><span class="ns-tag ns-tag--requisitos">Requisitos</span></span></div>
</div>

## Decisões

<div class="ns-dec-tabela" markdown>

| Nº | Data | Contexto e decisão | Justificativa / Racional | Detalhes |
| :---: | --- | --- | --- | --- |
| <span class="ns-dec-num">01</span> | **11/08/2026**<br><span class="ns-dec-dia">terça-feira</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Reunião de alinhamento e tira-dúvidas sobre as funcionalidades a serem atacadas na primeira sprint.</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">As proponentes estão com muita dificuldade de desenhar o fluxo e definir os requisitos para o módulo de análise. Não conseguiriam nos enviar por definitivo em tempo hábil para especificar em estórias de usuário. Portanto, definimos que podemos usar a primeira sprint para ajudá-las com isso e, enquanto isso, o time de desenvolvimento adianta o próximo épico: gerenciamento de planos de ação.</span> | Apoio com protótipo de alta fidelidade ou metodologias de descoberta de produtos podem ajudar as proponentes a definirem essa feature. | <span class="ns-tag ns-tag--metodologia">Metodologia</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Sophya, Catarina, Gustavo<br><span class="ns-dec-rotulo">Evidência</span><br>Ata da reunião |
| <span class="ns-dec-num">02</span> | **13/08/2026**<br><span class="ns-dec-dia">quinta-feira</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Weekly: discussão sobre organização e fluxo de manutenção da documentação do projeto.</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">Especificação de um GCS destinado exclusivamente à manutenção das documentações.</span> | Um espaço dedicado evita que o processo de manutenção da documentação se torne muito burocrático e lento. | <span class="ns-tag ns-tag--metodologia">Metodologia</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Todos<br><span class="ns-dec-rotulo">Evidência</span><br>[Documento de GCS](../gcs/gerenciamento-documentacao.md) |
| <span class="ns-dec-num">03</span> | **13/08/2026**<br><span class="ns-dec-dia">quinta-feira</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Discussão sobre a automação do processo de deploy da aplicação e sua dependência da esteira de CI.</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">Deploy automático será implementado somente após a definição e estabilização da esteira de testes, incluindo a geração de imagem.</span> | Mesmo sendo possível implementar o deploy automático desde já, ele dependeria de uma esteira estável para funcionar corretamente, incluindo os testes automatizados e a geração de imagem. Por isso, optou-se por primeiro estabilizar a esteira de CI e a aplicação dos testes automatizados, para só então avançar para o deploy automático, já que este depende diretamente daquela. | <span class="ns-tag ns-tag--infra">Ferramentas/Infraestrutura</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Brenno, Kauan<br><span class="ns-dec-rotulo">Evidência</span><br>— |
| <span class="ns-dec-num">04</span> | **13/08/2026**<br><span class="ns-dec-dia">quinta-feira</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Revisão do processo de documentação do projeto, considerando o feedback recebido na banca da entrega anterior.</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">Centralização de toda a documentação do projeto em arquivos markdown versionados no GitHub.</span> | O uso de markdown no GitHub permite versionar e controlar melhor as alterações na documentação. Além disso, na banca da entrega anterior foi apontado que era importante centralizar a documentação em um único lugar. | <span class="ns-tag ns-tag--infra">Ferramentas/Infraestrutura</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Todos<br><span class="ns-dec-rotulo">Evidência</span><br>[Repositório de documentação no GitHub](https://github.com/Notifica-Saude-2026-2/notifica-saude-docs) |
| <span class="ns-dec-num">05</span> | **13/08/2026**<br><span class="ns-dec-dia">quinta-feira</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Weekly: definição da ferramenta de visualização da documentação centralizada em markdown.</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">Uso do MkDocs para gerar um site a partir dos arquivos markdown.</span> | O MkDocs facilita a visualização, navegação e consulta da documentação, sendo melhor para visualizar tudo do que usar apenas o markdown cru. | <span class="ns-tag ns-tag--infra">Ferramentas/Infraestrutura</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Todos<br><span class="ns-dec-rotulo">Evidência</span><br>[Site no GitHub Pages da organização](https://notifica-saude-2026-2.github.io/notifica-saude-documentation/) |
| <span class="ns-dec-num">06</span> | **25/08/2026**<br><span class="ns-dec-dia">terça-feira</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Necessidade de validar alterações na esteira sem depender de abrir PR, em contexto de cota limitada de minutos do GitHub Actions.</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">Adotar o act como ferramenta de execução local dos workflows e documentar o uso para a equipe.</span> | Encurta o ciclo de correção e reduz consumo da cota. A limitação conhecida é que testes de integração e análise do Sonar não são reproduzíveis localmente. | <span class="ns-tag ns-tag--infra">Ferramentas/Infraestrutura</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Brenno, Kauan<br><span class="ns-dec-rotulo">Evidência</span><br>[Guia de uso do act](../gcs/uso-act.md) e [PR #19](https://github.com/Notifica-Saude-2026-2/notifica-saude-docs/pull/19) do repositório de documentação |
| <span class="ns-dec-num">07</span> | **03/09/2026**<br><span class="ns-dec-dia">quinta-feira</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Discussão sobre como viabilizar a validação da feature de análise de incidentes (Épico 4) pelas proponentes, dado o tamanho e a complexidade do fluxo (múltiplas metodologias de investigação).</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">Publicar o protótipo completo (incluindo feature de análise) no GitHub Pages, para que as proponentes possam acessar e validar no próprio tempo delas.</span> | A feature de análise é extensa e envolve várias telas e fluxos condicionais (ACR, Protocolo de Londres Rápido e Completo). Disponibilizar o protótipo publicamente evita depender de reuniões síncronas para validação e permite que as proponentes revisem com calma antes do próximo alinhamento. O GitHub Pages permite deploy automático com base nas atualizações na branch principal e é uma maneira gratuita de disponibilizar esse sistema. | <span class="ns-tag ns-tag--requisitos">Requisitos</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Sophya<br><span class="ns-dec-rotulo">Evidência</span><br>[Protótipo no GitHub Pages](https://notifica-saude-2026-2.github.io/) |

</div>

## Como registrar uma nova decisão

!!! tip "Uma linha = uma decisão"
    Adicione uma nova linha **ao final da tabela**, com o próximo número da sequência. Se no mesmo dia houver mais de uma decisão, registre cada uma em uma linha própria. Lembre-se de incluir também uma linha no histórico de alterações.

| Coluna | Como preencher |
| --- | --- |
| **Nº** | Número sequencial da decisão (o próximo após a última linha). |
| **Data** | Data da decisão no formato dd/mm/aaaa, com o dia da semana abaixo. |
| **Contexto** | Reunião, discussão ou situação que levou à decisão (atividade do dia). |
| **Decisão** | O que foi decidido, de forma objetiva. |
| **Justificativa / Racional** | Por que essa foi a escolha, incluindo alternativas consideradas e limitações conhecidas. |
| **Categoria** | Uma das opções: <span class="ns-tag ns-tag--produto">Produto</span> <span class="ns-tag ns-tag--requisitos">Requisitos</span> <span class="ns-tag ns-tag--arquitetura">Arquitetura/Técnica</span> <span class="ns-tag ns-tag--metodologia">Metodologia</span> <span class="ns-tag ns-tag--infra">Ferramentas/Infraestrutura</span> <span class="ns-tag ns-tag--equipe">Gestão de Equipe</span> <span class="ns-tag ns-tag--outro">Outro</span> |
| **Responsável(is)** | Sophya, Brenno, Catarina, Eduardo, Gustavo, Kauan ou Todos, separados por vírgula. |
| **Artefato / Evidência** | Documento, ata, PR ou link que comprova ou detalha a decisão. Use "—" se não houver. |

<!--
MODELO DE LINHA PARA COPIAR (não aparece no site). Cole ao final da tabela de decisões e ajuste os valores:
| <span class="ns-dec-num">08</span> | **dd/mm/aaaa**<br><span class="ns-dec-dia">dia da semana</span> | <span class="ns-dec-rotulo">Contexto</span><br><span class="ns-dec-ctx">Contexto.</span><br><span class="ns-dec-rotulo">Decisão</span><br><span class="ns-dec-decisao">Decisão.</span> | Justificativa. | <span class="ns-tag ns-tag--metodologia">Metodologia</span><br><span class="ns-dec-rotulo">Responsáveis</span><br>Nome, Nome<br><span class="ns-dec-rotulo">Evidência</span><br>[Evidência](link) |
Classes de categoria disponíveis: ns-tag--produto, ns-tag--requisitos, ns-tag--arquitetura, ns-tag--metodologia, ns-tag--infra, ns-tag--equipe e ns-tag--outro.
-->
