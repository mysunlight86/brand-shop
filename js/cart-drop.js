const divCartDrop = document.querySelector('#cart-drop');
const divTotalText = document.getElementsByClassName('total-text')[1];
// const catalog = document.getElementById('catalog');

var objectCart = {
  '001': {
    id: '001',
    url: 'img/checkout-1.jpg',
    name: 'Rebox Zane',
    quantity: 1,
    price: 150,
    featured: false,
  },
  '002': {
    id: '002',
    url: 'img/checkout-2.jpg',
    name: 'Rebox Zane',
    quantity: 1,
    price: 200,
    featured: false,
  },
};

function getSubtotal(cart) {
  let subtotal = 0;
  for (let product in cart) {
    subtotal += cart[product].price * cart[product].quantity;
  }
  return subtotal;
}

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
  divAccountProduct.setAttribute('data-id', `${obj.id}`);
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
  divCounts.innerHTML = `${obj.quantity}&nbsp;x $${obj.price.toFixed(2)}`;
  divAccountText.appendChild(divCounts);

  const aAccountProductClearInDiv = document.createElement('div');
  aAccountProductClearInDiv.innerHTML = `<a href="#" class="account-product-clear"><i class="fas fa-times-circle"></i></a>`;
  divAccountProduct.appendChild(aAccountProductClearInDiv);
}

function buildCart(cart) {
  divCartDrop.textContent = '';
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

// function addToCart(event) {
//   event.preventDefault();
//   if (event.target.tagName === 'A') {
//     const currentId = event.target.previousSibling.dataset.id;
//     let foundId = false;
//     for (let item in objectCart) {
//       if (item === currentId) {
//         foundId = true;
//         objectCart[item].quantity++;
//       }
//     }
//     if (foundId === false) {
//       const catalogGlobal = window.product;
//       for (let product in catalogGlobal) {
//         if (catalogGlobal[product].id === currentId) {
//           objectCart[currentId] = Object.assign({}, catalogGlobal[product]);
//           objectCart[currentId].quantity = 1;
//         }
//       }
//     }
//     showCart(objectCart);
//     divTotalText.textContent = `$${getSubtotal(objectCart).toFixed(2)}`;
//   }
// }

function deleteFromCart(event) {
  event.preventDefault();
  if (event.target.tagName === 'I') {
    const currentId = event.target.closest('.account-product').dataset.id;
    for (let item in objectCart) {
      if (item === currentId) {
        if (objectCart[item].quantity > 1) {
          objectCart[item].quantity--;
        } else {
          delete objectCart[item];
        }
      }
    }
    showCart(objectCart);
    divTotalText.textContent = `$${getSubtotal(objectCart).toFixed(2)}`;
  }
}

showCart(objectCart);
divTotalText.textContent = `$${getSubtotal(objectCart).toFixed(2)}`;

// catalog.addEventListener('click', addToCart);
divCartDrop.addEventListener('click', deleteFromCart);
