import React from 'react';
import MovieCover from '../moviecover/MovieCover';
import SuggestBtn from '../suggestionbtn/SuggestionBtn';
import NetflixButton from '../netflixButton/NetflixButton';
import './style.scss';

export default function MovieWrapper() {
  function handleClick() {
    window.location.reload();
  }
  return (
    <div className="movshow">
      <div className="picAndBtn">
        <MovieCover />
        <NetflixButton />
        <SuggestBtn onClick={handleClick()} />
      </div>
    </div>
  );
}
