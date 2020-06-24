import React from 'react';
import './PreviousConferences.css';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import YearCard from './YearCard';
import ConferenceYear2015 from '../../assets/previousconferences/ConferenceYear2015.png';
import ConferenceYear2016 from '../../assets/previousconferences/ConferenceYear2016.png';
import ConferenceYear2017 from '../../assets/previousconferences/ConferenceYear2017.png';
import ConferenceYear2018 from '../../assets/previousconferences/ConferenceYear2018.png';
import ConferenceYear2019 from '../../assets/previousconferences/ConferenceYear2019.png';

class PreviousConferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confYears: [
        {
          id: 1,
          image: ConferenceYear2019,
          year: '2019',
        },
        {
          id: 2,
          image: ConferenceYear2018,
          year: '2018',
        },
        {
          id: 3,
          image: ConferenceYear2017,
          year: '2017',
        },
        {
          id: 4,
          image: ConferenceYear2016,
          year: '2016',
        },
        {
          id: 5,
          image: ConferenceYear2015,
          year: '2015',
        },
      ],
    };
  }

  render() {
    const confYears = this.state.confYears;
    return (
      <div>
        <NavBar />
        <h2 className="page-title">Previous Conferences</h2>
        <div className="conf-years-div">
          {confYears.map((confYear) => (
            <YearCard {...confYear} key={confYear.id} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default PreviousConferences;
