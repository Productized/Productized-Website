import React from 'react';
import './CourseCard.css';

function CourseCard(props) {
  const card = props;
  return (
    <div className={`coursecard ${card.backgroundColor}`}>
      <img className="coursecard-img" src={card.image} alt={card.title} />
      <div className="coursecard-body">
        <h4>{card.title}</h4>
        <p>{card.description}</p>

        <div>
          <a href={card.buttonLink}>
            <button className={`coursecard-button ${card.backgroundColor}`}>
              {card.button}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
