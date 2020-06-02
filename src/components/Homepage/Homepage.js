import React from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import CalenderCard from './Calendar/CalendarCard';
import Footer from './../Shared/Footer';

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
        {/* <CalenderCard /> */}
        <Footer />
      </>
    );
  }
}

export default Homepage;
