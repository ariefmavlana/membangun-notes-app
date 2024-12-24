class NoteCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'body', 'created-at', 'note-id'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const title = this.getAttribute('title');
        const body = this.getAttribute('body');
        const createdAt = new Date(this.getAttribute('created-at')).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        this.innerHTML = `
            <div class="note-card">
                <h2>${title}</h2>
                <p>${body}</p>
                <small>Dibuat pada: ${createdAt}</small>
            </div>
        `;
    }
}