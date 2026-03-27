export default class ShoppingcartButtonComponent extends HTMLElement {
    #items;
    #template = `
        <style>
            :host {
                display: inline-block !important;
                width: fit-content;
                border: solid 5px var(--dark-color);
                font-size: 2rem;
                padding: 0.25rem !important;
            }

            table {
                position: absolute;
                background-color: white;
            }

            table>tr:last-child {
                font-weight: bold;
            }

            table, tr, th, td {
                border: solid 3px var(--dark-color);
                border-collapse: collapse;
                font-size: 0.75em;
            }

            .hidden {
                display: none;
            }
        </style>

        <span>🛒</span>
        <span class="items-quantity"></span>
    `;

    
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
        this.#programUpdateQuantityInfo();
        this.#setupHoverEventShowShoppingCart();
        this.#setupClickEventGoToOrder();
    }
    

    #setupHoverEventShowShoppingCart() {
        this.shadowRoot.getRootNode().host.addEventListener('mouseover', this.#showCart.bind(this));
        this.shadowRoot.getRootNode().host.addEventListener('mouseout', this.#hideCart.bind(this));
    }


    #setupClickEventGoToOrder() {
        this.shadowRoot.getRootNode().host.addEventListener('click', e => window.location.href = './show_order.html');
    }


    #showCart(e) {
        const nTable = document.createElement('table');
        const nTrHeader = document.createElement('tr');
        nTable.appendChild(nTrHeader);
        nTrHeader.appendChild(document.createElement('th')).textContent = 'Procesador';
        nTrHeader.appendChild(document.createElement('th')).textContent = 'Precio';
        nTrHeader.appendChild(document.createElement('th')).textContent = 'Impuestos';

        this.shadowRoot.appendChild(nTable);

        let base = 0;
        let taxes = 0;
        this.#items.forEach(addItemToTable);

        function addItemToTable(item) {
            const nTr = document.createElement('tr');
            nTable.appendChild(nTr);

            const nTdName = document.createElement('td')
            nTr.appendChild(nTdName).textContent = item.name;

            const nTdPrice = document.createElement('td')
            nTr.appendChild(nTdPrice).textContent = item.price;

            const tax = item.price * 0.21;
            const nTdTax = document.createElement('td')
            nTr.appendChild(nTdTax).textContent = item.price + tax;

            base += item.price
            taxes += tax;
        }

        const nTrBase = document.createElement('tr');
        nTable.appendChild(nTrBase);
        nTrBase.appendChild(document.createElement('td')).textContent = 'Base imponible';
        nTrBase.appendChild(document.createElement('td')).textContent = base;

        const nTrTaxes = document.createElement('tr');
        nTable.appendChild(nTrTaxes);
        nTrTaxes.appendChild(document.createElement('td')).textContent = 'Impuestos';
        nTrTaxes.appendChild(document.createElement('td')).textContent = taxes;

        const nTrTotal = document.createElement('tr');
        nTable.appendChild(nTrTotal);
        nTrTotal.appendChild(document.createElement('td')).textContent = 'Total';
        nTrTotal.appendChild(document.createElement('td')).textContent = base + taxes;
    }

    #hideCart(e) {
        const nTable = this.shadowRoot.querySelector('table');
        this.shadowRoot.removeChild(nTable);
    }


    #programUpdateQuantityInfo() {
        setInterval(
            () => {
                this.#items = JSON.parse(window.sessionStorage.getItem('shoppingcart')) ?? [];
                this.shadowRoot.querySelector('.items-quantity').textContent = this.#items.length;
            },
            1000
        )
    }
}


window.customElements.define('shoppingcart-button', ShoppingcartButtonComponent);