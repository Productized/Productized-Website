import React from 'react';
import MeetUpsDatabase from './MeetUpsDatabase.json';
import './MeetUps.css';
import MeetUpCard from './MeetUpCard';

function MeetUps() {
  const chosenMeetUps = MeetUpsDatabase.filter(
    (meetup) => meetup.isDisplayed === true,
  );
  return (
    <div>
      <div className="meetup-title-div">
        <h1 className="meetup-title">MeetUps</h1>
      </div>
      <div className="meetup-div">
        {chosenMeetUps.map((meetup) => (
          <MeetUpCard {...meetup} />
        ))}
      </div>
    </div>
  );
}

export default MeetUps;
