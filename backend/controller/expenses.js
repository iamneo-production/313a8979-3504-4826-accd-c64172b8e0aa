const expensesdb = require('../model/database')

const createExpense = (req, res, next) => {
    let expense = req.body
    const query =
       "insert into expenseModel (expenseId,billNumber,billImage,billCost,datedOn,status,remark,claimedBy) values (?,?,?,?,?,?,?,?);"
    expensesdb.query(query, [expense.expenseId,expense.billNumber,
      expense.billImage,expense.billCost,expense.datedOn,expense.status,
      expense.remark,expense.claimedBy],
       (err, results) => {
          if (!err) {
             return res.status(200).json({ message: "Expense Added Successfully" })
          }
          else {
             return res.status(500).json({ message: err })
          }
       });
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
   let {id} = req.params
   console.log(id)
   let expense = req.body
   const query =
      "update expenseModel set billCost = ? where expenseId = ?"
   expensesdb.query(query, 
       [expense.billCost,id],
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Expense Updated Successfully" })
         }
         else {
            return res.status(500).json({ message: "Expense adding failed" })
         }
      });  
}
const getExpenses = (req,res) =>{
   const {id} = req.params
   const query = "select * from expenseModel where claimedBy = ?"
   expensesdb.query(query,[id],(err,results)=>{
      if(!err)
      {
         res.status(200).json({results});
      }
      else{
         res.status(404);
      }

   })
}
const getAll = async (req,res) =>{
   const query = "select * from expenseModel"
     expensesdb.query(query,async(err,results)=>{
      if(!err)
      {
         res.send(results);
      }
      else{
         res.status(404);
      }
   })
}
module.exports = {createExpense,updateExpense,deleteExpense,getExpenses,getAll};