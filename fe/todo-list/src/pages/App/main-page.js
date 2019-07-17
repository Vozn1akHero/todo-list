import React, {Component} from 'react';
import NewTodo from "../../components/NewTodo/NewTodo";
import HeaderLoggedIn from "../../components/HeaderLoggedIn/HeaderLoggedIn";
import {Container} from "react-bootstrap";
import SettingsPage from "./Settings/Settings-page";
import TodoList from "../../components/TodoList/TodoList";
import {Route, Switch} from "react-router-dom";
import {isLoggedIn} from "../../middleware/auth-status";
import Loader from 'react-loader-spinner';


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPageLoading: true,
            todoFormOpened: false
        };
    }

    async componentWillMount(){
        const isLoggedInStatus = await isLoggedIn();
        if (!isLoggedInStatus) {
            return this.props.history.replace('/auth/login');
        }

        this.setState({
            isPageLoading: false
        })
    }

    render() {
        return (
            !this.state.isPageLoading ?
                (<>
                    <NewTodo todoFormOpened={this.state.todoFormOpened} closeTodoForm={() => {
                        this.setState({
                            todoFormOpened: false
                        })
                    }}/>
                    <HeaderLoggedIn newTodoFormShow={() => {
                        this.setState({
                            todoFormOpened: true
                        })
                    }}/>

                    <Container>
                        <Switch>
                            <Route path={'/app/settings'} component={SettingsPage} exact/>
                            <Route path={'/app'} component={TodoList} exact/>
                        </Switch>
                    </Container>
                </>)
                    :
                (<div className="justify-content-center align-items-center">
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                </div>)
        );
    }
}

export default MainPage;
