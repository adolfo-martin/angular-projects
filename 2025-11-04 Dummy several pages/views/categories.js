import DummyService from "../services/dummy.service.js";

setup();

async function setup() {
    const service = new DummyService();
    const categories = await service.getCategories();
    renderCategoryCards(categories);
}

/**
 * 
 * @param {{id: number; name: string;}[]} categories 
 */
function renderCategoryCards(categories) {
    const nContainer = document.querySelector('#tDivCategories');

    categories.forEach(category => {
        const nCard = document.createElement('div');
        nContainer.appendChild(nCard);
        nCard.classList.add('card-category');
        nCard.dataset.category = category.id;
        nCard.addEventListener('click', handlerCardClick);

        const nHeader = document.createElement('header');
        nCard.appendChild(nHeader);
        nHeader.textContent = category.name;
    });
}


function handlerCardClick(e) {
    const nCard = e.target;
    const categoryId = nCard.dataset.category;
    window.location = `./products.html?category=${categoryId}`;
}