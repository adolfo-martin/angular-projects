import { ProductsService } from '../../services/products-service.js';
import { StateService } from '../../services/state-service.js';

export class TableProductsComponent extends HTMLElement {
    template = `
        <table>
            <tbody></tbody>
        </table>

        <style>
            table, tr, th, td {
                border: solid;
                border-collapse: collapse;
            }
        </style>
    `;

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = this.template;

        const service = new ProductsService();
        const nTbody = this.shadow.querySelector('tbody');
        service.retrieveProducts().then(products => {
            products.forEach(({id, name}) => {
                const nTr = nTbody.appendChild(document.createElement('tr'));
                const nTdName = nTr.appendChild(document.createElement('td'));
                nTdName.textContent = name;
                nTr.addEventListener('click', () => {
                    const stateService = new StateService();
                    /** @type { StateService } */
                    const cart = stateService.getValue('cart') ?? {products: []};
                    cart.products.push({name, price: 10.0});
                    stateService.setValue('cart', cart);
                });
            });
        });

    }
}

window.customElements.define('table-products', TableProductsComponent);