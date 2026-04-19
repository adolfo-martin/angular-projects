import { CATEGORIES_URL } from '../config.js';
import { Category } from '../models/category-model.js';

export class CategoriesService {

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
     * @returns { Promise<string> }
     */
    async retrieveFirstImageOfCategory() {
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
}


export class CategoriesServiceException extends Error {
    constructor(message) {
        super('[CategoriesServiceException] cause: ' + message);
    }
}