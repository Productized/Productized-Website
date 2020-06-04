import React from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import Calendar from './Calendar/Calendar';

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
        <Calendar />
      </>
    );
  }
}

export default Homepage;
