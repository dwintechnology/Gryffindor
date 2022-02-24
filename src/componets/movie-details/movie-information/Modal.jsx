import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './modal.scss';
import PropTypes from 'prop-types';
import PlayerLogo from '../../../assets/img/PlayerLogo.png';

export default function PopupModal({ videoId }) {
  return (
    <Popup
      trigger={(
        <button type="button" className="trailerPlay1">
          {' '}
          <img alt="img" src={PlayerLogo} />
          Play Trailer
        </button>
      )}
      position="Top-left"
    >
      {(close) => (
        <div>
          <iframe className="video" width="670px" height="auto" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <button type="button" className="close" onClick={close}>
            X
          </button>
        </div>
      )}
    </Popup>
  );
}
PopupModal.propTypes = {
  videoId: PropTypes.string,
};

PopupModal.defaultProps = {
  videoId: PropTypes.string,
};
