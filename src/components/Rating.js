import React, { useState } from 'react';

const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <div className="Rating">
      <p>Rate this movie:</p>
      <select value={rating} onChange={handleRatingChange}>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>
      <button onClick={() => onRate(rating)}>Submit Rating</button>
    </div>
  );
};

export default Rating;
