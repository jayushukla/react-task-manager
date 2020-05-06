import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Link } from "react-router-dom";

import "./style.scss";
import { Menu, Segment, Image, Grid, Dropdown, Icon } from 'semantic-ui-react'
import CTTContainer from '../CTTContainer';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = { activeItem: 'home' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted attached floated="left">
        <CTTContainer>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={3} floated='left'>
                <Image src={require('../../CTK_logo.png')} size='small' />
              </Grid.Column>
              <Grid.Column width={13} floated='right'>
                <Menu text inverted secondary floated='right'>
                  <Menu.Item
                    as={Link} to='/location'
                    name='Location'
                    active={activeItem === 'Location'}
                    onClick={this.handleItemClick}
                  >
                    <Icon size="small" name='map marker alternate' circular inverted color='grey' /> Location
                  </Menu.Item>
                  <Menu.Item
                    as={Link} to='/special-needs'
                    name='Special Needs'
                    active={activeItem === 'Special Needs'}
                    onClick={this.handleItemClick}
                  >
                    <Icon size="small" name='handicap' circular inverted color='grey' /> Special Needs
                  </Menu.Item>
                  <Menu.Item
                    as={Link} to='/cart'
                    name='Cart'
                    active={activeItem === 'Cart'}
                    onClick={this.handleItemClick}
                  >
                    <Icon size="small" name='cart' circular inverted color='grey' /> Cart
                  </Menu.Item>
                  <Menu.Item
                    as={Link} to='/my-account'
                    name='My Account'
                    active={activeItem === 'My Account'}
                    onClick={this.handleItemClick}
                  >
                    <Icon size="small" name='user' circular inverted color='grey' /> My Account
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Dropdown item icon='bars'>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link} to='/flights'
                        >
                          Flights
                        </Dropdown.Item>
                        <Dropdown.Item>Hotels</Dropdown.Item>
                        <Dropdown.Item>Events</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </CTTContainer>
      </Segment>
    )
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const EnhancedComponent = compose(connect(mapStateToProps, mapDispatchToProps))(Header);

export default EnhancedComponent
