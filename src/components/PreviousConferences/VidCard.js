import React from 'react';
import './VidCard.css';

function VidCard(props) {
  const video = props;
  return (
    <div className="videocard-div">
      <iframe
        width="356"
        height="200"
        title={video.title}
        src={video.link}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}

export default VidCard;
