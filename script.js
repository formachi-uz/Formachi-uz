/* ════════════════════════════════════════════════════
   FORMACHI script.js  —  To'liq yangilangan versiya
   ════════════════════════════════════════════════════ */




/* ── LIGALAR ─────────────────────────────────────────── */
const LEAGUES = [
  {
    id:    "all",
    name:  "Barchasi",
    emoji: "⚽",
    logo:  null,
    teams: [] /* bo'sh = hammasi */
  },
  {
    id:    "premierleague",
    name:  "Premier League",
    emoji: "🏴",
    logo:  "./images/leagues/premierleague.png",
    teams: ["arsenal","liverpool","chelsea","mancity","manunited","tottenham"]
  },
  {
    id:    "laliga",
    name:  "La Liga",
    emoji: "🇪🇸",
    logo:  "./images/leagues/laliga.png",
    teams: ["realmadrid","barcelona"]
  },
  {
    id:    "bundesliga",
    name:  "Bundesliga",
    emoji: "🇩🇪",
    logo:  "./images/leagues/bundesliga.png",
    teams: ["bayern"]
  },
  {
    id:    "seriea",
    name:  "Serie A",
    emoji: "🇮🇹",
    logo:  "./images/leagues/seriea.png",
    teams: ["milan","inter"]
  },
  {
    id:    "ligue1",
    name:  "Ligue 1",
    emoji: "🇫🇷",
    logo:  "./images/leagues/ligue1.png",
    teams: ["psg"]
  },
  {
    id:    "national",
    name:  "Milliy jamoalar",
    emoji: "🌍",
    logo:  "./images/leagues/national.png",
    teams: ["argentina","portugal","spain"]
  }
];

/* ── KOMANDALAR ──────────────────────────────────────── */
const TEAMS_INFO = {
  realmadrid: { name: "Real Madrid",  logo: "./images/teams/realmadrid.png" },
  barcelona:  { name: "Barcelona",    logo: "./images/teams/barcelona.png"  },
  mancity:    { name: "Man City",     logo: "./images/teams/mancity.png"    },
  manunited:  { name: "Man United",   logo: "./images/teams/manunited.png"  },
  milan:      { name: "AC Milan",     logo: "./images/teams/milan.png"      },
  arsenal:    { name: "Arsenal",      logo: "./images/teams/arsenal.png"    },
  liverpool:  { name: "Liverpool",    logo: "./images/teams/liverpool.png"  },
  chelsea:    { name: "Chelsea",      logo: "./images/teams/chelsea.png"    },
  bayern:     { name: "Bayern",       logo: "./images/teams/bayern.png"     },
  psg:        { name: "PSG",          logo: "./images/teams/psg.png"        },
  inter:      { name: "Inter",        logo: "./images/teams/inter.png"      },
  tottenham:  { name: "Tottenham",    logo: "./images/teams/tottenham.png"  },
  argentina:  { name: "Argentina",    logo: "./images/teams/argentina.png"  },
  portugal:   { name: "Portugaliya",  logo: "./images/teams/portugal.png"   },
  spain:      { name: "Ispaniya",     logo: "./images/teams/spain.png"      },
};

/* ── HOLAT ───────────────────────────────────────────── */
let currentSelectedProduct = null;
let activeLeague           = "all";   // tanlangan liga
let activeTeam             = "all";   // tanlangan jamoa
let searchQuery            = "";
let searchDebounceTimer    = null;

/* ── DOM ELEMENTLAR ─────────────────────────────────── */
const formaProductsContainer = document.getElementById("forma-products");
const bootsProductsContainer = document.getElementById("boots-products");
const bootsSection           = document.getElementById("boots-section");
const formaSection           = document.getElementById("forma-section");
const formaSectionTitle      = document.getElementById("forma-section-title");
const leaguesList            = document.getElementById("leagues-list");
const teamsGrid              = document.getElementById("teams-grid");
const showcaseTitle          = document.getElementById("showcase-title");
const searchInput            = document.getElementById("search-input");
const searchClearBtn         = document.getElementById("search-clear-btn");
const searchResultsSection   = document.getElementById("search-results-section");
const searchResultsGrid      = document.getElementById("search-results-grid");
const searchResultsTitle     = document.getElementById("search-results-title");
const orderModal             = document.getElementById("order-modal");
const modalCloseBtn          = document.getElementById("modal-close-btn");
const orderForm              = document.getElementById("order-form");
const orderProductInput      = document.getElementById("order-product");
const orderSizeSelect        = document.getElementById("order-size");
const orderNameInput         = document.getElementById("order-name");
const orderPhoneInput        = document.getElementById("order-phone");
const orderQuantityInput     = document.getElementById("order-quantity");
const orderPrintToggle       = document.getElementById("order-print-toggle");
const printTextGroup         = document.getElementById("print-text-group");
const orderPrintText         = document.getElementById("order-print-text");
const orderAddress           = document.getElementById("order-address");
const orderNote              = document.getElementById("order-note");
const submitOrderBtn         = document.getElementById("submit-order-btn");
const formStatus             = document.getElementById("form-status");

