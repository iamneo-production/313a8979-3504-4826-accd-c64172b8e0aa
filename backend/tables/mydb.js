var mysql = require('mysql');

var con = mysql.createConnection({
  host: "8080",
  user: "team8",
  password: "team8@1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
// create table expenseModel(expenseId varchar(256),billNumber int,billImage varbinary(max),billCost int,datedOn date,status varchar(256),remark varchar(256),claimedBy varchar(256),Primary key (expenseId),foreign key(claimedBy) references userModel(email))