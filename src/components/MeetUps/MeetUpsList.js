import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import './MeetUpsList.css';

class MeetUps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <h1>MeetUps</h1>
        <Tabs defaultActiveKey="2020" id="uncontrolled-tab-example">
          <Tab eventKey="2020" title="2020" className="tab-div">
            Cards with Videos and Images links
          </Tab>
          <Tab eventKey="2019" title="2019" className="tab-div">
            Cards with Videos and Images links
          </Tab>
          <Tab eventKey="2018" title="2018" className="tab-div">
            Cards with Videos and Images links
          </Tab>
        </Tabs>
        <Footer />
      </>
    );
  }
}

export default MeetUps;
