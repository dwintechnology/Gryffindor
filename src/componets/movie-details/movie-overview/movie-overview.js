import React from 'react';
import './movie-overview.scss';
import PropTypes from 'prop-types';

export default function MovieOverview(props) {
  const { movieOverview } = props;

  return (
    <div className="movieOverview">
      {movieOverview}
    </div>
  );
}

MovieOverview.propTypes = {
  movieOverview: PropTypes.string,
};
MovieOverview.defaultProps = {
  movieOverview: '',
};
