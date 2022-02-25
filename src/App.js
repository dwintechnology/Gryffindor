import './App.scss';
import React from 'react';
import MovieContainer from './pages/movieContainer/MovieContainer';
import imaga from './assets/img/Ellipse 5.svg';
import imaga1 from './assets/img/Mask Group (1).png';
import imaga2 from './assets/img/Mask Group (2).png';

export default function App() {
  return (
    <div className="App">
      <img className="ImgStyle2" src={imaga} alt="img" />
      <img className="ImgStyle" src={imaga1} alt="img" />
      <img className="ImgStyle1" src={imaga2} alt="img" />
      <MovieContainer />
    </div>
  );
}
