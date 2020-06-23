import React from 'react';
import './Partners.css';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.jpeg';
import netflix from '../../../assets/netflix.png';
import olx from '../../../assets/olx.png';
import sap from '../../../assets/sap.jpg';
import zalandoo from '../../../assets/zalandoo.png';

export default function Partners() {
  return (
    <div className="partners-container">
      <div className="title-content">
        <p className="partners-subtitle">PARTNERS</p>
        <h2 className="partners-title"> OUR PROUD CLIENTS </h2>
      </div>

      <div className="logo-container">
        <img className="fb" src={facebook} alt="facebook" />
        <img className="gog" src={google} alt="google" />
        <img className="nt" src={netflix} alt="nt" />
        <img className="olx" src={olx} alt="olx" />
        <img className="sap" src={sap} alt="sap" />
        <img className="zal" src={zalandoo} alt="zalandoo" />
      </div>
    </div>
  );
}
