import { Product } from '../models/product.model.js';

export class ProductsService {
    /**
     * @returns { Promise<Product[]> }
     */
    async retrieveProducts() {
        try {
            const url = 'https://dummyjson.com/products';
            const response = await fetch(url);
            /** @type { {products: {id: number, title: string, price: number, thumbnail: string}[]} } */
            const data = await response.json();
            const products = data.products.map(({id, title, price, thumbnail}) => new Product(id, title, price, thumbnail));
            return products;
        } catch (error) {
            throw new Error("ERROR on ProductsService.retrieveProducts()");
        }
    }
}