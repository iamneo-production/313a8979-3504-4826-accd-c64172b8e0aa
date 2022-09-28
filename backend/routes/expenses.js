const express = require('express')

const router  = express.Router()
const {createExpense,updateExpense,deleteExpense}  = require('../controller/expenses')
router.post('/expense',createExpense);
router.put('expenses/:id',updateExpense)
module.exports = router