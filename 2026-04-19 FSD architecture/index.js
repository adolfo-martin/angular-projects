import { CategoriesService } from "./features/categories/services/categories-service.js";

try {
    const service = new CategoriesService();
    const categories = await service.retrieveCategories();

    const promises = categories.map(({id}) => service.retrieveFirstImageOfCategory(id));
    const images = await Promise.all(promises);
    const categoriesWithImages = categories.map(({id, name}, i) => ({id, name, image: images[i] }));

    const selector = document.querySelector('selector-categories');
    selector.setSelectorModel({ categories: categoriesWithImages });
    
} catch (error) {
    
}