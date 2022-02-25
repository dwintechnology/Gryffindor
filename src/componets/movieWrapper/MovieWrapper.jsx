import React from 'react';
import MovieCover from '../moviecover/MovieCover';
import SuggestBtn from '../suggestionbtn/SuggestionBtn';
import NetflixButton from '../netflixButton/NetflixButton';
import MovieDetails from '../movie-details/movie-details';
import './style.scss';

export default function MovieWrapper() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="movieshow">
      <div className="picAndBtn">
        <div className="movibutton">
          <MovieCover />
          <NetflixButton />
        </div>
        <SuggestBtn onClick={handleClick} />
      </div>
      <MovieDetails />
    </div>
  );
}
