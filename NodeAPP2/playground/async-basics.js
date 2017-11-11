console.log('Starting App');

setTimeout(() => {
  console.log('Inside of the callback');
}, 2000) //sets a delay in milliseconds

setTimeout(() => {
  console.log('Another callback');
},0)
console.log('Finishing Up');
