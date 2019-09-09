const expands = document.querySelectorAll('.expand');
const close = document.querySelector('.close');
const topDiv = document.querySelector('.top');
const btmDiv = document.querySelector('.bottom');

const toggleSlideIn = () => {
    topDiv.classList.toggle("slide-in");
    btmDiv.classList.toggle("slide-in");
}

expands.forEach(expand => expand.addEventListener('click', toggleSlideIn));

close.addEventListener('click', toggleSlideIn);

