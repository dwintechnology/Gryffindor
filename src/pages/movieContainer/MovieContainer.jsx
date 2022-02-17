import './Style.scss'

import MovieWrapper from '../../componets/movieWrapper/MovieWrapper'
import NavBar from '../../componets/navBar/NavBar'


function MovieContainer() {
    return (
       
            <div className="ContainerStyle" >
        <div>
        <NavBar/> <MovieWrapper/>
        </div>
        </div>
            
       

    )
}
export default MovieContainer