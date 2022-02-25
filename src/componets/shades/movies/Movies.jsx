import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import MovieWrapper from '../../movieWrapper/MovieWrapper';

export default function Movies({ isTvShow }) {
  console.log(isTvShow);
  return (
    <MovieWrapper />
  );
}

Movies.propTypes = {
  isTvShow: PropTypes.bool,
};

Movies.defaultProps = {
  isTvShow: false,
};
