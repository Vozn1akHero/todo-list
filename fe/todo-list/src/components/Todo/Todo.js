import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import {Consumer} from "../../context";
import './Todo.scss';

class Todo extends Component {
    changeToDoStatus = async (id, dispatch) => {
        try {
            await axios.put(`/todo/changeTodoStatus/${id}`);
            dispatch({type: 'UNMARK_DONE_TODO', payload: id});

        } catch (e) {
            alert("error occured");
        }
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`/todo/${id}`);
            dispatch({type: 'REMOVE_TODO', payload: id});
        } catch (e) {
            alert("error occured");
        }
    };

    render() {
        const {_id, title, description, date, done} = this.props.todo;

        return (
            <Consumer>
                {({dispatch}) => {
                    return (
                        <Card style={{width: '18rem', margin: '1rem'}}>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                {
                                    done === false ?
                                        <button onClick={this.changeToDoStatus.bind(this, _id, dispatch)}
                                                className="done-btn">
                                            <i className="fas fa-check-circle"></i>
                                        </button> :
                                        <button onClick={this.changeToDoStatus.bind(this, _id, dispatch)} className="unmark-btn">
                                         <i className="fas fa-times-circle"></i>
                                        </button>
                                }

                                <button onClick={this.onDeleteClick.bind(this, _id, dispatch)}
                                        className="remove-btn">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </Card.Body>
                        </Card>
                        )
                    }
                }
            </Consumer>
        );
    }
}

export default Todo;
