import React from 'react';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import VidCard from './VidCard';
import VidListPage from './VidListPage.json';
import { withRouter } from 'react-router';
import './VidList.css';

class VidList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conferencePage: [],
    };
    this.getAlbums = this.getAlbums.bind(this);
  }

  componentDidMount() {
    const { chosenYear } = this.props.location.state;

    let conferencePage = [];
    if (chosenYear === '2019') {
      conferencePage = VidListPage.Conference2019;
    } else if (chosenYear === '2018') {
      conferencePage = VidListPage.Conference2018;
    } else if (chosenYear === '2017') {
      conferencePage = VidListPage.Conference2017;
    } else if (chosenYear === '2016') {
      conferencePage = VidListPage.Conference2016;
    } else if (chosenYear === '2015') {
      conferencePage = VidListPage.Conference2015;
    }

    this.setState({ conferencePage });
  }

  getAlbums() {
    const { chosenYear } = this.props.location.state;
    const albums = this.state.conferencePage.links;
    this.props.history.push({
      pathname: `/previousconferences/${chosenYear}/albums`,
      state: { albums, chosenYear },
    });
  }

  render() {
    const { chosenVideos } = this.props.location.state;
    const { chosenYear } = this.props.location.state;
    const { recapVideo } = this.props.location.state;
    const conference = this.state.conferencePage.text;

    return (
      <div>
        <NavBar />
        <h2 className="vidlist-title">{`PRODUCTIZED CONFERENCE ${chosenYear}`}</h2>
        <div className="vidlist-belowtitle-div">
          <div className="vidlist-text-pics">
            <p className="vidlist-text">{conference}</p>
            <button className="pics-button" onClick={() => this.getAlbums()}>
              Check out pictures from the event
            </button>
          </div>
          <div className="recap-video">
            <iframe
              width="356"
              height="200"
              title={recapVideo.title}
              src={recapVideo.link}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="videos-div">
          {chosenVideos.map((video) => (
            <VidCard {...video} key={video.id} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(VidList);
