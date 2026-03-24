import DummyService from "../../services/dummy.service.js";

const nProductsContainer = document.querySelector('#tDivProductsContainer');
const nSpinner = document.querySelector('.spinner');
nProductsContainer.addEventListener('productsloadbegun', () => nSpinner.style.display = 'inline-block');
nProductsContainer.addEventListener('productsloadfinished', () => nSpinner.style.display = 'none');

await updatePageTitle();
await renderProductsWithinContainer();


function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category');
}


async function updatePageTitle() {
    const categoryId = getCategoryFromUrl();
    if (categoryId) {
        const service = new DummyService();
        const { name: categoryName } = (await service.getCategories()).find(({ id }) => id === categoryId);
        document.querySelector('h1.page-title').textContent = `Productos de la categoría ${categoryName}`;
    }
}


async function renderProductsWithinContainer() {
    const nProductsContainer = document.querySelector('#tDivProductsContainer');
    const nTemplate = document.querySelector('#tTmpProduct');

    nProductsContainer.dispatchEvent(new CustomEvent('productsloadbegun'));

    const categoryId = getCategoryFromUrl();
    let products = undefined;
    const service = new DummyService();
    if (categoryId) {
        products = await service.getProductsByCategoryId(categoryId);
    } else {
        products = await service.getProducts();
    }

    products.forEach(product => {
        const clone = nTemplate.content.cloneNode(true);
        
        const nCard = clone.querySelector('card-product');
        nCard.setAttribute('product', product.id);
        
        // const nTdName = clone.querySelector('*[product-name]');
        // nTdName.textContent = product.name;
        // const nTdQuantity = clone.querySelector('*[products-quantity]');
        // nTdQuantity.textContent = product.quantity;
        // const nTdImage = clone.querySelector('*[image-first-product]');
        // nTdImage.src = product.image;
        
        nProductsContainer.appendChild(clone);
    });

    nProductsContainer.dispatchEvent(new CustomEvent('productsloadfinished'));
}