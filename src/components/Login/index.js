import React, { useState } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Grid } from 'semantic-ui-react';
import { doLogin } from 'store/auth/auth.actions';

import "./style.scss";

function Login(props) {
  const [loginDetails, setLoginDetails] = useState({ apiKey: '', name: '' });
  const handleSubmit = () => {
   props._doLogin(loginDetails)
  };
  const setState = (e, updateFor) => {
    const val = e.target.value;
    setLoginDetails(prevState => {
      return { ...prevState, [updateFor]: val };
    });
  };
  return (<div className="home-wrapper">
    <Grid container
      spacing={0}
      centered={true}
      verticalAlign="middle"
      justify="center"
      style={{ minHeight: "100vh" }}>
      <Grid.Row>
        <Grid.Column width={5}>
          <div className="ui form login-container">
            <h4 className="header">Login</h4>
            <div className="field">
              <div className="ui icon input">
                <input type="text" onChange={(e) => setState(e, 'name')} placeholder="Name" name="username" id="Id" />
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="password" onChange={(e) => setState(e, 'apiKey')} placeholder="Password" name="password" id="password" />
              </div>
            </div>
            <button type="button" onClick={() => handleSubmit()} name="submit" className="ui button">Login</button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>)
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (action) => {
  return {
    _doLogin: (param) => action(doLogin(param))
  }
};

const LoginComponent = compose(connect(mapStateToProps, mapDispatchToProps))(Login);

export default LoginComponent
