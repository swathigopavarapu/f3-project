// Example Cart Items
const cartItems = [
  { name: "Pizza", price: 250 },
  { name: "Burger", price: 150 },
  { name: "Pasta", price: 200 },
];

const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
let total = 0;

// Display items in cart
cartItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = `${item.name} - ₹${item.price}`;
  cartList.appendChild(li);
  total += item.price;
});

cartTotal.textContent = total;

// Razorpay Checkout
document.getElementById("checkout-btn").addEventListener("click", function () {
  var options = {
    key: "rzp_test_1234567890", // replace with your Razorpay Key
    amount: total * 100, // Amount in paise
    currency: "INR",
    name: "My Restaurant",
    description: "Test Transaction",
    handler: function (response) {
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Swathi",
      email: "swathi@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#2d89ef",
    },
  };
  var rzp = new Razorpay(options);
  rzp.open();
});
