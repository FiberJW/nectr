import React, { Component } from 'react';

import DrawerNavLayout from '../components/DrawerNavLayout';

export default class SearchScene extends Component {
  render() {
    return (
      <DrawerNavLayout title="Search" sceneId="search" navigator={this.props.navigator}>

      </DrawerNavLayout>
    );
  }
}
