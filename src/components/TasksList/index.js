import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'recompose';
import "./style.scss";
import { Grid } from 'semantic-ui-react'
import NewTaskModal from '../../common/widgets/modal';
import { getAllTasks } from '../../store/task/task.actions';
export class TasksList extends Component
{

  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(props);
  }

  handleClick()
  {

  }

  render()
  {
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
                  {
                    this.props.tasksList && this.props.tasksList.tasks && this.props.tasksList.tasks.map((task, index) =>
                    {
                      return <li key={index}>
                        <input type="checkbox" className="hidden" />
                        <label className={task.isCompleted ? 'completed' : ''}>{task.name}</label>
                        <span className="actions">
                          <i className="pencil alternate icon"></i> <i className="trash icon"></i>
                        </span>
                      </li>
                    })
                  }
                </ul>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
    )
  }
}
const mapStateToProps = (state) =>
{
  return {
    tasksList: state.tasks
  };
};

const mapDispatchToProps = (action) =>
{
  return {
    _getAllTasks: (param) => action(getAllTasks(param))
  }
};

const TasksListComponent = compose(connect(mapStateToProps, mapDispatchToProps))(TasksList);

export default TasksListComponent;