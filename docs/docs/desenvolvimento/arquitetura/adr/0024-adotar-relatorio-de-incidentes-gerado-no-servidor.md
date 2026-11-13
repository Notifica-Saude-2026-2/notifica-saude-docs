<h1 align="center">ADR-0024 — Adotar geração do relatório de incidentes em XLSX no servidor</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura, a partir da ADR-0005 do repositório do backend. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 04/11/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0013](0013-adotar-logger-estruturado-backend.md) e [ADR-0020](0020-adotar-fila-bullmq-para-envio-de-emails.md).

## Contexto

O Épico 7 (US-7.1 e US-7.2) permite ao NSP e ao Gestor de Área exportar os incidentes em XLSX. O protótipo funcional validado com as proponentes montava a planilha no navegador, com ExcelJS, a partir dos dados locais.

A RNF 6.3.5 exige que o escopo do relatório seja garantido no servidor e que o arquivo nunca carregue a identificação do notificante (RN-29) nem o prontuário (RN-31), "nem em colunas ou abas ocultas, nem nos metadados do arquivo". A US-7.1 CA10 proíbe a exportação pelo Administrador.

## Decisão

O relatório é montado inteiro no backend, com ExcelJS, e devolvido pronto como binário. O frontend só baixa o arquivo.

- **Escopo:** vem de uma função única de Escopo de Acesso, a mesma usada pela listagem, sem os filtros da tela (RN-30). Para o NSP, é a instituição inteira; para o Gestor de Área, só os incidentes encaminhados ao seu setor (RN-26). A rota aceita só `NSP` e `GESTOR_AREA`, e o Administrador é recusado no servidor.
- **Geração síncrona:** o workbook é montado em memória e enviado numa única resposta, com o total de incidentes num cabeçalho, usado no aviso "Relatório gerado com N incidentes.".
- **Fuso:** os timestamps são convertidos para o fuso fixo de configuração (`TZ`, hoje `America/Campo_Grande`). A data do incidente e o horário (`HH:mm`) saem como estão.
- **Rótulos e cores:** o módulo de relatório tem os próprios mapas de rótulos e de cores (hex), copiados do frontend, com um teste que fixa os valores.
- **Metadados:** as propriedades do workbook identificam só o NotificaSaúde. Quem gerou o relatório aparece apenas na aba Resumo.
- **Registro:** cada exportação gera um log estruturado ([ADR-0013](0013-adotar-logger-estruturado-backend.md)) com usuário, perfil, tenant, escopo e total de incidentes.

## Consequências

### Positivas

- O sigilo depende de um único lugar: o servidor controla colunas, abas e propriedades do arquivo.
- O teste de integração consegue abrir o XLSX e afirmar a ausência dos dados sigilosos.
- A listagem e o relatório nunca divergem no escopo, porque usam a mesma função.

### Negativas

- Os rótulos e as cores existem em dois repositórios. Mudar o nome de um status ou a cor de um badge exige mudar também o módulo de relatório.
- Se as instituições ficarem em fusos diferentes, será preciso um fuso por instituição.
- Se o volume crescer para dezenas de milhares de linhas, a geração em memória terá de ser revista, provavelmente com uma fila ([ADR-0020](0020-adotar-fila-bullmq-para-envio-de-emails.md)).

## Alternativas consideradas

- **Servidor entrega os dados já filtrados e o frontend monta o arquivo**, aproveitando o código do protótipo: rejeitada, porque o sigilo passaria a depender de dois lugares.
- **Servidor gera o arquivo com o fuso do navegador como parâmetro:** o mesmo relatório da instituição mudaria conforme a máquina de quem exporta.
- **Fila BullMQ ou streaming:** a fila traria job, polling e armazenamento temporário sem volume que justifique. Com streaming, não daria para responder com erro depois de o envio começar.

## Links

- [ADR-0005 do backend — Relatório de incidentes gerado no servidor](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/blob/develop/docs/adr/0005-relatorio-de-incidentes-gerado-no-servidor.md)
- [PR #18 (backend) — Relatório de incidentes em XLSX](https://github.com/Notifica-Saude-2026-2/notifica-saude-backend/pull/18)
- [PR #26 (frontend) — Botão "Extrair dados"](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/26)
