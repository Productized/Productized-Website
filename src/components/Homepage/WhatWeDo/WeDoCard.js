import React from 'react';
import './WeDoCard.css';

function WeDoCard(props) {
  const card = props;
  return (
    <div className={`wedocard ${card.backgroundColor}`}>
      <img className="wedocard-img" src={card.image} alt={card.title} />
      <div className="wedocard-body">
        <h4>{card.title}</h4>
        <p>{card.description}</p>
        <a href={card.buttonLink}>
          <button className={`wedocard-button ${card.backgroundColor}`}>
            {card.button}
          </button>
        </a>
      </div>
    </div>
  );
}

export default WeDoCard;
