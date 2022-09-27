const mysql = require('mysql')

var expenses = mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
   password: "examly",
   database: "tarriff"
})

expenses.connect((err) => {
   if (err)
      console.log("heya")
   else
      console.log(`started`)
})

module.exports = expenses