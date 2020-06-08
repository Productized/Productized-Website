import React from 'react';
import './PreviousConferences.css';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import YearCard from './YearCard';
import Year2015 from '../../assets/year2015.png';
import Year2016 from '../../assets/year2016.png';
import Year2017 from '../../assets/year2017.png';
import Year2018 from '../../assets/year2018.png';
import Year2019 from '../../assets/year2019.png';

class PreviousConferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confYears: [
        {
          id: 1,
          image: Year2019,
          year: '2019',
        },
        {
          id: 2,
          image: Year2018,
          year: '2018',
        },
        {
          id: 3,
          image: Year2017,
          year: '2017',
        },
        {
          id: 4,
          image: Year2016,
          year: '2016',
        },
        {
          id: 5,
          image: Year2015,
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
