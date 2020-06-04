import React from 'react';
import CalendarCard from './CalendarCard';
import './CalendarCard.css';
import calender from '../../../assets/calender.jpg';
import calender2 from '../../../assets/calender2.jpg';

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
          image: calender,
        },
        {
          id: 2,
          month: 'MAY',
          day: '02',
          weekday: 'FRI',
          event: 'No events announced',
          image: calender2,
        },
      ],
    };
  }

  render() {
    const events = this.state.events;
    return (
      <div>
        <h2 className="page-title"> CALENDER </h2>
        {events.map((event) => (
          <CalendarCard {...event} />
        ))}
      </div>
    );
  }
}

export default Calendar;
