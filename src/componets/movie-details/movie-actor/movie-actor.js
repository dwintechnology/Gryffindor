import React from 'react';
import PropTypes from 'prop-types';
import CreateMovieActor from './create-movie-actor/create-movie-actor';
import imgActor from '../../../assets/img/ActorIcon.png';
import './movie-actor.scss';

export default function MovieActor(props) {
  const { movieActor } = props;

  return (
    <div className="movieActor">
      {movieActor?.map((element, index) => (
        index < 4 && (
          <CreateMovieActor
            name={element.name}
            filmName={element.role}
            photo={imgActor}

          />
        )
      ))}

    </div>
  );
}

MovieActor.propTypes = {
  movieActor: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