/* ── YORDAMCHI FUNKSIYALAR ───────────────────────────── */

// 1. Jamoaga tegishli formalar sonini sanaydigan funksiya
function countProductsByTeam(teamId) {
  return products.filter(p => p.team === teamId && p.category === "forma").length;
}

// 2. Google Sheets'dan qoldiqlarni o'qiydigan funksiya
async function loadStockFromSheets() {
  const stockMap = {};
  try {
    const res = await fetch(STOCK_SHEET_URL);
    const csv = await res.text();
    const rows = csv.trim().split("\n").slice(1);
    for (const row of rows) {
      const cols = row.split(",");
      const name = cols[0]?.trim().replace(/^"|"$/g, "");
      stockMap[name] = Number(cols[1]) || 0;
    }
  } catch (err) {
    console.error("Qoldiqni yuklashda xato:", err);
  }
  return stockMap;
}

/* ── MAHSULOT KARTASI HTML ───────────────────────────── */
function createProductCard(product) {
  const discount    = getDiscountPercent(product.oldPrice, product.price);
  const typeLabel   = getTypeLabel(product.name);
  const isTop       = !!product.isTop;
  // stock null = yuklanmoqda (available deb ko'rsat)
  const isLoading   = product.stock === null || product.stock === undefined;
  const isAvailable = isLoading || Number(product.stock) > 0;
  const stockLabel  = isLoading ? "Tekshirilmoqda..." : (isAvailable ? "Bor" : "Qolmadi");

  return `
    <div class="product-card ${!isAvailable ? "sold-out-card" : ""}"
         data-product-id="${product.id}"
         onclick="goToProduct(${product.id})">

      <div class="card-badges">
        <span class="card-badge type-badge">${typeLabel}</span>
        ${isTop ? `<span class="card-badge top-badge">🔥 TOP</span>` : ""}
      </div>

      <div class="product-image-wrap ${!isAvailable ? "sold-out-wrap" : ""}">
        <img src="${product.image}" alt="${product.name}"
             class="product-image" loading="lazy" decoding="async" />
        ${!isAvailable ? `<div class="sold-out-overlay">SOTUVDA QOLMADI</div>` : ""}
      </div>

      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>

        <div class="stock-badge ${!isAvailable && !isLoading ? "out" : ""}">
          ${isLoading ? "⏳ " : (isAvailable ? "" : "")}Sotuvda: ${stockLabel}
        </div>

        <div class="price-box">
          <span class="new-price">${formatPrice(product.price)}</span>
          ${product.oldPrice
            ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
        </div>

        ${discount ? `<div class="discount-badge">-${discount}% chegirma</div>` : ""}

        <div class="delivery-badge">🚚 1-2 kun ichida yetkaziladi</div>

        <p class="product-meta">Razmerlar: ${product.sizes.join(", ")}</p>

        <button
          class="order-btn ${!isAvailable ? "disabled" : ""}"
          ${!isAvailable ? "disabled" : ""}
          onclick="event.stopPropagation();${
            isAvailable ? `openOrderModal(${product.id});` : ""
          }"
        >${!isAvailable ? "Mavjud emas" : "Buyurtma berish"}</button>
      </div>
    </div>`;
}

