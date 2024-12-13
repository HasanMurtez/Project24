const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
//Connect to MongoDB 
mongoose.connect('mongodb+srv://g00419888:admin@cluster0.xbtqx.mongodb.net/BookDB', {});


const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: String,
  genre: String,
  poster: String,
});

const Book = mongoose.model('Book', bookSchema);

// // Add a new book to the database
app.post('/api/books', async (req, res) => {
  const { title, author, year, genre, poster } = req.body;
  try {
    const newBook = new Book({ title, author, year, genre, poster });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
});

// Get all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error });
  }
});

//Retrieve a single book by ID
app.get('/api/book/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); //Fetch a book using its ID
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving book', error });
  }
});

// Update a book by id
app.put('/api/book/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
});

// delete book
app.delete('/api/book/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);// Remove book from the database
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book', error });
    }
  });
  

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
