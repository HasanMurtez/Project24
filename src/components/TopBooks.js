import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TopBooks = () => {
  // Hardcoded data for top 10 books
  const [books, setBooks] = useState([
    {
        id: 1,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: "1954",
        genre: "Fantasy",
        poster: "https://www.bookstation.ie/wp-content/uploads/2019/06/9780261103252.jpg",
        rating: 4.9,
        isRead: false,
        reviews: [],
      },
      {
        id: 2,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        year: "1943",
        genre: "Fiction",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
        rating: 4.8,
        isRead: false,
        reviews: [],
      },
      {
        id: 3,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: "1997",
        genre: "Fantasy",
        poster: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408855652.jpg",
        rating: 4.7,
        isRead: false,
        reviews: [],
      },
      {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: "1988",
        genre: "Fiction",
        poster: "https://www.kennys.ie/products/full/9780008144227.jpg",
        rating: 4.6,
        isRead: false,
        reviews: [],
      },
      {
        id: 5,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        year: "1615",
        genre: "Classic",
        poster: "https://m.media-amazon.com/images/I/71GBg+Ah1cL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.5,
        isRead: false,
        reviews: [],
      },
      {
        id: 6,
        title: "Anne Frank: The Diary of a Young Girl",
        author: "Anne Frank",
        year: "1947",
        genre: "Biography",
        poster: "https://m.media-amazon.com/images/I/51Eyjz65gyL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.6,
        isRead: false,
        reviews: [],
      },
      {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: "1951",
        genre: "Fiction",
        poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
        rating: 4.2,
        isRead: false,
        reviews: [],
      },
      {
        id: 8,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: "1960",
        genre: "Fiction",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        rating: 4.8,
        isRead: false,
        reviews: [],
      },
      {
        id: 9,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: "1925",
        genre: "Fiction",
        poster: "https://www.allbooks.ie/custom/public/images/the-great-gatsby.jpg",
        rating: 4.7,
        isRead: false,
        reviews: [],
      },
      {
        id: 10,
        title: "1984",
        author: "George Orwell",
        year: "1949",
        genre: "Dystopian",
        poster: "https://www.thesecretbookstore.ie/cdn/shop/products/1984_GeorgeOrwell_e1e7b619-bfc6-485c-ac74-3446d18c60a4_580x.jpg?v=1623164150",
        rating: 4.8,
        isRead: false,
        reviews: [],
      },
  ]);

  // Toggle Read/Not Read
  const toggleReadStatus = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, isRead: !book.isRead } : book
    );
    setBooks(updatedBooks);
  };

  // Add a review to a book
  const addReview = (id, review) => {
    const updatedBooks = books.map((book) =>
      book.id === id
        ? { ...book, reviews: [...book.reviews, review] }
        : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Top 10 Books</h1>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4" key={book.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={book.poster} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <strong>Author:</strong> {book.author} <br />
                  <strong>Year:</strong> {book.year} <br />
                  <strong>Genre:</strong> {book.genre} <br />
                  <strong>Rating:</strong> ⭐ {book.rating}
                </Card.Text>
                <Button
                  variant={book.isRead ? "success" : "secondary"}
                  onClick={() => toggleReadStatus(book.id)}
                  className="mb-3"
                >
                  {book.isRead ? "Mark as Not Read" : "Mark as Read"}
                </Button>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const review = e.target.review.value;
                    if (review) {
                      addReview(book.id, review);
                      e.target.review.value = "";
                    }
                  }}
                >
                  <Form.Group controlId={`review-${book.id}`}>
                    <Form.Label>Leave a Review</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Write your review here"
                      name="review"
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="mt-2">
                    Submit Review
                  </Button>
                </Form>
                {book.reviews.length > 0 && (
                  <div className="mt-3">
                    <strong>Reviews:</strong>
                    <ul>
                      {book.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopBooks;