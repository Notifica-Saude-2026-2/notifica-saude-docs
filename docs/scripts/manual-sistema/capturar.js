/*
  Gera os prints do Manual do Sistema a partir do protótipo funcional.

  Uso:
    1. Suba o protótipo (versão publicada / branch main):  npm run dev
    2. npm i -D playwright   (ou use um Playwright já instalado)
    3. node scripts/manual-sistema/capturar.js [URL_BASE] [PASTA_SAIDA]

  URL_BASE padrão:   http://localhost:5173/notifica-saude-prototipo-funcional/#
  PASTA_SAIDA padrão: docs/assets/manual-sistema

  Cada captura roda em um navegador "limpo", então os dados de exemplo do protótipo são
  sempre os mesmos e os prints saem iguais a cada execução.
*/
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.argv[2] || "http://localhost:5173/notifica-saude-prototipo-funcional/#";
const OUT = process.argv[3] || path.join("docs", "assets", "manual-sistema");
const ONLY = process.env.ONLY ? process.env.ONLY.split(",") : null;
const FONTES_LOCAIS = process.env.FONTES_LOCAIS; // pasta com @fontsource (só se o Google Fonts estiver bloqueado)

const T = (id) => `[data-testid="${id}"]`;
const ABERTOS = [];
const DESKTOP = { width: 1440, height: 2400 };
const MOBILE = { width: 390, height: 1800 };

// ---------------------------------------------------------------- utilitários
async function abrir({ mobile = false, login = true, altura } = {}) {
  const browser = await chromium.launch({ args: ["--lang=pt-BR"] });
  ABERTOS.push(browser);
  const vp = mobile ? { ...MOBILE } : { ...DESKTOP };
  if (altura) vp.height = altura;
  const ctx = await browser.newContext({
    viewport: vp,
    deviceScaleFactor: 2,
    locale: "pt-BR",
    timezoneId: "America/Campo_Grande",
    ...(mobile ? { isMobile: true, hasTouch: true } : {}),
  });
  if (FONTES_LOCAIS) {
    const css = fs.readFileSync(path.join(FONTES_LOCAIS, "fonts.css"), "utf8");
    await ctx.route(/fonts\.googleapis\.com/, (r) => r.fulfill({ contentType: "text/css", body: css }));
    await ctx.route(/fonts\.gstatic\.com/, (r) => r.fulfill({ status: 404, body: "" }));
    await ctx.route(/fonts\.local/, (r) => {
      const [d, f] = new URL(r.request().url()).pathname.slice(1).split("/");
      r.fulfill({ contentType: "font/woff2", body: fs.readFileSync(path.join(FONTES_LOCAIS, "node_modules/@fontsource", d, "files", f)) });
    });
  }
  const p = await ctx.newPage();
  p.setDefaultTimeout(10000);
  // Sem animações e sem o botão flutuante de acessibilidade por cima dos prints.
  await p.addInitScript(() => {
    const css = `*,*::before,*::after{transition:none!important;animation:none!important;caret-color:transparent!important}`;
    document.addEventListener("DOMContentLoaded", () => {
      const s = document.createElement("style");
      s.textContent = css;
      document.head.appendChild(s);
    });
  });
  if (login) {
    await p.goto(BASE + "/login");
    await p.fill(T("login-email"), "nsp@hospitala.com.br");
    await p.fill(T("login-senha"), "Senha@123");
    await p.click(T("login-submit"));
    await p.waitForURL(/admin/);
  }
  return { browser, p };
}

async function esperar(p, ms = 700) {
  await p.waitForTimeout(ms);
}

async function semBotaoAcessibilidade(p, esconder = true) {
  await p.evaluate((e) => {
    document.querySelectorAll('[aria-label="Abrir opções de acessibilidade"]').forEach((b) => {
      b.style.visibility = e ? "hidden" : "";
    });
  }, esconder);
}

// Desenha marcadores numerados (e um contorno) sobre os elementos indicados.
async function marcar(p, itens) {
  const boxes = [];
  for (const it of itens) {
    const loc = typeof it.alvo === "string" ? p.locator(it.alvo).first() : it.alvo;
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    const bb = await loc.boundingBox();
    if (!bb) {
      console.warn("   ! marcador sem alvo:", it.n);
      continue;
    }
    boxes.push({ ...bb, n: it.n, lado: it.lado || "esq", contorno: it.contorno !== false });
  }
  await p.evaluate((boxes) => {
    const host = document.createElement("div");
    host.id = "__marcadores";
    host.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;z-index:2147483647;pointer-events:none";
    for (const b of boxes) {
      const x = b.x + window.scrollX, y = b.y + window.scrollY;
      if (b.contorno) {
        const r = document.createElement("div");
        r.style.cssText = `position:absolute;left:${x - 4}px;top:${y - 4}px;width:${b.width + 8}px;height:${b.height + 8}px;border:2.5px solid #f97316;border-radius:8px;box-shadow:0 0 0 3px rgba(249,115,22,.18)`;
        host.appendChild(r);
      }
      const c = document.createElement("div");
      const cx = b.lado === "dir" ? x + b.width + 4 - 13 : x - 4 - 13;
      c.textContent = b.n;
      c.style.cssText = `position:absolute;left:${cx}px;top:${y - 4 - 13}px;width:26px;height:26px;border-radius:50%;background:#f97316;color:#fff;font:700 14px/26px Inter,Arial,sans-serif;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,.3);border:2px solid #fff`;
      host.appendChild(c);
    }
    document.body.appendChild(host);
  }, boxes);
}

