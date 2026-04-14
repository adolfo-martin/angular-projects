import { Product } from '../../models/product.model.js';
import { ProductsService } from '../../services/products-service.js';
import { StateService } from '../../services/state-service.js';

export class TableProductsComponent extends HTMLElement {
    /** @type { {products: Product[], pageSize: number, currentPage: number} } */
    tableModel = undefined;

    template = `
        <table>
            <tbody></tbody>
        </table>

        <style>
            table, tr, th, td {
                border: solid;
                border-collapse: collapse;
            }

            img {
                height: 4rem;
            }
        </style>
    `;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    /**
     * 
     * @param { {products: Product[], pageSize: number, currentPage: number} } tableModel 
     */
    setTableModel(tableModel) {
        this.tableModel = tableModel;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = this.template;

        const nTbody = this.shadow.querySelector('tbody');

        this.tableModel?.products.forEach(({ id, name, price, image }, i) => {
            if (i >= (this.tableModel.currentPage + 1) * this.tableModel.pageSize) return;

            const nTr = nTbody.appendChild(document.createElement('tr'));
            nTr.dataset.productId = id;

            const nTdName = nTr.appendChild(document.createElement('td'));
            nTdName.textContent = name;
            const nTdPrice = nTr.appendChild(document.createElement('td'));
            nTdPrice.textContent = price;
            const nImage = (nTr.appendChild(document.createElement('td'))).appendChild(document.createElement('img'));
            nImage.src = image;

            nTr.addEventListener('click', () => {
                const stateService = new StateService();
                /** @type { StateService } */
                const cart = stateService.getValue('cart') ?? { products: [] };
                cart.products.push({ name, price: 10.0 });
                stateService.setValue('cart', cart);
            });
        });

        // const service = new ProductsService();
        // service.retrieveProducts().then(products => {
        //     products.forEach(({id, name}) => {
        //         const nTr = nTbody.appendChild(document.createElement('tr'));
        //         const nTdName = nTr.appendChild(document.createElement('td'));
        //         nTdName.textContent = name;
        //         nTr.addEventListener('click', () => {
        //             const stateService = new StateService();
        //             /** @type { StateService } */
        //             const cart = stateService.getValue('cart') ?? {products: []};
        //             cart.products.push({name, price: 10.0});
        //             stateService.setValue('cart', cart);
        //         });
        //     });
        // });

    }
}

window.customElements.define('table-products', TableProductsComponent);