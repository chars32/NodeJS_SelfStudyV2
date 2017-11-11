// Refactor 1
let square1 = (x) => {
  let result = x * x
  return result
}
// Refactor 2
let square2 = (x) => {
  return x * x  // the unneccessary results variable is removed and a simple return function is used instead
}
// Refactor 3
let square3 = x => x * x  //single arguement functions do not require the paraenthesis like standard functions

console.log(square1(2));
console.log(square2(2));
console.log(square3(2));


//-------------------------------//

let user = {
  name: 'Adrian',
  sayHi: () => {
    console.log(arguments); // this argumenets function will return the all the arguments within the scope that it is in
    console.log(`Hi. I'm ${this.name}`); //this will return undefined as the this variable is unable reach the name variable
  },
  //using a none arrow function will give you access to the name key and value pair
  sayHiAlt () {
    console.log(arguments); //this will only return the arguments passed through in the sayHiAlt function
    console.log(`Hi. I'm ${this.name}`); // this will pull the value the name key
  }
}

user.sayHi()
user.sayHiAlt(1,2,3)
