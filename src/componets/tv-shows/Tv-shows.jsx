import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

export default function TvShows({ isTvShow }) {
  console.log(isTvShow);
  return (
    <> </>
  );
}
TvShows.propTypes = {
  isTvShow: PropTypes.bool,
};
TvShows.defaultProps = {
  isTvShow: false,
};
