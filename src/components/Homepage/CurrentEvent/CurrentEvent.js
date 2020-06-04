import React from 'react';
import './CurrentEvent.css';
import logoConf from '../../../assets/conference2-white.png';

function CurrentEvent() {
  return (
    <>
      <div className="current-event-div">
        <div className="current-event">
          <img
            className="current-event-img"
            src={logoConf}
            alt="conference logo"
          />
          <p className="current-event-p">
            If you are looking for PRODUCTIZED <span>CONFERENCE</span> checkout
            our conference website
          </p>
          <a
            className="current-event-button-link"
            href="https://productized.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="current-event-button">CHECK NOW</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default CurrentEvent;
