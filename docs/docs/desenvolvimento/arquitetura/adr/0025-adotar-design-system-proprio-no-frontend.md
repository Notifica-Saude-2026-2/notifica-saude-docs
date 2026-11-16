<h1 align="center">ADR-0025 — Adotar design system próprio no frontend, com tokens e sem MUI</h1>

<p align="center"><strong>Mantenedores:</strong> Gustavo Henrique, Kauan Cardoso, Sophya Ribeiro, Brenno, Catarina, Eduardo</p>

??? note "Histórico de Alterações"

    | Versão | Data | Justificativa | Responsável |
    | --- | --- | --- | --- |
    | 1.0 | 12/11/2026 | Registro da decisão de arquitetura. | Brenno |

<p class="ns-adr-meta"><span class="ns-tag ns-tag--requisitos">Aceita</span> <span>Data da decisão: 30/09/2026</span> <a href="../">Voltar para a lista de ADRs</a></p>

## Status

Aceita

Relacionada a [ADR-0005](0005-usar-react-typescript-no-frontend.md).

## Contexto

A issue #72 (Épico 4) pediu componentes reutilizáveis que seguissem o padrão visual validado no protótipo funcional: toasts, caixas de informação, contadores de caracteres, destaque de erros, campos bloqueados, blocos recolhíveis e espaçamento padronizado (requisitos 6.6 e 6.7 da especificação).

O frontend tinha mais de 300 valores hexadecimais espalhados nos CSS Modules, quatro tons de azul diferentes para a mesma função e partes da interface (menu lateral, filtros e layout do admin) feitas com MUI (`@mui/material` e `@emotion`), que o restante do sistema não usava.

## Decisão

O frontend adota um design system próprio em `components/common/ui`:

- **Tokens de design em `src/index.css`** (cor, texto, borda, espaço, raio, sombra e camadas), com a regra de **nenhum hexadecimal novo em CSS Module**. Um valor que precise ser diferente vira token novo, comentado.
- **Componentes reutilizáveis** para feedback (`Toast`, `InfoBox`, `ConfirmDialog`), formulário (`CharCounter`, `FieldError`, `FieldRow`), apresentação (`Badge`, `EmptyValue`, `ReadOnlyField`, `Collapsible`) e navegação (`IconButton`, `DropdownMenu`, `BackButton`, `InfoTooltip` em HTML/CSS próprio).
- **Remoção do MUI**: os componentes que o usavam foram reescritos com HTML/CSS e com o design system, e as dependências foram desinstaladas.
- **Ícones padronizados em Feather** (`react-icons/fi`).
- **Contraste verificável por script** (`docs/contraste/contrast.mjs`). Quando o valor do protótipo fica abaixo do WCAG AA, ele é mantido como exceção documentada, com o valor AA ao lado, para poder ser desfeita item a item.
- O catálogo de componentes e as regras de uso ficam no `CLAUDE.md` do frontend.

## Consequências

### Positivas

- Uma mudança visual passa a ser feita no token ou no componente, e não em dezenas de arquivos.
- O bundle JavaScript caiu de 620 kB para 384 kB (de 190 kB para 116 kB com gzip) com a remoção do MUI.
- Os componentes da análise (issues #73 a #76) e dos épicos seguintes reaproveitam o catálogo.

### Negativas

- O time mantém componentes próprios que uma biblioteca daria prontos, como tooltip e menu suspenso.
- As exceções de contraste mantidas por fidelidade ao protótipo precisam ser acompanhadas no README do script.

## Alternativas consideradas

- **Manter o MUI e estilizá-lo:** rejeitada. Seriam duas formas de construir interface no mesmo projeto, e o visual do protótipo exigiria sobrescrever o tema do MUI em vários pontos.
- **Adotar outra biblioteca de componentes:** rejeitada pelo mesmo motivo, e porque o protótipo já define o visual a seguir.

## Links

- [PR #9 (frontend) — Design system e ajustes visuais da issue #72](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/9)
- [PR #12 (frontend) — Componentes do design system fiéis ao protótipo](https://github.com/Notifica-Saude-2026-2/notifica-saude-frontend/pull/12)
