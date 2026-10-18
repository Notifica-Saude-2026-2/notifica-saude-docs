    # ════════════════════════════════════════════════════════════════════════
    # Views — Diagramas C4 e estilos visuais
    # Paleta baseada no C4 Model official (Simon Brown):
    #   Pessoas        → azul marinho  #08427b
    #   Sistema focal  → azul          #1168bd
    #   Sistemas ext.  → cinza         #999999
    #   Relacionamentos → cinza claro, tracejado
    # ════════════════════════════════════════════════════════════════════════

    views {

        # ── Nível 1 — Diagrama de Contexto ───────────────────────────────────

        systemContext notificaSaude "Diagrama_Contexto" {
            include *
            title "NotificaSaúde — C4 Nível 1: Contexto do Sistema"
            description "Visão geral do sistema, seus cinco perfis de usuário e a integração futura com o NOTIVISA (ANVISA). Destaca que o Notificante acessa sem autenticação (RN-03, RN-04)."
        }

        # ── Nível 2 — Diagrama de Container ──────────────────────────────────

        container notificaSaude "Diagrama_Container" {
            include *
            title "NotificaSaúde — C4 Nível 2: Containers"
            description "Três containers: Frontend (React+TS), API Backend (Express.js+TS) e Banco de Dados (PostgreSQL 16). Comunicação via REST+JWT. Rota pública para registro de notificação sem autenticação."
        }

        # ── Nível 3 — Diagrama de Componentes: API Backend ───────────────────

        component notificaSaude.backend "Diagrama_Componentes_Backend" {
            include *
            title "NotificaSaúde — C4 Nível 3: Componentes da API Backend"
            description "Detalhamento interno do container API Backend. Fluxo público (publicGateway → NotificacaoService) separado do fluxo protegido (authMiddleware → tenantMiddleware → rbacMiddleware → routes). Camadas: middlewares, routes, services, repositories (TenantRepository base) e Prisma."
        }

        # ── Nível 3 ─ Diagrama de Componentes: Frontend ───────────────────────

        component notificaSaude.frontend "Diagrama_Componentes_Frontend" {
            include *
            title "NotificaSaúde — C4 Nível 3: Componentes do Subsistema Frontend"
            description "Detalhamento dos componentes desenvolvidos no submódulo Frontend a fim de fornecer GUI, interatividade e integração com o subsistema Backend"
        }

        # ── Implantação
        deployment * homologation "Diagrama_Implantacao_Homologacao" {
            include *
            title "NotificaSaúde — Diagrama de Implantação (Homologação)"
            description "Visão geral do ambiente de homologação, incluindo servidores, serviços e integrações externas."
        }

        deployment * developmentBackend "Diagrama_Implantacao_Desenvolvimento_Backend" {
            include *
            title "NotificaSaúde — Diagrama de Implantação (Desenvolvimento Backend)"
            description "Visão detalhada do ambiente de desenvolvimento para o backend, incluindo servidores, serviços e integrações externas."
        }

        
        deployment * developmentFrontend "Diagrama_Implantacao_Desenvolvimento_Frontend" {
            include *
            title "NotificaSaúde — Diagrama de Implantação (Desenvolvimento Frontend)"
            description "Visão detalhada do ambiente de desenvolvimento para o frontend, incluindo servidores, serviços e integrações externas."
        }

        # ── Estilos ───────────────────────────────────────────────────────────

        styles {
            !include styles
        }

    }
