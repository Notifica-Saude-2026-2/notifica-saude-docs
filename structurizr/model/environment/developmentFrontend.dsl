developmentFrontend = deploymentEnvironment developmentFrontend {

    group "Computador do Desenvolvedor" {
        deploymentNode "Navegador Web" "" "Chrome, Firefox, Safari, Edge" {
            containerInstance notificaSaude.frontend {

            }
        }

        docker = deploymentNode "Docker" "Ambiente de Contêiners" "Docker Engine" {
            nginx = deploymentNode "Servidor de Conteúdo Estático" "Disponibiliza o conteúdo estático e fornece roteamento para a SPA" "nginx" {

            }

            nodejs = deploymentNode "Node.js" "Ambiente de Execução do Backend" "Docker Container, Linux Alpine, Node.js 24" {
                backendApp = containerInstance notificaSaude.backend {

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
