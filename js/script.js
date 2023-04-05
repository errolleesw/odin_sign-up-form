const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById('passwordError');
const btn = document.querySelector("button");



function validatePassword() {
  if (password.value !== confirmPassword.value) {
    passwordError.innerText = '*Passwords do not match';
    passwordError.style.display = 'block';
  } else {
    passwordError.style.display = 'none';
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;


// btn.addEventListener("click", function(event) {
//   if (password.value !== confirmPassword.value) {
//     event.preventDefault();
//     passwordError.innerText = '*Passwords do not match';
//     passwordError.style.display = 'block';
//   } else {
//     passwordError.style.display = 'none';
//   }
// });
// form.addEventListener('submit', function(event) {
//   if (password.value !== confirmPassword.value) {
//     event.preventDefault();
//     passwordError.innerText = '*Passwords do not match';
//     passwordError.style.display = 'block';
//   } else {
//     passwordError.style.display = 'none';
//   }
// });
