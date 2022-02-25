import React from 'react';

import './Style.scss';

export default function NetflixButton() {
  return (
    <div className="blueSpace">

      <img className="netImg" alt="img" src="https://www.digiseller.ru/preview/565795/p1_2858151_2cd6417b.png" />
      <div className="net">
        <span className="netText1">Now Streaming</span>
        <span className="netText2">Watch Now</span>
      </div>
    </div>
  );
}
