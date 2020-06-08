import React from 'react';
import './YearCard.css';
import AllVideos from './VidList.json';
import { withRouter } from 'react-router';

class YearCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getVideos(year) {
    const chosenYear = year;
    const chosenVideos = AllVideos.filter((video) => video.year === chosenYear);
    const recapVideo = AllVideos.find(
      (video) => video.year === chosenYear && video.isRecap === true,
    );
    this.props.history.push({
      pathname: `/previousconferences/${year}`,
      state: { chosenVideos, chosenYear: year, recapVideo },
    });
  }

  render() {
    const confCard = this.props;
    return (
      <div className="yearcard" onClick={() => this.getVideos(confCard.year)}>
        <img
          className="yearcard-img"
          src={confCard.image}
          alt={confCard.year}
        />
        <p className="yearcard-year">{confCard.year}</p>
      </div>
    );
  }
}

export default withRouter(YearCard);
