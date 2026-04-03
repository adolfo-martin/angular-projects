import { Category } from "../models/category.js";

export class RestService {

    static #BASE_URL = 'https://dummyjson.com';

    /**
     * @returns {Category[]}
     */
    async retrieveCategories() {
        try {
            const url = RestService.#BASE_URL + '/products/categories/?delay=1000';
            const response = await fetch(url);
            /** @type { {slug: string, name: string, url: string}[] } */
            const data = await response.json();
            const categories = data.map(category => new Category(category.slug, category.name));
            return categories;
        } catch (error) {
            throw new RestServiceException('[RestService.retrieveCategories] cause: ' + error.message);
        }
    }

    /**
     * @param {string} categoryId
     * @returns {string}
     */
    async retrieveFirstProductOfCategory(categoryId) {
        try {
            const url = RestService.#BASE_URL + `/products/category/${categoryId}/?delay=1000`;
            const response = await fetch(url);
            /** @type {{products: { thumbnail: string}[]}} */
            const data = await response.json();
            const firstImageOfProduct = data.products[0].thumbnail;
            return firstImageOfProduct;
        } catch (error) {
            throw new RestServiceException('[RestService.retrieveFirstProductOfCategory] cause: ' + error.message);
        }
    }
}


export class RestServiceException extends Error {
    /**
     * 
     * @param {string} message about the which causing the throwing of the exception.
     */
    constructor(message) {
        super('[RestServiceException] cause: ' + message);
    }
}