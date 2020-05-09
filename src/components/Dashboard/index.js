import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';

import "./style.scss";

class Dashboard extends Component {
  render() {
    return (<div className="my-account-wrapper">
      <h3>MY ACCOUNT PAGE</h3>
      <div>[NEED SOMETHING MORE CREATIVE]</div>
    </div>)
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
