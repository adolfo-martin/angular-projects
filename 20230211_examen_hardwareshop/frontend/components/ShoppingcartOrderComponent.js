import HardwareshopService from '../services/HardwareshopService.js';

export default class ShoppingcartOrderComponent extends HTMLElement {
    #shoppingCart;
    #template = `
        <style>
            table, tr, th, td {
                border: solid 5px var(--dark-color);
                border-collapse: collapse;
            }

            button {
                margin-top: 1rem;
                font-size: inherit;
            }

            th {
                background-color: var(--dark-color);
                color: white;
            }

            th, td {
                padding: 0.25em 0.5em
            }

            td:nth-child(3) {
                background-color: var(--dark-color);
                color: white;
                font-weight: bold;
            }
        </style>

        <h1>Pedido</h1>
        <table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    
    async connectedCallback() {
        this.shadowRoot.innerHTML = this.#template;
        await this.#getShoppingcartAndRenderOrder();
    }
    
    
    async #getShoppingcartAndRenderOrder() {
        this.#shoppingCart = JSON.parse(window.sessionStorage.getItem('shoppingcart')) ?? [];

        try {
            const nTable = this.shadowRoot.querySelector('table');
            nTable.innerHTML = '';

            for (const processor of this.#shoppingCart) {
    
                const nTr = document.createElement('tr');
                nTable.appendChild(nTr);

                const nTdLongname = document.createElement('td');
                nTr.appendChild(nTdLongname);
                nTdLongname.textContent = processor.name;

                const nTdPrice = document.createElement('td');
                nTr.appendChild(nTdPrice);
                nTdPrice.textContent = processor.price;

                const nTdAddButton = document.createElement('td');
                nTr.appendChild(nTdAddButton);
                nTdAddButton.textContent = '❌';
                nTdAddButton.setAttribute('data-processor', processor.processorUuid);
                nTdAddButton.setAttribute('data-name', processor.name);
                nTdAddButton.setAttribute('data-price', processor.price);                
                nTdAddButton.addEventListener('click', this.#removeProcessorFromCart.bind(this));
            }
        } catch (error) {
            alert(e.message);
        }
    }


    #removeProcessorFromCart(e) {
        const processorUuid = e.target.dataset.processor;
        const position = this.#shoppingCart.findIndex(processor => processor.processorUuid === processorUuid);
        this.#shoppingCart.splice(position, 1);
        window.sessionStorage.setItem('shoppingcart', JSON.stringify(this.#shoppingCart));
        this.#getShoppingcartAndRenderOrder();

        // const event = new CustomEvent('processorremovedFromcart', { detail: { processor } });
        // this.dispatchEvent(event);
    }
}


window.customElements.define('shoppingcart-order', ShoppingcartOrderComponent);