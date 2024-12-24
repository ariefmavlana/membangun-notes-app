function initializeApp() {
    // Register Custom Elements
    customElements.define('app-header', AppHeader);
    customElements.define('note-form', NoteForm);
    customElements.define('note-card', NoteCard);

    // Initialize Note Manager
    const noteManager = new NoteManager();

    // Listen for note creation events
    document.addEventListener('note-created', (event) => {
        noteManager.addNote(event.detail);
    });

    // Render initial notes
    noteManager.renderAllNotes();
}

// Initialize app when DOM is loaded
window.addEventListener('DOMContentLoaded', initializeApp);