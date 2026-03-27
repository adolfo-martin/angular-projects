export default class Person {
    #id; 
    #name;
    #height;
    #weight;

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

    set height(height) {
        this.#height = height;
    }

    get height() {
        return this.#height;
    }

    set weight(weight) {
        this.#weight = weight;
    }

    get weight() {
        return this.#weight;
    }

    toString() {
        return `Person: ${this.#id} ${this.#name}`;
    }
}