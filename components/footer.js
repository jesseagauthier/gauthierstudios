class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer class="no-animate">
        <p>&copy; 2023 GauthierStudios. All rights reserved.</p>
        <p>Based out of Ottawa, Ontario, Canada. Serving small businesses since 2021.</p>
    </footer>`;
    }
}

customElements.define('footer-component', Footer);