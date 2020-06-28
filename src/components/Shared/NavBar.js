import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import NavbarLogo from '../../assets/navbar/navbarlogo.png';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">
        <img
          alt="Productized logo"
          src={NavbarLogo}
          width="164"
          height="52"
          className="d-inline-block align-top logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-links">
          <NavDropdown
            eventKey="prevConfs"
            title="Conferences"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="text-center"
              href="/previousconferences/2019"
            >
              2019
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              href="/previousconferences/2018"
            >
              2018
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              href="/previousconferences/2017"
            >
              2017
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              href="/previousconferences/2016"
            >
              2016
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-center"
              href="/previousconferences/2015"
            >
              2015
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="text-center"
              href="/previousconferences"
            >
              All Conferences
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey="consultancy" href="/consultancy">
            Consultancy
          </Nav.Link>
          <Nav.Link eventKey="courses" href="/courses">
            Courses
          </Nav.Link>
          <Nav.Link eventKey="designandbuild" href="/designandbuild">
            Design & Build
          </Nav.Link>
          <Nav.Link eventKey="girls" href="/girlswhoproduct">
            #GirlsWhoProduct
          </Nav.Link>
          <Nav.Link eventKey="meetups" href="/meetups">
            Meetups
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
