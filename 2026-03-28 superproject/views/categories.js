import { RestService } from '../services/rest-service.js';
await setup();

async function setup() {
    try {
        const service = new RestService();
        document.querySelector('spinner-waiting').setAttribute('open', undefined);
        const categories = await service.retrieveCategories();

        const promises = categories.map(async ({ id, name }) => {
            const image = await service.retrieveFirstProductOfCategory(id);
            return { id, name, image };
        });
        const categories2 = await Promise.all(promises);

        document.querySelector('spinner-waiting').removeAttribute('open');
        document.querySelector('selector-categories').setCategories(categories2);
    } catch (error) {
        alert(error.message);
    }
}