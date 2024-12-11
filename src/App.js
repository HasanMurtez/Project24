import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import TopBooks from './components/TopBooks';
import AddBook from './components/AddBook';
import ViewBooks from './components/ViewBooks';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<TopBooks />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/view" element={<ViewBooks />} />
        

      </Routes>
    </Router>
  );
}

export default App;
