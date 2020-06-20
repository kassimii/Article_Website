import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarCustom.css";

function NavbarCustom() {
  return (
    <Navbar className="navbarStyle" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item className="mr-3 nav-link">
            <Link to="/profile">
              <span className="navText">Profile</span>
            </Link>
          </Nav.Item>

          <Nav.Item className="mr-3 nav-link">
            <Link to="/search">
              <span className="navText">Search</span>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCustom;
