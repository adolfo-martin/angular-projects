import { Category } from '../models/category-model.js';
import { SelectorCategoriesComponent } from './selector-card-categories-component.js';

export class PanelCategoriesComponents extends HTMLElement {
    #shadow;
    /** @type { {categories: {id: string, name: string, image: string}[]} } */
    #selectorModel;

    #template = `
        <h1></h1>
        
        <selector-card-categories></selector-card-categories>

        <style>
        </style>
    `;

    constructor() {
        super();
        this.#shadow = this.attachShadow({mode: 'open'});        
    }

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
                cloneCard.querySelector('.card-category').setAttribute('data-category-id', category.id);
                cloneCard.querySelector('header').textContent = category.name;
                cloneCard.querySelector('img').src = category.image;
                nContainer.appendChild(cloneCard);
            });
        }
    }
}

window.customElements.define('panel-categories', PanelCategoriesComponents);