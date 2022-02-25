import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
import MovieWrapper from '../movieWrapper/MovieWrapper';

export default function TvShows({ isTvShow }) {
  console.log(isTvShow);
  return (
    <MovieWrapper />
  );
}
TvShows.propTypes = {
  isTvShow: PropTypes.bool,
};
TvShows.defaultProps = {
  isTvShow: false,
};
