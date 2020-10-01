const catalogId = document.getElementById('catalog');

var product = [
  {
    id: '003',
    url: 'img/onproduct-1.jpg',
    name: 'Mango People T-shirt',
    price: 100,
    featured: false,
  },
  {
    id: '004',
    url: 'img/onproduct-2.jpg',
    name: 'Mango People T-shirt',
    price: 125,
    featured: false,
  },
  {
    id: '005',
    url: 'img/onproduct-3.jpg',
    name: 'Mango People T-shirt',
    price: 200,
    featured: true,
  },
  {
    id: '006',
    url: 'img/onproduct-4.jpg',
    name: 'Mango People T-shirt',
    price: 175,
    featured: false,
  },
  {
    id: '007',
    url: 'img/onproduct-5.jpg',
    name: 'Mango People T-shirt',
    price: 103,
    featured: true,
  },
  {
    id: '008',
    url: 'img/onproduct-6.jpg',
    name: 'Mango People T-shirt',
    price: 149,
    featured: false,
  },
  {
    id: '009',
    url: 'img/onproduct-7.jpg',
    name: 'Mango People T-shirt',
    price: 207,
    featured: true,
  },
  {
    id: '010',
    url: 'img/onproduct-8.jpg',
    name: 'Mango People T-shirt',
    price: 238,
    featured: false,
  },
  {
    id: '011',
    url: 'img/onproduct-9.jpg',
    name: 'Mango People T-shirt',
    price: 156,
    featured: false,
  },
  {
    id: '012',
    url: 'img/product-1.jpg',
    name: 'Mango People T-shirt',
    price: 200,
    featured: true,
  },
  {
    id: '013',
    url: 'img/product-2.jpg',
    name: 'Mango People T-shirt',
    price: 250,
    featured: true,
  },
  {
    id: '014',
    url: 'img/product-4.jpg',
    name: 'Mango People T-shirt',
    price: 150,
    featured: true,
  },
  {
    id: '015',
    url: 'img/product-5.jpg',
    name: 'Mango People T-shirt',
    price: 100,
    featured: true,
  },
  {
    id: '016',
    url: 'img/product-7.jpg',
    name: 'Mango People T-shirt',
    price: 125,
    featured: true,
  },
];

function createCardElement(obj) {
  const divProductItem = document.createElement('div');
  divProductItem.classList.add('product-item');
  catalogId.appendChild(divProductItem);

  const aProductLink = document.createElement('a');
  aProductLink.classList.add('product-link');
  aProductLink.setAttribute('href', 'product.html');
  aProductLink.setAttribute('data-id', `${obj.id}`);
  divProductItem.appendChild(aProductLink);

  const divPicture = document.createElement('div');
  divPicture.classList.add('picture');
  divPicture.style.cssText = `background-image: url(${obj.url});`;
  aProductLink.appendChild(divPicture);

  const divDescriptionProduct = document.createElement('div');
  divDescriptionProduct.classList.add('description-product');
  divDescriptionProduct.textContent = obj.name;
  aProductLink.appendChild(divDescriptionProduct);

  const divPrice = document.createElement('div');
  divPrice.classList.add('price');
  divPrice.textContent = `$${obj.price.toFixed(2)}`;
  aProductLink.appendChild(divPrice);

  const aCartOnBlack = document.createElement('a');
  aCartOnBlack.classList.add('cart-on-black');
  aCartOnBlack.setAttribute('href', 'cart.html');
  aCartOnBlack.innerHTML = `<img src="img/cart-white.svg" alt="белая корзинка на темном фоне">Add to&nbsp;Cart`;
  divProductItem.appendChild(aCartOnBlack);
}

function showCatalog(arr) {
  for (let item in arr) {
    createCardElement(arr[item]);
  }
}

function addToCart(event) {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    const currentId = event.target.previousSibling.dataset.id;
    let foundId = false;
    const cartGlobal = window.objectCart;
    for (let item in cartGlobal) {
      if (item === currentId) {
        foundId = true;
        cartGlobal[item].quantity++;
      }
    }
    if (foundId === false) {
      const catalogGlobal = window.product;
      for (let product in catalogGlobal) {
        if (catalogGlobal[product].id === currentId) {
          cartGlobal[currentId] = Object.assign({}, catalogGlobal[product]);
          cartGlobal[currentId].quantity = 1;
        }
      }
    }
    showCart(cartGlobal);
    divTotalText.textContent = `$${getSubtotal(objectCart).toFixed(2)}`;
  }
}

showCatalog(product);

catalogId.addEventListener('click', addToCart);
