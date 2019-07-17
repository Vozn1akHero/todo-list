import React, {Component} from 'react';
import {Provider} from "./context";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import AuthPage from "./pages/Auth/auth-page";
import MainPage from "./pages/App/main-page";
import NotFound from "./pages/NotFound";
import './App.css';
import {isLoggedIn} from "./middleware/auth-status";

class App extends Component {
    constructor(props){
        super(props);

        this.state =  {
            isLoggedIn: true
        }
    }

    async componentWillMount(){
        const isLoggedInStatus = await isLoggedIn();

        this.setState({
            isLoggedIn: isLoggedInStatus
        })
    }

    render() {
        return (
            <Provider>
                <Container fluid={true} className="p-0 m-0">
                    <Router>
                        <Switch>
                            <Redirect exact path="/" to="/auth"/>

                            <Route path={'/auth'} component={AuthPage} />

                            <Route path={'/app'} component={MainPage} />

                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </Router>
                </Container>
            </Provider>
        );
    }
}

export default App;
