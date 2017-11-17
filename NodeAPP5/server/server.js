const express = require('express');
const bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose');
let { User } = require('./models/User');
let { Todo } = require('./models/Todo');

let app = express();
const PORT = 3000

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc)
  }, (error) => {
    res.send(error)
  })
})

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})
