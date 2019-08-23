const center = document.querySelector('.center');
const navBtn = document.querySelector('.nav-btn');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const navItems = document.querySelector('.nav-items');

navBtn.addEventListener('click', function () {
    center.classList.toggle('nav-appear');
});

searchInput.addEventListener('transitionend', function () {
    if (!this.classList.contains('search-fadeIn')) {
        this.classList.remove('search-visible');
    }
});

searchBtn.addEventListener('click', function () {
    if (!searchInput.classList.contains('search-visible')) {
        searchInput.classList.toggle('search-visible');
    }
    searchInput.classList.toggle('search-fadeIn');
})
