import React from 'react';
import '../Consultancy/Consultancy.css';

function DesignBuild() {
  return (
    <div className="consultancy-div">
      <div className="title-div">
        <h2 className="consultancy-title">Build & Design</h2>
      </div>
      <div className="rows-setup">
        <img
          className="consultancy-card-image"
          src={require('../../assets/buildanddesign/Customer_Discovery.jpg')}
          alt="Customer Discovery"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Customer discovery</p>
          <p className="consultancy-card-description">
            The first pillar for success is knowing your customer. Like
            psychology, what is at the surface may hide mysterious causes.
            Understanding customers’’ beliefs and purchase processes requires
            adequate survey/observation and interpretation methods.
          </p>
        </div>
      </div>
      <div className="rows-setup">
        <img
          className="consultancy-card-image show-small"
          src={require('../../assets/buildanddesign/Branding.png')}
          alt="Branding"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Branding</p>
          <p className="consultancy-card-description">
            The branding crafts how people perceive your product. It can be so
            important externally and internally that you can start by designing
            the brand prior to building the product. Creating a strong brand is
            perceived as a point of arrival and departure. A brand is an
            expression of a story giving meaning to the origin and future of the
            product.
          </p>
        </div>
        <img
          className="consultancy-card-image show-large"
          src={require('../../assets/buildanddesign/Branding.png')}
          alt="Branding"
        />
      </div>
      <div className="rows-setup">
        <img
          className="consultancy-card-image"
          src={require('../../assets/buildanddesign/UX_UI.png')}
          alt="UX UI"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">UX / UI</p>
          <p className="consultancy-card-description">
            User experience and user interface design is about making the actual
            product usable, useful and desirable. Do not let a good product
            concept be spoiled by a bad user experience.
          </p>
        </div>
      </div>
      <div className="rows-setup">
        <img
          className="consultancy-card-image show-small"
          src={require('../../assets/buildanddesign/Service_Design.jpg')}
          alt="Service Design"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Service design</p>
          <p className="consultancy-card-description">
            Consider possible the steps made by the customer in the whole system
            of possible interactions. Find where it breaks for each use case.
            Design a system that properly addresses all relevant use cases at a
            minimal cost and maximum satisfaction for the user and the
            providers.
          </p>
        </div>
        <img
          className="consultancy-card-image show-large"
          src={require('../../assets/buildanddesign/Service_Design.jpg')}
          alt="Service Design"
        />
      </div>
      <div className="rows-setup">
        <img
          className="consultancy-card-image"
          src={require('../../assets/buildanddesign/Product_Management_On_Demand.jpg')}
          alt="Product Management On Demand"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Product management on-demand</p>
          <p className="consultancy-card-description">
            When your organization is developing a web or mobile product or
            service and it doesn’t have the specialized talent for managing the
            complex interactions between all the stakeholders, gathering and
            defining the specifications, run user behaviour and UX tests, create
            the product vision, roadmap, write the user stories and prepare the
            PRD (Product Requirements Document) to align the development team
            with the stakeholders and clear define the delivery dates per agile
            sprint. Otherwise, you’re likely on the road to something more
            costly, at lower quality and way over the deadline you expected to
            deliver the product. That’s why you need a product manager to set
            the pace and guarantee a proper alignment between everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesignBuild;
