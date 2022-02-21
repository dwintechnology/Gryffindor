import image from '../../assets/img/movie-poster.png';

function MovieCover() {
    return (
            <div className="moviepic">
                <img src={image} />
            </div>
    )
}

export default MovieCover;