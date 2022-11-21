const menu = document.querySelector('.header__menu');
const burgerBtn = document.querySelector('.header__menu-btn');
const closeBtn = document.querySelector('.header__menu-close-btn');

burgerBtn.addEventListener('click', () => {
    if (menu && burgerBtn) {
        menu.classList.add('active');
        document.body.classList.add('s-lock');
    }
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('s-lock');
})