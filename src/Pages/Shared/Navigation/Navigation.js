import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Navigation.css';

const Navigation = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg='info'
            variant="dark"
            sticky="top"
            className="navigation"
        >
            <Container>
                <Navbar.Brand className="text-black" as={Link} to="/">
                    Fruits Warehouse
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={CustomLink} to="/additem">
                            AddItem
                        </Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs">
                            Blogs
                        </Nav.Link>
                        {user ? (
                            <div>
                                <Nav.Link
                                    className="text-black"
                                    onClick={handleSignOut}
                                >
                                    Logout
                                </Nav.Link>
                            </div>
                        ) : (
                            <Nav.Link as={CustomLink} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
