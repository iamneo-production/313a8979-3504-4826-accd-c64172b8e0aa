const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('./model/database');
const expensesRouter = require('./routes/expenses');
const authRouter = require('./routes/auth')
const app = express()

app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expensesRouter)
app.use(authRouter)
app.use(express.json())

const PORT =  8080
app.listen(PORT, () => { console.log(`app listening at ${PORT}`) })