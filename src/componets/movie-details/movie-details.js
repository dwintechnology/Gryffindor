import "./movie-details.scss"
import MovieTitle from "./movie-title/movie-title"

function MovieDetails(){
    return(
        <div className="movieDetails">
            <MovieTitle/>
            {/* <MovieInformation/>
            <MovieRating/>
            <MovieOverview/>
            <MovieWriter/>
            <MovieActor/> */}
        </div>
    )
}
export default MovieDetails