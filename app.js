const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT 
const bookRouter = require('./routes/bookRoute')
const app = express()

app.use(bodyParser.json())
app.use('/books', bookRouter)

app.get('/', (req,res)=>{
    res.status(200).send('Welcome to the bookstore')
})

app.listen(PORT, ()=>{
    console.log(`Server is listening to http://localhost:${PORT}`)
})