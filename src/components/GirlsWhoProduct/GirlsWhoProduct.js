import React from 'react';
import './GirlsWhoProduct.css';
import GirlsWhoProductCard from './GirlsWhoProductCard';
import GirlsWhoProductData from './GirlsWhoProductData.json';

class GirlsWhoProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GirlsWhoProductCards: GirlsWhoProductData
    };
  }
 

  render() {
    const GirlsWhoProductCards = this.state.GirlsWhoProductCards;
    return (
      <div>
        <div className="girls-title-content">
        <h2 className="girls-product"> #GIRLSWHOPRODUCT </h2>
        <p className="girls-card-text">
          #GirlsWhoProduct is a series of interviews with women that have been
          able to beat the ‘product’ ceiling and get into the profession. Our
          mission is to inspire, connect and empower more women to get into
          product roles and help them consider ‘product’ as a venue of personal
          and professional growth.
        </p>https://medium.com/@Productized/girlswhoproduct-inbal-arieli-58500139893f
      </div>  
      
            
        <div className="girls-cards-container">
          {GirlsWhoProductCards.map((girlCard) => (
            <GirlsWhoProductCard {...girlCard} />
          ))}
        </div>
      </div>
    )
  }
}

export default GirlsWhoProduct;
