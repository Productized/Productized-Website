import React from 'react';
import './GirlsHomepage.css';
import LillyBeyond from '../../../assets/girlswhoproduct-homepage/lilly_beyond.jpg';

export default function GirlsHomepage() {
  return (
    <div className="girl-main-container">
      <div className="girl-title-content">
        <p className="podcast">PODCAST</p>
        <h2 className="girls-product">#GIRLSWHOPRODUCT</h2>
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
          <img src={LillyBeyond} alt="Lilly Beyond" />
        </div>
      </div>
      <a
        href="https://www.meetup.com/Productized/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="girls-button">JOIN THE NEXT #GWP</button>
      </a>
    </div>
  );
}
