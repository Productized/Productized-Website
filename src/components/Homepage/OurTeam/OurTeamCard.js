import React from 'react';
import './OurTeam.css';
import LinkedinIcon from '../../../assets/team/TeamLinkedinIcon.png';
import TwitterIcon from '../../../assets/team/TeamTwitterIcon.png';
import EmailIcon from '../../../assets/team/TeamEmailIcon.png';

export default function OurTeamCard(props) {
  const team = props;
  return (
    <div className="team-cards">
      <img
        className="team-image"
        src={require(`../../../assets/team/${team.image}`)}
        alt={team.name}
      />
      <div className="text-team-overlay">
        <div className="team-text">
          <p className="team-text-name">{team.name}</p>
          <p className="team-text-description">{team.description}</p>
          <div className="contact">
            <a href={team.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                className={team.linkedin ? 'whatwedo-linkedin-icon' : 'hide'}
                src={LinkedinIcon}
                alt="Linkedin Icon"
              />
            </a>
            <a href={team.twitter} target="_blank" rel="noopener noreferrer">
              <img
                className={team.twitter ? 'whatwedo-twitter-icon' : 'hide'}
                src={TwitterIcon}
                alt="Twitter Icon"
              />
            </a>
            <a
              href={`mailto: ${team.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={team.email ? 'whatwedo-email-icon' : 'hide'}
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
