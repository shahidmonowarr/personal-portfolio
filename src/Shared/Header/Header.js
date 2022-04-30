import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container className="text-center">
                    <Navbar.Brand href="#home" className="text-light fw-bold">SHAHID <span className="text-white">|</span> <span className="text-warning">PORT</span>Folio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav text">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-link" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#project">Projects</Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;