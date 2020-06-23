import React from 'react';
import './roxy.css';
import CalenderCard from "../Calendar/CalendarCard";

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Calender: [
        {
          id: 1,
          month: 'JUN',
          day: '25',
          weekday: 'THU',
          event: 'No events announced',
          image:
            'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
          id: 2,
          month: 'MAY',
          day: '02',
          weekday: 'FRI',
          event: 'No events announced',
          image:
            'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
      ],
    };
  }


  render() {
    return (
      <div className="card-bg-img"> 
        <div className="container">
        <div className="card-title">
       {
        this.state.Calender.map((calenderSingle) => (
        <CalenderCard
          id={calenderSingle.id}
        month={calenderSingle.month}
        day={calenderSingle.day}
        weekday={calenderSingle.weekday}
        event={calenderSingle.event}
        image={calenderSingle.image}
        />
        ))
      }
      </div>
      </div>
      </div>
    );
  }
}

export default Calender;
