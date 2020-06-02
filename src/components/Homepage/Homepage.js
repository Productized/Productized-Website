import React from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import OurTeam from './OurTeam/OurTeam';
import Partners from './Partners/Partner';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HomepageCarousel />
        <CurrentEvent />
        <h1>Homepage</h1>
        <OurTeam />
        <Partners />
      </>
    );
  }
}

export default Homepage;
