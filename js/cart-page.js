const cartId = document.getElementById('cart');
const cartSubTotal = document.getElementById('cart-sub-total');
const cartGrandTotal = document.getElementById('cart-grand-total');
const accordion = document.getElementsByClassName('accordion');
const buttonsOrder = document.getElementsByClassName('buttons-order');

let globalCart = window.objectCart;

function getSubtotal(cart) {
  let subtotal = 0;
  for (let product in cart) {
    subtotal += cart[product].price * cart[product].quantity;
  }
  return subtotal;
}

cartSubTotal.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;
cartGrandTotal.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;

function isEmpty(obj) {
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      return false;
    }
  }
  return true;
}

function initProductRow(obj) {
  const divRowProduct = document.createElement('div');
  divRowProduct.className = 'row-product';
  divRowProduct.setAttribute('data-id', `${obj.id}`);
  cartId.appendChild(divRowProduct);

  const aCartProductLink = document.createElement('a');
  aCartProductLink.className = 'cart-product-link';
  aCartProductLink.setAttribute('href', 'product.html');
  divRowProduct.appendChild(aCartProductLink);

  const divRowProductLeft = document.createElement('div');
  divRowProductLeft.classList.add('row-product-option', 'row-product-left');
  aCartProductLink.appendChild(divRowProductLeft);

  const divRowProductImg = document.createElement('div');
  divRowProductImg.className = 'row-product-img';
  divRowProductImg.style.cssText = `background-image: url(${obj.url});`;
  divRowProductLeft.appendChild(divRowProductImg);

  const divRowProductText = document.createElement('div');
  divRowProductText.className = 'row-product-text';
  divRowProductLeft.appendChild(divRowProductText);

  const h3RowProduct = document.createElement('h3');
  h3RowProduct.className = 'row-product-h3';
  h3RowProduct.textContent = obj.name;
  divRowProductText.appendChild(h3RowProduct);

  const pRowProductColor = document.createElement('p');
  pRowProductColor.className = 'row-product-p';
  pRowProductColor.textContent = 'Color: ';
  divRowProductText.appendChild(pRowProductColor);

  const spanRowProductPGrayColor = document.createElement('span');
  spanRowProductPGrayColor.className = 'row-product-p-gray';
  spanRowProductPGrayColor.textContent = obj.color;
  pRowProductColor.appendChild(spanRowProductPGrayColor);

  const pRowProductSize = pRowProductColor.cloneNode(true);
  pRowProductSize.textContent = 'Size: ';
  divRowProductText.appendChild(pRowProductSize);

  const spanRowProductPGraySize = spanRowProductPGrayColor.cloneNode(true);
  spanRowProductPGraySize.textContent = obj.size;
  pRowProductSize.appendChild(spanRowProductPGraySize);

  const divRowProductRightPrice = document.createElement('div');
  divRowProductRightPrice.classList.add('row-product-option', 'row-product-right');
  divRowProductRightPrice.textContent = `$${obj.price.toFixed(2)}`;
  divRowProduct.appendChild(divRowProductRightPrice);

  const divRowProductRightQuantity = divRowProductRightPrice.cloneNode(true);
  divRowProductRightQuantity.innerHTML = `<input type="number" min="1" placeholder="${obj.quantity}" class="row-product-form text-input">`;
  divRowProduct.appendChild(divRowProductRightQuantity);

  const divRowProductRightShipping = divRowProductRightPrice.cloneNode(true);
  divRowProductRightShipping.textContent = obj.shipping;
  divRowProduct.appendChild(divRowProductRightShipping);

  const divRowProductRightSubtotal = divRowProductRightPrice.cloneNode(true);
  divRowProductRightSubtotal.textContent = `$${(obj.price * obj.quantity).toFixed(2)}`;
  divRowProductRightSubtotal.classList.add('total-price-for-product');
  divRowProduct.appendChild(divRowProductRightSubtotal);

  const divRowProductRightAction = divRowProductRightPrice.cloneNode(true);
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

function showCartOnPage(cart) {
  if (isEmpty(cart)) {
    cartId.textContent = 'Корзина пуста';
    cartId.style.padding = '20px 0';
  } else {
    initCart(cart);
  }
}

function toggleAccordion() {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let details = this.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    });
  }
}

showCartOnPage(globalCart);
toggleAccordion();

buttonsOrder[0].children[0].addEventListener('click', () => {
  globalCart = {};
  showCartOnPage(globalCart);
  cartSubTotal.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;
  cartGrandTotal.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;
  showCart(globalCart);
  divTotalText.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;
});

buttonsOrder[0].children[1].addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementsByClassName('details')[1].style.display = 'block';
});

cartId.addEventListener('input', (event) => {
  const parentProduct = event.target.closest('.row-product');
  const currentId = parentProduct.dataset.id;
  globalCart[currentId].quantity = event.target.value;
  const totalPriceForProduct = parentProduct.querySelector('.total-price-for-product');
  totalPriceForProduct.textContent = `$${(globalCart[currentId].price * globalCart[currentId].quantity).toFixed(2)}`;
  cartSubTotal.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;
  cartGrandTotal.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;
  showCart(globalCart);
  divTotalText.textContent = `$${getSubtotal(globalCart).toFixed(2)}`;
});
