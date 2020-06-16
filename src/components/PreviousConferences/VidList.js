import React from 'react';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import VidCard from './VidCard';
import AllVideos from './VidList.json';
import VidListPage from './VidListPage.json';
import './VidList.css';

function VidList(props) {
  const { year } = props.match.params;
  const chosenVideos = AllVideos.filter((video) => video.year === year);
  const recapVideo = AllVideos.find(
    (video) => video.year === year && video.isRecap === true,
  );

  let confText = [];
  if (year === '2019') {
    confText = VidListPage.Conference2019.text;
  } else if (year === '2018') {
    confText = VidListPage.Conference2018.text;
  } else if (year === '2017') {
    confText = VidListPage.Conference2017.text;
  } else if (year === '2016') {
    confText = VidListPage.Conference2016.text;
  } else if (year === '2015') {
    confText = VidListPage.Conference2015.text;
  }

  return (
    <div>
      <NavBar />
      <h2 className="vidlist-title">{`PRODUCTIZED CONFERENCE ${year}`}</h2>
      <div className="vidlist-belowtitle-div">
        <div className="vidlist-text-pics">
          <p className="vidlist-text">{confText}</p>
          <a href={`/previousconferences/${year}/albums`}>
            <button className="pics-button">
              Check out pictures from the event
            </button>
          </a>
        </div>
        <div className="recap-video">
          <iframe
            width="356"
            height="200"
            title={recapVideo.title}
            src={recapVideo.link}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            webkitallowfullscreen
            mozallowfullscreen
          />
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

export default VidList;
