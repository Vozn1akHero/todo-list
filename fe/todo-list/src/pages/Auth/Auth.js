import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import LoginPage from "./Login/login-page";
import JoinupPage from "./Joinup/joinup-page";

class AuthPage extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path={'/auth/login'} component={LoginPage} exact />
                    <Route path={'/auth/joinup'} component={JoinupPage} exact />
                </Switch>
            </>
        );
    }
}

export default AuthPage;
