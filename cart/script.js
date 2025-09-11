function getCart() {
  return JSON.parse(localStorage.getItem("myCart_v1") || "[]");
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.textContent = "0";
    return;
  }

  let total = 0;
  container.innerHTML = cart
    .map((item, i) => {
      total += item.price * item.qty;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" width="50"/>
          <span>${item.title}</span>
          <span>Qty: ${item.qty}</span>
          <span>₹${(item.price * item.qty).toFixed(2)}</span>
          <button onclick="removeItem(${i})">Remove</button>
        </div>`;
    })
    .join("");

  totalEl.textContent = total.toFixed(2);
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem("myCart_v1", JSON.stringify(cart));
  renderCart();
}

// Razorpay checkout (demo mode)
document.getElementById("checkout-btn").addEventListener("click", () => {
  const total = parseFloat(document.getElementById("cart-total").textContent);
  if (total <= 0) {
    alert("Your cart is empty!");
    return;
  }

  var options = {
    key: "rzp_test_xxxxxxx", // replace with your Razorpay test key
    amount: total * 100, // amount in paise
    currency: "INR",
    name: "My Shop",
    description: "Checkout",
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      localStorage.removeItem("myCart_v1");
      renderCart();
    },
    prefill: {
      name: "Customer Name",
      email: "customer@example.com",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
});

renderCart();
