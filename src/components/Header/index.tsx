import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <Navbar className="Header-navbar" bg="dark" variant="dark" expand="lg">
        <Link to="/">
          <Navbar.Brand>React-Starter</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Link to="/todos" className="nav-link">
              Todos
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/login" className="nav-link">
              Log In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Create an Account
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
