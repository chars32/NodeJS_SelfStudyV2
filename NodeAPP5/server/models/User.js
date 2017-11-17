const mongoose = require('mongoose')

// ------ NEW USER ------- //
let User = mongoose.model('User', {
  userName: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email:{
    type: String,
    minlength: 1,
    trim: true
  }
})

let newUser = new User({
  userName: 'Test',
  email: 'test@test.com'
})

// newUser.save().then((doc) => {
//   console.log('New User saved');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log(error);
// })


module.exports = { User }
