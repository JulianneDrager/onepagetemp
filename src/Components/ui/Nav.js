import React from "react";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
// import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../../images/logo-small.jpg";
import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;
  const navBarBrand = NavStyle.navBarBrand;

  return (
    <>
      <Navbar className={navBar} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#home">Home</Nav.Link>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
