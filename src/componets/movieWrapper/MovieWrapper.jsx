
import MovieCover from '../moviecover/MovieCover';
import SuggestBtn from '../suggestionbtn/SuggestionBtn';
import './style.scss';

function MovieWrapper(){
    const handleClick = function (){
        console.log("on click")
    }

    return( 
      
    <div className="movShow">
        <div className="picAndBtn">
        <MovieCover />
        <SuggestBtn onClick={handleClick} />
        </div>
    </div>
    )
}
export default MovieWrapper;

