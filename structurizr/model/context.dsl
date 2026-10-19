# ════════════════════════════════════════════════════════════════════════
# Modelo Simplificado — Pessoas, Sistemas e Camadas (C4 Nível 1, 2 e 3)
# ════════════════════════════════════════════════════════════════════════

# ── Atores ───────────────────────────────────────────────
notificante  = person "Notificante" "Registra notificação via formulário público (identificado ou anônimo)"
nsp          = person "Profissional NSP" "Classifica incidentes, complementa dados e encaminha notificações."
gestorArea   = person "Gestor de Área" "Investiga incidentes e define o plano de ação."
adminSistema = person "Administrador do Sistema" "Administra o sistema globalmente e configura campos do formulário."

# ── Sistemas externos ───────────────────────────────────────────────────
notivisa = softwareSystem "NOTIVISA" "Sistema nacional da ANVISA para integração futura." "External System"
emailProvider = softwareSystem "Brevo - Provedor de Email" "Serviço externo (SMTP/API) para envio de e-mails transacionais." "External System"

# ── Sistema principal ─────────────────────────────────────────────────
notificaSaude = softwareSystem "NotificaSaúde" "Plataforma para gestão de incidentes de segurança do paciente." "Core System" {

    database = container "Banco de Dados" "Armazenamento relacional isolado por tenant." "PostgreSQL 16" "Database"
    redisCache = container "Servidor de Cache" "Armazenamento em memória para sessões, tokens e acesso rápido." "Redis" "Database"

    frontend = container "Aplicação Web (Frontend)" {
        description "Interface responsiva para todos os perfis de acesso."
        technology "React, TypeScript"
        tags "Frontend, Web Browser"

        routes = component "Route" "Define quais páginas serão renderizadas em quais rotas HTTP" "TypeScript,TypeScript XML/TSX"
        pages = component "Page" "Define a página a ser renderizada" "TypeScript,TypeScript XML/TSX"
        components = component "React Component" "" "TypeScript,TypeScript XML/TSX"
        hooks = component "React Hook" "" "TypeScript,TypeScript XML/TSX"
        service = component "Service" "" "TypeScript"
    }

    backend = container "API Backend" "API REST baseada em arquitetura de camadas e serviços modulares." "Node.js, Express.js, TypeScript" "Backend" {

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

    bullmq = container "BullMQ Worker" "Sistema de consumição de fila de mensageria para o envio de emails de forma assíncrona" "Node.js, TypeScript" {

    }

    staticContent = container "Conteúdo Estático" "Disponibiliza os artefatos do subsistema frontend e seus recursos" "Nginx" "Folder"
}