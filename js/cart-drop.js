const divCartDrop = document.querySelector('#cart-drop');
const divTotalText = document.getElementsByClassName('total-text')[1];

let objectCart = {
  product1: {
    url: 'img/checkout-1.jpg',
    name: 'Rebox Zane',
    quantity: 1,
    price: 150,
  },
  product2: {
    url: 'img/checkout-2.jpg',
    name: 'Rebox Zane',
    quantity: 1,
    price: 200,
  },
};

function getSubtotal(cart) {
  let subtotal = 0;
  for (let product in cart) {
    subtotal += cart[product].price * cart[product].quantity;
  }
  return subtotal;
}

divTotalText.textContent = `$${getSubtotal(objectCart)}.00`;

function isEmpty(obj) {
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      return false;
    }
  }
  return true;
}

function createProductRow(obj) {
  const divAccountProduct = document.createElement('div');
  divAccountProduct.classList.add('account-product');
  divCartDrop.appendChild(divAccountProduct);

  const aAccountProductLink = document.createElement('a');
  aAccountProductLink.classList.add('account-product-link');
  aAccountProductLink.href = 'product.html';
  divAccountProduct.appendChild(aAccountProductLink);

  const divAccountImg = document.createElement('div');
  divAccountImg.classList.add('account-img');
  divAccountImg.style.cssText = `background-image: url(${obj.url});`;
  aAccountProductLink.appendChild(divAccountImg);

  const divAccountText = document.createElement('div');
  divAccountText.classList.add('account-text');
  aAccountProductLink.appendChild(divAccountText);

  const divAccountName = document.createElement('div');
  divAccountName.classList.add('account-name');
  divAccountName.textContent = obj.name;
  divAccountText.appendChild(divAccountName);

  const divStars = document.createElement('div');
  divStars.classList.add('stars');
  divStars.innerHTML = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`;
  divAccountText.appendChild(divStars);

  const divCounts = document.createElement('div');
  divCounts.classList.add('counts');
  divCounts.innerHTML = `${obj.quantity}&nbsp;x $${obj.price}`;
  divAccountText.appendChild(divCounts);

  const aAccountProductClearInDiv = document.createElement('div');
  aAccountProductClearInDiv.innerHTML = `<a href="#" class="account-product-clear"><i class="fas fa-times-circle"></i></a>`;
  divAccountProduct.appendChild(aAccountProductClearInDiv);
}

function buildCart(cart) {
  for (let product in cart) {
    createProductRow(cart[product]);
  }
}

function showCart(cart) {
  if (isEmpty(cart)) {
    divCartDrop.textContent = 'Корзина пуста';
  } else {
    buildCart(cart);
  }
}

showCart(objectCart);
