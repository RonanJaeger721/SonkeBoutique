const products = [
  { id: 1, name: "Nivea 72H Moisture Body Lotion", category: "Bodycare", brand: "Nivea", price: 14, image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/7/0/d/caa10679ba5d4e819e907aa468bc276d-web_1010x1180_transparent_png.png", colors: ["#f7f9ff", "#2d62c9"] },
  { id: 2, name: "Garnier Micellar Cleansing Water", category: "Skincare", brand: "Garnier", price: 12, image: "https://media.ulta.com/i/ulta/2298445", colors: ["#f2f8f5", "#9bcfbd"] },
  { id: 3, name: "Garnier Vitamin C Micellar Water", category: "Skincare", brand: "Garnier", price: 16, image: "https://media.ulta.com/i/ulta/2570035", colors: ["#ffd447", "#fff4a6"] },
  { id: 4, name: "Simple Vitamin C Glow Facial Wash", category: "Skincare", brand: "Simple", price: 13, image: "https://onemg.gumlet.io/l_watermark_346%2Cw_480%2Ch_480/a_ignore%2Cw_480%2Ch_480%2Cc_fit%2Cq_auto%2Cf_auto/7a1d03a05ac349ee8cc5c690937234cd.jpg", colors: ["#ffffff", "#ffb321"] },
  { id: 5, name: "Pantene Argan Infused Hair Oil", category: "Haircare", brand: "Pantene", price: 15, image: "https://boots.scene7.com/is/image/Boots/10225249", colors: ["#ffe28a", "#d5a523"] },
  { id: 6, name: "L'Oreal Elvive Dream Lengths No Haircut Cream", category: "Haircare", brand: "L'Oreal", price: 17, image: "https://media.ulta.com/i/ulta/2621585", colors: ["#f78c73", "#e22870"] },
  { id: 7, name: "Color Wow Dream Coat Spray", category: "Haircare", brand: "Color Wow", price: 32, image: "https://media.ulta.com/i/ulta/2589101", colors: ["#ef3c4c", "#ffb0ac"] },
  { id: 8, name: "CHI 44 Iron Guard Heat Protection Spray", category: "Haircare", brand: "CHI", price: 24, image: "https://media.ulta.com/i/ulta/2113781", colors: ["#f23a32", "#ff8b7e"] },
  { id: 9, name: "e.l.f. Soft Glam Satin Foundation", category: "Makeup", brand: "e.l.f.", price: 16, image: "https://media.ulta.com/i/ulta/2624374", colors: ["#d7a16d", "#6b3a23"] },
  { id: 10, name: "e.l.f. Power Grip Primer", category: "Makeup", brand: "e.l.f.", price: 14, image: "https://media.ulta.com/i/ulta/2591795", colors: ["#58d7c6", "#005f68"] },
  { id: 11, name: "NYX The Face Glue Primer", category: "Makeup", brand: "NYX", price: 18, image: "https://media.ulta.com/i/ulta/2636961", colors: ["#f5f7ff", "#ff4bb3"] },
  { id: 12, name: "Maybelline Lasting Fix Setting Spray", category: "Makeup", brand: "Maybelline", price: 15, image: "https://media.ulta.com/i/ulta/2545896", colors: ["#cc1e8f", "#26223f"] },
  { id: 13, name: "Revolution Banana Powder", category: "Makeup", brand: "Revolution", price: 12, image: "https://media.ulta.com/i/ulta/2545207", colors: ["#f7d15f", "#fff6c6"] },
  { id: 14, name: "Too Faced Cloud Crush Blush", category: "Makeup", brand: "Too Faced", price: 29, image: "https://media.ulta.com/i/ulta/2603640", colors: ["#ff9bc3", "#fff2b0"] },
  { id: 15, name: "Milk Makeup Hydro Grip Primer", category: "Makeup", brand: "Milk Makeup", price: 34, image: "https://media.ulta.com/i/ulta/2634881", colors: ["#d8f7e9", "#49b59c"] },
  { id: 16, name: "Urban Decay All Nighter Setting Spray", category: "Makeup", brand: "Urban Decay", price: 36, image: "https://media.ulta.com/i/ulta/2642048", colors: ["#3c114c", "#b85dff"] },
  { id: 17, name: "Medicube Kojic Acid Line Set", category: "Skincare", brand: "Medicube", price: 28, image: "https://media.ulta.com/i/ulta/2652448", colors: ["#ffc729", "#fff1ad"] },
  { id: 18, name: "Medicube Collagen Night Wrapping Mask", category: "Skincare", brand: "Medicube", price: 30, image: "https://media.ulta.com/i/ulta/2645372", colors: ["#553018", "#d7b46f"] },
  { id: 19, name: "Jumiso Niacinamide 20 Serum", category: "Skincare", brand: "Jumiso", price: 22, image: "https://media.ulta.com/i/ulta/2648959", colors: ["#5b0f54", "#d456a4"] },
  { id: 20, name: "The Ordinary Niacinamide Serum", category: "Skincare", brand: "The Ordinary", price: 14, image: "https://media.ulta.com/i/ulta/2551167", colors: ["#f5f5f5", "#c9c9c9"] },
  { id: 21, name: "Alpha Skincare Moisturizing Body Wash", category: "Bodycare", brand: "Alpha", price: 19, image: "https://media.ulta.com/i/ulta/77011565", colors: ["#d4fff0", "#66d0c3"] },
  { id: 22, name: "Naturium The Glow Getter Body Wash", category: "Bodycare", brand: "Naturium", price: 21, image: "https://media.ulta.com/i/ulta/2627589", colors: ["#fff1db", "#f8c456"] },
  { id: 23, name: "EOS Cashmere Body Lotion", category: "Bodycare", brand: "EOS", price: 15, image: "https://media.ulta.com/i/ulta/2653111", colors: ["#ff9eca", "#ffd2e6"] },
  { id: 24, name: "EOS Vanilla Cashmere Body Wash", category: "Bodycare", brand: "EOS", price: 18, image: "https://media.ulta.com/i/ulta/2653114", colors: ["#ead2ff", "#bb70e8"] },
  { id: 25, name: "BYOMA Brightening Toner", category: "Skincare", brand: "BYOMA", price: 18, image: "https://media.ulta.com/i/ulta/2611684", colors: ["#b8d7ff", "#68a6e8"] },
  { id: 26, name: "BYOMA Hydrating Milky Toner", category: "Skincare", brand: "BYOMA", price: 18, image: "https://media.ulta.com/i/ulta/2647488", colors: ["#fff8cb", "#dad064"] },
  { id: 27, name: "Tree Hut Vanilla Sugar Scrub", category: "Bodycare", brand: "Tree Hut", price: 20, image: "https://media.ulta.com/i/ulta/2652064", colors: ["#ff4d9a", "#ffb0d3"] },
  { id: 28, name: "Bath & Body Works Champagne Toast Mist", category: "Fragrance", brand: "Bath & Body Works", price: 16, image: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0f84e52f/hires/028019198_alt_1.jpg", colors: ["#ff5b9d", "#ffcfdd"] },
  { id: 29, name: "Hourglass Ambient Soft Glow Foundation", category: "Makeup", brand: "Hourglass", price: 48, image: "https://media.ulta.com/i/ulta/2599670", colors: ["#d8a879", "#56351e"] },
  { id: 30, name: "Charlotte Tilbury Magic Cream", category: "Skincare", brand: "Charlotte Tilbury", price: 55, image: "https://media.ulta.com/i/ulta/2652684", colors: ["#f6d8c8", "#c98a64"] }
];

const state = {
  filter: "All",
  search: "",
  cart: []
};

const productGrid = document.querySelector("#product-grid");
const cartDrawer = document.querySelector("#cart-drawer");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const whatsappCheckout = document.querySelector("#whatsapp-checkout");
const emailCheckout = document.querySelector("#email-checkout");

function money(value) {
  return `$${value.toFixed(0)}`;
}

function visibleProducts() {
  const query = state.search.trim().toLowerCase();
  return products.filter((product) => {
    const matchesFilter = state.filter === "All" || product.category === state.filter;
    const matchesSearch = !query || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });
}

function renderProducts() {
  const items = visibleProducts();
  productGrid.innerHTML = items.map((product) => `
    <article class="product-card">
      <div class="product-art" style="--card-a:${product.colors[0]}; --card-b:${product.colors[1]}">
        <img class="product-image" src="${product.image}" alt="${product.brand} ${product.name}" loading="eager" onerror="this.hidden=true; this.nextElementSibling.style.display='block';">
        <div class="product-shape" aria-hidden="true"></div>
      </div>
      <div class="product-info">
        <span class="product-meta">${product.brand} / ${product.category}</span>
        <h3>${product.name}</h3>
        <div class="product-bottom">
          <strong>${money(product.price)}</strong>
          <button class="add-button" type="button" data-add="${product.id}">Add</button>
        </div>
      </div>
    </article>
  `).join("") || `<p>No products found. Try another search.</p>`;
}

function addToCart(id) {
  const product = products.find((item) => item.id === Number(id));
  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function updateQty(id, change) {
  const item = state.cart.find((cartItem) => cartItem.id === Number(id));
  if (!item) return;
  item.quantity += change;
  state.cart = state.cart.filter((cartItem) => cartItem.quantity > 0);
  renderCart();
}

function orderText(extra = {}) {
  const lines = state.cart.map((item) => `${item.quantity} x ${item.name} - ${money(item.price * item.quantity)}`);
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return [
    "Hello Sonke Boutique Zw, I would like to place an order:",
    "",
    lines.length ? lines.join("\n") : "No bag items selected yet.",
    "",
    `Estimated total: ${money(total)}`,
    extra.name ? `Name: ${extra.name}` : "",
    extra.contact ? `Contact: ${extra.contact}` : "",
    extra.area ? `Delivery area: ${extra.area}` : "",
    extra.notes ? `Notes: ${extra.notes}` : ""
  ].filter(Boolean).join("\n");
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCount.textContent = totalQuantity;
  cartTotal.textContent = money(total);

  cartItems.innerHTML = state.cart.map((item) => `
    <div class="cart-row">
      <div>
        <strong>${item.name}</strong>
        <small>${item.brand} / ${money(item.price)}</small>
      </div>
      <div class="qty">
        <button type="button" data-qty="${item.id}" data-change="-1" aria-label="Remove one ${item.name}">-</button>
        <span>${item.quantity}</span>
        <button type="button" data-qty="${item.id}" data-change="1" aria-label="Add one ${item.name}">+</button>
      </div>
    </div>
  `).join("") || `<p>Your bag is empty. Add your favourites from the shop.</p>`;

  const message = encodeURIComponent(orderText());
  whatsappCheckout.href = `https://wa.me/?text=${message}`;
  emailCheckout.href = `mailto:sonkeconcierge@gmail.com?subject=Sonke%20Boutique%20Order&body=${message}`;
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);

  const qtyButton = event.target.closest("[data-qty]");
  if (qtyButton) updateQty(qtyButton.dataset.qty, Number(qtyButton.dataset.change));

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button === filterButton));
    renderProducts();
  }

  const filterLink = event.target.closest("[data-filter-link]");
  if (filterLink) {
    state.filter = filterLink.dataset.filterLink;
    document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button.dataset.filter === state.filter));
    renderProducts();
  }

  if (event.target.closest(".cart-button")) {
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
  }

  if (event.target.closest(".icon-close") || event.target === cartDrawer) {
    cartDrawer.classList.remove("open");
    cartDrawer.setAttribute("aria-hidden", "true");
  }

  if (event.target.closest(".search-toggle")) {
    document.querySelector("#search-panel").classList.toggle("open");
    document.querySelector("#search-input").focus();
  }
});

document.querySelector("#search-input").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

document.querySelector("#order-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const message = encodeURIComponent(orderText(data));
  document.querySelector("#form-note").innerHTML = `Order message prepared. <a href="https://wa.me/?text=${message}" target="_blank" rel="noopener">Send on WhatsApp</a> or <a href="mailto:sonkeconcierge@gmail.com?subject=Sonke%20Boutique%20Order&body=${message}">send by email</a>.`;
});

renderProducts();
renderCart();
