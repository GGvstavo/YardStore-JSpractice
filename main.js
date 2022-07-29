const menuDesktop = document.querySelector('.desktop-menu')
const navEmail = document.querySelector('.navbar-email');
const menuHamburgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const myOrderList = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

// Show product from JS
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Soccer ball',
    price: 15,
    image: 'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?cs=srgb&dl=pexels-aphiwat-chuangchoem-364308.jpg&fm=jpg'
},{
    name: 'Basketball hoop',
    price: 35,
    image: 'https://images.pexels.com/photos/264258/pexels-photo-264258.jpeg'
},{
    name: 'Tennis ball',
    price: 2.5,
    image: 'https://images.pexels.com/photos/226587/pexels-photo-226587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},{
    name: 'Baseball glove',
    price: 25,
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},{
    name: 'Tennis racket',
    price: 45,
    image: 'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},{
    name: 'Kayak',
    price: 65,
    image: 'https://images.pexels.com/photos/2404667/pexels-photo-2404667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},{
    name: 'Skate',
    price: 40,
    image: 'https://images.pexels.com/photos/841369/pexels-photo-841369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},{
    name: 'Baseball ball',
    price: 7.5,
    image: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
},{
    name: 'Basketball shoes',
    price: 110,
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})


const renderProducts = arr => {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDivNamePrice = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerHTML = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const iconAddCart = document.createElement('img');
        iconAddCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productDivNamePrice.append(productPrice, productName);
        productInfoFigure.appendChild(iconAddCart);
        productInfo.append(productDivNamePrice, productInfoFigure)
        productCard.append(productImg, productInfo)
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);