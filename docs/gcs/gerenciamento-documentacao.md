<h1 align="center">Gerenciamento de Documentação</h1>

<p align="center"><strong>Documento de Gerência de Configuração de Software — Versão 2.2</strong></p>

<p align="center">O histórico de alterações consolidado está na <a href="../">página inicial da seção de GCS</a>.</p>

## Sumário

- [1. Introdução](#introducao)
- [2. Padronização de nomenclatura](#nomenclatura)
- [3. Versionamento dos documentos](#versionamento)
- [4. Controle de versões](#controle-versoes)
- [5. Estrutura dos documentos](#estrutura)
- [6. Atualização e manutenção](#manutencao)

---

<a id="introducao"></a>

## 1. Introdução

Esta seção estabelece a organização, a padronização, o versionamento e a rastreabilidade dos artefatos documentais do projeto. A documentação é considerada parte integrante do produto de software e deve ser mantida atualizada ao longo de todo o ciclo de desenvolvimento.

---

<a id="nomenclatura"></a>

## 2. Padronização de nomenclatura

Todos os documentos devem seguir um padrão de nomenclatura que permita a fácil identificação de seu conteúdo, tipo e versão.

Formato padrão:

```
[TIPO]_[NOME]_[VERSAO].[EXTENSÃO]
```

Exemplos:

- `DOC_Requisitos_v1.0.docx`
- `DOC_Arquitetura_v1.1.pdf`
- `ATA_Reuniao_2026-03-24.docx`
- `PLAN_Testes_v2.0.xlsx`

Os prefixos permitidos são:

| Prefixo | Tipo de documento | Descrição |
| --- | --- | --- |
| **DOC** | Documento técnico | Documentos formais do projeto, como requisitos, arquitetura e GCS. |
| **ATA** | Ata de reunião | Registro de decisões, discussões e encaminhamentos de reuniões. |
| **PLAN** | Plano | Documentos de planejamento, como plano de testes ou plano de projeto. |
| **REL** | Relatório | Relatórios de progresso, métricas ou resultados. |
| **GUIA** | Guia | Documentos orientativos ou tutoriais internos. |
| **ESPEC** | Especificação | Especificações técnicas detalhadas (APIs, modelos e afins). |

Regras de utilização:

- utilizar apenas letras minúsculas ou padrão consistente definido pela equipe;
- separar palavras com *underscore* (`_`);
- não utilizar acentos ou caracteres especiais;
- utilizar nomes descritivos e objetivos;
- incluir a versão quando aplicável.

---

<a id="versionamento"></a>

## 3. Versionamento dos documentos

O versionamento dos documentos deve permitir o controle de alterações e a rastreabilidade da evolução dos artefatos. O modelo adotado é **MAJOR MINOR**.

| Incremento | Quando aplicar |
| --- | --- |
| **MAJOR** | Alterações estruturais ou mudanças significativas de conteúdo. |
| **MINOR** | Ajustes pontuais, correções ou pequenas melhorias. |

---

<a id="controle-versoes"></a>

## 4. Controle de versões

Todo documento deve conter uma seção de histórico de alterações, seguindo o modelo abaixo:

| Versão | Data | Justificativa | Responsável |
| --- | --- | --- | --- |
| 1.0 | 24/03/2026 | Decisões iniciais sobre o modelo de ramificação. | Luigi Gonçalves de Almeida |

Regras de utilização:

- toda alteração deve ser registrada;
- o histórico não deve ser removido;
- as descrições devem ser objetivas e rastreáveis.

---

<a id="estrutura"></a>

## 5. Estrutura dos documentos

Os documentos devem seguir uma estrutura mínima padronizada, garantindo consistência entre os artefatos:

- título;
- identificação (versão, data e responsáveis);
- sumário;
- introdução;
- histórico de versões;
- conteúdo principal;
- referências, quando necessário.

---

<a id="manutencao"></a>

## 6. Atualização e manutenção

A documentação deve ser mantida atualizada de forma contínua, refletindo o estado atual do sistema e suas alterações ao longo do desenvolvimento. Toda mudança relevante no software deve ser acompanhada da devida atualização nos artefatos documentais correspondentes, garantindo consistência e rastreabilidade com as issues e as entregas do projeto.

Adicionalmente, a documentação deve passar por revisões periódicas para evitar informações desatualizadas ou inconsistentes. Toda documentação criada ou alterada deve ser revisada por, no mínimo, **um membro** da equipe antes de ser considerada válida, assegurando a qualidade e a confiabilidade das informações.
