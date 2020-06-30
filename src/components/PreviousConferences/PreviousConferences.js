import React from 'react';
import './PreviousConferences.css';
import YearCard from './YearCard';
import YearCardData from './YearCardData.json';

function PreviousConferences() {
  return (
    <div>
      <h2 className="page-title">Previous Conferences</h2>
      <div className="conf-years-div">
        {YearCardData.map((confYear) => (
          <YearCard {...confYear} key={confYear.id} />
        ))}
      </div>
    </div>
  );
}

export default PreviousConferences;
