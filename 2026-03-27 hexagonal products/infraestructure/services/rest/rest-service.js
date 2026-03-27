import { Product } from "../../../domain/models/product.js";

export class RestService {
    static #BASE_URL = 'https://dummyjson.com';

    /**
     * Retrieve the products from the endpoint.
     * @param {number} offset 
     * @param {number} limit 
     * @returns {Promise<Product[]>}
     * @throws RestServiceException
     */
    async retrieveProducts(offset=0, limit=30) {
        try {
            const url = `${RestService.#BASE_URL}/products`;
            const response = await fetch(url);
            const data = await response.json();
            const products = data.products.map(({id, title}) => new Product(id, title));
            return products;
        } catch (error) {
            throw new RestServiceException(`[RestService.retrieveProducts method] Cause: ${error.message}`);
        }
    }
}


export class RestServiceException extends Error {
    constructor(message) {
        super('[RestServiceException] Cause: ' + message);
    }
}