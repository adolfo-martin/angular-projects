export class PhysicalAddress {
    address: string;

    constructor(address: string) {
        if (address.length !== 17) {
            throw new Error('[PhysicalAddress] cause: wrong address');
        }
        
        this.address = address;
    }
}