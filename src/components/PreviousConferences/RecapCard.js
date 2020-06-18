import React, { useState } from 'react';
import './VidCard.css';

function RecapCard(props) {
  const [isShown, setIsShown] = useState(false);
  const { recapVideo } = props;
  console.log(isShown);

  return (
    <div className="videocard-div">
      {isShown ? (
        <iframe
          width="356"
          height="200"
          title={recapVideo.title}
          src={`${recapVideo.link}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen
          mozallowfullscreen
          onMouseLeave={() => setIsShown(false)}
        />
      ) : (
        <img
          width="356"
          height="200"
          src={recapVideo.image}
          alt={recapVideo.title}
          onMouseEnter={() => setIsShown(true)}
        />
      )}
    </div>
  );
}

export default RecapCard;
