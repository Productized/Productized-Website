import React, { Suspense } from 'react';
import HomepageCarousel from './Carousel/HomepageCarousel';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import NavBar from '../Shared/NavBar';
import '../../i18n';

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
      </>
    );
  }
}

export default Homepage;
