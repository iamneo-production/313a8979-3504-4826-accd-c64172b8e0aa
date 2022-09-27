const express = require('express');

const db = require('./model/database');
const router = require('./routes/expenses');

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(express.json())

const PORT =  8080
app.listen(PORT, () => { console.log(`app listening at ${PORT}`) })