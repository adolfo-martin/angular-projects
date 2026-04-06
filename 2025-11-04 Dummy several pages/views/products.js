import DummyService from "../services/dummy.service.js";

setup();

async function setup() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('category');

    const service = new DummyService();
    const productsIds = await service.getProductsByCategory(categoryId);

    const promises = productsIds.map(id => service.getProductById(id))
    const products = await Promise.all(promises);

    renderProductCards(products);
}

/**
 * 
 * @param {{id: number, name: string, description: string, brand: string, price: number, image: string}[]} products 
 */
function renderProductCards(products) {
    const nContainer = document.querySelector('#tDivProducts');

    products.forEach(product => {
        const nCard = document.createElement('div');
        nContainer.appendChild(nCard);
        nCard.classList.add('card-product');
        nCard.dataset.product = product.id;
        // nCard.addEventListener('click', handlerCardClick);

        const nHeader = document.createElement('header');
        nCard.appendChild(nHeader);
        nHeader.textContent = product.name;

        const nImage = document.createElement('img');
        nCard.appendChild(nImage);
        nImage.src = product.image;
    });
}


function handlerCardClick(e) {
    const nCard = e.target;
    const productId = nCard.dataset.product;
}