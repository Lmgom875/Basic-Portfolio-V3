import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <h3>Luis Gomez</h3>
          </Navbar.Brand>
          <Nav className="justify-content-end ml-auto">
            <NavLink to="/home" className = 'nav-link'>About</NavLink>
            <NavLink to="/portfolio" className = 'nav-link'>Protfolio</NavLink>
            <NavLink to="/contact" className = 'nav-link'>Contact</NavLink>

          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
