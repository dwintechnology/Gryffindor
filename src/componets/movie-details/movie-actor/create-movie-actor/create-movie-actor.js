import "./create-movie-actor.scss"
import imgSrc from '../../../../assets/img/Ellipse1.svg'

function CreateMovieActor(props){
    const className=props.className

    return(
    <div className="actorBlock">
        <img src={imgSrc}/>
        <h3>{className}</h3>
        <h5>Film Name</h5>
    </div>
    )
}
export default CreateMovieActor