import React, { useState } from 'react';
import './VidCard.css';

function VidCard(props) {
  const [isImageDisplayed, setImageVisibility] = useState('block');
  const [IsIframeDisplayed, setIframeVisibility] = useState('none');
  const [autoplayOn, setAutoplayOn] = useState('0');
  const video = props;
  //console.log(props);

  return (
    <div className="videocard-div">
      <iframe
        style={{ display: IsIframeDisplayed }}
        width="356"
        height="200"
        title={video.title}
        src={`${video.link}?autoplay=${autoplayOn}`}
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
        width="356"
        height="200"
        src={video.image}
        alt={video.title}
        onMouseEnter={() => {
          setIframeVisibility('block');
          setAutoplayOn('1');
          setImageVisibility('none');
        }}
      />
    </div>
  );
}

export default VidCard;
