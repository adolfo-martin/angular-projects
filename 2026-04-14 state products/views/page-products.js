import { ProductsService } from '../services/products-service.js';
import { StateService } from '../services/state-service.js';
import { TableProductsComponent } from './components/table-products-component.js';


const stateService = new StateService();
stateService.setValue('cart', { products: [] });

/** @type { StateService } */ 
stateService.setValue('table-status', {
    products: null,
    pageSize: null,
    currentPage: null,
    productsQuantity: null,    
});


await setup();

async function setup() {
    await setupProductTable();
}

function showSpinnerLoading(hasToShow) {
    if (hasToShow) {
        document.querySelector('spinner-loading').setAttribute('status', 'loading');
        document.querySelector('spinner-loading').classList.remove('hidden');
    } else {
        document.querySelector('spinner-loading').setAttribute('status', 'none');
        document.querySelector('spinner-loading').classList.add('hidden');
    }
}

async function setupProductTable() {
    let currentPage = 0;
    let pageSize = 5;

    /** @type { StateService } */ 
    stateService.addObserver('table-status', ({products, pageSize, currentPage, productsQuantity}) => {
        /** @type { TableProductsComponent } */
        document.querySelector('#tTabProducts').setTableModel({
            products,
            pageSize,
            currentPage,
            productsQuantity,
        });    
    });

    const productsService = new ProductsService();
    showSpinnerLoading(true);
    const products = await productsService.retrieveProducts(currentPage, pageSize);
    const productsQuantity = await productsService.retrieveProductsQuantity();
    showSpinnerLoading(false);

    /** @type { StateService } */ 
    stateService.setValue('table-status', {
        ...stateService.getValue('table-status'),
        products,
        pageSize,
        currentPage,
        productsQuantity,
    });

    document.querySelector('#tTabProducts').addEventListener('pageselected', async e => {
        const currentPage = e.detail.page;
        const productsService = new ProductsService();
        showSpinnerLoading(true);
        const products = await productsService.retrieveProducts(currentPage * pageSize, pageSize);
        showSpinnerLoading(false);
        document.querySelector('#tTabProducts').setTableModel({
            products,
            pageSize,
            currentPage,
            productsQuantity,
        });
    });
}



// import { ProductsService } from '../services/products-service.js';
// import { StateService } from '../services/state-service.js';
// import { TableProductsComponent } from './components/table-products-component.js';

// await setup();

// const stateService = new StateService();
// stateService.setValue('cart', { products: [] });

// /** @type { StateService } */ 
// stateService.setValue('table-status', {
//     products: null,
//     pageSize: null,
//     currentPage: null,
//     productsQuantity: null,    
// });

// /** @type { StateService } */ 
// stateService.addObserver('table-status', status => {
    
// });

// async function setup() {
//     await setupProductTable();
// }

// async function setupProductTable() {
//     let currentPage = 0;
//     let pageSize = 5;

//     /** @type { StateService } */ 
//     stateService.setValue('table-status', {
//         ...stateService.getValue('table-status'),
//         pageSize: null,
//         currentPage: null,
//     });

//     const productsService = new ProductsService();
//     const products = await productsService.retrieveProducts(0, pageSize);
//     const productsQuantity = await productsService.retrieveProductsQuantity();

//     /** @type { TableProductsComponent } */
//     const nTabProducts = document.querySelector('#tTabProducts');
//     nTabProducts.setTableModel({
//         products,
//         pageSize,
//         currentPage,
//         productsQuantity,
//     });

//     nTabProducts.addEventListener('pageselected', async e => {
//         const page = e.detail.page;
//         const productsService = new ProductsService();
//         const products = await productsService.retrieveProducts(page * pageSize, pageSize);
//         nTabProducts.setTableModel({
//             products,
//             pageSize,
//             currentPage: page,
//             productsQuantity,
//         });
//     });
// }



