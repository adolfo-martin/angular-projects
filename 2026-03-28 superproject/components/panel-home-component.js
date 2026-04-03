import { RestService } from '../services/rest-service.js';


export class PanelHomeComponent extends HTMLElement {

    #template = `
        <style>
            :host {
            }
        </style>

        <h1>Inicio</h1>
        <div>
            Bienvenido a nuestra tienda, donde encontrarás productos de todo el mundo.
        </div>
    `;

    #shadow;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        await this.#render();
    }

    async #render() {
        this.shadowRoot.innerHTML = this.#template;
    }
}

customElements.define('panel-home', PanelHomeComponent);