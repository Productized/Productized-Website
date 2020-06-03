import React from 'react';
import './YearCard.css';

function YearCard(props) {
  return (
    <a href={`/previousconferences/${props.year}`}>
      <div className="yearcard">
        <img className="yearcard-img" src={props.image} alt={props.year} />
        <p className="yearcard-year">{props.year}</p>
      </div>
    </a>
  );
}

export default YearCard;
