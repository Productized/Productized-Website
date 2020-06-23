import React from "react";
import "./GirlsWhoProduct.css";

export default function GirlsWhoProductCard(props) {
  console.log(props);
  return (
    <div className="girls-main-container">
      
      
        <p className="girls-name">{props.name}</p>
        <p className="girls-position">{props.position}</p>

      <div className="girls-img">
        <img className="girls-cardimg" src={props.image} alt={props.name} />
        <a href={props.medium} target="_blank" rel="noopener noreferrer">
          <p className="medium">MEDIUM</p>
        </a>
        <a href={props.soundcloud} target="_blank" rel="noopener noreferrer">
          <p className="soundcloud">SOUNDCLOUD</p>
        </a>
      </div>
    </div>
  );
}
