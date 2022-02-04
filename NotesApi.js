class NotesApi {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
  }

  createNote(notetext) {
    const note = { content: notetext }
    fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(data => {
      console.log(`data within createNote: ${data}`);
      //return data; 
    })
  }
}

module.exports = NotesApi;


