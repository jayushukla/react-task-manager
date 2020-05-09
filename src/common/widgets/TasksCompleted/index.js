import React, { Component } from "react";

import "./style.scss";
import { Grid } from "semantic-ui-react";

export default class TasksCompleted extends Component {
	render() {
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<div className="task-status-wrapper">
							<h4 className="task-completed">Tasks Completed</h4>
							<div>
								<span className="num-completed">
									5<span className="num-total">/ 20</span>
								</span>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
