const goodsList = document.querySelector('.goods-list');

var goods = [
  {
    id: '003',
    cover: 'img/onproduct-1.jpg',
    name: 'Mango People T-shirt',
    price: 100,
    featured: false,
  },
  {
    id: '004',
    cover: 'img/onproduct-2.jpg',
    name: 'Mango People T-shirt',
    price: 125,
    featured: false,
  },
  {
    id: '005',
    cover: 'img/onproduct-3.jpg',
    name: 'Mango People T-shirt',
    price: 200,
    featured: true,
  },
  {
    id: '006',
    cover: 'img/onproduct-4.jpg',
    name: 'Mango People T-shirt',
    price: 175,
    featured: false,
  },
  {
    id: '007',
    cover: 'img/onproduct-5.jpg',
    name: 'Mango People T-shirt',
    price: 103,
    featured: true,
  },
  {
    id: '008',
    cover: 'img/onproduct-6.jpg',
    name: 'Mango People T-shirt',
    price: 149,
    featured: false,
  },
  {
    id: '009',
    cover: 'img/onproduct-7.jpg',
    name: 'Mango People T-shirt',
    price: 207,
    featured: true,
  },
  {
    id: '010',
    cover: 'img/onproduct-8.jpg',
    name: 'Mango People T-shirt',
    price: 238,
    featured: false,
  },
  {
    id: '011',
    cover: 'img/onproduct-9.jpg',
    name: 'Mango People T-shirt',
    price: 156,
    featured: false,
  },
  {
    id: '012',
    cover: 'img/product-1.jpg',
    name: 'Mango People T-shirt',
    price: 200,
    featured: true,
  },
  {
    id: '013',
    cover: 'img/product-2.jpg',
    name: 'Mango People T-shirt',
    price: 250,
    featured: true,
  },
  {
    id: '014',
    cover: 'img/product-4.jpg',
    name: 'Mango People T-shirt',
    price: 150,
    featured: true,
  },
  {
    id: '015',
    cover: 'img/product-5.jpg',
    name: 'Mango People T-shirt',
    price: 100,
    featured: true,
  },
  {
    id: '016',
    cover: 'img/product-7.jpg',
    name: 'Mango People T-shirt',
    price: 125,
    featured: true,
  },
];

class GoodsItem {
  constructor(id, cover, name, price) {
    this.id = id;
    this.cover = cover;
    this.name = name;
    this.price = price;
  }

  render() {
    return `<div class="product-item">
      <a href="product.html" data-id="${this.id}" class="product-link">
        <div class="picture" style="background-image: url(${this.cover});"></div>
        <div class="description-product">${this.name}</div>
        <div class="price">$${this.price.toFixed(2)}</div>
      </a>
      <a href="cart.html" class="cart-on-black">
        <img src="img/cart-white.svg" alt="белая корзинка на темном фоне">
        Add to&nbsp;Cart
      </a>
    </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = goods;
    this.goodsArrayObjects = this.goods.map(item => new GoodsItem(item.id, item.cover, item.name, item.price));
  }

  render() {
    const itemsHtmls = this.goodsArrayObjects.map(item => item.render());
    return itemsHtmls.join('');
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.goods.forEach(element => totalPrice += element.price);
    return totalPrice;
  }
}

class CartList {}

class CartItem {}

const list = new GoodsList();
list.fetchGoods();

goodsList.innerHTML = list.render();

// console.log(goods);
// console.log(list.getTotalPrice());

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
      const catalogGlobal = window.goods;
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

goodsList.addEventListener('click', addToCart);
