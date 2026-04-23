import { Category } from '../model/index.js';
import { CardCategoryComponent } from './card-category-component.js';

export class SelectorCategoriesComponent extends HTMLElement {
    #shadow;
    /** @typedef { {categories: {id: string, name: string, image: string}[]} } SelectorModel */
    /** @type { SelectorModel } */
    #selectorModel;

    #template = `
        <section class="container-categories">
            <template class="template-card-category">
                <card-category></card-category>
            </template>
        </section>

        <style>
            .container-categories {
                border: solid;
                display: grid;
                grid-template-columns: repeat(auto-fit, 200px);
                place-content: center;
                gap: 1rem;
            }
        </style>
    `;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open' });
    }

    /**
     * 
     * @param { {categories: {id: string, name: string, image: string}[]} } selectorModel 
     */
    setSelectorModel(selectorModel) {
        this.#selectorModel = selectorModel;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.#shadow.innerHTML = this.#template;

        const nContainer = this.#shadow.querySelector('section.container-categories');
        const template = this.#shadow.querySelector('template.template-card-category');

        if (this.#selectorModel) {
            this.#selectorModel.categories.forEach(category => {
                const cloneCard = document.importNode(template.content, true);
                cloneCard.querySelector('card-category').setAttribute('category-id', category.id);
                cloneCard.querySelector('card-category').setAttribute('category-name', category.name);
                cloneCard.querySelector('card-category').setAttribute('category-image', category.image);
                nContainer.appendChild(cloneCard);
            });
        }
    }
}

window.customElements.define('selector-card-categories', SelectorCategoriesComponent);