export class SpinnerLoadingComponent extends HTMLElement {
    template = `
        <dialog>
            <div class="spinner"></div>
        </dialog>

        <style>
            dialog {
                padding: 20px;
            }

            .spinner {
                width: 100px;
                aspect-ratio: 1;
                border: solid 10px red; 
                border-bottom-color: blue; 
                border-left-color: transparent; 
                border-right-color: transparent; 
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                from { rotate: 0turn; }
                to { rotate: 1turn; }
            }
        </style>
    `;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = this.template;
        this.shadow.querySelector('dialog').showModal();
    }
}


window.customElements.define('spinner-loading', SpinnerLoadingComponent);