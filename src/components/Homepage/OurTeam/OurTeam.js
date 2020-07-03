import React from 'react';
import './OurTeam.css';
import OurTeamCard from './OurTeamCard';
import OurTeamDatabase from './OurTeamDatabase.json';

function OurTeam() {
  const teamCards = OurTeamDatabase.filter(
    (teamMember) => teamMember.isDisplayed === true,
  );

  return (
    <div>
      <div className="title-content">
        <p className="our-team-subtitle">DEDICATED</p>
        <h2 className="our-team-title"> OUR TEAM </h2>
      </div>
      <div className="team-cards-container">
        {teamCards.map((teamCard) => (
          <OurTeamCard {...teamCard} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
