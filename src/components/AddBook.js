import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    poster: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // handle form submission to add a new book
  const handleSubmit = async (e) => {
    e.preventDefault();// prevent the page from refreshing
    try {
       //Send book data to the server
      const response = await axios.post('http://localhost:4000/api/books', book);
      console.log(response.data);
      alert('Book added successfuly');
      setBook({ title: '', author: '', year: '', genre: '', poster: '' });
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book.');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add a Book To Your Libary</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Enter author name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            name="year"
            value={book.year}
            onChange={handleChange}
            placeholder="Enter publication year"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            placeholder="Enter genre"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPoster">
          <Form.Label>Poster URL</Form.Label>
          <Form.Control
            type="text"
            name="poster"
            value={book.poster}
            onChange={handleChange}
            placeholder="Enter poster URL"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
