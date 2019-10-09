const center = document.querySelector('.center');
const logoOuter = document.querySelector('.logo-outer');
const logoInner = document.querySelector('.logo-inner');

center.addEventListener('click', switchLogo);

function switchLogo() {
    logoOuter.classList.toggle('expand');
    logoInner.classList.toggle('expand');
}