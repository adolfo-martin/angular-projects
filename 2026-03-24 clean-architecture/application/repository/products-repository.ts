import { Product } from "../../domain/product";

export interface ProductsRepositoryI {
    createProduct(product: Product): void;
    retrieveProduct(productId: string): void;
    updateProduct(product: Product): void;
    deleteProduct(product: Product): void;
}