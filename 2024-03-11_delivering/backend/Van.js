export default class Van {

    /**
     * 
     * @param {string} id uuid identifier
     * @param {string} plate license plate
     * @param {string} model of vehicle
     * @param {number} capacity on litres
     * @param {number} mass on kilograms
     */
    constructor(id, plate, model, capacity, mass) {
        this._id = id;
        this._plate = plate; 
        this._model = model;
        this._capacity = capacity;
        this._mass = mass;
    }

    /**
     * @returns string
     */
    get id() {
        return this._id
    }

    /**
     * @returns string
     */
    get plate() {
        return this._plate
    }

    /**
     * @returns string
     */
    get model() {
        return this._model
    }

    /**
     * @returns number
     */
    get capacity() {
        return this._capacity
    }

    /**
     * @returns number
     */
    get mass() {
        return this._mass
    }

    // toString() {
    //     return JSON.parse(`{
    //         "id": "${this._id}",
    //         "plate": "${this._plate}",
    //         "model": "${this._model}",
    //         "capacity": ${this._capacity},
    //         "mass": ${this._mass}
    //     }`);
    // }
}