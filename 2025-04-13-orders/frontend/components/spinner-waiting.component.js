export class SpinnerWaitingComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    show() {
        const dialog = this.shadowRoot.querySelector('dialog');
        dialog.showModal();
    }

    hide() {
        const dialog = this.shadowRoot.querySelector('dialog');
        dialog.close();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                dialog {
                    padding: 20px;
                    border: none;
                    border-radius: 8px;
                    background-color: rgba(255, 255, 255, 0.9);
                }

                dialog::backdrop {
                    background-color: rgba(0, 0, 0, 0.5);
                }

                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 5px solid #f3f3f3;
                    border-radius: 50%;
                    border-top: 5px solid #3498db;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
            <dialog>
                <div class="spinner"></div>
            </dialog>
        `;
    }
}

customElements.define('spinner-waiting', SpinnerWaitingComponent);