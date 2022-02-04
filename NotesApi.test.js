const NotesApi = require('./NotesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(
      'test note from server'
    ));

    api.loadNotes((notesInfo) => {
      expect(notesInfo).toBe('test note from server');
    });
    expect(fetch.mock.calls.length).toEqual(1);
  });

    // it('adding a new note', async () => {
    //   const api = new NotesApi();
      
    //   fetch.mockResponseOnce(JSON.stringify(
    //     {content: 'test note'} // turns into 'test note'
    //   ));

    //   api.createNote('test note');
  
    //   api.loadNotes((notesInfo) => {
    //     expect(notesInfo).toBe('test note');
    //   });
    //   expect(fetch.mock.calls.length).toEqual(2);
    // });

});