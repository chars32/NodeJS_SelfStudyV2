// this will run a query to find a record

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles'
  // multipleStatements: true
  // by default the mysql module will only run one instance. with the multipleStatements set to true, it will allow for multiple instances
})
connection.connect()

let id = '1: drop table articles;'

let query = connection.query(`select * from articles ${connection.escape(id)}`, function(err, res){
  // connection.escape(i) is used to convert the sql query into a string, thus helping to prevent sql injections
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
})


// 2017-11-07T02:43:59.150167Z 1
// [Note] A temporary password is generated
// for root@localhost: gewtk*iNv92;
