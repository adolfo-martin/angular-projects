export class SpinnerLoadingComponent extends HTMLElement {
    template = `
        <dialog>
            <div class="spinner"></div>
        </dialog>

        <style>
            :host {
                overflow: hidden;
            }

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

    static observedAttributes = ['status'];

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = this.template;
        // this.shadow.querySelector('dialog').showModal();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'status') {
            if (newValue === 'loading') {
                this.shadow.querySelector('dialog')?.showModal();
            } else {
                this.shadow.querySelector('dialog')?.close();
            }
        }
    }
}


window.customElements.define('spinner-loading', SpinnerLoadingComponent);