<h1 align="center">Revisão de Artefatos Herdados</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 06/11/2026 | Registro da revisão dos artefatos herdados do semestre anterior, feita na migração da documentação para o MkDocs e antes do início do desenvolvimento. | Sophya Ribeiro |

## Sumário

- [1. Contexto](#contexto)
- [2. Como a revisão foi feita](#como-foi-feita)
- [3. Artefatos revisados](#artefatos)
- [4. Onde a revisão está registrada](#registro)

<a id="contexto"></a>

## 1. Contexto

O NotificaSaúde é um projeto de continuidade: começou no semestre 2026.1 e foi assumido pela equipe atual em 2026.2. Os artefatos produzidos no semestre anterior (requisitos, arquitetura, banco de dados, testes, gestão e gerência de configuração) estavam espalhados entre Google Docs, planilhas do Google Drive, arquivos Word e PDF, quadros do Miro e um repositório de documentação que foi descontinuado.

Na banca da entrega anterior, foi apontada a importância de centralizar a documentação em um único lugar. A equipe decidiu centralizar toda a documentação em arquivos Markdown versionados no GitHub e publicá-la com o MkDocs ([decisões 04 e 05 do Diário de Decisões](diario-de-decisoes.md)). Essa migração foi usada como o momento de revisar cada artefato herdado.

<a id="como-foi-feita"></a>

## 2. Como a revisão foi feita

- **Quando:** cada artefato de documentação foi revisado ao ser migrado para o MkDocs e antes do início de qualquer desenvolvimento que dependesse dele.
- **Quem:** a revisão foi feita por todos os integrantes da equipe. Cada artefato foi migrado e revisado por um responsável e entrou no site por Pull Request, aprovado por outro integrante, conforme o [Gerenciamento de Pull Requests](../gcs/pull-requests.md).
- **Critérios:**
    - **Atualidade:** o conteúdo corresponde ao sistema e aos requisitos vigentes? Informações desatualizadas foram corrigidas ou marcadas como substituídas.
    - **Feedback da banca anterior:** o artefato está centralizado no site e acessível a partir do menu?
    - **Consistência:** identificadores, numerações e referências cruzadas estão corretos e sem duplicidade?
    - **Informações sensíveis:** dados que identificam as instituições das proponentes foram ocultados antes da publicação?
    - **Padronização:** o documento segue o padrão do site, com mantenedores da equipe atual, histórico de alterações e links para as páginas relacionadas?
- **Resultado:** as correções feitas na revisão foram registradas no histórico de alterações de cada documento, na linha da migração.

<a id="artefatos"></a>

## 3. Artefatos revisados

| Aba | Artefato | Origem | Revisão e migração |
| --- | --- | --- | --- |
| Descoberta do Produto | [Lean Inception](../descoberta-produto/lean-inception/index.md) | Quadros do Miro | 07/10/2026 |
| Requisitos | [Especificação de Requisitos de Software](../requisitos/especificacao-requisitos.md) | Documento do semestre anterior | Revisão completa na versão 3.0 (23/09/2026), validada com as proponentes no protótipo funcional |
| Requisitos | [Ata da Reunião Inicial](../requisitos/reunioes/atas/reuniao-inicial.md) | Word | 18/10/2026 |
| Requisitos | [Relatório da Visita Técnica](../requisitos/reunioes/relatorios/visita-tecnica.md) | Word | 18/10/2026, com o nome da instituição visitada ocultado |
| Desenvolvimento | [Especificação de Arquitetura](../desenvolvimento/arquitetura/especificacao-arquitetura.md) | Repositório de documentação descontinuado | 18/10/2026 |
| Desenvolvimento | [Registros de Decisão de Arquitetura (ADRs 0001 a 0021)](../desenvolvimento/arquitetura/adr/index.md) | Repositório de documentação descontinuado | 18/10/2026 |
| Desenvolvimento | [Modelo de Domínio](../desenvolvimento/banco-de-dados/modelo-dominio.md) e [Modelo Lógico](../desenvolvimento/banco-de-dados/modelo-logico.md) | Repositório de documentação descontinuado | 18/10/2026 |
| Qualidade e Testes | [Plano de Testes](../vvt/plano-de-testes.md) | Google Docs | 25/09/2026 |
| Qualidade e Testes | [Casos de Teste](../vvt/casos-de-teste.md) | Google Docs e PDF | 23/09/2026 |
| Qualidade e Testes | [Matriz de Rastreabilidade](../vvt/matriz-rastreabilidade.md) | Planilha | 25/09/2026 |
| Qualidade e Testes | [Relatório de Bugs](../vvt/relatorio-bugs.md) | Google Docs | 24/09/2026, com renumeração de IDs duplicados e remoção de registros repetidos ou não preenchidos |
| Qualidade e Testes | [Relatório de Requisitos Não Funcionais](../vvt/relatorio-nao-funcionais.md) | Google Docs | 25/09/2026 |
| Qualidade e Testes | [Relatórios de testes](../vvt/relatorios-testes/index.md) (captcha, bloqueio de encaminhamento e cobertura) | PDF | 06/10/2026, no modelo padronizado e sem alteração dos resultados |
| Qualidade e Testes | [Teste de Usabilidade](../vvt/teste-usabilidade/index.md) (plano, ata e relatório) | Google Docs | 29/09/2026 |
| Gerência de Configuração | [Documento de GCS](../gcs/index.md) | Documento do semestre anterior | 17/08/2026, dividido em páginas temáticas |
| Gestão do Projeto | [Plano de Projeto](plano-projeto.md) | Google Docs | 24/09/2026 |
| Gestão do Projeto | [Cronograma](cronograma.md), [Responsabilidades](responsabilidades.md), [Riscos do Projeto](riscos.md) e [Diário de Decisões](diario-de-decisoes.md) | Planilhas do Google Drive | 24/09/2026 |

<a id="registro"></a>

## 4. Onde a revisão está registrada

- **Histórico de alterações de cada documento:** a linha de migração indica a data, a origem do artefato e as correções feitas na revisão.
- **[Diário de Decisões](diario-de-decisoes.md):** registra a decisão de centralizar a documentação a partir do feedback da banca anterior (decisão 04) e a escolha do MkDocs (decisão 05).
- **Pull Requests do repositório de documentação:** cada migração entrou no site por PR revisado e aprovado por outro integrante.
