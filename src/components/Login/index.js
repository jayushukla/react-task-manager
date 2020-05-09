import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import "./style.scss";

class Login extends Component {

  handleClick() {

  }

  render() {
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
                  <input type="text" placeholder="Username" name="username" id="Id" />
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input type="password" placeholder="Name" name="password" id="password" />
                </div>
              </div>
              <Link to="/notask">
                <button type="button" name="submit" className="ui button">Login</button>
              </Link>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>)
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const LoginComponent = compose(connect(mapStateToProps, mapDispatchToProps))(Login);

export default LoginComponent
