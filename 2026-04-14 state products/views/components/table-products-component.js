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
            <button class="button-page button-first">1</button>
            <button class="button-page button-prev"><</button>
            <button class="button-page button-next">></button>
            <button class="button-page button-last">?</button>

            <div id="tDivRange" class="range"></div>
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
     * @param { {products: Product[], pageSize: number, initialSkip: number} } tableModel 
     */
    setTableModel(tableModel) {
        this.tableModel = tableModel;
        this.renderProducts();
        this.renderPaginator();
    }

    connectedCallback() {
        this.render();

        this.shadow.querySelector('.button-first').addEventListener('click', _ => {
            this.dispatchEvent(new CustomEvent('pageselected', {
                detail: {
                    page: 0
                }
            }));
        });

        this.shadow.querySelector('.button-prev').addEventListener('click', _ => {
            this.dispatchEvent(new CustomEvent('pageselected', {
                detail: {
                    page: this.tableModel.currentPage - 1,
                }
            }));
        });

        this.shadow.querySelector('.button-next').addEventListener('click', _ => {
            this.dispatchEvent(new CustomEvent('pageselected', {
                detail: {
                    page: this.tableModel.currentPage + 1,
                }
            }));
        });

        this.shadow.querySelector('.button-last').addEventListener('click', _ => {
            this.dispatchEvent(new CustomEvent('pageselected', {
                detail: {
                    page: this.tableModel.productsQuantity % this.tableModel.pageSize 
                        ? Math.trunc(this.tableModel.productsQuantity / this.tableModel.pageSize)
                        : Math.trunc(this.tableModel.productsQuantity / this.tableModel.pageSize) - 1
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
        this.shadow.querySelector('.button-last').textContent = this.tableModel.productsQuantity;
        const initialPosition = this.tableModel.currentPage * this.tableModel.pageSize + 1;
        const finalPosition = initialPosition + this.tableModel.pageSize - 1;
        this.shadow.querySelector('.range').textContent = `Productos de ${initialPosition} a ${finalPosition}`;
        if (this.tableModel.currentPage === 0) {
            this.shadow.querySelector('.button-first').setAttribute('disabled', undefined);
            this.shadow.querySelector('.button-prev').setAttribute('disabled', undefined);
        } else {
            this.shadow.querySelector('.button-first').removeAttribute('disabled');
            this.shadow.querySelector('.button-prev').removeAttribute('disabled');
        }
    }
}

window.customElements.define('table-products', TableProductsComponent);