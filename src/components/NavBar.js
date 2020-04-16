import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <h3>Luis Gomez</h3>
          </Navbar.Brand>
          <Nav className="justify-content-end ml-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Protfolio</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>

          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
