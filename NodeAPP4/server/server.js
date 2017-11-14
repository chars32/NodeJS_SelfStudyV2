const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/users', (req, res) => {
  res.send([
    {
    name: 'Adrian',
    age: 26
    },
   {
    name: 'Bryan',
    age: 20
    },
   {
    name: 'Jane',
    age: 38
    }
  ])
})

app.listen(3000)

module.exports.app = app
