/* products-data.js — index.html va product.html ikkisida ham ishlatiladi */

const PRINT_EXTRA_PRICE = 30000;

const ORDER_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpMa6YPk2dZtGPXXTtU1Kg91YuAkVksM_pFTPcj_NUZvJtWIt6d9AnENZBgmVTSyfnVA/exec";
const STOCK_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAuvHvipkM0lTWaPiX0GI8luMC9GD5NXFClaeWKWbh2yoXU549yMwQBo47VxqXAN65o0oukba7aeTE/pub?output=csv";

const products = [
  {
    id: 1, name: "Argentina 2026 uy futbol formasi", team: "argentina",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/argentina-home-2026/main.webp",
    gallery: [
      "./images/products/argentina-home-2026/main.webp",
      "./images/products/argentina-home-2026/front.webp",
      "./images/products/argentina-home-2026/back.webp",
      "./images/products/argentina-home-2026/side.webp",
      "./images/products/argentina-home-2026/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 2, name: "Arsenal 2025/26 uy futbol formasi", team: "arsenal",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/arsenal-home-2025/main.webp",
    gallery: [
      "./images/products/arsenal-home-2025/main.webp",
      "./images/products/arsenal-home-2025/front.webp",
      "./images/products/arsenal-home-2025/back.webp",
      "./images/products/arsenal-home-2025/side.webp",
      "./images/products/arsenal-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 3, name: "Barcelona 2024/25 safar futbol formasi", team: "barcelona",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/barcelona-away-2024/main.webp",
    gallery: [
      "./images/products/barcelona-away-2024/main.webp",
      "./images/products/barcelona-away-2024/front.webp",
      "./images/products/barcelona-away-2024/back.webp",
      "./images/products/barcelona-away-2024/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 4, name: "Barcelona 2025/26 safar futbol formasi", team: "barcelona",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/barcelona-away-2025/main.webp",
    gallery: [
      "./images/products/barcelona-away-2025/main.webp",
      "./images/products/barcelona-away-2025/front.webp",
      "./images/products/barcelona-away-2025/back.webp",
      "./images/products/barcelona-away-2025/side.webp",
      "./images/products/barcelona-away-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 5, name: "Barcelona 2025/26 uy futbol formasi", team: "barcelona",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/barcelona-home-2025/main.webp",
    gallery: [
      "./images/products/barcelona-home-2025/main.webp",
      "./images/products/barcelona-home-2025/front.webp",
      "./images/products/barcelona-home-2025/back.webp",
      "./images/products/barcelona-home-2025/side.webp",
      "./images/products/barcelona-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 6, name: "Barcelona 2025/26 uchinchi futbol formasi", team: "barcelona",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/barcelona-third-2025/main.webp",
    gallery: [
      "./images/products/barcelona-third-2025/main.webp",
      "./images/products/barcelona-third-2025/front.webp",
      "./images/products/barcelona-third-2025/back.webp",
      "./images/products/barcelona-third-2025/side.webp",
      "./images/products/barcelona-third-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 7, name: "Bayern München 2025/26 uy futbol formasi", team: "bayern",
    category: "forma", price: 180000, oldPrice: 335000,
    image: "./images/products/bayern-home-2025/main.webp",
    gallery: [
      "./images/products/bayern-home-2025/main.webp",
      "./images/products/bayern-home-2025/front.webp",
      "./images/products/bayern-home-2025/back.webp",
      "./images/products/bayern-home-2025/side.webp",
      "./images/products/bayern-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 8, name: "Bayern München 2025/26 uchinchi futbol formasi", team: "bayern",
    category: "forma", price: 180000, oldPrice: 335000,
    image: "./images/products/bayern-third-2025/main.webp",
    gallery: [
      "./images/products/bayern-third-2025/main.webp",
      "./images/products/bayern-third-2025/front.webp",
      "./images/products/bayern-third-2025/back.webp",
      "./images/products/bayern-third-2025/side.webp",
      "./images/products/bayern-third-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 9, name: "Chelsea 2025/26 safar futbol formasi", team: "chelsea",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/chelsea-away-2025/main.webp",
    gallery: [
      "./images/products/chelsea-away-2025/main.webp",
      "./images/products/chelsea-away-2025/front.webp",
      "./images/products/chelsea-away-2025/back.webp",
      "./images/products/chelsea-away-2025/side.webp",
      "./images/products/chelsea-away-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 10, name: "Chelsea 2025/26 uchinchi futbol formasi", team: "chelsea",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/chelsea-third-2025/main.webp",
    gallery: [
      "./images/products/chelsea-third-2025/main.webp",
      "./images/products/chelsea-third-2025/front.webp",
      "./images/products/chelsea-third-2025/back.webp",
      "./images/products/chelsea-third-2025/side.webp",
      "./images/products/chelsea-third-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 11, name: "Inter 2025/26 safar futbol formasi", team: "inter",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/inter-away-2025/main.webp",
    gallery: [
      "./images/products/inter-away-2025/main.webp",
      "./images/products/inter-away-2025/front.webp",
      "./images/products/inter-away-2025/back.webp",
      "./images/products/inter-away-2025/side.webp",
      "./images/products/inter-away-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 12, name: "Inter 2025/26 uy futbol formasi", team: "inter",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/inter-home-2025/main.webp",
    gallery: [
      "./images/products/inter-home-2025/main.webp",
      "./images/products/inter-home-2025/front.webp",
      "./images/products/inter-home-2025/back.webp",
      "./images/products/inter-home-2025/side.webp",
      "./images/products/inter-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 13, name: "Liverpool 2025/26 uchinchi futbol formasi", team: "liverpool",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/liverpool-third-2025/main.webp",
    gallery: [
      "./images/products/liverpool-third-2025/main.webp",
      "./images/products/liverpool-third-2025/front.webp",
      "./images/products/liverpool-third-2025/back.webp",
      "./images/products/liverpool-third-2025/side.webp",
      "./images/products/liverpool-third-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 14, name: "Manchester City 2025 CWC uy futbol formasi", team: "mancity",
    category: "forma", price: 190000, oldPrice: 335000,
    image: "./images/products/mancity-home-cwc-2025/main.webp",
    gallery: [
      "./images/products/mancity-home-cwc-2025/main.webp",
      "./images/products/mancity-home-cwc-2025/front.webp",
      "./images/products/mancity-home-cwc-2025/back.webp",
      "./images/products/mancity-home-cwc-2025/side.webp",
      "./images/products/mancity-home-cwc-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 15, name: "Manchester City 2025/26 safar futbol formasi", team: "mancity",
    category: "forma", price: 180000, oldPrice: 335000,
    image: "./images/products/mancity-away-2025/main.webp",
    gallery: [
      "./images/products/mancity-away-2025/main.webp",
      "./images/products/mancity-away-2025/front.webp",
      "./images/products/mancity-away-2025/back.webp",
      "./images/products/mancity-away-2025/side.webp",
      "./images/products/mancity-away-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 16, name: "Manchester City 2025/26 uchinchi futbol formasi", team: "mancity",
    category: "forma", price: 180000, oldPrice: 335000,
    image: "./images/products/mancity-third-2025/main.webp",
    gallery: [
      "./images/products/mancity-third-2025/main.webp",
      "./images/products/mancity-third-2025/front.webp",
      "./images/products/mancity-third-2025/back.webp",
      "./images/products/mancity-third-2025/side.webp",
      "./images/products/mancity-third-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 17, name: "Manchester City 2025/26 uy futbol formasi", team: "mancity",
    category: "forma", price: 180000, oldPrice: 335000,
    image: "./images/products/mancity-home-2025/main.webp",
    gallery: [
      "./images/products/mancity-home-2025/main.webp",
      "./images/products/mancity-home-2025/front.webp",
      "./images/products/mancity-home-2025/back.webp",
      "./images/products/mancity-home-2025/side.webp",
      "./images/products/mancity-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 18, name: "Manchester United 2025/26 uy futbol formasi", team: "manunited",
    category: "forma", price: 180000, oldPrice: 340000,
    image: "./images/products/manunited-home-2025/main.webp",
    gallery: [
      "./images/products/manunited-home-2025/main.webp",
      "./images/products/manunited-home-2025/front.webp",
      "./images/products/manunited-home-2025/back.webp",
      "./images/products/manunited-home-2025/side.webp",
      "./images/products/manunited-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 19, name: "Milan 2025/26 uy futbol formasi", team: "milan",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/milan-home-2025/main.webp",
    gallery: [
      "./images/products/milan-home-2025/main.webp",
      "./images/products/milan-home-2025/front.webp",
      "./images/products/milan-home-2025/back.webp",
      "./images/products/milan-home-2025/side.webp",
      "./images/products/milan-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 20, name: "Portugaliya 2025 safar futbol formasi", team: "portugal",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/portugal-away-2025/main.webp",
    gallery: [
      "./images/products/portugal-away-2025/main.webp",
      "./images/products/portugal-away-2025/front.webp",
      "./images/products/portugal-away-2025/back.webp",
      "./images/products/portugal-away-2025/side.webp",
      "./images/products/portugal-away-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 21, name: "Portugaliya 2026 uy futbol formasi", team: "portugal",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/portugal-home-2026/main.webp",
    gallery: [
      "./images/products/portugal-home-2026/main.webp",
      "./images/products/portugal-home-2026/front.webp",
      "./images/products/portugal-home-2026/back.webp",
      "./images/products/portugal-home-2026/side.webp",
      "./images/products/portugal-home-2026/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 22, name: "PSG 2025/26 uy futbol formasi", team: "psg",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/psg-home-2025/main.webp",
    gallery: [
      "./images/products/psg-home-2025/main.webp",
      "./images/products/psg-home-2025/front.webp",
      "./images/products/psg-home-2025/back.webp",
      "./images/products/psg-home-2025/side.webp",
      "./images/products/psg-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 23, name: "PSG 2025/26 uchinchi futbol formasi", team: "psg",
    category: "forma", price: 180000, oldPrice: 330000,
    image: "./images/products/psg-third-2025/main.webp",
    gallery: [
      "./images/products/psg-third-2025/main.webp",
      "./images/products/psg-third-2025/front.webp",
      "./images/products/psg-third-2025/back.webp",
      "./images/products/psg-third-2025/side.webp",
      "./images/products/psg-third-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 25, name: "Real Madrid 2025/26 uchinchi futbol formasi – uzun yeng", team: "realmadrid",
    category: "forma", price: 190000, oldPrice: 340000,
    image: "./images/products/realmadrid-third-long-2025/main.webp",
    gallery: [
      "./images/products/realmadrid-third-long-2025/main.webp",
      "./images/products/realmadrid-third-long-2025/front.webp",
      "./images/products/realmadrid-third-long-2025/back.webp",
      "./images/products/realmadrid-third-long-2025/side.webp",
      "./images/products/realmadrid-third-long-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 26, name: "Real Madrid 2025/26 uchinchi futbol formasi – qisqa yeng", team: "realmadrid",
    category: "forma", price: 180000, oldPrice: 340000,
    image: "./images/products/realmadrid-third-short-2025/main.webp",
    gallery: [
      "./images/products/realmadrid-third-short-2025/main.webp",
      "./images/products/realmadrid-third-short-2025/front.webp",
      "./images/products/realmadrid-third-short-2025/back.webp",
      "./images/products/realmadrid-third-short-2025/side.webp",
      "./images/products/realmadrid-third-short-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 27, name: "Real Madrid 2025/26 uy futbol formasi", team: "realmadrid",
    category: "forma", price: 180000, oldPrice: 340000,
    image: "./images/products/realmadrid-home-2025/main.webp",
    gallery: [
      "./images/products/realmadrid-home-2025/main.webp",
      "./images/products/realmadrid-home-2025/front.webp",
      "./images/products/realmadrid-home-2025/back.webp",
      "./images/products/realmadrid-home-2025/side.webp",
      "./images/products/realmadrid-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 28, name: "Retro forma Real Madrid 2017/18 Ronaldo", team: "realmadrid",
    category: "forma", price: 190000, oldPrice: 350000,
    image: "./images/products/retro-realmadrid-ronaldo-2017/main.webp",
    gallery: [
      "./images/products/retro-realmadrid-ronaldo-2017/main.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/front.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/back.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/side.webp",
      "./images/products/retro-realmadrid-ronaldo-2017/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 29, name: "Tottenham 2025/26 uy futbol formasi", team: "tottenham",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/tottenham-home-2025/main.webp",
    gallery: [
      "./images/products/tottenham-home-2025/main.webp",
      "./images/products/tottenham-home-2025/front.webp",
      "./images/products/tottenham-home-2025/back.webp",
      "./images/products/tottenham-home-2025/side.webp",
      "./images/products/tottenham-home-2025/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 30, name: "Retro forma Manchester United 2007/08 Ronaldo", team: "manunited",
    category: "forma", price: 190000, oldPrice: 350000,
    image: "./images/products/retro-manunited-ronaldo-2007/main.webp",
    gallery: [
      "./images/products/retro-manunited-ronaldo-2007/main.webp",
      "./images/products/retro-manunited-ronaldo-2007/front.webp",
      "./images/products/retro-manunited-ronaldo-2007/back.webp",
      "./images/products/retro-manunited-ronaldo-2007/side.webp",
      "./images/products/retro-manunited-ronaldo-2007/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 31, name: "Ispaniya 2026 uy futbol formasi", team: "spain",
    category: "forma", price: 180000, oldPrice: 320000,
    image: "./images/products/spain-home-2026/main.webp",
    gallery: [
      "./images/products/spain-home-2026/main.webp",
      "./images/products/spain-home-2026/front.webp",
      "./images/products/spain-home-2026/back.webp",
      "./images/products/spain-home-2026/side.webp",
      "./images/products/spain-home-2026/shorts.webp",
    ],
    sizes: ["M","L","XL"],
  },
  {
    id: 32, name: "Nike Mercurial", team: "none",
    category: "butsiy", price: 450000, oldPrice: 520000,
    image: "./images/boots/mercurial.png",
    sizes: [39,40,41,42,43],
  },
  {
    id: 33, name: "Adidas Predator", team: "none",
    category: "butsiy", price: 470000, oldPrice: 550000,
    image: "./images/boots/predator.png",
    sizes: [40,41,42,43,44],
  },
];

/* shared helpers */
function formatPrice(p) { return Number(p).toLocaleString("ru-RU") + " so'm"; }

function getDiscountPercent(old, nw) {
  if (!old || !nw || old <= nw) return null;
  return Math.round(((old - nw) / old) * 100);
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