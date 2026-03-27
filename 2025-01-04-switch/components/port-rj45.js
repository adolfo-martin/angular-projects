class PortRJ45 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._mac = '';

        this.shadowRoot.innerHTML = `
        <style>
            .port {
                width: fit-content;
                height: fit-content;
                background: #2c3e50;
                border: 2px solid #34495e;
            }
            .connector {
                width: 100%;
                height: 25px;
                background: #95a5a6;
            }
            .light-connected {
                margin-top: 2px;
                width: 20px;
                height: 10px;
                background: darkgreen;
                display: inline-block;
            }
            .light-transmiting {
                margin-top: 2px;
                width: 20px;
                height: 10px;
                background: #8b700f;
                display: inline-block;
            }
        </style>
        <div class="port">
          <div class="connector"></div>
          <div class="light-connected"></div>
          <div class="light-transmiting"></div>
        </div>
      `;

        this.shadowRoot.querySelector('.connector').addEventListener('click', () => {
            this.sendPacket();
        });
    }

    static get observedAttributes() {
        return ['mac', 'connected', 'transmiting'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'mac') {
            this._mac = newValue;
        }
        if (name === 'connected') {
            this.shadowRoot.querySelector('.light-connected').style.backgroundColor = newValue === 'true' ? 'lightgreen' : 'darkgreen';
        }
    }

    sendPacket() {
        const event = new CustomEvent('packetsent', {
            detail: {
                mac: this._mac,
                timestamp: new Date().toISOString()
            },
        });
        this.dispatchEvent(event);
    }

    receivePacket() {
        this.shadowRoot.querySelector('.light-transmiting').style.backgroundColor ='#fccb1d';        
        setTimeout(() => {
            this.shadowRoot.querySelector('.light-transmiting').style.backgroundColor = '#8b700f';
        }, 250);
    }
}

customElements.define('port-rj45', PortRJ45);