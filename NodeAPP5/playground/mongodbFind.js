const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to MongoDB server');
  }else {
    console.log('Connected to MongoDb server');
  }

  // //arguement with nothing will return all records
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a0e3aaca668396411821696')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  //arguement with nothing will return all records
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos: ${count}`);
  }, (err) => {
    console.log('Unable to count the Todos');
  })

  db.collection('Users').find({ name: 'Adrian'}).count().then((count) => {
    console.log(count);
  }, (err) => {
    console.log('Unable to count Users');
  })

  db.close()
})
