import React, { useState } from 'react';
import './VidCard.css';

function RecapCard(props) {
  const [isImageDisplayed, setImageVisibility] = useState('block');
  const [IsIframeDisplayed, setIframeVisibility] = useState('none');
  const [autoplayOn, setAutoplayOn] = useState('0');
  const { recapVideo } = props;

  return (
    <div className="videocard-div">
      <iframe
        className="custom-card"
        style={{ display: IsIframeDisplayed }}
        title={recapVideo.title}
        src={`${recapVideo.link}?autoplay=${autoplayOn}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        webkitallowfullscreen
        mozallowfullscreen
        onMouseLeave={() => {
          setIframeVisibility('none');
          setAutoplayOn('0');
          setImageVisibility('block');
        }}
      />
      <img
        style={{ display: isImageDisplayed }}
        className="custom-card"
        src={require(`../../assets/previousconferences/conferences/${recapVideo.imageLocal}`)}
        alt={recapVideo.title}
        onMouseEnter={() => {
          setIframeVisibility('block');
          setAutoplayOn('1');
          setImageVisibility('none');
        }}
      />
    </div>
  );
}

export default RecapCard;
