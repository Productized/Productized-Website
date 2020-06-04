import React from 'react';
import WeDoCard from './WeDoCard';
import './WhatWeDo.css';

class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weDoCards: [
        {
          id: 1,
          image: 'https://via.placeholder.com/300',
          title: 'COURSES',
          description:
            'Maecenas ut justo vel ligula imperdiet dignissim. Orci varius natoque penatibus et magnis dis parturient montes.',
          button: 'CHECK AVAILABLE COURSES',
          backgroundColor: 'background-red',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/300',
          title: 'MEETUPS',
          description:
            'Donec dapibus et felis condimentum elementum. Morbi non egestas metus. Mauris et malesuada ex, vitae pharetra.',
          button: 'CHECK OUR MEETUPS',
          backgroundColor: 'background-yellow',
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/300',
          title: 'CONFERENCE',
          description:
            'Ut auctor metus vel nulla dapibus, ut semper urna pulvinar. Donec congue faucibus varius. Fusce tellus est.',
          button: 'CHECK PREVIOUS EDITIONS',
          backgroundColor: 'background-blue',
        },
      ],
    };
  }
  render() {
    const weDoCards = this.state.weDoCards;
    return (
      <div className="whatwedo-higher">
        <div className="whatwedo-div">
          <h6 className="section-subtitle">WHAT WE DO</h6>
          <h2 className="section-title">PRODUCTIZED</h2>
          <p>
            Productized organizes different activities with the intention to
            boost the product community around the world. It was created by
            professionals from the engineering and design space, with a history
            of co-founding several pioneering projects in Portugal such as TEDx,
            Beta-i, Startup Weekend and Sillicon Valley comes to Lisbon.
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
}

export default WhatWeDo;
