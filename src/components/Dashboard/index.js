import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TasksCompleted from "../../common/widgets/TasksCompleted";
import LatestTasks from "../../common/widgets/LatestTasks";

import "./style.scss";
import TasksChart from "../../common/widgets/TasksChart";
import TasksList from "../TasksList";

class Dashboard extends Component {
  render() {
    return (<div className="dashboard-wrapper">
      <Grid container
        verticalAlign="middle"
        justify="center"
        style={{ minHeight: "100vh" }}>
        <Grid.Row>
          <Grid.Column width={5} stretched={true}>
            <TasksCompleted />
          </Grid.Column>

          <Grid.Column width={5} stretched={true}>
            <LatestTasks />
          </Grid.Column>

          <Grid.Column width={5} stretched={true}>
            <TasksChart />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column verticalAlign="top" width={15}>
            <TasksList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div >)
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const DashboardComponent = compose(connect(mapStateToProps, mapDispatchToProps))(Dashboard);

export default DashboardComponent
