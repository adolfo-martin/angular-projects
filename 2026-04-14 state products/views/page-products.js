import { ProductsService } from '../services/products-service.js';
import { StateService } from '../services/state-service.js';
import { TableProductsComponent } from './components/table-products-component.js';

await setup();

async function setup() {
    const productsService = new ProductsService();
    const products = await productsService.retrieveProducts();
    const productsQuantity = await productsService.retrieveProductsQuantity();

    /** @type { TableProductsComponent } */
    const nTabProducts = document.querySelector('#tTabProducts');
    nTabProducts.setTableModel({
        products,
        pageSize: 5,
        currentPage: 0,
        productsQuantity,
    });

    const stateService = new StateService();
    stateService.setValue('cart', { products: [] });

    nTabProducts.addEventListener('pageselected', async e => {
        const page = e.detail.page;
        const productsService = new ProductsService();
        const products = await productsService.retrieveProducts(5, page);
        nTabProducts.setTableModel({
            products,
            pageSize: 5,
            currentPage: page,
            productsQuantity,
        });
    });
}