<h1 align="center">Casos de Teste</h1>

<p align="center"><strong>Mantenedores:</strong> Aline Hirokawa, Pedro Soledade, Fabio Ramos, Catarina Freisleben</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 17/03/2026 | Criação do documento e primeira versão | Aline Hirokawa |
    | 2.0 | 31/03/2026 | Adição da seção de Testes Unitários e de Integração | Aline Hirokawa |
    | 2.1 | 01/04/2026 | Adição na seção de Testes Unitários | Aline Hirokawa e Pedro Soledade |
    | 2.2 | 02/04/2026 | Adição na seção de Testes Unitários | Aline Hirokawa e Pedro Soledade |
    | 2.3 | 02/04/2026 | Remoção de todos os Testes Unitários | Pedro Soledade |
    | 2.4 | 13/04/2026 | Adição de casos de teste na seção de Testes Funcionais | Pedro Soledade |
    | 2.5 | 14/04/2026 | Adição de casos de teste na seção de Testes Funcionais | Aline Hirokawa e Pedro Soledade |
    | 2.6 | 15/04/2026 | Separação de Seções entre Testes Funcionais e Testes End-to-End | Pedro Soledade |
    | 3.0 | 16/04/2026 | Adição da seção de Critérios de Teste | Pedro Soledade |
    | 3.1 | 29/04/2026 | Alteração na validação do rate limit | Fabio Ramos |
    | 3.2 | 29/04/2026 | Adição de casos de teste na seção de Testes Funcionais | Pedro Soledade |
    | 3.3 | 30/04/2026 | Adição da seção de Critérios de Teste | Pedro Soledade |
    | 3.4 | 04/05/2026 | Alteração na Seção de Testes Funcionais | Pedro Soledade |
    | 3.5 | 05/05/2026 | Alteração na Seção de Testes Funcionais | Pedro Soledade |
    | 4.0 | 13/05/2026 | Reestruturação do documento adicionando CTs de acordo com Épicos e modificação destes. | Pedro Soledade |
    | 4.1 | 14/05/2026 | Adição de Testes End-to-End | Pedro Soledade e Aline Hirokawa |
    | 4.2 | 26/05/2026 | Adição de Testes End-to-End | Aline Hirokawa |
    | 4.3 | 28/05/2026 | Adição de Testes Funcionais | Pedro Soledade |
    | 4.4 | 10/06/2026 | Edição dos Critérios de teste | Pedro Soledade |
    | 4.5 | 08/09/2026 | Adição do CT-E2E-018 na seção de Testes E2E e nos Critérios de Teste | Catarina Freisleben |
    | 4.6 | 09/09/2026 | Adição do CT-NF-010 na seção de Testes Não-Funcionais | Catarina Freisleben |
    | 4.7 | 23/09/2026 | Migração do documento (Google Docs/PDF) para o MkDocs. A matriz de rastreabilidade gerada a partir dos casos de teste foi publicada em documento próprio. | Sophya Ribeiro |
    | 4.8 | 29/09/2026 | Adição dos casos de teste da US-4.1 (CT-FUN-041 a CT-FUN-046 e CT-E2E-019 a CT-E2E-020) nas seções de Testes Funcionais, Testes End-to-End e Critérios de Teste | Catarina Freisleben |
    | 4.9 | 29/09/2026 | Adição dos casos de teste da US-4.2 (CT-FUN-047 a CT-FUN-052 e CT-E2E-021) nas seções de Testes Funcionais, Testes End-to-End e Critérios de Teste | Catarina Freisleben |

## Sumário

