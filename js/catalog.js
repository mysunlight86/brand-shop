const catalogId = document.getElementById('catalog');

const product = [
  {
    url: 'img/onproduct-1.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-2.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-3.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-4.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-5.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-6.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-7.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-8.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
  {
    url: 'img/onproduct-9.jpg',
    name: 'Mango People T-shirt',
    price: '100',
  },
];

function createCardElement(obj) {
  const divProductItem = document.createElement('div');
  divProductItem.classList.add('product-item');
  catalogId.appendChild(divProductItem);

  const aProductLink = document.createElement('a');
  aProductLink.classList.add('product-link');
  aProductLink.setAttribute('href', 'product.html');
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
  divPrice.textContent = `$${obj.price}`;
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
