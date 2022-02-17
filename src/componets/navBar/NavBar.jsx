import './Style.scss';
import image from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import Movies from '../shades/movies/Movies';
import { Route, Routes } from 'react-router';
import TvShows from '../tv-shows/Tv-shows';



function NavBar() {
    return (
        <div className="Header">
            <div className="bigDiv">
                <div className='logoPng'>
                    <img src={image} />
                </div>


                <div className="links">


                    <Link to="/movies">Movies   </Link>

                    <Link style={{ marginLeft: "10px" }} to="/tv_shows">Tv Shows</Link>
                    
                    <span></span>
                </div>
            </div>
            <Routes >
                <Route path="/movies" element={<Movies />} />

                <Route path="/tv_shows" element={<TvShows />} />
            </Routes>







        </div>

    )
}
export default NavBar