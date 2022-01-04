import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import * as Constants from './Utilities/Constants';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    document.title = Constants.PROJECT_NAME;
  }

  render() {
    return (
      <Router>
        <Route exact path='/' component={Login}></Route>
        <Route exact path={Constants.LOGIN_ROUTE} component={Login}></Route>
        <Route exact path={Constants.REGISTER_ROUTE} component={Register}></Route>
      </Router>
    );
  }
}
export default App;
