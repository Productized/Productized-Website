import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ConferenceImage from '../../../assets/carousel/conference_carousel.jpg';
import MeetupsImage from '../../../assets/carousel/meetups_carousel.jpg';
import CoursesImage from '../../../assets/carousel/courses_carousel.jpg';
import ConsultancyImage from '../../../assets/carousel/consultancy_carousel.jpg';
import './HomepageCarousel.css';

function HomepageCarousel() {
  return (
    <Carousel interval="4000">
      <Carousel.Item>
        <a
          href="https://conference.productized.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100 carousel-img"
            src={ConferenceImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Conference 2020</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/consultancy" target="_blank" rel="noopener noreferrer">
          <img
            className="d-block w-100 carousel-img"
            src={ConsultancyImage}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Consultancy</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a
          href=" https://www.meetup.com/Productized/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100 carousel-img"
            src={MeetupsImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Meetups</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/courses" target="_blank" rel="noopener noreferrer">
          <img
            className="d-block w-100 carousel-img"
            src={CoursesImage}
            alt="Forth slide"
          />
          <Carousel.Caption>
            <h5>Courses</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;
