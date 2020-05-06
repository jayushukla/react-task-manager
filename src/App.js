import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from "react-router-dom";
import Routes from "./routes";

import Header from './common/Header'

import './App.scss';

class App extends Component {
	render() {
		const {
			history
		} = this.props;

		const childProps = {
			history
    };
    
		return (<>
				<Header />
				<div className="app-container">
					<Routes childProps={childProps} />
				</div>
			</>);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

const EnhancedComponent = compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);

export default EnhancedComponent
