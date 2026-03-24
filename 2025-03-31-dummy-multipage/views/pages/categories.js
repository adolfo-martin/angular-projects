import DummyService from "../../services/dummy.service.js";

const nTable = document.querySelector('#tTabCategories');
const nSpinner = document.querySelector('.spinner');
nTable.addEventListener('categoriesloadbegun', () => nSpinner.style.display = 'inline-block');
nTable.addEventListener('categoriesloadfinished', () => nSpinner.style.display = 'none');

await renderCategoriesTable();

async function renderCategoriesTable() {
    const nTable = document.querySelector('#tTabCategories');
    const nTemplate = document.querySelector('#tTmpCategory');

    nTable.dispatchEvent(new CustomEvent('categoriesloadbegun'));

    const service = new DummyService();
    const categories = await service.getCategoriesWithFirstProductImage();

    categories.forEach(category => {
        const clone = nTemplate.content.cloneNode(true);
        
        const nTr = clone.querySelector('tr');
        nTr.setAttribute('id', `nTr${category.id}`);
        nTr.setAttribute('value', category.id);
        // nTr.addEventListener('change', recalculateStatistics);
        
        const nAncName = clone.querySelector('*[category-name]');
        nAncName.textContent = category.name;
        nAncName.setAttribute('href', `products.html?category=${category.id}`);
        const nTdQuantity = clone.querySelector('*[products-quantity]');
        nTdQuantity.textContent = category.quantity;
        const nImgFirstProduct = clone.querySelector('*[image-first-product]');
        nImgFirstProduct.src = category.image;
        
        nTable.appendChild(clone);
    });

    nTable.dispatchEvent(new CustomEvent('categoriesloadfinished'));
}


async function recalculateStatistics(_) {
    const categories = Array
        .from(document.querySelectorAll('input.selector-categories[type=checkbox]:checked'))
        .map(checkbox => checkbox.value);

    const statistics = await calculateStatistics(categories);

    document.querySelector('#tTxtQuantity').value = statistics.quantity;
    document.querySelector('#tTxtMediumPrice').value = statistics.averagePrice
    document.querySelector('#tTxtCheaperProduct').value = statistics.cheaperProduct
    document.querySelector('#tTxtMostExpensiveProduct').value = statistics.mostExpensiveProduct;
}


async function calculateStatistics(categories = []) {
    if (categories.length === 0) {
        return { 
            quantity: 0, 
            averagePrice: 0,
            cheaperProduct: '',
            mostExpensiveProduct: '',
        }
    }

    const service = new DummyService();
    const products = await service.getProducts();

    const filteredProducts = products.filter(({ category }) => categories.includes(category));
    
    const averagePrice = filteredProducts.reduce((acc, cur) => acc + cur.price, 0) / filteredProducts.length;

    const cheaperProduct = filteredProducts.reduce((acc, cur) => {
        if (acc === undefined) {
            return cur;
        } else {
            return cur.price < acc.price ? cur : acc;
        }
    }, undefined);

    const mostExpensiveProduct = filteredProducts.reduce((acc, cur) => {
        if (acc === undefined) {
            return cur;
        } else {
            return cur.price > acc.price ? cur : acc;
        }
    }, undefined);

    return { 
        quantity: filteredProducts.length, 
        averagePrice,
        cheaperProduct: cheaperProduct.name,
        mostExpensiveProduct: mostExpensiveProduct.name,
    }
}