import React from 'react';
import './DesignBuild.css';
import { Container, Row, Col } from 'react-bootstrap';

function DesignBuild() {
  return (
    <div className="build-design-div">
      <div className="title-div">
        <h2 className="build-design-title">Build & Design</h2>
      </div>
      <Container>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <img
              className="card-image"
              src={require('../../assets/buildanddesign/Customer_Discovery.jpg')}
              alt="Customer Discovery"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">Customer discovery</p>
            <p className="card-description">
              The first pillar for success is knowing your customer. Like
              psychology, what is at the surface may hide mysterious causes.
              Understanding customers’’ beliefs and purchase processes requires
              adequate survey/observation and interpretation methods.
            </p>
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-small">
            <img
              className="card-image"
              src={require('../../assets/buildanddesign/Branding.jpg')}
              alt="Branding"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">Innovation programmes</p>
            <p className="card-description">
              The branding crafts how people perceive your product. It can be so
              important externally and internally that you can start by
              designing the brand prior to building the product. Creating a
              strong brand is perceived as a point of arrival and departure. A
              brand is an expression of a story giving meaning to the origin and
              future of the product.
            </p>
          </Col>
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-large">
            <img
              className="card-image"
              src={require('../../assets/buildanddesign/Branding.jpg')}
              alt="Branding"
            />
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <img
              className="card-image"
              src={require('../../assets/buildanddesign/UX_UI.jpg')}
              alt="UX UI"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">UX / UI</p>
            <p className="card-description">
              User experience and user interface design is about making the
              actual product usable, useful and desirable. Do not let a good
              product concept be spoiled by a bad user experience.
            </p>
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-small">
            <img
              className="card-image"
              src={require('../../assets/buildanddesign/Service_Design.jpg')}
              alt="Service Design"
            />
          </Col>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className="card-text">
            <p className="card-title">Service design</p>
            <p className="card-description">
              Consider possible the steps made by the customer in the whole
              system of possible interactions. Find where it breaks for each use
              case. Design a system that properly addresses all relevant use
              cases at a minimal cost and maximum satisfaction for the user and
              the providers.
            </p>
          </Col>
          <Col xl={5} lg={5} md={5} sm={12} xs={12} className="show-large">
            <img
              className="card-image"
              src={require('../../assets/buildanddesign/Service_Design.jpg')}
              alt="Service Design"
            />
          </Col>
        </Row>
        <Row className="rows-setup">
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <img
              className="card-image"
              src={require('../../assets/buildanddesign/Product_Management_On_Demand.jpg')}
              alt="Product Management On Demand"
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
        </Row>
      </Container>
    </div>
  );
}

export default DesignBuild;
