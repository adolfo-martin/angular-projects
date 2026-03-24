export const PacketType = {
    NORMAL: 'NORMAL',
    URGENT: 'TRISTE',
}


export default class Packet {

    /**
     * 
     * @param {string} id uuid identifier
     * @param {string} description license description
     * @param {string} destinyAddress of vehicle
     * @param {number} volume on litres
     * @param {number} mass on kilograms
     */
    constructor(id, description, destinyAddress, volume, mass) {
        this._id = id;
        this._description = description; 
        this._destinyAddress = destinyAddress;
        this._volume = volume;
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
    get description() {
        return this._description
    }

    /**
     * @returns string
     */
    get destinyAddress() {
        return this._destinyAddress
    }

    /**
     * @returns number
     */
    get volume() {
        return this._volume
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
    //         "description": "${this._description}",
    //         "destinyAddress": "${this._destinyAddress}",
    //         "volume": ${this._volume},
    //         "mass": ${this._mass}
    //     }`);
    // }
}