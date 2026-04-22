import { CATEGORIES_URL, CATEGORY_URL } from '../config/config.js';
import { Category } from '../../../5-entities/category-model.js';

export class RestService {

    /**
     * @returns { Promise<Category[]> }
     */
    async retrieveCategories() {
        try {
            const response = await fetch(CATEGORIES_URL);
            /** @type { {slug: string, name: string }[] } */
            const data = await response.json();
            const categories = data.map(({slug, name}) => new Category(slug, name));
            return categories;
        } catch (error) {
            throw new CategoriesServiceException(error.message);
        }
    }

    /**
     * @param {string} category 
     * @returns { Promise<string> }
     */
    async retrieveFirstImageOfCategory(categoryId) {
        try {
            const response = await fetch(CATEGORY_URL + `/${categoryId}`);
            /** @type { {products: { thumbnail: string }[]} } */
            const data = await response.json();
            const image = data.products[0].thumbnail;
            return image;
        } catch (error) {
            throw new CategoriesServiceException(error.message);
        }
    }
}


export class CategoriesServiceException extends Error {
    constructor(message) {
        super('[CategoriesServiceException] cause: ' + message);
    }
}