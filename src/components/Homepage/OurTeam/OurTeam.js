import React from "react";
import "./OurTeam.css";
import OurTeamCard from "./OurTeamCard";
import pippin from "../../../assets/pippin.jpg";

class OurTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamCards: [
        { id: 1, image: "https://i.imgur.com/AMP0su6.jpg", description: "I am a text" },

        { id: 2, image: pippin, description: "I am a text" },

        { id: 3, image: pippin, description: "I am a text" },
      ],
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="title-content">
          <p className="dedicated">DEDICATED</p>
          <p className="our-team"> OUR TEAM </p>
        </div>

        <div className="cards-container">
          {this.state.teamCards.map((teamCard) => (
            <OurTeamCard
              id={teamCard.id}
              image={teamCard.image}
              description={teamCard.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default OurTeam;
