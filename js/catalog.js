const catalogId = document.getElementById('catalog');

var product = [
  {
    id: '003',
    url: 'img/onproduct-1.jpg',
    name: 'Mango People T-shirt',
    price: 100,
  },
  {
    id: '004',
    url: 'img/onproduct-2.jpg',
    name: 'Mango People T-shirt',
    price: 125,
  },
  {
    id: '005',
    url: 'img/onproduct-3.jpg',
    name: 'Mango People T-shirt',
    price: 200,
  },
  {
    id: '006',
    url: 'img/onproduct-4.jpg',
    name: 'Mango People T-shirt',
    price: 175,
  },
  {
    id: '007',
    url: 'img/onproduct-5.jpg',
    name: 'Mango People T-shirt',
    price: 103,
  },
  {
    id: '008',
    url: 'img/onproduct-6.jpg',
    name: 'Mango People T-shirt',
    price: 149,
  },
  {
    id: '009',
    url: 'img/onproduct-7.jpg',
    name: 'Mango People T-shirt',
    price: 207,
  },
  {
    id: '010',
    url: 'img/onproduct-8.jpg',
    name: 'Mango People T-shirt',
    price: 238,
  },
  {
    id: '011',
    url: 'img/onproduct-9.jpg',
    name: 'Mango People T-shirt',
    price: 156,
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

showCatalog(product);
