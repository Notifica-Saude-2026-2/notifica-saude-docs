homologation = deploymentEnvironment homologation {
    deploymentNode "Computador do Usuário" "" "Windows, macOS, Linux" {
        deploymentNode "Navegador Web" "" "Chrome, Firefox, Safari, Edge" {
            containerInstance notificaSaude.frontend {

            }
        }
    }

    group "Servidor de Homologação (NES/FACOM)" {
        docker = deploymentNode "Docker" "Ambiente de Contêiners" "Docker Engine" {
            nginx = deploymentNode "Servidor de Conteúdo Estático" "Disponibiliza o conteúdo estático e fornece roteamento para a SPA" "nginx" {
                staticContentStore = containerInstance notificaSaude.staticContent {
                    
                }
            }

            nodejs = deploymentNode "Node.js - Backend App" "Ambiente de Execução do Backend" "Docker Container, Linux Alpine, Node.js 24" {
                backendApp = containerInstance notificaSaude.backend {

                }
            }

            
            bullmqWorkerContainer = deploymentNode "Node.js - BullMQ Worker" "Ambiente de Execução do Backend" "Docker Container, Linux Alpine, Node.js 24" {
                bullmqWorker = containerInstance notificaSaude.bullmq {

                }
            }

            postgres = deploymentNode "PostgreSQL" "Banco de Dados Relacional" "Docker Container, Linux Alpine, PostgreSQL 18" {
                database = containerInstance notificaSaude.database {

                }
            }

            redis = deploymentNode "Redis" "Servidor de Cache em Memória" "Docker Container, Linux Alpine, Redis 8" {
                cache = containerInstance notificaSaude.redisCache {
                    
                }
            }
        }
    }

    group "Provedor de Email" {
        emailProviderNode = deploymentNode "Servidor de Email" "Ambiente do Provedor de Email" "SMTP" {
            emailProviderInstance = softwareSystemInstance emailProvider {

            }
        }
    }

    group "Sistema Externo: NOTIVISA (ANVISA)" {
        notivisaNode = deploymentNode "Servidor do NOTIVISA" "Ambiente do Sistema NOTIVISA da ANVISA" {
            notivisaInstance = softwareSystemInstance notivisa {
                
            }
        }
    }
}
