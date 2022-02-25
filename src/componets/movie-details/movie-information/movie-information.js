import React from 'react';
import './movie-information.scss';
import PropTypes from 'prop-types';
import PlayerLogo from '../../../assets/img/PlayerLogo.png';

export default function MovieInformation({
  movieReleaseDate,
  movieTime,
  movieTitle,
  movieGenre,
}) {
  console.log(movieTitle);

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
  return (
    <div className="movieInformation">
      <div className="movieReleaseDate">{date}</div>
      <div className="movieGenre">{movieGenre}</div>
      <div className="movieTime">{`${h !== 0 ? `${h}h` : ''} ${m}m`}</div>
      <div className="trailerPlay">
        TrailerPlay
        <img src={PlayerLogo} alt="img" />
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
