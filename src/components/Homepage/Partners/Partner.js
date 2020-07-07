import React from 'react';
import './Partners.css';
import PartnerFacebookLogo from '../../../assets/partners/PartnerFacebookLogo.png';
import PartnerGoogleLogo from '../../../assets/partners/PartnerGoogleLogo.png';
import PartnerNetflixLogo from '../../../assets/partners/PartnerNetflixLogo.png';
import PartnerOlxLogo from '../../../assets/partners/PartnerOlxLogo.png';
import PartnerSAPLogo from '../../../assets/partners/PartnerSAPLogo.png';
import PartnerZalandooLogo from '../../../assets/partners/PartnerZalandooLogo.png';
import PartnerDeliveryHeroLogo from '../../../assets/partners/PartnerDeliveryHeroLogo.png';
import PartnereDreamsLogo from '../../../assets/partners/PartnereDreamsLogo.png';
import PartnerMangoLogo from '../../../assets/partners/PartnerMangoLogo.png';
import PartnerTeamViewerLogo from '../../../assets/partners/PartnerTeamViewerLogo.png';
import PartnerTomTomLogo from '../../../assets/partners/PartnerTomTomLogo.png';
import PartnerYandexLogo from '../../../assets/partners/PartnerYandexLogo.png';

export default function Partners() {
  return (
    <div className="partners-container">
      <div className="partner-title-content">
        <p className="partners-subtitle">PARTNERS</p>
        <h2 className="partners-title"> OUR PROUD CLIENTS </h2>
      </div>

      <div className="logo-container">
        <img className="fb" src={PartnerFacebookLogo} alt="Facebook Logo" />
        <img className="google" src={PartnerGoogleLogo} alt="Google Logo" />
        <img className="netflix" src={PartnerNetflixLogo} alt="Netflix Logo" />
        <img className="olx" src={PartnerOlxLogo} alt="OLX Logo" />
        <img className="sap" src={PartnerSAPLogo} alt="SAP Logo" />
        <img className="zal" src={PartnerZalandooLogo} alt="Zalandoo Logo" />
        <img
          className="hero"
          src={PartnerDeliveryHeroLogo}
          alt="Delivery Hero Logo"
        />
        <img className="dreams" src={PartnereDreamsLogo} alt="eDreams Logo" />
        <img className="mango" src={PartnerMangoLogo} alt="Mango Logo" />
        <img
          className="teamviewer"
          src={PartnerTeamViewerLogo}
          alt="Team Viewer Logo"
        />
        <img className="tom" src={PartnerTomTomLogo} alt="Tom Tom Logo" />
        <img className="yandex" src={PartnerYandexLogo} alt="Yandex Logo" />
      </div>
    </div>
  );
}
