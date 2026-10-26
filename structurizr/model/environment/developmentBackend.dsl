developmentBackend = deploymentEnvironment developmentBackend {

    group "Computador do Desenvolvedor" {
        docker = deploymentNode "Docker" "Ambiente de Contêiners" "Docker Engine" {
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
}
