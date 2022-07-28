const menuDesktop = document.querySelector('.inactive')
const navEmail = document.querySelector('.navbar-email');
const menuHamburgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');


navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
});

menuHamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
});