const navLinks = document.querySelectorAll('.menu__link');
const footerLinks = document.querySelectorAll('.footer-menu__link');

// Подсвечивание активной ссылки меню
navLinks.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add('menu__link_active');
    }
})


footerLinks.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname) {
        link.classList.add('footer-menu__link_active');
    }
})


// Бургер меню
const burgerMenu = document.querySelector('.menu-burger');
const menu = document.querySelector('.nav__list');
const logo = document.querySelector('.nav__logo_640');
const shadow = document.querySelector('.shadow');
const designedBy = document.querySelector('.nav__designedby');

function openAndCloseMenu() {
    menu.classList.toggle('nav__list_active');
    burgerMenu.classList.toggle('menu-burger_active');
    logo.classList.toggle('nav__logo_active');
    shadow.classList.toggle('shadow_active');
    designedBy.classList.toggle('nav__designedby_active');
}

burgerMenu.addEventListener('click', openAndCloseMenu);
shadow.addEventListener('click', openAndCloseMenu);
