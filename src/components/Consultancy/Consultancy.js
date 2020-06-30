import React from 'react';
import './Consultancy.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

function Consultancy() {
  return (
    <div className="consultancy-div">
      <NavBar />
      <h2 className="consultancy-title">Consultancy</h2>
      <Container>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <img
              className="card-image"
              src={require('../../assets/consultancy/Design_Sprints.jpg')}
              alt="Design Sprint"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">Design sprints</p>
            <p className="card-description">
              Answer critical business questions by compressing months of
              endless interactions into one week of focused work by a small
              critical team. Instead of waiting for a launch to observe the
              results, shortcut that learning process by quickly building and
              validating a smart prototype.
            </p>
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-small">
            <img
              className="card-image"
              src={require('../../assets/consultancy/Innovation_Programmes.jpg')}
              alt="Innovation Programmes"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">Innovation programmes</p>
            <p className="card-description">
              Entrepreneurs and established business or policy players need each
              other to build amazing new ways to increase the value to their
              audience and advance business or policy goals. We organize
              acceleration or open innovation programmes with processes tailored
              to match the goals of the promoters and the entrepreneurs.
            </p>
          </Col>
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-large">
            <img
              className="card-image"
              src={require('../../assets/consultancy/Innovation_Programmes.jpg')}
              alt="Innovation Programmes"
            />
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <img
              className="card-image"
              src={require('../../assets/consultancy/Startup_Coaching.jpg')}
              alt="Startup Coaching"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">
              Coaching for startups and product people
            </p>
            <p className="card-description">
              We’ve been entrepreneurs and know what it takes to help
              inexperienced entrepreneurs navigate the very harsh waters of
              building a new thing. We give generalist support covering the
              basics of the critical aspects of a business model. Needless to
              say, we are able to dive into the nitty gritty of product design.
            </p>
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-small">
            <img
              className="card-image"
              src={require('../../assets/consultancy/Product_Owner.jpg')}
              alt="Product Owner"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">Product management on-demand</p>
            <p className="card-description">
              When your organization is developing an web product or service and
              it doesn’t have specialized staff for managing the messy
              interactions between moving specifications, user behaviour,
              stakeholder wishes and/or software implementation, you’re likely
              on the road to develop something more costly, at lower quality and
              after the deadline you expected, That’s when you need a product
              manager to set the pace and guarantee a proper alignment between
              what needs to be built and what is built.
            </p>
          </Col>
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-large">
            <img
              className="card-image"
              src={require('../../assets/consultancy/Product_Owner.jpg')}
              alt="Product Owner"
            />
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <img
              className="card-image"
              src={require('../../assets/consultancy/Future_Studies.jpg')}
              alt="Future Studies"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">Future studies</p>
            <p className="card-description">
              Companies that thrive in the long-run are companies that
              strategically prepare for distinct plausible scenarios. We employ
              prospective study methods to help companies or functional areas
              define future scenarios on the markets where they operate,
              enabling them to identify areas for innovation, take strategic
              decisions on their positioning and communicate about innovation
              challenges.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Consultancy;
