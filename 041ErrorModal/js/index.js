const btnClose = document.querySelector('.btn-close');

btnClose.addEventListener('click', function() {
  btnClose.parentElement.classList.toggle('dismiss');
})