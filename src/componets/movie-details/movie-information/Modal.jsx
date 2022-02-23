import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './modal.scss';
import PlayerLogo from "../../../assets/img/PlayerLogo.png";

const PopupExample = ({videoId}) => (
  
  <Popup trigger={<button  className ="trailerPlay1" > <img src={PlayerLogo}/>Play Trailer</button>} position="Top-left">
    {close => (
      <div>
        <iframe className="video" width="670px" height="auto" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button className="close" onClick={close}>
          X
        </button>
      </div>
    )}
  </Popup>
);


export default PopupExample

