import React, { Component } from 'react';
import * as Constants from '../Utilities/Constants';
import * as CommunicationUtil from '../Utilities/CommunicationUtil';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';
import MaterialTextField from './MaterialTextField';
import MaterialButton from './MaterialButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor() {

        super();

        this.state = {
            usernameTextFieldLabel: Constants.USERNAME_LABEL,
            passwordtTextFieldLabel: Constants.PASSWORD_LABEL,
            usernameTextFieldValue: "",
            passwordTextFieldValue: ""
        }
    }

    handleUsernameInput = _event => {
        console.log(_event.target.value);
        this.setState({ usernameTextFieldValue: _event.target.value });
    }

    handlePasswordInput = _event => {
        console.log(_event.target.value);
        this.setState({ passwordTextFieldValue: _event.target.value });
    }

    handleLoginButtonClick = () => {
        let jsonObj = {
            username: this.state.usernameTextFieldValue,
            password: this.state.passwordTextFieldValue
        };
        // CommunicationUtil.callGetService("http://localhost:4000/api/fetchAll",
        //     this.handleLoginButtonClickSuccess, this.handleLoginButtonClickFailure);
        CommunicationUtil.callPostService("https://simple-crud-app-backend-v2-neibu.ondigitalocean.app/api/loginUser",
            JSON.stringify(jsonObj), this.handleLoginButtonClickSuccess, this.handleLoginButtonClickFailure)
    }

    handleLoginButtonClickSuccess = _response => {
        console.log(_response);
    }

    handleLoginButtonClickFailure = _response => {
        console.log(_response);
    }

    handleRegisterButtonClick = () => {
        this.props.history.push(Constants.REGISTER_ROUTE);
    }

    render() {
        return (
            <ReactBootstrap.Container fluid className='main-container'>
                <ReactBootstrap.Row style={{ marginTop: '13%' }}>
                    <ReactBootstrap.Col md={4} sm={3}></ReactBootstrap.Col>
                    <ReactBootstrap.Col md={4} sm={6} xs={12}>
                        <div className="login-register-container">
                            <br />

                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={12}>
                                    <h6><b>SIGN IN TO CONTINUE</b></h6>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>

                            {/* onSubmit={this.handleLoginButtonClick} */}

                            <ReactBootstrap.Form>
                                <MaterialTextField
                                    key={this.state.usernameTextFieldLabel}
                                    label={this.state.usernameTextFieldLabel}
                                    onChange={this.handleUsernameInput}
                                />

                                <MaterialTextField
                                    key={this.state.passwordtTextFieldLabel}
                                    label={this.state.passwordtTextFieldLabel}
                                    type="password"
                                    onChange={this.handlePasswordInput}
                                />
                                <br />

                                <ReactBootstrap.Row style={{ marginLeft: "15%", marginRight: "15%" }}>
                                    <ReactBootstrap.Col md={6}>
                                        <MaterialButton
                                            className="login-page-button"
                                            label="Login"
                                            buttonIcon=
                                            {
                                                <FontAwesomeIcon icon={faKey} style={{ fontSize: 10 }} />
                                            }
                                            type="button"
                                            onClick={this.handleLoginButtonClick}
                                        />
                                    </ReactBootstrap.Col>

                                    <ReactBootstrap.Col md={6}>
                                        <MaterialButton
                                            className="login-page-button"
                                            label="Register"
                                            buttonIcon=
                                            {
                                                <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 10 }} />
                                            }
                                            variant="outlined"
                                            type="button"
                                            onClick={this.handleRegisterButtonClick}
                                        />
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Form>
                            <br />
                        </div >
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={4} sm={3}></ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container>
        )
    }
}

export default withRouter(Login);