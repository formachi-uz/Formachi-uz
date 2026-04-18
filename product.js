/* ═══════════════════════════════════════════════════════
   product.js  —  Product detail page logic
   Requires: products-data.js loaded before this file
   ═══════════════════════════════════════════════════════ */

/* ── STATE ───────────────────────────────────────────── */
let currentProduct   = null;
let selectedSize     = null;
let personalizeOn    = false;
let currentMainSrc   = "";

/* ── STOCK FETCH ─────────────────────────────────────── */
async function fetchStock(productName) {
  try {
    const res  = await fetch(STOCK_SHEET_URL);
    const csv  = await res.text();
    const rows = csv.trim().split("\n").slice(1);
    for (const row of rows) {
      const cols = row.split(",");
      const name = cols[0]?.trim().replace(/^"|"$/g, "");
      if (name === productName) return Number(cols[1]) || 0;
    }
  } catch (_) { /* silent */ }
  return null; /* null = unknown */
}

/* ── PRICE HELPERS ───────────────────────────────────── */
function getFinalPrice() {
  if (!currentProduct) return 0;
  return currentProduct.price + (personalizeOn ? PRINT_EXTRA_PRICE : 0);
}

function renderFinalPriceNote() {
  const note = document.getElementById("pd-final-note");
  const mobV = document.getElementById("mob-price-display");
  const modV = document.getElementById("modal-price-display");
  if (!note) return;

  const final = getFinalPrice();
  const base  = currentProduct.price;

  if (personalizeOn) {
    note.textContent = `Jami: ${formatPrice(final)}  (${formatPrice(base)} + ism yozish +${formatPrice(PRINT_EXTRA_PRICE)})`;
    note.style.color = "#059669";
  } else {
    note.textContent = "";
  }

  if (mobV) mobV.textContent = formatPrice(final);
  if (modV) {
    modV.innerHTML = personalizeOn
      ? `<span style="color:#dc2626;">${formatPrice(final)}</span>
         <span style="font-size:13px;color:#059669;font-weight:700;margin-left:6px;">
           (${formatPrice(base)} + ism: +${formatPrice(PRINT_EXTRA_PRICE)})
         </span>`
      : `<span style="color:#dc2626;">${formatPrice(final)}</span>`;
  }
}

/* ── THUMBNAIL SWITCH ────────────────────────────────── */
function switchMainImage(src, thumbEl) {
  if (src === currentMainSrc) return;
  currentMainSrc = src;

  const mainImg = document.getElementById("pd-main-img");
  if (!mainImg) return;

  mainImg.classList.add("fading");
  setTimeout(() => {
    mainImg.src = src;
    mainImg.classList.remove("fading");
  }, 160);

  // Update active thumb
  document.querySelectorAll(".pd-thumb").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

/* ── ZOOM ────────────────────────────────────────────── */
function setupZoom(wrap) {
  wrap.addEventListener("click", () => {
    wrap.classList.toggle("zoomed");
  });

  // On desktop: follow mouse when zoomed
  wrap.addEventListener("mousemove", e => {
    if (!wrap.classList.contains("zoomed")) return;
    const rect = wrap.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width)  * 100;
    const yPct = ((e.clientY - rect.top)  / rect.height) * 100;
    const img  = wrap.querySelector(".pd-main-img");
    if (img) img.style.transformOrigin = `${xPct}% ${yPct}%`;
  });

  wrap.addEventListener("mouseleave", () => {
    wrap.classList.remove("zoomed");
    const img = wrap.querySelector(".pd-main-img");
    if (img) img.style.transformOrigin = "center center";
  });
}

/* ── SIZE BUTTONS ────────────────────────────────────── */
function selectSize(size, btnEl) {
  selectedSize = size;
  document.querySelectorAll(".pd-size-btn").forEach(b => b.classList.remove("pd-size-active"));
  btnEl.classList.add("pd-size-active");
  // Hide error
  const err = document.getElementById("pd-size-error");
  if (err) err.classList.remove("show");
}

/* ── PERSONALIZATION TOGGLE ──────────────────────────── */
function setupPersonalize() {
  const toggle = document.getElementById("pd-personalize-toggle");
  const inputW = document.getElementById("pd-personalize-input-wrap");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    personalizeOn = !personalizeOn;
    toggle.classList.toggle("checked", personalizeOn);
    inputW?.classList.toggle("show", personalizeOn);
    renderFinalPriceNote();
  });
}

