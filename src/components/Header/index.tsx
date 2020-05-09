import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <Navbar 
        className="Header-navbar" 
        bg="dark" 
        variant="dark" 
        expand="lg"
      >
        <Navbar.Brand>React-Starter</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Todos</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>Log In</Nav.Link>
            <Button className="btn btn-primary">Create an Account</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
