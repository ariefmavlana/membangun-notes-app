function initializeApp() {

    customElements.define('app-header', AppHeader);
    customElements.define('note-form', NoteForm);
    customElements.define('note-card', NoteCard);


    const noteManager = new NoteManager();


    document.addEventListener('note-created', (event) => {
        noteManager.addNote(event.detail);
    });


    noteManager.renderAllNotes();
}


window.addEventListener('DOMContentLoaded', initializeApp);