async function limparMarcas(p) {
  await p.evaluate(() => document.getElementById("__marcadores")?.remove());
}

// Tira o print recortado em volta de um (ou mais) elementos, com uma folga.
async function print(p, nome, { alvo, folga = 16, viewport = false, marcas = [] } = {}) {
  await semBotaoAcessibilidade(p, true);
  await p.evaluate(() => document.activeElement && document.activeElement.blur && document.activeElement.blur());
  await esperar(p, 300);
  if (marcas.length) await marcar(p, marcas);
  const arquivo = path.join(OUT, nome + ".png");
  fs.mkdirSync(path.dirname(arquivo), { recursive: true });
  if (viewport || !alvo) {
    await p.screenshot({ path: arquivo });
  } else {
    const alvos = Array.isArray(alvo) ? alvo : [alvo];
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    for (const a of alvos) {
      const loc = typeof a === "string" ? p.locator(a).first() : a;
      const bb = await loc.boundingBox();
      if (!bb) throw new Error("alvo sem caixa: " + a);
      x1 = Math.min(x1, bb.x); y1 = Math.min(y1, bb.y);
      x2 = Math.max(x2, bb.x + bb.width); y2 = Math.max(y2, bb.y + bb.height);
    }
    const vp = p.viewportSize();
    const extra = marcas.length ? 18 : 0;
    const clip = {
      x: Math.max(0, x1 - folga - extra),
      y: Math.max(0, y1 - folga - extra),
    };
    clip.width = Math.min(vp.width, x2 + folga) - clip.x;
    clip.height = Math.min(vp.height, y2 + folga) - clip.y;
    await p.screenshot({ path: arquivo, clip });
  }
  await limparMarcas(p);
  console.log("  ✓", nome);
}

// Primeiro "cartão" (elemento com fundo próprio e menor que a tela) que contém o alvo.
async function caixa(p, alvo) {
  const loc = typeof alvo === "string" ? p.locator(alvo).first() : alvo;
  const id = "cx" + Math.random().toString(36).slice(2, 8);
  await loc.evaluate((el, id) => {
    let e = el;
    while (e && e !== document.body) {
      const cs = getComputedStyle(e);
      const r = e.getBoundingClientRect();
      const temFundo = cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent";
      if (temFundo && r.width < window.innerWidth * 0.9 && r.height > 60) {
        e.setAttribute("data-caixa", id);
        return;
      }
      e = e.parentElement;
    }
    el.setAttribute("data-caixa", id);
  }, id);
  return p.locator(`[data-caixa="${id}"]`);
}

// Bloco de uma seção do detalhe (cabeçalho azul + conteúdo), a partir do botão de recolher.
async function secao(p, toggleId) {
  const id = "sc" + Math.random().toString(36).slice(2, 8);
  await p.locator(T(toggleId)).first().evaluate((el, id) => {
    const h = el.getBoundingClientRect().height;
    let e = el.parentElement;
    while (e && e.getBoundingClientRect().height < h + 30) e = e.parentElement;
    e.setAttribute("data-secao", id);
  }, id);
  return p.locator(`[data-secao="${id}"]`);
}

// Painel visível de um modal: o maior elemento com fundo próprio dentro do [role=dialog].
async function dialogo(p) {
  const id = "dg" + Math.random().toString(36).slice(2, 8);
  await p.locator("[role=dialog]").last().evaluate((d, id) => {
    let melhor = null, area = 0;
    for (const e of [d, ...d.querySelectorAll("*")]) {
      const cs = getComputedStyle(e);
      const r = e.getBoundingClientRect();
      const fundo = cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent";
      if (fundo && r.width < window.innerWidth * 0.9 && r.width * r.height > area) {
        melhor = e;
        area = r.width * r.height;
      }
    }
    (melhor || d).setAttribute("data-dialogo", id);
  }, id);
  return p.locator(`[data-dialogo="${id}"]`);
}

// Área útil das telas de análise (do "Voltar" até os botões de navegação).
async function areaAnalise(p) {
  const topo = p.getByText("Voltar para a notificação").first();
  const nav = p.getByRole("button", { name: /^(Próximo|Finalizar análise|Começar a análise)/ }).last();
  return [topo, nav, await caixa(p, nav)];
}

