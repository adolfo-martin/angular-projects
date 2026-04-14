import { ProductsService } from '../services/products-service.js';
import { StateService } from '../services/state-service.js';
import { TableProductsComponent } from './components/table-products-component.js';

await setup();

async function setup() {
    const productsService = new ProductsService();
    const products = await productsService.retrieveProducts();
    /** @type { TableProductsComponent } */
    const nTabProducts = document.querySelector('#tTabProducts');
    nTabProducts.setTableModel({
        products,
        pageSize: 5,
        currentPage: 0,
    });

    const stateService = new StateService();
    stateService.setValue('cart', {
        products: [
            // { name: 'Ratón Logitec', price: 15.95 },
            // { name: 'Teclado Krom', price: 34.50 },
            // { name: 'Monitor iiyama', price: 189.90 },
            // { name: 'Webcam Logitec', price: 28.95 },
            // { name: 'Altavoz Xiaomi', price: 49.90 },
        ]
    });
}