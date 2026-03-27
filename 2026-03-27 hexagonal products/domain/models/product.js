/**
 * The class represents a product.
 */
export class Product {
    #id;
    #name;

    /**
     * 
     * @param {number} id 
     * @param {string} name 
     */
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }
}