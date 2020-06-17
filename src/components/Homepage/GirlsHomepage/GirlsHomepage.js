import React from "react";
import "./GirlsHomepage.css";
import pippin from "../../../assets/pippin.jpg";
import zalandoo from "../../../assets/zalandoo.png";

export default function GirlsHomepage() {
 
  return (
    <div className="girl-main-container">
      <div className="girl-title-content">
        <p className="podcast">PODCAST</p>
        <h2 className="girls-product"> #GIRLSWHOPRODUCT </h2>
        <p className="girl-card-text">
          Hello I am a super text about unicorns! La La La! Hello I am a super
          text about unicorns! La La La! Hello I am a super text about unicorns!
          La La La! Hello I am a super text about unicorns! La La La! Hello I am
          a super text about unicorns! La La La! Hello I am a super text about
          unicorns! La La La! Hello I am a super text about unicorns! La La La!
          Hello I am a super text about unicorns! La La La!
        </p>
      </div>
      <div className="girl-cards-container">
        <div className="girl-cards">
          <img className="girl-card-image" src={pippin} alt="pippin" />
          <div className="girl-name-div">
            <p className="girl-name girl-small-title">#GIRLSWHOPRODUCT</p>
            <p className="girl-name">Lilly</p>
            <p className="girl-name">Beyond</p>
            <img className="zal zal-girl" src={zalandoo} alt="zalandoo" />
          </div>
        </div>
      </div>
      <button className="girl-button"> READ THE LATEST INTERVIEW </button>
    </div>
  );
}
