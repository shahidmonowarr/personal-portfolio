import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Shahid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#project">Projects</Nav.Link>
                            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;