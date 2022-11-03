import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
//import logo from "../IFblack.png";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="darkpurp" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="IFred.png" alt="Logo" style={{ maxHeight: "64px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#work">Work With Me</Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.behance.net/ianfajardo"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link href="/logos">Logo Design</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
