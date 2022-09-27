var mysql = require('mysql');
console.log(mysql)

var con = mysql.createConnection({
  port: 3306,
  host:"localhost",
  user: "root",
  password: "examly",
  database:"tarriff"
});
// console.log(con)
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
// });
con.connect(function(err) {
    if (err) throw err;
    var   sql="create table userModel(email varchar(255),password varchar(255),username varchar(255),mobileNumber varchar(255),active boolean,role varchar(255) ,primary key(email))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("table created");
    });
    sql = "create table expenseModel(expenseId varchar(256),billNumber int,billImage blob,billCost int,datedOn date,status varchar(256),remark varchar(256),claimedBy varchar(256),Primary key (expenseId),foreign key(claimedBy) references userModel(email))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("table created");
      });
  });


// create table expenseModel(expenseId varchar(256),billNumber int,billImage varbinary(max),billCost int,datedOn date,status varchar(256),remark varchar(256),claimedBy varchar(256),Primary key (expenseId),foreign key(claimedBy) references userModel(email))