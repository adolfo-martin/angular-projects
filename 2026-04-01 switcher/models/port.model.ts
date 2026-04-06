import { PhysicalAddress } from "./physical-address.model.ts";

export class Port {
    #address;

    constructor(address: PhysicalAddress) {
        this.#address = address;
    }

    get address(): string {
        return this.#address.address;
    }
}