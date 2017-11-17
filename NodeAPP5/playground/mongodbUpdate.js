const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to MongoDB server');
  }else {
    console.log('Connected to MongoDb server');
  }

  // findOneAndUpdate - when updated it will return the value back
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a0e55f07cf104ee3ca9c329')
  }, {
    $set: {
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    return console.log(result);
  })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a0e4acd328f3866e2a96798')
  },{
    $inc: {
      age: -3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    return console.log(result);
  })

  db.close()
})
