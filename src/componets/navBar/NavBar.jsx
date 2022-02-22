import './Style.scss';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import React from 'react';
import image from '../../assets/img/logo.png';
import Movies from '../shades/movies/Movies';
import TvShows from '../tv-shows/Tv-shows';

export default function NavBar() {
  return (
    <div className="Header">
      <div className="bigDiv">
        <div className="logoPng">
          <img src={image} alt="img" />
        </div>
        <div>

          <Link className="links" to="/movies">Movies   </Link>

          <Link className="links" style={{ marginLeft: '10px' }} to="/tv_shows">Tv Shows</Link>

          <span />
        </div>
      </div>
      <Routes>
        <Route path="/movies" element={<Movies />} />

        <Route path="/tv_shows" element={<TvShows />} />
      </Routes>

    </div>

  );
}
