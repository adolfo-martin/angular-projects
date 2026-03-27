import OrdersServiceMock from '../services/orders.service.mock.js';
import Order from '../models/order.model.js';
import Customer from '../models/customer.model.js';

export class TabOrderComponent extends HTMLElement {
  /**
   * @type {Order}
   */
  #order = null;

  /**
   * @type {Customer}
   */
  #customer = null;

  #orderItems = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['order'];
  }

  set order(value) {
    this.setAttribute('order', value);
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'order') {
      
      await new Promise(resolve => requestAnimationFrame(resolve));
      this.dispatchLoadOrderStarted(parseInt(newValue));

      const service = new OrdersServiceMock();
      const orderId = parseInt(newValue);
      if (isNaN(orderId)) {
        throw new Error('Invalid order ID');
      }
      const order = await service.getOrderById(orderId);
      const customer = await service.getCustomerById(order.customerId);
      const orderItemsPromises = order.items.map(async (item) => {
        const orderItem = await service.getOrderItemById(item);
        return orderItem;
      });
      const orderItems = await Promise.all(orderItemsPromises);

      const orderItemsWithProductNamesPromises = orderItems.map(async (item) => {
        const product = await service.getProductById(item.productId);
        return {
          ...item,
          productName: product.name
        };
      });
      const orderItemsWithProductNames = await Promise.all(orderItemsWithProductNamesPromises);

      this.#order = order;
      this.#customer = customer;
      this.#orderItems = orderItemsWithProductNames;

      this.dispatchLoadOrderFinished(this.#order);

      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const order = this.getAttribute('order') || 'undefined';
    if (this.#order) {
      this.shadowRoot.innerHTML = `
          <style>
            @import url('../views/style.css');
            :host {
              display: block;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              background-color: #f9f9f9;
            }
          </style>
  
          <div>Pedido: ${this.#order.id}</div>
          <div>
            <span>Cliente: ${this.#order.customerId}</span>
            <span>${this.#customer.name}</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              ${this.#orderItems.map(item => `
                <tr>
                  <td>${item.id}</td>
                  <td>${item.productName}</td>
                  <td>${item.quantity}</td>
                  <td>${item.price}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        `;
    } else {
      this.shadowRoot.innerHTML = '<div></div>';
    }
  }

  dispatchLoadOrderStarted(order) {
    const event = new CustomEvent('loadOrderStarted', {
      detail: order,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  dispatchLoadOrderFinished(orderId) {
    const event = new CustomEvent('loadOrderFinished', {
      detail: orderId,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('tab-order', TabOrderComponent);