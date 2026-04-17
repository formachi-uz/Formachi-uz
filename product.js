const ORDER_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpMa6YPk2dZtGPXXTtU1Kg91YuAkVksM_pFTPcj_NUZvJtWIt6d9AnENZBgmVTSyfnVA/exec";

const STOCK_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAuvHvipkM0lTWaPiX0GI8luMC9GD5NXFClaeWKWbh2yoXU549yMwQBo47VxqXAN65o0oukba7aeTE/pub?output=csv";

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
      "./images/products/argentina-home-2026/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/arsenal-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/barcelona-away-2024/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/barcelona-away-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/barcelona-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/barcelona-third-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/bayern-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/bayern-third-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/chelsea-away-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/chelsea-third-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/inter-away-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/inter-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/liverpool-third-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/mancity-home-cwc-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/mancity-away-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/mancity-third-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/mancity-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/manunited-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/milan-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/portugal-away-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/portugal-home-2026/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/psg-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/psg-third-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/realmadrid-third-long-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/realmadrid-third-short-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/realmadrid-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/retro-realmadrid-ronaldo-2017/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/tottenham-home-2025/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/retro-manunited-ronaldo-2007/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
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
      "./images/products/spain-home-2026/shorts.webp"
    ],
    sizes: ["M", "L", "XL"]
  },

  {
    id: 32,
    name: "Nike Mercurial",
    team: "none",
    category: "butsiy",
    price: 450000,
    oldPrice: 520000,
    image: "./images/boots/mercurial.png",
    sizes: [39, 40, 41, 42, 43]
  },
  {
    id: 33,
    name: "Adidas Predator",
    team: "none",
    category: "butsiy",
    price: 470000,
    oldPrice: 550000,
    image: "./images/boots/predator.png",
    sizes: [40, 41, 42, 43, 44]
  }
];

const formaProductsContainer = document.getElementById("forma-products");
const bootsProductsContainer = document.getElementById("boots-products");
const bootsSection = document.getElementById("boots-section");

const orderModal = document.getElementById("order-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const orderForm = document.getElementById("order-form");
const orderProductInput = document.getElementById("order-product");
const orderSizeSelect = document.getElementById("order-size");
const orderNameInput = document.getElementById("order-name");
const orderPhoneInput = document.getElementById("order-phone");
const orderQuantityInput = document.getElementById("order-quantity");
const orderPrintToggle = document.getElementById("order-print-toggle");
const printTextGroup = document.getElementById("print-text-group");
const orderPrintText = document.getElementById("order-print-text");
const orderAddress = document.getElementById("order-address");
const orderNote = document.getElementById("order-note");
const submitOrderBtn = document.getElementById("submit-order-btn");
const formStatus = document.getElementById("form-status");

let currentSelectedProduct = null;

function formatPrice(price) {
  return Number(price).toLocaleString("ru-RU") + " so'm";
}

function getDiscountPercent(oldPrice, newPrice) {
  if (!oldPrice || !newPrice || oldPrice <= newPrice) return null;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

async function loadStockFromSheets() {
  const response = await fetch(STOCK_SHEET_URL);
  const csvText = await response.text();

  const rows = csvText.trim().split("\n").slice(1);
  const stockMap = {};

  rows.forEach((row) => {
    const cols = row.split(",");
    const productName = cols[0]?.trim().replace(/^"|"$/g, "");
    const stockValue = Number(cols[1]);

    if (productName) {
      stockMap[productName] = Number.isNaN(stockValue) ? 0 : stockValue;
    }
  });

  return stockMap;
}

function getTypeLabel(productName) {
  const lowerName = productName.toLowerCase();

  if (lowerName.includes("uzun yeng") || lowerName.includes("long")) return "LONG";
  if (lowerName.includes("qisqa yeng")) return "SHORT";
  if (lowerName.includes("third") || lowerName.includes("uchinchi")) return "3RD";
  if (lowerName.includes("home") || lowerName.includes("uy")) return "HOME";
  if (lowerName.includes("away") || lowerName.includes("safar")) return "AWAY";
  if (lowerName.includes("retro")) return "RETRO";

  return "KIT";
}

function createProductCard(product) {
  const discount = getDiscountPercent(product.oldPrice, product.price);
  const typeLabel = getTypeLabel(product.name);
  const isTop = !!product.isTop;
  const isAvailable = Number(product.stock) > 0;
  const stockStatus = isAvailable ? "Bor" : "Qolmadi";

  return `
    <div class="product-card ${!isAvailable ? "sold-out-card" : ""}" onclick="goToProduct(${product.id})">
      <div class="card-badges">
        <span class="card-badge type-badge">${typeLabel}</span>
        ${isTop ? `<span class="card-badge top-badge">🔥 TOP</span>` : ""}
      </div>

      <div class="product-image-wrap ${!isAvailable ? "sold-out-wrap" : ""}">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        ${!isAvailable ? `<div class="sold-out-overlay">SOTUVDA QOLMADI</div>` : ""}
      </div>

      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>

        <div class="stock-badge ${!isAvailable ? "out" : ""}">
          Sotuvda: ${stockStatus}
        </div>

        <div class="price-box">
          <span class="new-price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
        </div>

        ${discount ? `<div class="discount-badge">-${discount}% chegirma</div>` : ""}

        <div class="delivery-badge">🚚 1-2 kun ichida yetkaziladi</div>

        <p class="product-meta">Razmerlar: ${product.sizes.join(", ")}</p>

        <button
          class="order-btn ${!isAvailable ? "disabled" : ""}"
          data-order-id="${product.id}"
          ${!isAvailable ? "disabled" : ""}
        >
          ${!isAvailable ? "Mavjud emas" : "Buyurtma berish"}
        </button>
      </div>
    </div>
  `;
}
function goToProduct(productId) {
  window.location.href = `./product.html?id=${productId}`;
}

function renderProducts(selectedTeam = "all") {
  let formaProducts = products.filter((product) => product.category === "forma");
  const bootsProducts = products.filter((product) => product.category === "butsiy");

  if (selectedTeam !== "all") {
    formaProducts = formaProducts.filter((product) => product.team === selectedTeam);
  }

  formaProductsContainer.innerHTML = formaProducts.map(createProductCard).join("");
  bootsProductsContainer.innerHTML = bootsProducts.map(createProductCard).join("");

  if (bootsProducts.length === 0) {
    bootsSection.style.display = "none";
  }

  setupOrderButtons();
}

function setupTeamFilter() {
  const teamButtons = document.querySelectorAll(".team-btn");

  teamButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTeam = button.dataset.team;

      teamButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      renderProducts(selectedTeam);
      setupSlider("forma-products", "forma-prev", "forma-next", 5000);
    });
  });
}

