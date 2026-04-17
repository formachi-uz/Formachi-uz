const ORDER_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpMa6YPk2dZtGPXXTtU1Kg91YuAkVksM_pFTPcj_NUZvJtWIt6d9AnENZBgmVTSyfnVA/exec";
const STOCK_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAuvHvipkM0lTWaPiX0GI8luMC9GD5NXFClaeWKWbh2yoXU549yMwQBo47VxqXAN65o0oukba7aeTE/pub?output=csv";

const PRINT_EXTRA_PRICE = 30000;

// ─── MAHSULOTLAR ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Argentina 2026 uy futbol formasi",
    team: "argentina",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/argentina-home-2026/main.webp",
    gallery: [
      "./images/products/argentina-home-2026/main.webp",
      "./images/products/argentina-home-2026/front.webp",
      "./images/products/argentina-home-2026/back.webp",
      "./images/products/argentina-home-2026/side.webp",
      "./images/products/argentina-home-2026/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 2,
    name: "Arsenal 2025/26 uy futbol formasi",
    team: "arsenal",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/arsenal-home-2025/main.webp",
    gallery: [
      "./images/products/arsenal-home-2025/main.webp",
      "./images/products/arsenal-home-2025/front.webp",
      "./images/products/arsenal-home-2025/back.webp",
      "./images/products/arsenal-home-2025/side.webp",
      "./images/products/arsenal-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 3,
    name: "Barcelona 2024/25 safar futbol formasi",
    team: "barcelona",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/barcelona-away-2024/main.webp",
    gallery: [
      "./images/products/barcelona-away-2024/main.webp",
      "./images/products/barcelona-away-2024/front.webp",
      "./images/products/barcelona-away-2024/back.webp",
      "./images/products/barcelona-away-2024/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 4,
    name: "Barcelona 2025/26 safar futbol formasi",
    team: "barcelona",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/barcelona-away-2025/main.webp",
    gallery: [
      "./images/products/barcelona-away-2025/main.webp",
      "./images/products/barcelona-away-2025/front.webp",
      "./images/products/barcelona-away-2025/back.webp",
      "./images/products/barcelona-away-2025/side.webp",
      "./images/products/barcelona-away-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 5,
    name: "Barcelona 2025/26 uy futbol formasi",
    team: "barcelona",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/barcelona-home-2025/main.webp",
    gallery: [
      "./images/products/barcelona-home-2025/main.webp",
      "./images/products/barcelona-home-2025/front.webp",
      "./images/products/barcelona-home-2025/back.webp",
      "./images/products/barcelona-home-2025/side.webp",
      "./images/products/barcelona-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 6,
    name: "Barcelona 2025/26 uchinchi futbol formasi",
    team: "barcelona",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/barcelona-third-2025/main.webp",
    gallery: [
      "./images/products/barcelona-third-2025/main.webp",
      "./images/products/barcelona-third-2025/front.webp",
      "./images/products/barcelona-third-2025/back.webp",
      "./images/products/barcelona-third-2025/side.webp",
      "./images/products/barcelona-third-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 7,
    name: "Bayern München 2025/26 uy futbol formasi",
    team: "bayern",
    category: "forma",
    price: 180000,
    oldPrice: 335000,
    image: "./images/products/bayern-home-2025/main.webp",
    gallery: [
      "./images/products/bayern-home-2025/main.webp",
      "./images/products/bayern-home-2025/front.webp",
      "./images/products/bayern-home-2025/back.webp",
      "./images/products/bayern-home-2025/side.webp",
      "./images/products/bayern-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 8,
    name: "Bayern München 2025/26 uchinchi futbol formasi",
    team: "bayern",
    category: "forma",
    price: 180000,
    oldPrice: 335000,
    image: "./images/products/bayern-third-2025/main.webp",
    gallery: [
      "./images/products/bayern-third-2025/main.webp",
      "./images/products/bayern-third-2025/front.webp",
      "./images/products/bayern-third-2025/back.webp",
      "./images/products/bayern-third-2025/side.webp",
      "./images/products/bayern-third-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 9,
    name: "Chelsea 2025/26 safar futbol formasi",
    team: "chelsea",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/chelsea-away-2025/main.webp",
    gallery: [
      "./images/products/chelsea-away-2025/main.webp",
      "./images/products/chelsea-away-2025/front.webp",
      "./images/products/chelsea-away-2025/back.webp",
      "./images/products/chelsea-away-2025/side.webp",
      "./images/products/chelsea-away-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 10,
    name: "Chelsea 2025/26 uchinchi futbol formasi",
    team: "chelsea",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/chelsea-third-2025/main.webp",
    gallery: [
      "./images/products/chelsea-third-2025/main.webp",
      "./images/products/chelsea-third-2025/front.webp",
      "./images/products/chelsea-third-2025/back.webp",
      "./images/products/chelsea-third-2025/side.webp",
      "./images/products/chelsea-third-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 11,
    name: "Inter 2025/26 safar futbol formasi",
    team: "inter",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/inter-away-2025/main.webp",
    gallery: [
      "./images/products/inter-away-2025/main.webp",
      "./images/products/inter-away-2025/front.webp",
      "./images/products/inter-away-2025/back.webp",
      "./images/products/inter-away-2025/side.webp",
      "./images/products/inter-away-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 12,
    name: "Inter 2025/26 uy futbol formasi",
    team: "inter",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/inter-home-2025/main.webp",
    gallery: [
      "./images/products/inter-home-2025/main.webp",
      "./images/products/inter-home-2025/front.webp",
      "./images/products/inter-home-2025/back.webp",
      "./images/products/inter-home-2025/side.webp",
      "./images/products/inter-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 13,
    name: "Liverpool 2025/26 uchinchi futbol formasi",
    team: "liverpool",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/liverpool-third-2025/main.webp",
    gallery: [
      "./images/products/liverpool-third-2025/main.webp",
      "./images/products/liverpool-third-2025/front.webp",
      "./images/products/liverpool-third-2025/back.webp",
      "./images/products/liverpool-third-2025/side.webp",
      "./images/products/liverpool-third-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 14,
    name: "Manchester City 2025 CWC uy futbol formasi",
    team: "mancity",
    category: "forma",
    price: 190000,
    oldPrice: 335000,
    image: "./images/products/mancity-home-cwc-2025/main.webp",
    gallery: [
      "./images/products/mancity-home-cwc-2025/main.webp",
      "./images/products/mancity-home-cwc-2025/front.webp",
      "./images/products/mancity-home-cwc-2025/back.webp",
      "./images/products/mancity-home-cwc-2025/side.webp",
      "./images/products/mancity-home-cwc-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 15,
    name: "Manchester City 2025/26 safar futbol formasi",
    team: "mancity",
    category: "forma",
    price: 180000,
    oldPrice: 335000,
    image: "./images/products/mancity-away-2025/main.webp",
    gallery: [
      "./images/products/mancity-away-2025/main.webp",
      "./images/products/mancity-away-2025/front.webp",
      "./images/products/mancity-away-2025/back.webp",
      "./images/products/mancity-away-2025/side.webp",
      "./images/products/mancity-away-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 16,
    name: "Manchester City 2025/26 uchinchi futbol formasi",
    team: "mancity",
    category: "forma",
    price: 180000,
    oldPrice: 335000,
    image: "./images/products/mancity-third-2025/main.webp",
    gallery: [
      "./images/products/mancity-third-2025/main.webp",
      "./images/products/mancity-third-2025/front.webp",
      "./images/products/mancity-third-2025/back.webp",
      "./images/products/mancity-third-2025/side.webp",
      "./images/products/mancity-third-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 17,
    name: "Manchester City 2025/26 uy futbol formasi",
    team: "mancity",
    category: "forma",
    price: 180000,
    oldPrice: 335000,
    image: "./images/products/mancity-home-2025/main.webp",
    gallery: [
      "./images/products/mancity-home-2025/main.webp",
      "./images/products/mancity-home-2025/front.webp",
      "./images/products/mancity-home-2025/back.webp",
      "./images/products/mancity-home-2025/side.webp",
      "./images/products/mancity-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 18,
    name: "Manchester United 2025/26 uy futbol formasi",
    team: "manunited",
    category: "forma",
    price: 180000,
    oldPrice: 340000,
    image: "./images/products/manunited-home-2025/main.webp",
    gallery: [
      "./images/products/manunited-home-2025/main.webp",
      "./images/products/manunited-home-2025/front.webp",
      "./images/products/manunited-home-2025/back.webp",
      "./images/products/manunited-home-2025/side.webp",
      "./images/products/manunited-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 19,
    name: "Milan 2025/26 uy futbol formasi",
    team: "milan",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/milan-home-2025/main.webp",
    gallery: [
      "./images/products/milan-home-2025/main.webp",
      "./images/products/milan-home-2025/front.webp",
      "./images/products/milan-home-2025/back.webp",
      "./images/products/milan-home-2025/side.webp",
      "./images/products/milan-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 20,
    name: "Portugaliya 2025 safar futbol formasi",
    team: "portugal",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/portugal-away-2025/main.webp",
    gallery: [
      "./images/products/portugal-away-2025/main.webp",
      "./images/products/portugal-away-2025/front.webp",
      "./images/products/portugal-away-2025/back.webp",
      "./images/products/portugal-away-2025/side.webp",
      "./images/products/portugal-away-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 21,
    name: "Portugaliya 2026 uy futbol formasi",
    team: "portugal",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/portugal-home-2026/main.webp",
    gallery: [
      "./images/products/portugal-home-2026/main.webp",
      "./images/products/portugal-home-2026/front.webp",
      "./images/products/portugal-home-2026/back.webp",
      "./images/products/portugal-home-2026/side.webp",
      "./images/products/portugal-home-2026/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 22,
    name: "PSG 2025/26 uy futbol formasi",
    team: "psg",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/psg-home-2025/main.webp",
    gallery: [
      "./images/products/psg-home-2025/main.webp",
      "./images/products/psg-home-2025/front.webp",
      "./images/products/psg-home-2025/back.webp",
      "./images/products/psg-home-2025/side.webp",
      "./images/products/psg-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 23,
    name: "PSG 2025/26 uchinchi futbol formasi",
    team: "psg",
    category: "forma",
    price: 180000,
    oldPrice: 330000,
    image: "./images/products/psg-third-2025/main.webp",
    gallery: [
      "./images/products/psg-third-2025/main.webp",
      "./images/products/psg-third-2025/front.webp",
      "./images/products/psg-third-2025/back.webp",
      "./images/products/psg-third-2025/side.webp",
      "./images/products/psg-third-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 25,
    name: "Real Madrid 2025/26 uchinchi futbol formasi – uzun yeng",
    team: "realmadrid",
    category: "forma",
    price: 190000,
    oldPrice: 340000,
    image: "./images/products/realmadrid-third-long-2025/main.webp",
    gallery: [
      "./images/products/realmadrid-third-long-2025/main.webp",
      "./images/products/realmadrid-third-long-2025/front.webp",
      "./images/products/realmadrid-third-long-2025/back.webp",
      "./images/products/realmadrid-third-long-2025/side.webp",
      "./images/products/realmadrid-third-long-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 26,
    name: "Real Madrid 2025/26 uchinchi futbol formasi – qisqa yeng",
    team: "realmadrid",
    category: "forma",
    price: 180000,
    oldPrice: 340000,
    image: "./images/products/realmadrid-third-short-2025/main.webp",
    gallery: [
      "./images/products/realmadrid-third-short-2025/main.webp",
      "./images/products/realmadrid-third-short-2025/front.webp",
      "./images/products/realmadrid-third-short-2025/back.webp",
      "./images/products/realmadrid-third-short-2025/side.webp",
      "./images/products/realmadrid-third-short-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 27,
    name: "Real Madrid 2025/26 uy futbol formasi",
    team: "realmadrid",
    category: "forma",
    price: 180000,
    oldPrice: 340000,
    image: "./images/products/realmadrid-home-2025/main.webp",
    gallery: [
      "./images/products/realmadrid-home-2025/main.webp",
      "./images/products/realmadrid-home-2025/front.webp",
      "./images/products/realmadrid-home-2025/back.webp",
      "./images/products/realmadrid-home-2025/side.webp",
      "./images/products/realmadrid-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 28,
    name: "Retro forma Real Madrid 2017/18 Ronaldo",
    team: "realmadrid",
    category: "forma",
    price: 190000,
    oldPrice: 350000,
    image: "./images/products/retro-realmadrid-ronaldo-2017/main.webp",
    gallery: [
      "./images/products/retro-realmadrid-ronaldo-2017/main.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/front.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/back.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/side.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 29,
    name: "Tottenham 2025/26 uy futbol formasi",
    team: "tottenham",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/tottenham-home-2025/main.webp",
    gallery: [
      "./images/products/tottenham-home-2025/main.webp",
      "./images/products/tottenham-home-2025/front.webp",
      "./images/products/tottenham-home-2025/back.webp",
      "./images/products/tottenham-home-2025/side.webp",
      "./images/products/tottenham-home-2025/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 30,
    name: "Retro forma Manchester United 2007/08 Ronaldo",
    team: "manunited",
    category: "forma",
    price: 190000,
    oldPrice: 350000,
    image: "./images/products/retro-manunited-ronaldo-2007/main.webp",
    gallery: [
      "./images/products/retro-manunited-ronaldo-2007/main.webp",
      "./images/products/retro-manunited-ronaldo-2007/front.webp",
      "./images/products/retro-manunited-ronaldo-2007/back.webp",
      "./images/products/retro-manunited-ronaldo-2007/side.webp",
      "./images/products/retro-manunited-ronaldo-2007/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 31,
    name: "Ispaniya 2026 uy futbol formasi",
    team: "spain",
    category: "forma",
    price: 180000,
    oldPrice: 320000,
    image: "./images/products/spain-home-2026/main.webp",
    gallery: [
      "./images/products/spain-home-2026/main.webp",
      "./images/products/spain-home-2026/front.webp",
      "./images/products/spain-home-2026/back.webp",
      "./images/products/spain-home-2026/side.webp",
      "./images/products/spain-home-2026/shorts.webp",
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 32,
    name: "Nike Mercurial",
    team: "none",
    category: "butsiy",
    price: 450000,
    oldPrice: 520000,
    image: "./images/boots/mercurial.png",
    sizes: [39, 40, 41, 42, 43],
  },
  {
    id: 33,
    name: "Adidas Predator",
    team: "none",
    category: "butsiy",
    price: 470000,
    oldPrice: 550000,
    image: "./images/boots/predator.png",
    sizes: [40, 41, 42, 43, 44],
  },
];

// ─── HOLAT ────────────────────────────────────────────────────────────────────
let currentSelectedProduct = null;
let activeTeam             = "all";
let searchQuery            = "";
let searchDebounceTimer    = null;

// ─── DOM ELEMENTLAR ───────────────────────────────────────────────────────────
const formaProductsContainer = document.getElementById("forma-products");
const bootsProductsContainer = document.getElementById("boots-products");
const bootsSection           = document.getElementById("boots-section");
const formaSection           = document.getElementById("forma-section");
const formaSectionTitle      = document.getElementById("forma-section-title");

const searchInput          = document.getElementById("search-input");
const searchClearBtn       = document.getElementById("search-clear-btn");
const searchResultsSection = document.getElementById("search-results-section");
const searchResultsGrid    = document.getElementById("search-results-grid");
const searchResultsTitle   = document.getElementById("search-results-title");

const orderModal       = document.getElementById("order-modal");
const modalCloseBtn    = document.getElementById("modal-close-btn");
const orderForm        = document.getElementById("order-form");
const orderProductInput= document.getElementById("order-product");
const orderSizeSelect  = document.getElementById("order-size");
const orderNameInput   = document.getElementById("order-name");
const orderPhoneInput  = document.getElementById("order-phone");
const orderQuantityInput=document.getElementById("order-quantity");
const orderPrintToggle = document.getElementById("order-print-toggle");
const printTextGroup   = document.getElementById("print-text-group");
const orderPrintText   = document.getElementById("order-print-text");
const orderAddress     = document.getElementById("order-address");
const orderNote        = document.getElementById("order-note");
const submitOrderBtn   = document.getElementById("submit-order-btn");
const formStatus       = document.getElementById("form-status");

// ─── YORDAMCHI ────────────────────────────────────────────────────────────────
function formatPrice(price) {
  return Number(price).toLocaleString("ru-RU") + " so'm";
}

function getDiscountPercent(oldPrice, newPrice) {
  if (!oldPrice || !newPrice || oldPrice <= newPrice) return null;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

function getTypeLabel(name) {
  const n = name.toLowerCase();
  if (n.includes("uzun yeng") || n.includes("long")) return "LONG";
  if (n.includes("qisqa yeng"))                      return "SHORT";
  if (n.includes("third") || n.includes("uchinchi")) return "3RD";
  if (n.includes("home")  || n.includes("uy"))       return "HOME";
  if (n.includes("away")  || n.includes("safar"))    return "AWAY";
  if (n.includes("retro"))                           return "RETRO";
  return "KIT";
}

// ─── STOCK YUKLASH ────────────────────────────────────────────────────────────
async function loadStockFromSheets() {
  const res     = await fetch(STOCK_SHEET_URL);
  const csvText = await res.text();
  const rows    = csvText.trim().split("\n").slice(1);
  const map     = {};
  rows.forEach((row) => {
    const cols = row.split(",");
    const name = cols[0]?.trim().replace(/^"|"$/g, "");
    const val  = Number(cols[1]);
    if (name) map[name] = Number.isNaN(val) ? 0 : val;
  });
  return map;
}

// ─── KARTA HTML ───────────────────────────────────────────────────────────────
function createProductCard(product) {
  const discount    = getDiscountPercent(product.oldPrice, product.price);
  const typeLabel   = getTypeLabel(product.name);
  const isTop       = !!product.isTop;
  const isAvailable = Number(product.stock) > 0;

  return `
    <div class="product-card ${!isAvailable ? "sold-out-card" : ""}"
         onclick="goToProduct(${product.id})">

      <div class="card-badges">
        <span class="card-badge type-badge">${typeLabel}</span>
        ${isTop ? `<span class="card-badge top-badge">🔥 TOP</span>` : ""}
      </div>

      <div class="product-image-wrap ${!isAvailable ? "sold-out-wrap" : ""}">
        <img src="${product.image}" alt="${product.name}"
             class="product-image" loading="lazy" />
        ${!isAvailable ? `<div class="sold-out-overlay">SOTUVDA QOLMADI</div>` : ""}
      </div>

      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>

        <div class="stock-badge ${!isAvailable ? "out" : ""}">
          Sotuvda: ${isAvailable ? "Bor" : "Qolmadi"}
        </div>

        <div class="price-box">
          <span class="new-price">${formatPrice(product.price)}</span>
          ${product.oldPrice
            ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
            : ""}
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
        >
          ${!isAvailable ? "Mavjud emas" : "Buyurtma berish"}
        </button>
      </div>
    </div>
  `;
}

// ─── QIDIRUV ──────────────────────────────────────────────────────────────────
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

  const results = products.filter((p) => {
    const hay = (p.name + " " + p.team).toLowerCase();
    return hay.includes(q);
  });

  if (results.length === 0) {
    searchResultsTitle.textContent = `"${query}" bo'yicha hech narsa topilmadi`;
    searchResultsGrid.innerHTML = `
      <div style="padding:40px 20px;text-align:center;
                  color:#6b7280;font-size:15px;width:100%;">
        😕 Bunday mahsulot topilmadi.<br>
        <span style="font-size:13px;">Boshqa kalit so'z bilan qidirib ko'ring.</span>
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
  searchClearBtn.classList.add("hidden");
  renderProducts(activeTeam);
  searchInput.focus();
}

function setupSearch() {
  searchInput.addEventListener("input", () => {
    clearTimeout(searchDebounceTimer);
    const val = searchInput.value;
    searchDebounceTimer = setTimeout(() => {
      searchQuery = val;
      performSearch(val);
    }, 260);
  });

  searchClearBtn.addEventListener("click", clearSearch);

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") clearSearch();
  });
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
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
  if (searchQuery.trim()) return;

  let formaList  = products.filter((p) => p.category === "forma");
  const bootsList = products.filter((p) => p.category === "butsiy");

  if (selectedTeam !== "all") {
    formaList = formaList.filter((p) => p.team === selectedTeam);
  }

  formaProductsContainer.innerHTML = formaList.length
    ? formaList.map(createProductCard).join("")
    : `<div style="padding:40px 20px;text-align:center;color:#6b7280;font-size:15px;width:100%;">
         Bu jamoa uchun hozircha forma mavjud emas.
       </div>`;

  bootsProductsContainer.innerHTML = bootsList.map(createProductCard).join("");

  if (formaSectionTitle) {
    formaSectionTitle.textContent = TEAM_LABELS[selectedTeam] || "Formalar";
  }

  bootsSection.style.display =
    selectedTeam === "all" && bootsList.length > 0 ? "" : "none";
}

// ─── JAMOA FILTRI ─────────────────────────────────────────────────────────────
function setupTeamFilter() {
  document.querySelectorAll(".team-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const team = btn.dataset.team;

      // Qidiruv bo'lsa tozala
      if (searchInput.value) {
        searchInput.value = "";
        searchQuery = "";
        searchResultsSection.classList.add("hidden");
        searchClearBtn.classList.add("hidden");
        formaSection.classList.remove("hidden");
      }

      document.querySelectorAll(".team-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      renderProducts(team);
      setupSlider("forma-products", "forma-prev", "forma-next", 5000);

      formaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ─── SLIDER ───────────────────────────────────────────────────────────────────
function setupSlider(containerId, prevBtnId, nextBtnId, interval = 5000) {
  const slider  = document.getElementById(containerId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  if (!slider || !prevBtn || !nextBtn) return;

  const cards = slider.querySelectorAll(".product-card");
  if (cards.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }
  prevBtn.style.display = "flex";
  nextBtn.style.display = "flex";

  const scroll = () => {
    const c = slider.querySelector(".product-card");
    return c ? c.offsetWidth + 20 : 280;
  };

  prevBtn.onclick = () => slider.scrollBy({ left: -scroll(), behavior: "smooth" });
  nextBtn.onclick = () => slider.scrollBy({ left:  scroll(), behavior: "smooth" });

  let timer;
  const start = () => {
    stop();
    timer = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5)
        slider.scrollTo({ left: 0, behavior: "smooth" });
      else
        slider.scrollBy({ left: scroll(), behavior: "smooth" });
    }, interval);
  };
  const stop = () => clearInterval(timer);

  start();
  [slider, prevBtn, nextBtn].forEach((el) => {
    el.onmouseenter = stop;
    el.onmouseleave = start;
  });
}

// ─── BUYURTMA MODAL ───────────────────────────────────────────────────────────
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
  const product = products.find((p) => p.id === Number(productId));
  if (!product || Number(product.stock) <= 0) return;

  currentSelectedProduct   = product;
  orderProductInput.value  = product.name;
  orderSizeSelect.innerHTML =
    `<option value="">Tanlang</option>` +
    product.sizes.map((s) => `<option value="${s}">${s}</option>`).join("");

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
orderModal.addEventListener("click", (e) => { if (e.target === orderModal) closeOrderModal(); });

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (orderModal.classList.contains("show")) closeOrderModal();
    closeDetailModal();
  }
});

orderForm.addEventListener("submit", async (e) => {
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
      method:  "POST",
      mode:    "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body:    JSON.stringify(payload),
    });
    formStatus.textContent = "✅ Buyurtma muvaffaqiyatli yuborildi!";
    formStatus.style.color = "#059669";
    orderForm.reset();
    printTextGroup.classList.add("hidden");
    refreshModalPrice();
    setTimeout(closeOrderModal, 1400);
  } catch (err) {
    console.error(err);
    formStatus.textContent = "❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.";
    formStatus.style.color = "#dc2626";
  } finally {
    submitOrderBtn.disabled    = false;
    submitOrderBtn.textContent = "Buyurtmani yuborish";
  }
});

// ─── DETAIL MODAL ─────────────────────────────────────────────────────────────
function goToProduct(productId) {
  const product = products.find((p) => p.id === Number(productId));
  if (!product) return;

  document.getElementById("detail-modal-overlay")?.remove();

  const gallery     = product.gallery?.length ? product.gallery : [product.image];
  const THUMB_LABELS= ["Asosiy", "Old", "Orqa", "Yon", "Short"];
  const discount    = getDiscountPercent(product.oldPrice, product.price);
  const isAvailable = Number(product.stock) > 0;
  const typeLabel   = getTypeLabel(product.name);

  const thumbsHTML = gallery.map((src, i) => `
    <button
      onclick="switchDetailImage('${src}',this)"
      class="detail-thumb-btn${i === 0 ? " detail-thumb-active" : ""}"
      title="${THUMB_LABELS[i] || "Rasm " + (i + 1)}"
      style="flex:0 0 auto;width:68px;height:68px;padding:4px;border-radius:10px;
             cursor:pointer;background:#f8fafc;
             border:2px solid ${i === 0 ? "#1d4ed8" : "#e5e7eb"};
             transition:border-color 0.18s;"
    >
      <img src="${src}" alt="${THUMB_LABELS[i] || ""}"
           style="width:100%;height:100%;object-fit:contain;border-radius:6px;" />
    </button>
  `).join("");

  const overlay = document.createElement("div");
  overlay.id = "detail-modal-overlay";
  overlay.style.cssText =
    "position:fixed;inset:0;background:rgba(15,23,42,0.65);" +
    "display:flex;align-items:flex-start;justify-content:center;" +
    "padding:20px;z-index:200;overflow-y:auto;";
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeDetailModal(); });

  overlay.innerHTML = `
    <div style="width:min(900px,100%);background:#fff;border-radius:24px;
                padding:28px;position:relative;margin:auto;">

      <button onclick="closeDetailModal()" style="
        position:absolute;top:16px;right:16px;width:42px;height:42px;
        border-radius:50%;background:#f3f4f6;font-size:26px;border:none;
        cursor:pointer;display:flex;align-items:center;justify-content:center;
        color:#111827;z-index:10;">×</button>

      <div id="detail-grid" style="display:grid;grid-template-columns:1.15fr 1fr;
                                    gap:28px;align-items:start;">

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
            ${gallery.map((_, i) => `
              <span style="font-size:11px;font-weight:700;color:#9ca3af;
                           width:68px;text-align:center;">
                ${THUMB_LABELS[i] || ""}
              </span>`).join("")}
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
            ✅ Orqasiga ism/raqam yozdirish mumkin<br>
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
  document.querySelectorAll(".detail-thumb-btn").forEach((b) => {
    b.style.borderColor = "#e5e7eb";
  });
  btn.style.borderColor = "#1d4ed8";
}

function closeDetailModal() {
  const el = document.getElementById("detail-modal-overlay");
  if (el) { el.remove(); document.body.style.overflow = ""; }
}

// ─── QIDIRUV + LOGO STILLARI (dinamik inject) ─────────────────────────────────
(function injectStyles() {
  const s = document.createElement("style");
  s.textContent = `
    .search-wrap {
      position: relative;
      display: flex;
      align-items: center;
      max-width: 560px;
    }
    .search-icon {
      position: absolute;
      left: 16px;
      font-size: 16px;
      pointer-events: none;
    }
    .search-input {
      width: 100%;
      padding: 14px 48px 14px 46px;
      border: 1.5px solid #e5e7eb;
      border-radius: 14px;
      font-size: 15px;
      font-family: inherit;
      color: #111827;
      background: #fff;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-input:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
    }
    .search-clear {
      position: absolute;
      right: 12px;
      background: #f3f4f6;
      border: none;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6b7280;
      transition: background 0.18s;
      line-height: 1;
    }
    .search-clear:hover { background: #e5e7eb; }
    .team-logo {
      width: 26px;
      height: 26px;
      object-fit: contain;
      flex-shrink: 0;
    }
    .products-grid-static {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 4px 0 10px;
    }
    .products-grid-static .product-card { flex: 0 0 260px; }
    .hidden { display: none !important; }
    @media (max-width: 768px) {
      .products-grid-static .product-card { flex: 0 0 220px; }
      .search-input { font-size: 14px; }
    }
    @media (max-width: 480px) {
      .products-grid-static .product-card {
        flex: 0 0 calc(50% - 10px);
        min-width: 150px;
      }
    }
  `;
  document.head.appendChild(s);
})();

// ─── INIT ─────────────────────────────────────────────────────────────────────
async function initApp() {
  try {
    const stockMap = await loadStockFromSheets();
    products.forEach((p) => { p.stock = stockMap[p.name] ?? 0; });
  } catch (err) {
    console.error("Sheets yuklanmadi:", err);
    products.forEach((p) => { p.stock = 0; });
  }

  renderProducts();
  setupTeamFilter();
  setupSearch();
  setupSlider("forma-products", "forma-prev", "forma-next", 5000);
  setupSlider("boots-products", "boots-prev", "boots-next", 6000);
}

initApp();
