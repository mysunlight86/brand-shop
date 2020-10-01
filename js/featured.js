const templateFeaturedItemId = document.getElementById('template-featured-item');
const productItemsClass = document.querySelector('.product-items');

function buildFeaturedItems(url) {
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let item of data) {
      if (item.featured) {
        const newFeaturedItem = templateFeaturedItemId.cloneNode(true);
        const picture = newFeaturedItem.querySelector('.picture');
        picture.style.cssText = `background-image: url(${item.url});`;
        const description = newFeaturedItem.querySelector('.description');
        description.textContent = item.name;
        const price = newFeaturedItem.querySelector('.price');
        price.textContent = `$${item.price.toFixed(2)}`;
        newFeaturedItem.style.display = 'block';
        productItemsClass.appendChild(newFeaturedItem);
      }
    }
  });
}

buildFeaturedItems('db/products.json');
