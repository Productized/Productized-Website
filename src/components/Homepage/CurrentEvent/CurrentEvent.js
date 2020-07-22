import React from 'react';
import './CurrentEvent.css';
import CurrentEventLogo from '../../../assets/current-event/CurrentEventLogo.png';

function CurrentEvent() {
  return (
    <div className="current-event">
      <img
        className="current-event-img"
        src={CurrentEventLogo}
        alt="conference logo"
      />
      <p className="current-event-p">
        If you are looking for PRODUCTIZED <span>CONFERENCE</span> checkout our
        conference website
      </p>
      <a
        className="current-event-button-link"
        href="https://conference.productized.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="current-event-button">CHECK NOW</button>
      </a>
    </div>
  );
}

export default CurrentEvent;
