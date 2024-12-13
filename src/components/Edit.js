import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    poster: '',
  });

  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/book/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
        setError('Failed to load book details. Please try again.');
      });
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/book/${id}`, book)
      .then((response) => {
        console.log(response.data);
        alert('Book updated successfully');
        navigate('/view');
      })
      .catch((error) => {
        console.error('Error updating book:', error);
        alert('Failed to update book.');
      });
  };

  return (
    <div className="container mt-4">
      <h1>Edit Book Details</h1>
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
          Update Book
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
