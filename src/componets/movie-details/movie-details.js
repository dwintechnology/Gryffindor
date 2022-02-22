import React from 'react';
import MovieActor from './movie-actor/movie-actor';
import './movie-details.scss';
import MovieInformation from './movie-information/movie-information';
import MovieOverview from './movie-overview/movie-overview';
import MovieRating from './movie-rating/movie-rating';
import MovieTitle from './movie-title/movie-title';
import MovieWriter from './movie-writer/movie-writer';

export default function MovieDetails() {
  return (
    <div className="movieDetails">
      <MovieTitle />
      <MovieInformation />
      <MovieRating />
      <MovieOverview />
      <MovieWriter />
      <MovieActor />
    </div>
  );
}
