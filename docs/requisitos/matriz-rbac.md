<h1 align="center">Matriz RBAC</h1>


Matriz de controle de acesso baseado em perfis (RBAC), definindo quais funcionalidades cada perfil de usuário pode executar no sistema.

| Funcionalidade | Notificante | Núcleo de Segurança do Paciente (NSP) | Gestor da Área | Administrador do Sistema |
| --- | :---: | :---: | :---: | :---: |
| Registrar notificação de incidente | ✅ | ✅ | ✅ | ✅ |
| Visualizar notificações registradas para a instituição | ❌ | ✅ | ❌ | ✅ |
| Visualizar notificações encaminhadas ao setor | ❌ | ✅ | ✅ | ✅ |
| Complementar ou corrigir informações da notificação | ❌ | ✅ | ❌ | ✅ |
| Classificar incidente notificado | ❌ | ✅ | ❌ | ✅ |
| Definir e gerenciar status do incidente | ❌ | ✅ | ❌ | ✅ |
| Encaminhar notificação para área responsável | ❌ | ✅ | ❌ | ✅ |
| Realizar login no sistema | ❌ | ✅ | ✅ | ✅ |
| Recuperar senha de acesso | ❌ | ✅ | ✅ | ✅ |
| Gerenciar usuários | ❌ | ✅ | ❌ | ✅ |
| Gerenciar instituições | ❌ | ❌ | ❌ | ✅ |
| Gerenciar formulário de registro de notificações | ❌ | ❌ | ❌ | ✅ |