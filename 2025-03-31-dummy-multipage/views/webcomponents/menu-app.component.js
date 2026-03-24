class MenuAppComponent extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.active = undefined;
    }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'active') {
            const links = this.shadowRoot.querySelectorAll('a');
            this.active = newValue;
            links.forEach(link => {
                if (link.getAttribute('data-destiny') === newValue) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    connectedCallback() {
        this.render();
        // this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                nav {
                    background-color: var(--color-500);
                    padding: 1rem;
                }
                
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    gap: 1rem;
                }
                
                li {
                    margin: 0;
                }
                
                a {
                    color: var(--color-100);
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    transition: background-color 0.3s;
                }
                
                a:hover {
                    background-color: var(--color-900);
                }
                
                .active {
                    background-color: var(--color-700);
                }
            </style>
            <nav>
                <ul>
                    <li><a data-destiny="beginning" href="index.html" ${this.active ==='beginning' ? 'class="active"' : ''}>Inicio</a></li>
                    <li><a data-destiny="categories" href="categories.html" ${this.active ==='categories' ? 'class="active"' : ''}>Categorías</a></li>
                    <li><a data-destiny="products" href="products.html" ${this.active ==='products' ? 'class="active"' : ''}>Productos</a></li>
                    <li><a data-destiny="about" href="#about" ${this.active ==='about' ? 'class="active"' : ''}>About</a></li>
                    <li><a data-destiny="contact" href="#contact" ${this.active ==='contact' ? 'class="active"' : ''}>Contact</a></li>
                </ul>
            </nav>
        `;
    }

    // addEventListeners() {
    //     const links = this.shadowRoot.querySelectorAll('a');
    //     links.forEach(link => {
    //         link.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             // Remove active class from all links
    //             links.forEach(l => l.classList.remove('active'));
    //             // Add active class to clicked link
    //             e.target.classList.add('active');
    //             // Dispatch custom event for navigation
    //             this.dispatchEvent(new CustomEvent('menu-navigate', {
    //                 detail: {
    //                     path: e.target.getAttribute('href').substring(1)
    //                 },
    //                 bubbles: true,
    //                 composed: true
    //             }));
    //         });
    //     });
    // }
}

customElements.define('menu-app', MenuAppComponent);