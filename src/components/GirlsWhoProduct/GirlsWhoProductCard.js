import React from "react";
import "./GirlsWhoProduct.css";

export default function GirlsWhoProductCard(props) {
  console.log(props);
  return (
    <div className="girls-main-container">
      <p className="girls-name">{props.name}</p>
      <p className="girls-position">{props.position}</p>
      <p className="girls-medium">{props.medium}</p>
      <p className="girls-soundcloud">{props.soundcloud}</p>
    </div>
  );
}
