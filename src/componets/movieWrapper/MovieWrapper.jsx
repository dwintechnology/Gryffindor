
import { useState } from 'react';
import MovieCover from '../moviecover/MovieCover';
import SuggestBtn from '../suggestionbtn/SuggestionBtn';
import NetflixButton from '../netflixButton/NetflixButton';
import './style.scss';


function MovieWrapper() {
    

    const handleClick = function () {
        
        window.location.reload()
    }

    return (

        <div className="movShow">
            <div className="picAndBtn">
                <MovieCover />
                <NetflixButton />
                <SuggestBtn onClick={handleClick} />
            </div>
        </div>
    )
}
export default MovieWrapper;

