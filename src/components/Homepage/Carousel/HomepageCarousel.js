import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../../../assets/carousel1.png';
import CarouselImg2 from '../../../assets/carousel2.png';
import CarouselImg3 from '../../../assets/carousel3.png';
import { useTranslation } from 'react-i18next';
import './HomepageCarousel.css';

function HomepageCarousel() {
  const { t } = useTranslation();
  return (
    <Carousel>
      <Carousel.Item>
        <a
          href="https://productized.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="d-block w-100" src={CarouselImg1} alt="First slide" />
          <Carousel.Caption>
            <h5>{t('conference2020.label')}</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/meetups" target="_blank" rel="noopener noreferrer">
          <img
            className="d-block w-100"
            src={CarouselImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Meetups</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/courses" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100" src={CarouselImg3} alt="Third slide" />
          <Carousel.Caption>
            <h5>{t('courses.label')}</h5>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomepageCarousel;
