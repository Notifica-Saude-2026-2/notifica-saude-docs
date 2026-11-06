# ════════════════════════════════════════════════════════════════════════
# Relações — Componentes (C4 Nível 3 - Camadas da API)
# ════════════════════════════════════════════════════════════════════════

!element notificaSaude.backend {

    # ── Middlewares & Entrada ────────────────────────────────────────────────
    apiControllers       = component "API Controllers" "Recebe requisições HTTP, orquestra rotas e formata respostas." "Express Routers"
    authMiddleware       = component "Auth Middleware" "Intercepta a requisição para validação de JWT e identidade." "Express Middleware"
    tenantRbacMiddleware = component "Tenant & RBAC Middleware" "Valida isolamento multi-tenant e perfil de acesso (RBAC)." "Express Middleware"

    # ── Serviços Lógicos (Business & Auth) ───────────────────────────────────
    authService          = component "Auth & Identity Service" "Gerencia autenticação, controle de sessão e emissão de tokens." "TypeScript Service"
    domainServices       = component "Domain & Business Services" "Lógica de negócio core: registro, classificação e planos de ação." "TypeScript Service"
    
    # ── Serviços de Apoio & Integração ───────────────────────────────────────
    emailComponent       = component "Email Notification Component" "Responsável pela formatação e disparo de e-mails transacionais." "TypeScript Service"
    notivisaAdapter      = component "Notivisa Integration Adapter" "Camada anticorrupção/fila para desacoplar o envio seguro ao Notivisa." "TypeScript Worker"

    # ── Persistência ─────────────────────────────────────────────────────────
    repositories         = component "Repositories" "Abstrai a persistência e garante o isolamento multi-tenant dos dados." "TypeScript Classes"
    prismaOrm            = component "Prisma ORM" "Realiza o mapeamento objeto-relacional e gerencia conexões." "Prisma Client"
}

# ── Fluxo de Entrada ──────────────────────────────────────────────────
notificaSaude.frontend -> notificaSaude.backend.apiControllers "Realiza requisições REST (JSON)" "HTTPS"

# ── Pipeline de Middlewares ───────────────────────────────────────────
notificaSaude.backend.apiControllers -> notificaSaude.backend.authMiddleware "Encaminha para validação de identidade"
notificaSaude.backend.authMiddleware -> notificaSaude.backend.tenantRbacMiddleware "Se autenticado, verifica escopo de tenant e permissões"

# ── Delegação para Lógica de Negócio e Autenticação ───────────────────
notificaSaude.backend.tenantRbacMiddleware -> notificaSaude.backend.authService "Delega rotas de login e gestão de acessos"
notificaSaude.backend.tenantRbacMiddleware -> notificaSaude.backend.domainServices "Delega rotas de negócio (notificações, análises)"

# ── Desacoplamento de Serviços (E-mail e Integração) ──────────────────
notificaSaude.backend.domainServices -> notificaSaude.backend.emailComponent "Dispara eventos assíncronos de notificação"
notificaSaude.backend.domainServices -> notificaSaude.backend.notivisaAdapter "Envia incidentes graves para processamento paralelo"

# ── Acesso a Dados e Cache ────────────────────────────────────────────
notificaSaude.backend.authService    -> notificaSaude.redisCache "Verifica blacklist de tokens e armazena sessões" "TCP"
notificaSaude.backend.domainServices -> notificaSaude.redisCache "Consulta dados cacheados de acesso rápido" "TCP"

notificaSaude.backend.authService    -> notificaSaude.backend.repositories "Consulta credenciais de usuários"
notificaSaude.backend.domainServices -> notificaSaude.backend.repositories "Solicita operações de leitura ou escrita no domínio"

notificaSaude.backend.repositories   -> notificaSaude.backend.prismaOrm "Executa instruções no ORM"
notificaSaude.backend.prismaOrm      -> notificaSaude.database "Lê e escreve dados no banco relacional" "TCP · PostgreSQL Wire Protocol"

# ── Integrações Externas ──────────────────────────────────────────────
notificaSaude.backend.emailComponent  -> emailProvider "Dispara e-mails via API/SMTP" "HTTPS/SMTP"
notificaSaude.backend.notivisaAdapter -> notivisa "Encaminha lote de notificações via API externa" "HTTPS/REST"