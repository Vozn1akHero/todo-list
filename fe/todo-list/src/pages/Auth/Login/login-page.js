import React, {Component} from 'react';

import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {logIn} from "../../../middleware/auth";
import OnErrorModal from "../../../components/OnErrorModal/OnErrorModal";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginErrorModal: false
        }
    }

    onLoginFormSubmit = async e => {
        e.preventDefault();
        const login = this.state.login;
        const password = this.state.password;
        const loginPageResponse = await logIn(login, password);

        if (loginPageResponse) {
            return this.props.history.replace('/app');
        } else {
            this.setState({
                showLoginErrorModal: true
            })
        }
    };

    render() {
        return (
            <>
                <OnErrorModal showModal={this.state.showLoginErrorModal} closeLoginErrorModal={() => {
                        this.setState({
                            showLoginErrorModal: false
                        })
                    }
                }/>

                <Row xl={12} className="align-items-center justify-content-center p-0">
                    <Col sm={10} md={9} lg={7} xl={6}>
                        <Card>
                            <Card.Header className="text-center">Logowanie</Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.onLoginFormSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Login</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Wprowadź login"
                                                      onChange={e => {
                                                          this.setState({login: e.target.value})
                                                      }}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Hasło</Form.Label>
                                        <Form.Control type="password"
                                                      placeholder="Wprowadź hasło"
                                                      onChange={e => {
                                                          this.setState({password: e.target.value})
                                                      }}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="mt-2">
                                        Zaloguj
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>);
    }
}

export default LoginPage;
