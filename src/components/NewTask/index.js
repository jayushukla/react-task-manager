import React from "react";
import { Grid } from 'semantic-ui-react'

import "./style.scss";

export default function NewTask() {

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
            <button type="button" name="submit" className="ui button">+ New Task</button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>)
}
