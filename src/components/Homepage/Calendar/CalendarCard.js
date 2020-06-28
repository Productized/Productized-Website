import React from 'react';
import './CalendarCard.css';

function CalendarCard(props) {
  const event = props;
  let splitedEvent = event.eventName.split('');

  return (
    <div className="calendar-ext">
      <a href={event.eventLink} target="_blank" rel="noopener noreferrer">
        <div className="calendarcard-div">
          <div className="date">
            <p className="month">{event.month}</p>
            <p className="day">{event.day}</p>
            <p className="weekday">{event.weekday}</p>
          </div>
          <div className="layer">
            <img
              className="calendar-background"
              src={require(`../../../assets/calendar/${event.imageBackground}`)}
              alt={event.eventName}
            />
            <p
              className={
                splitedEvent.length < 50 ? 'event-text-sm' : 'event-text-lg'
              }
            >
              {event.eventName}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CalendarCard;
