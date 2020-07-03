import React, { useState } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarLogo from '../../assets/navbar/navbarlogo.png';
import './NavBar.css';

function NavBar() {
  const [key, setKey] = useState('consultancy');

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">
        <img
          alt="Productized logo"
          src={NavbarLogo}
          width="140"
          height="44"
          className="d-inline-block align-top logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ml-auto navbar-links"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <NavDropdown
            eventKey="prevConfs"
            title="Conferences"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="text-center"
              as={Link}
              to="/previousconferences/2019"
            >
              2019
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              as={Link}
              to="/previousconferences/2018"
            >
              2018
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              as={Link}
              to="/previousconferences/2017"
            >
              2017
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              as={Link}
              to="/previousconferences/2016"
            >
              2016
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              as={Link}
              to="/previousconferences/2015"
            >
              2015
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="text-center"
              as={Link}
              to="/previousconferences"
            >
              All Conferences
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            eventKey="consultancy"
            as={Link}
            to="/consultancy"
            id={key === 'consultancy' ? 'active-key' : ''}
          >
            Consultancy
          </Nav.Link>
          <Nav.Link
            eventKey="courses"
            as={Link}
            to="/courses"
            id={key === 'courses' ? 'active-key' : ''}
          >
            Courses
          </Nav.Link>
          <Nav.Link
            eventKey="designandbuild"
            as={Link}
            to="/designandbuild"
            id={key === 'designandbuild' ? 'active-key' : ''}
          >
            Design & Build
          </Nav.Link>
          <Nav.Link
            eventKey="girls"
            as={Link}
            to="/girlswhoproduct"
            id={key === 'girls' ? 'active-key' : ''}
          >
            #GirlsWhoProduct
          </Nav.Link>
          <Nav.Link
            eventKey="meetups"
            as={Link}
            to="/meetups"
            id={key === 'meetups' ? 'active-key' : ''}
          >
            Meetups
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
