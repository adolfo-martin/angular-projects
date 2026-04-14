import { StateService } from '../../services/state-service.js';


export class ButtonCartComponent extends HTMLElement {
    shadow;

    template = `
        <div class="button-cart" data-products-quantity="0">🛒</div>
        <table></table>

        <style>
            .button-cart {
                font-size: 2rem;
                position: relative;

                &:after {
                    content: attr(data-products-quantity);
                    position: absolute;
                }
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

        stateService.addObserver('cart', cart => {
            const products = cart.products;
            const nCart = this.shadow.querySelector('.button-cart');
            nCart.dataset.productsQuantity = products.length;
        });
    }

    render() {
        this.shadow.innerHTML = this.template;
    }
}

window.customElements.define('button-cart', ButtonCartComponent);