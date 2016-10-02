import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import DrawerItem from './DrawerItem.js'

export default class DrawerNavView extends Component {
  render() {
    return (
      <ScrollView>
        {
          this.props.drawerContent.map((data, i) => <DrawerItem toggleDrawer={this.props.toggleDrawer} navigator={this.props.navigator} parentSceneId={this.props.sceneId} key={i} {...data} />)
        }
      </ScrollView>
    )
  }
}
