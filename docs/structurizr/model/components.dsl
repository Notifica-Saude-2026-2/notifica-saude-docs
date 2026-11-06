# ════════════════════════════════════════════════════════════════════════
# Relações — Componentes (C4 Nível 3 - Camadas da API)
# ════════════════════════════════════════════════════════════════════════

## Backend

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

# ── Integrações ──────────────────────────────────────────────
notificaSaude.frontend.service -> notificaSaude.backend.apiControllers "Realiza requisições REST (JSON)" "HTTP/HTTPS"
notificaSaude.backend.emailComponent -> notificaSaude.redisCache "Envia mensagem para fila do BullMQ" "TCP/IP, BullMQ"
notificaSaude.bullmq -> notificaSaude.redisCache "Lê mensagens da fila do BullMQ", "TCP/IP, BullMQ"
notificaSaude.bullmq  -> emailProvider "Dispara e-mails via SMTP" "SMTP"
notificaSaude.backend.notivisaAdapter -> notivisa "(Planejado. Não implementado.) Encaminha lote de notificações via API externa" "HTTPS/REST"
notificaSaude.staticContent -> notificaSaude.frontend "Disponibiliza"

## Frontend

notificaSaude.frontend.routes -> notificaSaude.frontend.pages ""
notificaSaude.frontend.pages -> notificaSaude.frontend.components ""
notificaSaude.frontend.pages -> notificaSaude.frontend.hooks ""
notificaSaude.frontend.hooks -> notificaSaude.frontend.service ""

notificante  -> notificaSaude.frontend.routes "Acessa formulário público de notificação (sem autenticação)" "HTTP/HTTPS"
nsp          -> notificaSaude.frontend.routes "Acessa painel NSP (autenticado)" "HTTP/HTTPS"
gestorArea   -> notificaSaude.frontend.routes "Acessa painel Gestor (autenticado)" "HTTP/HTTPS"
adminSistema -> notificaSaude.frontend.routes "Acessa painel Administrador do Sistema (autenticado)" "HTTP/HTTPS"
