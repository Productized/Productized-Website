import React from 'react';
import './OurTeam.css';
import LinkedinIcon from '../../../assets/team/TeamLinkedinIcon.png';
import TwitterIcon from '../../../assets/team/TeamTwitterIcon.png';
import EmailIcon from '../../../assets/team/TeamEmailIcon.png';

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
                src={LinkedinIcon}
                alt="Linkedin Icon"
              />
            </a>
            <a href={props.twitter} target="_blank" rel="noopener noreferrer">
              <img
                className="whatwedo-twitter-icon"
                src={TwitterIcon}
                alt="Twitter Icon"
              />
            </a>
            <a
              href={`mailto: ${props.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="whatwedo-email-icon"
                src={EmailIcon}
                alt="Email Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
