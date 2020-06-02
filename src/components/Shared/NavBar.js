import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../assets/logo_productized.png';
import './NavBar.css';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t } = useTranslation();
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
          <Nav.Link href="/courses">{t('courses.label')}</Nav.Link>
          <NavDropdown
            title={t('prev-conferences.label')}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/previousconferences/2019">
              {t('conferenceLowerCase.label')} 2019
            </NavDropdown.Item>
            <NavDropdown.Item href="/previousconferences/2018">
              {t('conferenceLowerCase.label')} 2018
            </NavDropdown.Item>
            <NavDropdown.Item href="/previousconferences/2017">
              {t('conferenceLowerCase.label')} 2017
            </NavDropdown.Item>
            <NavDropdown.Item href="/previousconferences/2016">
              {t('conferenceLowerCase.label')} 2016
            </NavDropdown.Item>
            <NavDropdown.Item href="/previousconferences/2015">
              {t('conferenceLowerCase.label')} 2015
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/previousconferences">
              {t('all-conference.label')}
            </NavDropdown.Item>
          </NavDropdown>
          <LanguageSelector />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
