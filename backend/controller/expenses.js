const expensesdb = require('../model/database')

const createExpense = (req, res, next) => {
    let expense = req.body
    const query =
       "insert into expenseModel (expenseId,billNumber,billImage,billCost,datedOn,status,remark,claimedId)
        values (?,?,?,?,?,?,?,?);"
    connection.query(query, 
        [expense.expenseId,expense.billNumber,expense.billImage,expense.billCost,expense.datedOn,expense.status,expense.remark,expense.claimedId],
       (err, results) => {
          if (!err) {
             return res.status(200).json({ message: "Expense Added Successfully" })
          }
          else {
             return res.status(500).json({ message: "Expense adding failed" })
          }
       });
    //format query , [data] , callback
 }
 
 const deleteExpense = (req, res, next) => {
   let expense = req.body
   const query =
      "delete from expenseModel where expenseId = ?"
   connection.query(query, 
       [expense.expenseId],
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Expense Delete Successfully" })
         }
         else {
            return res.status(500).json({ message: "Expense adding failed" })
         }
      });
   //format query , [data] , callback
}
const updateExpense = (req, res, next) =>{
   let expense = req.body
   const query =
      "update expenseModel set billCost = ? where expenseId = ?"
   connection.query(query, 
       [expense.billCost,expense.expenseId],
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Expense Updated Successfully" })
         }
         else {
            return res.status(500).json({ message: "Expense adding failed" })
         }
      });  
}