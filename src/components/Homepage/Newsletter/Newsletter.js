import React from 'react';
import './Newsletter.css';

import newsletter from './../../../assets/Newsletter/newsletter.png';

function Newsletter() {
  return (
    <>
      <div className="newsletter-div">
        <div className="newsletter">
          <img
            className="newsletter-img"
            src={newsletter}
            alt="conference logo"
          />
          <p className="newsletter-p">
            SUBSCRIBE to our NEWSLETTER and get all the news about our LATEST
            events.
          </p>
          <a
            className="newsletter-button-link"
            href="https://productized.us10.list-manage.com/subscribe/post?u=de60de4daf5ddf8013e08fc70&amp;id=20f277c5c7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="newsletter-button">SUBSCRIBE</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
