import type { IRestService } from "../../application/ports/rest-service.ts";
import { Product } from "../../domain/models/product.ts";

export class RestService implements IRestService {
    public async retrieveProducts(): Promise<Product[]> {
        type ResponseDTO = { 
            products: { 
                id: number, 
                title: string 
            }[] 
        }
        try {
            const url = 'https://dummyjson.com/products';
            const response = await fetch(url);
            const data: ResponseDTO = await response.json();
            const products = data.products.map(({id, title}) => new Product(id, title));
            return products;
        } catch (error) {
            throw new RestServiceException((error as Error).message);
        }
    }
}


export class RestServiceException extends Error {
    constructor(message: string) {
        super('[RestServiceException] Cause: ' + message);
    }
}