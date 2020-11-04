import React from 'react';
import './Consultancy.css';

function Consultancy() {
  return (
    <div className="consultancy-div">
      <div className="title-div">
        <h2 className="consultancy-title">Consultancy</h2>
      </div>
      <div className="rows-setup">
        <img
          className="consultancy-card-image"
          src={require('../../assets/consultancy/Design_Sprints.jpg')}
          alt="Design Sprint"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Design sprints</p>
          <p className="consultancy-card-description">
            Answer critical business and product questions by compressing months
            of endless interactions into 2, 3 or 4 days of focused work by a
            small critical team. Instead of waiting for a launch to observe the
            results, shortcut that learning process by quickly building and
            validating a smart prototype with real customers.
          </p>
        </div>
      </div>

      <div className="rows-setup">
        <img
          className="consultancy-card-image show-small"
          src={require('../../assets/consultancy/Innovation_Programmes.jpg')}
          alt="Innovation Programmes"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Innovation programmes</p>
          <p className="consultancy-card-description">
            Entrepreneurs and established business or policy players need each
            other to solve problems and build amazing new ways to increase the
            value to their customers and advance business or policy goals. We
            organize acceleration or open innovation programmes with processes
            tailored to match the goals of the promoters and the entrepreneurs.
          </p>
        </div>
        <img
          className="consultancy-card-image show-large"
          src={require('../../assets/consultancy/Innovation_Programmes.jpg')}
          alt="Innovation Programmes"
        />
      </div>

      <div className="rows-setup">
        <img
          className="consultancy-card-image"
          src={require('../../assets/consultancy/Startup_Coaching.jpg')}
          alt="Startup Coaching"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">
            Coaching for startups and product people
          </p>
          <p className="consultancy-card-description">
            We are entrepreneurs and have been working with or within
            corporations for several years and know what it takes to help
            entrepreneurs navigate the harsh waters of building a new thing. We
            give support covering the basics of the critical aspects of a
            business model, product solution-problem fit and product
            development.. Needless to say, we are able to dive into the nitty
            gritty of product design.
          </p>
        </div>
      </div>
      

      <div className="rows-setup">
        <img
          className="consultancy-card-image show-small"
          src={require('../../assets/consultancy/Product_Management.jpg')}
          alt="Product Management"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Product management</p>
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
        <img
          className="consultancy-card-image show-large"
          src={require('../../assets/consultancy/Product_Management.jpg')}
          alt="Product Management"
        />
      </div>



      <div className="rows-setup">
        <img
          className="consultancy-card-image"
          src={require('../../assets/consultancy/Future_Studies.jpg')}
          alt="Future Studies"
        />
        <div className="consultancy-title-text">
          <p className="consultancy-card-title">Future studies</p>
          <p className="consultancy-card-description">
            Companies that thrive in the long-run are companies that
            strategically prepare for plausible scenarios. We employ prospective
            study methods to help companies or functional areas define future
            scenarios on the markets where they operate, enabling them to
            identify areas for innovation, take strategic decisions on their
            positioning and communicate about innovation challenges.
          </p>
        </div>

      </div>
  </div>
  );
}

export default Consultancy;
