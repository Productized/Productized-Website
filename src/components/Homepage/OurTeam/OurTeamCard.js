import React from "react";
import "./OurTeam.css";

export default function OurTeamCard(props) {
  console.log(props);
  return (
    <div className="cards">
      <img className="card-image" src={props.image} alt="pippin" />
      <p className="card-text">{props.description}</p>
      <div className="color-overlay"></div>
    </div>
  );
}
