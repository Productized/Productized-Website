import React from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';

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
      </>
    );
  }
}

export default Homepage;
