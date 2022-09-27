const express = require('express');

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const PORT =  8080
app.listen(PORT, () => { console.log(`app listening at ${PORT}`) })