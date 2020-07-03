import React from 'react';
import './YearCard.css';

function YearCard(props) {
  const confCard = props;
  return (
    <a className="yearcard" href={`/previousconferences/${confCard.year}`}>
      <img
        className="yearcard-img"
        src={require(`../../assets/previousconferences/yearcards/${confCard.imageLocal}`)}
        alt={confCard.year}
      />
      <p className="yearcard-year">{confCard.year}</p>
    </a>
  );
}

export default YearCard;
