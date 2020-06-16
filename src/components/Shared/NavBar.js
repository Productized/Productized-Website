import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../assets/Productized_logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img
          alt="Productized logo"
          src={logo}
          width="164"
          height="52"
          className="d-inline-block align-top logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="navbar-links">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/meetups">Meetups</Nav.Link>
          <Nav.Link href="/girlswhoproduct">#GirlsWhoProduct</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          <NavDropdown title="Previous Conferences" id="basic-nav-dropdown">
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
