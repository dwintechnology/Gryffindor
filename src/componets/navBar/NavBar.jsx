import './style.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import classNames from 'classnames';
import image from '../../assets/img/logo.png';
import Movies from '../shades/movies/Movies';
import TvShows from '../tv-shows/Tv-shows';
import NotFoundPage from '../../pages/movieContainer/NotFoundPage';
import MovieWrapper from '../movieWrapper/MovieWrapper';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="Header">
      <div className="bigDiv">
        <div className="logoPng">
          <img src={image} alt="img" />
        </div>

        <div>

          <Link
            className={classNames({ links_active: !isActive, links: true })}
            onClick={() => {
              setIsActive(false);
            }}
            to="/movies"
          >
            Movies
          </Link>

          <Link
            className={classNames({ links_active: isActive, links: true })}
            onClick={() => {
              setIsActive(true);
            }}
            to="/tv_shows"
          >
            Tv Shows
          </Link>

          <span className={classNames({ span_active: isActive, span: true })} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MovieWrapper />} />
        <Route path="/movies" element={<Movies isTvShow />} />
        <Route path="/tv_shows" element={<TvShows isTvShow={false} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
