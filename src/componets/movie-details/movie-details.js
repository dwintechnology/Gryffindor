import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './movie-details.scss';
import MovieActor from './movie-actor/movie-actor';
import MovieInformation from './movie-information/movie-information';
import MovieOverview from './movie-overview/movie-overview';
import MovieRating from './movie-rating/movie-rating';
import MovieTitle from './movie-title/movie-title';

export default function MovieDetails(props) {
  const {
    movieTitle,
    movieClassification,
    movieReleaseDate,
    movieTime,
    rating,
    movieOverview,
    movieId,
  } = props;

  const [movieGenre, setMovieGenre] = useState();

  useEffect(() => {
    fetch(`https://api.reelgood.com/v3.0/content/movie/${movieId}?availability=onAnySource&interaction=true&region=us`)
      .then((arrId) => arrId.json())
      .then((objId) => {
        setMovieGenre(objId);
        console.log(objId);
      });
  }, [movieId]);

  const arrGener = movieGenre?.score_breakdown?.content?.ranks?.filter(
    (obj) => obj?.listing_key?.listing_type === 'genre',
  );

  const GenerArr = arrGener?.map((obj) => obj.text);

  return (
    <div className="movieDetails">
      <MovieTitle movieTitle={movieTitle} movieClassification={movieClassification} />
      <MovieInformation
        movieReleaseDate={movieReleaseDate}
        movieTime={movieTime}
        movieTitle={movieTitle}
        movieGenre={GenerArr}
      />
      <MovieRating rating={rating} />
      <MovieOverview movieOverview={movieOverview} />
      <MovieActor />
    </div>
  );
}
MovieDetails.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieClassification: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.string.isRequired,
  movieTime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  movieOverview: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};
