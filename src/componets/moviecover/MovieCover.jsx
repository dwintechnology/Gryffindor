import image from '../../assets/img/movie-poster.png';
import "./style.scss"
function MovieCover() {
    return (
            <div className="moviepic">
                <img src={image}  className = "img"/>
            </div>
    )
}

export default MovieCover;