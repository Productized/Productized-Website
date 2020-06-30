import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <a
          href="https://www.meetup.com/pt-BR/Productized/events/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="meetup" icon={['fab', 'meetup']} />
        </a>
        <a href={meetups.videoURL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="youtube" icon={['fab', 'youtube']} />
        </a>
        <a href={meetups.albumURL} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="flickr" icon={['fab', 'flickr']} />
        </a>
      </div>
    </div>
  );
}

export default MeetUpCard;
