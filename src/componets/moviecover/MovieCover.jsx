import React from 'react';
import image from '../../assets/img/movie-poster.png';

export default function MovieCover() {
  return (
    <div className="moviepic">
      <img src={image} alt="img" />
    </div>
  );
}
