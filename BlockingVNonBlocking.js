// Blocking
var getUserSync= require('./getUserSync');

var user1 = getUserSync('123');
console.log('user1', user1);

var user2 = getUserSync('123');
console.log('user2', user2);

var user3 = getUserSync('123');
console.log('user3', user3);

var sum = 1+2;
console.log(sum);

// Non Blocking
var getUser = require('./getUser');

getUser('123', function(user1){
  console.log('user1', user1);
});

getUser('123', function(user2){
  console.log('user2', user2);
});

getUser('123', function(user3){
  console.log('user3', user3);
});

var sum = 1+2;
console.log(sum);
