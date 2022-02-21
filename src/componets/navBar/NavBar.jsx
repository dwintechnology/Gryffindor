import "./style.scss";
import image from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Movies from "../shades/movies/Movies";
import { Route, Routes } from "react-router";
import TvShows from "../tv-shows/Tv-shows";
import { useState } from "react";
import classNames from 'classnames';

function NavBar() {
  let [isActive, setIsActive] = useState(false);

  return (
    <div className="Header">
      <div className="bigDiv">
        <div className="logoPng">
          <img src={image} />
        </div>
        <div>
          <Link
            className={classNames({ links_ctive: !isActive, links: true })}
            onClick={() => {
              setIsActive(false);
            }}
            to="/movies"
          >
            Movies
          </Link>

          <Link
            className={classNames({ links_ctive: isActive, links: true })}
            onClick={() => {
              setIsActive(true);
            }}
            to="/tv_shows"
          >
            Tv Shows
          </Link>

          <span className={ classNames({span_active: isActive, span:true})}></span>
        </div>
      </div>
      <Routes>
        <Route path="/movies" element={<Movies isTvShow={true} />} />
        <Route path="/tv_shows" element={<TvShows isTvShow={false} />} />
      </Routes>
    </div>
  );
}

export default NavBar;
