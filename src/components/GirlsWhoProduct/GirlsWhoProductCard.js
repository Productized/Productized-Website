import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./GirlsWhoProduct.css";

export default function GirlsWhoProductCard(props) {
  const girls = props;

  return (
    <div className="girls-main-container">
      
      
        <p className="girls-name">{girls.name}</p>
        <p className="girls-position">{girls.position}</p>

      <div className="girls-img">
        <img className="girls-cardimg" src={require(`../../assets/girlsproduct/${girls.localImage}`)} alt={girls.name} />
        <a
              className="social-links"
              href={girls.medium}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="medium"
                icon={['fab', 'medium-m']}
              />
        </a>

        <a
              className="social-links"
              href={girls.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="soundcloud"
                icon={['fab', 'soundcloud']}
              />
        </a>

      </div>
    </div>
  );
}
