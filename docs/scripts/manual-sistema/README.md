# Prints do Manual do Sistema

O script `capturar.js` gera automaticamente todos os prints usados em `docs/manual-sistema/`, a partir do protótipo funcional, e salva em `docs/assets/manual-sistema/`. Quando a interface mudar, basta rodar de novo para atualizar todas as imagens.

## Como usar

1. Suba o protótipo funcional **na versão publicada** (branch `main`), para não registrar no manual funcionalidades que ainda estão em teste:

    ```bash
    cd notifica-saude-prototipo-funcional
    git checkout main && git pull
    npm install && npm run dev
    ```

2. Em outro terminal, na raiz deste repositório, instale o Playwright (só na primeira vez):

    ```bash
    npm install --no-save playwright
    npx playwright install chromium
    ```

3. Gere os prints:

    ```bash
    node scripts/manual-sistema/capturar.js
    ```

    Por padrão, o script acessa `http://localhost:5173/notifica-saude-prototipo-funcional/#` e grava em `docs/assets/manual-sistema`. Os dois podem ser trocados por argumentos:

    ```bash
    node scripts/manual-sistema/capturar.js <URL_BASE> <PASTA_SAIDA>
    ```

4. Para gerar só alguns prints, use a variável `ONLY` com o início do nome:

    ```bash
    ONLY=analise,plano node scripts/manual-sistema/capturar.js
    ```

## Como funciona

- Cada captura abre um navegador "limpo", então os dados de exemplo do protótipo são sempre os mesmos.
- Os prints são feitos em português (`pt-BR`), com resolução 2x, sem animações e sem o botão flutuante de acessibilidade.
- Os marcadores numerados em laranja são desenhados pelo próprio script, em cima dos elementos da tela, e correspondem aos passos descritos no manual.
- As telas da análise usam um rascunho completo (copiado do caso de exemplo #1004) para mostrar as seções preenchidas.
