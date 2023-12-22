const BookRouter = require('express').Router();
const bookController = require('../controller/bookController');

BookRouter.get('/', bookController.getAllBooks);
BookRouter.post('/', bookController.addBook);
BookRouter.put('/:id', bookController.updateBookById);
BookRouter.delete('/:id', bookController.deleteBookById);

module.exports = BookRouter;