import React, { Component } from 'react'

import "./style.scss";
import { Grid } from 'semantic-ui-react'
import NewTaskModal from '../../common/widgets/modal';

export default class TasksList extends Component {

  handleClick() {

  }

  render() {
    return (
      <div className="task-lists">
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} verticalAlign="middle">
              <h4 className="task-header">Tasks</h4>
            </Grid.Column>

            <Grid.Column width={8} verticalAlign="middle" textAlign="right">
              <span className="task-search ui form">
                <input type="text" placeholder="Search by task name" />

                <NewTaskModal />
              </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column verticalAlign="top">
              <div className="container">
                <ul className="tasks ui checkbox">
                  <li>
                    <input type="checkbox" className="hidden" />
                    <label>Clean the room</label>
                    <span className="actions">
                      <i className="pencil alternate icon"></i> <i className="trash icon"></i>
                    </span>
                  </li>
                  <li>
                    <input type="checkbox" className="hidden" />
                    <label>Buy Some vegatables</label>
                    <span className="actions">
                      <i className="pencil alternate icon"></i> <i className="trash icon"></i>
                    </span>
                  </li>
                  <li>
                    <input type="checkbox" className="hidden" />
                    <label className="completed">Complete React App</label>
                    <span className="actions">
                      <i className="pencil alternate icon"></i> <i className="trash icon"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
    )
  }
}

