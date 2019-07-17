import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import {Consumer} from "../../context";
import Todo from "../Todo/Todo";

import CalendarModified from "../CalendarModified/CalendarModified";


class TodoList extends Component {
    render() {
        return (
            <>
                <Consumer>
                    {
                        ({todos, dispatch}) =>
                            <React.Fragment>
                                <Row style={{justifyContent: 'center'}}>
                                    <CalendarModified dispatch={dispatch}/>
                                </Row>

                                <Row>
                                    {
                                        todos.map(todo => <Todo key={todo._id} todo={todo}/>)
                                    }
                                </Row>
                            </React.Fragment>
                    }
                </Consumer>
            </>
        );
    }
}

export default TodoList;
