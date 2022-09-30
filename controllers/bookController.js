const db = require('../models/DbConnection')
const bookModel = db.books

async function getAllBooks(req,res){
    try{
        const books = await bookModel.findAll();
        res.status(200).json(books)
    }
    catch(error){
        res.status(500).send(error)
    }
}

module.exports = {getAllBooks}