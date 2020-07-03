import React from 'react';
import CalendarCard from './CalendarCard';
import './CalendarCard.css';
import CalendarDatabase from './CalendarDatabase.json';

function Calendar() {
  const calendarEvents = CalendarDatabase.filter(
    (event) => event.isDisplayed === true,
  );
  return (
    <>
      <p className="calendar-subtitle">OUR EVENTS</p>
      <h2 className="calendar-title"> CALENDAR </h2>
      <div className="calendar-div">
        {calendarEvents.map((event) => (
          <CalendarCard {...event} />
        ))}
      </div>
    </>
  );
}

export default Calendar;
