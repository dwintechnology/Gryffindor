import './Style.scss';
import image from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import Movies from '../shades/movies/Movies';
import { Route, Routes } from 'react-router';
import TvShows from '../tv-shows/Tv-shows';
import { useState } from 'react';



function NavBar() {
let[boolean1,setBoolean1]=useState(false)


    return (
        <div className="Header">
            <div className="bigDiv">
                <div className='logoPng'>
                    <img src={image} />
                </div>
                <div >
                   
                    <Link  className={!boolean1? "linksactive":"links"}
                    onClick={()=>{ boolean1? setBoolean1(false):setBoolean1(true) }} 

                    to="/movies" style={{ fontSize:'14px',}}>Movies</Link>
                    
                    
                   
                    <Link  className={boolean1? "linksactive":"links"}
                    onClick={()=>{boolean1? setBoolean1(false):setBoolean1(true)
                        }
                    }   style={{ fontSize:'14px' ,marginLeft: "10px" }} to="/tv_shows">Tv Shows</Link>          
                    
                    <span className={boolean1? "spanactive":"span"}></span>
                </div>
            </div>
            <Routes >
                <Route path="/movies" element={<Movies isTvShow={true} />} />

                <Route path="/tv_shows" element={<TvShows isTvShow={false} />} />
            </Routes>
        </div>

    )
}
export default NavBar