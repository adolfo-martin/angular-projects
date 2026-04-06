export default class DummyService {

    /**
     * 
     * @returns {Array<{id: number, name: string}>}
     */
    async getCategories() {
        const url = 'https://dummyjson.com/products/categories?delay=1000';
        const response = await fetch(url);
        const data = await response.json();
        return data.map( ({ slug: id, name }) => ({ id, name }));
    }

    /**
     * 
     * @param {number} categoryId 
     * @returns {Array<number>}
     */
    async getProductsByCategory(categoryId) {
        const url =`https://dummyjson.com/products/category/${categoryId}?delay=1000`;
        const response = await fetch(url);
        const data = await response.json();
        return data.products.map(product => product.id);
    }

    /**
     * 
     * @param {number} productId 
     * @returns {Array<{id: number, name: string, description: string, brand: string, price: number, image: string}>}
     */
    async getProductById(productId) {
        const url = `https://dummyjson.com/products/${productId}?delay=1000`;
        const response = await fetch(url);
        const data = await response.json();
        const { id, title: name, description, brand, price, thumbnail: image } = data;
        return { id, name, description, brand, price, image };
    }
}

// console.table(await new DummyService().getCategories());
// console.table(await new DummyService().getProductsByCategory('laptops'));
// console.log(await new DummyService().getProductById(78));