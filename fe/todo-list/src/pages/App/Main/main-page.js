import React, {Component} from 'react';
import NewTodo from "../../../components/NewTodo/NewTodo";
import Header from "../../../components/Header/Header";
import {Container} from "react-bootstrap";
import SettingsPage from "../../Settings/Settings-page";
import TodoList from "../../../components/TodoList/TodoList";
import {Route, Switch} from "react-router-dom";


class MainPage extends Component {
    render() {
        return (
            <>
                <NewTodo todoFormOpened={this.state.todoFormOpened} closeTodoForm={this.closeTodoForm}/>
                <Header newTodoFormShow={this.newTodoFormShow}/>

                <Container>
                    <Switch>
                        <Route path={'settings'} component={SettingsPage}/>
                        <Route path={'/'} component={TodoList}/>
                    </Switch>
                </Container>
            </>
        );
    }
}

export default MainPage;
