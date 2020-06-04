import React from 'react';
import './CalendarCard.css';

function CalendarCard(props) {
  console.log(props);
  return (
    <div className="calendarcard-div">
      <div className="date">
        <p className="month">{props.month}</p>
        <p className="day">{props.day}</p>
        <p className="weekday">{props.weekday}</p>
      </div>
      <div className="layer">
        <img className="calender-background" src={props.image} />
        <p className="event-text">{props.event}</p>
      </div>
    </div>
  );
}

export default CalendarCard;
