import React, { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { compose } from 'recompose';
import { Grid } from 'semantic-ui-react';
import { doLogin, doNavigate, _setUserSession } from '../../store/auth/auth.actions';

import "./style.scss";

function Login(props) {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({ apiKey: '', name: '' });
  const userData = localStorage && localStorage.getItem('userData');

  const handleSubmit = () => {
    dispatch(doLogin(loginDetails));
  };

  const handleChange = (e, updateFor) => {
    const val = e.target.value;
    setLoginDetails(prevState => {
      return { ...prevState, [updateFor]: val };
    });
  };

  if (userData && props.auth.url === '/') {
    console.log("calling do navitae");
    dispatch(doNavigate('/dashboard'));
  }

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
                <input type="text" onChange={(e) => handleChange(e, 'name')} placeholder="Name" name="username" id="Id" />
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="password" onChange={(e) => handleChange(e, 'apiKey')} placeholder="Password" name="password" id="password" />
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

const LoginComponent = compose(connect(mapStateToProps))(Login);

export default LoginComponent
