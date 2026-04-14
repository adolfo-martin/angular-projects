export class ProductsService {
    /**
     * @returns { {id: number, name: string} }
     */
    async retrieveProducts() {
        try {
            const url = 'https://dummyjson.com/products';
            const response = await fetch(url);
            /** @type { {products: Array<{id: number, title: string}>} } */
            const data = await response.json();
            const products = data.products.map(({id, title: name}) => ({id, name}));
            return products;
        } catch (error) {
            throw new Error("ERROR on ProductsService.retrieveProducts()");
        }
    }
}