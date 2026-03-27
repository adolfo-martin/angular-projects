export default class ProductsService {

    async retrieveProducts() {
        const url = 'http://127.0.0.1/backend/products/presenters/products.php';
        let response; 
        let data;

        try {
            response = await fetch(url);
        } catch (error) {
            throw new ProductsServiceError(error.message);
        }

        if (!response.ok) {
            throw new ProductsServiceError('Response is not correct.');
        }

        try {
            data = await response.json();
        } catch (error) {
            throw new ProductsServiceError(error.message);
        }

        if (!data.ok) {
            throw new ProductsServiceError('Response is not correct.');
        }
        
        return data.products.map(({ product_id, product_name}) => ({ id: product_id, name: product_name}));
    }


    async retrieveProductById() {
        const url = 'http://127.0.0.1/products/product.php?id=2';
        let response; 
        let data;

        try {
            response = await fetch(url);
        } catch (error) {
            throw new ProductsServiceError(error.message);
        }

        if (!response.ok) {
            throw new ProductsServiceError('Response is not correct.');
        }

        try {
            data = await response.json();
        } catch (error) {
            throw new ProductsServiceError(error.message);
        }

        if (!data.ok) {
            throw new ProductsServiceError('Response is not correct.');
        }
        
        return data.products;
    }
}


export class ProductsServiceError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ProductsServiceError';
    }
}