export default class {
    #uuid;
    #longname;
    #shortname;
    #platform;
    #cores;
    #frequency;
    #price;

    constructor(uuid, longname, shortname, platform, cores, frequency, price) {
        this.#uuid = uuid;
        this.#longname = longname;
        this.#shortname = shortname;
        this.#platform = platform;
        this.#cores = cores;
        this.#frequency = frequency;
        this.#price = price
    }

    get uuid() {
        return this.#uuid;
    }

    get longname() {
        return this.#longname;
    }

    get shortname() {
        return this.#shortname;
    }

    get platform() {
        return this.#platform;
    }

    get cores() {
        return this.#cores;
    }

    get frequency() {
        return this.#frequency;
    }

    get price() {
        return this.#price;
    }
}