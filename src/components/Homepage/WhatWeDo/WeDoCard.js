import React from 'react';
import './WeDoCard.css';

function WeDoCard(props) {
  return (
    <div className={`wedocard ${props.backgroundColor}`}>
      <img className="wedocard-img" src={props.image} alt={props.title} />
      <div className="wedocard-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button className={`wedocard-button ${props.backgroundColor}`}>
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default WeDoCard;
