import { AuthService } from '../services/auth-service.js';


export class PanelLoginComponent extends HTMLElement {

    #template = `
        <style>
            :host {
                display: grid;
                place-content: center;
                height: 100%;
            }

            form {
                background-color: var(--color-200);
                display: inline-grid;
                columns: 2 100px;
                gap: 0.5rem;
                padding: 1rem;
                border-radius: 1rem;
            }

            header, button {
                grid-column: span 2;
            }

            header {
                text-transform: uppercase;
                font-weight: bold;
            }
            label {
                text-align: right;
            }

            button {
                width: fit-content;
                place-self: center;
                font-size: inherit;
                border: none;
                background-color: var(--primary);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 1rem;
            }
        </style>
        <form>
            <header>Autenticación de usuarios</header>

            <label>Usuario: </label>
            <input type="text" value="emilys">

            <label>Contraseña: </label>
            <input type="password" value="emilyspass">

            <button class="btn" type="button">Validar</button>
        </form>
    `;

    #shadow;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#render();
        this.#shadow.querySelector('button').addEventListener('click', async _ => {
            const service = new AuthService();
            const {user, token} = await service.validateUser('emilys', 'emilyspass');
            console.log(token)
        });
    }

    #render() {
        this.shadowRoot.innerHTML = this.#template;
    }
}

customElements.define('panel-login', PanelLoginComponent);