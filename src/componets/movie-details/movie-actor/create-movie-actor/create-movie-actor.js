import "./create-movie-actor.scss"

function CreateMovieActor(props) {
    const name = props.name
    const photo = props.photo
    const filmName = props.filmName


    return (
        <div className="actorBlock">
            <img src={photo} />
            <h3>{name}</h3>
            <h5>{filmName}</h5>
        </div>
    )
}
export default CreateMovieActor