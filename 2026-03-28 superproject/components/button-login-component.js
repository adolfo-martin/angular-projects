import { AuthService } from '../services/auth-service.js';
import { interceptRedirectionOnAnchor } from '../views/router.js';


export class ButtonLoginComponent extends HTMLElement {

    #template = `
        <style>
            button {
                width: fit-content;
                font-size: inherit;
                border: solid 2px white;
                background-color: var(--primary);
                color: white;
                padding: 0.25rem 0.5rem;
                border-radius: 1rem;
            }
        </style>

        <div>
            <button class="btn" type="button" data-href="http://127.0.0.1:5500/views/index.html?path=login">Iniciar sesión</button>
        </div>
    `;

    #shadow;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.#render();
        const anchors = Array.from(this.shadowRoot.querySelectorAll('button[data-href]'));
        anchors.forEach(anchor => {
            anchor.href = anchor.dataset.href;
            anchor.addEventListener('click', interceptRedirectionOnAnchor);
            return false;
        });

        // this.#shadow.querySelector('button').addEventListener('click', async _ => {
        //     const service = new AuthService();
        //     const {user, token} = await service.validateUser('emilys', 'emilyspass');
        //     console.log(token)
        // });
    }

    #render() {
        this.shadowRoot.innerHTML = this.#template;
    }
}

customElements.define('button-login', ButtonLoginComponent);