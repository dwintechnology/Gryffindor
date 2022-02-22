import "./style.scss";
import MovieDetails from "../movie-details/movie-details";
import MovieCover from "../moviecover/MovieCover";
import SuggestBtn from "../suggestionbtn/SuggestionBtn";
import NetflixButton from "../netflixButton/NetflixButton";

function MovieWrapper() {
  const handleClick = function () {
    window.location.reload();
  };

  return (
    <div className="movieshow">
      <div className="picAndBtn">
        <MovieCover />
        <NetflixButton />
        <SuggestBtn onClick={handleClick} />
      </div>
        <MovieDetails />
    </div>
  );
}
export default MovieWrapper;
