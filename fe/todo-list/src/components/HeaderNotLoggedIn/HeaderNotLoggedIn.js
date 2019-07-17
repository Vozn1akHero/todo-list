import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";


import './HeaderNotLoggedIn.scss';

export default class HeaderNotLoggedIn extends Component {
    render() {
        return (
            <section className="header-not-logged-in">
                <Navbar expand="lg" bg="primary" variant="dark">
                    <LinkContainer to={'/auth'}>
                        <Navbar.Brand>
                            TodoMaster &#9728;
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto main-nav">
                            <LinkContainer to={'/auth/login'} className="login-btn">
                                <Button variant="outline-light">Zaloguj</Button>
                            </LinkContainer>

                            <LinkContainer to={'/auth/joinup'} className="joinup-btn">
                                <Button variant="outline-light">Zarejestruj się</Button>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        );
    }
}
