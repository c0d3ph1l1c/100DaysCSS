var passwordInput = document.querySelector('#password-input');
var container = document.querySelector('.container');

passwordInput.addEventListener('keyup', checkInput);
passwordInput.addEventListener('change', checkInput);
passwordInput.addEventListener('input', checkInput);

function checkInput(e) {
  if(this.value == 'password' || this.value == 'Password') {
    this.blur();
    container.classList.add('revealed');
  }
}