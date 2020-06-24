import React from 'react';
import './Footer.css';
import FooterFacebookIcon from './../../assets/footer/FooterFacebookIcon.png';
import FooterTwitterIcon from './../../assets/footer/FooterTwitterIcon.png';
import FooterInstagramIcon from './../../assets/footer/FooterInstagramIcon.png';
import FooterLinkedinIcon from './../../assets/footer/FooterLinkedinIcon.png';
import FooterEmailIcon from './../../assets/footer/FooterEmailIcon.png';
import FooterPhoneIcon from './../../assets/footer/FooterPhoneIcon.png';
import FooterLocationIcon from './../../assets/footer/FooterLocationIcon.png';

function Footer() {
  return (
    <footer className="site-footer">
      <h6>Find Us At</h6>
      <ul className="footer-text">
        <li>
          <div className="icon-limit">
            <img
              className="email-icon"
              src={FooterEmailIcon}
              alt="Email Icon"
            />
          </div>
          <a className="link" href="mailto:info@productized.co">
            info@productized.co
          </a>
        </li>
        <li>
          <div className="icon-limit">
            <img
              className="location-icon"
              src={FooterLocationIcon}
              alt="location"
            />
          </div>
          <a
            className="link"
            href="https://www.google.com/maps/place/R.+de+Campolide+28,+1070-028+Lisboa,+Portugal/@38.7261916,-9.16429,17z/data=!3m1!4b1!4m5!3m4!1s0xd19336eb3637e3b:0x6e2427db7fe066ed!8m2!3d38.7261916!4d-9.1621013"
          >
            Rua Campolide nº28 1070-028 Lisboa
          </a>
        </li>
        <li>
          <div className="icon-limit">
            <img className="phone-icon" src={FooterPhoneIcon} alt="phone" />
          </div>
          <a className="link" href="tel:+351 21 051 4759">
            +351 21 051 4759
          </a>
        </li>
      </ul>

      <div className="social-icons-div">
        <ul className="social-icons">
          <li>
            <a
              className="social-links"
              href="https://www.facebook.com/ProductizedConf/"
            >
              <img
                className="facebook"
                src={FooterFacebookIcon}
                alt="Facebook Icon"
              />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href="https://twitter.com/productizedconf"
            >
              <img
                className="twitter"
                src={FooterTwitterIcon}
                alt="Twitter Icon"
              />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href="https://www.instagram.com/productized.co/"
            >
              <img
                className="instagram"
                src={FooterInstagramIcon}
                alt="Instagram Icon"
              />
            </a>
          </li>
          <li>
            <a
              className="social-links"
              href="https://www.linkedin.com/school/productized/"
            >
              <img
                className="linkedin"
                src={FooterLinkedinIcon}
                alt="Linkedin Icon"
              />
            </a>
          </li>
        </ul>
        <div>
          <p className="copyright-text"> &copy; 2020 Productized</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
