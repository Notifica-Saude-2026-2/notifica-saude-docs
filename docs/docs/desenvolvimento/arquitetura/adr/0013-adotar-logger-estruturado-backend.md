<h1 align="center">ADR-0013 — Adotar Logger Estruturado com Pino no Backend</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 23/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 23/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

---

## Contexto

O sistema NotificaSaúde lida com informações críticas de segurança do paciente. O backend utilizava `console.log` e os logs nativos do Prisma em texto plano, o que gerava dois problemas centrais:

- **Observabilidade:** logs não estruturados são incompatíveis com ferramentas modernas de monitoramento e ingestão de dados.
- **Segurança:** queries SQL completas expostas nos logs representam risco real de vazamento de dados sensíveis, em conflito com os requisitos de conformidade com a LGPD.

---

## Decisão

Adotar o **[Pino](https://getpino.io/)** como biblioteca de log estruturado no backend.

Todos os logs da aplicação passam a ser emitidos em **formato JSON**, com a seguinte configuração:

| Responsabilidade | Implementação |
|---|---|
| Formato de saída | JSON estruturado (Pino) |
| Dados sensíveis | Mascaramento via `redact` (campos de payload HTTP) |
| Rastreabilidade | Correlation ID injetado por middleware em cada requisição |
| Queries SQL (produção) | Desabilitadas — apenas erros e slow queries são registrados |
| Integração de monitoramento | Saída compatível com ferramentas externas via transporte Pino |

### Correlation ID

Cada requisição HTTP recebe um identificador único (`X-Correlation-Id`) injetado por middleware, permitindo rastrear o ciclo de vida completo de uma notificação de ponta a ponta nos logs.

### Integração com monitoramento

A estrutura JSON do Pino foi configurada para facilitar a ingestão por ferramentas externas de observabilidade (ex: Grafana Loki, Datadog, ELK Stack), sem necessidade de parsing adicional.

---

## Consequências

### ✅ Positivas

- Conformidade com LGPD: dados sensíveis de pacientes e notificantes não são expostos nos logs
- Rastreabilidade completa do ciclo de vida das notificações via Correlation ID
- Logs prontos para ingestão por ferramentas de monitoramento
- Base para criação de alertas automáticos e dashboards operacionais
- Alto desempenho: Pino é um dos loggers mais rápidos do ecossistema Node.js

### ⚠️ Negativas

- Nova dependência central no projeto
- O uso de `console.log` deve ser eliminado — o logger Pino deve ser injetado em todos os serviços e repositórios

---

## Alternativas Consideradas

### Winston

Descartado por ser mais verboso na configuração e apresentar desempenho inferior ao Pino em ambientes de alta carga. O Pino atende os mesmos requisitos com menor overhead.

---

> **Conclusão:** O Pino resolve os dois problemas críticos identificados — segurança dos dados e observabilidade — e posiciona o backend para integração futura com qualquer ferramenta de monitoramento sem necessidade de mudança estrutural nos logs.
