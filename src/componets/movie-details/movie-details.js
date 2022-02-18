import MovieActor from "./movie-actor/movie-actor"
import "./movie-details.scss"
import MovieInformation from "./movie-information/movir-information"
import MovieOverview from "./movie-overview/movie-overview"
import MovieRating from "./movie-rating/movie-rating"
import MovieTitle from "./movie-title/movie-title"
import MovieWriter from "./movie-writer/movie-writer"

function MovieDetails(){
    return(
        <div className="movieDetails">
            <MovieTitle/>
            <MovieInformation/>
            <MovieRating/>
            <MovieOverview/>
            <MovieWriter/>
            <MovieActor/>
        </div>
    )
}
export default MovieDetails