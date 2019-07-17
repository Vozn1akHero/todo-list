import React, {Component} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Consumer, Provider} from "../../context";
import axios from 'axios';
import moment from 'moment'

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.inputTitle = React.createRef();
        this.inputDescription = React.createRef();
    }

    addNewTodo = async (dispatch) => {
        try {
            const newTodo = {
                title: this.inputTitle.current.value,
                description: this.inputDescription.current.value,
                date: new moment().format('YYYY-MM-DD'),
                done: false
            };
            console.log(newTodo)

            await axios.post('/todo', newTodo).then((res) =>{
                dispatch({type: 'ADD_TODO', payload: JSON.parse(res.config.data)})
            });

            this.props.closeTodoForm();
        } catch (e) {
            alert("Error has occured. Try again")
        }
    };


    render() {
        return (
            <Consumer>
                {({dispatch}) => {
                    return (<React.Fragment>
                        <Modal show={this.props.todoFormOpened} onHide={this.props.closeTodoForm}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add new Todo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter title" ref={this.inputTitle}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" placeholder="Enter description"
                                                      ref={this.inputDescription}/>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.addNewTodo.bind(this, dispatch)}>
                                    Add
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </React.Fragment>)
                }}
            </Consumer>
        );
    }
}

export default NewTodo;
