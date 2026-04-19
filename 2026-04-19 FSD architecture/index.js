import { CategoriesService } from "./features/categories/services/categories-service.js";

const service = new CategoriesService();
const categories = await service.retrieveCategories();
const selector = document.querySelector('selector-categories');
selector.setSelectorModel({ categories });