const menuDesktop = document.querySelector('.desktop-menu')
const navEmail = document.querySelector('.navbar-email');
const menuHamburgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const myOrderList = document.querySelector('.product-detail');

// Link to display profile options
navEmail.addEventListener('click', () => {
    myOrderList.classList.add('inactive');
    menuDesktop.classList.toggle('inactive');
});

// Hamburger menu icon to display menu options
menuHamburgerIcon.addEventListener('click', () => {
    myOrderList.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
});

// Cart icon to display order
shoppingCartIcon.addEventListener('click', () => {
    mobileMenu.classList.add('inactive');
    menuDesktop.classList.add('inactive');
    myOrderList.classList.toggle('inactive');
});
