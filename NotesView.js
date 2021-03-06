class NotesView {
  constructor(model, api) {
    this.model = model
    this.maincontainerEl = document.querySelector('#main-container');
    this.api = api

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value;
      this.addNewNote(newNote);
      document.querySelector('#note-input').value = "";
    });
  }

  displayNotes() {

  document.querySelectorAll('.note').forEach(element => {
    element.remove();
  });

    const notes = this.model.getNotes()

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.maincontainerEl.append(noteEl);
    })
  }

  addNewNote(note) {
    // this.model.addNote(note);
    console.log(note);
    this.api.createNote(note);
    this.displayNotes();
  }
}

module.exports = NotesView