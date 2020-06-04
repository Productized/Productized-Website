import React, { Suspense } from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import Calendar from './Calendar/Calendar';
import NavBar from '../Shared/NavBar';
import '../../i18n';
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
          <Calendar />
          <OurTeam />
          <Partners />
          <Footer />
        </Suspense>
      </>
    );
  }
}

export default Homepage;
