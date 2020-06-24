import React from 'react';
import './OurTeam.css';
import OurTeamCard from './OurTeamCard';
import AndreMarquet from '../../../assets/team/Andre_Marquet.jpg';
import DanielZacarias from '../../../assets/team/Daniel_Zacarias.jpg';
import JoaoBernardino from '../../../assets/team/Joao_Bernardino.jpg';

class OurTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamCards: [
        {
          id: 1,
          image: AndreMarquet,
          name: 'André Marquet',
          description:
            'Product, entrepreneur and inventor. Co-founder at Beta-i and Productized. Back from the future to shake the present.',
          linkedin: 'https://www.linkedin.com/in/marquet/',
          twitter: 'https://twitter.com/amarquet',
          email: 'andre@productized.co',
        },

        {
          id: 2,
          image: DanielZacarias,
          name: 'Daniel Zacarias',
          description:
            'Product Management consultant, fascinated by the fact that making software products is all about working with (and for) other people.',
          linkedin: 'https://www.linkedin.com/in/dzacarias/',
          twitter: 'https://twitter.com/listentodaniel',
          email: 'daniel@substantive.pt',
        },

        {
          id: 3,
          image: JoaoBernardino,
          name: 'João Bernardino',
          description:
            'Product Management, Innovation, Mobility, Policy, Startup Founder.',
          linkedin: 'https://www.linkedin.com/in/joaoprbernardino/',
          twitter: 'https://twitter.com/productizedconf',
          email: 'info@productized.co',
        },
      ],
    };
  }

  render() {
    const teamCards = this.state.teamCards;
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
}

export default OurTeam;
