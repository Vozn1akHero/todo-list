import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import {Consumer} from "../../context";
import Todo from "../Todo/Todo";

import CCalendar from "../CCalendar/CCalendar";


class TodoList extends Component {
    render() {
        return (
            <React.Fragment>
                <Consumer>
                    {
                        ({todos, dispatch}) =>
                            <React.Fragment>
                                <Row style={{justifyContent: 'center'}}>
                                    <CCalendar dispatch={dispatch}/>
                                </Row>

                                <Row>
                                    {
                                        todos.map(todo => <Todo key={todo._id} todo={todo}/>)
                                    }
                                </Row>
                            </React.Fragment>
                    }
                </Consumer>
            </React.Fragment>
        );
    }
}

export default TodoList;
