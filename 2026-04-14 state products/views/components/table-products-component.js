import { Product } from '../../models/product.model.js';
import { StateService } from '../../services/state-service.js';

export class TableProductsComponent extends HTMLElement {
    /** @type { {products: Product[], pageSize: number, currentPage: number, productsQuantity: number} } */
    tableModel = undefined;

    template = `
        <table>
            <tbody></tbody>
        </table>

        <section class="paginator">
            <div class="button-page button-first">1</div>
            <div class="button-page button-prev"><</div>
            <div class="button-page button-next">></div>
            <div class="button-page button-last">?</div>
        </section>
        

        <style>
            table, tr, th, td {
                border: solid;
                border-collapse: collapse;
            }

            img {
                height: 4rem;
            }

            .paginator {
                display: flex;
                gap: 1rem;
            }

            .button-page {
                border: solid 2px blue;
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
        this.renderProducts();
        this.renderPaginator();
    }

    connectedCallback() {
        this.render();

        const nButFirst = this.shadow.querySelector('.button-first');
        nButFirst.addEventListener('click', _ => {
            this.dispatchEvent(new CustomEvent('pageselected'), {
                detail: {
                    page: 0
                }
            });
        });

        const nButNext = this.shadow.querySelector('.button-next');
        nButNext.addEventListener('click', _ => {
            this.dispatchEvent(new CustomEvent('pageselected', {
                detail: {
                    page: this.tableModel.currentPage + 1,
                }
            }));
        });

    }

    render() {
        this.shadow.innerHTML = this.template;
    }

    renderProducts() {
        const nTbody = this.shadow.querySelector('tbody');
        nTbody.innerHTML = '';
        
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
    }

    renderPaginator() {
        const nButLast = this.shadow.querySelector('.button-last');
        nButLast.textContent = this.tableModel.productsQuantity;
    }
}

window.customElements.define('table-products', TableProductsComponent);