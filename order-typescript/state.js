var Order = /** @class */ (function () {
    function Order() {
        this.orderCancelledState = new OrderCancelledState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.getState = function () {
        return this._currentState;
    };
    Order.prototype.setState = function (state) {
        this._currentState = state;
    };
    return Order;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log('Cancelling your unpaid order.');
        this.order.setState(this.order.orderCancelledState);
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log('Payment verified. Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log('Cannot ship order when payment is pending.');
    };
    return PaymentPendingState;
}());
var OrderCancelledState = /** @class */ (function () {
    function OrderCancelledState(order) {
        this.order = order;
    }
    OrderCancelledState.prototype.cancelOrder = function () {
        console.log('Your order has already been cancelled.');
    };
    OrderCancelledState.prototype.verifyPayment = function () {
        console.log('Order cancelled, you cannot verify payment.');
    };
    OrderCancelledState.prototype.shipOrder = function () {
        console.log('Order cancelled, it cannot ship');
    };
    return OrderCancelledState;
}());
var OrderBeingPreparedState = /** @class */ (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log('Cancelling your order.');
        this.order.setState(this.order.orderCancelledState);
    };
    OrderBeingPreparedState.prototype.verifyPayment = function () {
        console.log('Payment was already verified');
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log('Shipping your order now.');
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPreparedState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log('You cannot cancel your order, already shipped.');
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log('Payment was already verified');
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log('Order was already shipped.');
    };
    return OrderShippedState;
}());
var order = new Order();
order.getState().verifyPayment();
order.getState().cancelOrder();
order.getState().shipOrder();
console.log('Order state: ', order.getState().constructor.name);
