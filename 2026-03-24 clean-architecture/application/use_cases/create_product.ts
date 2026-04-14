import { Product } from "../../domain/product";
import { ProductsRepositoryI } from "../repository/products-repository";

function createProduct(repository: ProductsRepositoryI, product: Product) {
    try {
        repository.createProduct(product);
    } catch (error) {
        throw new Error('[createProduct]');
    }
}