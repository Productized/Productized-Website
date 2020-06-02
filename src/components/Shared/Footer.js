import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Find Us At</h6>
            <p class="text-justify">Rue Campolide nº28 1070-028 Lisboa</p>
            <p class="text-justify">+351 21 051 4759</p>
            <p class="text-justify">info@productized.co</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text"> &copy; 2019 Productized</p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a
                  class="facebook"
                  href="https://www.facebook.com/ProductizedConf/"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="https://twitter.com/productizedconf">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  class="instagram"
                  href="https://www.instagram.com/productized.co/"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  class="linkedin"
                  href="https://www.linkedin.com/school/productized/"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
