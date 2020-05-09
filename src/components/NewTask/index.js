import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import "./style.scss";

class NewTask extends Component {

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
            <div className="ui form new-task-container">
              <h4 className="task-label">+ New Task</h4>
              <input type="text" placeholder="Task Name" name="username" id="Id" />
              <Link to="/dashboard">
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

const NewTaskComponent = compose(connect(mapStateToProps, mapDispatchToProps))(NewTask);

export default NewTaskComponent
