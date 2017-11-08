console.log('This from the notes.js file');

module.exports.age = 34

module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
}

module.exports.addition = (a, b) => {
  return a + b
}
