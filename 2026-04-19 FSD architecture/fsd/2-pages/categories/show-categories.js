import { CategoriesService } from '../../4-features/show-categories/api/categories-service.js';
import { UseCaseException } from '../../4-features/usecase-exception.js';

export class RetrieveCategoriesWithImageUseCase {
    #categoriesService;

    /**
     * 
     * @param {CategoriesService} categoriesService 
     */
    constructor(categoriesService) {
        this.#categoriesService = categoriesService;
    }

    /**
     * 
     * @param { unknown | undefined } options 
     * @returns { Promise<{id: string, name: string, image: string}[]> }
     * @throws { UseCaseException }
     */
    async execute(options = undefined) {
        try {
            const categories = await this.#categoriesService.retrieveCategories();
        
            const promises = categories.map(({ id }) => this.#categoriesService.retrieveFirstImageOfCategory(id));
            const images = await Promise.all(promises);
            const categoriesWithImages = categories.map(({id, name}, i) => ({id, name, image: images[i] }));        
            return categoriesWithImages;
        } catch (error) {
            throw new UseCaseException(`[RetrieveCategoriesWithImageUseCase.execute()] cause: ${error.message}`);
        }
    
    }

}


