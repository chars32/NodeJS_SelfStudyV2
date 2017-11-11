const _ = require('lodash');
const os = require('os');
const fs = require('fs');
const production = require('./production');
const yargs = require('yargs');
const notes = require('./notes')


const titleOptions = {
      describe: 'Title of a note',
      demand: true, //makes sure that the variable is added by the user
      alias: 't' //allows us to change command from the terminal
    }

const bodyOptions = {
      describe: 'Body of a note',
      demand: true,
      alias: 'b'
    }

const argv = yargs
    .command('add', 'Add a new note',{
      title:titleOptions,
      body:bodyOptions
    })
    .command('list', 'List of all notes')
    .command('read', 'Read a note',{title: titleOptions})
    .command('remove', 'Remove a note',{title: titleOptions})
    .help() // allows for a help window to show in the terminal
    .argv

let command = argv._[0]
// console.log('Command:', command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);


if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (note) {
    return notes.logNote(note)
  }
}else if (command === 'list'){
  let allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note))
}else if (command === 'read'){
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    return notes.logNote(notes)
  }else {
    console.log('Note not found');
  }
}else if (command === 'remove'){
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
}else {
  console.log('Not recognized');
}
