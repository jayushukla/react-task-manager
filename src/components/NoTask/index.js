import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom";

import "./style.scss";

class NoTask extends Component {

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
            <div className="ui form no-task-container">
              <h4 className="no-task">You have no task</h4>
              <Link to="/newtask">
                <button type="button" onClick={this.handleClick} name="submit" className="ui button">+ New Task</button>
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

const NoTaskComponent = compose(connect(mapStateToProps, mapDispatchToProps))(NoTask);

export default NoTaskComponent