/* ── LIGALAR RENDER ──────────────────────────────────── */
function renderLeagues() {
  leaguesList.innerHTML = LEAGUES.map(lg => `
    <button
      class="league-btn ${lg.id === activeLeague ? "active" : ""}"
      data-league="${lg.id}"
    >
      ${lg.logo
        ? `<img src="${lg.logo}" alt="${lg.name}" class="league-logo-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='inline';" />
           <span class="league-emoji" style="display:none;">${lg.emoji}</span>`
        : `<span class="league-emoji">${lg.emoji}</span>`}
      <span class="league-name">${lg.name}</span>
    </button>
  `).join("");

  leaguesList.querySelectorAll(".league-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lid = btn.dataset.league;
      selectLeague(lid);
    });
  });
}

function selectLeague(leagueId) {
  activeLeague = leagueId;

  // Liga tugmalarini yangilash
  leaguesList.querySelectorAll(".league-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.league === leagueId);
  });

  // Teams showcase yangilash
  renderTeamsShowcase(leagueId);

  // Jamoa filtri reset (liga o'zgarganda barcha formalar)
  if (activeTeam !== "all") {
    activeTeam = "all";
    renderProducts("all");
    setupSlider("forma-products","forma-prev","forma-next", 7000);
  }
}

/* ── TEAMS SHOWCASE RENDER ───────────────────────────── */
function renderTeamsShowcase(leagueId) {
  const league = LEAGUES.find(l => l.id === leagueId) || LEAGUES[0];
  const teamIds = league.teams.length > 0
    ? league.teams
    : Object.keys(TEAMS_INFO);

  if (showcaseTitle) {
    showcaseTitle.textContent = leagueId === "all"
      ? "Barcha komandalar"
      : `${league.name} — komandalar`;
  }

  teamsGrid.innerHTML = teamIds.map(tid => {
    const info  = TEAMS_INFO[tid];
    if (!info) return "";
    const count = countProductsByTeam(tid);
    const isAct = tid === activeTeam;
    return `
      <div class="team-sc-card ${isAct ? "active-team" : ""}"
           data-team="${tid}"
           onclick="selectTeamFromShowcase('${tid}')">
        <img src="${info.logo}" alt="${info.name}" class="team-sc-logo"
             loading="lazy"
             onerror="this.style.opacity='0.4';" />
        <span class="team-sc-name">${info.name}</span>
        <span class="team-sc-count">${count} ta forma</span>
      </div>`;
  }).join("");
}

