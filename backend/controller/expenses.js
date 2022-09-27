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
 