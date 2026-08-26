<h1 align="center">Definição de Pronto (DoD) e Definição de Pronto para Desenvolvimento (DoR)</h1>


<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Definição de Pronto (DoD)](#dod)
    - [1.1 Critérios gerais](#dod-gerais)
    - [1.2 Código](#dod-codigo)
    - [1.3 Testes](#dod-testes)
    - [1.4 Integração](#dod-integracao)
    - [1.5 Documentação](#dod-documentacao)
- [2. Definição de Pronto para Desenvolvimento (DoR)](#dor)
    - [2.1 Contexto e informações técnicas](#dor-descricao)
    - [2.2 Critérios de aceitação](#dor-criterios)
    - [2.3 Contexto e informações técnicas](#dor-contexto)

---

<a id="dod"></a>

## 1. Definição de Pronto (DoD)

A **Definição de Pronto** estabelece os critérios obrigatórios que devem ser atendidos para que uma funcionalidade, correção ou artefato seja considerado concluído e adequado para integração à branch principal do projeto.

Uma tarefa somente será considerada pronta quando **todos** os critérios descritos nesta seção forem atendidos.

<a id="dod-gerais"></a>

### 1.1 Critérios gerais

- A tarefa deve estar vinculada a uma issue previamente criada.
- Os critérios de aceitação definidos na issue devem estar completamente atendidos.
- A funcionalidade deve estar implementada e validada.
- Não devem existir erros críticos conhecidos relacionados à entrega.

<a id="dod-codigo"></a>

### 1.2 Código

- O código deve estar implementado conforme os requisitos da issue.
- Deve seguir os padrões de codificação definidos pela equipe.
- Não deve conter erros de compilação.
- Não deve conter *warnings* críticos.
- Deve estar organizado e legível.

<a id="dod-testes"></a>

### 1.3 Testes

- Testes devem ser implementados quando aplicável.
- Todos os testes devem ser executados com sucesso.
- A funcionalidade deve ser validada manualmente.
- Casos de erro devem ser tratados adequadamente.

<a id="dod-integracao"></a>

### 1.4 Integração

- O código deve estar integrado corretamente com as demais partes do sistema.
- A aplicação deve executar sem falhas após a integração.
- Não deve haver conflitos com a branch principal.
- A build do projeto deve ser executada com sucesso.

<a id="dod-documentacao"></a>

### 1.5 Documentação

A documentação deve ser atualizada sempre que a alteração realizada impactar artefatos documentais do projeto. Consideram-se artefatos documentais, entre outros:

- documentos de requisitos;
- documentos de gerência de configuração de software;
- diagramas e especificações técnicas.

Um artefato documental é considerado pronto quando:

- a alteração realizada pode ser identificada e rastreada no histórico de versões;
- todas as seções afetadas pela alteração foram devidamente revisadas e atualizadas;
- o documento foi atualizado de acordo com a alteração realizada;
- não existem trechos desatualizados ou contraditórios;
- as informações presentes estão corretas e consistentes com o estado atual do sistema;
- o documento segue o padrão definido pela equipe quanto a estrutura, nomenclatura e formatação, conforme [Gerenciamento de Documentação](gerenciamento-documentacao.md).

---

<a id="dor"></a>

## 2. Definição de Pronto para Desenvolvimento (DoR)

A **Definição de Pronto para Desenvolvimento** (*Definition of Ready* — DoR) estabelece os critérios mínimos que uma issue deve atender para que possa ser iniciada pela equipe de desenvolvimento. Seu objetivo é garantir que as tarefas estejam suficientemente detalhadas, compreensíveis e preparadas, reduzindo ambiguidades, retrabalho e interrupções durante o desenvolvimento.

Uma issue somente poderá ser iniciada quando todos os critérios descritos nesta seção forem atendidos.

<a id="dor-descricao"></a>

### 2.1 Contexto e informações técnicas

A issue deve estar descrita de forma clara, preferencialmente no formato de história de usuário ou equivalente, permitindo a compreensão do contexto da funcionalidade ou correção a ser implementada. O objetivo da tarefa deve estar explicitamente definido, de modo que todos os membros da equipe compreendam o valor e a finalidade da alteração. Além disso, o escopo da tarefa deve estar devidamente delimitado, evitando ambiguidades quanto ao que deve ou não ser desenvolvido.

<a id="dor-criterios"></a>

### 2.2 Critérios de aceitação

Os critérios de aceitação devem estar previamente definidos na issue, descritos de forma objetiva e mensurável. Esses critérios devem permitir a validação clara da funcionalidade implementada, garantindo que seja possível verificar se a entrega atende aos requisitos estabelecidos. A definição adequada dos critérios de aceitação contribui para reduzir ambiguidades e orienta tanto o desenvolvimento quanto a validação da tarefa.

<a id="dor-contexto"></a>

### 2.3 Contexto e informações técnicas

A issue deve conter informações técnicas suficientes para possibilitar sua implementação sem necessidade de esclarecimentos adicionais. Sempre que aplicável, devem ser identificadas as dependências relacionadas, como integrações com outros módulos, serviços ou componentes do sistema. Além disso, os possíveis impactos da alteração em outras partes do sistema devem ser considerados e descritos, garantindo uma visão mais ampla da mudança a ser realizada.
