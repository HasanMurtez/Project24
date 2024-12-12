import Books from "./Books";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewBooks = () => {

  const [books, setBooks] = useState([]);

  const ReloadData = () => {
    axios.get('http://localhost:4000/api/books')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data.books); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    ReloadData(); 
  }, []);

  return (
    <div>
      <h3>Welcome to Your Library</h3>
      <Books myBooks={books} ReloadData={ReloadData} />
    </div>
  );
};

export default ViewBooks;
