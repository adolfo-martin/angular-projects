export default class AppHeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #f8f9fa;
                    padding: 10px;
                    border-bottom: 1px solid #dee2e6;
                }
                div {
                    margin: 0;
                    font-size: 24px;
                }
            </style>
            <div>Cash Machine Status</div>
        `;
    }
}

customElements.define('app-header', AppHeaderComponent);