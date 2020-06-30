import React from 'react';
import './WeDoCard.css';

function WeDoCard(props) {
  const weDoCard = props;
  return (
    <div className={`wedocard ${weDoCard.backgroundColor}`}>
      <img
        className="wedocard-img"
        src={require(`../../../assets/whatwedo/${weDoCard.image}`)}
        alt={weDoCard.title}
      />
      <div className="wedocard-body">
        <h4>{weDoCard.title}</h4>
        <p>{weDoCard.description}</p>
        <a href={weDoCard.buttonLink}>
          <button className={`wedocard-button ${weDoCard.backgroundColor}`}>
            {weDoCard.button}
          </button>
        </a>
      </div>
    </div>
  );
}

export default WeDoCard;
