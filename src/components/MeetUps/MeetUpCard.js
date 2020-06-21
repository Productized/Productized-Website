import React from 'react';
import './MeetUps.css';

function MeetUpCard(props) {
  return (
    <div className="meetupcard-div">
      <div className="meetup-img">
        <img
          className="meetup-cardimg"
          src={props.cardImage}
          alt={props.albumTitle}
        />
        <a href={props.videoURL} target="_blank" rel="noopener noreferrer">
          <p className="youtube">YOUTUBE</p>
        </a>
        <a href={props.albumURL} target="_blank" rel="noopener noreferrer">
          <p className="flickr">FLICKR</p>
        </a>
      </div>
    </div>
  );
}

export default MeetUpCard;
