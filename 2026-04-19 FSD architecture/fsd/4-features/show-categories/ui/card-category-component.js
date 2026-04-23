export class CardCategoryComponent extends HTMLElement {
    #shadow;
    #template = `
        <header></header>
        <img/>

        <style>
            :host {
                padding: 0.5rem;
                background-color: var(--blue-200);
                border-radius: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            header {
                text-transform: uppercase;
                text-align: center;
                font-weight: bold;
                font-size: 1.25rem;
            }

            img {
                flex-basis: 100px;
            }
        </style>
    `;

    constructor() {
        super();
        this.#shadow = this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        return [ 'category-id', 'category-name', 'category-image'];
    } 

    connectedCallback() {
        this.#shadow.innerHTML = this.#template;
        this.render();
    }

    render() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'category-id') {
        } else if (name === 'category-name') {
            const nHeader = this.#shadow.querySelector('header');
            nHeader.textContent = newValue;
        } else if (name === 'category-image') {
            this.#shadow.querySelector('img').src = newValue;
        }
    }
}

window.customElements.define('card-category', CardCategoryComponent);