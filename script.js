// document.addEventListener("DOMContentLoaded", function () {
//     const passwordInput = document.getElementById("password");
//     const confirmPasswordInput = document.getElementById("confirm-password");
//     const errorMessage = document.querySelector(".form-info span");

//     confirmPasswordInput.addEventListener("input", function () {
//       const passwordValue = passwordInput.value;
//       const confirmPasswordValue = confirmPasswordInput.value;

//       if (passwordValue === confirmPasswordValue) {
//         errorMessage.style.display = "none";
//       } else {
//         errorMessage.style.display = "block";
//       }
//     });
//   });

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
