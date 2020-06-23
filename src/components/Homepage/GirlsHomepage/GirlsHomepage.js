import React from "react";
import "./GirlsHomepage.css";
import lilly from "../../../assets/lilly.jpg";

export default function GirlsHomepage() {
  return (
    <div className="girl-main-container">
      <div className="girl-title-content">
        <p className="podcast">PODCAST</p>
        <h2 className="girls-product"> #GIRLSWHOPRODUCT </h2>
        <p className="girl-card-text">
          #GirlsWhoProduct is a series of interviews with women that have been
          able to beat the ‘product’ ceiling and get into the profession. Our
          mission is to inspire, connect and empower more women to get into
          product roles and help them consider ‘product’ as a venue of personal
          and professional growth.
        </p>
      </div>
      <div className="girl-cards-container">
        <div className="girl-cards">
          <img src={lilly} alt="lilly beyond" />
        </div>
      </div>
      <button onclick="https://soundcloud.com/productized/girlswhoproduct-with-lilly-beyond-confidence-coach-strategy-consultant-beyond-consulting" className="girl-button"> READ THE LATEST INTERVIEW </button>
    </div>
  );
}
