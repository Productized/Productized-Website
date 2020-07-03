import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImgConference from '../../../assets/carousel/conference_carousel.jpg';
import CarouselImgMeetups from '../../../assets/carousel/meetups_carousel.jpg';
import CarouselImgCourses from '../../../assets/carousel/courses_carousel.jpg';
import './HomepageCarousel.css';

function HomepageCarousel() {
  return (
    <Carousel interval="4000">
      <Carousel.Item>
        <a
          href="https://productized.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100 carousel-img"
            src={CarouselImgConference}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Conference 2020</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/meetups" target="_blank" rel="noopener noreferrer">
          <img
            className="d-block w-100 carousel-img"
            src={CarouselImgMeetups}
            alt="Second slide"
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
            src={CarouselImgCourses}
            alt="Third slide"
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
