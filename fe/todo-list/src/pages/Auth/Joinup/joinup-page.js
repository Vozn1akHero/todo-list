import React, {Component} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

class JoinupPage extends Component {
    render() {
        return (
            <>
                <Row xl={12} className="align-items-center justify-content-center p-0">
                    <Col sm={10} md={9} lg={7} xl={6}>
                        <Card>
                            <Card.Header className="text-center">Rejestracja</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Wprowadź email"/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Hasło</Form.Label>
                                        <Form.Control type="password" placeholder="Password"/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="mt-2">
                                        Zarejestruj się
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default JoinupPage;
