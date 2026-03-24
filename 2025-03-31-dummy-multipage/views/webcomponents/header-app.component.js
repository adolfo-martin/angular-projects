class HeaderAppComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-size: 1rem;
                }
                
                header {
                    background-color: var(--color-900);
                    color: var(--color-100);
                    font-size: 3rem;
                    font-weight: bold;
                    text-align: center;
                    text-transform: uppercase;
                    padding: 0.25em 0;
                }
            </style>

            <header>Cosmética Arcas</header>
        `;
    }
}

customElements.define('header-app', HeaderAppComponent);