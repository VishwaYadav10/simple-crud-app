import React, { Component } from 'react';
import * as Constants from '../Utilities/Constants';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';
import MaterialTextField from './MaterialTextField';
import MaterialButton from './MaterialButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from '@material-ui/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ArrowBack } from '@material-ui/icons';
import { withRouter } from 'react-router';

class Register extends Component {

    constructor() {

        super();

        this.state = {
            usernameTextFieldLabel: Constants.USERNAME_LABEL,
            passwordtTextFieldLabel: Constants.PASSWORD_LABEL,
            confirmPasswordTextFieldLabel: Constants.CONFIRM_PASSWORD_LABEL,
            usernameTextFieldValue: "",
            passwordTextFieldValue: ""
        }
    }

    handleBackButtonClick = () => {
        this.props.history.push(Constants.LOGIN_ROUTE);
    }

    handleRegisterSubmit = () => {
        CommunicationUtil.callGetService("https://simple-crud-app-backend-v2-neibu.ondigitalocean.app/api/fetchAll",
            this.handleRegisterButtonClickSuccess, this.handleRegisterButtonClickFailure)
    }

    handleRegisterButtonClickSuccess = _response => {
        console.log(_response);
    }

    handleRegisterButtonClickFailure = _response => {
        console.log(_response);
    }

    render() {
        return (
            <ReactBootstrap.Container fluid className='main-container'>
                <ReactBootstrap.Row style={{ marginTop: '10%' }}>
                    <ReactBootstrap.Col md={4} sm={3}></ReactBootstrap.Col>
                    <ReactBootstrap.Col md={4} sm={6} xs={12}>
                        <div className="login-register-container">
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col xs={1}></ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={1} style={{ marginTop: '6.5%' }}>
                                    <IconButton style=
                                        {
                                            {
                                                color: "#6A62D2",
                                                backgroundColor: "#fff",
                                                transform: "scale(0.7)",
                                                // marginTop: "20%",
                                                // border: "2px solid #6A62D2"
                                            }
                                        }
                                        onClick={this.handleBackButtonClick}
                                    >
                                        <ArrowBack />
                                    </IconButton>
                                </ReactBootstrap.Col>
                                <ReactBootstrap.Col xs={10} style={{ marginTop: "10%", textAlign: "left", paddingLeft: "35px" }}>
                                    <h6><b className="form-header">CREATE YOUR ACCOUNT</b></h6>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>

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

                                <MaterialTextField
                                    key={this.state.confirmPasswordTextFieldLabel}
                                    label={this.state.confirmPasswordTextFieldLabel}
                                    type="password"
                                    onChange={this.handlePasswordInput}
                                />
                                <br />

                                {/* <ReactBootstrap.Row style={{ marginLeft: "15%", marginRight: "15%" }}>
                                    <ReactBootstrap.Col md={6}>
                                        <MaterialButton
                                            className="login-page-button"
                                            label="Back to Login"
                                            buttonIcon=
                                            {
                                                // <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 10 }} />
                                                <ArrowBack />
                                            }
                                            variant="outlined"
                                            onClick={this.handleRegisterButtonClick}
                                        />
                                    </ReactBootstrap.Col>

                                    <ReactBootstrap.Col md={6}>
                                        <MaterialButton
                                            className="login-page-button"
                                            label="Sign Up"
                                            buttonIcon=
                                            {
                                                <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 10 }} />
                                            }

                                        />
                                    </ReactBootstrap.Col>
                                </ReactBootstrap.Row> */}

                                <ReactBootstrap.Row>
                                    {/* <ReactBootstrap.Col xs={5} style={{ textAlign: "right", marginTop: "4%" }}>
                                        <IconButton style=
                                            {
                                                {
                                                    color: "#6A62D2",
                                                    backgroundColor: "#fff",
                                                    transform: "scale(0.7)",
                                                    // marginTop: "10%",
                                                    border: "2px solid #6A62D2"
                                                }
                                            }
                                            onClick={this.handleBackButtonClick}
                                        >
                                            <ArrowBack />
                                        </IconButton>
                                    </ReactBootstrap.Col> */}

                                    <ReactBootstrap.Col xs={12} style={{}}>
                                        <MaterialButton
                                            type="button"
                                            className="register-page-button"
                                            label="Sign Up"
                                            buttonIcon={<FontAwesomeIcon icon={faUserPlus} style={{ fontSize: 10 }} />}
                                            width="120px"
                                            onClick={this.handleRegisterSubmit}
                                        />
                                    </ReactBootstrap.Col>

                                </ReactBootstrap.Row>
                            </ReactBootstrap.Form>
                            <br />
                        </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={4} sm={3}></ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Container >
        )
    }
}

export default withRouter(Register);