const navLinks = document.querySelectorAll('.menu__link');
const footerLinks = document.querySelectorAll('.footer-menu__link');

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


// Ограничение на количество вводимых символов
function limitOfInput(element) {
    var max_chars = 4;

    if (element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}



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
