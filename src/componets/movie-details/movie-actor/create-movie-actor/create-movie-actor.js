import './create-movie-actor.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function CreateMovieActor(props) {
  const { name } = props;
  const { photo } = props;
  const { filmName } = props;

  return (
    <div className="actorBlock">
      <img src={photo} alt="img" />
      <h3>{name}</h3>
      <h5>{filmName}</h5>
    </div>
  );
}

CreateMovieActor.propTypes = {
  name: PropTypes.string,
};

CreateMovieActor.defaultProps = {
  name: PropTypes.string,
};
CreateMovieActor.propTypes = {
  photo: PropTypes.string,
};
CreateMovieActor.defaultProps = {
  photo: PropTypes.string,
};
CreateMovieActor.propTypes = {
  filmName: PropTypes.string,
};

CreateMovieActor.defaultProps = {
  filmName: PropTypes.string,
};
