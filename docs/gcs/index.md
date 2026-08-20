<h1 align="center">Gerência de Configuração de Software</h1>


<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 15/03/2026 | Decisões iniciais sobre o modelo de ramificação, padrões de issues, commits e pull requests. | Luigi de Almeida |
    | 1.0 | 24/03/2026 | Adição de decisões relacionadas à revisão dos demais artefatos e à Definição de Pronto. | Luigi de Almeida |
    | 1.1 | 26/03/2026 | Adição da política de gerenciamento de releases. | Luigi de Almeida |
    | 1.2 | 05/04/2026 | Adição da Definição de Pronto para Desenvolvimento (DoR). | Luigi de Almeida |
    | 1.3 | 13/04/2026 | Adição do tópico de gerenciamento de issues não planejadas. | Luigi de Almeida |
    | 2.0 | 30/04/2026 | Definição e implantação do Squash Merge no fluxo de desenvolvimento da equipe. | Luigi de Almeida |
    | 2.1 | 23/06/2026 | Definição da política de uso de pipelines de CI. | Luigi de Almeida |
    | 2.2 | 17/08/2026 | Migração do documento para o MkDocs, divisão em páginas temáticas e padronização de formatação. Padronização do exemplo de nomenclatura de branch para o prefixo `feat/` e explicitação da branch de release no fluxo de merge. | Eduardo Alves |
    | 2.3 | 18/08/2026 | Definição do modelo de ramificação próprio da documentação, com branches `docs/<descrição>` sem número de issue. Definição da issue como opcional para atualizações de rotina e obrigatória apenas para tarefas complexas. Inclusão do registro no histórico de alterações como etapa do fluxo. | Eduardo Alves |
    | 2.4 | 19/08/2026 | Inclusão do fluxo de *hotfix* no diagrama de ramificação e na tabela de branches, e do modelo simplificado adotado nos repositórios de apoio. Atualização das referências dos repositórios, remoção da política de notificação via Discord. | Eduardo Alves |

## Sumário

