const { MongoClient, ObjectID } = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('unable to connect to MongoDB server');
  }else {
    console.log('Connected to MongoDb server');
  }

  //deleteMany - used for deleting multiple records with a similar search criterias
  // db.collection('Todos').deleteMany({text: 'Finish website'}).then((result) => {
  //   console.log(result);
  // })

  //deleteOne - deletes the first record matching the criterion(IMO best suited for deleting with a specific '_id:' value)
  // db.collection('Todos').deleteOne({text: 'Go to sleep'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete - when deleted it will return the value back
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })

  db.close()
})
