import React, { Component }  from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';

import "./style.scss";

class Flights extends Component {
  render(){
  return (<div className="notfound-wrapper">
    <h3>Sorry, we couldn't seem to find that page :(</h3>
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
