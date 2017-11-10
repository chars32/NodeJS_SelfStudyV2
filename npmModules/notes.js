console.log('loading notes');
const fs = require('fs');

let fetchNotes= () => {
  try{
    let noteString = fs.readFileSync('notes-data.json')
    // this will add to the array and not rewrite previous values
    return JSON.parse(noteString);
  } catch(err){
    return []
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
  let notes = fetchNotes()
  let note = {
    title,
    body
  }

  //using the filter function, this line will create a new array with all of the title variables
  let duplicateNotes = notes.filter((note) => note.title === title)

  // this if statement will verify that there are no duplicates in the duplicateNotes array
  if (duplicateNotes.length === 0 ) {
    notes.push(note); // this adds the note value into the notes array
    saveNotes(notes)
  }
}

let getAll = () => {
  return fetchNotes();
}

let getNote = (title) => {
  let notes = fetchNotes()
  let filter = notes.filter((note) => note.title === title)
  return filter[0]
}

let removeNote = (title) => {
  //fetching the notes
  let notes = fetchNotes()
  //removing the noteString
  let filter = notes.filter((note) => note.title !== title)
  // returning the new notes array
  saveNotes(filter)
  return notes.length !== filter.length
}

let logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  // addNote: addNote, - this is the old ES5 syntax. below is the newer ES6 synax for node
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
