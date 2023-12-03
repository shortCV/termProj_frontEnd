import React from "react";
import Container from "react-bootstrap/Container";
import Radio from "../icons/radio-solid.svg";
import Nav from "react-bootstrap/Nav";
import {NavDropdown} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const Navbard = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand mb-0 h1">
                    {/*icon: https://fontawesome.com/icons/radio?f=classic&s=solid
                    display: https://blog.logrocket.com/how-to-use-svgs-react/#using-img-tag
                    how to use comments in render: https://wesbos.com/react-jsx-comments*/}
                    <img src={Radio} width="40" height="40" alt="Radio Logo"  className="d-inline-block align-top"/>{' '}
                    THUMP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Artist</Nav.Link>

                        <Nav.Link href="#playlists">
                            Songs
                        </Nav.Link>

                        <NavDropdown title="Playlists" id="basic-nav-dropdown">
                            <NavDropdown.Item href="playlists" >My Playlists</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Saved Playlists</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Featured Playlists</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Create Playlist</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#link">Sign Up</Nav.Link>
                        <Nav.Link href="#link">Log in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbard