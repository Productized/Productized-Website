import React from "react";
import "./OurTeam.css";
import pippin from "../../../assets/pippin.jpg";
import pippin2 from "../../../assets/pippin2.jpg"

export default function OurTeam() {
  return (
 <div>
    <div className="title-content">
    <p className="dedicated">DEDICATED</p>
    <p className="our-team"> OUR TEAM </p>
    </div>

    <div className="cards-container">
    <div className="cards">
      <img className="card-image" src={pippin} alt="pippin" />
      <img className="card-image image2" src={pippin2} alt="pippin" />
    </div>

    <div className="cards">
      <img className="card-image" src={pippin} alt="pippin" />
      <img className="card-image image2" src={pippin2} alt="pippin" />
    </div>

    <div className="cards">
     <img className="card-image image2" src={pippin2} alt="pippin" />
      <img className="card-image" src={pippin} alt="pippin" />
    </div>
</div>
  </div>
  );
}

