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
mongoose.connect('mongodb+srv://g00419888:admin@cluster0.xbtqx.mongodb.net/BookDB',{
})

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: String,
    genre: String,
    poster: String,
    rating: { type: Number, default: 0 },
    isRead: { type: Boolean, default: false },
    reviews: [{
      text: String,
      rating: { type: Number, min: 1, max: 5 }
    }]
  });
  
  const Book = mongoose.model('Book', bookSchema);
  
  // Add a new book
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
