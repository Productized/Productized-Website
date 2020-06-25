import React from 'react';
import './PreviousConferences.css';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import YearCard from './YearCard';
import YearCardData from './YearCardData.json';

function PreviousConferences() {
  return (
    <div>
      <NavBar />
      <h2 className="page-title">Previous Conferences</h2>
      <div className="conf-years-div">
        {YearCardData.map((confYear) => (
          <YearCard {...confYear} key={confYear.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default PreviousConferences;
