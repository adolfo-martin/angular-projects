import { ProductsRestService } from '../services/products-rest-service.js';
import { StateService } from '../state/state-service.js';

await main();

async function main() {
    await retrieveAndRenderCategories();
    StateService.addObserver('category', retrieveAndRenderProducts);
    StateService.addObserver('category', categoryName => {
        document.querySelector('#tSpnProducts').textContent = ` de ${categoryName}`;
    });
}

async function retrieveAndRenderCategories() {
    const tagUlCategories = document.querySelector('#tUlCategories');
    const categories = await (new ProductsRestService()).retrieveCategories();
    categories.forEach(category => {
        const tagLi = tagUlCategories.appendChild(document.createElement('li'));
        tagLi.textContent = category.name;
        tagLi.addEventListener('click', _ => {
            StateService.setValue('category', category.id);
        });
    });
}

async function retrieveAndRenderProducts(category) {
    const tagUlProducts = document.querySelector('#tUlProducts');
    tagUlProducts.innerHTML = '';
    const products = await (new ProductsRestService()).retrieveProductsFromCategory(category);
    products.forEach(product => {
        tagUlProducts.appendChild(document.createElement('li')).textContent = product.name;
    });
}