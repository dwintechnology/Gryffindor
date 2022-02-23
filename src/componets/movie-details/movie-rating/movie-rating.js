import React from 'react';
import './movie-rating.scss';
import ratingIcon from '../../../assets/img/rating-icon.svg';

export default function MovieRating() {
  return (
    <div className="movieRating">
      <img src={ratingIcon} alt="img" />
      <div className="rating"> 7 / 10</div>
    </div>
  );
}
