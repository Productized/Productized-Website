import React from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import Calendar from './Calendar/Calendar';
import NavBar from '../Shared/NavBar';
import Footer from './../Shared/Footer';
import OurTeam from './OurTeam/OurTeam';
import Partners from './Partners/Partner';
import WhatWeDo from './WhatWeDo/WhatWeDo';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <HomepageCarousel />
        <CurrentEvent />
        <WhatWeDo />
        <Calendar />
        <OurTeam />
        <Partners />
        <Footer />
      </>
    );
  }
}

export default Homepage;