// Deixa os modais do tamanho do conteúdo (sem rolagem interna) para caberem inteiros no print.
async function modalInteiro(p) {
  await p.addStyleTag({
    content: `[role=dialog] *{max-height:none!important;overflow:visible!important}
              [role=dialog]{position:absolute!important;align-items:flex-start!important;overflow:visible!important;height:auto!important;min-height:100%!important}`,
  });
  await esperar(p, 300);
}

// Coloca uma análise em andamento (rascunho completo, copiado do caso #1004) no incidente indicado.
async function rascunhoDeAnalise(p, alvoN = 2, origemN = 4) {
  await p.evaluate(([t, s]) => {
    const K = "notifica_saude_prototipo_notificacoes";
    const items = JSON.parse(localStorage.getItem(K));
    const src = items.find((i) => i.id === "notificacao-" + s);
    const tg = items.find((i) => i.id === "notificacao-" + t);
    tg.analise = {
      ...JSON.parse(JSON.stringify(src.analise)),
      id: "analise-demo",
      notificacao_id: tg.id,
      concluida: false,
      data_conclusao: null,
      recomendacoes: [],
    };
    tg.status = "EM_ANALISE";
    tg.analise_via_encaminhamento = false;
    localStorage.setItem(K, JSON.stringify(items));
  }, [alvoN, origemN]);
}

async function abrirAnalise(p, secao) {
  await p.goto(BASE + "/admin");
  await esperar(p);
  await rascunhoDeAnalise(p);
  await p.goto(BASE + "/incident/notificacao-2");
  await esperar(p);
  await p.click(T("btn-continuar-analise"));
  await esperar(p);
  if (secao > 0) {
    await p.click(T("analise-guia-comecar"));
    await esperar(p);
    for (let i = 1; i < secao; i++) {
      await p.getByRole("button", { name: "Próximo" }).click();
      await esperar(p, 900);
    }
  }
}

const card = (p) => p.locator("main form, main [class*=card], main section").first();

