const BookItem = (props) => {
  const { title, author, year } = props.myBook;

  return (
    <div>
      <h4>{title}</h4>
      <p>
        <strong>Author:</strong> {author} <br />
        <strong>Year:</strong> {year}
      </p>
    </div>
  );
};

export default BookItem;
