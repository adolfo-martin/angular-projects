export class HeaderAppComponent extends HTMLElement {

    #shadow;
    #template = `
        <div>menu</div>
        <div>
            <slot></slot>
        </div>
        <div>login</div>

        <style>
            :host {
                display: flex;
                gap: 1rem;
                background-color: var(--blue-950);
                color: white;
                font-size: 2rem;
            }
                
            div:nth-child(2) {
                flex: 1 1 0;
            }
        </style>
    `;

    constructor() {
        super();
        this.#shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.#shadow.innerHTML = this.#template;
        this.render();
    }

    render() {}
}

window.customElements.define('header-app', HeaderAppComponent);