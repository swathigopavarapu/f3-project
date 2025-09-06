const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

let myProducts = [];
let myCartIDs = JSON.parse(localStorage.getItem("cart")) || [];

// Fetch products from FakeStore API
async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    myProducts = await res.json();
    displayProducts(myProducts);
  } catch (err) {
    console.error("Error fetching products:", err);
  }
}

// Display products
function displayProducts(products) {
  productsContainer.innerHTML = "";

  if (products.length === 0) {
    productsContainer.innerHTML = "<p>No products found</p>";
    return;
  }

  products.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h4>${item.title}</h4>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;

    productsContainer.appendChild(card);
  });
}

// Add to cart
function addToCart(id) {
  if (!myCartIDs.includes(id)) {
    myCartIDs.push(id);
    localStorage.setItem("cart", JSON.stringify(myCartIDs));
    alert("Added to cart!");
  } else {
    alert("Already in cart");
  }
}

// Search functionality
searchInput.addEventListener("input", () => {
  let value = searchInput.value.toLowerCase();
  let filtered = myProducts.filter((item) =>
    item.title.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

// Category filter
categoryFilter.addEventListener("change", () => {
  let value = categoryFilter.value;
  let filtered =
    value === "all"
      ? myProducts
      : myProducts.filter((item) => item.category === value);
  displayProducts(filtered);
});

// Sorting
sortFilter.addEventListener("change", () => {
  let value = sortFilter.value;
  let sorted = [...myProducts];

  if (value === "asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (value === "desc") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
});

// Initialize
fetchProducts();
