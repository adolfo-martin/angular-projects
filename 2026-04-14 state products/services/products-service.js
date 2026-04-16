import { Product } from '../models/product.model.js';

export class ProductsService {

    /**
     * @returns { Promise<Product[]> }
     */
    async retrieveProducts(initialSkip = 0, pageSize = 5) {
        try {
            const url = `https://dummyjson.com/products?delay=1000&skip=${initialSkip}&limit=${pageSize}`;
            const response = await fetch(url);
            /** @type { {products: {id: number, title: string, price: number, thumbnail: string}[]} } */
            const data = await response.json();
            const products = data.products.map(({ id, title, price, thumbnail }) => new Product(id, title, price, thumbnail));
            return products;
        } catch (error) {
            throw new Error("ERROR on ProductsService.retrieveProducts()");
        }
    }

    /**
     * @returns { Promise<number> }
     */
    async retrieveProductsQuantity() {
        try {
            const url = `https://dummyjson.com/products?delay=1000&limit=1&skip=0`;
            const response = await fetch(url);
            /** @type { {total: number} } */
            const data = await response.json();
            return data.total;
        } catch (error) {
            throw new Error("ERROR on ProductsService.retrieveProductsQuantity()");
        }
    }
}