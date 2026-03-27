export default class Socket {

    #uuid;
    #name;
    #platform

    constructor(uuid, name, platform) {
        this.#uuid = uuid;
        this.#name = name;
        this.#platform = platform;
    }

    get uuid() {
        return this.#uuid;
    }

    get name() {
        return this.#name;
    }

    get platform() {
        return this.#platform;
    }

    toString() {
        return JSON.stringify(this);
    }
}