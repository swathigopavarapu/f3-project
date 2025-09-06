document.getElementById("edit-btn").addEventListener("click", function () {
  let newName = prompt("Enter new name:", "Swathi");
  let newRole = prompt("Enter new role:", "React Developer");
  let newEmail = prompt("Enter new email:", "swathi@example.com");

  if (newName) document.getElementById("profile-name").textContent = newName;
  if (newRole) document.getElementById("profile-role").textContent = newRole;
  if (newEmail) document.getElementById("profile-email").textContent = newEmail;
});
