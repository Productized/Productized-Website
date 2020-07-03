import React from 'react';
import './PreviousConferences.css';
import YearCard from './YearCard';
import YearCardData from './YearCardData.json';

function PreviousConferences() {
  return (
    <div>
      <div className="title-div">
        <h2 className="prevconf-title">Previous Conferences</h2>
      </div>
      <div className="conf-years-div">
        {YearCardData.map((confYear) => (
          <YearCard {...confYear} key={confYear.id} />
        ))}
      </div>
    </div>
  );
}

export default PreviousConferences;