- [1. Introdução](#introducao)
- [2. Testes de Autenticação](#testes-autenticacao)
    - [2.1. Épico 3 - Autenticação e controle de acesso](#testes-autenticacao-epico-3)
- [3. Testes Funcionais](#testes-funcionais)
    - [3.1. Épico 1 - Registro de Notificação de Incidentes](#testes-funcionais-epico-1)
    - [3.2. Épico 2 - Gestão e Classificação de Notificações](#testes-funcionais-epico-2)
        - [3.2.1. História 2.1 - Visualizar notificações registradas](#testes-us-2-1)
        - [3.2.2. História 2.2 - Complementar ou corrigir informações da notificação](#testes-us-2-2)
        - [3.2.3. História 2.3 - Classificar incidente notificado](#testes-us-2-3)
        - [3.2.4. História 2.4 - Definir e gerenciar status do incidente](#testes-us-2-4)
        - [3.2.5. História 2.5 - Encaminhar notificação para área responsável](#testes-us-2-5)
    - [3.3. Épico 4 - Registro de análise em notificação de incidentes](#testes-funcionais-epico-4)
        - [3.3.1. História 4.1 - Visualizar incidentes para análise](#testes-us-4-1)
        - [3.3.2. História 4.2 - Registrar análise do incidente](#testes-us-4-2)
- [4. Testes End-to-End](#testes-e2e)
- [5. Testes Não-Funcionais](#testes-nao-funcionais)
- [6. Critérios de Teste](#criterios-teste)
    - [6.1 Fluxo Alternativo](#criterios-fluxo-alternativo)
    - [6.2 Partição por Equivalência](#criterios-particao)
    - [6.3 Análise de Valor Limite](#criterios-valor-limite)
- [7. Telas](#telas)

---

## 1. Introdução { #introducao }

Este documento especifica os testes que devem ser realizados para as histórias de usuário e os requisitos não-funcionais do sistema NotificaSaúde. Ele contém todas as informações necessárias para a construção dos scripts de teste, como preparação do ambiente, dados de entrada e resultados esperados.

### 1.1 Visão geral do documento

Além desta seção introdutória, as seções seguintes estão organizadas como descrito abaixo. A relação entre histórias de usuário, requisitos e casos de teste está no documento [Matriz de Rastreabilidade](matriz-rastreabilidade.md).

| Seção | Conteúdo |
| --- | --- |
| 2 – Testes de Autenticação | Testes das funcionalidades de login, recuperação e redefinição de senha e controle de acesso. |
| 3 – Testes Funcionais | Testes relacionados às regras de negócio e comportamentos esperados do sistema, incluindo validações de campos, obrigatoriedade, fluxos principais e alternativos. |
| 4 – Testes End-to-End | Testes de ponta a ponta que validam o fluxo completo do usuário no sistema, desde o acesso inicial até a conclusão do processo, garantindo a integração entre as telas, componentes e persistência dos dados. |
| 5 – Testes Não-Funcionais | Testes de aspectos como disponibilidade, segurança, desempenho, compatibilidade, acessibilidade e usabilidade do sistema. |
| 6 – Critérios de Teste | Cenários de fluxo alternativo, partição por equivalência e análise de valor limite dos casos de teste. |
| 7 – Telas | Telas e componentes do sistema citados nos procedimentos. |

Cada caso de teste é identificado por um código: **CT-AUTH** (autenticação), **CT-FUN** (funcional), **CT-E2E** (ponta a ponta) e **CT-NF** (não-funcional).

---

## 2. Testes de Autenticação { #testes-autenticacao }

### 2.1. Épico 3 - Autenticação e controle de acesso { #testes-autenticacao-epico-3 }

#### CT-AUTH-001 — Acesso à tela de login { #ct-auth-001 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-3.1 | CA01 | Fluxo principal |

**Objetivo**

Validar que o sistema apresenta a tela de login para usuários não autenticados

**Pré-condições**

- Sistema disponível
- Usuário acessando o sistema

**Procedimentos**

1\. Acessar o sistema
2\. Selecionar a opção "Acessar área profissional"

**Resultado esperado**

- Sistema exibe a Tela de Login

#### CT-AUTH-002 — Autenticação com credenciais de administrador { #ct-auth-002 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-3.1 | CA02 | Partição por equivalência |

**Objetivo**

Garantir que o sistema autentica corretamente com credenciais válidas

**Pré-condições**

[CT-AUTH-001](#ct-auth-001)

- Usuário cadastrado no banco

**Dados de entrada**

- **E-mail:** admin.sistema@notificasaude.br
- **Senha:** Notifica@2026

**Procedimentos**

1\. Inserir email
2\. Inserir senha
3\. Clicar em “Entrar”

**Resultado esperado**

- Usuário autenticado
- Redirecionamento para área interna

#### CT-AUTH-003 — Validação de credenciais inválidas { #ct-auth-003 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-3.1 | CA03 | Partição por equivalência |

**Objetivo**

Garantir que o sistema rejeita credenciais inválidas

**Pré-condições**

[CT-AUTH-001](#ct-auth-001)

**Dados de entrada**

- **E-mail válido:** admin.sistema@notificasaude.br
- **Senha inválida:** notifica26
- **E-mail inválido:** adm.sistema@gmail.com
- **Senha válida:** Notifica@2026

**Procedimentos**

1\. Inserir e-mail inválido + senha válida
2\. Clicar em “Entrar”
3\. Inserir e-mail válido + senha inválida
4\. Clicar em “Entrar”
5\. Inserir e-mail inválido + senha inválida
6\. Clicar em “Entrar”

**Resultado esperado**

- Sistema exibe mensagem de erro
- Acesso não permitido

#### CT-AUTH-004 — Acesso à tela de recuperação de senha { #ct-auth-004 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-3.2 | CA01 | Fluxo principal |

**Objetivo**

Validar redirecionamento para recuperação de senha

**Pré-condições**

[CT-AUTH-001](#ct-auth-001)

**Procedimentos**

1\. Clicar em “Esqueci minha senha”

**Resultado esperado**

- Sistema redireciona para Tela de recuperação

#### CT-AUTH-005 — Solicitação de recuperação com e-mail inválido { #ct-auth-005 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-3.2 | CA02 | Partição por equivalência |

**Objetivo**

Garantir envio de link para e-mail inválido

**Pré-condições**

[CT-AUTH-004](#ct-auth-004)

**Dados de entrada**

- **E-mail inválido:** adm.sistema@gmail.com

**Procedimentos**

1\. Inserir e-mail inválido
2\. Tentar continuar

**Resultado esperado**

- Sistema exibe mensagem de erro

#### CT-AUTH-006 — Acesso ao link de redefinição { #ct-auth-006 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-3.2 | CA03 | Fluxo principal |

**Objetivo**

Validar acesso à tela de redefinição via link

**Pré-condições**

[CT-AUTH-004](#ct-auth-004)

**Dados de entrada**

- **E-mail:** admin.sistema@notificasaude.br

**Procedimentos**

1\. Inserir e-mail
2\. Clicar em “Continuar”
3\. Acessar link recebido no e-mail

**Resultado esperado**

- Sistema redireciona para a Tela de redefinição

#### CT-AUTH-007 — Validação de link inválido ou expirado { #ct-auth-007 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-3.2 | CA04 + CA08 | Partição por equivalência |

**Objetivo**

Garantir bloqueio de links inválidos ou expirados

**Pré-condições**

[CT-AUTH-006](#ct-auth-006)

**Procedimentos**

1\. Acessar link expirado
2\. Tentar continuar

**Resultado esperado**

- Sistema exibe mensagem de erro
- Permite solicitar novo link

#### CT-AUTH-008 — Redefinição de senha inválida { #ct-auth-008 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-3.2 | CA05 | Partição por equivalência |

**Objetivo**

Validar atualização de senha

**Pré-condições**

[CT-AUTH-006](#ct-auth-006)

**Dados de entrada**

- **Nova senha inválida:** notifica123

**Procedimentos**

1\. Inserir nova senha inválida
2\. Tentar continuar

**Resultado esperado**

- Sistema exibe erro para cada critério não preenchido

#### CT-AUTH-009 — Validação de segurança do link (token) { #ct-auth-009 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-3.2 | CA07 | Partição por equivalência |

**Objetivo**

Garantir que o link contém token válido

**Pré-condições**

[CT-AUTH-006](#ct-auth-006)

**Procedimentos**

1\. Alterar token do link
2\. Acessar

**Resultado esperado**

- Sistema bloqueia acesso

---

## 3. Testes Funcionais { #testes-funcionais }

### 3.1. Épico 1 - Registro de Notificação de Incidentes { #testes-funcionais-epico-1 }

#### CT-FUN-001 — Acesso ao formulário de registro de incidente { #ct-fun-001 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-1.1 | CA01 | Fluxo principal |

**Objetivo**

Validar que o usuário consegue acessar o formulário de notificação

**Pré-condições**

- Sistema disponível

**Procedimentos**

1\. Acessar o sistema
2\. Selecionar a opção "Registrar incidente"

**Resultado esperado**

- Sistema exibe o formulário eletrônico de notificação na Tela 1

#### CT-FUN-002 — Validação de obrigatoriedade de campos { #ct-fun-002 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-1.1 | CA02 | Fluxo principal |

**Objetivo**

Garantir a obrigatoriedade dos campos.

**Pré-condições**

[CT-FUN-001](#ct-fun-001)

**Dados de entrada**

- **Instituição:** Hospital A
- **Envolve paciente:** Sim
- **Idade:** 0-1 ano
- **Sexo:** Feminino
- **Data de incidente:** Data atual (dd/mm/aaaa)
- **Turno:** Manhã (7h-13h)
- **Setor:** Clínica Médica Pediátrica
- **Descrição:** [TESTE] Durante a conferência de rotina dos medicamentos prescritos, foi identificado que uma dose de antibiótico havia sido preparada com concentração diferente da prescrita para uma paciente internada na UTI Neonatal. A divergência foi detectada antes da administração graças à dupla checagem realizada pela equipe de enfermagem. O medicamento foi descartado e uma nova preparação foi realizada conforme a prescrição médica. Não houve exposição da paciente ao produto incorreto nem registro de danos clínicos.
- **Papel:** Enfermeiro
- **Nome:** [TESTE] Mariana Souza
- **Contato:** [TESTE] (99)99999-9999

**Procedimentos**

*Tela 1*
1\. Tentar avançar sem preencher Tela 1
2\. Selecionar instituição
3\. Tentar avançar
4\. Selecionar se envolve paciente
5\. Clicar em “Próximo”
*Tela 2*
6\. Tentar avançar sem preencher Tela 2
7\. Selecionar idade
8\. Tentar avançar
9\. Selecionar sexo
10\. Clicar em “Próximo”
*Tela 3*
11\. Tentar avançar sem preencher Tela 3
12\. Inserir data de incidente
13\. Tentar avançar
14\. Selecionar turno
15\. Tentar avançar
16\. Selecionar setor
17\. Clicar em “Próximo”
*Tela 4*
18\. Tentar avançar sem preencher Tela 4
19\. Preencher descrição
20\. Tentar avançar
21\. Selecionar papel
22\. Clicar em “Próximo”
*Tela 5*
23\. Tentar avançar sem preencher Tela 5

**Resultado esperado**

- Sistema bloqueia avanço nas Telas 1 a 4
- Sistema permite avanço na Tela 5

#### CT-FUN-003 — Validação de data do incidente superior a data atual { #ct-fun-003 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-1.1 | CA02 | Análise de valor limite |

**Objetivo**

Garantir que não é permitido registrar incidentes com data superior a data atual.

**Pré-condições**

[CT-FUN-001](#ct-fun-001)

**Dados de entrada**

- **Instituição:** Hospital A
- **Envolve paciente:** Não
- **Data de incidente:** posterior a data atual (dd/mm/aaaa)

**Procedimentos**

*Tela 1*
1\. Selecionar instituição
2\. Selecionar se houve paciente
3\. Clicar em “Próximo”
*Tela 3*
1\. Inserir data de incidente

**Resultado esperado**

- Sistema emite mensagem “Data inválida!”
- Sistema impede avanço

#### CT-FUN-005 — Exibição dinâmica do campo de especificação ao selecionar opção “Outro” { #ct-fun-005 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-1.1 | CA02 | Fluxo alternativo |

**Objetivo**

Validar que, ao selecionar a opção “Outro”, o sistema exibe um campo adicional para especificação.

**Pré-condições**

[CT-FUN-001](#ct-fun-001)

**Dados de entrada**

- **Instituição:** Hospital C
- **Idade:** 18-59 anos
- Sexo [Outro]: Intersexo
- **Envolve paciente:** Sim
- Data de incidente atual (dd/mm/aaaa)
- **Turno:** Tarde (13h-19h)
- Setor [Outro]: Unidade de Acolhimento e Classificação de Risco
- **Descrição:** Durante o preparo, foi identificada divergência entre a prescrição médica e o medicamento separado pela equipe de enfermagem. A falha foi percebida antes da administração, evitando dano ao paciente. O incidente está relacionado a erro de processo e comunicação na equipe assistencial.
- Papel [Outro]: Profissional de Acolhimento (Classificador de Risco)

**Procedimentos**

*Tela 1*
1\. Selecionar instituição
2\. Selecionar se houve paciente
3\. Clicar em “Próximo”
*Tela 2*
4\. Selecionar idade
5\. Selecionar sexo
6\. Preencher campo Outro
7\. Clicar em “Próximo”
*Tela 3*
8\. Inserir data de incidente
9\. Selecionar turno
10\. Selecionar setor
11\. Preencher campo Outro
12\. Clicar em “Próximo”
*Tela 4*
13\. Preencher descrição
14\. Selecionar papel
15\. Preencher campo Outro
16\. Clicar em “Próximo”

**Resultado esperado**

- Ao selecionar “Outro”, o sistema deve exibir dinamicamente um campo de texto para preenchimento
- O campo deve ser obrigatório quando “Outro” estiver selecionado
- O sistema deve permitir inserir valores no campo exibido
- O campo deve desaparecer caso o usuário altere a seleção para outra opção válida
- O comportamento deve ocorrer tanto na Tela 2, quanto na Tela 3 e na Tela 4

### 3.2. Épico 2 - Gestão e Classificação de Notificações { #testes-funcionais-epico-2 }

#### 3.2.1. História 2.1 - Visualizar notificações registradas { #testes-us-2-1 }

##### CT-FUN-006 — Visualização da lista de notificações com sucesso { #ct-fun-006 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA01 | Fluxo principal |

**Objetivo**

Validar que o profissional do NSP consegue acessar a lista de notificações registradas.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- Existirem notificações cadastradas.

**Procedimentos**

*Tela Todos Incidentes*
1\. Verificar acesso às notificações

**Resultado esperado**

- O sistema exibe a lista de notificações registradas.

##### CT-FUN-007 — Exibição correta dos dados mínimos da notificação. { #ct-fun-007 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA02 | Fluxo principal |

**Objetivo**

Garantir que o sistema exiba corretamente os dados mínimos da notificação.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.

**Procedimentos**

*Tela Todos incidentes*
1\. Verificar os dados apresentados em cada item.

**Resultado esperado**

Cada notificação apresenta (no mínimo):

- Identificador único;
- Data de registro;
- Setor;
- Status;
- Primeiros 200 caracteres da descrição.

##### CT-FUN-008 — Visualização de notificações ordenadas por mais recentes { #ct-fun-008 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA03 | Fluxo principal |

**Objetivo**

Validar ordenação padrão das notificações.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.
- Existirem notificações com datas diferentes.

**Procedimentos**

*Tela Todos incidentes*
1\. Observar a ordem apresentada.

**Resultado esperado**

- O sistema apresenta notificações da mais recente para a mais antiga.

##### CT-FUN-009 — Ordenação de notificações ordenadas por mais antigas { #ct-fun-009 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA04 | Fluxo alternativo |

**Objetivo**

Validar ordenação manual das notificações.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.
- Existirem notificações com datas diferentes.

**Procedimentos**

*Tela Todos incidentes*
1\. Selecionar ordenação “Mais antigos”

**Resultado esperado**

- O sistema reorganiza as notificações da mais antiga para a mais recente.

##### CT-FUN-010 — Filtragem de notificações por setor { #ct-fun-010 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA05 | Partição por equivalência |

**Objetivo**

Validar filtro por setor

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.
- Existirem notificações com setores diferentes.

**Dados de entrada**

- **\*Setor:** primeiro setor depois de “Todos os setores”

\* Podem não haver um setor em específico vinculado à uma notificação ou setores podem não ser os mesmos em diferentes instituições.

**Procedimentos**

*Tela Todos incidentes*
1\. Selecionar filtro por setor
2\. Escolher um setor

**Resultado esperado**

- O sistema exibe apenas notificações do setor selecionado

##### CT-FUN-011 — Filtragem de notificações por tipo de incidente { #ct-fun-011 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA05 | Partição por equivalência |

**Objetivo**

Validar filtro por tipo de incidente

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.
- Existirem notificações classificadas com um tipo diferente de cada incidente.

**Dados de entrada**

- **Tipo de incidente 01:** Near Miss
- **Tipo de incidente 02:** Circunstância notificável
- **Tipo de incidente 03:** Incidente sem dano
- **Tipo de incidente 04:** Evento adverso

**Procedimentos**

*Tela Todos incidentes*
1\. Selecionar filtro por tipo
2\. Selecionar o tipo de incidente 01
3\. Validar aparição da(s) notificação(ões)
4\. Selecionar filtro por tipo
5\. Selecionar o tipo de incidente 02
6\. Validar aparição da(s) notificação(ões)
7\. Selecionar filtro por tipo
8\. Selecionar o tipo de incidente 03
9\. Validar aparição da(s) notificação(ões)
10\. Selecionar filtro por tipo
11\. Selecionar o tipo de incidente 04
12\. Validar aparição da(s) notificação(ões)

**Resultado esperado**

- O sistema exibe, respectivamente, as notificações dos tipos:
    - “Near Miss”
    - “Circunstância notificável”
    - “Incidente sem dano”
    - “Evento adverso”

##### CT-FUN-012 — Filtragem de notificações por grau de dano { #ct-fun-012 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA05 | Partição por equivalência |

**Objetivo**

Validar filtro por grau de dano

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.
- Existirem notificações classificadas com graus de dano diferentes.

**Dados de entrada**

- **Tipo de incidente:** Evento adverso
- **Grau de dano 01:** Leve
- **Grau de dano 02:** Moderado
- **Grau de dano 03:** Grave
- **Grau de dano 04:** Óbito
- **Grau de dano 05:** Never Event

**Procedimentos**

*Tela Todos incidentes*
1\. Selecionar filtro por tipo
2\. Selecionar o tipo de incidente
3\. Selecionar filtro por grau
4\. Selecionar o grau de dano 01
5\. Validar aparição da(s) notificação(ões)
6\. Selecionar filtro por grau
7\. Selecionar o grau de dano 02
8\. Validar aparição da(s) notificação(ões)
9\. Selecionar filtro por grau
10\. Selecionar o grau de dano 03
11\. Validar aparição da(s) notificação(ões)
12\. Selecionar filtro por grau
13\. Selecionar o grau de dano 04
14\. Validar aparição da(s) notificação(ões)
15\. Selecionar filtro por grau
16\. Selecionar o grau de dano 05
17\. Validar aparição da(s) notificação(ões)

**Resultado esperado**

- O sistema exibe, respectivamente, as notificações do tipo de incidente classificados como:
    - “Evento Adverso” + “Leve”
    - “Evento Adverso” + “Moderado”
    - “Evento Adverso” + “Grave”
    - “Evento Adverso” + “Óbito”
    - “Evento Adverso” + “Never Event”

##### CT-FUN-013 — Pesquisa de notificação por identificador válido { #ct-fun-013 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA06 | Partição por equivalência |

**Objetivo**

Garantir localização de notificações via identificador.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.

**Dados de entrada**

- **\*ID:** segundo identificador da listagem de notificações

\* O número dos IDs irá depender de quantas notificações já existem

**Procedimentos**

*Tela Todos incidentes*
1\. Identificar e copiar o segundo ID da listagem de notificações
2\. Informar o ID na barra de pesquisa
3\. Executar a busca

**Resultado esperado**

- O sistema exibe a notificação correspondente ao penúltimo número de notificações existentes

##### CT-FUN-014 — Acesso ao detalhamento completo da notificação { #ct-fun-014 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA07 | Fluxo principal |

**Objetivo**

Garantir acesso aos detalhes completos da notificação.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.

**Dados de entrada**

- **\*Notificação:** primeira notificação listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Todos incidentes*
1\. Selecionar a notificação
*Tela Geral Notificação*
2\. Verificar “Informações gerais”
3\. Verificar “Classificação”
4\. Verificar “Análise”
5\. Verificar “Histórico de modificações”

**Resultado esperado**

- O sistema apresenta detalhes completos da notificação.
    - ID
    - **Criado em:**
    - **Ocorrido em:**
    - Status
    - Três pontos
    - Informações gerais
    - Classificação
    - Análise
    - Histórico de modificações

#### 3.2.2. História 2.2 - Complementar ou corrigir informações da notificação { #testes-us-2-2 }

##### CT-FUN-015 — Edição de informações complementares da notificação { #ct-fun-015 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.2 | CA01 + CA02 | Fluxo principal |

**Objetivo**

Validar que o profissional do NSP consegue complementar informações da notificação

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas
- Existirem notificações que não foram arquivadas ou encaminhadas

**Dados de entrada**

- **\*Data de incidente:** data diferente e anterior à previamente selecionada
- **\*Turno:** turno diferente do previamente selecionado
- **\*Setor:** setor diferente do previamente selecionado

\*: Campos devem estar diferentes dos dados de entrada

**Procedimentos**

*Tela Todos incidentes*
1\. Abrir uma notificação.
*Tela Geral Notificação*
2\. Selecionar a opção “Editar”.
*Modal Edição*
3\. Alterar data de incidente
4\. Alterar turno
5\. Alterar setor
6\. Clicar em “Salvar alterações”

**Resultado esperado**

- Sistema salva alterações realizadas.
- Sistema mostra última modificação feita no formato: Última modificação registrada em: dd/mm/aaaa - h:min:s
- Dados atualizados ficam visíveis na notificação.
- Atualizações são registradas no Histórico de modificações.

##### CT-FUN-016 — Edição de informações complementares da notificação canceladas { #ct-fun-016 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.2 | CA01 + CA02 | Fluxo alternativo |

**Objetivo**

Validar que o profissional do NSP consegue cancelar complemento das informações da notificação

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas
- Existirem notificações que não foram arquivadas ou encaminhadas

**Dados de entrada**

- **\*Data de incidente:** data diferente e anterior à previamente selecionada
- **\*Turno:** turno diferente do previamente selecionado
- **\*Setor:** setor diferente do previamente selecionado

\*: Campos devem estar diferentes dos dados de entrada

**Procedimentos**

*Tela Todos incidentes*
1\. Abrir uma notificação.
*Tela Geral Notificação*
2\. Selecionar a opção “Editar”.
*Modal Edição*
3\. Alterar data de incidente
4\. Alterar turno
5\. Alterar setor
6\. Clicar em “Cancelar”

**Resultado esperado**

- Sistema cancela alterações realizadas.
- Dados não são atualizados.
- Não há modificações no Histórico de modificações.

##### CT-FUN-017 — Impedimento de edição da descrição original da notificação { #ct-fun-017 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.2 | CA03 | Fluxo principal |

**Objetivo**

Garantir integridade da descrição original do incidente

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.

**Dados de entrada**

- **\*Notificação:** primeira notificação listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Todos incidentes*
1\. Abrir a notificação.
*Tela Geral Notificação*
2\. Selecionar a opção “Editar”
*Modal Edição*
3\. Tentar alterar a descrição original.

**Resultado esperado**

- Campo não aparece para edição.

##### CT-FUN-018 — Registro de histórico de alterações da notificação { #ct-fun-018 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.2 | CA04 | Fluxo principal |

**Objetivo**

Garantir rastreabilidade das alterações realizadas

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas
- Existirem notificações que não foram arquivadas ou encaminhadas

**Dados de entrada**

- **\*Notificação:** primeira notificação listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

- **\*\*Setor:** setor diferente do previamente selecionado

\*\* Campo deve estar diferente do dado de entrada

**Procedimentos**

*Tela Todos incidentes*
1\. Abrir uma notificação.
*Tela Geral Notificação*
2\. Selecionar a opção “Editar”
*Modal Edição*
3\. Alterar setor
4\. Clicar em “Salvar alterações”

**Resultado esperado**

Histórico apresenta:

- Data da alteração;
- Hora da alteração;
- Usuário responsável pela alteração;
- Campo setor alterado.

#### 3.2.3. História 2.3 - Classificar incidente notificado { #testes-us-2-3 }

##### CT-FUN-019 — Acesso à funcionalidade de classificação do incidente { #ct-fun-019 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA01 | Fluxo principal |

**Objetivo**

Validar que o profissional do NSP consegue acessar a funcionalidade de classificação do incidente a partir dos detalhes da notificação.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas.

**Dados de entrada**

- **\*Notificação:** primeira notificação com status: Novo listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Todos incidentes*
1\. Selecionar a notificação
*Tela Geral Notificação*
2\. Selecionar “Classificar incidente”

**Resultado esperado**

- O sistema apresenta a Modal Classificação de incidente

##### CT-FUN-020 — Bloqueio de classificação com campos obrigatórios não preenchidos { #ct-fun-020 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA02 | Fluxo principal |

**Objetivo**

Garantir que o sistema impeça a classificação quando existirem campos obrigatórios não preenchidos.

**Pré-condições**

[CT-FUN-019](#ct-fun-019)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** vazio
- **Tipo de incidente:**
    - Erro de medicação;
    - Infecção relacionada à assistência.
- **O incidente envolve:**
    - Profissional de saúde;
    - Equipamento.
- **Observações do NSP:** vazio

**Procedimentos**

*Modal Classificação de incidente*
1\. Selecionar classificação
2\. Não preencher grau do dano
3\. Selecionar tipo de incidente
4\. Selecionar o que o incidente envolve
5\. Não preencher Observações do NSP
6\. Clicar em “Salvar classificação”.

**Resultado esperado**

- O sistema impede o salvamento da classificação.

##### CT-FUN-021 — Exibição dinâmica dos campos de classificação do incidente { #ct-fun-021 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA03 | Fluxo alternativo |

**Objetivo**

Validar que o sistema apresenta corretamente os campos condicionais conforme a classificação selecionada

**Pré-condições**

[CT-FUN-019](#ct-fun-019)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** Never Event
- **tipo de Never Event:** Procedimento cirúrgico realizado no paciente errado

**Procedimentos**

*Modal Classificação do incidente*
1\. Selecionar classificação
2\. Selecionar grau do dano
3\. Verificar a exibição do campo “Tipo específico de Never Event”
4\. Selecionar um tipo de Never Event
5\. Clicar em “Salvar rascunho”.

**Resultado esperado**

- O sistema apresenta dinamicamente o campo “Tipo específico de Never Event”
- O sistema exibe as opções previstas para Tipo específico de Never Event:
    - Alta ou liberação de paciente de qualquer idade que seja incapaz de tomar decisões, para outra pessoa não autorizada.
    - Contaminação na administração de O2 ou gases medicinais.
    - Desaparecimento do corpo do recém-nascido que foi à óbito.
    - Exodontia de dente errado.
    - Gás errado na administração de O2 ou gases medicinais.
    - Inseminação artificial ou fertilização in vitro com o esperma do doador errado ou com o óvulo errado.
    - Lesão grave associado à queda do paciente durante prestação de cuidados/atendimento.
    - Lesão por Pressão estágio 3 (perda total da espessura da pele).
    - Lesão por Pressão estágio 4 (perda total da espessura da pele e perda tissular).
    - Lesão por Pressão Não Classificável (perda total da espessura da pele e perda tissular não visível).
    - Óbito associado à queda do paciente durante prestação de cuidados/atendimento.
    - Óbito intraoperatório ou imediatamente pós-operatório / pós procedimento em paciente ASA Classe 1.
    - Óbito ou lesão grave de paciente associado à fuga do paciente.
    - Óbito ou lesão grave de paciente associado a choque elétrico durante a assistência nos serviços de saúde.
    - Óbito ou lesão grave de paciente ou colaborador associado à introdução de objeto metálico em área de Ressonância Magnética.
    - Óbito ou lesão grave de paciente associado ao uso de contenção física ou grades da cama durante a assistência no serviço de saúde.
    - Óbito ou lesão grave do paciente associado à queimadura decorrente de qualquer fonte durante a assistência no serviço de saúde.
    - Óbito ou lesão grave de paciente resultante de perda irrecuperável de amostra biológica insubstituível.
    - Óbito ou lesão grave de recém-nascido associado(a) ao trabalho de parto, ou parto em gestação de baixo risco.
    - Óbito ou lesão grave resultante de falha no acompanhamento ou na comunicação dos resultados de exames laboratoriais ou de patologia clínica.
    - Óbito ou lesão grave resultante de falha no acompanhamento ou na comunicação dos resultados de exames radiológicos/de radiodiagnóstico.
    - Óbito ou lesão materna grave associado(a) ao trabalho de parto ou parto em gestação de baixo risco.
    - Procedimento cirúrgico realizado em local errado.
    - Procedimento cirúrgico realizado no lado errado do corpo.
    - Procedimento cirúrgico realizado no paciente errado.
    - Queda do recém-nascido durante o parto.
    - Realização de cirurgia errada em um paciente.
    - Retenção não intencional de corpo estranho em um paciente após a cirurgia.
    - Suicídio de paciente, tentativa de suicídio, dano auto infligido que resulte em lesão grave durante a assistência dentro do serviço de saúde.
    - Troca de bebês.
- O sistema fecha o modal
- O sistema salva as alterações sem finalizar a classificação

##### CT-FUN-022 — Registro da classificação do incidente { #ct-fun-022 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA04 | Fluxo principal |

**Objetivo**

Validar que o sistema finaliza corretamente a classificação do incidente e atualiza o status da notificação.

**Pré-condições**

[CT-FUN-019](#ct-fun-019)

**Dados de entrada**

- **Classificação do incidente:** Circunstância notificável
- **Tipo de incidente:**
    - Comunicação
    - Documentação / prontuário
- **Envolvidos no incidente:**
    - Profissional de saúde
    - Sistema
- **Observações do NSP:** [TESTE] Identificada inconsistência no processo de comunicação e/ou registro das informações no sistema. A situação foi classificada como circunstância notificável por representar potencial risco à assistência, sem evidência de dano ao paciente. Recomenda-se orientação aos profissionais envolvidos quanto aos procedimentos de registro e comunicação, bem como avaliação das funcionalidades do sistema para prevenção de recorrências.

**Procedimentos**

*Modal Classificação do incidente*
1\. Selecionar classificação
2\. Selecionar tipo de incidente
3\. Selecionar envolvidos
4\. Preencher observações
5\. Clicar em “Salvar classificação”

**Resultado esperado**

- O sistema finaliza a classificação do incidente
- O sistema fecha o modal
- O status da notificação é atualizado automaticamente
- O sistema mostra última modificação na classificação no formato: Última classificação em: dd/mm/aaaa - h:min:s
- Prazo para análise é calculado e apresentado no sistema no formato: Prazo para análise: dd/mm/aaaa - h:min:s

##### CT-FUN-023 — Edição de notificação após encaminhamento do incidente { #ct-fun-023 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA05 | Fluxo principal |

**Objetivo**

Validar que o profissional do NSP não consegue editar após enviar notificação para análise.

**Pré-condições**

[CT-FUN-022](#ct-fun-022)

**Procedimentos**

*Tela Geral Notificação*
1\. Clicar em “Encaminhar notificação”
*Modal Encaminhamento*
2\. Verificar se campo “Setor destinatário” está correto para envio a. Deve estar de acordo com setor indicado na notificação
3\. Clicar em “Enviar”

**Resultado esperado**

- O sistema fecha o modal
- A Notificação aparece na ala de “Encaminhados”
- **Na aba de análise, aparece a mensagem:** ‘“Esse incidente ainda está pendente de análise.”
- **Histórico de notificações registra:**
    - Data da alteração;
    - Hora;
    - Usuário responsável;
    - Campos alterados.

##### CT-FUN-024 — Definição automática do prazo de validade para incidente sem dano ou dano leve { #ct-fun-024 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.3 | CA05 | Partição por equivalência |

**Objetivo**

Validar que o sistema define automaticamente o prazo de validade para incidente sem dano ou dano leve.

**Pré-condições**

[CT-FUN-019](#ct-fun-019)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** Leve
- **Tipo de incidente:** Falha de diagnóstico
- **O incidente envolve:**
    - Paciente
    - Sistema de informação
- **Observações do NSP:** vazio

**Procedimentos**

*Modal Classificação do incidente*
1\. Selecionar classificação
2\. Selecionar grau do dano
3\. Selecionar tipo de incidente
4\. Selecionar se envolve paciente
5\. Clicar em “Salvar classificação”

**Resultado esperado**

- O sistema mostra última modificação na classificação no formato: Última classificação em: dd/mm/aaaa - h:min:s
- Prazo para análise é calculado e apresentado no sistema no formato: Prazo para análise: dd/mm/aaaa - h:min:s
- O sistema define automaticamente o prazo de validade do incidente para 10 dias

##### CT-FUN-025 — Definição automática do prazo de validade para incidente com dano moderado { #ct-fun-025 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.3 | CA05 | Partição por equivalência |

**Objetivo**

Validar que o sistema define automaticamente o prazo de validade com dano moderado

**Pré-condições**

[CT-FUN-019](#ct-fun-019)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** Moderado
- **Tipo de incidente:** Infecção relacionada a assistência
- **O incidente envolve:**
    - Paciente
    - Equipamento médico
    - Medicamento
- **Observações do NSP:** vazio

**Procedimentos**

*Modal Classificação do incidente*
1\. Selecionar classificação
2\. Selecionar grau do dano
3\. Selecionar tipo de incidente
4\. Selecionar se envolve paciente
5\. Clicar em “Salvar classificação”

**Resultado esperado**

- O sistema mostra última modificação na classificação no formato: Última classificação em: dd/mm/aaaa - h:min:s
- Prazo para análise é calculado e apresentado no sistema no formato: Prazo para análise: dd/mm/aaaa - h:min:s
- O sistema define automaticamente o prazo de validade do incidente para 7 dias

##### CT-FUN-026 — Definição automática do prazo de validade conforme grau de dano { #ct-fun-026 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.3 | CA05 | Partição por equivalência |

**Objetivo**

Validar que o sistema define automaticamente o prazo de validade conforme o grau de dano informado na classificação.

**Pré-condições**

[CT-FUN-019](#ct-fun-019)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** Grave
- **Tipo de incidente:** Procedimento cirúrgico
- **O incidente envolve:**
    - Paciente
    - Equipamento médico
    - Profissional de saúde
- **Observações do NSP:** vazio

**Procedimentos**

*Modal Classificação do incidente*
1\. Selecionar classificação
2\. Selecionar grau do dano
3\. Selecionar tipo de incidente
4\. Selecionar se envolve paciente
5\. Clicar em “Salvar classificação”

**Resultado esperado**

- O sistema mostra última modificação na classificação no formato: Última classificação em: dd/mm/aaaa - h:min:s
- Prazo para análise é calculado e apresentado no sistema no formato: Prazo para análise: dd/mm/aaaa - h:min:s
- O sistema define automaticamente o prazo de validade do incidente para 4 dias

#### 3.2.4. História 2.4 - Definir e gerenciar status do incidente { #testes-us-2-4 }

##### CT-FUN-027 — Definição automática do status inicial como "Novo" { #ct-fun-027 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA01 | Fluxo principal |

**Objetivo**

Validar que toda nova notificação recebe automaticamente o status "Novo".

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

**Procedimentos**

*Tela Todos Incidentes*
1\. Validar nova notificação

**Resultado esperado**

- O sistema cria a notificação.
- O status é definido automaticamente como Novo .

##### CT-FUN-028 — Transição automática para status "Classificado" { #ct-fun-028 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA02 | Fluxo principal |

**Objetivo**

Validar a alteração automática do status após classificação do incidente.

**Pré-condições**

[CT-FUN-027](#ct-fun-027)

**Dados de entrada**

- **\*Notificação:** primeira notificação com status: Novo listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

- **Classificação do incidente:** Near Miss
- **Tipo de incidente:** Outro
    - Amostra retirada do paciente não foi encontrada
- **O incidente envolve:**
    - Profissional de saúde;
    - Equipamento médico
- **Observações do NSP:** vazio
- **Sugestão de protocolo de investigação:** Investigação Direta - ACR + Ishikawa + 5 Porquês + SMART — Para circunstâncias notificáveis, near misses, incidentes sem dano e incidentes com dano leve

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação
2\. Preencher classificação
3\. Preencher tipo
4\. Preencher quem está envolvido
5\. Preencher sugestão de protocolo
6\. Clicar em “Salvar classificação”

**Resultado esperado**

- A classificação é salva com sucesso.
- O status da notificação é atualizado automaticamente para Classificada

##### CT-FUN-029 — Transição automática para status "Analisado" { #ct-fun-029 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-2.4 | CA03 | Fluxo principal |

**Objetivo**

Validar atualização automática para o status "Analisado"

**Pré-condições**

Não informado

**Dados de entrada**

Não informado

**Procedimentos**

Não informado

**Resultado esperado**

Não informado

##### CT-FUN-030 — Transição automática para status "Encaminhado para o setor" { #ct-fun-030 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA04 | Fluxo principal |

**Objetivo**

Validar atualização automática do status após encaminhamento

**Pré-condições**

[CT-FUN-028](#ct-fun-028)

**Dados de entrada**

- **\*Notificação:** primeira notificação com status: Classificada listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação.
2\. Clicar em “Encaminhar notificação”
*Modal Encaminhamento*
3\. Verificar setor destinatário
4\. Clicar em “Enviar”

**Resultado esperado**

- A análise é registrada.
- **O status é alterado automaticamente para:** Encaminhado
- **Na aba de análise, aparece a mensagem:** ‘“Esse incidente ainda está pendente de análise.”

##### CT-FUN-031 — Arquivamento de incidente { #ct-fun-031 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA05 | Fluxo alternativo |

**Objetivo**

Validar o arquivamento de uma notificação.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existirem notificações registradas

**Dados de entrada**

- **\*Notificação:** segunda notificação listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Todos Incidentes*
1\. Selecionar uma notificação.
*Tela Geral Notificação*
2\. Clicar nos 3 pontos
3\. Selecionar a opção "Arquivar"

**Resultado esperado**

- O sistema arquiva a notificação.
- O status passa para Arquivado

##### CT-FUN-032 — Validação de estado final de incidente com status "Arquivado" { #ct-fun-032 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA05 | Fluxo alternativo |

**Objetivo**

Validar que o sistema arquive uma notificação e impeça qualquer alteração posterior

**Pré-condições**

[CT-FUN-031](#ct-fun-031)

- Existir uma notificação com status "Arquivado"

**Dados de entrada**

- **\*Notificação:** primeira notificação com status: Arquivado listada

\* As notificações variam conforme arquivamento de gestores e profissionais do NSP

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação
2\. Verificar que o status exibido é "Arquivado".
*Tela Geral Notificação*
3\. Tentar alterar qualquer informação complementar.
4\. Tentar acessar a funcionalidade "Classificar incidente".
5\. Tentar encaminhar a notificação para análise ou setor responsável.

**Resultado esperado**

- **O sistema mantém o status:** Arquivado
- O sistema bloqueia a edição das informações da notificação.
- **O sistema exibe mensagem:** Edição bloqueada
- O sistema impede nova classificação do incidente.
- O sistema impede novo encaminhamento da notificação.
- Nenhuma alteração é salva no sistema.

##### CT-FUN-033 — Coerência das transições de status { #ct-fun-033 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA07 | Fluxo principal |

**Objetivo**

Garantir que as mudanças de status ocorram apenas pelas ações previstas no fluxo.

**Pré-condições**

[CT-FUN-027](#ct-fun-027)

**Dados de entrada**

- **\*Notificação:** primeira notificação com status: Novo listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Geral Notificação*
1\. Clicar em “Classificar incidente”
*Modal Classificação do incidente*
2\. Classificar a notificação.
3\. Verificar status.
*Modal Encaminhamento*
4\. Encaminhar para setor.
5\. Verificar status.
*Tela Geral Notificação*
6\. Arquivar a notificação.
7\. Verificar status

**Resultado esperado**

- Novo → Classificado → Encaminhado
- Arquivado
- Todas as alterações ocorrem automaticamente conforme o fluxo definido

##### CT-FUN-034 — Bloqueio de edição manual do status { #ct-fun-034 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA08 | Fluxo principal |

**Objetivo**

Garantir que o campo de status seja controlado exclusivamente pelo fluxo do sistema, não permitindo alteração manual pelo usuário.

**Pré-condições**

[CT-FUN-006](#ct-fun-006)

- Existir uma notificação registrada no sistema.

**Dados de entrada**

- **\*Notificação:** primeira notificação

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir a notificação

**Resultado esperado**

- O campo de status é apresentado apenas para consulta.
- O sistema não disponibiliza mecanismo de edição manual do status.
- O sistema impede qualquer tentativa de alteração direta do status.
- O status somente pode ser modificado automaticamente por ações válidas do fluxo de negócio.
- O valor original do status permanece inalterado.

#### 3.2.5. História 2.5 - Encaminhar notificação para área responsável { #testes-us-2-5 }

##### CT-FUN-035 — Encaminhamento de notificação para setor responsável { #ct-fun-035 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.5 | CA01 | Fluxo principal |

**Objetivo**

Validar que o profissional do NSP consegue encaminhar uma notificação classificada para o setor responsável.

**Pré-condições**

[CT-FUN-028](#ct-fun-028)

- Existir uma notificação classificada

**Dados de entrada**

- **\*Notificação:** primeira notificação com Status: Classificada listada

\* As notificações variam conforme arquivamento de gestores e profissionais do NSP

- **\*\*Setor:** setor diferente do previamente selecionado

\*\* Campo deve estar diferente do dado de entrada

**Procedimentos**

*Tela Todos incidentes*
1\. Abrir uma notificação.
*Tela Geral Notificação*
2\. Selecionar a opção “Editar”
*Modal Edição*
3\. Alterar setor
4\. Clicar em “Salvar alterações”
*Modal Encaminhamento*
4\. Verificar se campo “Setor destinatário” está correto para envio a. Deve estar de acordo com setor indicado na notificação
5\. Clicar em “Enviar”

**Resultado esperado**

- O sistema fecha modal de edição
- O sistema fecha modal de encaminhamento
- O sistema permite apenas a visualização do setor a ser encaminhado

##### CT-FUN-036 — Envio de e-mail após encaminhamento da notificação { #ct-fun-036 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.5 | CA02 | Fluxo principal |

**Objetivo**

Validar que o sistema envia automaticamente o e-mail de encaminhamento ao setor responsável após a conclusão do envio.

**Pré-condições**

[CT-FUN-035](#ct-fun-035)

**Procedimentos**

1\. Acessar a caixa de e-mail do responsável pelo setor.
2\. Localizar o e-mail enviado pelo sistema.
3\. Verificar o conteúdo da mensagem.

**Resultado esperado**

- O e-mail é enviado automaticamente.
- O e-mail contém o número da notificação.
- O e-mail contém instruções de acesso ao sistema.
- O texto segue o template definido nos requisitos.

##### CT-FUN-037 — Bloqueio de encaminhamento de incidente sem classificação concluída { #ct-fun-037 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.5 | CA03 | Fluxo principal |

**Objetivo**

Garantir que o sistema impeça o encaminhamento de incidentes cuja classificação não esteja concluída.

**Pré-condições**

[CT-AUTH-002](#ct-auth-002)

**Dados de entrada**

- **\*Notificação:** primeira notificação com Status: Novo listada

\* As notificações variam conforme arquivamento de gestores e profissionais do NSP

**Procedimentos**

*Tela Todos incidentes*
1\. Abrir a notificação.
*Tela Geral Notificação*
2\. Verificar as ações disponíveis.
3\. Tentar localizar a opção “Encaminhar notificação”

**Resultado esperado**

- O sistema não exibe a opção “Encaminhar notificação”.
- O usuário não consegue iniciar o fluxo de encaminhamento.
- O status da notificação permanece inalterado

##### CT-FUN-038 — Atualização automática do status após encaminhamento { #ct-fun-038 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.5 | CA04 | Fluxo principal |

**Objetivo**

Validar que o status da notificação é atualizado automaticamente após o encaminhamento

**Pré-condições**

[CT-FUN-028](#ct-fun-028)

**Dados de entrada**

- **\*Notificação:** primeira notificação com status: Classificada listada

\* As notificações variam conforme acontecimento e registro dos incidentes por um notificante

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação.
*Tela Geral Notificação*
2\. Clicar em “Encaminhar notificação”
*Modal Encaminhamento*
3\. Verificar setor destinatário
4\. Clicar em “Enviar”
*Tela Geral Notificação*
5\. Verificar o campo status.

**Resultado esperado**

- A análise é registrada.
- **O status é alterado automaticamente para:** Encaminhado
- **Na aba de análise, aparece a mensagem:** ‘“Esse incidente ainda está pendente de análise.”

##### CT-FUN-039 — Restrição de reencaminhamento para o mesmo setor responsável { #ct-fun-039 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.5 | CA05 | Fluxo principal |

**Objetivo**

Garantir que o gestor não consiga encaminhar novamente um incidente já atribuído ao seu próprio setor

**Pré-condições**

[CT-AUTH-002](#ct-auth-002)

- Existir uma notificação já encaminhada para o setor do usuário autenticado

**Dados de entrada**

- **\*Notificação:** primeira notificação com Status: Encaminhado listada

\* As notificações variam conforme arquivamento de gestores e profissionais do NSP

- **\*\*Setor:** setor diferente do previamente selecionado

\*\* Campo deve estar diferente do dado de entrada

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação já encaminhada para o setor do usuário.
2\. Verificar as opções disponíveis para encaminhamento.

**Resultado esperado**

- **Na aba de análise, aparece a mensagem:** ‘“Esse incidente ainda está pendente de análise.”
- O sistema não exibe a opção de encaminhar novamente para o mesmo setor.
- O usuário não consegue realizar novo encaminhamento para o próprio setor.

##### CT-FUN-040 — Bloqueio de edição após encaminhamento da notificação { #ct-fun-040 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não | US-2.5 | CA06 | Fluxo principal |

**Objetivo**

Validar que informações gerais e classificação da notificação não podem ser editadas após o encaminhamento para o setor responsável

**Pré-condições**

[CT-FUN-038](#ct-fun-038)

**Dados de entrada**

- **\*Notificação:** primeira notificação com Status: Encaminhado listada

\* As notificações variam conforme arquivamento de gestores e profissionais do NSP

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir a notificação
*Tela Geral Notificação*
2\. Tentar editar informações gerais da notificação.
3\. Tentar editar a classificação do incidente.
4\. Verificar a disponibilidade dos controles de edição.

**Resultado esperado**

- **O sistema mantém o status:** Arquivado
- O sistema bloqueia a edição das informações da notificação.
- **O sistema exibe mensagem:** Edição bloqueada
- O sistema impede nova classificação do incidente.
- O sistema impede novo encaminhamento da notificação.
- Nenhuma alteração é salva no sistema.

### 3.3. Épico 4 - Registro de análise em notificação de incidentes { #testes-funcionais-epico-4 }

#### 3.3.1. História 4.1 - Visualizar incidentes para análise { #testes-us-4-1 }

##### CT-FUN-041 — Exibição somente dos incidentes encaminhados ao setor na fila do gestor { #ct-fun-041 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA01 | Partição por equivalência |

**Objetivo**

Validar que a fila do gestor da área apresenta somente os incidentes do seu setor que o NSP encaminhou a ele, antes da análise ou depois da análise feita pelo NSP, e que incidentes de outros setores e incidentes não encaminhados não aparecem.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de Gestor da Área vinculado ao Setor A
- Existir a notificação N1, do Setor A, encaminhada pelo NSP ao setor antes da análise
- Existir a notificação N2, do Setor A, analisada pelo NSP e com o resultado da análise encaminhado ao setor
- Existir a notificação N3, do Setor B, encaminhada pelo NSP ao Setor B
- Existir a notificação N4, do Setor A, classificada e não encaminhada

**Dados de entrada**

- **\*Setor A:** setor do Gestor da Área autenticado
- **\*Setor B:** setor diferente do Setor A
- **\*\*Identificadores:** identificadores das notificações N1, N2, N3 e N4

\* Os setores variam conforme a instituição.

\*\* Os identificadores variam conforme as notificações registradas.

**Procedimentos**

*Tela Todos Incidentes*
1\. Verificar os incidentes listados.
2\. Informar o identificador de cada notificação (N1, N2, N3 e N4) na barra de pesquisa e executar a busca.

**Resultado esperado**

- O sistema exibe a notificação N1, com status "Encaminhado".
- O sistema exibe a notificação N2, com status "Analisado".
- O sistema não exibe a notificação N3, de outro setor.
- O sistema não exibe a notificação N4, não encaminhada.
- A pesquisa pelos identificadores de N3 e N4 não retorna resultados.

##### CT-FUN-042 — Exibição das informações do incidente para o gestor { #ct-fun-042 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA03 | Fluxo principal |

**Objetivo**

Validar que o gestor da área visualiza as informações registradas do incidente a que tem acesso, incluindo os dados da notificação e a sua classificação.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de Gestor da Área
- Existir uma notificação do setor do gestor, que envolva o paciente, classificada e encaminhada pelo NSP ao setor

**Dados de entrada**

- **\*Notificação:** notificação encaminhada ao setor do gestor

\* As notificações variam conforme o encaminhamento realizado pelo NSP.

**Procedimentos**

*Tela Todos Incidentes*
1\. Selecionar a notificação.
*Tela Geral Notificação*
2\. Verificar o cabeçalho da notificação.
3\. Expandir a seção "Informações gerais".
4\. Verificar os campos apresentados.
5\. Expandir a seção "Classificação".

**Resultado esperado**

- O cabeçalho apresenta:
    - Identificador
    - **Criado em:**
    - **Ocorrido em:**
    - **Status:**
- A seção "Informações gerais" apresenta:
    - Descrição
    - Data do incidente
    - Horário
    - Turno
    - Instituição
    - Setor
    - Faixa etária
    - Sexo
- A seção "Classificação" apresenta a classificação registrada pelo NSP.

##### CT-FUN-043 — Exibição da classificação, do prazo para análise e do responsável pelo incidente { #ct-fun-043 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA04 | Partição por equivalência |

**Objetivo**

Validar que o sistema apresenta a classificação do incidente, o grau do dano, o tipo de incidente ou o tipo específico de Never Event, os envolvidos, as observações do NSP, o prazo para análise e o responsável pelo incidente, conforme a classificação registrada e o status do incidente.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de Gestor da Área
- Existir a notificação C1, do setor do gestor, classificada como Evento adverso com grau de dano Leve e encaminhada ao setor
- Existir a notificação C2, do setor do gestor, classificada como Never Event e encaminhada ao setor
- Existir a notificação C3, do setor do gestor, com status "Analisado"
- As classificações foram finalizadas por um profissional do NSP

**Dados de entrada**

- **Classificação C1:** Evento adverso; Grau do dano: Leve; Tipo de incidente: Queda; Envolve: Paciente; Observações do NSP: Paciente avaliado pela equipe.
- **Classificação C2:** Evento adverso; Grau do dano: Never Event; Tipo específico: Troca de bebês; Envolve: Paciente.
- **\*Responsável:** nome do profissional do NSP que finalizou a classificação

\* O nome varia conforme o usuário do NSP que classificou o incidente.

**Procedimentos**

1\. Repetir para as notificações C1, C2 e C3:
*Tela Todos Incidentes*
2\. Selecionar a notificação.
*Tela Geral Notificação*
3\. Verificar o campo "Responsável" no cabeçalho.
4\. Expandir a seção "Classificação".
5\. Verificar os campos e o prazo apresentados.

**Resultado esperado**

- **Notificação C1:**
    - O cabeçalho apresenta **Responsável:** nome do profissional do NSP que finalizou a classificação
    - A seção "Classificação" apresenta Classificação, Grau do dano, Tipo de incidente, Envolve e Observações do NSP
    - O sistema exibe "Prazo para análise:" com a data-limite calculada para o grau de dano Leve
- **Notificação C2:**
    - O cabeçalho apresenta **Responsável:** nome do profissional do NSP que finalizou a classificação
    - A seção "Classificação" apresenta o campo "Tipo específico (Never Event)" no lugar de "Tipo de incidente"
    - O sistema exibe "Prazo para análise:" com a data-limite calculada para Never Event
- **Notificação C3:**
    - O cabeçalho apresenta **Responsável:** nome do profissional do NSP que finalizou a classificação
    - O sistema não exibe o prazo para análise

##### CT-FUN-044 — Ocultação da identificação do notificante para o gestor { #ct-fun-044 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA05 | Partição por equivalência |

**Objetivo**

Garantir que o sistema omite do gestor da área os campos de identificação do notificante (nome e celular/e-mail) em todas as telas, sem indicar se a notificação foi identificada ou anônima, e que esses dados não são enviados ao navegador do gestor.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de Gestor da Área e com credenciais de profissional do NSP
- Existir a notificação I1, identificada (com nome e celular/e-mail do notificante), do setor do gestor e encaminhada ao setor
- Existir a notificação I2, anônima, do setor do gestor e encaminhada ao setor

**Dados de entrada**

- **Notificante da notificação I1:** Maria da Silva; maria@exemplo.com

**Procedimentos**

1\. Com o Gestor da Área autenticado, repetir para as notificações I1 e I2:
*Tela Todos Incidentes*
2\. Selecionar a notificação.
*Tela Geral Notificação*
3\. Expandir a seção "Informações gerais" e verificar os campos apresentados.
4\. Verificar, nas ferramentas do desenvolvedor do navegador (aba Rede), a resposta do servidor ao carregar a notificação.
5\. Na seção "Análise", selecionar "Registrar análise".
*Tela Análise*
6\. Verificar o "Resumo do Incidente" da Seção 1, sem salvar.
7\. Com o profissional do NSP autenticado, abrir a notificação I1 e expandir a seção "Informações gerais".

**Resultado esperado**

- **Notificações I1 e I2, vistas pelo gestor:**
    - A seção "Informações gerais" não apresenta os campos "Nome do notificante" e "Celular/E-mail", nem campo vazio ou "Não informado" no lugar deles
    - O "Resumo do Incidente" da Seção 1 não apresenta os campos de identificação do notificante nem a indicação "Notificação anônima"
    - A resposta do servidor não contém o nome nem o celular/e-mail do notificante
    - As telas das notificações I1 e I2 não permitem distinguir a notificação identificada da anônima
- **Notificação I1, vista pelo NSP:**
    - A seção "Informações gerais" apresenta **Nome do notificante:** Maria da Silva e **Celular/E-mail:** maria@exemplo.com

##### CT-FUN-045 — Bloqueio de acesso do gestor a incidente de outro setor ou não encaminhado { #ct-fun-045 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA06 | Partição por equivalência |

**Objetivo**

Garantir que o sistema impede o gestor da área de acessar, por link direto ou pelo identificador, as informações e a análise de incidentes de outro setor ou não encaminhados ao seu setor pelo NSP.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de Gestor da Área vinculado ao Setor A
- Existir a notificação A1, do Setor A, encaminhada pelo NSP ao setor
- Existir a notificação A2, do Setor B, encaminhada pelo NSP ao Setor B
- Existir a notificação A3, do Setor A, classificada e não encaminhada
- Endereços da tela de detalhe das notificações A1, A2 e A3 obtidos por um profissional do NSP

**Dados de entrada**

- **\*Setor A:** setor do Gestor da Área autenticado
- **\*Setor B:** setor diferente do Setor A
- **\*\*Endereços:** endereço da tela de detalhe de cada notificação (A1, A2 e A3)

\* Os setores variam conforme a instituição.

\*\* Os endereços variam conforme o identificador de cada notificação.

**Procedimentos**

1\. Repetir para as notificações A1, A2 e A3:
2\. Acessar diretamente, no navegador, o endereço da tela de detalhe da notificação.
3\. Verificar as informações apresentadas.
4\. Verificar, nas ferramentas do desenvolvedor do navegador (aba Rede), a resposta do servidor.
*Tela Todos Incidentes*
5\. Informar o identificador da notificação na barra de pesquisa e executar a busca.

**Resultado esperado**

- **Notificação A1 (Setor A, encaminhada):**
    - O sistema exibe a Tela Geral Notificação com as informações do incidente
    - A pesquisa pelo identificador retorna a notificação
- **Notificações A2 (Setor B) e A3 (não encaminhada):**
    - O sistema impede o acesso e não exibe nenhuma informação do incidente nem da análise
    - A resposta do servidor não contém os dados do incidente
    - A pesquisa pelo identificador não retorna resultados

##### CT-FUN-046 — Exibição de todos os incidentes da instituição para o NSP { #ct-fun-046 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA08 | Partição por equivalência |

**Objetivo**

Validar que o profissional do NSP visualiza todos os incidentes da instituição, independentemente de encaminhamento ou de quem seja o responsável pelo incidente.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais do profissional do NSP 1
- Existir a notificação T1, sem classificação
- Existir a notificação T2, classificada pelo profissional do NSP 1 e não encaminhada
- Existir a notificação T3, classificada pelo profissional do NSP 2 e não encaminhada
- Existir a notificação T4, encaminhada ao Setor A
- Existir a notificação T5, encaminhada ao Setor B

**Dados de entrada**

- **\*Identificadores:** identificadores das notificações T1, T2, T3, T4 e T5

\* Os identificadores variam conforme as notificações registradas.

**Procedimentos**

*Tela Todos Incidentes*
1\. Verificar os incidentes listados.
2\. Informar o identificador de cada notificação (T1 a T5) na barra de pesquisa e executar a busca.
3\. Verificar o campo "Responsável" de cada notificação.

**Resultado esperado**

- O sistema exibe as notificações T1, T2, T3, T4 e T5.
- A pesquisa pelo identificador de cada notificação retorna a notificação correspondente.
- A notificação T1 apresenta **Responsável:** —
- A notificação T2 apresenta **Responsável:** nome do profissional do NSP 1
- A notificação T3 apresenta **Responsável:** nome do profissional do NSP 2

#### 3.3.2. História 4.2 - Registrar análise do incidente { #testes-us-4-2 }

##### CT-FUN-047 — Estrutura e navegação do formulário de análise { #ct-fun-047 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.2 | CA05 + CA06 | Fluxo alternativo |

**Objetivo**

Validar que o formulário de análise apresenta as cinco seções na ordem definida, com barra de progresso de cinco etapas, e que a navegação por "Próximo" e "Voltar" valida, avança e retorna entre as seções sem perder o que foi preenchido.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP
- Existir uma notificação classificada, sem análise iniciada

**Dados de entrada**

- **Incidente em investigação:** Queda do paciente durante deslocamento no corredor

**Procedimentos**

*Tela Geral Notificação*
1\. Na seção "Análise", selecionar "Registrar análise".
*Tela Análise*
2\. No Guia de investigação, selecionar "Começar a análise".
3\. Verificar o título da seção e a barra de progresso.
4\. Informar o incidente em investigação e selecionar "Próximo".
5\. Selecionar "Voltar" e verificar o campo preenchido.
6\. Selecionar "Voltar" na Seção 1.
7\. Selecionar "Começar a análise" e avançar pelas seções, preenchendo os campos obrigatórios, até a última seção.
8\. Verificar o título de cada seção e o botão de avanço da última seção.

**Resultado esperado**

- **CA05:**
    - O sistema apresenta as seções, nesta ordem: Seção 1 — Informações da notificação; Seção 2 — Informações da análise; Seção 3 — Cronologia do incidente; Seção 4 — Fatores contribuintes; Seção 5 — Resultado (Ishikawa + Recomendações)
    - A barra de progresso apresenta cinco etapas, e o Guia de investigação não conta como etapa
- **CA06:**
    - "Próximo" valida a seção atual e avança para a seção seguinte
    - "Voltar" retorna à seção anterior, com o incidente em investigação preenchido
    - "Voltar" na Seção 1 retorna ao Guia de investigação
    - Na última seção, o botão de avanço apresenta "Finalizar análise"

##### CT-FUN-048 — Autoria exclusiva da análise em andamento { #ct-fun-048 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.2 | CA03 + CA04 | Partição por equivalência e fluxo alternativo |

**Objetivo**

Garantir que somente o usuário que iniciou a análise pode continuá-la, que os demais usuários com acesso ao incidente não visualizam o rascunho, e que, no início simultâneo, o sistema aceita apenas o primeiro salvamento, com a verificação feita no servidor.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais do profissional do NSP 1, do profissional do NSP 2 e de Gestor da Área
- Existir a notificação A1, classificada, com a análise iniciada (primeira seção salva) pelo profissional do NSP 1
- Existir a notificação A2, encaminhada ao setor do gestor, com a análise iniciada pelo Gestor da Área
- Existir a notificação A3, classificada, sem análise iniciada

**Dados de entrada**

- **Incidente em investigação (NSP 1):** Queda do paciente durante deslocamento no corredor
- **Incidente em investigação (NSP 2):** Queda do paciente no corredor da enfermaria

**Procedimentos**

1\. Com o profissional do NSP 2 autenticado, repetir para as notificações A1 e A2:
*Tela Geral Notificação*
2\. Expandir a seção "Análise" e verificar as opções e a mensagem apresentadas.
3\. Com os profissionais do NSP 1 e do NSP 2 autenticados em navegadores diferentes, abrir o formulário de análise da notificação A3 nos dois navegadores.
*Tela Análise*
4\. No navegador do NSP 1, informar o incidente em investigação e selecionar "Próximo".
5\. No navegador do NSP 2, informar o incidente em investigação e selecionar "Próximo".
6\. Verificar, nas ferramentas do desenvolvedor do navegador do NSP 2 (aba Rede), a resposta do servidor ao salvamento.
*Tela Geral Notificação*
7\. Com o profissional do NSP 1 autenticado, abrir a notificação A3 e selecionar "Continuar análise".

**Resultado esperado**

- **CA03 (notificações A1 e A2, vistas pelo NSP 2):**
    - O sistema não exibe as opções "Registrar análise" e "Continuar análise"
    - O sistema não exibe o conteúdo do rascunho
    - O sistema exibe a mensagem "Análise em andamento. Aguarde a finalização para visualizar os detalhes."
- **CA04 (notificação A3):**
    - O sistema aceita o salvamento do NSP 1, que passa a ser o autor da análise
    - O sistema recusa o salvamento do NSP 2 e exibe a mensagem "Esta análise já foi iniciada por outro usuário. Aguarde a finalização para visualizar os detalhes."
    - A resposta do servidor ao salvamento do NSP 2 é uma recusa
    - O rascunho retomado pelo NSP 1 contém apenas o incidente em investigação informado por ele

##### CT-FUN-049 — Validação e destaque das pendências do formulário de análise { #ct-fun-049 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.2 | CA08 + CA09 | Fluxo alternativo e partição por equivalência |

**Objetivo**

Validar que o sistema impede o avanço de uma seção com pendências, indicando exatamente o que falta, e que os destaques aparecem somente após a tentativa de avançar e desaparecem à medida que cada campo é corrigido.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP
- Existir uma notificação classificada, sem análise iniciada

**Procedimentos**

*Tela Geral Notificação*
1\. Na seção "Análise", selecionar "Registrar análise".
*Tela Análise*
2\. No Guia de investigação, selecionar "Começar a análise".
3\. Verificar a Seção 1 antes de selecionar "Próximo".
4\. Selecionar "Próximo" com o campo "Informe o incidente em investigação" vazio.
5\. Preencher o campo e verificar o destaque; selecionar "Próximo".
6\. Na Seção 2, selecionar "Próximo" com todos os campos vazios.
7\. Preencher somente o campo "Nome" do condutor da análise e verificar os destaques da tabela.
8\. Selecionar "+ Adicionar membro" e verificar a nova linha.
9\. Preencher os demais campos pendentes e selecionar "Próximo".

**Resultado esperado**

- **CA09:**
    - Antes de selecionar "Próximo", nenhum campo é destacado em vermelho
    - O destaque de cada campo desaparece quando ele é corrigido
    - A nova linha de "Demais membros participantes", criada após a tentativa de avançar, não é destacada enquanto é preenchida
- **CA08 — seção com um único item pendente (Seção 1, campo "Informe o incidente em investigação" vazio):**
    - O sistema não avança e destaca o campo em vermelho
    - O sistema exibe abaixo do campo a mensagem "Preencha este campo."
    - O sistema exibe o aviso de atenção "Informe o incidente em investigação: Preencha este campo."
- **CA08 — seção com vários itens pendentes (Seção 2, todos os campos vazios):**
    - O sistema não avança e destaca cada campo pendente e, na tabela do condutor da análise, apenas as células pendentes
    - O sistema exibe abaixo de cada campo a mensagem específica: "Preencha Nome, Formação, Função e Setor.", "Selecione ao menos uma opção." e "Selecione uma opção."
    - O sistema exibe o aviso de atenção "Corrija os 3 itens destacados para continuar."
    - O sistema rola a tela até o primeiro campo pendente
    - O botão "Próximo" permanece clicável

##### CT-FUN-050 — Limites de caracteres e opção "Outro" no formulário de análise { #ct-fun-050 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.2 | CA10 + CA13 | Análise de valor limite e fluxo alternativo |

**Objetivo**

Validar que os campos de texto com limite de caracteres exibem o contador, avisam no momento em que o limite é ultrapassado e bloqueiam o avanço sem cortar o texto, e que a opção "Outro" dos menus de seleção exige a especificação da opção com no máximo 30 caracteres.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP
- Existir uma notificação classificada, sem análise iniciada

**Dados de entrada**

- **Incidente em investigação — limite válido:** texto com 100 caracteres
- **Incidente em investigação — acima do limite:** texto com 101 caracteres
- **Especificação de "Outro" — limite válido:** texto com 30 caracteres
- **Especificação de "Outro" — acima do limite:** texto com 31 caracteres

**Procedimentos**

*Tela Geral Notificação*
1\. Na seção "Análise", selecionar "Registrar análise".
*Tela Análise*
2\. No Guia de investigação, selecionar "Começar a análise".
3\. Informar o incidente em investigação com 101 caracteres e selecionar "Próximo".
4\. Reduzir o texto para 100 caracteres e selecionar "Próximo".
5\. Na Seção 2, selecionar a opção "Outro" em "Formação" do condutor da análise.
6\. Selecionar "Próximo" com o campo "Especifique a opção" vazio.
7\. Informar a especificação com 31 caracteres e selecionar "Próximo".
8\. Reduzir a especificação para 30 caracteres.

**Resultado esperado**

- **CA10:**
    - O sistema exibe o contador "N/100" abaixo do campo
    - Com 101 caracteres, o contador apresenta "101/100" em vermelho e o sistema exibe o aviso "“Informe o incidente em investigação” deve ter no máximo 100 caracteres (atual: 101)."
    - O texto não é cortado automaticamente e o sistema não avança
    - Com 100 caracteres, o sistema avança para a Seção 2
- **CA13:**
    - Ao selecionar "Outro", o sistema exibe o campo "Especifique a opção"
    - Com o campo vazio, o sistema não avança e indica a pendência
    - Com 31 caracteres, o sistema exibe o aviso "“Condutor da análise — Formação (Outro)” deve ter no máximo 30 caracteres (atual: 31)." e não avança
    - Com 30 caracteres, o sistema aceita a especificação

##### CT-FUN-051 — Orientações, aviso de cultura justa e blocos recolhíveis do formulário de análise { #ct-fun-051 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.2 | CA11 + CA12 + CA19 | Fluxo principal e fluxo alternativo |

**Objetivo**

Validar que o formulário de análise apresenta o aviso fixo de cultura justa, as explicações das seções e as orientações dos campos em caixas de informação visíveis, e que os blocos de passo a passo e de exemplos podem ser recolhidos, com a escolha do usuário lembrada nas próximas análises.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP
- Existirem duas notificações classificadas, sem análise iniciada

**Procedimentos**

*Tela Geral Notificação*
1\. Abrir a primeira notificação e, na seção "Análise", selecionar "Registrar análise".
*Tela Análise*
2\. No Guia de investigação, selecionar "Começar a análise".
3\. Verificar o aviso exibido no topo do formulário.
4\. Em cada seção, verificar a caixa de informação da seção, os campos obrigatórios, os campos de texto vazios e os menus de seleção.
5\. Na Seção 3, verificar os blocos "Como preencher" e de exemplo da cronologia.
6\. Recolher o bloco "Como preencher".
*Tela Geral Notificação*
7\. Abrir a segunda notificação e, na seção "Análise", selecionar "Registrar análise".
*Tela Análise*
8\. Avançar até a Seção 3 e verificar o bloco "Como preencher".

**Resultado esperado**

- **CA12:**
    - O sistema apresenta o aviso fixo "Cultura justa, não punitiva: a investigação retrospectiva nunca deve buscar punir individualmente profissionais da ponta assistencial. Foco em vulnerabilidades latentes e barreiras do sistema."
- **CA11:**
    - A explicação de cada seção é exibida em caixa de informação visível (fundo azul claro com ícone ⓘ), sem depender de ícone de ajuda
    - Os campos de texto vazios exibem um exemplo ou instrução
    - Os menus de seleção começam com "Selecione..."
    - Os campos obrigatórios são marcados com asterisco (*)
- **CA19:**
    - Os blocos "Como preencher" e de exemplo são exibidos abertos na primeira vez, com uma seta para recolhê-los e expandi-los
    - Na segunda análise, o bloco "Como preencher" é exibido recolhido

##### CT-FUN-052 — Exibição e ocultação do Guia de investigação { #ct-fun-052 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.2 | CA16 + CA17 + CA18 | Fluxo alternativo |

**Objetivo**

Validar que o Guia de investigação é exibido antes da Seção 1, com o conteúdo definido, sem campos, validação nem barra de progresso e sem alterar o status da notificação, e que a opção "Não mostrar novamente" faz o formulário abrir diretamente na Seção 1 nas próximas análises.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP
- Existirem duas notificações classificadas, sem análise iniciada
- Preferência "Não mostrar novamente" ainda não marcada pelo usuário

**Procedimentos**

*Tela Geral Notificação*
1\. Abrir a primeira notificação e, na seção "Análise", selecionar "Registrar análise".
*Tela Análise*
2\. Verificar o conteúdo do Guia de investigação.
3\. Selecionar "Voltar para a notificação".
*Tela Geral Notificação*
4\. Verificar o status da notificação.
5\. Selecionar "Registrar análise" novamente.
*Tela Análise*
6\. Marcar "Não mostrar novamente" e selecionar "Começar a análise".
*Tela Geral Notificação*
7\. Abrir a segunda notificação e, na seção "Análise", selecionar "Registrar análise".

**Resultado esperado**

- **CA16:**
    - O sistema apresenta, antes da Seção 1, o Guia de investigação com o texto de abertura, a caixa de aviso com três parágrafos, o bloco "Seu caminho na análise" com as etapas Seção 1 · Dados gerais, Seção 2 · Entendimento inicial, Seção 3 · Cronologia e PPC, Seção 4 · Fatores contribuintes, Seção 5 · Resultado da análise e Próximo passo · Plano de Ação, a opção "Não mostrar novamente" e o botão "Começar a análise"
- **CA18:**
    - O guia não apresenta campos, validação nem barra de progresso
    - A notificação mantém o status "Classificado" após a exibição do guia
- **CA17:**
    - Sem a opção marcada, o guia é exibido novamente ao abrir o formulário
    - Após marcar "Não mostrar novamente", o formulário da segunda notificação abre diretamente na Seção 1

---

## 4. Testes End-to-End { #testes-e2e }

### CT-E2E-001 — Registro completo de notificação com paciente { #ct-e2e-001 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-1.1 | CA02 + CA03 | Não informado |

**Objetivo**

Validar o fluxo completo de registro com todos os campos obrigatórios preenchidos.

**Pré-condições**

[CT-FUN-001](#ct-fun-001)

**Dados de entrada**

- **Instituição:** Hospital A
- **Envolve paciente:** Sim
- **Idade:** 13-17 anos
- **Sexo:** Não sei informar
- **Data de incidente:** Data atual (dd/mm/aaaa)
- **Turno:** Manhã (7h-13h)
- **Setor:** Clínica Médica Pediátrica
- **Descrição:** [TESTE] Paciente recebeu medicação incorreta
- **Papel:** Residente
- **Nome:** [TESTE] Ariel
- **Contato:** [TESTE] (99)99999-9999

**Procedimentos**

*Tela 1*
2\. Selecionar instituição
3\. Selecionar se envolve paciente
4\. Clicar em “Próximo”
*Tela 2*
5\. Selecionar idade
6\. Selecionar sexo
7\. Clicar em “Próximo”
*Tela 3*
8\. Inserir data de incidente
9\. Selecionar turno
10\. Selecionar setor
11\. Clicar em “Próximo”
*Tela 4*
12\. Preencher descrição
13\. Selecionar papel
14\. Clicar em “Próximo”
*Tela 5*
15\. Preencher nome
16\. Preencher contato
17\. Clicar em “Enviar notificação”

**Resultado esperado**

- Sistema solicita dados do paciente (Tela 2)
- Notificação registrada com sucesso
- Status “Registrada” atribuído
- Identificador único gerado

### CT-E2E-002 — Registro de notificação sem paciente envolvido { #ct-e2e-002 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-1.1 | CA02 + CA03 | Não informado |

**Objetivo**

Validar fluxo alternativo quando não há paciente envolvido.

**Pré-condições**

[CT-FUN-001](#ct-fun-001)

**Dados de entrada**

- **Instituição:** Hospital Santa Casa de Campo Grande de Mato Grosso do Sul
- **Envolve paciente:** Não
- **Data de incidente:** Data atual (dd/mm/aaaa)
- **Turno:** Noite (20h-07h)
- **Setor:** UTI
- **Descrição:** [TESTE] Sistema ficou indisponível durante o plantão noturno
- **Papel:** Enfermeiro
- **Nome:** [TESTE] Joel
- **Contato:** [TESTE] joel.leao@gmail.com

**Procedimentos**

*Tela 1*
1\. Selecionar instituição
2\. Selecionar se envolve paciente
3\. Clicar em “Próximo”
*Tela 3*
4\. Inserir data de incidente
5\. Selecionar turno
6\. Selecionar setor
7\. Clicar em “Próximo”
*Tela 4*
8\. Preencher descrição
9\. Selecionar papel
10\. Clicar em “Próximo”
*Tela 5*
11\. Preencher nome
12\. Preencher contato
13\. Clicar em “Enviar notificação”

**Resultado esperado**

- Sistema não solicita dados do paciente (Tela 2)
- Notificação registrada com sucesso
- Status “Registrada” atribuído
- Identificador único gerado

### CT-E2E-003 — Registro de notificação sem identificação { #ct-e2e-003 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-1.1 | CA02 + CA03 | Não informado |

**Objetivo**

Validar envio sem preenchimento do identificador

**Pré-condições**

[CT-FUN-001](#ct-fun-001)

**Dados de entrada**

- **Instituição:** Hospital Regional de Mato Grosso do Sul
- **Envolve paciente:** Não
- **Data de incidente:** Data atual (dd/mm/aaaa)
- **Turno:** Tarde (13h-19h)
- **Setor:** Diagnóstico por imagem
- **Descrição:** “[TESTE] Condução inadequada de exame de imagem”
- **Papel:** Técnico de enfermagem

**Procedimentos**

*Tela 1*
1\. Selecionar instituição
2\. Selecionar se envolve paciente
3\. Clicar em “Próximo”
*Tela 3*
4\. Inserir data de incidente
5\. Selecionar turno
6\. Selecionar setor
7\. Clicar em “Próximo”
*Tela 4*
8\. Preencher descrição
9\. Selecionar papel
10\. Clicar em “Próximo”
*Tela 5*
11\. Deixar identificação vazia
12\. Clicar em “Enviar notificação”

**Resultado esperado**

- Sistema não solicita dados do paciente (Tela 2)
- Notificação registrada com sucesso
- Status “Registrada” atribuído
- Identificador único gerado
- Sistema não registra dados de identificação do notificante

### CT-E2E-004 — Visualização de notificações registradas { #ct-e2e-004 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.1 | CA01 até CA07 | Não informado |

**Objetivo**

Validar o fluxo completo de acesso, listagem, busca e visualização detalhada de notificações.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)
- [CT-E2E-002](#ct-e2e-002)
- [CT-E2E-003](#ct-e2e-003)

**Dados de entrada**

- **Filtro de Tipo de Incidente:** Todos os tipos
- **Filtro de Setor:** Todos os setores
- **Filtro de Ordenação:** Mais antigos
- **ID:** 89288B24

**Procedimentos**

*Tela Todos Incidentes*
1\. Verificar ordenação padrão das notificações.
2\. Aplicar filtro por setor.
3\. Aplicar filtro por tipo de incidente.
4\. Aplicar filtro por ordenação.
5\. Pesquisar notificação pelo identificador (ID).
6\. Selecionar a notificação.
*Tela Notificação*
7\. Acessar detalhamento completo.
8\. Consultar histórico de modificações.

**Resultado esperado**

- Sistema exibe lista de notificações registradas.
- Ordenação padrão ocorre das mais recentes para as mais antigas.
- Filtros retornam apenas notificações compatíveis.
- O sistema reorganiza as notificações da mais antiga para a mais recente.
- Pesquisa localiza corretamente a notificação informada com ID: “#928DBF4”
- Detalhamento apresenta informações completas da ocorrência.
- Histórico de modificações é exibido corretamente com:
    - Data da alteração;
    - Hora;
    - Usuário responsável;
    - Campos alterados.

### CT-E2E-005 — Complementação e/ou edição de informações da notificação com usuário NSP { #ct-e2e-005 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.2 | CA01 até CA04 | Não informado |

**Objetivo**

Validar fluxo completo de edição de notificações.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

- **Data de incidente:** Data atual (dd/mm/aaaa)
- **Turno:** Tarde (13h-19h)
- **Setor:** Diagnóstico por imagem

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir notificação.
*Tela Notificação*
2\. Editar data de incidente
3\. Editar turno
4\. Editar setor
5\. Clicar em “Salvar alterações”
6\. Consultar histórico

**Resultado esperado**

- Alterações são persistidas.
- **Histórico registra todas as modificações com:**
    - Data da alteração;
    - Hora;
    - Usuário responsável;
    - Campos alterados.

### CT-E2E-006 — Fluxo completo de classificação de incidente com atualização de status e prazo { #ct-e2e-006 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA01 até CA05 | Fluxo principal |

**Objetivo**

Validar o fluxo completo de classificação de uma notificação, incluindo acesso à funcionalidade, preenchimento da classificação, atualização de status e definição automática do prazo de validade.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** Moderado
- **Tipo de incidente:** Erro de medicação
- **Envolvidos no incidente:** Profissional de saúde; Medicamento
- **Observações do NSP:** Administração incorreta de medicamento identificada após atendimento.

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação pendente.
*Tela Notificação*
2\. Selecionar a opção “Classificar incidente”.
3\. Preencher todos os campos obrigatórios da classificação.
4\. Salvar classificação.
5\. Retornar à lista de notificações.

**Resultado esperado**

- O sistema salva a classificação do incidente.
- O status da notificação é atualizado automaticamente.
- O sistema exibe prazo de validade de 7 dias para o incidente classificado com dano moderado.
- As informações permanecem registradas ao reabrir a notificação.

### CT-E2E-007 — Fluxo de classificação de incidente Never Event { #ct-e2e-007 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA01 até CA05 | Não informado |

**Objetivo**

Validar o fluxo completo de classificação de um incidente do tipo Never Event, incluindo exibição condicional de campos e registro da classificação.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** Never Event
- **Never Event:** Procedimento cirúrgico realizado no lado errado do corpo
- **Envolvidos no incidente:** Profissional de saúde; Paciente
- **Protocolo de investigação:** Investigação Sistêmica Profunda (Protocolo de Londres + SMART)

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação pendente.
*Tela Notificação*
2\. Selecionar “Classificar incidente”.
3\. Selecionar “Evento Adverso”.
4\. Selecionar grau do dano “Never Event”.
5\. Selecionar um tipo de Never Event.
6\. Preencher os demais campos obrigatórios.
7\. Salvar classificação.

**Resultado esperado**

- O sistema apresenta os campos condicionais corretamente.
- O sistema salva a classificação do tipo Never Event.
- O status da notificação é atualizado após o salvamento.

### CT-E2E-008 — Fluxo de classificação de incidente sem Grau do Dano { #ct-e2e-008 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA01 + CA03 até CA05 | Fluxo principal |

**Objetivo**

Validar o fluxo completo de classificação de um incidente como Circunstância notificável, incluindo a exibição sem Grau do dano, seleção do protocolo de investigação e a atualização do status ao finalizar.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

- **Classificação do incidente:** Near Miss
- **Tipo de incidente:** Comunicação
- **Envolvidos no incidente:** Profissional de saúde
- **Observações do NSP:** Identificado durante a checagem.
- **Protocolo de investigação:** Investigação Direta (ACR + Ishikawa + 5 Porquês + SMART)

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação com status “Novo”.
*Tela Notificação*
2\. Selecionar “Classificar incidente”.
3\. Selecionar classificação do incidente.
4\. Selecionar tipo de incidente.
5\. Selecionar envolvidos no incidente.
6\. Adicionar observações do NSP.
7\. Adicionar protocolo de investigação.
8\. Salvar classificação.

**Resultado esperado**

- O sistema salva a classificação do tipo Near Miss.
- O campo “Grau de dano” não é exibido.
- O status da notificação é atualizado após o salvamento.

### CT-E2E-009 — Fluxo de classificação de incidente com Evento Adverso de grau grave { #ct-e2e-009 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA01 + CA03 até CA05 | Fluxo principal |

**Objetivo**

Validar o fluxo completo de classificação de um incidente como Evento Adverso, incluindo a exibição das condicionais de campos, seleção do protocolo de investigação, a atualização do status ao finalizar, e a atribuição automática dos prazos.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

- **Classificação do incidente:** Evento Adverso
- **Grau do dano:** Grave
- **Tipo de incidente:** Lesão por pressão
- **Envolvidos no incidente:** Profissional de saúde; Paciente
- **Protocolo de investigação:** Investigação Sistêmica Profunda (Protocolo de Londres + SMART)

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação com status “Novo”.
*Tela Notificação*
2\. Selecionar “Classificar incidente”.
3\. Selecionar classificação do incidente.
4\. Selecionar grau do dano.
5\. Selecionar tipo de incidente.
6\. Selecionar envolvidos no incidente.
7\. Adicionar observações do NSP.
8\. Adicionar protocolo de investigação.
9\. Salvar classificação.

**Resultado esperado**

- O sistema apresenta os campos condicionais corretamente.
- O sistema salva a classificação do tipo Evento Adverso.
- O status da notificação é atualizado após o salvamento.
- O prazo é exibido na tela da notificação.

### CT-E2E-010 — Fluxo de classificação de incidente com tipo de incidente “Outro” { #ct-e2e-010 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA01 + CA03 até CA05 | Fluxo alternativo |

**Objetivo**

Validar o fluxo completo de classificação de um incidente como com o tipo de incidente ‘Outro’, incluindo a exibição do campo de especificação, a atualização do status ao finalizar, e a atribuição automática dos prazos.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

- **Classificação do incidente:** Incidente sem dano
- **Tipo de incidente:** Outro
- **Especificação de tipo:** Descarte inadequado de resíduo
- **Envolvidos no incidente:** Profissional de saúde; Outro
- **Especificação do envolvido:** Fornecedor externo
- **Protocolo de investigação:** Investigação Direta (ACR + Ishikawa + 5 Porquês + SMART)

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação com status “Novo”.
*Tela Notificação*
2\. Selecionar “Classificar incidente”.
3\. Selecionar classificação do incidente.
4\. Selecionar tipo de incidente.
5\. Preencher a especificação de tipo.
6\. Selecionar envolvidos no incidente.
7\. Preencher a especificação de envolvidos.
8\. Adicionar protocolo de investigação.
9\. Salvar classificação.

**Resultado esperado**

- O sistema apresenta os campos de especificação de ‘Outro’ ao ser selecionado.
- O sistema impede a finalização enquanto os campos de especificação obrigatórios estiverem vazios.
- O sistema salva a classificação do com as especificações de “Outro”.
- O status da notificação é atualizado após o salvamento.
- O prazo é exibido na tela da notificação.

### CT-E2E-011 — Bloqueio de edição da classificação após encaminhada para o setor. { #ct-e2e-011 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA07 | Fluxo alternativo |

**Objetivo**

Validar o fluxo completo de uma notificação classificada e realizar o encaminhamento, impedindo qualquer tentativa de alteração na classificação após encaminhamento para o setor responsável.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)
- [CT-E2E-009](#ct-e2e-009)
- [CT-E2E-014](#ct-e2e-014)

**Dados de entrada**

Não informado

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação com status “Classificada”.
*Tela Notificação*
2\. Selecionar “Encaminhar notificação”.
3\. Verificar se o setor está correto.
4\. Enviar notificação.
*Tela Todos Incidentes*
5\. Localizar notificação com status “Encaminhado”.
*Tela Notificação*
6\. Acessar a seção de “Classificação”.
7\. Verificar que a opção “Classificar incidente” está desabilitada.

**Resultado esperado**

- O sistema impede a edição da classificação após encaminhada para o setor.
- O sistema apresenta os dados de classificação apenas no modo de leitura.
- O status da notificação é atualizado após o salvamento.

### CT-E2E-012 — Fluxo completo de transição de status ‘Novo’ para ‘Classificada’ { #ct-e2e-012 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA01 até CA02 + CA07 até CA08 | Fluxo principal |

**Objetivo**

Validar o fluxo completo de transição de status de ‘Novo’ para ‘Classificada’, após a classificação completa da notificação.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

- **Classificação do incidente:** Near Miss
- **Tipo de incidente:** Documentação / prontuário
- **Envolvidos no incidente:** Sistema

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação com status “Novo”.
*Tela Notificação*
2\. Selecionar “Classificar incidente”.
3\. Selecionar classificação do incidente.
4\. Selecionar tipo de incidente.
5\. Selecionar envolvidos no incidente.
6\. Salvar classificação.
7\. Verificar status atualizado na notificação como “Classificada”.

**Resultado esperado**

- Uma notificação sem classificação apresenta status “Novo”.
- O status da notificação é atualizado após o salvamento.
- Campo de status permite apenas a visualização.

### CT-E2E-013 — Fluxo completo de arquivamento de incidente com atualização de status { #ct-e2e-013 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.4 | CA05 até CA08 | Fluxo alternativo |

**Objetivo**

Validar o fluxo completo de arquivamento de incidente, incluindo transição de status de para ‘Arquivado’.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

Não informado

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir a notificação.
*Tela Notificação*
2\. Selecionar os 3 pontos ao lado do status e clicar em “Arquivar notificação”.
3\. Verificar status atualizado na notificação como “Arquivado”.
4\. Verificar se as opções de editar estão desabilitadas.
*Tela Arquivados*
5\. Verificar se a notificação aparece na listagem com status atualizado.

**Resultado esperado**

- O status da notificação é atualizado após o salvamento.
- Campo de status permite apenas a visualização.
- O sistema impede ações de edições após o arquivamento.

### CT-E2E-014 — Fluxo completo de encaminhamento de incidente para setor responsável { #ct-e2e-014 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.5 | CA01 até CA04 | Fluxo principal |

**Objetivo**

Validar o fluxo completo de encaminhamento de incidente para o setor responsável, incluindo atualização do status da notificação para “Encaminhado”.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

Setor responsável: Pronto atendimento / Emergência

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir notificação com status de “Classificada”.
*Tela Notificação*
2\. Selecionar “Encaminhar notificação”.
3\. Enviar notificação.
*Tela Todos Incidentes*
4\. Localizar notificação com status “Encaminhado”.

**Resultado esperado**

- O sistema permite enviar para o setor em que o incidente está registrado.
- O encaminhamento é realizado com sucesso.
- O status da notificação é atualizado para “Encaminhado”.
- Campo de status permite apenas visualização.

### CT-E2E-015 — Bloqueio de encaminhamento de incidente sem classificação completa { #ct-e2e-015 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.5 | CA03 | Fluxo alternativo |

**Objetivo**

Validar que o sistema impede o encaminhamento de incidentes cuja classificação ainda não foi concluída.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-001](#ct-e2e-001)

**Dados de entrada**

Notificação com status “Novo”

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação sem classificação.
*Tela Notificação*
2\. Verificar opções disponíveis para encaminhamento.

**Resultado esperado**

- O sistema não exibe a opção “Encaminhar notificação”.
- O usuário não consegue iniciar o fluxo de encaminhamento.
- O status da notificação permanece inalterado.

### CT-E2E-016 — Bloqueio de reencaminhamento para o mesmo setor responsável { #ct-e2e-016 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.5 | CA05 | Fluxo alternativo |

**Objetivo**

Validar que o gestor do setor responsável não consegue encaminhar novamente um incidente já atribuído ao próprio setor.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-014](#ct-e2e-014)

**Dados de entrada**

Notificação já encaminhada para “Pronto atendimento / Emergência”

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação já encaminhada para o setor do usuário autenticado..
*Tela Notificação*
2\. Verificar opções disponíveis para encaminhamento.

**Resultado esperado**

- O sistema não exibe a opção de encaminhar novamente para o mesmo setor.
- O usuário não consegue realizar novo encaminhamento para o próprio setor.

### CT-E2E-017 — Bloqueio de edição de notificação após encaminhamento { #ct-e2e-017 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.5 | CA06 | Fluxo alternativo |

**Objetivo**

Validar que informações gerais e classificação da notificação não podem ser editadas após o encaminhamento para setor responsável.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002)
- [CT-E2E-014](#ct-e2e-014)

**Dados de entrada**

Notificação com status “Encaminhado”

**Procedimentos**

*Tela Todos Incidentes*
1\. Abrir uma notificação com status “Encaminhado”.
*Tela Notificação*
2\. Tentar editar informações gerais da notificação.
3\. Tentar editar a classificação do incidente.

**Resultado esperado**

- O sistema bloqueia a edição das informações gerais.
- O sistema bloqueia a alteração da classificação do incidente.
- Os campos permanecem apenas para visualização.
- Botões de edição/salvamento não são exibidos ao usuário.

### CT-E2E-018 — Bloqueio de encaminhamento de incidente classificado como Óbito ou Never Event { #ct-e2e-018 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Sim | US-2.3 | CA06 | Partição por equivalência e análise de valor limite (fluxo alternativo) |

**Objetivo**

Validar que o sistema impede o encaminhamento ao setor responsável de notificações classificadas como Evento Adverso com grau de dano Óbito ou como Never Event, exibindo o motivo ao usuário e preservando o status da notificação, e que o encaminhamento permanece permitido no grau imediatamente inferior (Grave).

**Pré-condições**

[CT-FUN-001](#ct-fun-001). Usuário autenticado com perfil NSP. Três notificações registradas e classificadas: uma como Evento Adverso/Óbito, uma como Never Event, uma como Evento Adverso/Grave.

**Dados de entrada**

- **Classificação A:** Evento adverso; Grau do dano: Óbito; Tipo de incidente: Queda; Envolvidos: Paciente; Protocolo: Investigação Sistêmica Profunda.
- **Classificação B:** Evento adverso; Grau do dano: Never Event; Tipo específico: Cirurgia em local/lado errado; Envolvidos: Paciente.
- **Classificação C:** Evento adverso; Grau do dano: Grave; Tipo de incidente: Queda; Envolvidos: Paciente.

**Procedimentos**

1\. Repetir para as classificações A, B e C:
*Tela Todos Incidentes*
2\. Localizar a notificação pelo identificador
3\. Abrir a notificação
*Tela Geral Notificações*
4\. Expandir a seção Análise
5\. Selecionar "Encaminhar notificação"
6\. Modal Encaminhamento
7\. Selecionar "Enviar"
8\. Observar a resposta do sistema e o status da notificação

**Resultado esperado**

- **Classificações A (Óbito) e B (Never Event):**
    - Sistema não realiza o encaminhamento
    - Sistema exibe a mensagem "Notificações classificadas como Óbito ou Never Event não podem ser encaminhadas para o setor responsável."
    - Sistema mantém o status "Classificada"
- **Classificação C (Grave):**
    - Sistema realiza o encaminhamento
    - Sistema altera o status para "Encaminhado"

### CT-E2E-019 — Permanência do incidente na fila do gestor ao longo do fluxo { #ct-e2e-019 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA02 | Fluxo principal e fluxo alternativo |

**Objetivo**

Validar que o incidente encaminhado ao setor permanece na fila do gestor da área enquanto o seu status avança (Em análise, Analisado, Em ação, Concluído ou Arquivado), mantendo o acesso do gestor até o fim do fluxo.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP e com credenciais de Gestor da Área vinculado ao Setor A
- Existir a notificação E1, do Setor A, classificada
- Existir a notificação E2, do Setor A, classificada

**Dados de entrada**

- **\*Setor A:** setor do Gestor da Área
- **\*\*Identificadores:** identificadores das notificações E1 e E2

\* Os setores variam conforme a instituição.

\*\* Os identificadores variam conforme as notificações registradas.

**Procedimentos**

*Tela Geral Notificação (profissional do NSP)*
1\. Abrir a notificação E1 e selecionar "Encaminhar para o setor analisar".
*Modal Encaminhamento*
2\. Selecionar "Enviar".
*Tela Todos Incidentes (Gestor da Área)*
3\. Verificar a notificação E1 na fila, com status "Encaminhado".
*Tela Análise (Gestor da Área)*
4\. Abrir a notificação E1, selecionar "Registrar análise" e salvar a primeira seção.
*Tela Todos Incidentes (Gestor da Área)*
5\. Verificar a notificação E1 na fila, com status "Em análise".
*Tela Análise (Gestor da Área)*
6\. Preencher as seções restantes com uma recomendação e concluir a análise.
*Tela Todos Incidentes (Gestor da Área)*
7\. Verificar a notificação E1 na fila, com status "Analisado".
*Tela Geral Notificação (Gestor da Área)*
8\. Na seção "Plano de ação", completar a ação originada da recomendação.
*Tela Todos Incidentes (Gestor da Área)*
9\. Verificar a notificação E1 na fila, com status "Em ação".
*Tela Geral Notificação (profissional do NSP)*
10\. Abrir a notificação E1, selecionar "Concluir incidente" no menu de opções do status e confirmar.
*Tela Todos Incidentes (Gestor da Área)*
11\. Verificar a notificação E1 na fila, com status "Concluído", e abrir o seu detalhe.
*Tela Geral Notificação (profissional do NSP)*
12\. Encaminhar a notificação E2 ao Setor A, selecionar "Arquivar notificação" no menu de opções do status e confirmar.
*Tela Todos Incidentes (Gestor da Área)*
13\. Verificar a notificação E2 na fila, com status "Arquivado", e abrir o seu detalhe.

**Resultado esperado**

- A notificação E1 permanece na fila do gestor em cada etapa, com os status "Encaminhado", "Em análise", "Analisado", "Em ação" e "Concluído".
- A notificação E2 permanece na fila do gestor após o arquivamento, com status "Arquivado".
- O gestor acessa o detalhe das notificações E1 e E2 após a conclusão e o arquivamento.

### CT-E2E-020 — Acesso do gestor ao resultado da análise realizada pelo NSP { #ct-e2e-020 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.1 | CA07 | Fluxo alternativo |

**Objetivo**

Validar que, quando a análise é realizada pelo NSP sem encaminhamento prévio, o gestor da área só acessa o incidente e as informações da análise se o NSP decidir encaminhar o resultado ao setor.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP e com credenciais de Gestor da Área vinculado ao Setor A
- Existir a notificação R1, do Setor A, classificada
- Existir a notificação R2, do Setor A, classificada

**Dados de entrada**

- **Justificativa de não encaminhamento (R2):** Incidente restrito ao núcleo.
- **\*Identificadores:** identificadores das notificações R1 e R2

\* Os identificadores variam conforme as notificações registradas.

**Procedimentos**

1\. Repetir para as notificações R1 e R2:
*Tela Geral Notificação (profissional do NSP)*
2\. Na seção "Análise", selecionar "Registrar análise".
*Tela Análise (profissional do NSP)*
3\. Preencher as seções com uma recomendação e concluir a análise.
*Tela Todos Incidentes (Gestor da Área)*
4\. Verificar que a notificação não aparece na fila.
*Tela Geral Notificação (profissional do NSP)*
5\. Para R1, selecionar "Encaminhar ao setor" e, no *Modal Encaminhamento*, selecionar "Enviar".
6\. Para R2, selecionar "Não encaminhar / justificar", informar a justificativa e selecionar "Confirmar".
*Tela Todos Incidentes (Gestor da Área)*
7\. Verificar as notificações R1 e R2 na fila.
8\. Abrir a notificação R1 e expandir a seção "Análise".
9\. Acessar diretamente, no navegador, o endereço da tela de detalhe da notificação R2.

**Resultado esperado**

- Antes da decisão do NSP, as notificações R1 e R2 não aparecem na fila do gestor.
- **Notificação R1 (resultado encaminhado):**
    - A notificação aparece na fila do gestor, com status "Analisado"
    - A seção "Análise" apresenta "A análise deste incidente foi concluída." e as informações da análise, incluindo as recomendações geradas
- **Notificação R2 (resultado não encaminhado):**
    - A notificação não aparece na fila do gestor
    - O sistema impede o acesso direto e não exibe nenhuma informação do incidente nem da análise
    - O histórico da notificação, visto pelo NSP, registra a decisão de não encaminhar com a justificativa

### CT-E2E-021 — Início, salvamento e retomada da análise do incidente { #ct-e2e-021 }

| Automatizado | História testada | Critério de aceite | Critério de teste |
| --- | --- | --- | --- |
| Não — Não implementado | US-4.2 | CA01 + CA02 + CA07 + CA14 + CA15 | Fluxo principal e partição por equivalência |

**Objetivo**

Validar o percurso de registro da análise: a disponibilização da opção "Registrar análise" a quem pode analisar, o salvamento automático do rascunho a cada avanço de seção, a atualização do status para "Em análise", o registro do autor e da data e hora, e a retomada do preenchimento pelo autor a partir de onde parou.

**Pré-condições**

- [CT-AUTH-002](#ct-auth-002) com credenciais de profissional do NSP que não seja o responsável pelo incidente e com credenciais de Gestor da Área
- Existir a notificação P1, classificada, sem análise iniciada
- Existir a notificação P2, encaminhada ao setor do gestor, sem análise iniciada

**Dados de entrada**

- **Incidente em investigação:** Queda do paciente durante deslocamento no corredor
- **Condutor da análise:** Ana Souza; Enfermagem; Enfermeiro(a); UTI

**Procedimentos**

1\. Repetir para a notificação P1, com o profissional do NSP autenticado, e para a notificação P2, com o Gestor da Área autenticado:
*Tela Geral Notificação*
2\. Expandir a seção "Análise" e verificar as opções apresentadas.
3\. Selecionar "Registrar análise".
*Tela Análise*
4\. No Guia de investigação, selecionar "Começar a análise".
5\. Informar o incidente em investigação e selecionar "Próximo".
6\. Na Seção 2, preencher o condutor da análise, as fontes consultadas e "Alguém precisa ser ouvido?", e selecionar "Próximo".
7\. Selecionar "Voltar para a notificação".
*Tela Geral Notificação*
8\. Verificar o status da notificação e a seção "Análise".
9\. Verificar, nas ferramentas do desenvolvedor do navegador (aba Rede), a resposta do servidor ao carregar a notificação.
10\. Selecionar "Continuar análise".
*Tela Análise*
11\. No Guia de investigação, selecionar "Começar a análise" e verificar a seção apresentada e os dados preenchidos.

**Resultado esperado**

- **Notificações P1 (NSP, status "Classificado") e P2 (Gestor da Área, status "Encaminhado"):**
    - **CA01:** a seção "Análise" apresenta a opção "Registrar análise", ainda que o usuário não seja o responsável pelo incidente
    - **CA07:** a cada avanço de seção, o sistema salva o rascunho e exibe a confirmação "Rascunho salvo"
    - **CA15:** após o salvamento da primeira seção, o status da notificação passa a "Em análise"
    - **CA14:** o sistema registra o usuário que salvou a análise e a data e a hora da operação
    - **CA02:** a seção "Análise" apresenta a opção "Continuar análise" ao autor, e o formulário é retomado na Seção 3, seção seguinte à última salva, com os dados das Seções 1 e 2 preservados

---

## 5. Testes Não-Funcionais { #testes-nao-funcionais }

### CT-NF-001 — Validação de disponibilidade contínua do sistema { #ct-nf-001 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Não | RNF 6.5.1 | Grafana/Prometheus |

**Objetivo**

Validar a disponibilidade contínua do sistema.

**Procedimentos**

1\. Configurar monitoramento da aplicação no Grafana/Prometheus.
2\. Monitorar disponibilidade do sistema durante 7 dias consecutivos.
3\. Registrar eventos de indisponibilidade identificados.

**Resultado esperado**

- O sistema deve permanecer disponível sem indisponibilidades críticas durante o período monitorado.

### CT-NF-002 — Validação de persistência de registros após indisponibilidade { #ct-nf-002 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Não | RNF 6.1.3 | Grafana/Prometheus |

**Objetivo**

Garantir que os dados permaneçam íntegros após falha temporária.

**Procedimentos**

1\. Configurar cenário de cadastro de notificações no Grafana/Prometheus.
2\. Registrar múltiplas notificações automaticamente.
3\. Simular reinicialização da aplicação.
4\. Validar a persistência dos registros após o retorno do sistema.

**Resultado esperado**

- Todos os registros realizados antes da indisponibilidade devem permanecer íntegros após a recuperação do sistema.

### CT-NF-003 — Validação de bloqueio após tentativas inválidas de login { #ct-nf-003 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Sim | RNF 6.2.5 | Playwright |

**Objetivo**

Validar o mecanismo de proteção contra tentativas excessivas de autenticação inválida.

**Procedimentos**

1\. Configurar requisições de login inválido no Grafana/Prometheus.
2\. Executar 15 tentativas consecutivas de autenticação inválida.
3\. Tentar novo acesso imediatamente após o bloqueio.
4\. Validar liberação após 60 segundos.

**Resultado esperado**

- O sistema deve bloquear novas autenticações por 60 segundos após 15 tentativas inválidas consecutivas.

### CT-NF-004 — Validação de política de senha segura { #ct-nf-004 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Não | RNF 6.2.6 | Manual |

**Objetivo**

Garantir que apenas senhas válidas sejam aceitas pelo sistema.

**Procedimentos**

1\. Enviar requisição de redefinição de senha com menos de 8 caracteres.
2\. Enviar senha sem letra maiúscula.
3\. Enviar senha sem número.
4\. Enviar senha sem caractere especial.
5\. Enviar senha válida contendo todos os requisitos obrigatórios.

**Resultado esperado**

- O sistema deve aceitar apenas senhas compatíveis com a política definida.

### CT-NF-005 — Validação de compatibilidade entre navegadores { #ct-nf-005 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Sim | RNF 6.4.1 | Playwright |

**Objetivo**

Garantir funcionamento correto nos navegadores homologados.

**Procedimentos**

1\. Executar acesso ao sistema no Google Chrome.
2\. Validar funcionalidades principais da aplicação.
3\. Repetir os testes no Safari.
4\. Repetir os testes no Microsoft Edge.

**Resultado esperado**

- O sistema deve apresentar funcionamento consistente nos navegadores homologados.

### CT-NF-006 — Validação de responsividade da interface { #ct-nf-006 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Sim | RNF 6.4.2 | Manual |

**Objetivo**

Garantir correta adaptação da interface em diferentes resoluções.

**Procedimentos**

1\. Executar análise responsiva utilizando Lighthouse.
2\. Validar comportamento da interface em resolução mobile.
3\. Validar comportamento da interface em resolução tablet.
4\. Validar comportamento da interface em resolução desktop.

**Resultado esperado**

- A interface deve adaptar-se corretamente às resoluções definidas sem perda de usabilidade.

### CT-NF-007 — Validação de desempenho no carregamento das páginas { #ct-nf-007 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Não — Não implementado | RNF 6.5.1 | Lighthouse |

**Objetivo**

Garantir desempenho adequado no carregamento das páginas da aplicação.

**Procedimentos**

1\. Executar análise de performance da aplicação no Lighthouse.
2\. Monitorar a métrica Largest Contentful Paint.
3\. Registrar os resultados obtidos.

**Resultado esperado**

- O tempo de Largest Contentful Paint deve permanecer igual ou inferior a 3 segundos.

### CT-NF-008 — Validação da latência da API { #ct-nf-008 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Não — Não implementado | RNF 6.5.1 | Grafana/Prometheus |

**Objetivo**

Garantir desempenho adequado das APIs sob carga simultânea.

**Procedimentos**

1\. Configurar cenário de carga com 50 usuários simultâneos no Grafana/Prometheus.
2\. Executar requisições simultâneas nos endpoints principais.
3\. Monitorar o tempo de resposta das APIs.
4\. Registrar os resultados obtidos.

**Resultado esperado**

- As APIs devem responder em até 500ms no percentil 95 sob carga simultânea.

### CT-NF-009 — Validação de acessibilidade WCAG nível A { #ct-nf-009 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Não — Não implementado | RNF 6.6.1 | Lighthouse |

**Objetivo**

Garantir acessibilidade adequada para usuários com necessidades especiais.

**Procedimentos**

1\. Executar varredura de acessibilidade utilizando Lighthouse.
2\. Validar contraste de cores da interface.
3\. Verificar estrutura semântica da página.
4\. Registrar falhas de acessibilidade identificadas.

**Resultado esperado**

- O sistema deve atender aos requisitos mínimos de acessibilidade WCAG nível A sem falhas críticas.

### CT-NF-010 — Validação da verificação anti-robô no envio de notificação { #ct-nf-010 }

| Automatizado | Requisito testado | Ferramenta |
| --- | --- | --- |
| Sim | RNF 8.2.8 | Playwright, utilizando os pares de chave de teste publicados pelo Cloudflare. |

**Objetivo**

Garantir que o envio do formulário público exige verificação anti-robô: que a rota recusa requisições sem verificação, que a interface impede o envio enquanto a verificação não é concluída, e que o envio com verificação aprovada registra a notificação normalmente.

**Procedimentos**

1\. Subir o ambiente com a verificação anti-robô ligada.
2\. Acessar o formulário público de notificação.
3\. Avançar até a última etapa, observando que o componente de verificação não é exibido nas etapas anteriores.
4\. Observar a exibição do componente de verificação e o estado do botão de envio antes e depois de a verificação concluir.
5\. Concluir o envio da notificação.
6\. Enviar uma requisição direta à rota de registro, sem o cabeçalho de verificação.

**Resultado esperado**

- O componente de verificação é exibido apenas na última etapa do formulário.
- O botão de envio permanece desabilitado enquanto a verificação não é concluída, e é habilitado após a conclusão.
- O envio com verificação aprovada registra a notificação e exibe a confirmação ao usuário.
- A requisição enviada sem o cabeçalho de verificação é recusada, com código de erro específico indicando verificação ausente.

---

## 6. Critérios de Teste { #criterios-teste }

### 6.1 Fluxo Alternativo { #criterios-fluxo-alternativo }

**[CT-FUN-005](#ct-fun-005)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Selecionar opções válidas diferentes de “Outros” | Sistema mantém apenas campos padrão visíveis |
| Alternativo | Selecionar opção “Outro” | Sistema exibe campo adicional obrigatório para especificação |
| Alternativo | Alterar seleção de “Outro” para opção válida | Sistema oculta o campo adicional |

**[CT-FUN-009](#ct-fun-009)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Visualizar lista no carregamento inicial | Sistema exibe todos os dados mínimos obrigatórios |
| Alternativo | Selecionar ordenação “Mais antigos” | Sistema mantém estrutura mínima obrigatória de exibição |

**[CT-FUN-016](#ct-fun-016)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Editar informações e salvar alterações | Sistema persiste os novos dados |
| Alternativo | Editar informações e cancelar operação | Sistema descarta alterações realizadas |
| Alternativo | Fechar tela sem salvar | Sistema mantém dados originais |

**[CT-FUN-021](#ct-fun-021)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Selecionar classificação sem dependências condicionais | Sistema permite avanço entre as etapas |
| Alternativo | Selecionar Tipo de incidente “Evento adverso” | Sistema exibe campo Classifique o grau de dano” |
| Alternativo | Selecionar Grau de dano “Never event” | Sistema exibe campo “Tipo específico de Never Event” |

**[CT-FUN-031](#ct-fun-031)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Transição automática de status | Sistema modifica status automaticamente após ações de classificação, encaminhamento e análise |
| Alternativo | Arquivamento manual | Sistema exibe status “Arquivado” após modificação manual |

**[CT-FUN-027](#ct-fun-027), [CT-FUN-028](#ct-fun-028), [CT-FUN-029](#ct-fun-029)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Visualizar incidente arquivado | Sistema permite apenas consulta |
| Alternativo | Tentar editar incidente arquivado | Sistema impede edição |
| Alternativo | Tentar classificar incidente arquivado | Sistema impede classificação |

**[CT-E2E-018](#ct-e2e-018)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Encaminhar notificação classificada com grau de dano permitido | Sistema encaminha ao setor responsável e altera o status para "Encaminhado" |
| Alternativo | Tentar encaminhar notificação classificada como Óbito ou Never Event | Sistema não realiza o encaminhamento, informa o motivo e mantém o status "Classificada" |

**[CT-E2E-019](#ct-e2e-019)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Incidente encaminhado avança por Em análise, Analisado, Em ação e Concluído | Sistema mantém o incidente na fila do gestor em todos os status |
| Alternativo | NSP arquiva o incidente encaminhado | Sistema mantém o incidente na fila do gestor com status "Arquivado" |

**[CT-E2E-020](#ct-e2e-020)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | NSP conclui a análise e encaminha o resultado ao setor | Sistema passa a exibir o incidente e a análise ao gestor |
| Alternativo | NSP conclui a análise e não encaminha o resultado, com justificativa | Sistema não exibe o incidente ao gestor e impede o acesso direto |

**[CT-FUN-047](#ct-fun-047)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Avançar pelas seções com "Próximo" | Sistema valida cada seção e avança até a Seção 5, com o botão "Finalizar análise" |
| Alternativo | Selecionar "Voltar" em uma seção | Sistema retorna à seção anterior sem perder o que foi preenchido |
| Alternativo | Selecionar "Voltar" na Seção 1 | Sistema retorna ao Guia de investigação |

**[CT-FUN-048](#ct-fun-048)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Primeiro usuário salva a primeira seção | Sistema aceita o salvamento e define o autor da análise |
| Alternativo | Segundo usuário salva a primeira seção ao mesmo tempo | Sistema recusa o salvamento, exibe a mensagem e não grava os dados |

**[CT-FUN-049](#ct-fun-049)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Preencher a seção antes de selecionar "Próximo" | Sistema não destaca campos |
| Alternativo | Selecionar "Próximo" com pendências | Sistema não avança, destaca os campos pendentes e exibe as mensagens e o aviso |
| Alternativo | Corrigir um campo destacado | Sistema remove o destaque do campo corrigido |

**[CT-FUN-050](#ct-fun-050)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Selecionar uma opção da lista em "Formação" | Sistema mantém apenas o menu de seleção |
| Alternativo | Selecionar a opção "Outro" em "Formação" | Sistema exibe o campo obrigatório "Especifique a opção" |

**[CT-FUN-051](#ct-fun-051)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Abrir o formulário pela primeira vez | Sistema exibe os blocos de passo a passo e de exemplos abertos |
| Alternativo | Recolher um bloco e abrir o formulário de outra análise | Sistema exibe o bloco recolhido |

**[CT-FUN-052](#ct-fun-052)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Padrão | Abrir o formulário sem marcar "Não mostrar novamente" | Sistema exibe o Guia de investigação antes da Seção 1 |
| Alternativo | Marcar "Não mostrar novamente" e abrir o formulário de outra análise | Sistema abre o formulário diretamente na Seção 1 |

### 6.2 Partição por Equivalência { #criterios-particao }

**[CT-AUTH-002](#ct-auth-002) e [CT-AUTH-003](#ct-auth-003)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Credenciais Administrador | Sistema permite a entrada e acesso total. |
| Válido | Credenciais NSP | Sistema permite a entrada e ações de classificação. |
| Válido | Credenciais Gestores | Sistema permite a entrada e vizualização de notificações. |
| Inválido | Credenciais quaisquer | Sistema não permite a entrada. |

**[CT-AUTH-005](#ct-auth-005)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | E-mail correto | Sistema envia link de redefinição |
| Inválido | E-mail incorreto | Sistema exibe mensagem de erro. |

**[CT-AUTH-007](#ct-auth-007)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Link dentro do prazo | Sistema envia link de redefinição |
| Inválido | Link expirado | Sistema exibe mensagem de erro e permite solicitação de um novo link. |

**[CT-AUTH-008](#ct-auth-008)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Senha válida | Sistema permite redefinição |
| Inválido | Senha inválida | Sistema exibe mensagem de erro e permite solicitação de um novo link. |

**[CT-AUTH-009](#ct-auth-009)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Acesso ao link com permissionamento | Sistema permite acesso |
| Inválido | Acesso ao link sem permissionamento | Sistema não permite acesso |

**[CT-FUN-010](#ct-fun-010)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Não aplicar filtro de Setor | Sistema exibe notificações de todos os setores |
| Válido | Selecionar filtro de Setor | Sistema exibe apenas notificações do Setor específico |
| Válido | Selecionar Setor sem notificações | Sistema informa ausência de resultados |

**[CT-FUN-011](#ct-fun-011)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Não aplicar filtro de Tipo de incidente | Sistema exibe notificações de todos os tipos |
| Válido | Selecionar filtro de Tipo de incidente | Sistema exibe apenas notificações do tipo |
| Válido | Selecionar Tipo de incidente sem notificações | Sistema informa ausência de resultados |

**[CT-FUN-012](#ct-fun-012)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Aplicar apenas filtro por Tipo de incidente | Sistema exibe notificações compatíveis |
| Válido | Aplicar filtro por Tipo de incidente e por Grau de dano | Sistema exibe apenas notificações compatíveis com ambos os filtros |
| Válido | Aplicar combinação sem resultados | Sistema informa ausência de resultados |

**[CT-FUN-013](#ct-fun-013)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Inserir identificador válido | Sistema localiza a notificação correspondente |
| Válido | Inserir identificador inexistente | Sistema informa que nenhuma notificação foi encontrada |

**[CT-FUN-024](#ct-fun-024), [CT-FUN-025](#ct-fun-025), [CT-FUN-026](#ct-fun-026)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Selecionar grau leve/moderado | Sistema define prazo de 10 dias |
| Válido | Selecionar grau grave | Sistema define prazo de 7 dias |
| Válido | Selecionar grau never event | Sistema define prazo de 4 dias |

**[CT-E2E-018](#ct-e2e-018)**

| Fluxo | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Grau de dano Leve, Moderado ou Grave | Sistema realiza o encaminhamento |
| Inválido | Grau de dano Óbito | Sistema impede o encaminhamento e informa o motivo |
| Inválido | Classificação como Never Event | Sistema impede o encaminhamento e informa o motivo |

**[CT-FUN-041](#ct-fun-041)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Incidente do setor do gestor encaminhado antes da análise | Sistema exibe o incidente na fila do gestor |
| Válido | Incidente do setor do gestor analisado pelo NSP com resultado encaminhado | Sistema exibe o incidente na fila do gestor |
| Inválido | Incidente de outro setor | Sistema não exibe o incidente na fila do gestor |
| Inválido | Incidente do setor do gestor não encaminhado | Sistema não exibe o incidente na fila do gestor |

**[CT-FUN-043](#ct-fun-043)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Evento adverso com grau de dano | Sistema exibe Grau do dano e Tipo de incidente |
| Válido | Evento adverso classificado como Never Event | Sistema exibe Tipo específico (Never Event) no lugar de Tipo de incidente |
| Válido | Incidente com status "Encaminhado" ou "Em análise" | Sistema exibe o prazo para análise |
| Válido | Incidente com status "Analisado" | Sistema não exibe o prazo para análise |

**[CT-FUN-044](#ct-fun-044)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Notificação identificada visualizada pelo gestor | Sistema omite nome e celular/e-mail do notificante na tela e na resposta do servidor |
| Válido | Notificação anônima visualizada pelo gestor | Sistema apresenta a mesma tela da notificação identificada, sem indicar que é anônima |
| Válido | Notificação identificada visualizada pelo NSP | Sistema exibe nome e celular/e-mail do notificante |

**[CT-FUN-045](#ct-fun-045)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Acesso direto a incidente do setor do gestor encaminhado | Sistema exibe as informações do incidente |
| Inválido | Acesso direto a incidente de outro setor | Sistema impede o acesso às informações do incidente e da análise |
| Inválido | Acesso direto a incidente do setor do gestor não encaminhado | Sistema impede o acesso às informações do incidente e da análise |

**[CT-FUN-046](#ct-fun-046)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Incidente sem classificação | Sistema exibe o incidente ao NSP |
| Válido | Incidente classificado e não encaminhado | Sistema exibe o incidente ao NSP |
| Válido | Incidente encaminhado a um setor | Sistema exibe o incidente ao NSP |
| Válido | Incidente classificado por outro profissional do NSP | Sistema exibe o incidente ao NSP, com o outro profissional como responsável |

**[CT-E2E-021](#ct-e2e-021)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Profissional do NSP, não responsável, com incidente "Classificado" | Sistema disponibiliza "Registrar análise" e atualiza o status para "Em análise" ao salvar |
| Válido | Gestor da Área com incidente "Encaminhado" ao seu setor | Sistema disponibiliza "Registrar análise" e atualiza o status para "Em análise" ao salvar |

**[CT-FUN-048](#ct-fun-048)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Autor da análise acessa a seção "Análise" | Sistema exibe "Continuar análise" |
| Inválido | Outro profissional do NSP acessa análise iniciada por outro profissional do NSP | Sistema exibe apenas a mensagem de análise em andamento |
| Inválido | Profissional do NSP acessa análise iniciada pelo Gestor da Área | Sistema exibe apenas a mensagem de análise em andamento |

**[CT-FUN-049](#ct-fun-049)**

| Cenário | Descrição | Resultado esperado |
| --- | --- | --- |
| Válido | Seção sem pendências | Sistema avança para a próxima seção |
| Inválido | Uma pendência | Sistema exibe o aviso indicando qual é a pendência |
| Inválido | Várias pendências | Sistema exibe o aviso "Corrija os N itens destacados para continuar." |
| Inválido | Pendência em tabela | Sistema destaca apenas as células pendentes |

### 6.3 Análise de Valor Limite { #criterios-valor-limite }

**[CT-FUN-003](#ct-fun-003)**

| Tipo de Valor | Descrição | Resultado esperado |
| --- | --- | --- |
| Valor válido | Inserir data atual | Sistema permite avanço |
| Limite superior inválido | Inserir data posterior à atual | Sistema exibe “Data inválida!” |

**[CT-E2E-018](#ct-e2e-018)**

| Tipo de Valor | Descrição | Resultado esperado |
| --- | --- | --- |
| Último valor válido | Grau de dano Grave | Sistema realiza o encaminhamento |
| Limite superior inválido | Grau de dano Óbito | Sistema impede o encaminhamento |

**[CT-FUN-050](#ct-fun-050)**

| Tipo de Valor | Descrição | Resultado esperado |
| --- | --- | --- |
| Último valor válido | Incidente em investigação com 100 caracteres | Sistema permite avanço |
| Limite superior inválido | Incidente em investigação com 101 caracteres | Sistema exibe o contador em vermelho e o aviso de limite e bloqueia o avanço, sem cortar o texto |
| Último valor válido | Especificação de "Outro" com 30 caracteres | Sistema aceita a especificação |
| Limite superior inválido | Especificação de "Outro" com 31 caracteres | Sistema exibe o aviso de limite e bloqueia o avanço |

---

## 7. Telas { #telas }

A execução dos casos de teste descritos neste documento envolve as principais telas e componentes do sistema Notifica Saúde, contemplando os fluxos de registro, autenticação, classificação, gerenciamento e encaminhamento de notificações de incidentes.

A Tela Home constitui o ponto inicial de acesso ao sistema e disponibiliza as funcionalidades de navegação para os usuários.

As Telas 1 a 5 compõem o fluxo de registro de notificações, permitindo o preenchimento progressivo das informações necessárias para o cadastro de um incidente, finalizado por meio do Modal Fim Notificação, responsável por confirmar o envio e o registro da ocorrência.

A autenticação dos usuários é realizada pela Tela Login, que controla o acesso às funcionalidades do sistema conforme o perfil do usuário. Após autenticado, o profissional pode acessar a Tela Todos Incidentes, onde são apresentadas as notificações registradas e suas respectivas informações resumidas. A partir dessa listagem, é possível acessar a Tela Geral Notificações, que concentra os detalhes completos de cada incidente e permite a execução das ações previstas no fluxo de negócio.

As operações de manutenção e tratamento das notificações são realizadas por meio de componentes modais específicos. O Modal Edição possibilita complementar ou corrigir informações da notificação quando permitido pelas regras de negócio. O Modal Classificação de Incidente é utilizado pelos profissionais do Núcleo de Segurança do Paciente para registrar a classificação do incidente, definir os envolvidos e selecionar protocolos de investigação. Por fim, o Modal Encaminhamento permite direcionar a notificação para a área responsável pela investigação e tratamento do incidente, promovendo a atualização do status e a continuidade do fluxo de gestão previsto pelo sistema.
