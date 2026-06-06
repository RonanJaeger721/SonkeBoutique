const products = [
  { id: 1, name: "BYOMA Brightening Toner", category: "Skincare", brand: "BYOMA", price: 18, colors: ["#b8d7ff", "#68a6e8"] },
  { id: 2, name: "e.l.f. Soft Glam Satin Foundation", category: "Makeup", brand: "e.l.f.", price: 16, colors: ["#d7a16d", "#6b3a23"] },
  { id: 3, name: "EOS 24H Body Lotion", category: "Bodycare", brand: "EOS", price: 15, colors: ["#ff9eca", "#ffd2e6"] },
  { id: 4, name: "The Ordinary Niacinamide Serum", category: "Skincare", brand: "The Ordinary", price: 14, colors: ["#f5f5f5", "#c9c9c9"] },
  { id: 5, name: "Urban Decay All Nighter Setting Spray", category: "Makeup", brand: "Urban Decay", price: 36, colors: ["#3c114c", "#b85dff"] },
  { id: 6, name: "Color Wow Dream Coat Spray", category: "Haircare", brand: "Color Wow", price: 32, colors: ["#ef3c4c", "#ffb0ac"] },
  { id: 7, name: "Medicube Kojic Acid Line Set", category: "Skincare", brand: "Medicube", price: 28, colors: ["#ffc729", "#fff1ad"] },
  { id: 8, name: "Revolution Banana Powder", category: "Makeup", brand: "Revolution", price: 12, colors: ["#f7d15f", "#fff6c6"] }
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
