import React, { Component } from 'react';

import DrawerNavLayout from '../components/DrawerNavLayout';

export default class HomeScene extends Component {
  render() {
    return (
      <DrawerNavLayout navigator={this.props.navigator} title="Feed" sceneId="home" />
    );
  }
}
