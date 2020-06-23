import React from 'react';
import './Footer.css';
import facebook_round from './../../assets/facebook_round.png';
import twitter_round from './../../assets/twitter_round.png';
import instagram from './../../assets/instagram.png';
import linkedin_round from './../../assets/linkedin_round.png';
import email from './../../assets/email.png';
import phone from './../../assets/phone.png';
import location from './../../assets/location.png';

function Footer() {
  return (
    <footer className="site-footer">
      <h6>Find Us At</h6>
      <ul className="footer-text">
        <li>
          <img className="email-icon" src={email} alt="email" />
          <a className="link" href="mailto:info@productized.co">
            info@productized.co
          </a>
        </li>
        <li>
          <img className="location-icon" src={location} alt="location" />
          <a
            className="link"
            href="https://www.google.com/maps/place/R.+de+Campolide+28,+1070-028+Lisboa,+Portugal/@38.7261916,-9.16429,17z/data=!3m1!4b1!4m5!3m4!1s0xd19336eb3637e3b:0x6e2427db7fe066ed!8m2!3d38.7261916!4d-9.1621013"
          >
            Rua Campolide nº28 1070-028 Lisboa
          </a>
        </li>
        <li>
          <img className="phone-icon" src={phone} alt="phone" />
          <a className="link" href="tel:+351 21 051 4759">
            +351 21 051 4759
          </a>
        </li>
      </ul>

      <div>
        <p className="copyright-text"> &copy; 2020 Productized</p>
      </div>

      <div>
        <ul className="social-icons">
          <li>
            <a
              className="facebook"
              href="https://www.facebook.com/ProductizedConf/"
            >
              <img className="facebook" src={facebook_round} alt="Facebook" />
            </a>
          </li>
          <li>
            <a className="twitter" href="https://twitter.com/productizedconf">
              <img className="twitter" src={twitter_round} alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              className="instagram"
              href="https://www.instagram.com/productized.co/"
            >
              <img className="instagram" src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/school/productized/"
            >
              <img className="linkedin" src={linkedin_round} alt="Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
