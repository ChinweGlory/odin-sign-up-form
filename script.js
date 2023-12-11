let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");
let errorMessage = document.querySelector(".form-info span");

confirmPasswordInput.addEventListener("input", function () {
  let passwordValue = passwordInput.value;
  let confirmPasswordValue = confirmPasswordInput.value;

  if (passwordValue === confirmPasswordValue) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
});

function togglePasswordVisibility() {
  let passwordInput = document.getElementById("password");
  let togglePasswordIcon = document.querySelector(".toggle-password-icon");

  // Toggle the password field type between "password" and "text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Change the eye icon based on the password visibility state
  togglePasswordIcon.textContent =
    passwordInput.type === "password" ? "👁️" : "👁️";
}
