import "./create-movie-actor.scss"
// import imgSrc from '../../../../assets/img/Ellipse1.svg'

function CreateMovieActor(props) {
    const className = props.className
    const foto = props.foto


    return (
        <div className="actorBlock">
            <img src={foto} />
            <h3>{className}</h3>
            <h5>Film Name</h5>
        </div>
    )
}
export default CreateMovieActor