function selectTeamFromShowcase(teamId) {
  // Toggle: agar allaqachon shu jamoa tanlangan bo'lsa, reset qil
  const newTeam = (activeTeam === teamId) ? "all" : teamId;
  activeTeam = newTeam;

  // Active class yangilash
  teamsGrid.querySelectorAll(".team-sc-card").forEach(c => {
    c.classList.toggle("active-team", c.dataset.team === newTeam);
  });

  renderProducts(newTeam);
  setupSlider("forma-products","forma-prev","forma-next", 7000);

  // Formalar bo'limiga smooth scroll
  setTimeout(() => {
    formaSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

/* ── QIDIRUV ─────────────────────────────────────────── */
function performSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    searchResultsSection.classList.add("hidden");
    formaSection.classList.remove("hidden");
    bootsSection.style.display = "";
    searchClearBtn.classList.add("hidden");
    return;
  }

  searchClearBtn.classList.remove("hidden");
  formaSection.classList.add("hidden");
  bootsSection.style.display = "none";
  searchResultsSection.classList.remove("hidden");

  const results = products.filter(p => {
    return (p.name + " " + p.team).toLowerCase().includes(q);
  });

  if (results.length === 0) {
    searchResultsTitle.textContent = `"${query}" bo'yicha topilmadi`;
    searchResultsGrid.innerHTML = `
      <div style="padding:40px 20px;text-align:center;color:#6b7280;
                  font-size:15px;width:100%;">
        😕 Bunday mahsulot topilmadi.<br>
        <span style="font-size:13px;">Boshqa so'z bilan qidirib ko'ring.</span>
      </div>`;
    return;
  }

  searchResultsTitle.textContent = `"${query}" — ${results.length} ta natija`;
  searchResultsGrid.innerHTML = results.map(createProductCard).join("");
}

function clearSearch() {
  searchInput.value = "";
  searchQuery = "";
  searchResultsSection.classList.add("hidden");
  formaSection.classList.remove("hidden");
  bootsSection.style.display = activeTeam === "all" ? "" : "none";
  searchClearBtn.classList.add("hidden");
  searchInput.focus();
}

function setupSearch() {
  searchInput.addEventListener("input", () => {
    clearTimeout(searchDebounceTimer);
    const val = searchInput.value;
    searchDebounceTimer = setTimeout(() => {
      searchQuery = val;
      performSearch(val);
    }, 250);
  });
  searchClearBtn.addEventListener("click", clearSearch);
  searchInput.addEventListener("keydown", e => { if (e.key === "Escape") clearSearch(); });
}

/* ── PRODUCTS RENDER ─────────────────────────────────── */
const TEAM_LABELS = {
  all:        "Formalar",
  realmadrid: "Real Madrid formalari",
  barcelona:  "Barcelona formalari",
  mancity:    "Man City formalari",
  manunited:  "Man United formalari",
  milan:      "AC Milan formalari",
  arsenal:    "Arsenal formalari",
  liverpool:  "Liverpool formalari",
  chelsea:    "Chelsea formalari",
  bayern:     "Bayern München formalari",
  psg:        "PSG formalari",
  inter:      "Inter formalari",
  tottenham:  "Tottenham formalari",
  argentina:  "Argentina formalari",
  portugal:   "Portugaliya formalari",
  spain:      "Ispaniya formalari",
};

function renderProducts(selectedTeam = "all") {
  activeTeam = selectedTeam;
  if (searchQuery.trim()) return; // qidiruv aktif bo'lsa render qilma

  let formaList  = products.filter(p => p.category === "forma");
  const bootsList = products.filter(p => p.category === "butsiy");

  if (selectedTeam !== "all") {
    formaList = formaList.filter(p => p.team === selectedTeam);
  }

  formaProductsContainer.innerHTML = formaList.length
    ? formaList.map(createProductCard).join("")
    : `<div style="padding:40px 20px;text-align:center;color:#6b7280;
                   font-size:15px;width:100%;min-width:280px;">
         Bu jamoa uchun hozircha forma mavjud emas.
       </div>`;

  bootsProductsContainer.innerHTML = bootsList.map(createProductCard).join("");

  if (formaSectionTitle) {
    formaSectionTitle.textContent = TEAM_LABELS[selectedTeam] || "Formalar";
  }

  bootsSection.style.display =
    (selectedTeam === "all" && bootsList.length > 0) ? "" : "none";
}

/* ── SLIDER (sekinroq: 7000ms) ───────────────────────── */
function setupSlider(containerId, prevId, nextId, interval = 7000) {
  const slider  = document.getElementById(containerId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  if (!slider || !prevBtn || !nextBtn) return;

  const cards = slider.querySelectorAll(".product-card");
  if (cards.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }
  prevBtn.style.display = "flex";
  nextBtn.style.display = "flex";

  const scrollAmt = () => {
    // 2-row grid: 1 ustun = card genişliği + gap
    const card = slider.querySelector(".product-card");
    if (!card) return 252;
    const style = window.getComputedStyle(slider);
    const gap   = parseFloat(style.columnGap || style.gap || "14");
    return card.offsetWidth + gap;
  };

  prevBtn.onclick = () => slider.scrollBy({ left: -scrollAmt(), behavior: "smooth" });
  nextBtn.onclick = () => slider.scrollBy({ left:  scrollAmt(), behavior: "smooth" });

  let timer;
  const start = () => {
    stop();
    timer = setInterval(() => {
      const maxLeft = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxLeft - 4)
        slider.scrollTo({ left: 0, behavior: "smooth" });
      else
        slider.scrollBy({ left: scrollAmt(), behavior: "smooth" });
    }, interval);
  };
  const stop = () => clearInterval(timer);

  start();
  [slider, prevBtn, nextBtn].forEach(el => {
    el.onmouseenter = stop;
    el.onmouseleave = start;
  });
}

/* ── BUYURTMA MODAL ──────────────────────────────────── */
function getCurrentOrderPrice() {
  if (!currentSelectedProduct) return 0;
  return currentSelectedProduct.price + (orderPrintToggle.checked ? PRINT_EXTRA_PRICE : 0);
}

function refreshModalPrice() {
  const el = document.getElementById("modal-price-display");
  if (!el || !currentSelectedProduct) return;
  const base  = currentSelectedProduct.price;
  const extra = orderPrintToggle.checked ? PRINT_EXTRA_PRICE : 0;
  const total = base + extra;
  el.innerHTML = extra > 0
    ? `<span style="color:#dc2626;">${formatPrice(total)}</span>
       <span style="font-size:13px;color:#059669;font-weight:700;margin-left:6px;">
         (${formatPrice(base)} + ism: +${formatPrice(PRINT_EXTRA_PRICE)})
       </span>`
    : `<span style="color:#dc2626;">${formatPrice(total)}</span>`;
}

function openOrderModal(productId) {
  const product = products.find(p => p.id === Number(productId));
  if (!product || Number(product.stock) <= 0) return;

  currentSelectedProduct    = product;
  orderProductInput.value   = product.name;
  orderSizeSelect.innerHTML =
    `<option value="">Tanlang</option>` +
    product.sizes.map(s => `<option value="${s}">${s}</option>`).join("");

  orderQuantityInput.value = 1;
  orderPrintToggle.checked = false;
  printTextGroup.classList.add("hidden");
  orderPrintText.value   = "";
  formStatus.textContent = "";

  refreshModalPrice();
  orderModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  orderModal.classList.remove("show");
  document.body.style.overflow = "";
}

orderPrintToggle.addEventListener("change", () => {
  printTextGroup.classList.toggle("hidden", !orderPrintToggle.checked);
  if (!orderPrintToggle.checked) orderPrintText.value = "";
  refreshModalPrice();
});

modalCloseBtn.addEventListener("click", closeOrderModal);
orderModal.addEventListener("click", e => { if (e.target === orderModal) closeOrderModal(); });

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (orderModal.classList.contains("show")) closeOrderModal();
    closeDetailModal();
  }
});

