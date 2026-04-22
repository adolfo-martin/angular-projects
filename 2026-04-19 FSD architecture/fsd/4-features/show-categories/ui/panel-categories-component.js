import { restService } from '../api/index.js';
import { storeService, Category } from '../model/index.js';
import { SelectorCategoriesComponent } from './selector-card-categories-component.js';

export class PanelCategoriesComponents extends HTMLElement {
    #shadow;
    #storeService = storeService;
    #restService = restService;
    /** @type { {categories: {id: string, name: string, image: string}[]} } */

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

    async connectedCallback() {
        this.render();

        const categories = await this.#restService.retrieveCategories();
        this.#storeService.setValue('categories', categories);

        /** @type { SelectorCategoriesComponent } */
        const nSelector = this.#shadow.querySelector('selector-card-categories');
        nSelector.setSelectorModel({ categories });
    }

    render() {
        this.#shadow.innerHTML = this.#template;
    }
}

window.customElements.define('panel-categories', PanelCategoriesComponents);