- [1. Introdução](#introducao)
- [2. Ferramentas](#ferramentas)
- [3. Documentos desta seção](#documentos)
- [4. Referências](#referencias)

---

<a id="introducao"></a>

## 1. Introdução

Este documento estabelece o conjunto de padrões e modelos para o gerenciamento de configuração de software (GCS) do sistema Notifica Saúde, destinado às equipes responsáveis pelo desenvolvimento das áreas de Front-end, Back-end e Inteligência Artificial. O gerenciamento de configuração de software é uma disciplina essencial da Engenharia de Software, cujo propósito é assegurar a organização, o controle sistemático e a rastreabilidade dos artefatos gerados ao longo do ciclo de vida do projeto.

O GCS compreende os processos voltados à descrição, ao controle e à gestão de mudanças em artefatos de software, tais como códigos-fonte, documentações técnicas, protótipos, dados, modelos e demais componentes críticos. A gestão eficaz desses artefatos é fundamental para garantir a integridade, a consistência e a evolução ordenada do software, especialmente em contextos de desenvolvimento colaborativo e multidisciplinar.

Em projetos que envolvem a colaboração entre membros da equipe e a integração de diferentes tecnologias, a adoção de práticas de GCS é imprescindível. Tais práticas facilitam a coordenação entre os envolvidos e fornecem mecanismos para a rastreabilidade de mudanças, a manutenção da consistência do produto e a resposta ágil e controlada a requisitos emergentes. Além disso, o GCS mitiga riscos comuns como conflitos de versão, perda de informações e inconsistências no código, que podem comprometer a qualidade e a entrega do software.

A aplicação das diretrizes aqui apresentadas visa promover uma colaboração sustentável entre os membros da equipe, assegurando transparência, responsabilidade compartilhada e eficiência no gerenciamento de mudanças. Este documento serve como referência técnica e prática, alinhada às necessidades específicas do projeto Notifica Saúde. Ao adotar as recomendações aqui delineadas, a equipe estará apta a enfrentar os desafios inerentes ao desenvolvimento de software de forma estruturada e coordenada, garantindo a qualidade e a consistência dos resultados entregues.

---

<a id="ferramentas"></a>

## 2. Ferramentas

O projeto é distribuído entre os repositórios listados abaixo, todos hospedados no GitHub e sujeitos às diretrizes deste documento.

| Repositório | Finalidade | Endereço |
| --- | --- | --- |
| Front-end | Aplicação web do sistema | [notifica-saude-frontend](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend) |
| Back-end | API e regras de negócio | [notifica-saude-backend](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend) |
| Protótipo | Protótipo funcional | [notifica-saude-prototipo-funcional](https://github.com/Notifica-Saude-2026-2/notifica-saude-prototipo-funcional) |
| Testes E2E | Testes de ponta a ponta | [notifica-saude-e2e](https://github.com/Notifica-Saude-2026-2/notifica-saude-e2e) |
| Deploy | Artefatos e scripts de implantação | [notifica-saude-deploy](https://github.com/Notifica-Saude-2026-2/notifica-saude-deploy) |
| Documentação | Documentos do projeto publicados via MkDocs | [notifica-saude-docs](https://github.com/Notifica-Saude-2026-2/notifica-saude-docs) |

Além dos repositórios, a equipe utiliza o **GitHub Issues** e o **GitHub Projects** para o gerenciamento de mudanças, o **GitHub Actions** para as pipelines de integração contínua, o **Lefthook** como mecanismo local de verificação e o **Discord** para notificação automatizada de Pull Requests.

---

<a id="documentos"></a>

## 3. Documentos desta seção

| Documento | Descrição |
| --- | --- |
| [Modelo de Ramificação](modelo-ramificacao.md) | Descreve o GitFlow adotado no projeto, o propósito de cada branch, o passo a passo de uso e a padronização de nomenclatura. |
| [Gerenciamento de Mudanças](gerenciamento-mudancas.md) | Define o uso de issues como ponto de partida obrigatório de toda alteração e a composição padrão de uma issue. |
| [Gerenciamento de Pull Requests](pull-requests.md) | Regras de revisão, aprovação e merge, comunicação via Discord, tratamento de demandas não planejadas e política de Squash Merge. |
| [Padrão de Mensagens de Commit](padrao-commits.md) | Formato, tipos permitidos e regras de escrita das mensagens de commit. |
| [Gerenciamento de Documentação](gerenciamento-documentacao.md) | Modelo de ramificação do repositório de documentação, quando abrir issue, fluxo de Pull Request e revisão, nomenclatura, versionamento e manutenção dos artefatos documentais. |
| [Definição de Pronto (DoD) e de Pronto para Desenvolvimento (DoR)](definicao-de-pronto.md) | Critérios obrigatórios para iniciar uma tarefa e para considerá-la concluída. |
| [Gerenciamento de Releases](gerenciamento-releases.md) | Ciclo de release adotado, do planejamento ao monitoramento pós-entrega. |
| [Pipelines de CI](pipelines-ci.md) | Política de uso do GitHub Actions e do fallback local com Lefthook. |

---

<a id="referencias"></a>

## 4. Referências

- [Gerenciamento de Releases — Smartsheet](https://pt.smartsheet.com/release-management-process)
- [Gerenciamento de Branches — The Ultimate Guide to Git Branching Strategies](https://blog.prateekjain.dev/the-ultimate-guide-to-git-branching-strategies-6324f1aceac2)
- [Modelo GitFlow — Atlassian](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [Definition of Ready — Scrum.org](https://www.scrum.org/resources/blog/ready-or-not-demystifying-definition-ready-scrum)
- [The Secret to Better Version Control: GitFlow Explained](https://medium.com/@zaghdoudi.mohamed/the-secret-to-better-version-control-gitflow-explained-6cbb094780a4)
