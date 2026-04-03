import { Category } from "../models/category.js";

export class SelectorCategoriesComponent extends HTMLElement {

    /** @type {string]} */
    #template;

    /** @type {Category[]} */
    #categories;

    /**
     * 
     * @param {string} categories 
     */
    #setTemplate(categories) {
        this.#template = `
            <style>
                section {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    margin: 1rem;
                    }
                    
                article {
                    background-color: lightblue;
                    padding: 0.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    border-radius: 25px;
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                img {
                    padding: 5px;
                    height: 40px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    background-color: lightpink;
                }
            </style>

            <section id=tSctCategories>
                ${categories}
            </section>
        `;
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.#setTemplate('');
    }

    /**
     * 
     * @param {Category[]} categories 
     */
    setCategories(categories) {
        this.#categories = categories;
        let newTags = '';
        categories.forEach(({ id, name, image }) => {
            newTags += `
                <article data-category-id="${id}">
                    <img src="${image}">
                    <span>${name}</span>
                </article>
            `;
        });
        this.#setTemplate(newTags);
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = this.#template;
    }
}

customElements.define('selector-categories', SelectorCategoriesComponent);
