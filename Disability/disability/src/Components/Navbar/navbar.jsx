import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./navbar.css";

function AppNavbar(props) {
  return (
    <div>
      <h1 className="sitename">AccessAbility</h1>
      <span>.</span>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
          </li>
          <li>
          <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
          </li>
          <li className="dropdown">
            <Dropdown>
              <Dropdown.Toggle as="a" className="nav-link">
                Disabilities{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/physical">
                  Physical
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/cognitive">
                  Cognitive
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/visual">
                  Visual
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Nav.Link as={Link} to="/Cta">
              PLAY!
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/team">
              Team
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/FAQs">
              FAQs
            </Nav.Link>
          </li>
          <li>
          <Nav.Link as={Link} to="/Contact">
              Contact Us
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/login">
              Log-In
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to="/Scoreb">
              Score Board
            </Nav.Link>
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  );
}

export default AppNavbar;
