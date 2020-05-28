import React from 'react';
import './CurrentEvent.css';
import logoConf from '../../../assets/logo-conf.png';
import { useTranslation } from 'react-i18next';

function CurrentEvent() {
  const { t } = useTranslation();
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
            {t('current-event1.label')}
            <span> {t('conference.label')} </span>
            {t('current-event2.label')}
          </p>
          <a
            className="current-event-button-link"
            href="https://productized.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="current-event-button">
              {t('current-button.label')}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default CurrentEvent;
