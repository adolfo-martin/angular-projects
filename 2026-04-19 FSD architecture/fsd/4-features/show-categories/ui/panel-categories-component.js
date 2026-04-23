import { restService } from '../api/index.js';
import { storeService, Category } from '../model/index.js';
import { SelectorCategoriesComponent } from './selector-card-categories-component.js';
import { UiException } from './ui-exception.js';

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

        this.#storeService.addObserver('categories', categories => {
            /** @type { SelectorCategoriesComponent } */
            const nSelector = this.#shadow.querySelector('selector-card-categories');
            nSelector.setSelectorModel({ categories });
        });

        try {
            const categories = await this.#restService.retrieveCategories();

            const promises = categories.map(({ id }) => this.#restService.retrieveFirstImageOfCategory(id));
            const images = await Promise.all(promises);
            const categoriesWithImages = categories.map(({ id, name }, i) => ({ id, name, image: images[i] }));
            this.#storeService.setValue('categories', categoriesWithImages);
        } catch (error) {
            throw new UiException(`[PanelCategoriesComponents.connectedCallback()] cause: ${error.message}`);
        }

        // this.render();

        // const categories = await this.#restService.retrieveCategories();
        // this.#storeService.setValue('categories', categories);

        // /** @type { SelectorCategoriesComponent } */
        // const nSelector = this.#shadow.querySelector('selector-card-categories');
        // nSelector.setSelectorModel({ categories });
    }

    render() {
        this.#shadow.innerHTML = this.#template;
    }
}

window.customElements.define('panel-categories', PanelCategoriesComponents);