import { Product } from "../../domain/models/product.js";

export class RestService {

    static BASE_URL = 'https://dummyjson.com';
    async retrieveProducts() {
        try {
            const url = RestService.BASE_URL + '/products';
            const response = await fetch(url);
            const data = await response.json();
            const products = data.products.map(({ id, title, price }) => new Product(id, title, price));
            return products;
        } catch (error) {
            throw new RestServiceException(error.message);
        }
    }
}

export class RestServiceException extends Error {
    constructor(message) {
        super('[RestServiceException] cause: ' + message);
    }
}