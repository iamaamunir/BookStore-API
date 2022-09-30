const express = require('express')
const bookController = require('../controllers/bookController')
const bookRouter = express.Router()

bookRouter.post('/allbooks',bookController.getAllBooks)


module.exports = bookRouter