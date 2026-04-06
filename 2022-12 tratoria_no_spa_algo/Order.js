export default class Order {
    _order;

    constructor() {
        const order = window.localStorage.getItem('order');
        if (!order) {
            this._order = new Array();
            window.localStorage.setItem('order', JSON.stringify(this._order));
        } else {
            this._order = JSON.parse(order);
        }
    }

    addProduct(pizza, additionalIngredients) {
        this._order.push({ pizza, additionalIngredients });
        window.localStorage.setItem('order', JSON.stringify(this._order));
    }

    getProducts() {
        return this._order;
    }
}