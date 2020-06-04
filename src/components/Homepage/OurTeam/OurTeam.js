import React from "react";
import "./OurTeam.css";
import OurTeamCard from "./OurTeamCard";
import pippin from "../../../assets/pippin.jpg";

class OurTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamCards: [
        { id: 1, image: pippin, description: "I am a text" },

        { id: 2, image: pippin, description: "I am a text" },

        { id: 3, image: pippin, description: "I am a text" },
      ],
    };
  }

  render() {
    const teamCards = this.state.teamCards;
    return (
      <div>
        <div className="title-content">
          <p className="dedicated">DEDICATED</p>
          <h2 className="our-team"> OUR TEAM </h2>
        </div>
        <div className="cards-container">
          {teamCards.map((teamCard) => (
            <OurTeamCard
            {...teamCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default OurTeam;
