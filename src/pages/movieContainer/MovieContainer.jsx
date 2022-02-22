import './Style.scss';
import React from 'react';
import MovieWrapper from '../../componets/movieWrapper/MovieWrapper';
import NavBar from '../../componets/navBar/NavBar';

export default function MovieContainer() {
  return (
    <div className="ContainerStyle">
      <div>
        <NavBar />
        <MovieWrapper />
      </div>
    </div>

  );
}
