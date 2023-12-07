import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import StarRating from './StarRating'; 

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userRating, setUserRating] = useState(0); 

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        console.error('Movie id not found.');
        return;
      }

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=66d25ddd34efcaffaf4450c93f8fc6de&append_to_response=credits`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleRate = (rating) => {
    console.log(`Rated ${rating}`);
    setUserRating(rating); 
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p className="movie-rating">Rating: {movie.vote_average}</p>
      <p className="movie-info">
        <strong>Release Year:</strong> {new Date(movie.release_date).getFullYear()}<br />
        <strong>Duration:</strong> {movie.runtime} minutes<br />
        <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
      </p>
      {movie.credits && (
        <div className="movie-casting">
          <strong>Cast:</strong>
          <ul>
            {movie.credits.cast.slice(0, 5).map((cast) => (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w45${cast.profile_path}`}
                  alt={`${cast.name}'s profile`}
                />
                {cast.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {userRating > 0 && (
        <p className="user-rating">
          Your Rating Is: {Array.from({ length: userRating }, (_, index) => (
            <span key={index}>⭐</span>
          ))}
        </p>
      )}
      <StarRating rating={userRating} onRate={handleRate} />
      <Link to="/" className="back-button">
        Back to Movie List
      </Link>
    </div>
  );
};

export default MovieDetail;