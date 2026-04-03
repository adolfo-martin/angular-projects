export class ProductsRenderer {
    render(products) {
        const nContainer = document.querySelector('#tDivProducts');
        products.forEach(product => {
            nContainer.appendChild(document.createElement('div')).textContent = product.name;
        });
    }
}