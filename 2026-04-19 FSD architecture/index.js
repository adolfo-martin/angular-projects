import { CategoriesService } from './categories/services/categories-service.js';
import { RetrieveCategoriesWithImageUseCase } from './categories/use-cases/retrieve-categories-with-image-use-case.js';

const service = new CategoriesService();
const usecase = new RetrieveCategoriesWithImageUseCase(service);
await usecase.execute(null);
const selector = document.querySelector('selector-categories');
selector.setSelectorModel({ categories: categoriesWithImages });