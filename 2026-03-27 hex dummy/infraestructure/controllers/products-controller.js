export class ProductsController {
    #restService;
    #productsRenderer;

    constructor(restService, productsRenderer) {
        this.#restService = restService;
        this.#productsRenderer = productsRenderer;
    }

    async retrieveProducts() {
        try {
            const products = await this.#restService.retrieveProducts();
            this.#productsRenderer.render(products);
        } catch (error) {
            throw new ProductsControllerException(error.message);
        }
    }
}

export class ProductsControllerException extends Error {
    constructor(message) {
        super('[ProductsControllerException] cause: ' + message);
    }
}