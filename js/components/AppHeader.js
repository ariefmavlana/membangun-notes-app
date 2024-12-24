class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>Notes App</h1>
        `;
    }
}