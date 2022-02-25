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

  const [movieInfoArr, setMovieInfoArr] = useState();

  useEffect(() => {
    fetch(`https://api.reelgood.com/v3.0/content/movie/${movieId}?availability=onAnySource&interaction=true&region=us`)
      .then((arrId) => arrId.json())
      .then((objId) => {
        setMovieInfoArr(objId);
      });
  }, [movieId]);

  const arrGener = movieInfoArr?.score_breakdown?.content?.ranks?.filter(
    (obj) => obj?.listing_key?.listing_type === 'genre',
  );

  const generArr = arrGener?.map((obj) => obj.text);
  console.log('🚀 ~ file: movie-details.js ~ line 36 ~ MovieDetails ~ generArr', generArr);
  const joindArr = generArr?.join(',');
  console.log('🚀 ~ file: movie-details.js ~ line 38 ~ MovieDetails ~ joindArr', joindArr);

  const actorArr = movieInfoArr?.people?.map((obj) => ({ name: obj?.name, role: obj?.role }));

  return (
    <div className="movieDetails">
      <MovieTitle movieTitle={movieTitle} movieClassification={movieClassification} />
      <MovieInformation
        movieReleaseDate={movieReleaseDate}
        movieTime={movieTime}
        movieTitle={movieTitle}
        movieGenre={joindArr}
      />
      <MovieRating rating={rating} />
      <MovieOverview movieOverview={movieOverview} />
      <MovieActor movieActor={actorArr} />
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
