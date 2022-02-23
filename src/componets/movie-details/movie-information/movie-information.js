import './movie-information.scss';
import React, { useState, useEffect } from 'react';
import PopupModal from './Modal';

function MovieInformation() {
  const [vidId, setVidId] = useState();
  const title = 'Spider Man';
  function getData() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC_mymmew6S2GNkUc1el0HFTYdKKhS0EwQ&type=video&q=${title} + 'triller'`)
      .then((data) => data.json())
      .then((apiData) => setVidId(apiData));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="movieInformation">
      <div className="movieReleaseDate">12/25/2255</div>
      <div className="movieGenre">Comedy, Crime</div>
      <div className="movieTime">1h 29m</div>
      <div className="trailerPlay">
        <div>
          <PopupModal videoId={vidId?.items[0].id.videoId} />
        </div>
      </div>
    </div>
  );
}

export default MovieInformation;
