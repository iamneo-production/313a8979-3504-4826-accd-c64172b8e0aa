const expensesdb = require('../model/expenseModel')

const createProduct = (req, res, next) => {
    let product = req.body
    const query =
       "insert into product (name ,description,price) values (?,?,?   )"
    connection.query(query, [product.name, product.description, product.price],
       (err, results) => {
          if (!err) {
             return res.status(200).json({ message: "Product Added Successfully" })
          }
          else {
             return res.status(500).json({ message: "failed" })
          }
       });
    //format query , [data] , callback
 }
 