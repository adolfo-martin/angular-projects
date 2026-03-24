/**
 * Manages all operations with the endpoints of Dummy Server.
 */
export default class DummyService {

    /**
     * {[]}
     */
    static _allProducts = undefined;

    /**
     * Return an array within all categories.
     * @returns { {id: string, name: string}[] }
     */
    async getCategories() {
        const url = 'https://dummyjson.com/products/categories/?delay=1000';
        const response = await fetch(url);
        const data = await response.json();
        const categories = data.map(({ slug: id, name }) => ({ id, name }));
        return categories;
    }

    /**
     * Return an array within all categories.
     * @returns { {id: string, name: string}[] }
     */
    async getCategoriesWithFirstProductImage() {
        const categories = await this.getCategories();
        const promises = categories.map(async ({ id, name }) => {
            const url = `https://dummyjson.com/products/category/${id}/?limit=1&delay=1000`;
            const response = await fetch(url);
            const data = await response.json();
            return { id, name, quantity: data.total, image: data.products[0].images[0] };
        });
        const categoriesWithImages = await Promise.all(promises);
        return categoriesWithImages;
    }

    /**
     * Returns an array within all products.
     * @returns { { id: number, name: string, price: number, brand: string, image: string, thumbnail: string }[] }
     */
    async getProducts() {
        if (DummyService._allProducts) {
            return DummyService._allProducts;
        } else {
            const url = `https://dummyjson.com/products?limit=0&delay=1000`;
            const response = await fetch(url);
            const data = await response.json();
            const products = data.products.map(({ id, title: name, description, category, price, brand, images }) =>
                ({ id, name, description, category, price, brand, image: images[0], thumbnail: images[1] })
            );
            return DummyService._allProducts = products;
        }
    }

    /**
     * Returns an array within all products.
     * @param { number } product
     * @returns { { id: number, name: string, price: number, brand: string, image: string, thumbnail: string } }
     */
    async getProductById(product) {
        if (!DummyService._allProducts) {
            DummyService._allProducts = await this.getProducts();
        }

        return DummyService._allProducts.find(({ id }) => id === product);
    }

    // /**
    //  * Returns an array within all products within the indicated category.
    //  * @param { string } categoryId 
    //  * @returns { { id: number, name: string, price: number, brand: string, image: string, thumbnail: string }[] }
    //  */
    async getProductsByCategoryId(categoryId) {
        if (!DummyService._allProducts) {
            DummyService._allProducts = await this.getProducts();
        }

        return DummyService._allProducts.filter(({ category }) => category === categoryId);
    }
}
