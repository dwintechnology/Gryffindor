import React from 'react';
import PropTypes from 'prop-types';
import './movie-title.scss';

export default function MovieTitle(props) {
  const { movieTitle } = props;
  const { movieClassification } = props;
  return (
    <div className="movieTitle">
      {movieTitle}
      <div className="classification">
        {movieClassification}
      </div>
    </div>

  );
}

MovieTitle.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieClassification: PropTypes.string.isRequired,
};
