import { interceptRedirectionOnAnchor } from '../views/router.js';
import { ButtonLoginComponent } from './button-login-component.js';

export class NavbarAppComponent extends HTMLElement {

    #template = `
        <style>
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                background-color: var(--color-900);
                color: white;
            }

            .brand {
                font-size: 1.5rem;
                font-weight: bold;
                padding: 0.5rem;
                text-transform: uppercase;

                a {
                    color: currentcolor;
                    text-decoration: none;
                }
            }

            .menu {
                display: flex;
                flex-grow: 1;
                justify-content: center;
                gap: 2rem;
                padding: 0.5rem;
                background-color: var(--color-900);
                color: white;

                a {
                    color: currentcolor;
                    text-decoration: none;
                }
            }

            .option {
                font-size: 1.5rem;
                font-weight: bold;
            }

            button-login {
                margin-right: 1rem;
            }
        </style>

        <div class="brand">
            <a href="index.html">Ultramarinos</a>
        </div>

        <nav class="menu">
            <div class="option">
                <a href="index.html?path=categories" onclick="return false">Categorías</a>
            </div>
            <div class="option">Productos</div>
        </nav>

        <button-login></button-login>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        const anchors = Array.from(this.shadowRoot.querySelectorAll('a'));
        anchors.forEach(anchor => {
            anchor.addEventListener('click', interceptRedirectionOnAnchor);
            return false;
        });
    }

    render() {
        this.shadowRoot.innerHTML = this.#template;
    }
}

customElements.define('navbar-app', NavbarAppComponent);