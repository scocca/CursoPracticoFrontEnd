const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const shopping = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');
const iconBack = document.querySelector('.back');
const cardsContainer = document.querySelector('.cards-container');
const shoppingCartContent = document.querySelector('.shopping-cart-content');
const totalrender =document.querySelector('.total-render');
const btnAddtoCart =document.querySelector('.add-to-cart');
const showTotal =document.querySelector('.show-Total');
const cartCount =document.querySelector('.cart-count')

navEmail.addEventListener('click',toggleDesktopMenu);
navEmail.addEventListener('click', toggleMobileMenu);
shopping.addEventListener('click', toggleShoppingCart);
iconBack.addEventListener('click',toggleShoppingCart);
burgerMenu.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    const isAsideMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
     const isAsideMenuClosed = asideMenu.classList.contains('inactive');
    
     if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');}

        mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
    const isMobileMenuClosed= mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');}
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');}

        asideMenu.classList.toggle('inactive');   
}


const productList =[];
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
/*<div class="product-cards">
<productImg src="https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300" alt="sable de luz" class="product-productImg">
<div class="product-info">
    <div>
    <p>$120,00</p>
    <p>Producto maravilloso</p>
</div>
<figure>
    <productImg src="./icons/bt_add_to_cart.svg" alt="agregar al carrito">
</figure>
</div>
</div>*/
const cartProducts=[];
renderCartProducts();

function renderProducts(array){
    
for (product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('product-cards') 
   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image)
   productImg.classList.add('product-img');
   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');
   const infoDiv = document.createElement('div');
   productInfo.appendChild(infoDiv);
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText =product.name;
   infoDiv.appendChild(productPrice);
   infoDiv.appendChild(productName);
   const figure = document.createElement('figure');
   const figureImg = document.createElement('img');
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    figureImg.setAttribute('alt', 'agregar al carrito');
    figureImg.classList.add('add-to-cart');
    figure.appendChild(figureImg);
    productInfo.appendChild(figure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
    figureImg.addEventListener('click', function() {
        addToCart(product);
    });

    function addToCart(product) {
        cartProducts.push(product);
        console.log('Producto agregado al carrito:', product);
        renderCartProducts(cartProducts)
  }
}
    
}   

renderProducts(productList);
/*<div class="shopping-cart-content">
<div class="shopping-cart-product">
    <figure>
        <img src="https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300" alt="sable de luz" class="product-img">
     </figure>
    <p>sable de luz</p>
     <p>120.00</p>
     <img src="./icons/icon_close.png" alt="close">
</div>  
</div>*/


/*cartProducts.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
cartProducts.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
cartProducts.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
cartProducts.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})
cartProducts.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
})*/

function renderCartProducts(array){

    shoppingCartContent.innerText='';
    showTotal.innerText='0'
    cartCount.innerText='0'
    let totalPrice=0;
        for(product of cartProducts){
        const shoppingCartProduct = document.createElement('div');
        shoppingCartProduct.classList.add('shopping-cart-product');
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.classList.add('product-img')
        figureImg.setAttribute('src', product.image);
        const productName = document.createElement('p');
        productName.innerText=product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        const closeImg = document.createElement('img')
        closeImg.setAttribute('src', './icons/icon_close.png')
        closeImg.setAttribute('data-index',cartProducts.indexOf(product).toString());
        closeImg.classList.add('erase-button')
        figure.appendChild(figureImg);
        shoppingCartProduct.appendChild(figure);
        shoppingCartProduct.appendChild(productName);
        shoppingCartProduct.appendChild(productPrice);
        shoppingCartProduct.appendChild(closeImg);
        shoppingCartContent.appendChild(shoppingCartProduct);
        closeImg.addEventListener('click', removeFromCart);
        totalPrice = totalPrice+ parseInt(product.price)
        }
        showTotal.innerText='$'+totalPrice;
        cartCount.innerText=cartProducts.length;

        function removeFromCart(event){
            const index = parseInt(event.target.dataset.index);
            cartProducts.splice(index-1);
            renderCartProducts(cartProducts)
        } 
}
      





/*<div class="total">
<p>
<span>Total</span>
</p>
<p>$560.00</p>
</div>*/

/*function renderTotal(array){
    let total=0;
    for(product of cartProducts){
        total = total + parseInt(product.price)
    }
    const rtotal = document.createElement('div');
    rtotal.classList.add('total')
    const p1 = document.createElement('p');
    const sptotal = document.createElement('span');
    sptotal.innerText = 'Total';
    const p2 = document.createElement('p');
    p2.innerText = '$' + total;

    const btnCheckout = document.createElement('button');
    btnCheckout.classList.add('primary-button');
    btnCheckout.classList.add( 'add-to-cart-button');
    btnCheckout.innerText='Checkout'

    rtotal.appendChild(p1);
    p1.appendChild(sptotal);
    rtotal.appendChild(p2);
    asideMenu.appendChild(rtotal);
    asideMenu.appendChild(btnCheckout);
    
    
}


renderTotal(cartProducts);


function addToCart(array){
    const infos =[];
    const info = document.querySelector('p');
    const img = document.querySelector('img')

    infos.forEach((info)=>{
        const text = p.innerText;
        infos.push(text);
    })

    cartProducts.push({
        name: infos[1],
        price: infos[0],
        image:  img.src,
    })

    renderCartProducts(cartProducts);
    renderTotal(cartProducts);
}
*/
