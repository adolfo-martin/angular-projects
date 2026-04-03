import { RestService } from '../services/rest-service.js';
import { SpinnerWaitingComponent } from '../components/spinner-waiting-component.js';
import { SelectorCategoriesComponent } from '../components/selector-categories-component.js';


export class PanelCategoriesComponent extends HTMLElement {

    #template = `
        <style>
            :host {
            }
        </style>

        <h1>Categorías</h1>
        <selector-categories></selector-categories>
        <spinner-waiting></spinner-waiting>
    `;

    #shadow;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        await this.#render();
    }

    async #render() {
        this.shadowRoot.innerHTML = this.#template;
        await this.#loadCategories();
    }

    async #loadCategories() {
        try {
            const service = new RestService();
            this.#shadow.querySelector('spinner-waiting').setAttribute('open', undefined);
            const categories = await service.retrieveCategories();
    
            const promises = categories.map(async ({ id, name }) => {
                const image = await service.retrieveFirstProductOfCategory(id);
                return { id, name, image };
            });
            const categories2 = await Promise.all(promises);
    
            this.#shadow.querySelector('spinner-waiting').removeAttribute('open');
            this.#shadow.querySelector('selector-categories').setCategories(categories2);
        } catch (error) {
            alert(error.message);
        }
    }
}

customElements.define('panel-categories', PanelCategoriesComponent);