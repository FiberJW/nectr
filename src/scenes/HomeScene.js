import React, { Component } from 'react';

import DrawerNavLayout from '../components/DrawerNavLayout';
import Feed from '../components/Feed';

export default class HomeScene extends Component {
  render() {
    return (
      <DrawerNavLayout navigator={this.props.navigator} title="Feed" sceneId="home">
        <Feed />
      </DrawerNavLayout>
    );
  }
}
