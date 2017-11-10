console.log('app starting..');

const _ = require('lodash');
const os = require('os');
const fs = require('fs');
const production = require('./production');
const yargs = require('yargs');
const notes = require('./notes')

// let arr = [1,2,3,2,2,2,3,3,31,1,1,1,3,45,5,672342,453]
//
// console.log(_.isString(true));
// console.log(_.isString('hshshsh'));
// console.log(arr);
// console.log(_.uniq(arr));

// let MJ = production.totalPoints(32292,5633)
// let LBJ = production.totalPoints(29104, 7561)
//
// console.log(`Micheal's point total is: ${MJ}`);
// console.log(`Lebron's point total is: ${LBJ}`);
//
// if (MJ > LBJ) {
//   console.log(`Micheal has more points`);
// }else {
//   console.log(`Lebron has more points`);
// }

const argv = yargs.argv
let command = argv._[0]
console.log('Command:', command);
// console.log('Process', process.argv);
console.log('Yargs', argv);


if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note Created');
    return notes.logNote(note)
  }else {
    console.log('Error: Title already added');
  }
}else if (command === 'list'){
  notes.getAll;
}else if (command === 'read'){
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    return notes.logNote(note)
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
