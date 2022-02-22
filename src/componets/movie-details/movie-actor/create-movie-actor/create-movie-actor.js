import './create-movie-actor.scss';

function CreateMovieActor(props) {
  const { name } = props;
  const { photo } = props;
  const { filmName } = props;

  return (
    <div className="actorBlock">
      <img src={photo} />
      <h3>{name}</h3>
      <h5>{filmName}</h5>
    </div>
  );
}
export default CreateMovieActor;
