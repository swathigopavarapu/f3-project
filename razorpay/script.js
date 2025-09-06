document.getElementById("rzp-button1").onclick = function (e) {
  var options = {
    key: "rzp_test_yourkeyhere", // Replace with your Razorpay Test/Live Key
    amount: 50000, // Amount in paise (50000 = ₹500)
    currency: "INR",
    name: "My Shop",
    description: "Test Transaction",
    image: "https://yourlogo.com/logo.png", // Optional logo
    handler: function (response) {
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Swathi",
      email: "swathi@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "My Shop Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();
  e.preventDefault();
};
