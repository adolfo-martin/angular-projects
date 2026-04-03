import { Product } from "../models/product.js";

export class IRestService {
    constructor() {
        if (this.constructor === IRestService) {
            throw new Error("No se puede instanciar una interfaz.");
        }
    }

    /**
     * @returns {Promise<Product[]>} 
     */
    async retrieveProducts() {
        throw new Error("El método 'IRestService.retrieveProducts()' debe ser implementado.");
    }
}