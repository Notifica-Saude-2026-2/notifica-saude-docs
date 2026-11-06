<h1 align="center">ADR-0012 — Adotar Swagger para documentação da API</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 17/03/2026 | Registro da decisão de arquitetura. | Fabio Ramos |
    | 1.1 | 18/10/2026 | Migração do registro do repositório de documentação descontinuado para o MkDocs. | Sophya Ribeiro |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 17/03/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

## Contexto

Com o backend (`notifica-saude-backend`) expondo uma API REST consumida pelo frontend (`notifica-saude-frontend`), tornou-se necessário definir como essa API seria documentada.

Durante o desenvolvimento, a ausência de documentação formal gerava dependência direta de comunicação entre os times — o frontend precisava consultar o backend para entender quais endpoints existiam, quais parâmetros eram esperados e quais respostas eram retornadas.

Duas alternativas foram consideradas:

**Opção A — Postman (coleções compartilhadas)**
Documentar os endpoints via coleções do Postman exportadas e versionadas no repositório. Simples de criar, mas apresenta problemas de consistência: a coleção é um artefato separado do código e tende a ficar desatualizada à medida que a API evolui. Não garante que o que está documentado reflete o que está implementado.

**Opção B — Swagger (OpenAPI)**
Gerar a documentação da API diretamente a partir do código do backend, usando a especificação OpenAPI. A documentação é gerada automaticamente e fica sempre sincronizada com a implementação. Expõe uma interface interativa (`/docs`) que permite ao time de frontend explorar e testar os endpoints sem depender do Postman ou de comunicação manual.

## Decisão

Adotar **Swagger (OpenAPI 3.0)** para documentação da API REST do `notifica-saude-backend`, utilizando a biblioteca [`swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) em conjunto com [`swagger-jsdoc`](https://www.npmjs.com/package/swagger-jsdoc).

A documentação será gerada a partir de anotações JSDoc nas rotas e exposta em `http://localhost:3333/docs` em ambiente de desenvolvimento.

## Consequências

### Positivas

- Documentação sempre sincronizada com o código — anotações vivem junto às rotas, não em artefato separado
- Interface interativa em `/docs` permite ao time de frontend explorar e testar endpoints sem configuração adicional
- Reduz dependência de comunicação direta entre os times durante o desenvolvimento
- Facilita onboarding de novos membros — a API se documenta ao ser acessada
- Padrão amplamente adotado no mercado, com boa integração ao ecossistema Express + TypeScript

### Negativas

- Exige disciplina para manter as anotações JSDoc atualizadas a cada alteração de endpoint
- Adiciona pequena sobrecarga inicial de configuração e escrita das anotações

### Mitigações

- A revisão de Pull Requests deve verificar se endpoints novos ou alterados possuem anotações Swagger correspondentes — incluir no checklist do PR definido no GCS
- A rota `/docs` deve ser desabilitada ou protegida em ambiente de produção

## Alternativas Consideradas

### Postman

Descartado por gerar documentação desacoplada do código, com alto risco de desatualização à medida que a API evolui. A consistência dependeria de disciplina manual da equipe, sem nenhuma garantia estrutural.
