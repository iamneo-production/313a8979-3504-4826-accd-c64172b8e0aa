
const mysql = require('mysql')

var db = mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
   password: "examly",
   database: "tarriff"
})
db.connect((err) => {
   if (err)
      console.log(err)
   else
      console.log(`started`)
})
// db.connect(function(err) {
//    console.log("Connected!");
//    var sql = "INSERT INTO de(id) VALUES (3)";
//    db.query(sql, function (errr, result) {
//      if (errr){
//         console.log('error');
//      } 
//      else{
//       console.log("1 record inserted");
//      }
     
//    });
//  });
module.exports = db