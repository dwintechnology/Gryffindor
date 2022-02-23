import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default function Movies({ isTvShow }) {
  console.log(isTvShow);
  return (
    <div />
  );
}

Movies.propTypes = {
  isTvShow: PropTypes.bool,
};

Movies.defaultProps = {
  isTvShow: false,
};
