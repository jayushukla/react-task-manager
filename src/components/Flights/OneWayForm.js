import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Segment, Grid, Form } from "semantic-ui-react";

import "./style.scss";

class OneWayForm extends Component {

  render() {
    return (
      <div className="flights-one-way-wrapper">
        <Form>
          <Form.Group widths='equal'>
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='From' />
            <Form.Input icon='plane' className='br-t-r' fluid iconPosition='left' placeholder='To' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input icon='calendar alternate outline' fluid iconPosition='left' placeholder='Departure Date' />
            <Form.Input icon='money bill alternate outline' fluid iconPosition='left' placeholder='Preferred Class' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input icon='user outline' fluid className='br-b-l' iconPosition='left' placeholder='1 Adults' />
            <Form.Input icon='user outline' fluid iconPosition='left' placeholder='0 Children' />
            <Form.Input icon='users' className='br-b-r' fluid iconPosition='left' placeholder='0 Infants' />
          </Form.Group>
          <Form.Group className='cct-button-group'>
            <Form.Button type="submit" className="br-t-l br-b-l" color='red'>Search</Form.Button>
            <Form.Button  className="br-t-r br-b-r" color='grey'>Clear All</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const EnhancedComponent = compose(connect(mapStateToProps, mapDispatchToProps))(OneWayForm);

export default EnhancedComponent
