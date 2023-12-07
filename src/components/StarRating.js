import React from 'react';
import '../App.css';

const StarRating = ({ rating, onRate }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    return (
      <div className="star-rating">
        <select value={rating} onChange={(e) => onRate(Number(e.target.value))}>
          {stars.map((star) => (
            <option key={star} value={star}>
              {Array.from({ length: star }, (_, index) => '⭐').join('')}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default StarRating;
