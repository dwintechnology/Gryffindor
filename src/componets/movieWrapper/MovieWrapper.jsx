import React, { useEffect, useState } from 'react';
import MovieCover from '../moviecover/MovieCover';
import SuggestBtn from '../suggestionbtn/SuggestionBtn';
import NetflixButton from '../netflixButton/NetflixButton';
import MovieDetails from '../movie-details/movie-details';
import './style.scss';

export default function MovieWrapper() {
  const [data, setData] = useState();

  const handleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch('https://api.reelgood.com/v3.0/content/random?availability=onAnySource&content_kind=movie&nocache=true')
      .then((arrData) => arrData.json())
      .then((objData) => {
        setData(objData);
      });
  }, []);

  return (
    <div className="movieshow">
      <div className="picAndBtn">
        <MovieCover imgId={data?.id} />
        <NetflixButton />
        <SuggestBtn onClick={handleClick} />
      </div>
      <MovieDetails
        movieTitle={data?.title}
        movieClassification={data?.classification}
        movieReleaseDate={data?.released_on}
        movieTime={data?.runtime}
        rating={data?.imdb_rating}
        movieOverview={data?.overview}
        movieId={data?.id}
      />
    </div>
  );
}
