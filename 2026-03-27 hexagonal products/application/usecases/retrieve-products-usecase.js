import { IRestService } from "../../domain/ports/i-rest-service.js";
import { Product } from "../models/product.js";

/**
 * @class
 */
export class RetrieveProductsUsecase {
    /**
     * 
     * @param {{restService: IRestService}} options 
     * @returns { Promise<Product[]> }
     */
    async execute(options) {
        const products = await options.restService.retrieveProducts();
        return products;
    }
}