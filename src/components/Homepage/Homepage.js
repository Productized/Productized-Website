import React, { Suspense } from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import NavBar from '../Shared/NavBar';
import '../../i18n';
//import CalenderCard from './Calendar/CalendarCard';
import Footer from './../Shared/Footer';
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
        <Suspense fallback={null}>
          <NavBar />
          <HomepageCarousel />
          <CurrentEvent />
        </Suspense>
        <h1>Homepage</h1>
      <Suspense fallback={null}>
        <NavBar />
        <HomepageCarousel />
        <CurrentEvent />
        {/* <CalenderCard /> */}
        <OurTeam />
        <Partners />
        <Footer />
      </Suspense>
      </>
    );
  }
}

export default Homepage;
