import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBarMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Contacts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <NavLink className="show-contacts-nav" to="/">Contacts</NavLink>
                        <NavLink className="add-contact-nav" to="/addContact">Add Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>


        </div>
    );

};

export default NavBarMenu;