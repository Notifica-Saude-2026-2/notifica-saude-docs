<h1 align="center">Matriz RBAC</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 2.0 | 07/10/2026 | Atualização da matriz conforme a versão atual da Especificação de Requisitos: inclusão das permissões de análise, plano de ação, histórico e ciclo de vida do incidente (épicos 4, 5 e 6), do acesso restrito do gestor da área (RN-26), da restrição do Administrador do Sistema, que não acessa nem altera incidentes das instituições, e das referências às histórias de usuário e regras de negócio. | Sophya Ribeiro |

Matriz de controle de acesso baseado em perfis (RBAC), definindo quais funcionalidades cada perfil de usuário pode executar no sistema. As permissões seguem as histórias de usuário e as regras de negócio da [Especificação de Requisitos de Software](especificacao-requisitos.md), indicadas na coluna **Referência**.

!!! info "Legenda"
    ✅ Permitido · ❌ Não permitido · ✅ ¹ Permitido somente nos incidentes do próprio setor que o NSP encaminhou ao gestor, antes ou depois da análise (RN-26) · 🕒 Previsto para uma versão futura, em interface própria de administração

## 1. Registro de notificações

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema | Referência |
| --- | :---: | :---: | :---: | :---: | --- |
| Registrar notificação de incidente (formulário público, sem login) | ✅ | ✅ | ✅ | ✅ | US-1.1 |

## 2. Gestão e classificação de notificações

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema | Referência |
| --- | :---: | :---: | :---: | :---: | --- |
| Visualizar todas as notificações da instituição | ❌ | ✅ | ❌ | ❌ | US-2.1, RN-26 |
| Visualizar notificações encaminhadas ao seu setor | ❌ | ✅ | ✅ ¹ | ❌ | US-4.1, RN-26 |
| Visualizar a identificação do notificante (nome e celular/e-mail) | ❌ | ✅ | ❌ | ❌ | US-4.1, RN-27 |
| Complementar ou corrigir informações da notificação | ❌ | ✅ | ❌ | ❌ | US-2.2 |
| Classificar incidente notificado | ❌ | ✅ | ❌ | ❌ | US-2.3 |
| Encaminhar notificação para o setor | ❌ | ✅ | ❌ | ❌ | US-2.4 |
| Consultar histórico da notificação | ❌ | ✅ | ✅ ¹ | ❌ | US-2.5 |

## 3. Autenticação e controle de acesso

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema | Referência |
| --- | :---: | :---: | :---: | :---: | --- |
| Realizar login no sistema | ❌ | ✅ | ✅ | 🕒 | US-3.1 |
| Recuperar senha de acesso | ❌ | ✅ | ✅ | 🕒 | US-3.2 |

## 4. Análise de incidentes

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema | Referência |
| --- | :---: | :---: | :---: | :---: | --- |
| Registrar e concluir a análise de incidente não encaminhado ao setor | ❌ | ✅ | ❌ | ❌ | US-4.2 a US-4.8, RN-16 |
| Registrar e concluir a análise de incidente encaminhado ao setor | ❌ | ✅ | ✅ ¹ | ❌ | US-4.2 a US-4.8, RN-16, RN-28 |
| Consultar análise concluída | ❌ | ✅ | ✅ ¹ | ❌ | US-4.8, RN-18, RN-28 |
| Decidir o encaminhamento do resultado da análise ao setor | ❌ | ✅ | ❌ | ❌ | US-4.9, RN-18 |

## 5. Plano de ação

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema | Referência |
| --- | :---: | :---: | :---: | :---: | --- |
| Adicionar, completar, editar e excluir ações do plano de ação | ❌ | ✅ | ✅ ¹ | ❌ | US-5.1 a US-5.4 |
| Acompanhar o plano de ação e os prazos | ❌ | ✅ | ✅ ¹ | ❌ | US-5.5 |
| Atualizar o andamento e avaliar a efetividade das ações | ❌ | ✅ | ✅ ¹ | ❌ | US-5.6, US-5.7 |

## 6. Status e ciclo de vida do incidente

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema | Referência |
| --- | :---: | :---: | :---: | :---: | --- |
| Visualizar o status do incidente | ❌ | ✅ | ✅ ¹ | ❌ | US-6.1 |
| Alterar o status manualmente | ❌ | ❌ | ❌ | ❌ | US-6.1 (CA03) |
| Arquivar incidente | ❌ | ✅ | ❌ | ❌ | US-6.3 |
| Concluir incidente | ❌ | ✅ | ❌ | ❌ | US-6.4, RN-22 |

## 7. Administração do sistema

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema | Referência |
| --- | :---: | :---: | :---: | :---: | --- |
| Gerenciar usuários da própria instituição | ❌ | ✅ | ❌ | 🕒 | Descrição dos atores |
| Gerenciar usuários de todas as instituições | ❌ | ❌ | ❌ | 🕒 | Descrição dos atores |
| Gerenciar instituições | ❌ | ❌ | ❌ | 🕒 | Descrição dos atores |
| Gerenciar formulário de registro de notificações | ❌ | ❌ | ❌ | 🕒 | Descrição dos atores |

## Observações

- **Notificante:** não possui login. Qualquer pessoa pode registrar uma notificação pelo formulário público, de forma identificada ou anônima, inclusive os usuários dos demais perfis.
- **Gestor da área:** acessa apenas os incidentes do seu setor encaminhados pelo NSP. Incidentes de outros setores ou não encaminhados não aparecem na sua fila e não podem ser acessados nem por link direto (RN-26). Os dados de identificação do notificante são omitidos em todas as telas e não são enviados ao seu navegador (RN-27).
- **Análise em andamento:** enquanto a análise não for concluída, somente quem a iniciou pode continuá-la e concluí-la; os demais usuários com acesso ao incidente veem apenas o aviso de análise em andamento (RN-28).
- **Status:** nenhum perfil altera o status manualmente. Ele muda somente pelas ações do fluxo (US-6.2) e pelo arquivamento ou conclusão do incidente.
- **Incidentes concluídos ou arquivados:** ficam somente leitura para todos os perfis (US-6.1, CA06).
- **Administrador do sistema:** não visualiza nem interfere nos incidentes das instituições (notificações, classificação, análise, plano de ação e status), para preservar o sigilo e a segurança das informações. Suas permissões se limitam à administração do sistema e serão disponibilizadas futuramente, em uma interface própria, separada da interface de gestão de incidentes; por isso aparecem como previstas (🕒).
- **Aplicação das regras:** o controle de acesso deve ser garantido no servidor, impedindo acesso indevido por manipulação de URLs, rotas ou requisições (requisito não funcional 6.2.2).
