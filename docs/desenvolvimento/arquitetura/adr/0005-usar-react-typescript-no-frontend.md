<h1 align="center">ADR-0005 — Utilizar React com TypeScript no frontend do NotificaSaúde</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 11/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 11/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

O NotificaSaúde terá uma interface web responsiva acessada por diferentes perfis de usuários, incluindo profissionais de saúde, pacientes e acompanhantes, em dispositivos móveis e desktop.

Como o sistema trata de notificações de incidentes, uma parte central da experiência do produto será o preenchimento de formulários por pessoas com diferentes níveis de familiaridade com tecnologia, diferentes faixas etárias e distintos contextos de uso.

Nesse cenário, a interface precisa ser **acessível, prática e intuitiva**, reduzindo atrito no preenchimento, evitando ambiguidades e favorecendo a conclusão do registro de forma clara e segura.

Ao mesmo tempo, o frontend precisará evoluir rapidamente durante a fase piloto, com componentes reutilizáveis, boa organização do código e segurança na manutenção à medida que novas funcionalidades forem sendo incorporadas.

Além disso, a equipe de desenvolvimento precisa de uma stack moderna, amplamente adotada e com bom ecossistema para construção de interfaces web interativas.

## Decisão

Foi decidido utilizar **React** com **TypeScript** como stack principal do frontend do NotificaSaúde.

O React será utilizado para estruturar a interface em componentes reutilizáveis e compor fluxos de interação claros, enquanto o TypeScript será adotado para aumentar a segurança de tipos, reduzir erros em tempo de desenvolvimento e melhorar a manutenibilidade da base de código.

A escolha dessa stack também considera a necessidade de construir formulários e jornadas de uso com foco em acessibilidade, consistência visual, feedback adequado ao usuário e evolução incremental da interface sem perda de qualidade.

## Consequências

### Consequências positivas

- Desenvolvimento de interfaces baseado em componentes reutilizáveis
- Melhor organização do frontend em telas, estados e fluxos de interação
- Maior capacidade de construir formulários consistentes, claros e reutilizáveis
- Melhor suporte à implementação de boas práticas de acessibilidade e usabilidade
- Maior segurança de manutenção com tipagem estática
- Melhor suporte a refatorações e evolução do produto ao longo do piloto
- Adoção de tecnologias amplamente utilizadas e com amplo ecossistema

### Consequências negativas

- Curva de aprendizado para quem possui menos experiência com a stack
- Necessidade de definir padrões de organização, estado e integração para evitar inconsistências
- Necessidade de disciplina de design e implementação para que a acessibilidade não dependa apenas da tecnologia escolhida
- Complexidade maior do que abordagens puramente estáticas para páginas simples

### Mitigações

Para garantir consistência técnica, a equipe deverá:

- definir padrões de componentização, roteamento e organização de código
- adotar boas práticas de tipagem e revisão de código
- estabelecer diretrizes de acessibilidade, clareza textual e comportamento de formulários
- priorizar fluxos simples, linguagem compreensível e feedbacks visuais objetivos ao usuário
- priorizar uma arquitetura de frontend simples e adequada ao escopo do piloto
- evitar introdução prematura de bibliotecas e abstrações desnecessárias

Essa decisão prioriza produtividade, qualidade de manutenção e evolução segura da interface web do sistema, sem perder de vista a necessidade de oferecer uma experiência acessível e intuitiva para o público atendido.
