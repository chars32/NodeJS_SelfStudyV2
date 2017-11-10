// this file will insert the queried information into an MYSQL database
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles'
})

connection.connect()

let article = {
  author: 'Adrian Pearman',
  title: 'How does it feel to Chew 5 Gum',
  body: '*DAB*'
}

let query = connection.query('inset into articles set ?', articles, function(err, res){
  // this will return the error of the injected record
  if (err) {
    console.log(err);
    return
  }
  // displays the result
  console.log(res);
})
