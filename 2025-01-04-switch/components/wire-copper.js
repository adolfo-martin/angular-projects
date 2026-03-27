class WireCopper extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._mac = '';
      
      this.shadowRoot.innerHTML = `
        <style>
            .wire {
                width: 10px;
                height: 100px;
                background: blue;
            }
        </style>
        <div class="wire"></div>
      `;
    }

    set portA(value) {
        this._portA = value;
        if (this._portA && this._portB) {
            this.dispatchEvent(new CustomEvent('wireConnectedOnBothSides'));
            this._portA.addEventListener('packetsent', e => {
                this._portB.receivePacket();
            });
            this._portB.addEventListener('packetsent', e => {
                this._portA.receivePacket();
            });
        } else {
            this.dispatchEvent(new CustomEvent('wireNotConnectedOnBothSides'));
        }
    }

    set portB(value) {
        this._portB = value;
        if (this._portA && this._portB) {
            this.dispatchEvent(new CustomEvent('wireConnectedOnBothSides'));
            this._portA.addEventListener('packetsent', e => {
                this._portB.receivePacket();
            });
            this._portB.addEventListener('packetsent', e => {
                this._portA.receivePacket();
            });
        } else {
            this.dispatchEvent(new CustomEvent('wireNotConnectedOnBothSides'));
        }
    }
  
    static get observedAttributes() {
      return ['mac'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'mac') {
        this._mac = newValue;
      }
    }
  
    sendMessage() {
      const event = new CustomEvent('mensajeSent', {
        detail: {
          mac: this._mac,
          timestamp: new Date().toISOString()
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }
  
  customElements.define('wire-copper', WireCopper);