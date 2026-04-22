import { CategoriesService } from '../api/categories-service.js';
import { Category } from '../models2/category-model.js';
import { SelectorCategoriesComponent } from './selector-card-categories-component.js';

export class PanelCategoriesComponents extends HTMLElement {
    #shadow;
    /** @type { {categories: {id: string, name: string, image: string}[]} } */
    #selectorModel;

    #template = `
        <h1 class="panel-title">Categorías</h1>
        
        <selector-card-categories></selector-card-categories>

        <style>
            .panel-title {
                text-transform: uppercase;
            }
        </style>
    `;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open' });
    }

    setSelectorModel(selectorModel) {
        this.#selectorModel = selectorModel;
        this.render();
    }

    async connectedCallback() {
        this.render();

        const service = new CategoriesService();
        const categories = await service.retrieveCategories();

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