workspace "NotificaSaúde" "Sistema de notificação, análise e monitoramento de incidentes relacionados à segurança do paciente em serviços de saúde." {

    # As ADRs foram migradas para o MkDocs (docs/desenvolvimento/arquitetura/adr/).
    # !adrs decisoes

    !identifiers hierarchical

    model {
        !include model/context.dsl
        !include model/containers.dsl
        !include model/components.dsl
        !include model/environment/
    }

    !include views/views.dsl

    configuration {
        scope softwaresystem
    }

}
