import React from 'react';
import WeDoCard from './WeDoCard';
import './WhatWeDo.css';
import WhatWeDoDatabase from './WhatWeDoDatabase.json';

function WhatWeDo() {
  const weDoCards = WhatWeDoDatabase.filter(
    (weDoCard) => weDoCard.isDisplayed === true,
  );
  return (
    <div className="whatwedo-higher">
      <div className="whatwedo-div">
        <h6 className="section-subtitle">WHAT WE DO</h6>
        <h2 className="section-title">PRODUCTIZED</h2>
        <p className="section-p">
          Productized organizes different activities with the intention to boost
          the product community around the world. It was created by
          professionals from the engineering and design space, with a history of
          co-founding several pioneering projects in Portugal such as TEDx,
          Beta-i, Startup Weekend and Silicon Valley comes to Lisbon.
        </p>
      </div>
      <div className="whatwedocard-div">
        {weDoCards.map((card) => (
          <WeDoCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
