const BookItem = (props) => {
  const { title, author, year, genre, poster } = props.myBook;

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
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
            style={{ maxWidth: '150px', maxHeight: '200px', marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  );
};

export default BookItem;
