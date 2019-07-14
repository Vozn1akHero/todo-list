import React, {Component} from 'react';
import Header from "./components/Header/Header";
import {Provider} from "./context";
import SettingsPage from "./pages/Settings/Settings-page";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import TodoList from "./components/TodoList/TodoList";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import NewTodo from "./components/NewTodo/NewTodo";
import AuthPage from "./pages/Auth/Auth";
import MainPage from "./pages/App/Main/main-page";
import NotFound from "./pages/NotFound";


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoFormOpened: false
        }
    }

    newTodoFormShow = () => {
        this.setState({
            todoFormOpened: true
        })
    };

    closeTodoForm = () => {
        this.setState({
            todoFormOpened: false
        })
    };

    render() {
        return (
            <Provider>
                <Router>
                    <Switch>
                        <Redirect exact path="/" to="/auth" />

                        <Route path={'/auth'} component={AuthPage} />
                        <Route path={'/app'} component={MainPage} />

                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
