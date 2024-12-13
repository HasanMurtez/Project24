import { Link } from "react-router-dom";
import axios from "axios";

const BookItem = (props) => {
  const { title, author, year, genre, poster, _id } = props.myBook;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/book/${_id}`)
      .then((response) => {
        console.log(response.data);
        alert("Book deleted successfully!"); 
        props.Reload();
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
        alert('Failed to delete book.');
      });
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <h4>{title}</h4>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Genre:</strong> {genre}</p>
      {poster && (
        <div>
          <strong>Poster:</strong>
          <br />
          <img
            src={poster}
            alt={`${title} poster`}
            style={{ maxWidth: "150px", maxHeight: "200px", marginTop: "10px" }}
          />
        </div>
      )}
      <div style={{ marginTop: "10px" }}>
        <Link to={`/edit/${_id}`} className="btn btn-primary">Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
      </div>
    </div>
  );
};

export default BookItem;
