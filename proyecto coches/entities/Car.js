export default class Car {
    constructor(uuid, model, brand) {
        this._uuid = uuid;
        this._model = model;
        this._brand = brand;
    }

    get uuid() {
        return this._uuid;
    }

    get model() {
        return this._model;
    }

    get brand() {
        return this._brand;
    }
}