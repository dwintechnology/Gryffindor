import "./movie-rating.scss"
import ratingIcon from "../../../assets/img/rating-icon.svg"
function MovieRating(){

    return(
        <div className="movieRating">
            <img src={ratingIcon}/>
            <div className="rating"> 7 / 10</div>
        </div>
    )
}

export default MovieRating