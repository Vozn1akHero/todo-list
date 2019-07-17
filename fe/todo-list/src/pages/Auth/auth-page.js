import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "./Login/login-page";
import JoinupPage from "./Joinup/joinup-page";
import {Col, Container} from "react-bootstrap";
import HeaderNotLoggedIn from "../../components/HeaderNotLoggedIn/HeaderNotLoggedIn";
import Footer from "../../components/Footer/Footer";
import {isLoggedIn} from "../../middleware/auth-status";
import Loader from "react-loader-spinner";

class AuthPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPageLoading: true
        };
    }


    async componentWillMount(){
        const isLoggedInStatus = await isLoggedIn();
        if (isLoggedInStatus) {
            return this.props.history.replace('/app');
        }
        this.setState({
            isPageLoading: false
        })
    }

    render() {
        return (
            !this.state.isPageLoading ?
                (<>
                    <Col lg={12} xl={12} className="p-0 mb-5">
                        <HeaderNotLoggedIn/>
                    </Col>

                    <Col lg={12} xl={12}>
                        <Switch>
                            <Redirect exact from='/auth' to={`/auth/login`}/>

                            <Route path={'/auth/login'} component={LoginPage}/>
                            <Route path={'/auth/joinup'} component={JoinupPage}/>
                        </Switch>
                    </Col>

                    <Col lg={12} xl={12} className="p-0 position-absolute" style={{bottom: 0}}>
                        <Footer/>
                    </Col>
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

export default AuthPage;
