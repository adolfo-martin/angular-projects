import { StateService } from '../../services/state-service.js';


export class ButtonCartComponent extends HTMLElement {
    shadow;

    template = `
        <div class="button-cart" data-products-quantity="0">🛒</div>
        <table class="hidden">
            <tbody></tbody>
        </table>

        <style>
            .button-cart {
                font-size: 2rem;
                position: relative;

                &:before {
                    content: attr(data-products-quantity);
                    position: absolute;
                    background-color: red;
                    color: white;
                    border-radius: 50%;
                    font-size: 1rem;
                    padding: 0.25rem;
                    height: fit-content;
                    aspect-ratio: 1;
                }
            }

            table, tr, th, td {
                border: solid;
                border-collapse: collapse;
                }
                
            table {
                position: absolute;
                z-index: 10;
                background-color: var(--color-950);
                color: white;
                right: 0;
            }

            .hidden {
                display: none;
            }
        </style>
    `;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();

        const stateService = new StateService();
        const cart = stateService.getValue('cart');
        if (cart) {
            const products = cart.products;
            const nCart = this.shadow.querySelector('.button-cart');
            nCart.dataset.productsQuantity = products.length;
        }

        const nCart = this.shadow.querySelector('.button-cart');
        nCart.addEventListener('click', () => {
            this.shadow.querySelector('table').classList.toggle('hidden');
        });

        stateService.addObserver('cart', cart => {
            const products = cart.products;
            const nCart = this.shadow.querySelector('.button-cart');
            nCart.dataset.productsQuantity = products.length;

            this.renderProducts(products);
        });
    }

    render() {
        this.shadow.innerHTML = this.template;
    }

    renderProducts(products) {
        const stateService = new StateService();
        const cart = stateService.getValue('cart');
        if (cart) {
            const nTbody = this.shadow.querySelector('tbody');
            nTbody.innerHTML = '';
            const products = cart.products;
            products.forEach(({id, name}) => {
                const nTr = nTbody.appendChild(document.createElement('tr'));
                const nTd = nTr.appendChild(document.createElement('td'));
                nTd.textContent = name;
            });
        }
    }
}

window.customElements.define('button-cart', ButtonCartComponent);