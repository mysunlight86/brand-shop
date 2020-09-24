const cartId = document.getElementById('card');
const cartSubTotal = document.getElementById('cart-sub-total');
const cartGrandTotal = document.getElementById('cart-grand-total');

let cartObject = {
  product1: {
    url: 'img/cart-1.jpg',
    name: 'Mango People T-shirt',
    color: 'Red',
    size: 'Xll',
    price: '100',
    quantity: 2,
    shipping: 'FREE',
  },
  product2: {
    url: 'img/cart-2.jpg',
    name: 'Mango People T-shirt',
    color: 'Red',
    size: 'X',
    price: '200',
    quantity: 1,
    shipping: 'FREE',
  },
  product3: {
    url: 'img/cart-3.jpg',
    name: 'Mango People T-shirt',
    color: 'Red',
    size: 'Xl',
    price: '150',
    quantity: 3,
    shipping: 'FREE',
  },
};

function getSubtotal(cart) {
  let subtotal = 0;
  for (let product in cart) {
    subtotal += cart[product].price * cart[product].quantity;
  }
  return subtotal;
}

cartSubTotal.textContent = `$${getSubtotal(cartObject)}`;
cartGrandTotal.textContent = `$${getSubtotal(cartObject)}`;

function isEmpty(obj) {
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      return false;
    }
  }
  return true;
}

function initProductRow(obj) {
  divRowProduct = document.createElement('div');
  divRowProduct.className = 'row-product';
  cartId.appendChild(divRowProduct);

  aCartProductLink = document.createElement('a');
  aCartProductLink.className = 'cart-product-link';
  aCartProductLink.setAttribute('href', 'product.html');
  divRowProduct.appendChild(aCartProductLink);

  divRowProductLeft = document.createElement('div');
  divRowProductLeft.classList.add('row-product-option', 'row-product-left');
  aCartProductLink.appendChild(divRowProductLeft);

  divRowProductImg = document.createElement('div');
  divRowProductImg.className = 'row-product-img';
  divRowProductImg.style.cssText = `background-image: url(${obj.url});`;
  divRowProductLeft.appendChild(divRowProductImg);

  divRowProductText = document.createElement('div');
  divRowProductText.className = 'row-product-text';
  divRowProductLeft.appendChild(divRowProductText);

  h3RowProduct = document.createElement('h3');
  h3RowProduct.className = 'row-product-h3';
  h3RowProduct.textContent = obj.name;
  divRowProductText.appendChild(h3RowProduct);

  pRowProductColor = document.createElement('p');
  pRowProductColor.className = 'row-product-p';
  pRowProductColor.textContent = 'Color: ';
  divRowProductText.appendChild(pRowProductColor);

  spanRowProductPGrayColor = document.createElement('span');
  spanRowProductPGrayColor.className = 'row-product-p-gray';
  spanRowProductPGrayColor.textContent = obj.color;
  pRowProductColor.appendChild(spanRowProductPGrayColor);

  pRowProductSize = pRowProductColor.cloneNode(true);
  pRowProductSize.textContent = 'Size: ';
  divRowProductText.appendChild(pRowProductSize);

  spanRowProductPGraySize = spanRowProductPGrayColor.cloneNode(true);
  spanRowProductPGraySize.textContent = obj.size;
  pRowProductSize.appendChild(spanRowProductPGraySize);

  divRowProductRightPrice = document.createElement('div');
  divRowProductRightPrice.classList.add('row-product-option', 'row-product-right');
  divRowProductRightPrice.textContent = `$${obj.price}`;
  divRowProduct.appendChild(divRowProductRightPrice);

  divRowProductRightQuantity = divRowProductRightPrice.cloneNode(true);
  divRowProductRightQuantity.innerHTML = `<input type="number" min="1" placeholder="${obj.quantity}" class="row-product-form text-input">`;
  divRowProduct.appendChild(divRowProductRightQuantity);

  divRowProductRightShipping = divRowProductRightPrice.cloneNode(true);
  divRowProductRightShipping.textContent = obj.shipping;
  divRowProduct.appendChild(divRowProductRightShipping);

  divRowProductRightSubtotal = divRowProductRightPrice.cloneNode(true);
  divRowProductRightSubtotal.textContent = `$${obj.price * obj.quantity}`;
  divRowProduct.appendChild(divRowProductRightSubtotal);

  divRowProductRightAction = divRowProductRightPrice.cloneNode(true);
  divRowProductRightAction.innerHTML = `<a href="#" class="row-product-option-a"><i class="fas fa-times-circle"></i></a>`;
  divRowProduct.appendChild(divRowProductRightAction);
}

function initCart(cart) {
  cartId.innerHTML = `<div class="row-product-header">
                        <div class="row-product-name row-product-left">Product Details</div>
                        <div class="row-product-name row-product-right">unite Price</div>
                        <div class="row-product-name row-product-right">Quantity</div>
                        <div class="row-product-name row-product-right">shipping</div>
                        <div class="row-product-name row-product-right">Subtotal</div>
                        <div class="row-product-name row-product-right">ACTION</div>
                      </div>`;
  for (let product in cart) {
    initProductRow(cart[product]);
  }
}

function showCart(cart) {
  if (isEmpty(cart)) {
    cartId.textContent = 'Корзина пуста';
    cartId.style.padding = '20px 0';
  } else {
    initCart(cart);
  }
}

showCart(cartObject);
