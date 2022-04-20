var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "ls-0e6dd62320aa7f6d260d0d5825892f815269cf28.cmprcwekrhkn.us-west-2.rds.amazonaws.com",
  user: "dbmasteruser",
  port: "3306",
  password: "vET[O|{UeZ&9=FBqn9`x)9G3~fQtSC|^",
  database: "bugtracker",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
