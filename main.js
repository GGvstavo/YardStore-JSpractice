const menuDesktop = document.querySelector('.desktop-menu')
const navEmail = document.querySelector('.navbar-email');
const menuHamburgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const closeProductDetailIcon = document.querySelector('.product-detail-close');

// Link to display profile options
navEmail.addEventListener('click', () => {
    shoppingCartContainer.classList.add('inactive');
    menuDesktop.classList.toggle('inactive');
    productDetail.classList.add('inactive');
});

// Hamburger menu icon to display menu options
menuHamburgerIcon.addEventListener('click', () => {
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
});

// Cart icon to display order
shoppingCartIcon.addEventListener('click', () => {
    mobileMenu.classList.add('inactive');
    menuDesktop.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    productDetail.classList.add('inactive');
});

// Close product detail view
closeProductDetailIcon.addEventListener('click', () => {
    productDetail.classList.add('inactive');
});

// Show product from JS
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
},{
    name: 'Soccer ball',
    price: 15,
    image: 'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?cs=srgb&dl=pexels-aphiwat-chuangchoem-364308.jpg&fm=jpg',
    description: 'a large ball made of leather or plastic and filled with air, used in games of soccer.'
},{
    name: 'Basketball hoop',
    price: 35,
    image: 'https://images.pexels.com/photos/264258/pexels-photo-264258.jpeg',
    description: 'Indoor basketball hoops are a fun way to set up a safe court in your own home or office. Designed with durable backboards and breakaw…'    
},{
    name: 'Tennis ball',
    price: 2.5,
    image: 'https://images.pexels.com/photos/226587/pexels-photo-226587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A tennis ball is a ball designed for the sport of tennis. Tennis balls are fluorescent yellow in organised competitions, but in recreational play can be…'
},{
    name: 'Baseball glove',
    price: 25,
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Gloves are made from a variety of leathers, but most can be separated into four major categories: full grain, kip (or kipskin), premium steerhide, and cowhide.'
},{
    name: 'Tennis racket',
    price: 45,
    image: 'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Our range of tennis rackets to suit different skilled players from beginners to advanced from brands such as Babolat, Wilson, Head & more.'
},{
    name: 'Kayak',
    price: 65,
    image: 'https://images.pexels.com/photos/2404667/pexels-photo-2404667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A kayak is a small, narrow watercraft which is typically propelled by means of a double-bladed paddle. The word kayak originates from the…'
},{
    name: 'Skate',
    price: 40,
    image: 'https://images.pexels.com/photos/841369/pexels-photo-841369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Skateboarding is an action sport originating in the United States that involves riding and performing tricks using a skateboard, as well as a recreational…'
},{
    name: 'Baseball ball',
    price: 7,
    image: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'The ball consists of a rubber or cork center wrapped in yarn and covered with white natural horsehide or cowhide, or a synthetic composite leather.'
},{
    name: 'Basketball shoes',
    price: 110,
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'When deciding on basketball shoes, look for a relatively flat and wide outsole to provide you with maximum balance.'
})

// Show products in HTML
const renderProducts = arr => {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // Display a product detail view
        productImg.addEventListener('click', () => {
            productDetail.classList.remove('inactive');
            shoppingCartContainer.classList.add('inactive');
            menuDesktop.classList.add('inactive');
        });
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDivNamePrice = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerHTML = `$ ${product.price},00`;
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

/** 
const displayAsideProductDetail = arrProduct => {
    for (product of arrProduct) {
        const productDetailClose = document.createElement('div');
        productDetailClose.classList.add('product-detail-close');
    
        const productDetailCloseIcon = document.createElement('img');
        productDetailCloseIcon.setAttribute('src', './icons/icon_close.png');
        productDetailCloseIcon.setAttribute('alt', 'close');

        const productDetailImg = document.createElement('img');
        productDetailImg.setAttribute('src', product.image);
        productDetailCloseIcon.setAttribute('alt', product.name);

        const productDetailInfo = document.createElement('div');
        productDetailInfo.classList.add('product-info');
        const productDetailPrice = document.createElement('p');
        productDetailPrice.innerHTML = `$ ${product.price}`;
        const productDetailName = document.createElement('p');
        productDetailName.innerHTML = product.name;
        const productDetailDescription = document.createElement('p');
        productDetailDescription.innerHTML = product.description;

        const productDetailButton = document.createElement('button');
        productDetailButton.classList.add('primary-button');
        productDetailButton.classList.add('add-to-cart-button');
        // productDetailButton.innerText('Add to cart');
        const productDetailAddCartIcon = document.createElement('img');
        productDetailAddCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

        productDetailClose.appendChild(productDetailImg);
        productDetailButton.appendChild(productDetailAddCartIcon);
        productDetailInfo.append(productDetailPrice, productDetailName, productDetailDescription, productDetailButton)
        productDetail.append(productDetailClose, productDetailImg, productDetailInfo, productDetailClose)
    
    }
}

displayAsideProductDetail(productList);
*/