import React from 'react';
import './CalenderCard.css';

class CalenderCard extends React.Component {
  render() {
    return (
      <div className="card-bg-img">
        <div className="card-title">
          <h1>Calender</h1>
          <p>No events announced</p>
        </div>
      </div>
    );
  }
}

export default CalenderCard;
