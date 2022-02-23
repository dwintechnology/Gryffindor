import "./movie-information.scss";
import PopupExample from "./Modal";
import { useEffect, useState } from "react";
function MovieInformation() {
  let [castobj, setCastObj] = useState()
  let title = "Spider Man"
    function getDATA(){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC_mymmew6S2GNkUc1el0HFTYdKKhS0EwQ&type=video&q=${title} + "triller"`)
        .then((first) => { return first.json() })
        .then((last) => { setCastObj(last) })
    }
    useEffect(()=>{
        getDATA()
    }, [])
  return (
    <div className="movieInformation">
      <div className="movieReleaseDate">12/25/2255</div>
      <div className="movieGenre">Comedy, Crime</div>
      <div className="movieTime">1h 29m</div>
      <div className="trailerPlay">
        <div>
          <PopupExample videoId={castobj?.items[0].id.videoId}/>
        </div>
      </div>
    </div>
  );
}

export default MovieInformation;