/* ── ORDER: prefill modal then open ─────────────────── */
function triggerOrder() {
  if (!currentProduct) return;

  if (!selectedSize) {
    const err = document.getElementById("pd-size-error");
    if (err) { err.classList.add("show"); }
    document.getElementById("pd-sizes")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // Pre-fill modal fields
  const nameInput = document.getElementById("order-product");
  const sizeEl    = document.getElementById("order-size");
  const toggle    = document.getElementById("order-print-toggle");
  const textGrp   = document.getElementById("print-text-group");
  const printInp  = document.getElementById("order-print-text");

  if (nameInput) nameInput.value = currentProduct.name;
  if (sizeEl) {
    sizeEl.innerHTML =
      `<option value="">Tanlang</option>` +
      currentProduct.sizes.map(s =>
        `<option value="${s}" ${s == selectedSize ? "selected" : ""}>${s}</option>`
      ).join("");
    sizeEl.value = selectedSize;
  }
  if (toggle) {
    toggle.checked = personalizeOn;
    textGrp?.classList.toggle("hidden", !personalizeOn);
    if (!personalizeOn && printInp) printInp.value = "";
  }

  const qty = document.getElementById("order-quantity");
  if (qty) qty.value = 1;

  renderFinalPriceNote();

  const modal = document.getElementById("order-modal");
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

/* ── RENDER NOT FOUND ────────────────────────────────── */
function renderNotFound() {
  const content = document.getElementById("pd-content");
  if (!content) return;
  content.innerHTML = `
    <div class="pd-not-found">
      <h2>Mahsulot topilmadi</h2>
      <p>Ushbu mahsulot mavjud emas yoki o'chirib tashlangan.</p>
      <a href="index.html" class="pd-back" style="margin-top:20px;display:inline-flex;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             style="width:16px;height:16px;">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Bosh sahifaga qaytish
      </a>
    </div>`;
}

/* ── RENDER PRODUCT PAGE ─────────────────────────────── */
function renderProduct(product, stock) {
  const content     = document.getElementById("pd-content");
  if (!content) return;

  currentProduct = product;
  const isAvailable = stock === null ? true : stock > 0; // null=loading→treat as available
  const gallery     = product.gallery?.length ? product.gallery : [product.image];
  const LABELS      = ["Asosiy", "Old", "Orqa", "Yon", "Short"];
  const discount    = getDiscountPercent(product.oldPrice, product.price);
  const typeLabel   = getTypeLabel(product.name);

  currentMainSrc = gallery[0];

  /* Document title */
  document.title = `${product.name} — Formachi`;

  /* Thumbnails HTML */
  const thumbsHTML = gallery.map((src, i) => `
    <button
      class="pd-thumb ${i === 0 ? "active" : ""}"
      onclick="switchMainImage('${src}', this)"
      title="${LABELS[i] || "Rasm " + (i+1)}"
    >
      <img src="${src}" alt="${LABELS[i] || ""}" loading="lazy" />
    </button>
  `).join("");

  const thumbLabelsHTML = gallery.map((_, i) =>
    `<span class="pd-thumb-label">${LABELS[i] || ""}</span>`
  ).join("");

  /* Size buttons */
  const sizesHTML = product.sizes.map(s => `
    <button
      class="pd-size-btn"
      onclick="selectSize('${s}', this)"
    >${s}</button>
  `).join("");

  /* Sold-out overlay */
  const soldOverlay = !isAvailable
    ? `<div class="pd-sold-overlay">SOTUVDA QOLMADI</div>`
    : "";

  /* Main HTML */
  content.innerHTML = `
    <div class="pd-card">
      <div class="pd-grid">

        <!-- ── LEFT: GALLERY ── -->
        <div class="pd-gallery">
          <div class="pd-main-wrap" id="pd-main-wrap">
            <img
              id="pd-main-img"
              src="${gallery[0]}"
              alt="${product.name}"
              class="pd-main-img"
              ${!isAvailable ? 'style="filter:grayscale(25%) brightness(0.72);"' : ""}
            />
            ${soldOverlay}
          </div>
          <div class="pd-thumbs">${thumbsHTML}</div>
          <div class="pd-thumb-labels">${thumbLabelsHTML}</div>
        </div>

        <!-- ── RIGHT: INFO ── -->
        <div class="pd-info">

          <span class="pd-type-badge">${typeLabel}</span>

          <h1 class="pd-title">${product.name}</h1>

          <!-- Stock -->
          <div class="pd-stock ${isAvailable ? "in" : "out"}">
            <span class="pd-stock-dot"></span>
            ${isAvailable
              ? (stock === null ? "Mavjudligi tekshirilmoqda..." : "Sotuvda bor")
              : "Sotuvda qolmadi"}
          </div>

          <!-- Price -->
          <div class="pd-price-row">
            <span class="pd-price-current">${formatPrice(product.price)}</span>
            ${product.oldPrice
              ? `<span class="pd-price-old">${formatPrice(product.oldPrice)}</span>` : ""}
            ${discount
              ? `<span class="pd-discount-badge">-${discount}% chegirma</span>` : ""}
          </div>
          <div class="pd-final-price-note" id="pd-final-note"></div>

          <div class="pd-delivery">🚚 1-2 kun ichida yetkazib beriladi</div>

          <div class="pd-divider"></div>

          <!-- Sizes -->
          <div class="pd-label">Razmer tanlang</div>
          <div class="pd-sizes" id="pd-sizes">${sizesHTML}</div>
          <div class="pd-size-error" id="pd-size-error">
            ⚠️ Iltimos, razmer tanlang
          </div>

          <div class="pd-divider"></div>

          <!-- Personalization -->
          <div
            class="pd-personalize-toggle"
            id="pd-personalize-toggle"
            role="checkbox"
            aria-checked="false"
          >
            <div class="pd-check-box">
              <span class="pd-check-icon">✓</span>
            </div>
            <div class="pd-check-label">
              <div class="pd-check-title">Orqasiga ism / raqam yozdirish</div>
              <div class="pd-check-sub">+${formatPrice(PRINT_EXTRA_PRICE)} qo'shimcha</div>
            </div>
          </div>

          <div class="pd-personalize-input-wrap" id="pd-personalize-input-wrap">
            <input
              type="text"
              id="pd-personalize-input"
              class="pd-personalize-input"
              placeholder="Masalan: SALAH 11  yoki  RONALDO 7"
              maxlength="30"
            />
          </div>

          <!-- Features -->
          <div class="pd-features">
            ✅ Original sifatli forma<br>
            ✅ M, L, XL razmerlar mavjud<br>
            ✅ Ism / raqam yozdirish imkoni<br>
            ✅ Tez va ishonchli yetkazib berish
          </div>

          <!-- Order button (desktop) -->
          <button
            class="pd-order-btn"
            id="pd-order-btn"
            ${!isAvailable ? "disabled" : ""}
            onclick="triggerOrder()"
          >
            ${isAvailable ? "🛒 Buyurtma berish" : "Sotuvda qolmadi"}
          </button>

        </div>
      </div>
    </div>
  `;

  /* Setup interactions */
  setupZoom(document.getElementById("pd-main-wrap"));
  setupPersonalize();

  /* Mobile CTA */
  const mobCta = document.getElementById("pd-mobile-cta");
  const mobBtn = document.getElementById("mob-order-btn");
  const mobPriceEl = document.getElementById("mob-price-display");

  if (mobCta) mobCta.style.display = "block";
  if (mobPriceEl) mobPriceEl.textContent = formatPrice(product.price);
  if (mobBtn) {
    if (!isAvailable) {
      mobBtn.textContent = "Sotuvda qolmadi";
      mobBtn.disabled    = true;
    } else {
      mobBtn.onclick = triggerOrder;
    }
  }

  /* Set back link to return with team filter */
  const backLink = document.getElementById("pd-back-link");
  if (backLink && product.team) {
    backLink.href = `index.html#${product.team}`;
  }

  /* Update modal price display initial */
  renderFinalPriceNote();
}

/* ── STOCK UPDATE AFTER FETCH ────────────────────────── */
function applyStockToPage(stock) {
  if (stock === null) return;
  const isAvailable = stock > 0;

  /* Stock badge */
  const badge = document.querySelector(".pd-stock");
  if (badge) {
    badge.className    = `pd-stock ${isAvailable ? "in" : "out"}`;
    badge.innerHTML    = `<span class="pd-stock-dot"></span> ${
      isAvailable ? "Sotuvda bor" : "Sotuvda qolmadi"
    }`;
  }

  /* Desktop button */
  const desktopBtn = document.getElementById("pd-order-btn");
  if (desktopBtn) {
    desktopBtn.disabled    = !isAvailable;
    desktopBtn.textContent = isAvailable ? "🛒 Buyurtma berish" : "Sotuvda qolmadi";
  }

  /* Mobile button */
  const mobBtn = document.getElementById("mob-order-btn");
  if (mobBtn) {
    mobBtn.disabled    = !isAvailable;
    mobBtn.textContent = isAvailable ? "Buyurtma berish" : "Sotuvda qolmadi";
  }

  /* Gallery overlay */
  const mainWrap = document.getElementById("pd-main-wrap");
  const mainImg  = document.getElementById("pd-main-img");
  if (!isAvailable && mainWrap) {
    if (!mainWrap.querySelector(".pd-sold-overlay")) {
      const ov = document.createElement("div");
      ov.className = "pd-sold-overlay";
      ov.textContent = "SOTUVDA QOLMADI";
      mainWrap.appendChild(ov);
    }
    if (mainImg) {
      mainImg.style.filter    = "grayscale(25%) brightness(0.72)";
      mainImg.style.transform = "scale(0.98)";
    }
  }
}

/* ── MODAL FORM SUBMIT ───────────────────────────────── */
function setupOrderModal() {
  const orderForm     = document.getElementById("order-form");
  const orderModal    = document.getElementById("order-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const submitBtn     = document.getElementById("submit-order-btn");
  const formStatus    = document.getElementById("form-status");
  const printToggle   = document.getElementById("order-print-toggle");
  const printGrp      = document.getElementById("print-text-group");
  const printInp      = document.getElementById("order-print-text");

  if (!orderForm) return;

  const closeModal = () => {
    orderModal?.classList.remove("show");
    document.body.style.overflow = "";
  };

  modalCloseBtn?.addEventListener("click", closeModal);
  orderModal?.addEventListener("click", e => {
    if (e.target === orderModal) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  printToggle?.addEventListener("change", () => {
    printGrp?.classList.toggle("hidden", !printToggle.checked);
    if (!printToggle.checked && printInp) printInp.value = "";
    renderFinalPriceNote();
  });

  orderForm.addEventListener("submit", async e => {
    e.preventDefault();
    if (!currentProduct) return;

    const nameInput    = document.getElementById("order-name");
    const phoneInput   = document.getElementById("order-phone");
    const sizeSelect   = document.getElementById("order-size");
    const qtyInput     = document.getElementById("order-quantity");
    const addressInput = document.getElementById("order-address");
    const noteInput    = document.getElementById("order-note");

    const payload = {
      productId:   currentProduct.id,
      productName: currentProduct.name,
      category:    currentProduct.category,
      price:       getFinalPrice(),
      name:        nameInput?.value.trim(),
      phone:       phoneInput?.value.trim(),
      size:        sizeSelect?.value,
      quantity:    qtyInput?.value,
      printNeeded: printToggle?.checked ? "Ha" : "Yo'q",
      printText:   printInp?.value.trim() || "",
      address:     addressInput?.value.trim(),
      note:        noteInput?.value.trim() || "",
    };

    if (!payload.name || !payload.phone || !payload.size || !payload.address) {
      if (formStatus) {
        formStatus.textContent = "⚠️ Majburiy maydonlarni to'ldiring.";
        formStatus.style.color = "#dc2626";
      }
      return;
    }

    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Yuborilmoqda..."; }
    if (formStatus) { formStatus.textContent = "Buyurtma yuborilmoqda..."; formStatus.style.color = "#2563eb"; }

    try {
      await fetch(ORDER_SCRIPT_URL, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      if (formStatus) {
        formStatus.textContent = "✅ Buyurtma muvaffaqiyatli yuborildi!";
        formStatus.style.color = "#059669";
      }
      orderForm.reset();
      printGrp?.classList.add("hidden");
      setTimeout(closeModal, 1500);
    } catch (err) {
      console.error(err);
      if (formStatus) {
        formStatus.textContent = "❌ Xatolik. Qaytadan urinib ko'ring.";
        formStatus.style.color = "#dc2626";
      }
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Buyurtmani yuborish"; }
    }
  });
}

/* ── BOTTOM NAV ACTIVE STATE ─────────────────────────── */
function setupBottomNav() {
  /* On product page, no nav item is "home active" */
  const homeItem = document.getElementById("nav-home");
  if (homeItem) homeItem.classList.remove("active");
}

/* ── SEARCH FOCUS (from nav) ─────────────────────────── */
function focusSearch() {
  /* Product page: go back to index and open search */
  window.location.href = "index.html#search";
}

/* ── CART PLACEHOLDER ────────────────────────────────── */
function openCartPlaceholder() {
  alert("Savat funksiyasi tez orada qo'shiladi! 🛒");
}

/* ── INIT ────────────────────────────────────────────── */
async function initProductPage() {
  /* Read ?id= from URL */
  const params    = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));

  if (!productId) { renderNotFound(); return; }

  const product = products.find(p => p.id === productId);
  if (!product) { renderNotFound(); return; }

  /* Render immediately with unknown stock */
  renderProduct(product, null);
  setupOrderModal();
  setupBottomNav();

  /* Fetch stock in background */
  const stock = await fetchStock(product.name);
  if (stock !== null) {
    /* Update product object */
    product.stock = stock;
    applyStockToPage(stock);
  }
}

initProductPage();
