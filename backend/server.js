const express = require('express');

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.get('/',(req,res)=>{res.send("Hello")})

const PORT =  8080
app.listen(PORT, () => { console.log(`app listening at ${PORT}`) })