import React, { Component } from 'react'

import "./style.scss";
import { Grid } from 'semantic-ui-react'

export default class CTTContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12} {...this.props.attr}>
              {this.props.children}
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

