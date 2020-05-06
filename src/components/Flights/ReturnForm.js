import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Segment, Input, Grid, Form } from "semantic-ui-react";

import "./style.scss";

class ReturnForm extends Component {

  render() {
    return (
      <div className="flights-return-wrapper">
        <Form>
          <Form.Group widths='equal'>
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='From' />
            <Form.Input icon='plane' className='br-t-r' fluid iconPosition='left' placeholder='To' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input icon='calendar alternate outline' fluid iconPosition='left' placeholder='Departure Date' />
            <Form.Input icon='calendar alternate outline' fluid iconPosition='left' placeholder='Return Date' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input icon='money bill alternate outline' className='br-b-l' fluid iconPosition='left' placeholder='Preferred Class' />
            <Form.Input icon='user outline' fluid iconPosition='left' placeholder='1 Adults' />
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

const EnhancedComponent = compose(connect(mapStateToProps, mapDispatchToProps))(ReturnForm);

export default EnhancedComponent
