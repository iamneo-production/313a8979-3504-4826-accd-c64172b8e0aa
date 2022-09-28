
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
module.exports = db