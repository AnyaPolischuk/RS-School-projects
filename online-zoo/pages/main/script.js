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


