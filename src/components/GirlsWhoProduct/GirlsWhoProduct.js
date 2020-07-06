import React from 'react';
import './GirlsWhoProduct.css';
import GirlsWhoProductCard from './GirlsWhoProductCard';
import GirlsWhoProductData from './GirlsWhoProductData.json';

class GirlsWhoProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GirlsWhoProductCards: GirlsWhoProductData,
    };
  }

  render() {
    const GirlsWhoProductCards = this.state.GirlsWhoProductCards;
    const chosenGirls = GirlsWhoProductCards.filter(
      (girlCard) => girlCard.isDisplayed === true,
    );
    return (
      <div>
        <div className="girls-title-content">
          <div className="girls-text-content">
            <h2 className="girls-title">#GirlsWhoProduct</h2>
          </div>
          <div className="girls-text-title-content">
            <p className="girls-card-text">
              #GirlsWhoProduct is a series of interviews with women that have
              been able to beat the ‘product’ ceiling and get into the
              profession. Our mission is to inspire, connect and empower more
              women to get into product roles and help them consider ‘product’
              as a venue of personal and professional growth.
            </p>
          </div>
        </div>

        <div className="girls-cards-container">
          {chosenGirls.map((girlCard) => (
            <GirlsWhoProductCard {...girlCard} />
          ))}
        </div>
        <h2 className="more">and more...</h2>
        <div className="link">
          <a
            className="gwp-banner"
            href="https://soundcloud.com/productized"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="all-girls-text">
              <p className="all-girls">LISTEN TO ALL #GIRLSWHOPRODUCT.</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default GirlsWhoProduct;
