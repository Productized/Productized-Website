import React from 'react';
import CalendarCard from './CalendarCard';
import './CalendarCard.css';
import CalendarDatabase from './CalendarDatabase.json';
import moment from 'moment';

function Calendar() {
  return (
    <>
      <p className="calendar-subtitle">OUR EVENTS</p>
      <h2 className="calendar-title"> CALENDAR </h2>
      <div className="calendar-div">
        {CalendarDatabase.map((event) => moment(event.date).isSameOrAfter() && (
          <CalendarCard {...event} />
        ))}
      </div>
    </>
  );
}

export default Calendar;
