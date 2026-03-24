import DummyService from "../../services/dummy.service.js";

class CardProductComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.dummyService = new DummyService();
    }

    static get observedAttributes() {
        return ['product'];
    }

    connectedCallback() {
        this.render();
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'product') {
            const product = await this.dummyService.getProductById(parseInt(newValue));

            const nProductName = this.shadowRoot.querySelector('header[product-name]');
            nProductName.textContent = product.name;
            const nProductImage = this.shadowRoot.querySelector('img[product-image]');
            nProductImage.src = product.image;
            const nProductDescription = this.shadowRoot.querySelector('p[product-description]');
            nProductDescription.textContent = product.description;
            const nProductPrice = this.shadowRoot.querySelector('p[product-price]');
            nProductPrice.textContent = `${product.price} €`;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 1rem;
                    border: solid 0.25rem var(--color-900);
                    border-radius: 1rem;
                    marging: 1rem;
                    gap: 1rem;
                }
                
                header[product-name] {
                    width: 100%;
                    flex-basis: 2rem;
                    background-color: var(--color-900);
                    color: var(--color-100);
                    font-size: 1rem;
                    font-weight: bold;
                    text-align: center;
                    text-transform: uppercase;
                    padding: 0.5em 0;
                }
                img[product-image] {
                    flex: 1 1 0;
                    align-self: center; 
                    width: auto;
                    height: 100px;
                }

                p[product-description] {
                    text-align: center;
                }

                p[product-price] {
                    font-weight: bold;
                }
            </style>

            <header product-name></header>
            <img product-image alt="Product Image"/>
            <p product-description></p>
            <p product-price></p>
        `;
    }
}

customElements.define('card-product', CardProductComponent);