import React from 'react';
import CalendarCard from './CalendarCard';
import './CalendarCard.css';
import CalendarEvent1 from '../../../assets/calendar/CalendarEvent1.jpg';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          month: 'JUN',
          day: '25',
          weekday: 'THU',
          event: 'No events announced',
          image: CalendarEvent1,
        },
      ],
    };
  }

  render() {
    const events = this.state.events;
    return (
      <div className="calendar-div">
        <p className="calendar-subtitle">OUR EVENTS</p>
        <h2 className="calendar-title"> CALENDAR </h2>
        {events.map((event) => (
          <CalendarCard {...event} />
        ))}
      </div>
    );
  }
}

export default Calendar;
