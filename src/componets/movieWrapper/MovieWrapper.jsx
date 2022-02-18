
import { useState } from 'react';
import MovieCover from '../moviecover/MovieCover';
import SuggestBtn from '../suggestionbtn/SuggestionBtn';
import NetflixButton from '../netflixButton/NetflixButton';
import './style.scss';


function MovieWrapper() {
    let [state, setState] = useState(0)
    const handleClick = function () {
        setState(state + 1)
        console.log("on click")
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

