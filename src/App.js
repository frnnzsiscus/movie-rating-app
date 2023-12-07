import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const Watermark = () => (
  <div
    style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      fontSize: '20px',
      color: 'white',
    }}
  >
    Movie Rating App - Fransiscus XI RPL 1
  </div>
);

const App = () => {
  return (
    <Router>
      <Watermark />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
