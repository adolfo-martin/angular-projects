export class SpinnerWaitingComponent extends HTMLElement {

    #template = `
        <style>
            dialog {
                border: none;
                border-radius: 50%;
                outline: none;
                overflow: hidden;
                padding: 2rem;
                background-color: lightpink;
            }

            .spinner {
                width: 100px;
                aspect-ratio: 1;
                border: solid 10px rgb(0, 0, 255, 0.3);
                border-top: solid 10px rgb(0, 0, 255);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                from {rotate: 0turn;} to {rotate: 1turn;}
            }
        </style>

        <dialog>
            <div class="spinner"></div>
        </dialog>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['open'];
    }

    connectedCallback() {
        this.render();
        this.updateDialogState();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
            this.updateDialogState();
        }
    }

    render() {
        this.shadowRoot.innerHTML = this.#template;
    }

    updateDialogState() {
        const dialog = this.shadowRoot.querySelector('dialog');
        if (dialog) {
            if (this.hasAttribute('open')) {
                dialog.showModal();
            } else {
                dialog.close();
            }
        }
    }
}

customElements.define('spinner-waiting', SpinnerWaitingComponent);