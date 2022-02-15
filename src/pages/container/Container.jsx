import './Style.scss'
import TvShows from '../tv-shows/Tv-shows';
import Movies from '../movies/Movies';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function Cont() {
    return (
        <div className="ContainerStyle" >
            <div>
                <div className="Header">
                    <img src="./logo.png" />
                    <div>
                        <div className="Links">
                            <Link to="/movies">Movies</Link>
                            <Link style={{marginLeft:"10px"}} to="/tv_shows">Tv-shows</Link>
                        </div>
                        <Routes >
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/tv_shows" element={<TvShows />} />
                        </Routes>

                    </div>


                </div>
                <div className="Body">
                    <div className="Imgpos">

                        <img stayl={{ padding: "20px" }} src="./Movie-poster-and-watch-button.png" />

                    </div>
                    <div className="TwoDiv">
                        <h1>

                            You've Got Murder
                        </h1>
                        <span>
                            10/25/2019
                        </span>
                        <span>
                        Comedy, Crime
                        </span>
                        <span>
                        1h 52m
                        </span>
                        <div>

                        </div>
                        <div className="Item">


                        <img src="./imdb-icon.png"/>
                        <img src="./10.png"/>
                        </div>
                        {/* <h3>
                            Overview
                            </h3> */}
                        {/* <div className="Text">
                            
                            {/* <p>
                            Istanbul Police Department homicide detectives encounter a murder 
                            nothing like they’ve seen before.Commissioners Emin, Salih, Asuman
                             and deputy Alaattin begin investigating.But strange murders keep happening. 
                             They don’t have any evidence or any clues. Day by day, tempers flare and the
                              police chiefs grow annoyed.As the murders keep piling up, the public’s
                               interest rises. The pressure on Emin and his colleagues get intense.
                                At last, the chief of police assigns “crime expert” Dizdar Koşu, 
                                who has recently come back from the US, to the team.Overwhelmed with 
                                panic, pressure and disdain, Emin and his friends try to solve the
                                 strangest series of murders with the most unusual methods
                            .This fast race against time immediately turns into a tragicomedy.
                            </p> */}
                        {/* </div>  */}

                    </div>

                </div>
            </div>
        </div>

    )
}
export default Cont