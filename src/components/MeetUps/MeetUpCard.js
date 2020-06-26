import React from 'react';
import './MeetUps.css';

function MeetUpCard(props) {
  const meetups = props;
  return (
    <div className="meetupcard-div">
      <div className="meetup-img">
        <img
          className="meetup-card-img"
          src={require(`../../assets/meetups/${meetups.imageLocal}`)}
          alt={meetups.albumTitle}
        />
        <a href={meetups.videoURL} target="_blank" rel="noopener noreferrer">
          <p className="youtube">YOUTUBE</p>
        </a>
        <a href={meetups.albumURL} target="_blank" rel="noopener noreferrer">
          <p className="flickr">FLICKR</p>
        </a>
      </div>
    </div>
  );
}

export default MeetUpCard;
