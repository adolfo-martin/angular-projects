export default class WarehouseService {
    static orders = undefined;
    static orderItems = undefined;

    async retrieveOrders() {
        if (WarehouseService.orders) {
            return WarehouseService.orders;
        }

        const url = 'http://127.0.0.1:3000/api/orders';
        const response = await fetch(url);
        const data = await response.json();
        return WarehouseService.orders = data
    }


    async retrieveOrderItems() {
        if (WarehouseService.orderItems) {
            return WarehouseService.orderItems;
        }

        const url = 'http://127.0.0.1:3000/api/order-items';
        const response = await fetch(url);
        const data = await response.json();
        return WarehouseService.orderItems = data;
    }


    async retrieveOrderItemsByOrderId(id) {
        if (!WarehouseService.orderItems) {
            await this.retrieveOrderItems();
        }

        return WarehouseService.orderItems.filter(orderItem => orderItem.order_id === id);
    }
}