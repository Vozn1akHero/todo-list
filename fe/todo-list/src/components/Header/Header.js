import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";


import './Header.scss';



class Header extends Component {

    render() {
        return (
            <section style={{marginBottom: '1rem'}}>
                <Navbar bg="primary" variant="dark">
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>
                            TodoMaster &#9728; &#9729; &#9730; &#9731;
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto main-nav">
                        <Button variant="light" className="new-todo-btn" onClick={this.props.newTodoFormShow}>New Todo</Button>

                        <LinkContainer to={'/settings'}>
                            <i className="fas fa-cog settings-icon" />
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </section>
        );
    }
}

export default Header;
