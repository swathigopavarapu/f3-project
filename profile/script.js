// Redirect to login if not logged in
(function checkAuth() {
  const token = localStorage.getItem("auth_token");
  if (!token) {
    window.location.href = "login.html";
  }
})();

function loadProfile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  document.getElementById("profile-name").textContent = user.name || "Guest";
  document.getElementById("profile-email").textContent = user.email || "No email";
  document.getElementById("profile-role").textContent = user.role || "User";
}

// Toggle edit mode
document.getElementById("edit-btn").addEventListener("click", () => {
  const btn = document.getElementById("edit-btn");
  const nameEl = document.getElementById("profile-name");
  const emailEl = document.getElementById("profile-email");
  const roleEl = document.getElementById("profile-role");

  if (btn.textContent === "Edit Profile") {
    nameEl.innerHTML = `<input type="text" id="edit-name" value="${nameEl.textContent}" />`;
    emailEl.innerHTML = `<input type="email" id="edit-email" value="${emailEl.textContent}" />`;
    roleEl.innerHTML = `<input type="text" id="edit-role" value="${roleEl.textContent}" />`;
    btn.textContent = "Save";
  } else {
    const updatedUser = {
      name: document.getElementById("edit-name").value,
      email: document.getElementById("edit-email").value,
      role: document.getElementById("edit-role").value,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    loadProfile();
    btn.textContent = "Edit Profile";
  }
});

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
});

loadProfile();
