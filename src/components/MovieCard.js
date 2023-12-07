import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={imageUrl} alt={movie.title} />
      </Link>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <Link to={`/movie/${movie.id}`}></Link>
    </div>
  );
};

export default MovieCard;
