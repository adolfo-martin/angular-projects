import ProductsService from "./ProductsService.js";
import ErrorsService from '../ErrorsService.js';

export default class TableProductsComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                table {
                    border-collapse: collapse;
                }
                table, th, td {
                    border: 1px solid black;
                }
            </style>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }


    async connectedCallback() {
        ErrorsService.addHandler('ProductsServiceError', e => {
            alert(e.message);
        })

        try {
            const service = new ProductsService();
            const products = await service.retrieveProducts();
            this.render(products);
        } catch (error) {
            ErrorsService.handle(error.name)(error);
        }        
    }


    render(products) {
        const nTable = this.shadowRoot.querySelector('tbody');

        products.forEach(product => {
            const nTr = document.createElement('tr');
            nTable.appendChild(nTr);

            const nTd = document.createElement('td');
            nTr.appendChild(nTd);
            nTd.setAttribute('data-id', product.id);
            nTd.addEventListener('click', _ => fireProductSelectedEvent(product));

            const nText = document.createTextNode(product.name);
            nTd.appendChild(nText);            
        });

        const theThis = this;

        function fireProductSelectedEvent(product) {
            const event = new CustomEvent('productSelected', {
                detail: product
            });
            theThis.dispatchEvent(event);
        }
    }
    
}

window.customElements.define('table-products', TableProductsComponent);