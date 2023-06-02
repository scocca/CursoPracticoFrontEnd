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
const cartCount =document.querySelector('.cart-count');
const productDetailCard = document.querySelector('.product-detail-card');
const body = document.querySelector('body')


navEmail.addEventListener('click',toggleDesktopMenu);
navEmail.addEventListener('click', toggleMobileMenu);
shopping.addEventListener('click', toggleShoppingCart);
iconBack.addEventListener('click',toggleShoppingCart);
burgerMenu.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    const isAsideMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductCardInfoClosed = productDetailCard.classList.contains('inactive');
    
    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');
    }
    if(!isProductCardInfoClosed){
        toggleProductCardInfo.classList.add('inactive');
    }
    if(!isProductCardInfoClosed){
        productDetailCard.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
     const isAsideMenuClosed = asideMenu.classList.contains('inactive');
     const isProductCardInfoClosed=productDetailCard.classList.contains('inactive')
    
    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');}
        if(!isProductCardInfoClosed){
            productDetailCard.classList.add('inactive')
        }

        mobileMenu.classList.toggle('inactive');
        
}

function toggleShoppingCart(){
    const isMobileMenuClosed= mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductCardInfoClosed=productDetailCard.classList.contains('inactive')
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');}
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');}
    if(!isProductCardInfoClosed){
        productDetailCard.classList.add('inactive')
    }

        asideMenu.classList.toggle('inactive');   
        
}

function openProductCardInfo(){
    const isMobileMenuClosed= mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideMenuClosed =asideMenu.classList.contains('inactive');
    const isProductCardInfoClosed=productDetailCard.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');}
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');}
    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive')
    }
       
    productDetailCard.classList.remove('inactive');   }

function closeProductCardInfo(){
     productDetailCard.classList.add('inactive')
}



const productList =[];
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 120,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 20,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 30,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 12,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 45,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 40,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 31,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 87,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 176,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 73,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
})
productList.push({
    name: 'lightsaber',
    price: 172,
    image:  'https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300',
    info: 'Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor'
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
const renderProduct=[];


function renderProducts(array){
    renderCartProducts();
for (product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('product-cards') 
   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image)
   productImg.classList.add('product-img');
   productImg.setAttribute('data-index',productList.indexOf(product).toString());
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
    figureImg.setAttribute('data-index',productList.indexOf(product).toString());
    figure.appendChild(figureImg);
    productInfo.appendChild(figure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
    figureImg.addEventListener('click', function(event) {
        addToCart(event.target.dataset.index);
      });
    
    productImg.addEventListener('click', function(event) {
        renderProductInfoCard(event.target.dataset.index)});
    }

    function addToCart(index) {
        const product = productList[index]
        cartProducts.push(product);
        renderCartProducts(cartProducts);
    }

   /* function openCardInfo(product){
        const isProductCardInfoClosed=productDetailCard.classList.contains('inactive')
        if(!isProductCardInfoClosed){
            productDetailCard.classList.add('inactive');
            renderProduct.splice(0);
            renderProductInfoCard();}else{
            
        renderProduct.push(product);
        renderProductInfoCard(product);
        toggleProductCardInfo();
       }
    }*/

    function renderProductInfoCard(index){
    
        const productDetailCard = document.querySelector('.product-detail-card');
        const closeImg = productDetailCard.querySelector('.product-detail-close-card')
        const productImg = productDetailCard.querySelector('.product-img-card');
        const productDetail = productDetailCard.querySelector('.product-info-card');
        const productInfo = productDetail.querySelector('p:nth-child(3)');
        const productPrice = productDetail.querySelector('p:nth-child(1)');
        const productName = productDetail.querySelector('p:nth-child(2)');
        const productBtnAddToCart = productDetail.querySelector('.add-to-cart-button-card')
        const product = productList[index]
        productImg.src = product.image;
        productInfo.innerText = product.info;
        productPrice.innerText='$'+ product.price;
        productName.innerText=product.name;

        openProductCardInfo();

        closeImg.addEventListener('click',closeProductCardInfo)
        productBtnAddToCart.addEventListener('click',function() {
            addToCart(index);
          } )
      
    }

    /*<aside class="product-detail-card">
    <div class="product-detail-close-card">
         <img src="./icons/icon_close.png" alt="cerrar" >
    </div>
    <img src="https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=300" alt="lightsaber" class="product-img">
    <div class="product-info-card">
        <p>$120,00</p>
        <p>Lightsaber</p>
        <p>Practical and usefull ligthsaber which belonged to master Obi-Wan Kenobi and inherited to luke Skywalker, we found it in the remains of the death star before the battle of endor </p>
        <button class="primary-button-card add-to-cart-button-card">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
    </div>
    </aside>*/

    /*const productDetailCard = document.createElement('aside');
    productDetailCard.classList.add('product-detail-card');
    productDetailCard.classList.add('inactive');*/
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
            renderCartProducts(cartProducts);
        } 
}
      
/*function renderProductInfoCard(product){

    const ProductDetailCard =document.createElement('aside')
    productDetailCard.classList.add('product-detail-card') 
    productDetailCard.classList.add('inactive')
    const productDetailCloseCard = document.createElement('div');
    productDetailCloseCard.classList.add('product-detail-close-card')
    const closeImageCard = document.createElement('img');
    closeImageCard.setAttribute('src','./icons/icon_close.png');
    closeImageCard.setAttribute('alt', 'cerrar');
    closeImageCard.setAttribute('data-index',cartProducts.indexOf(product).toString());
    const productDetailCardImage = document.createElement('img')
    productDetailCardImage.setAttribute('src', product.image);
    productDetailCardImage.classList.add('product-img-card')
    const productInfoCard = document.createElement('div');
    productInfoCard.classList.add('poduct-card-info');
    const pPrice = document.createElement('p');
    pPrice.innerText=product.price;
    const pName = document.createElement('p');
    pName.innerText = product.name;
    const pInfo = document.createElement('p');
    pInfo.innerText = product.info;
    const buttonAddToCartCard = document.createElement('button');
    buttonAddToCartCard.classList.add('primary-button-card');
    buttonAddToCartCard.classList.add('add-to-cart-button-card');
    buttonAddToCartCard.innerText='Add To Cart';
    const buttonAddToCartCardImg=document.createElement('img');
    buttonAddToCartCardImg.setAttribute('src','./icons/bt_add_to_cart.svg');
    buttonAddToCartCardImg.setAttribute('alt', 'add to cart');
    
    body.appendChild(productDetailCard);

    productDetailCard.appendChild(productDetailCloseCard);
    productDetailCard.appendChild(productDetailCardImage);
    productDetailCard.appendChild(productInfoCard);

    productDetailCloseCard.appendChild(closeImageCard);
    productInfoCard.appendChild(pPrice);
    productInfoCard.appendChild(pName);
    productInfoCard.appendChild(pInfo);
    productInfoCard.appendChild(buttonAddToCartCard);
    buttonAddToCartCard.appendChild(buttonAddToCartCardImg);

    closeImageCard.addEventListener('click',toggleProductCardInfo);

    function removeFromCard(event){
            const index = parseInt(event.target.dataset.index);
            array.splice(index-1);
            renderProductInfoCard()
            toggleProductCardInfo();
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
