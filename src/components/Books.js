import BookItem from "./BookItem";

const Books = (props) => {
  return props.myBooks.map((book) => {
    return (
      <BookItem myBook={book} key={book._id} Reload={props.ReloadData} />
    );
  });
};

export default Books;
