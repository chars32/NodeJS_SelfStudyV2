const fs = require('fs');

let obj1 = {
  name: 'Adrian'
}

let stringObj = JSON.stringify(obj1); // converts the object into a string
console.log(typeof stringObj); // displays the data type
console.log(stringObj);

let obj2 = '{"name": "Adrian","age" : 34}'

let objJSON = JSON.parse(obj2); // converts a string value into a JSON object
console.log(typeof objJSON);
console.log(objJSON);


// Course Challenge
let originalNote = {
  title: "some title",
  body: "some body"
}

let originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

let noteString = fs.readFileSync('notes.json') // reads the json values from a files
let note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title);
