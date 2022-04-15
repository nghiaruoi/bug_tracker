var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "Evelyn0801",
  database: "bug_tracker",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
