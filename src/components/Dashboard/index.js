import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import TasksCompleted from "../../common/widgets/TasksCompleted";
import LatestTasks from "../../common/widgets/LatestTasks";

import "./style.scss";
import TasksChart from "../../common/widgets/TasksChart";
import TasksList from "../TasksList";

export default function Dashboard() {
	return (
		<div className="dashboard-wrapper">
			<Grid container justify="center">
				<Grid.Row className="grid-row">
					<Grid.Column width={5} className="item">
						<TasksCompleted />
					</Grid.Column>

					<Grid.Column width={5} className="item">
						<LatestTasks />
					</Grid.Column>

					<Grid.Column width={5} className="item">
						<TasksChart />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row className="item">
					<Grid.Column verticalAlign="top" width={15} stretched={true}>
						<TasksList />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
