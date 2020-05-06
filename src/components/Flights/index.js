import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Input, Divider, List, Icon, Label, Segment, Tab } from "semantic-ui-react";

import "./style.scss";
import CTTContainer from "../../common/CTTContainer";
import OneWayForm from "./OneWayForm";
import ReturnForm from "./ReturnForm";
import MiltiCityForm from "./MiltiCityForm";

class Flights extends Component {
  constructor(props){
    super(props)
    this.state = { 
      selectedService: '',
      selectedSearchFlightTab: 1,
      flightTabs: [
        {
          menuItem: 'One Way',
          render: () => <OneWayForm />,
        },
        {
          menuItem: 'Return',
          render: () => <ReturnForm />,
        },
        {
          menuItem: 'Multi-City',
          render: () => <MiltiCityForm />,
        },
      ]
    }
  }

  handleItemClick = (e, { name }) => this.setState({ selectedService: name })
  render() {
    const { selectedService, flightTabs, selectedSearchFlightTab } = this.state;

    return (<div className="flight-wrapper light-transparent">
      <CTTContainer>
        <Input action={{
          color: 'red',
          content: 'Search'}}  fluid placeholder='Looking for a specific event, travel or accomodation?' />
      </CTTContainer>
      <Divider />
      <CTTContainer attr={{textAlign: 'center'}}>
        <List className="cct-services-menu">
          <List.Item></List.Item>
          <List.Item
            name='Flights'
            active={selectedService === 'Flights'}
            onClick={this.handleItemClick}
          >
            <div className="icon-holder">
              <Icon name='plane' className="rotated-45" size="big" />
            </div>
            <span>Flights</span>
          </List.Item>
          <List.Item
            name='Buses'
            active={selectedService === 'Buses'}
            onClick={this.handleItemClick}
          >
            <div className="icon-holder">
              <Icon name='bus' size="big" />
            </div>
            <span>Buses</span>
          </List.Item>
          <List.Item
            name='Cars'
            active={selectedService === 'Cars'}
            onClick={this.handleItemClick}
          >
            <div className="icon-holder">
              <Icon name='car' size="big" />
            </div>
            <span>Cars</span>
          </List.Item>
          <List.Item
            name='Accomodation'
            active={selectedService === 'Accomodation'}
            onClick={this.handleItemClick}
          >
            <div className="icon-holder">
              <Icon name='bed' size="big" />
            </div>
            <span>Accomodation</span>
          </List.Item>
          <List.Item
            name='Packages'
            active={selectedService === 'Packages'}
            onClick={this.handleItemClick}
          >
            <div className="icon-holder">
              <Icon name='home' size="big" />
            </div>
            <span>Packages</span>
          </List.Item>
          <List.Item
            name='Bundles'
            active={selectedService === 'Bundles'}
            onClick={this.handleItemClick}
          >
            <div className="icon-holder">
              <Icon name='home' size="big" />
            </div>
            <span>Bundles</span>
          </List.Item>
          <List.Item></List.Item>
        </List>
      </CTTContainer>
      <Divider />
      {selectedService === '' && <CTTContainer attr={{textAlign: 'center'}}>
        <span>We think you are in <span className="red">Cape Town</span>. is this correct? <span className="red"><a>Yes</a> / <a>No</a></span></span>
      </CTTContainer>}
      <CTTContainer>
        {selectedService === 'Flights' && <Tab menu={{ text: true }} className="search-flight-options-tab" onTabChange={(event, data) => this.setState({selectedSearchFlightTab: data.activeIndex})} activeIndex={selectedSearchFlightTab} panes={flightTabs} />}
      </CTTContainer>
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
