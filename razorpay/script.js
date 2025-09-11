document.getElementById("rzp-button1").onclick = function (e) {
  e.preventDefault();

  var options = {
    key: "<API_KEY>", // 🔑 Replace with your Razorpay Test Key ID
    amount: 300 * 100, // Amount in paise (₹300)
    currency: "INR",
    name: "MyShop Checkout",
    description: "This is your order",
    image:
      "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    theme: {
      color: "#000",
    },
    handler: function (response) {
      // ✅ Payment success callback
      alert("✅ Payment Successful!\nPayment ID: " + response.razorpay_payment_id);

      // ✅ Clear cart from localStorage
      localStorage.removeItem("myCart_v1");

      // Optional: redirect to success page
      // window.location.href = "success.html";
    },
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
};
