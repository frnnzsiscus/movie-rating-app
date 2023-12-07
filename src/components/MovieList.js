import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import '../App.css'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=66d25ddd34efcaffaf4450c93f8fc6de';

        if (searchTerm) {
          apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=66d25ddd34efcaffaf4450c93f8fc6de&query=${searchTerm}`;
        }

        if (selectedGenre) {
          apiUrl += `&with_genres=${selectedGenre}`;
        }

        const response = await axios.get(apiUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchTerm, selectedGenre]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className="container-movielist">
      <h4> Welcome To, </h4>
      <div className='movlix'> 
      <h1>Movlix</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search movies..." value={searchTerm} onChange={handleSearch} />
        <button className="search-button" onClick={() => setSearchTerm('')}>
          Clear
        </button>
      </div>

      <div className="filter-section">
        <label>Search By Genres:</label>
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="27">Horror</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="53">Thriller</option>
        </select>
      </div>

      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="footer">
        &copy; 2023 Movie Rating App Fransiscus. All rights reserved.
      </div>
    </div>
  );
};

export default MovieList;
