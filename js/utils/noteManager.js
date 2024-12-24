class NoteManager {
    constructor() {
        this.notes = [...notesData];
        this.container = document.getElementById('notesContainer');
    }

    addNote(note) {
        this.notes.unshift(note);
        this.renderNote(note);
    }

    renderNote(note) {
        const noteElement = document.createElement('note-card');
        noteElement.setAttribute('title', note.title);
        noteElement.setAttribute('body', note.body);
        noteElement.setAttribute('created-at', note.createdAt);
        noteElement.setAttribute('note-id', note.id);

        if (this.container.firstChild) {
            this.container.insertBefore(noteElement, this.container.firstChild);
        } else {
            this.container.appendChild(noteElement);
        }
    }

    renderAllNotes() {

        this.container.innerHTML = '';

        this.notes
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .forEach(note => this.renderNote(note));
    }

    searchNotes(keyword) {
        const filteredNotes = this.notes.filter(note => 
            note.title.toLowerCase().includes(keyword.toLowerCase()) ||
            note.body.toLowerCase().includes(keyword.toLowerCase())
        );
        
        this.container.innerHTML = '';
        filteredNotes.forEach(note => this.renderNote(note));
    }
}