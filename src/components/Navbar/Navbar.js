import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navbar = () => (
    <Navbar bg="light" expand="lg" className="bg-light w-100">
        <Navbar.Brand href="#home">OgiS template</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link className="ml-auto " as={Link} to="/logout">Log out</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
);

export default navbar;