import React from 'react';
import './movie-rating.scss';
import PropTypes from 'prop-types';
import ratingIcon from '../../../assets/img/rating-icon.svg';

export default function MovieRating(props) {
  let { rating } = props;

  if (rating === null) {
    rating = 0;
  }
  return (
    <div className="movieRating">
      <img src={ratingIcon} alt="img" />
      <div className="rating">
        {rating}
        /10
      </div>
    </div>
  );
}
MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
