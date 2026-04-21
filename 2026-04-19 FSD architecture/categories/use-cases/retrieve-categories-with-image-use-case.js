import { CategoriesService } from '../services/categories-service.js';
import { UseCaseException } from './usecase-exception.js';

export class RetrieveCategoriesWithImageUseCase {
    
    /**
     * 
     * @param { unknown | undefined } options 
     * @returns { Promise<{id: string, name: string, image: string}[]> }
     * @throws { UseCaseException }
     */
    async execute(options = undefined) {
        try {
            const service = new CategoriesService();
            const categories = await service.retrieveCategories();
        
            const promises = categories.map(({id}) => service.retrieveFirstImageOfCategory(id));
            const images = await Promise.all(promises);
            const categoriesWithImages = categories.map(({id, name}, i) => ({id, name, image: images[i] }));
        
            const selector = document.querySelector('selector-categories');
            selector.setSelectorModel({ categories: categoriesWithImages });
            
        } catch (error) {
            throw new UseCaseException(`[RetrieveCategoriesWithImageUseCase.execute()] cause: ${error.message}`);
        }
    
    }

}


