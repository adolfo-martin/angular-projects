interface State {
    order: Order;

    cancelOrder();
    verifyPayment();
    shipOrder()
}

class Order {
    public orderCancelledState: State;
    public paymentPendingState: State;
    public orderBeingPreparedState: State;
    public orderShippedState: State;

    private _currentState: State;

    constructor() {
        this.orderCancelledState = new OrderCancelledState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);

        this.setState(this.paymentPendingState);
    }

    public getState(): State {
        return this._currentState;
    }

    public setState(state: State) {
        this._currentState = state;
    }
}

class PaymentPendingState implements State {
    constructor(public order: Order) { }

    cancelOrder() {
        console.log('Cancelling your unpaid order.');
        this.order.setState(this.order.orderCancelledState)
    }

    verifyPayment() {
        console.log('Payment verified. Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState)
    }

    shipOrder() {
        console.log('Cannot ship order when payment is pending.');
    }
}

class OrderCancelledState implements State {
    constructor(public order: Order) { }

    cancelOrder() {
        console.log('Your order has already been cancelled.');

    }
    verifyPayment() {
        console.log('Order cancelled, you cannot verify payment.');

    }
    shipOrder() {
        console.log('Order cancelled, it cannot ship');

    }
}

class OrderBeingPreparedState implements State {
    constructor(public order: Order) { }

    cancelOrder() {
        console.log('Cancelling your order.');
        this.order.setState(this.order.orderCancelledState);
    }

    verifyPayment() {
        console.log('Payment was already verified');
    }

    shipOrder() {
        console.log('Shipping your order now.');
        this.order.setState(this.order.orderShippedState);
    }
}

class OrderShippedState implements State {
    constructor(public order: Order) { }

    cancelOrder() {
        console.log('You cannot cancel your order, already shipped.');
    }

    verifyPayment() {
        console.log('Payment was already verified');
    }

    shipOrder() {
        console.log('Order was already shipped.');

    }
}

const order = new Order();
order.getState().verifyPayment();
order.getState().cancelOrder();
order.getState().shipOrder();
console.log('Order state: ', (<any>order.getState()).constructor.name);
