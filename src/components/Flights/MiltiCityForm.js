import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Segment, Grid, Form, Icon } from "semantic-ui-react";

import "./style.scss";

class MiltiCityForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      moreCity: []
    }
  }

  addMoreCity = (e) => {
    const { moreCity } = this.state;
    moreCity.push({
      from: '',
      to: '',
      departureDate: ''
    });
    this.setState({moreCity: moreCity});
  }

  removeSearchCity = (index) => {
    console.log(index)
    let { moreCity } = this.state;
    moreCity.splice(index, 1);
    this.setState({moreCity: moreCity});
  }
  render() {
    return (
      <div className="flights-multicity-wrapper">
        <Form>
          <Form.Group widths='equal'>
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='From' />
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='To' />
            <Form.Input icon='calendar alternate outline' className='br-t-r' fluid iconPosition='left' placeholder='Departure Date' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='From' />
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='To' />
            <Form.Input icon='calendar alternate outline' fluid iconPosition='left' placeholder='Departure Date' />
          </Form.Group>
          {this.state.moreCity.map((searchAdd, index)=> <Form.Group key={index} widths='equal'>
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='From' />
            <Form.Input icon='plane' fluid iconPosition='left' placeholder='To' />
            <Form.Input icon='calendar alternate outline'fluid iconPosition='left' placeholder='Departure Date' />
            <span className='remove-city-from-search' onClick={() => this.removeSearchCity(index)}><Icon color='red' name='close' /></span>
          </Form.Group>)}
          <Form.Group widths='equal'>
            <Form.Input icon='money bill alternate outline' className='br-b-l' fluid iconPosition='left' placeholder='Preferred Class' />
            <Form.Input icon='user outline' fluid iconPosition='left' placeholder='1 Adults' />
            <Form.Input icon='user outline' fluid iconPosition='left' placeholder='0 Children' />
            <Form.Input icon='users' className='br-b-r' fluid iconPosition='left' placeholder='0 Infants' />
          </Form.Group>
          <div className='add-more-cities'><span onClick={this.addMoreCity}>+ Add more flights</span></div>
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

const EnhancedComponent = compose(connect(mapStateToProps, mapDispatchToProps))(MiltiCityForm);

export default EnhancedComponent
