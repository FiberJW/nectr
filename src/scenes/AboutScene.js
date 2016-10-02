import React, { Component } from 'react';

import DrawerNavLayout from '../components/DrawerNavLayout';
import Modal from '../components/Modal';
export default class AboutScene extends Component {
  render() {
    return (
      <DrawerNavLayout title="About" sceneId="about" navigator={this.props.navigator}>
      <Modal />
      </DrawerNavLayout>
    );
  }
}
