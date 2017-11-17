const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to MongoDB server');
  }else {
    console.log('Connected to MongoDb server');
  }

  db.collection('Todos').insertOne({
    text: 'Something',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection('Users').insertOne({
    name: 'Adrian',
    age: 26,
    location: 'Toronto'
  }, (err, result) => {
    if (err) {
        return console.log('Unable to insert into Users', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.close()
})