orderForm.addEventListener("submit", async e => {
  e.preventDefault();
  if (!currentSelectedProduct) return;

  const payload = {
    productId:   currentSelectedProduct.id,
    productName: currentSelectedProduct.name,
    category:    currentSelectedProduct.category,
    price:       getCurrentOrderPrice(),
    name:        orderNameInput.value.trim(),
    phone:       orderPhoneInput.value.trim(),
    size:        orderSizeSelect.value,
    quantity:    orderQuantityInput.value,
    printNeeded: orderPrintToggle.checked ? "Ha" : "Yo'q",
    printText:   orderPrintText.value.trim(),
    address:     orderAddress.value.trim(),
    note:        orderNote.value.trim(),
  };

  if (!payload.name || !payload.phone || !payload.size || !payload.address) {
    formStatus.textContent = "⚠️ Majburiy maydonlarni to'ldiring.";
    formStatus.style.color = "#dc2626";
    return;
  }

  submitOrderBtn.disabled    = true;
  submitOrderBtn.textContent = "Yuborilmoqda...";
  formStatus.textContent     = "Buyurtma yuborilmoqda...";
  formStatus.style.color     = "#2563eb";

  try {
    await fetch(ORDER_SCRIPT_URL, {
      method: "POST", mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    formStatus.textContent = "✅ Buyurtma muvaffaqiyatli yuborildi!";
    formStatus.style.color = "#059669";
    orderForm.reset();
    printTextGroup.classList.add("hidden");
    refreshModalPrice();
    setTimeout(closeOrderModal, 1400);
  } catch (err) {
    console.error(err);
    formStatus.textContent = "❌ Xatolik. Qaytadan urinib ko'ring.";
    formStatus.style.color = "#dc2626";
  } finally {
    submitOrderBtn.disabled    = false;
    submitOrderBtn.textContent = "Buyurtmani yuborish";
  }
});

/* ── DETAIL MODAL ────────────────────────────────────── */
function goToProduct(productId) {
  const product = products.find(p => p.id === Number(productId));
  if (!product) return;

  document.getElementById("detail-modal-overlay")?.remove();

  const gallery      = product.gallery?.length ? product.gallery : [product.image];
  const LABELS       = ["Asosiy","Old","Orqa","Yon","Short"];
  const discount     = getDiscountPercent(product.oldPrice, product.price);
  const isAvailable  = Number(product.stock) > 0;
  const typeLabel    = getTypeLabel(product.name);

  const thumbsHTML = gallery.map((src, i) => `
    <img src="${src}" alt="${product.name} - ${LABELS[i]||""}"
         style="width:60px;height:60px;object-fit:cover;border-radius:8px;
                cursor:pointer;box-shadow:0 0 0 2px rgba(0,0,0,0.1);"
         onclick="document.getElementById('detail-main-img').src='${src}'" />
  `).join("");
  const overlay = document.createElement("div");
  overlay.id = "detail-modal-overlay";
  overlay.style.cssText =
    "position:fixed;inset:0;background:rgba(15,23,42,0.65);" +
    "display:flex;align-items:flex-start;justify-content:center;" +
    "padding:20px;z-index:200;overflow-y:auto;";
  overlay.addEventListener("click", e => { if (e.target === overlay) closeDetailModal(); });

  overlay.innerHTML = `
    <div style="width:min(900px,100%);background:#fff;border-radius:24px;
                padding:28px;position:relative;margin:auto;">

      <button onclick="closeDetailModal()"
              style="position:absolute;top:16px;right:16px;width:42px;height:42px;
                     border-radius:50%;background:#f3f4f6;font-size:26px;border:none;
                     cursor:pointer;display:flex;align-items:center;
                     justify-content:center;color:#111827;z-index:10;">×</button>

      <div id="detail-grid"
           style="display:grid;grid-template-columns:1.15fr 1fr;gap:28px;align-items:start;">

        <!-- Chap: gallery -->
        <div>
          <div style="background:#f8fafc;border-radius:18px;padding:16px;
                      margin-bottom:12px;display:flex;align-items:center;
                      justify-content:center;min-height:340px;">
            <img id="detail-main-img" src="${gallery[0]}" alt="${product.name}"
                 style="width:100%;max-height:380px;object-fit:contain;
                        transition:opacity 0.18s;" />
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">${thumbsHTML}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:5px;">
            ${gallery.map((_,i) => `
              <span style="font-size:11px;font-weight:700;color:#9ca3af;
                           width:66px;text-align:center;">${LABELS[i]||""}</span>`
            ).join("")}
          </div>
        </div>

        <!-- O'ng: ma'lumot -->
        <div>
          <div style="margin-bottom:10px;">
            <span style="background:rgba(15,23,42,0.88);color:#fff;font-size:11px;
                         font-weight:800;letter-spacing:0.5px;padding:5px 12px;
                         border-radius:999px;">${typeLabel}</span>
          </div>

          <h2 style="font-size:24px;font-weight:900;margin-bottom:14px;
                     line-height:1.25;color:#111827;">${product.name}</h2>

          <div style="display:flex;align-items:center;gap:10px;
                      flex-wrap:wrap;margin-bottom:8px;">
            <span style="font-size:28px;font-weight:800;color:#dc2626;">
              ${formatPrice(product.price)}</span>
            ${product.oldPrice
              ? `<span style="font-size:15px;color:#9ca3af;text-decoration:line-through;">
                   ${formatPrice(product.oldPrice)}</span>` : ""}
            ${discount
              ? `<span style="background:#fee2e2;color:#b91c1c;font-size:12px;
                              font-weight:700;padding:4px 10px;border-radius:999px;">
                   -${discount}%</span>` : ""}
          </div>

          <div style="font-size:13px;color:#059669;font-weight:700;margin-bottom:14px;">
            🚚 1-2 kun ichida yetkaziladi</div>

          <div style="margin-bottom:14px;">
            <span style="display:inline-flex;padding:5px 14px;border-radius:999px;
                         font-size:13px;font-weight:700;
                         ${isAvailable
                           ? "background:#ecfdf5;color:#166534;"
                           : "background:#fee2e2;color:#b91c1c;border:1px solid #fecaca;"}">
              Sotuvda: ${isAvailable ? "✅ Bor" : "❌ Qolmadi"}
            </span>
          </div>

          <div style="font-size:14px;color:#374151;margin-bottom:16px;font-weight:600;">
            Razmerlar: <strong>${product.sizes.join(", ")}</strong></div>

          <div style="background:#f8fafc;border-radius:14px;padding:14px 16px;
                      margin-bottom:20px;font-size:14px;color:#374151;line-height:1.9;">
            ✅ Original sifatli forma<br>
            ✅ Orqasiga ism/raqam yozdirish<br>
            <span style="color:#059669;font-weight:700;padding-left:20px;">
              (+${formatPrice(PRINT_EXTRA_PRICE)} qo'shimcha)</span><br>
            ✅ M, L, XL razmerlar<br>
            ✅ Tez va ishonchli yetkazib berish
          </div>

          <button ${!isAvailable ? "disabled" : ""}
            onclick="closeDetailModal();openOrderModal(${product.id});"
            style="width:100%;padding:16px;border-radius:14px;border:none;
                   font-size:16px;font-weight:800;color:#fff;transition:0.2s;
                   cursor:${isAvailable ? "pointer" : "not-allowed"};
                   background:${isAvailable
                     ? "linear-gradient(135deg,#0f172a,#1d4ed8)"
                     : "linear-gradient(135deg,#dc2626,#b91c1c)"};
                   ${!isAvailable ? "opacity:0.8;" : ""}">
            ${isAvailable ? "🛒 Buyurtma berish" : "Mavjud emas"}
          </button>
        </div>
      </div>
      <style>@media(max-width:640px){#detail-grid{grid-template-columns:1fr!important;}}</style>
    </div>`;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
}

function switchDetailImage(src, btn) {
  const img = document.getElementById("detail-main-img");
  if (!img) return;
  img.style.opacity = "0";
  setTimeout(() => { img.src = src; img.style.opacity = "1"; }, 160);
  document.querySelectorAll(".detail-thumb-btn").forEach(b => { b.style.borderColor = "#e5e7eb"; });
  btn.style.borderColor = "#1d4ed8";
}

function closeDetailModal() {
  const el = document.getElementById("detail-modal-overlay");
  if (el) { el.remove(); document.body.style.overflow = ""; }
}

/* ── INIT (performance: render avval, stock keyinroq) ── */
async function initApp() {
  // 1. Barcha productlarni "yuklanmoqda" holatida render qil
  // (stock = null → kartalar darhol ko'rinadi)
  products.forEach(p => { if (p.stock === undefined) p.stock = null; });

  renderLeagues();
  renderTeamsShowcase("all");
  renderProducts();
  setupSearch();

  // Sliderlarni ham darhol setup qil
  setupSlider("forma-products", "forma-prev", "forma-next", 7000);
  setupSlider("boots-products", "boots-prev", "boots-next", 8000);

  // 2. Background'da stock yukla — sahifa allaqachon ko'rinib bo'lgan
  try {
    const stockMap = await loadStockFromSheets();
    products.forEach(p => { p.stock = stockMap[p.name] ?? 0; });

    // Faqat stock badgelarini yangilash (full re-render emas)
    updateStockBadgesInDOM(stockMap);
  } catch (err) {
    console.error("Stock yuklanmadi:", err);
    products.forEach(p => { if (p.stock === null) p.stock = 0; });
  }
}

/* Stock badgelarini DOM da silent yangilash */
function updateStockBadgesInDOM(stockMap) {
  products.forEach(p => {
    const available = Number(p.stock) > 0;
    // Barcha kartalar (slider + search results)
    document.querySelectorAll(`[data-product-id="${p.id}"]`).forEach(card => {
      // Stock badge
      const badge = card.querySelector(".stock-badge");
      if (badge) {
        badge.textContent = `Sotuvda: ${available ? "Bor" : "Qolmadi"}`;
        badge.className   = `stock-badge${available ? "" : " out"}`;
      }
      // Order button
      const btn = card.querySelector(".order-btn");
      if (btn) {
        if (!available) {
          btn.textContent = "Mavjud emas";
          btn.classList.add("disabled");
          btn.disabled = true;
          btn.setAttribute("onclick","event.stopPropagation();");
        }
      }
      // Sold-out overlay
      const wrap = card.querySelector(".product-image-wrap");
      const img  = card.querySelector(".product-image");
      if (!available && wrap && !wrap.querySelector(".sold-out-overlay")) {
        wrap.classList.add("sold-out-wrap");
        const overlay = document.createElement("div");
        overlay.className = "sold-out-overlay";
        overlay.textContent = "SOTUVDA QOLMADI";
        wrap.appendChild(overlay);
        if (img) {
          img.style.filter    = "grayscale(20%) brightness(0.72)";
          img.style.transform = "scale(0.98)";
        }
        card.classList.add("sold-out-card");
      }
    });
  });
}

initApp();
