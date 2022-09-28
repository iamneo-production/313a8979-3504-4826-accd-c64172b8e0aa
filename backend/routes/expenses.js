const express = require('express')

const router  = express.Router()
const {createExpense,updateExpense,deleteExpense,getExpenses}  = require('../controller/expenses')
router.post('/expense',createExpense);
router.put('/expense/:id',updateExpense)
router.delete('/expense/:id',deleteExpense)
router.get('/expense/:id',getExpenses)
module.exports = router