function setupSlider(containerId, prevBtnId, nextBtnId, autoInterval = 5000) {
  const slider = document.getElementById(containerId);
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

  const getScrollAmount = () => {
    const firstCard = slider.querySelector(".product-card");
    if (!firstCard) return 280;
    return firstCard.offsetWidth + 20;
  };

  prevBtn.onclick = () => {
    slider.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  };

  nextBtn.onclick = () => {
    slider.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };

  let autoSlideInterval;

  function startAutoSlide() {
    stopAutoSlide();

    autoSlideInterval = setInterval(() => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScrollLeft - 5) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: getScrollAmount(),
          behavior: "smooth",
        });
      }
    }, autoInterval);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  startAutoSlide();

  slider.onmouseenter = stopAutoSlide;
  slider.onmouseleave = startAutoSlide;
  prevBtn.onmouseenter = stopAutoSlide;
  nextBtn.onmouseenter = stopAutoSlide;
  prevBtn.onmouseleave = startAutoSlide;
  nextBtn.onmouseleave = startAutoSlide;
}

function openOrderModal(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product || Number(product.stock) <= 0) return;

  currentSelectedProduct = product;

  orderProductInput.value = product.name;
  orderSizeSelect.innerHTML =
    `<option value="">Tanlang</option>` +
    product.sizes.map((size) => `<option value="${size}">${size}</option>`).join("");

  orderQuantityInput.value = 1;
  orderPrintToggle.checked = false;
  printTextGroup.classList.add("hidden");
  orderPrintText.value = "";
  formStatus.textContent = "";

  orderModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  orderModal.classList.remove("show");
  document.body.style.overflow = "";
}

function setupOrderButtons() {
  const orderButtons = document.querySelectorAll(".order-btn");

  orderButtons.forEach((button) => {
    if (button.disabled) return;

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const productId = button.dataset.orderId;
      openOrderModal(productId);
    });
  });
}

orderPrintToggle.addEventListener("change", () => {
  if (orderPrintToggle.checked) {
    printTextGroup.classList.remove("hidden");
  } else {
    printTextGroup.classList.add("hidden");
    orderPrintText.value = "";
  }
});

modalCloseBtn.addEventListener("click", closeOrderModal);

orderModal.addEventListener("click", (event) => {
  if (event.target === orderModal) {
    closeOrderModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && orderModal.classList.contains("show")) {
    closeOrderModal();
  }
});

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!currentSelectedProduct) return;

  const payload = {
    productId: currentSelectedProduct.id,
    productName: currentSelectedProduct.name,
    category: currentSelectedProduct.category,
    price: currentSelectedProduct.price,
    name: orderNameInput.value.trim(),
    phone: orderPhoneInput.value.trim(),
    size: orderSizeSelect.value,
    quantity: orderQuantityInput.value,
    printNeeded: orderPrintToggle.checked ? "Ha" : "Yo'q",
    printText: orderPrintText.value.trim(),
    address: orderAddress.value.trim(),
    note: orderNote.value.trim(),
  };

  if (!payload.name || !payload.phone || !payload.size || !payload.address) {
    formStatus.textContent = "Majburiy maydonlarni to‘ldiring.";
    return;
  }

  submitOrderBtn.disabled = true;
  submitOrderBtn.textContent = "Yuborilmoqda...";
  formStatus.textContent = "Buyurtma yuborilmoqda...";

  try {
    await fetch(ORDER_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    formStatus.textContent = "Buyurtma yuborildi. Telegram va Sheetni tekshiring.";
    orderForm.reset();
    printTextGroup.classList.add("hidden");

    setTimeout(() => {
      closeOrderModal();
    }, 1200);
  } catch (error) {
    console.error(error);
    formStatus.textContent = "Yuborishda xatolik bo‘ldi.";
  } finally {
    submitOrderBtn.disabled = false;
    submitOrderBtn.textContent = "Buyurtmani yuborish";
  }
});

async function initApp() {
  try {
    const stockMap = await loadStockFromSheets();

    products.forEach((product) => {
      product.stock = stockMap[product.name] ?? 0;
    });
  } catch (error) {
    console.error("Sheets stock yuklanmadi:", error);
    products.forEach((product) => {
      product.stock = 0;
    });
  }

  renderProducts();
  setupTeamFilter();
  setupSlider("forma-products", "forma-prev", "forma-next", 5000);
  setupSlider("boots-products", "boots-prev", "boots-next", 6000);
}

initApp();
