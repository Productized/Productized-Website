import React from 'react';
import './Partners.css';
import PartnerFacebookLogo from '../../../assets/partners/PartnerFacebookLogo.png';
import PartnerGoogleLogo from '../../../assets/partners/PartnerGoogleLogo.jpeg';
import PartnerNetflixLogo from '../../../assets/partners/PartnerNetflixLogo.png';
import PartnerOlxLogo from '../../../assets/partners/PartnerOlxLogo.png';
import PartnerSAPLogo from '../../../assets/partners/PartnerSAPLogo.jpg';
import PartnerZalandooLogo from '../../../assets/partners/PartnerZalandooLogo.png';

export default function Partners() {
  return (
    <div className="partners-container">
      <div className="title-content">
        <p className="partners-subtitle">PARTNERS</p>
        <h2 className="partners-title"> OUR PROUD CLIENTS </h2>
      </div>

      <div className="logo-container">
        <img className="fb" src={PartnerFacebookLogo} alt="Facebook Logo" />
        <img className="gog" src={PartnerGoogleLogo} alt="Google Logo" />
        <img className="nt" src={PartnerNetflixLogo} alt="Netflix Logo" />
        <img className="olx" src={PartnerOlxLogo} alt="OLX Logo" />
        <img className="sap" src={PartnerSAPLogo} alt="SAP Logo" />
        <img className="zal" src={PartnerZalandooLogo} alt="Zalandoo Logo" />
      </div>
    </div>
  );
}
