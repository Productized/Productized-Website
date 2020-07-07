import React from 'react';
import './AlbumCard.css';
import VidListPage from './VidListPage.json';

function AlbumCard(props) {
  console.log(props);
  const { year } = props.match.params;
  let albums = [];
  if (year === '2019') {
    albums = VidListPage.Conference2019.links;
  } else if (year === '2018') {
    albums = VidListPage.Conference2018.links;
  } else if (year === '2017') {
    albums = VidListPage.Conference2017.links;
  } else if (year === '2016') {
    albums = VidListPage.Conference2016.links;
  } else if (year === '2015') {
    albums = VidListPage.Conference2015.links;
  }

  return (
    <>
      <h2 className="album-section-title">
        {`Albums from Productized CONFERENCE ${year}`}
      </h2>
      <div className="albumcard-div">
        {albums.map((album) => (
          <a
            className="albumcard"
            target="_blank"
            rel="noopener noreferrer"
            data-flickr-embed="true"
            data-header="true"
            data-footer="true"
            href={album.url}
            title={album.title}
          >
            <img src={album.image} alt={album.title} className="album-img" />
            <script
              async
              src="//embedr.flickr.com/assets/client-code.js"
              charset="utf-8"
            ></script>
            <div className="albumcard-title">
              <p>{album.title}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default AlbumCard;
