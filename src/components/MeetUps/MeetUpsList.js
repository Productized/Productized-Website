import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import MeetUpsDatabase from './MeetUpsDatabase.json';
import './MeetUps.css';
import MeetUpCard from './MeetUpCard';

class MeetUps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenMeetUps: [], key: '' };
  }
  componentDidMount() {
    let chosenMeetUps = MeetUpsDatabase.filter(
      (meetup) => meetup.year === '2020',
    );
    this.setState({ chosenMeetUps, key: '2020' });
  }

  handleChoice(eventKey) {
    let key = eventKey;
    let chosenMeetUps = MeetUpsDatabase.filter(
      (meetup) => meetup.year === eventKey,
    );
    this.setState({ chosenMeetUps, key });
    console.log(this.state.chosenMeetUps);
  }

  render() {
    const { chosenMeetUps } = this.state;
    return (
      <div>
        <NavBar />
        <h1 className="meetup-title">MeetUps</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(eventKey) => this.handleChoice(eventKey)}
        >
          <Tab eventKey="2020" title="2020">
            <div className="tab-div">
              {chosenMeetUps.map((meetup) => (
                <MeetUpCard {...meetup} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="2019" title="2019">
            <div className="tab-div">
              {chosenMeetUps.map((meetup) => (
                <MeetUpCard {...meetup} />
              ))}
            </div>
          </Tab>
          <Tab eventKey="2018" title="2018">
            <div className="tab-div">
              {chosenMeetUps.map((meetup) => (
                <MeetUpCard {...meetup} />
              ))}
            </div>
          </Tab>
        </Tabs>
        <Footer />
      </div>
    );
  }
}

export default MeetUps;
