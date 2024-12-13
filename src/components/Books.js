import BookItem from "./BookItem";

const Books = (props) => {
  //Loop through the list of books from props and display a BookItem for each one
  return props.myBooks.map((book) => {
    return (
<BookItem myBook={book}// Pass individual book data to BookItem
 key={book._id || book.id} Reload={props.ReloadData} />    );
  });
};

export default Books;

