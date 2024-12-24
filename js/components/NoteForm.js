class NoteForm extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupValidation();
        this.setupSubmit();
    }

    render() {
        this.innerHTML = `
            <form id="noteForm">
                <div class="form-group">
                    <label for="title">Judul</label>
                    <input type="text" id="title" required minlength="3" />
                    <div class="error" id="titleError">Judul harus minimal 3 karakter</div>
                </div>
                <div class="form-group">
                    <label for="body">Isi Catatan</label>
                    <textarea id="body" required minlength="10"></textarea>
                    <div class="error" id="bodyError">Isi catatan harus minimal 10 karakter</div>
                </div>
                <button type="submit">Tambah Catatan</button>
            </form>
        `;
    }

    setupValidation() {
        const titleInput = this.querySelector('#title');
        const bodyInput = this.querySelector('#body');
        const titleError = this.querySelector('#titleError');
        const bodyError = this.querySelector('#bodyError');

        const validateInput = (input, error, minLength) => {
            if (input.value.length < minLength) {
                error.style.display = 'block';
                input.classList.add('invalid');
                return false;
            } else {
                error.style.display = 'none';
                input.classList.remove('invalid');
                return true;
            }
        };

        titleInput.addEventListener('input', () => {
            validateInput(titleInput, titleError, 3);
        });

        bodyInput.addEventListener('input', () => {
            validateInput(bodyInput, bodyError, 10);
        });
    }

    setupSubmit() {
        const form = this.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = this.querySelector('#title').value;
            const body = this.querySelector('#body').value;
            
            const note = {
                id: `notes-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                title,
                body,
                createdAt: new Date().toISOString(),
                archived: false
            };

            this.dispatchEvent(new CustomEvent('note-created', {
                detail: note,
                bubbles: true
            }));

            form.reset();
        });
    }
}