var mysql = require('mysql');

var con = mysql.createConnection({
  host: "8080",
  user: "team8",
  password: "team8@1234"
});

con.connect(function(errr) {
  if (errr) throw errr;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (errr, result) {
    if (errr) throw errr;
    console.log("Database created");
  });
});