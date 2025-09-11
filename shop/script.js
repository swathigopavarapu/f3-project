// Sample product data
const products = {
  mens: [
    {
      id: 1,
      name: "Striped T-Shirt",
      price: 25,
      sizes: ["S", "M", "L"],
      colors: ["#000", "#4938af", "#203d3e"],
      image: "tshirt.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Formal Shirt",
      price: 40,
      sizes: ["M", "L", "XL"],
      colors: ["#000", "#fff"],
      image: "tshirt.png",
      rating: 5,
    },
  ],
  womens: [
    {
      id: 3,
      name: "Casual Top",
      price: 30,
      sizes: ["S", "M"],
      colors: ["#ff0000", "#00ff00"],
      image: "tshirt.png",
      rating: 3,
    },
    {
      id: 4,
      name: "Summer Dress",
      price: 60,
      sizes: ["M", "L"],
      colors: ["#0000ff", "#ff69b4"],
      image: "tshirt.png",
      rating: 5,
    },
  ],
};

// Render products
function renderProducts(section, items) {
  const container = document.getElementById(section);
  container.innerHTML = "";
  items.forEach((p) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <div class="info">
        <div class="row">
          <div class="price">$${p.price}</div>
          <div class="sized">${p.sizes.join(",")}</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            ${p.colors.map((c) => `<div class="circle" style="background:${c}"></div>`).join("")}
          </div>
        </div>
        <div class="row">Rating: ${"⭐".repeat(p.rating)}</div>
      </div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // avoid duplicates
  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  } else {
    alert("Item already in cart!");
  }
}

// Init
renderProducts("mens", products.mens);
renderProducts("womens", products.womens);
