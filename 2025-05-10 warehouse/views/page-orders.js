import WarehouseService from "../services/warehouse.service.js";


await setup();


async function setup() {
    const service = new WarehouseService();
    const orders = await service.retrieveOrders();
    const ordersWithTheirAmount = await calculateOrdersWithTheirAmount(orders)
    fillTableOrders(ordersWithTheirAmount);
}


function fillTableOrders(orders) {
    const nTable = document.querySelector('#tTabOrders>tbody');

    orders.forEach(order => {
        const nTr = document.createElement('tr');
        nTable.appendChild(nTr);

        const nTdNumber = document.createElement('td');
        nTr.appendChild(nTdNumber);
        nTdNumber.textContent = `${order.order_id} (${order.order_date.substring(0,10)})`;

        const nTdAmount = document.createElement('td');
        nTr.appendChild(nTdAmount);
        nTdAmount.textContent = order.amount;

        const nTdStatus = document.createElement('td');
        nTr.appendChild(nTdStatus);
        nTdStatus.textContent = order.status;

        if (order.status === 'Pending') {
            const nTdProvision = document.createElement('td');
            nTr.appendChild(nTdProvision);

            const nChkAmount = document.createElement('input');
            nTdProvision.appendChild(nChkAmount);
            nChkAmount.setAttribute('type', 'checkbox');
            nChkAmount.classList.add('pending');
            nChkAmount.setAttribute('data-type', 'Pending');
            nChkAmount.setAttribute('data-amount', order.amount);
            nChkAmount.addEventListener('change', calculateSelectedPendingAmount);
        }
    });
}


function calculateSelectedPendingAmount(e) {
    const nCheckboxes = document.querySelectorAll('input[type=checkbox][data-type=Pending]:checked');
    const selectedAmount = Array.from(nCheckboxes).reduce((acc, cur) => acc += parseFloat(cur.dataset.amount), 0);
    document.querySelector('#tSpnInfo').textContent = selectedAmount;
}


async function calculateOrdersWithTheirAmount(orders) {
    const service = new WarehouseService();
    const promises = orders.map(order => service.retrieveOrderItemsByOrderId(order.order_id));
    const ordersItems = await Promise.all(promises);
    const amounts = ordersItems.map(items => items.reduce((acc, cur) => acc += cur.quantity * parseFloat(cur.unit_price), 0));
    const ordersWithAmount = orders.map((order, i) => ({ ...order, amount: amounts[i] }));
    return ordersWithAmount;
}