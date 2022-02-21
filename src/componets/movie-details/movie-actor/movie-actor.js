import CreateMovieActor from './create-movie-actor/create-movie-actor'
import './movie-actor.scss'

function MovieActor(){
const a =["barev","hajox","vonch es"]
    return(
        <div className="movieActor">
            {a.map((element,i) => {
              return  <CreateMovieActor key={i} className={element}/>
                
            })};

        </div>
    )
}

export default MovieActor