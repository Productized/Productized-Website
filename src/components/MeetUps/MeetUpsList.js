import React from 'react';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import MeetUpsDatabase from './MeetUpsDatabase.json';
import './MeetUps.css';
import MeetUpCard from './MeetUpCard';

function MeetUps() {
  const chosenMeetUps = MeetUpsDatabase.filter(
    (meetup) => meetup.isDisplayed === true,
  );
  return (
    <div>
      <NavBar />
      <div className="meetup-title-div">
        <h1 className="meetup-title">MeetUps</h1>
      </div>
      <div className="meetup-div">
        {chosenMeetUps.map((meetup) => (
          <MeetUpCard {...meetup} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MeetUps;
