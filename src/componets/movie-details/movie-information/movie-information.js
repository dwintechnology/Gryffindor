import './movie-information.scss';
import PlayerLogo from '../../../assets/img/PlayerLogo.png';

function MovieInformation() {
  return (
    <div className="movieInformation">
      <div className="movieReleaseDate">12/25/2255</div>
      <div className="movieGenre">Comedy, Crime</div>
      <div className="movieTime">1h 29m</div>
      <div className="trailerPlay">
        Play Trailer
        <img src={PlayerLogo} />

      </div>

    </div>
  );
}

export default MovieInformation;