// ---------------------------------------------------------------- capturas
const capturas = {
  // ===== Primeiros passos
  async "primeiros-passos/inicio"() {
    const { browser, p } = await abrir({ login: false, altura: 900 });
    await p.goto(BASE + "/");
    await esperar(p);
    await print(p, "primeiros-passos/inicio", {
      alvo: [p.getByText("Sobre").first(), T("home-btn-notificacao"), T("home-btn-login")],
      folga: 40,
      marcas: [
        { alvo: T("home-btn-notificacao"), n: 1 },
        { alvo: T("home-btn-login"), n: 2 },
      ],
    });
    await browser.close();
  },

  async "primeiros-passos/login"() {
    const { browser, p } = await abrir({ login: false, altura: 900 });
    await p.goto(BASE + "/login");
    await esperar(p);
    await p.fill(T("login-email"), "nsp@hospitala.com.br");
    await p.fill(T("login-senha"), "Senha@123");
    const caixa = p.locator(T("login-email")).locator("xpath=ancestor::*[.//button[@data-testid='login-submit']][1]/..");
    await print(p, "primeiros-passos/login", {
      alvo: caixa,
      folga: 24,
      marcas: [
        { alvo: T("login-email"), n: 1 },
        { alvo: T("login-senha"), n: 2 },
        { alvo: p.getByText("Esqueceu a senha?"), n: 3, lado: "dir" },
        { alvo: T("login-submit"), n: 4 },
      ],
    });
    await browser.close();
  },

  async "primeiros-passos/esqueceu-senha"() {
    const { browser, p } = await abrir({ login: false, altura: 900 });
    await p.goto(BASE + "/esqueceu-senha");
    await esperar(p);
    await p.fill(T("forgot-password-email-input"), "nsp@hospitala.com.br");
    const caixa = p.locator(T("forgot-password-email-input")).locator("xpath=ancestor::*[.//button[@data-testid='forgot-password-submit-button']][1]/..");
    await print(p, "primeiros-passos/esqueceu-senha", {
      alvo: caixa,
      folga: 24,
      marcas: [
        { alvo: T("forgot-password-email-input"), n: 1 },
        { alvo: T("forgot-password-submit-button"), n: 2 },
      ],
    });
    await browser.close();
  },

  async "primeiros-passos/painel"() {
    const { browser, p } = await abrir({ altura: 900 });
    await p.goto(BASE + "/admin");
    await esperar(p);
    const filtros = p.getByText("FILTRAR POR:").locator("xpath=..");
    await print(p, "primeiros-passos/painel", {
      viewport: true,
      marcas: [
        { alvo: T("admin-drawer"), n: 1, contorno: false, lado: "dir" },
        { alvo: T("admin-search"), n: 2 },
        { alvo: filtros, n: 3 },
        { alvo: p.locator('[data-testid^="incident-card-"]').first(), n: 4 },
        { alvo: T("pagination-next"), n: 5 },
      ],
    });
    await browser.close();
  },

  async "primeiros-passos/cartao-incidente"() {
    const { browser, p } = await abrir({ altura: 1200 });
    await p.goto(BASE + "/admin");
    await esperar(p);
    const c = p.locator('[data-testid^="incident-card-"]').filter({ hasText: "#1002" }).first();
    await print(p, "primeiros-passos/cartao-incidente", {
      alvo: c,
      folga: 12,
      marcas: [
        { alvo: c.getByText("#1002"), n: 1 },
        { alvo: c.getByText("Classificado").first(), n: 2 },
        { alvo: c.getByText("Enfermaria").first(), n: 3 },
        { alvo: c.getByText(/Responsável/).first(), n: 4, lado: "dir" },
        { alvo: c.getByText(/Vencido|Vence|dias/).first(), n: 5, lado: "dir" },
      ],
    });
    await browser.close();
  },

  async "primeiros-passos/menu-filas"() {
    const { browser, p } = await abrir({ altura: 900 });
    await p.goto(BASE + "/admin");
    await esperar(p);
    await print(p, "primeiros-passos/menu-filas", { alvo: T("admin-drawer"), folga: 0 });
    await browser.close();
  },

  async "primeiros-passos/acessibilidade"() {
    const { browser, p } = await abrir({ altura: 900 });
    await p.goto(BASE + "/admin");
    await esperar(p);
    await p.getByRole("button", { name: "Abrir opções de acessibilidade" }).click();
    await esperar(p);
    const painel = p.getByRole("button", { name: /Alto contraste/ }).locator("xpath=ancestor::*[.//button[contains(.,'Restaurar')]][1]");
    await semBotaoAcessibilidade(p, false);
    const arquivo = "primeiros-passos/acessibilidade";
    await print(p, arquivo, { alvo: painel, folga: 2 });
    await browser.close();
  },

  async "primeiros-passos/celular-menu"() {
    const { browser, p } = await abrir({ mobile: true, altura: 800 });
    await p.goto(BASE + "/admin");
    await esperar(p);
    await print(p, "primeiros-passos/celular-painel", { viewport: true });
    const t = p.getByRole("button", { name: "Abrir menu de navegação" });
    if (await t.count()) {
      await t.first().click();
      await esperar(p);
      await print(p, "primeiros-passos/celular-menu", { viewport: true });
    }
    await browser.close();
  },

  // ===== Registrar notificação (celular e computador)
  async "notificacao/passos"() {
    for (const modo of ["celular", "computador"]) {
      const mobile = modo === "celular";
      const { browser, p } = await abrir({ mobile, login: false, altura: mobile ? 1800 : 1300 });
      await p.goto(BASE + "/notificacao");
      await esperar(p);
      const preencher = async () => {
        const nomes = await p.$$eval("input[type=radio]", (r) => [...new Set(r.filter((e) => e.offsetParent).map((e) => e.name))]);
        for (const nm of nomes) {
          const pref = await p.$(`input[type=radio][name="${nm}"][data-testid*="centro-cirurgico"], input[type=radio][name="${nm}"][data-testid*="hospital-regional"], input[type=radio][name="${nm}"][data-testid*="paciente-sim"], input[type=radio][name="${nm}"][data-testid*="sexo-f"]`);
          const el = pref || (await p.$(`input[type=radio][name="${nm}"]`));
          await el.check({ force: true }).catch(() => el.click({ force: true }));
        }
        for (const sel of await p.$$("select")) {
          const opts = await sel.$$eval("option", (o) => o.map((x) => ({ v: x.value, t: x.textContent })).filter((x) => x.v));
          const pref = opts.find((o) => /18|Manhã|Medicamento|Outro profissional|Profissional/i.test(o.t)) || opts[0];
          if (pref) await sel.selectOption(pref.v);
        }
        for (const i of await p.$$("input[type=date]")) await i.fill("2026-10-20");
        for (const i of await p.$$("input[type=time]")) await i.fill("07:20");
        for (const t of await p.$$("textarea"))
          await t.fill("Paciente recebeu a medicação pré-anestésica de outra paciente porque as pulseiras de identificação estavam trocadas. A troca foi percebida na checagem antes da anestesia.");
      };
      const titulos = ["1-informacoes-iniciais", "2-paciente", "3-momento-e-local", "4-descricao", "5-notificante"];
      for (let i = 0; i < titulos.length; i++) {
        await preencher();
        await esperar(p, 400);
        const alvo = await caixa(p, p.locator('[data-testid^="stepform-btn"]').last());
        await print(p, `notificacao/${modo}-${titulos[i]}`, { alvo: [p.getByText("REGISTRO DE INCIDENTE").first(), alvo], folga: mobile ? 14 : 24 });
        const nx = p.getByRole("button", { name: /^(Próximo|Enviar notificação)$/ });
        await nx.click();
        await esperar(p, 900);
      }
      await p.getByText("Notificação enviada com sucesso!").first().waitFor();
      await print(p, `notificacao/${modo}-6-enviada`, { alvo: await caixa(p, p.getByText("Notificação enviada com sucesso!").first()), folga: mobile ? 8 : 24 });
      await browser.close();
    }
  },

  async "notificacao/campo-obrigatorio"() {
    const { browser, p } = await abrir({ login: false, altura: 900 });
    await p.goto(BASE + "/notificacao");
    await esperar(p);
    await print(p, "notificacao/botao-desabilitado", {
      alvo: await caixa(p, T("stepform-btn-next")),
      marcas: [{ alvo: '[data-testid="stepform-btn-next"]', n: 1, lado: "dir" }],
    });
    await browser.close();
  },

  // ===== Detalhe da notificação, classificação e encaminhamento
  async "classificacao/detalhe-novo"() {
    const { browser, p } = await abrir({ altura: 1700 });
    await p.goto(BASE + "/incident/notificacao-1");
    await esperar(p);
    await print(p, "classificacao/detalhe-novo", {
      alvo: [p.getByText("Voltar").first(), await secao(p, "section-historico-toggle")],
      folga: 16,
      marcas: [
        { alvo: p.getByText("#1001").first(), n: 1 },
        { alvo: T("status-context-menu"), n: 2, lado: "dir" },
        { alvo: T("section-info-gerais-toggle"), n: 3, contorno: false },
        { alvo: T("section-classificacao-toggle"), n: 4, contorno: false },
        { alvo: T("section-analise-toggle"), n: 5, contorno: false },
        { alvo: T("section-plano-acao-toggle"), n: 6, contorno: false },
        { alvo: T("section-historico-toggle"), n: 7, contorno: false },
      ],
    });
    await browser.close();
  },

  async "classificacao/editar-informacoes"() {
    const { browser, p } = await abrir({ altura: 1800 });
    await p.goto(BASE + "/incident/notificacao-1");
    await esperar(p);
    await print(p, "classificacao/botao-editar", {
      alvo: await secao(p, "section-info-gerais-toggle"),
      folga: 10,
      marcas: [{ alvo: T("btn-edit-info-gerais"), n: 1, lado: "dir" }],
    });
    await browser.close();
  },

  async "classificacao/modal"() {
    const { browser, p } = await abrir({ altura: 3400 });
    await p.goto(BASE + "/incident/notificacao-1");
    await esperar(p);
    await p.click(T("btn-classificar-incidente"));
    await esperar(p);
    const dlg = p.locator("[role=dialog]").first();
    await dlg.getByText(/^Evento adverso/).first().click();
    await esperar(p, 400);
    // grau do dano e demais campos que aparecem depois da classificação
    const opcoes = async (re) => {
      const l = dlg.getByText(re).first();
      if (await l.count()) {
        await l.click();
        await esperar(p, 400);
      }
    };
    await opcoes(/^Leve/);
    await opcoes(/Falha na identificação/);
    await opcoes(/^Paciente$/);
    const obs = p.locator(T("classificacao-observacoes-input"));
    await obs.fill("Paciente apresentou sonolência leve e a cirurgia foi remarcada.");
    await modalInteiro(p);
    await print(p, "classificacao/modal-classificacao", {
      alvo: await dialogo(p),
      folga: 8,
      marcas: [
        { alvo: dlg.getByText(/^Evento adverso/).first(), n: 1 },
        { alvo: dlg.getByText(/^Leve/).first(), n: 2 },
        { alvo: dlg.getByText(/Falha na identificação/).first(), n: 3 },
        { alvo: dlg.getByText(/^Paciente$/).first(), n: 4 },
        { alvo: T("classificacao-observacoes-input"), n: 5 },
        { alvo: T("classificacao-salvar-rascunho-button"), n: 6 },
        { alvo: T("classificacao-salvar-button"), n: 7, lado: "dir" },
      ],
    });
    await p.click(T("classificacao-salvar-button"));
    await esperar(p, 1200);
    await p.goto(BASE + "/incident/notificacao-1");
    await esperar(p);
    const bloco = await secao(p, "section-classificacao-toggle");
    await print(p, "classificacao/classificacao-registrada", {
      alvo: bloco,
      folga: 6,
      marcas: [{ alvo: p.getByText(/Prazo para análise/).first(), n: 1, lado: "dir" }],
    });
    await browser.close();
  },

  async "classificacao/analisar-ou-encaminhar"() {
    const { browser, p } = await abrir({ altura: 1800 });
    await p.goto(BASE + "/incident/notificacao-2");
    await esperar(p);
    const bloco = await secao(p, "section-analise-toggle");
    await print(p, "classificacao/analisar-ou-encaminhar", {
      alvo: bloco,
      folga: 6,
      marcas: [
        { alvo: T("btn-registrar-analise"), n: 1 },
        { alvo: T("btn-encaminhar-notificacao"), n: 2, lado: "dir" },
      ],
    });
    await p.click(T("btn-encaminhar-notificacao"));
    await esperar(p);
    await p.fill(T("encaminhamento-mensagem-input"), "Favor priorizar a análise: o incidente envolve queda de paciente idosa.");
    await modalInteiro(p);
    await print(p, "classificacao/modal-encaminhamento", {
      alvo: await dialogo(p),
      folga: 8,
      marcas: [
        { alvo: T("encaminhamento-mensagem-input"), n: 1 },
        { alvo: T("encaminhamento-btn-enviar"), n: 2, lado: "dir" },
      ],
    });
    await browser.close();
  },

  async "classificacao/menu-status"() {
    const { browser, p } = await abrir({ altura: 1200 });
    await p.goto(BASE + "/incident/notificacao-4");
    await esperar(p);
    await p.click(T("status-context-menu"));
    await esperar(p);
    const menu = p.locator(T("btn-concluir-notificacao")).locator("xpath=..");
    await print(p, "conclusao/menu-status", {
      alvo: [p.getByText("Criado em:").first(), T("status-context-menu"), menu],
      folga: 16,
      marcas: [
        { alvo: T("btn-concluir-notificacao"), n: 1, lado: "dir" },
        { alvo: T("btn-arquivar-notificacao"), n: 2, lado: "dir" },
      ],
    });
    await p.click(T("btn-concluir-notificacao"));
    await esperar(p);
    await print(p, "conclusao/confirmar-conclusao", { alvo: await dialogo(p), folga: 8 });
    await browser.close();
  },

  async "conclusao/arquivar"() {
    const { browser, p } = await abrir({ altura: 1200 });
    await p.goto(BASE + "/incident/notificacao-1");
    await esperar(p);
    await p.click(T("status-context-menu"));
    await esperar(p);
    await p.click(T("btn-arquivar-notificacao"));
    await esperar(p);
    await print(p, "conclusao/confirmar-arquivamento", { alvo: await dialogo(p), folga: 8 });
    await browser.close();
  },

  async "conclusao/somente-leitura"() {
    const { browser, p } = await abrir({ altura: 1400 });
    await p.goto(BASE + "/incident/notificacao-3");
    await esperar(p);
    await print(p, "conclusao/somente-leitura", {
      alvo: [p.getByText("#1003").first(), await secao(p, "section-info-gerais-toggle")],
      folga: 12,
      marcas: [{ alvo: p.getByText("Edição bloqueada").first(), n: 1, lado: "dir" }],
    });
    await browser.close();
  },

  async "classificacao/historico"() {
    const { browser, p } = await abrir({ altura: 2600 });
    await p.goto(BASE + "/incident/notificacao-4");
    await esperar(p);
    const bloco = await secao(p, "section-historico-toggle");
    await print(p, "classificacao/historico", { alvo: bloco, folga: 6 });
    await browser.close();
  },

  // ===== Análise
  async "analise/guia"() {
    const { browser, p } = await abrir({ altura: 1500 });
    await p.goto(BASE + "/incident/notificacao-2");
    await esperar(p);
    await p.click(T("btn-registrar-analise"));
    await esperar(p);
    await print(p, "analise/guia", {
      alvo: [p.getByText("Voltar para a notificação").first(), T("analise-guia-comecar"), await caixa(p, T("analise-guia-comecar"))],
      folga: 12,
      marcas: [
        { alvo: p.getByText(/Cultura justa, não punitiva/).first(), n: 1 },
        { alvo: p.getByText("Seu caminho na análise").first(), n: 2 },
        { alvo: T("analise-guia-nao-mostrar"), n: 3 },
        { alvo: T("analise-guia-comecar"), n: 4, lado: "dir" },
      ],
    });
    await browser.close();
  },

  async "analise/secao-1"() {
    const { browser, p } = await abrir({ altura: 1700 });
    await p.goto(BASE + "/incident/notificacao-2");
    await esperar(p);
    await p.click(T("btn-registrar-analise"));
    await esperar(p);
    await p.click(T("analise-guia-comecar"));
    await esperar(p);
    const campo = p.getByPlaceholder(/Queda do paciente/).first();
    await print(p, "analise/secao-1", {
      alvo: await areaAnalise(p),
      folga: 12,
      marcas: [
        { alvo: p.getByText(/Seção 1 — Informações da notificação/).first(), n: 1 },
        { alvo: p.getByText("Resumo do Incidente").first(), n: 2 },
        { alvo: campo, n: 3 },
        { alvo: p.getByRole("button", { name: "Próximo" }), n: 4, lado: "dir" },
      ],
    });
    await p.getByRole("button", { name: "Próximo" }).click();
    await esperar(p);
    await print(p, "analise/secao-1-validacao", {
      alvo: [p.getByText(/Informe o incidente em investigação/).first(), p.getByText("Preencha este campo.").first(), p.getByText(/0\/100/).first()],
      folga: 16,
    });
    await campo.fill("Queda de paciente idosa durante deslocamento no corredor da enfermaria, com 101 caracteres ou mais no texto");
    await esperar(p, 500);
    await print(p, "analise/secao-1-limite", {
      alvo: [p.getByText(/Informe o incidente em investigação/).first(), campo, p.getByText(/\/100/).first()],
      folga: 16,
    });
    await browser.close();
  },

  async "analise/secao-2"() {
    const { browser, p } = await abrir({ altura: 2600 });
    await abrirAnalise(p, 2);
    await print(p, "analise/secao-2", {
      alvo: await areaAnalise(p),
      folga: 12,
      marcas: [
        { alvo: p.getByText("Condutor da análise").first(), n: 1 },
        { alvo: p.getByText("Demais membros participantes").first(), n: 2 },
        { alvo: p.getByText("Fontes consultadas").first(), n: 3 },
        { alvo: p.getByText("Alguém precisa ser ouvido?").first(), n: 4 },
        { alvo: p.getByText("Registro de cada entrevista").first(), n: 5 },
      ],
    });
    await browser.close();
  },

  async "analise/secao-3"() {
    const { browser, p } = await abrir({ altura: 3000 });
    await abrirAnalise(p, 3);
    await print(p, "analise/secao-3", {
      alvo: await areaAnalise(p),
      folga: 12,
      marcas: [
        { alvo: p.getByRole("button", { name: "Como preencher" }), n: 1 },
        { alvo: p.getByRole("button", { name: "Exemplo de registro da cronologia" }), n: 2 },
        { alvo: p.getByRole("button", { name: "+ Adicionar evento" }), n: 3 },
        { alvo: p.getByText("Antes de seguir, confira").first(), n: 4 },
        { alvo: p.getByRole("button", { name: "Como identificar um PPC" }), n: 5 },
        { alvo: p.getByRole("button", { name: "+ Adicionar PPC" }), n: 6 },
      ],
    });
    await browser.close();
  },

  async "analise/secao-4"() {
    const { browser, p } = await abrir({ altura: 2600 });
    await abrirAnalise(p, 4);
    await print(p, "analise/secao-4", {
      alvo: await areaAnalise(p),
      folga: 12,
      marcas: [
        { alvo: T("ppc-card-1"), n: 1 },
        { alvo: T("ppc-card-1-identificar"), n: 2, lado: "dir" },
        { alvo: T("ppc-adicionar"), n: 3 },
      ],
    });
    await p.click(T("ppc-card-1-identificar"));
    await esperar(p);
    await print(p, "analise/secao-4-fatores", {
      alvo: T("ppc-card-1"),
      folga: 10,
      marcas: [
        { alvo: p.getByText("Fatores das tarefas").first(), n: 1 },
        { alvo: p.getByText("Fatores do ambiente de trabalho").first(), n: 2 },
      ],
    });
    // abre um fator marcado para mostrar o detalhe e os 5 Porquês
    const fator = p.locator(T("ppc-card-1")).getByText("Fatores das tarefas").first();
    await fator.locator("xpath=ancestor::*[@role='button' or self::button or self::div][2]").click().catch(() => fator.click());
    await esperar(p);
    const usar = p.locator(T("porques-usar"));
    if (await usar.count()) {
      await usar.first().click();
      await esperar(p);
    }
    await print(p, "analise/secao-4-porques", { alvo: T("ppc-card-1"), folga: 10 });
    await browser.close();
  },

  async "analise/secao-5"() {
    const { browser, p } = await abrir({ altura: 2400 });
    await abrirAnalise(p, 5);
    await print(p, "analise/secao-5", {
      alvo: await areaAnalise(p),
      folga: 12,
      marcas: [
        { alvo: p.getByText("Diagrama de Ishikawa (espinha de peixe)").first(), n: 1 },
        { alvo: T("analise-exportar-diagrama"), n: 2, lado: "dir" },
        { alvo: p.getByText("Recomendações de melhoria").first(), n: 3 },
        { alvo: p.getByRole("button", { name: "+ Adicionar recomendação" }), n: 4 },
        { alvo: p.getByRole("button", { name: "Finalizar análise" }), n: 5, lado: "dir" },
      ],
    });
    await browser.close();
  },

  async "analise/pos-analise"() {
    const { browser, p } = await abrir({ altura: 2200 });
    await p.goto(BASE + "/incident/notificacao-5");
    await esperar(p);
    const bloco = await secao(p, "section-analise-toggle");
    await print(p, "analise/decisao-encaminhamento", {
      alvo: bloco,
      folga: 6,
      marcas: [
        { alvo: T("btn-encaminhar-pos-analise"), n: 1 },
        { alvo: T("btn-nao-encaminhar"), n: 2, lado: "dir" },
      ],
    });
    await p.click(T("btn-nao-encaminhar"));
    await esperar(p);
    await p.fill(T("justificar-nao-encaminhar-input"), "O setor de origem já participou da análise como membro da equipe; o resultado será apresentado na reunião mensal do núcleo.");
    await print(p, "analise/modal-nao-encaminhar", { alvo: await dialogo(p), folga: 8 });
    await browser.close();
  },

  async "analise/concluida"() {
    const { browser, p } = await abrir({ altura: 2400 });
    await p.goto(BASE + "/incident/notificacao-4");
    await esperar(p);
    const bloco = await secao(p, "section-analise-toggle");
    await print(p, "analise/analise-concluida", { alvo: bloco, folga: 6 });
    await browser.close();
  },

  // ===== Plano de ação
  async "plano/pendente"() {
    const { browser, p } = await abrir({ altura: 2400 });
    await p.goto(BASE + "/incident/notificacao-5");
    await esperar(p);
    const bloco = await secao(p, "section-plano-acao-toggle");
    await print(p, "plano/acao-pendente", {
      alvo: bloco,
      folga: 6,
      marcas: [
        { alvo: p.locator(T("acao-1")).getByText("Preenchimento pendente").first(), n: 1 },
        { alvo: T("acao-1-editar"), n: 2, lado: "dir" },
      ],
    });
    await p.click(T("acao-1-editar"));
    await esperar(p);
    await modalInteiro(p);
    await print(p, "plano/completar-acao", { alvo: await dialogo(p), folga: 8 });
    await browser.close();
  },

  async "plano/tabela"() {
    const { browser, p } = await abrir({ altura: 2600 });
    await p.goto(BASE + "/incident/notificacao-4");
    await esperar(p);
    const linha = p.locator(T("acao-1"));
    const bloco = await secao(p, "section-plano-acao-toggle");
    await print(p, "plano/tabela-acoes", {
      alvo: bloco,
      folga: 6,
      marcas: [
        { alvo: linha.getByText("Em andamento").first(), n: 1 },
        { alvo: linha.getByRole("button", { name: "Editar ação" }).locator("xpath=.."), n: 2, lado: "dir" },
        { alvo: p.getByRole("button", { name: /Adicionar outra ação/ }), n: 3 },
      ],
    });
    await print(p, "plano/icones-acoes", {
      alvo: [linha.getByRole("button", { name: "Editar ação" }), linha.getByRole("button", { name: "Excluir ação" })],
      folga: 10,
    });
    await linha.getByRole("button", { name: "Visualizar detalhes" }).click();
    await esperar(p);
    await print(p, "plano/detalhes-acao", { alvo: bloco, folga: 6 });
    await browser.close();
  },

  async "plano/andamento"() {
    const { browser, p } = await abrir({ altura: 2600 });
    await p.goto(BASE + "/incident/notificacao-4");
    await esperar(p);
    await p.locator(T("acao-1")).getByRole("button", { name: "Atualizar andamento da ação" }).click();
    await esperar(p);
    await modalInteiro(p);
    const d = p.locator("[role=dialog]").last();
    await print(p, "plano/atualizar-andamento", {
      alvo: await dialogo(p),
      folga: 8,
      marcas: [
        { alvo: d.getByText("Ação selecionada", { exact: true }).first(), n: 1, contorno: false },
        { alvo: d.getByText("Situação da ação", { exact: true }).first(), n: 2, contorno: false },
        { alvo: d.getByText("Resultado observado", { exact: true }).first(), n: 3, contorno: false },
        { alvo: d.getByText(/A ação produziu o efeito esperado/).first(), n: 4, contorno: false },
        { alvo: d.getByText(/Onde está armazenada a evidência/).first(), n: 5, contorno: false },
        { alvo: d.getByText("Anexar arquivos", { exact: true }).first(), n: 6, contorno: false },
        { alvo: d.getByRole("button", { name: "Salvar atualização" }), n: 7, lado: "dir" },
      ],
    });
    await browser.close();
  },

  async "plano/excluir"() {
    const { browser, p } = await abrir({ altura: 1400 });
    await p.goto(BASE + "/incident/notificacao-4");
    await esperar(p);
    await p.locator(T("acao-1")).getByRole("button", { name: "Excluir ação" }).click();
    await esperar(p);
    await print(p, "plano/confirmar-exclusao", { alvo: await dialogo(p), folga: 8 });
    await browser.close();
  },

  async "plano/nova-acao"() {
    const { browser, p } = await abrir({ altura: 2600 });
    await p.goto(BASE + "/incident/notificacao-4");
    await esperar(p);
    await p.getByRole("button", { name: /Adicionar outra ação/ }).click();
    await esperar(p);
    await modalInteiro(p);
    await print(p, "plano/nova-acao", { alvo: await dialogo(p), folga: 8 });
    await browser.close();
  },
};

(async () => {
  for (const [nome, fn] of Object.entries(capturas)) {
    if (ONLY && !ONLY.some((o) => nome.startsWith(o))) continue;
    console.log("•", nome);
    try {
      await fn();
    } catch (e) {
      console.error("  ✗", nome, "—", e.message.split("\n")[0]);
    } finally {
      while (ABERTOS.length) await ABERTOS.pop().close().catch(() => {});
    }
  }
})();
