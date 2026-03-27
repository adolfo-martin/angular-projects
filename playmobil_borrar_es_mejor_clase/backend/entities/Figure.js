export default class Figure {
    #uuid;
    #denomination;
    #barcode;
    #image;

    constructor(uuid, denomination) {
        this.#uuid = uuid;
        this.#denomination = denomination;
        this.#image = 'roman-soldier.jpg';
    }

    get uuid() {
        return this.#uuid;
    }

    get denomination() {
        return this.#denomination;
    }

    get barcode() {
        return this.#barcode;
    }

    set barcode(value) {
        this.#barcode = value;
    }

    get image() {
        return this.#image;
    }
}