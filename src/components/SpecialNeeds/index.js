import React, { Component }  from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';

import "./style.scss";

class Flights extends Component {
  render(){
  return (<div className="special-needs-wrapper">
    <h3>SPECIAL NEEDS PAGE</h3>
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

const EnhancedComponent = compose(connect(mapStateToProps, mapDispatchToProps))(Flights);

export default EnhancedComponent
