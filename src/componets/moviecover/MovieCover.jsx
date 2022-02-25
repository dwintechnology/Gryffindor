import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function MovieCover(props) {
  const { imgId } = props;

  return (
    <div className="moviepic">
      <img src={`https://img.reelgood.com/content/movie/${imgId}/poster-780.webp`} alt="img" className="img" />
    </div>
  );
}

MovieCover.propTypes = {
  imgId: PropTypes.string.isRequired,
};
