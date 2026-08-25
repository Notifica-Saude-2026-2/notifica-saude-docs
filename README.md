<p align="center">
  <img src="docs/assets/logotipo-dark-ms.png" height="120px" alt="NotificaSaúde Logo" />
</p>

<h1 align="center">NotificaSaúde - Documentação</h1>

<p align="center">
  Site de documentação centralizada do sistema NotificaSaúde - visão do produto, requisitos, arquitetura, testes, gestão do projeto e implantação.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MkDocs-Material-526CFE?style=flat-square&logo=materialformkdocs&logoColor=white" alt="MkDocs Material" />
  <img src="https://img.shields.io/badge/Python-3.13-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
</p>

<p align="center">
  <a href="https://notifica-saude-2026-2.github.io/notifica-saude-docs/"><strong>🌐 Acessar o site publicado</strong></a>
</p>

<p align="center">
  <a href="#-descrição-do-projeto">Descrição</a> •
  <a href="#-conteúdo-do-site">Conteúdo</a> •
  <a href="#-requisitos">Requisitos</a> •
  <a href="#-como-rodar-localmente">Como rodar</a> •
  <a href="#-como-publicar">Como publicar</a> •
  <a href="#-estrutura-de-diretórios">Estrutura</a> •
  <a href="#-contribuindo">Contribuindo</a> •
  <a href="#-autores">Autores</a>
</p>

---

## Descrição do projeto

O **NotificaSaúde** é um sistema voltado ao registro, análise e monitoramento de incidentes relacionados à segurança do paciente em serviços de saúde. Este repositório reúne, em um único site navegável, toda a documentação produzida ao longo do projeto construída com **MkDocs** e o tema **Material for MkDocs**.

---

## Conteúdo do site

A navegação é organizada em 6 blocos temáticos, para orientar quem está chegando agora no projeto:

| Bloco | O que traz |
| --- | --- |
| **Visão Geral** | Introdução ao produto e manual do sistema |
| **Descoberta do Produto** | Entrevistas, formulários e mapeamento de processos (BPMN) |
| **Requisitos e Arquitetura** | Especificação de requisitos, RBAC, C4, ADRs, modelagem |
| **Qualidade e Testes** | Plano de testes, casos de teste, relatórios, SonarCloud, usabilidade |
| **Gestão do Projeto** | GCS, sprints, riscos, atas de reunião, uso de IA generativa |
| **Implantação e Entregas** | Guia de implantação e apresentações institucionais |

---

##  Requisitos

| Ferramenta | Versão mínima | Observação |
| --- | --- | --- |
| [Python](https://www.python.org/) | 3.13 | Necessário para rodar o MkDocs |
| [pip](https://pip.pypa.io/) | — | Incluso com o Python |

---

## Como rodar localmente

```bash
git clone https://github.com/Notifica-Saude-2026-2/notifica-saude-documentation.git
cd notifica-saude-documentation

python -m venv .venv
.venv\Scripts\Activate.ps1        # Windows (PowerShell)
# source .venv/bin/activate       # Linux/macOS

pip install -r requirements.txt

mkdocs serve
```

O site fica disponível em `http://127.0.0.1:8000`, com recarregamento automático a cada alteração em `docs/` ou `mkdocs.yml`.

---

## Como publicar

O site publicado (branch `gh-pages`) **não atualiza sozinho** quando algo é mesclado na `main`  - é preciso publicar manualmente após cada atualização de conteúdo:

```bash
git checkout main
git pull origin main
mkdocs gh-deploy
```

Isso builda o site e envia o resultado para a branch `gh-pages`, que o GitHub Pages serve automaticamente em poucos segundos.

---

## Estrutura de diretórios

```
notifica-saude-documentation/
├── docs/                    # Conteúdo do site (fonte, em Markdown)
│   ├── assets/              # Logos e imagens
│   ├── stylesheets/         # extra.css — personalização visual do tema
│   └── .../                 # Uma pasta por seção temática
├── overrides/                # Customizações de templates do Material
│   └── partials/copyright.html
├── mkdocs.yml                # Configuração do site (tema, navegação, plugins)
├── requirements.txt           # Dependências Python (mkdocs, mkdocs-material)
└── .gitignore
```

---

## Contribuindo

Este projeto segue o modelo **GitHub Flow** e o padrão de commits definido na GCS (`docs: <assunto>`, minúsculo, verbo no presente):

1. Abra uma issue descrevendo a alteração
2. Crie uma branch a partir da `main`: `docs/<número-da-issue>/<descrição-com-hífens>`
3. Implemente e commite: `docs: adiciona/atualiza <o quê>`
4. Abra um Pull Request (título igual ao commit principal)
5. Aguarde aprovação de ao menos 1 membro da equipe
6. Squash Merge na `main` — depois, publique com `mkdocs gh-deploy`

---

## Autores

Este sistema foi desenvolvido como parte das disciplinas de **Prática em Desenvolvimento de Software** do [Núcleo de Práticas em Engenharia de Software — UFMS](https://nes.facom.ufms.br/). As equipes responsáveis: 2026.1 e 2026.2. A centralização da documentação é responsabilidade da equipe 2026.2

### Equipe 2026.2

**Professora Orientadora:** Marcelo Turine
**Técnico Responsável:** Lucas Henrique Alves Borth

**Proponentes:** Ercilene Ribeiro, Aline Moraes, Viviane Euzebia

| Nome              | E-mail                   |
| ----------------- | ------------------------ |
| Brenno            | brenno.ostemberg@ufms.br |
| Catarina          | catarina.ludmila@ufms.br |
| Eduardo           | eduardo.h.alves@ufms.br  |
| Gustavo           | gustavo.florentin@ufms.br|
| Kauan             | kauan.cardoso@ufms.br    |
| Sophya Ribeiro    | sophya.ribeiro@ufms.br   |


### Equipe 2026.1

**Professora Orientadora:** Maria Istela Cagnin
**Técnico Responsável:** Lucas Henrique Alves Borth

**Proponentes:** Ercilene Ribeiro, Aline Moraes, Viviane Euzebia

| Nome              | E-mail                   |
| ----------------- | ------------------------ |
| Aline Hirokawa    | aline.hirokawa@ufms.br   |
| Fabio Ramos       | fabio.ramos@ufms.br      |
| Lucas G. Cordeiro | lucas.g.cordeiro@ufms.br |
| Luigi Almeida     | luigi.almeida@ufms.br    |
| Pedro Soledade    | pedro.soledade@ufms.br   |
| Sophya Ribeiro    | sophya.ribeiro@ufms.br   |
