<h1 align="center">Gerenciamento de Releases</h1>


<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Introdução](#introducao)
- [2. Diretrizes adotadas](#diretrizes)
- [3. Etapas do ciclo](#etapas)

---

<a id="introducao"></a>

## 1. Introdução

O gerenciamento de releases é o processo de planejamento, agendamento e gerenciamento de um software ao longo das etapas de desenvolvimento, teste, implantação e suporte ao lançamento das versões. Quando conduzido com eficácia, aumenta o número de lançamentos bem-sucedidos e reduz problemas de qualidade.

O processo de release deste projeto segue um ciclo simplificado, adequado a equipes pequenas, porém estruturado para permitir escalabilidade no futuro. Esse ciclo organiza as atividades desde a concepção até a disponibilização e o acompanhamento da versão do software.

---

<a id="diretrizes"></a>

## 2. Diretrizes adotadas

Para manter a conformidade com o cenário atual do projeto e da equipe, foram adotadas as seguintes diretrizes:

- o ciclo deve ser leve e adaptável à maturidade da equipe;
- as releases devem ser pequenas e incrementais, facilitando o controle e a correção;
- o processo deve evoluir conforme o crescimento do projeto (por exemplo, automação, CI/CD).

---

<a id="etapas"></a>

## 3. Etapas do ciclo

### 3.1 Planejamento

Definição das funcionalidades e correções que compõem a release, com base nas issues priorizadas.

- Selecionar e priorizar as issues que farão parte da release.
- Definir o escopo da versão, ou seja, as funcionalidades e correções incluídas.
- Garantir que as issues estejam bem descritas e com critérios de aceitação, conforme a [Definição de Pronto para Desenvolvimento (DoR)](definicao-de-pronto.md#dor).
- Identificar riscos.

### 3.2 Desenvolvimento

Implementação das alterações em *feature branches*, seguindo o [modelo de ramificação](modelo-ramificacao.md).

- Criar branches a partir da `develop`.
- Implementar as alterações conforme a issue.
- Realizar commits padronizados e frequentes.
- Garantir aderência aos padrões de código e de documentação.

### 3.3 Testes e validação

Execução de testes e verificação dos critérios da Definição de Pronto antes da integração.

- Executar testes manuais e/ou automatizados.
- Garantir o atendimento à [Definição de Pronto (DoD)](definicao-de-pronto.md#dod).
- Verificar a ausência de erros críticos.
- Validar os critérios de aceitação das issues.
- Revisar o código por meio de Pull Requests.

### 3.4 Integração e release

Criação de uma branch de release a partir da `develop`, realização de testes e validação final, seguida do merge na `main`.

- Realizar o merge das branches aprovadas na `main` e na `develop`.
- Garantir que a aplicação esteja estável após a integração.
- Criar a tag de versão conforme o padrão definido.
- Registrar as alterações nas *release notes*.

### 3.5 Monitoramento

Acompanhamento pós-release para identificar falhas, coletar feedback e planejar ajustes futuros.

- Identificar e registrar possíveis falhas ou melhorias.
- Coletar feedback dos usuários e da equipe.
- Criar novas issues para os ajustes necessários.
