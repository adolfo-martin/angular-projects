export class ProductsRestService {
    async retrieveCategories() {
        return [
            { id: 'smartphones', name: 'Smartphones' },
            { id: 'laptops', name: 'Laptops' },
        ]
    }

    async retrieveProductsFromCategory(category) {
        if (!category) {
            return [
                { id: 'Acer-Black', name: 'Acer Black' },
                { id: 'Samsung-Galaxy', name: 'Samsung Galaxy' },
                { id: 'Apple-Iphone', name: 'Apple Iphone' },
                { id: 'Asus-Vivobook', name: 'Asus Vivobook' },
            ]
        } 
        if (category === 'smartphones') {
            return [
                { id: 'Samsung-Galaxy', name: 'Samsung Galaxy' },
                { id: 'Apple-Iphone', name: 'Apple Iphone' },
            ]
        }
        if (category === 'laptops') {
            return [
                { id: 'Acer-Black', name: 'Acer Black' },
                { id: 'Asus-Vivobook', name: 'Asus Vivobook' },
            ]
        }
    }
}