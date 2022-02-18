import CreateMovieActor from './create-movie-actor/create-movie-actor'
import './movie-actor.scss'

function MovieActor(){
    return(
        <div className="movieActor">
            <CreateMovieActor/>
            <CreateMovieActor/>
            <CreateMovieActor/>
            <CreateMovieActor/>

        </div>
    )
}

export default MovieActor