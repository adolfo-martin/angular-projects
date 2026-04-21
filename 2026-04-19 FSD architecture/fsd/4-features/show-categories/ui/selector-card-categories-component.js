import { Category } from '../models/category-model.js';

export class SelectorCategoriesComponent extends HTMLElement {
    #shadow;
    /** @type { {categories: {id: string, name: string, image: string}[]} } */
    #selectorModel;

    #template = `
        <section class="container-categories">
            <template class="template-card-category">
                <div class="card-category" data-category-id="">
                    <header></header>
                    <img/>
                </div>
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

            .card-category {
                border: solid;
            }

            img {
                height: 100px;
            }
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

window.customElements.define('selector-categories', SelectorCategoriesComponent);