import React from 'react';
import CreateMovieWriters from './create-movie-writers/create-movie-writers';
import './movie-writer.scss';

export default function MovieWriter() {
  return (
    <div className="movieWriter">
      <CreateMovieWriters />
      <CreateMovieWriters />
      <CreateMovieWriters />

    </div>
  );
}
