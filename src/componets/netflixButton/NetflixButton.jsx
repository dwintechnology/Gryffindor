import React from 'react';
import image from '../../assets/img/netflix.png';
import './Style.scss';

export default function NetflixButton() {
  return (
    <div className="blueSpace">

      <img className="netImg" alt="img" src={image} />
      <div className="net">
        <span className="netText1">Now Streaming</span>
        <span className="netText2">Watch Now</span>
      </div>
    </div>
  );
}
