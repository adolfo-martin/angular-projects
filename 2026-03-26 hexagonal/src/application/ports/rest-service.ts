import { Product } from "../../domain/models/product.ts";

export interface IRestService {
    retrieveProducts(): Promise<Product[]>;
}