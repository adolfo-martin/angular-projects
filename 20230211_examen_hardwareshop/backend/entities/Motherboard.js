export default class {
    #uuid;
    #name;
    #chipset;
    #socketUuid;
    #memory_slots;
    #m2_slots;
    #pci_slots;
    #price;

    constructor(uuid, name, chipset, socketUuid, memory_slots, m2_slots, pci_slots, price) {
        this.#uuid = uuid;
        this.#name = name;
        this.#chipset = chipset;
        this.#socketUuid = socketUuid;
        this.#memory_slots = memory_slots;
        this.#m2_slots = m2_slots;
        this.#pci_slots = pci_slots;
        this.#price = price
    }

    get uuid() {
        return this.#uuid;
    }

    get name() {
        return this.#name;
    }

    get chipset() {
        return this.#chipset;
    }

    get socketUuid() {
        return this.#socketUuid;
    }

    get memory_slots() {
        return this.#memory_slots;
    }

    get m2_slots() {
        return this.#m2_slots;
    }

    get pci_slots() {
        return this.#pci_slots;
    }

    get price() {
        return this.#price;
    }
}