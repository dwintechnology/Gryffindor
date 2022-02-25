import React, { useEffect, useState } from 'react';
import './movie-information.scss';
import PropTypes from 'prop-types';
import PopupModal from './Modal';

export default function MovieInformation({
  movieReleaseDate,
  movieTime,
  movieTitle,
  movieGenre,
}) {
  let h;
  let m;
  if (movieTime > 180) {
    h = 3;
    m = movieTime - 180;
  } else if (movieTime > 120) {
    h = 2;
    m = movieTime - 120;
  } else if (movieTime > 60) {
    h = 1;
    m = movieTime - 60;
  } else if (movieTime < 60) {
    h = 0;
    m = movieTime;
  }
  if (h === undefined && m === undefined) {
    h = 0;
    m = 0;
  }

  const date = movieReleaseDate.slice(0, 10);

  const [vidId, setVidId] = useState();
  function getData() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC_mymmew6S2GNkUc1el0HFTYdKKhS0EwQ&type=video&q=${movieTitle} + 'triller'`)
      .then((data) => data.json())
      .then((apiData) => setVidId(apiData));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="movieInformation">
      <div className="movieReleaseDate">{date}</div>
      <div className="movieGenre">{movieGenre}</div>
      <div className="movieTime">{`${h !== 0 ? `${h}h` : ''} ${m}m`}</div>
      <div className="trailerPlay">
        <div>
          <PopupModal videoId={vidId?.items ? vidId?.items[0]?.id?.videoId : null} />
        </div>
      </div>
    </div>
  );
}

MovieInformation.propTypes = {
  movieReleaseDate: PropTypes.string,
  movieTime: PropTypes.number,
  movieTitle: PropTypes.string,
  movieGenre: PropTypes.arrayOf(PropTypes.string),
};
MovieInformation.defaultProps = {
  movieReleaseDate: '',
  movieTime: 0,
  movieTitle: '',
  movieGenre: '',
};
