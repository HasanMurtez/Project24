import React from "react";

const About = () => {
  return (
    <div className="container mt-4">
      <h1>About the Book App</h1>
      <p className="mt-3">
        Welcome to the <strong>Book App</strong>! This application allows you to manage your library of books effortlessly. 
        You can add new books, view your collection, update details, and even delete books you no longer need.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Add books to your library with details like title, author, year, genre, and a poster image.</li>
        <li>View a list of all your books in one place.</li>
        <li>Edit or update book information as needed.</li>
        <li>Delete books from your library effortlessly.</li>
      </ul>
    </div>
  );
};

export default About;
