import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Book App </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link"> Home</Link>
          <Link to="/add" className="nav-link">Add Book</Link>
          <Link to="/view" className="nav-link">View Books</Link>
          <Link to="/about" className="nav-link">About</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
