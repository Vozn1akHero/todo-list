import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";

import './HeaderLoggedIn.scss';

export default class HeaderLoggedIn extends Component {
    render() {
        return (
            <section className="header-logged-in">
                <Navbar bg="primary" variant="dark">
                    <LinkContainer to={'/app'}>
                        <Navbar.Brand>
                            TodoMaster &#9728; &#9729; &#9730; &#9731;
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto main-nav">
                        <Button variant="light" className="new-todo-btn" onClick={this.props.newTodoFormShow}>New Todo</Button>

                        <LinkContainer to={'/app/settings'}>
                            <i className="fas fa-cog settings-icon" />
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </section>
        );
    }
}
