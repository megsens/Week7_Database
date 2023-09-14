const mongoose = require("mongoose") // imports Mongoose

// A schema is the structure of a database. The function below is to create the structure of the database we are accessing ie My Book Database.
// There are several ways this can be done. You can check Mongoose.com to see how you should structure your schemas and what types there are and what to use them for.
// In this example the schema is showing is showing that the title is of a string type is required and is unique to a specific book meaning no two books in the database will share the exact same title.

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,             // schema = structure for the database
        required: true,
        unique: false
    },
    genre: {
        type: String,
        required: false,
        unique: false
    }

}) // creates format we want the data to be stored in - a "schema"

// Lines 29 & 30 let you export the book schema model via the Book function.
// book = the name of the model

const Book = mongoose.model("book", bookSchema)
module.exports = Book

// Creates model