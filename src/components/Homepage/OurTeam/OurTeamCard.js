import React from 'react';
import './OurTeam.css';
import linkedin from '../../../assets/linkedin-icon.png';
import twitter from '../../../assets/twitter-icon.png';
import email from '../../../assets/email-icon.png';

export default function OurTeamCard(props) {
  console.log(props);
  return (
    <div className="team-cards">
      <img className="team-image" src={props.image} alt={props.name} />
      <div className="text-team-overlay">
        <div className="team-text">
          <p className="team-text-name">{props.name}</p>
          <p className="team-text-description">{props.description}</p>
          <div className="contact">
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                className="whatwedo-linkedin-icon"
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a href={props.twitter} target="_blank" rel="noopener noreferrer">
              <img
                className="whatwedo-twitter-icon"
                src={twitter}
                alt="twitter"
              />
            </a>
            <a
              href={`mailto: ${props.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="whatwedo-email-icon" src={email} alt="email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
