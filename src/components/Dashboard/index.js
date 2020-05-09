import React, { Component } from "react";
import { Grid } from 'semantic-ui-react';
import TasksCompleted from "../../common/widgets/TasksCompleted";
import LatestTasks from "../../common/widgets/LatestTasks";

import "./style.scss";
import TasksChart from "../../common/widgets/TasksChart";
import TasksList from "../TasksList";

export default function Dashboard() {
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
