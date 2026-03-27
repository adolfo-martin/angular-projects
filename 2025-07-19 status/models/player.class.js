export default class Player {
    #name = null;
    #color = null;

    constructor(name, color) {
        this.#name = name;
        this.#color = color;
    }

    get name() {
        return this.#name;
    }

    get color() {
        return this.#color;
    }

    toString() {
        return `[Player] (name: ${this.#name}) (color: ${this.#color})`;
    }
}