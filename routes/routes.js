// imports the express method called "router" to help simplify the process of sending requests and receiving responses

const { Router } = require("express") // brings in router method from express

const bookRouter = Router() // renames "Router" to "bookRouter"

const Book = require("../models/bookmodel") // introduces the book model to the code

// this writes some controllers for the routes, these will be used to display and manipulate the data within our database
// all of the routes will be programmed and then adjusted in the controllers.js file

const {
    addaBook,
    listAllBooks,
    updateaBookByTitle,
    deleteaBookByTitle,
    deleteaBookById,
    updateaBookById,
    updateAnAuthor,
    updateanAuthorByTitle,
    listBookByTitle,
    deleteAllBooks,
} = require("../controllers/controllers");

// Declares the routes as follows...

// Route definitions:

// adding = post ,
// displaying = get,
// updating = put,
// deleting = delete


bookRouter.post("/books/addABook", addaBook) // route to add a book, runs add a book function

bookRouter.get("/books/listAllBooks", listAllBooks) // route to get a book, runs the get a book function

bookRouter.put("/books/updateAnAuthor", updateAnAuthor) // route to update An Author, runs update An Author

bookRouter.delete("/books/deleteAllBooks", deleteAllBooks); // route to delete A Book, runs delete A Book

// locate the book by id you declare the routes same as the other routes but add (/:id) at the end of the route in speechmakers. This allows you to manipulate data by their id number which is a specific number for each book in the database

bookRouter.put("/books/updateaBookById/:id", updateaBookById);
bookRouter.delete("/books/deleteaBookById/:id", deleteaBookById);

// Locates the book via its title before subjecting said book to any changes - done in the controllers.js file

bookRouter.put("/books/updateanAuthorByTitle", updateanAuthorByTitle);
bookRouter.put("/books/updateaBookByTitle", updateaBookByTitle);
bookRouter.delete("/books/deleteaBookByTitle", deleteaBookByTitle);
bookRouter.get("/books/listBookByTitle", listBookByTitle);

// exports the functions we've created within these routes:

module.exports = bookRouter