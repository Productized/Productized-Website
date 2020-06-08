import React from 'react';
import './AlbumCard.css';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

function AlbumCard(props) {
  console.log(props);
  const { albums, chosenYear } = props.location.state;
  return (
    <>
      <NavBar />
      <h2 className="album-section-title">
        {`Albums from Productized CONFERENCE ${chosenYear}`}
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
            <img src={album.image} width="350" alt={album.title} />
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
      <Footer />
    </>
  );
}

export default AlbumCard;
