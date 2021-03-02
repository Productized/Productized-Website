import React from 'react';
import './CurrentEvent.css';
import CurrentEventLogo from '../../../assets/current-event/MasterLogoWhite.png';

function CurrentEvent() {
  return (
    <div className="current-event">
      <img
        className="current-event-img"
        src={CurrentEventLogo}
        alt="conference logo"
      />
      <p className="current-event-p">
        If you are looking for PRODUCTIZED <span>MASTERCLASSES</span> checkout our website
      </p>
      <a
        className="current-event-button-link"
        href="masters.productized.co?utm_source=website&utm_medium=banner1&utm_campaign=pro_website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="current-event-button">CHECK NOW</button>
      </a>
    </div>
  );
}

export default CurrentEvent;
