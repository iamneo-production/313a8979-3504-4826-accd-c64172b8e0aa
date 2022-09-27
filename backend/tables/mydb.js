var mysql = require('mysql');
console.log(mysql)

var con = mysql.createConnection({
  host: 3306,
  user: "coder",
  password: "examly",
  db:"tarriff"
});
console.log(con)
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});
// create table expenseModel(expenseId varchar(256),billNumber int,billImage varbinary(max),billCost int,datedOn date,status varchar(256),remark varchar(256),claimedBy varchar(256),Primary key (expenseId),foreign key(claimedBy) references userModel(email))