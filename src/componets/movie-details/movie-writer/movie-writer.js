import CreateMovieWriters from "./create-movie-writers/create-movie-writers"
import "./movie-writer.scss"

function MovieWriter(){

    return(
        <div className="movieWriter">
            <CreateMovieWriters/>
            <CreateMovieWriters/>
            <CreateMovieWriters/>

        </div>
    )
}
export default MovieWriter