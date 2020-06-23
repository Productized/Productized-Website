import React from "react";
import "./GirlsWhoProduct.css";
import GirlsWhoProductCard from "./GirlsWhoProductCard";
import GirlsWhoProductData from "./GirlsWhoProductData.json";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer"

class GirlsWhoProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GirlsWhoProductCards: GirlsWhoProductData,
    };
  }

  render() {
    const GirlsWhoProductCards = this.state.GirlsWhoProductCards;
    return (
      <div>
        <NavBar />
        <div className="girls-title-content">
          <h1 className="girls-title">#GIRLSWHOPRODUCT</h1>
          <p className="girls-card-text">
            #GirlsWhoProduct is a series of interviews with women that have been
            able to beat the ‘product’ ceiling and get into the profession. Our
            mission is to inspire, connect and empower more women to get into
            product roles and help them consider ‘product’ as a venue of
            personal and professional growth.
          </p>
        </div>

        <div className="girls-cards-container">
          {GirlsWhoProductCards.map((girlCard) => (
            <GirlsWhoProductCard {...girlCard} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default GirlsWhoProduct;
