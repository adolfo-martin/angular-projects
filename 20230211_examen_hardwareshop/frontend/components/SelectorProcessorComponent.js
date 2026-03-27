import HardwareshopService from '../services/HardwareshopService.js';

export default class SelectorProcessorComponent extends HTMLElement {
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
        this.#shoppingCart = JSON.parse(window.sessionStorage.getItem('shoppingcart')) ?? [];
    }


    async connectedCallback() {
        this.shadowRoot.innerHTML = this.#template;
        await this.#retrieveAndRenderProcessors();
    }


    #getSocketUuidFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const socketUuid = params.get('socket');
        return socketUuid;
    }

    
    async #retrieveAndRenderProcessors() {
        try {
            const token = window.sessionStorage.getItem('hardwareshop-token');
            const service = new HardwareshopService();
            const socketUuid = this.#getSocketUuidFromUrl();
            const processors = await service.retrieveProcessorsBySocketUuid(socketUuid, token);
    
            const nTable = this.shadowRoot.querySelector('table');

            for (const processorUuid of processors) {
                const processor = await service.retrieveProcessorByUuid(processorUuid, token);
        
    
                const nTr = document.createElement('tr');
                nTable.appendChild(nTr);
                nTr.setAttribute('data-processor', processor.uuid);
                nTr.setAttribute('data-socket', processor.socket_uuid);

                const nTdLongname = document.createElement('td');
                nTr.appendChild(nTdLongname);
                nTdLongname.textContent = processor.longname;

                const nTdPrice = document.createElement('td');
                nTr.appendChild(nTdPrice);
                nTdPrice.textContent = processor.price;

                const nTdAddButton = document.createElement('td');
                nTr.appendChild(nTdAddButton);
                nTdAddButton.textContent = '+';
                nTdAddButton.setAttribute('data-processor', processor.uuid);
                nTdAddButton.setAttribute('data-name', processor.longname);
                nTdAddButton.setAttribute('data-socket', processor.socket_uuid);
                nTdAddButton.setAttribute('data-price', processor.price);
                nTdAddButton.addEventListener('click', this.#addProcessorToCart.bind(this));
            }
        } catch (error) {
            alert(e.message);
        }
    }


    #addProcessorToCart(e) {
        const processor = {
            processorUuid: e.target.dataset.processor,
            name: e.target.dataset.name,
            price: parseFloat(e.target.dataset.price),
        }
        this.#shoppingCart.push(processor);
        window.sessionStorage.setItem('shoppingcart', JSON.stringify(this.#shoppingCart));
        const event = new CustomEvent('processoraddedtocart', { detail: { processor } });
        this.dispatchEvent(event);
    }
}


window.customElements.define('selector-processor', SelectorProcessorComponent);