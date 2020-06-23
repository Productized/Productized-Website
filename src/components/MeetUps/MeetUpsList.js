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
    this.state = { chosenMeetUps: [], key: '', years: [2020, 2019, 2018] };
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
    const { chosenMeetUps, years } = this.state;
    return (
      <div>
        <NavBar />
        <h1 className="meetup-title">MeetUps</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(eventKey) => this.handleChoice(eventKey)}
        >
          {years.map((year) => (
            <Tab eventKey={year} title={year}>
              <div className="tab-div">
                {chosenMeetUps.map((meetup) => (
                  <MeetUpCard {...meetup} />
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
        <Footer />
      </div>
    );
  }
}

export default MeetUps;
