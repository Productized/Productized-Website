import React from 'react';
import './CalendarCard.css';

function CalendarCard(props) {
  console.log(props);
  return (
    // <div className="col-md-8 col-sm-6 col-xs-12">
    <div className="calendarcard-div">
      <div className="date">
        <p className="month">{props.month}</p>
        <p className="day">{props.day}</p>
        <p className="weekday">{props.weekday}</p>
      </div>
      <div className="layer ">
        <img
          className="calendar-background"
          src={props.image}
          alt={props.event}
        />
        <p className="event-text">{props.event}</p>
      </div>
    </div>
  );
}

export default CalendarCard;
